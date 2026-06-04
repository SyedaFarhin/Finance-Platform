import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinFlow - Smart Financial Management",
  description: "AI-powered financial management platform for smart money decisions",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gradient-to-r from-sky-50 to-emerald-50 border-t border-slate-200 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">FinFlow</h3>
                  <p className="text-sm text-slate-600">Smart financial management powered by AI</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li><a href="#features" className="hover:text-sky-700">Features</a></li>
                    <li><a href="#testimonials" className="hover:text-sky-700">Testimonials</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li><a href="#" className="hover:text-sky-700">Help Center</a></li>
                    <li><a href="#" className="hover:text-sky-700">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li><a href="#" className="hover:text-sky-700">Privacy</a></li>
                    <li><a href="#" className="hover:text-sky-700">Terms</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-8 text-center text-slate-600">
                <p>© 2026  FinFlow. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
