import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Middleware entrypoint: dynamically import ArcJet at request-time so the
// ArcJet WASM/runtime isn't bundled into Server Component builds.
export async function middleware(req, ev) {
  const { default: arcjet, createMiddleware, detectBot, shield } = await import(
    "@arcjet/next"
  );

  const aj = arcjet({
    key: process.env.ARCJET_KEY,
    rules: [
      shield({ mode: "LIVE" }),
      detectBot({
        mode: "LIVE",
        allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
      }),
    ],
  });

  // Create base Clerk middleware (kept simple and identical to previous behavior)
  const clerk = clerkMiddleware(async (auth, req2) => {
    const { userId } = await auth();

    if (!userId && isProtectedRoute(req2)) {
      const { redirectToSignIn } = await auth();
      return redirectToSignIn();
    }

    return NextResponse.next();
  });

  const chained = createMiddleware(aj, clerk);
  return chained(req, ev);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
