// Force Node runtime and lazily import Inngest and function handlers at request time to avoid
// pulling the full SDK into the RSC build step.
export const runtime = "nodejs";
export async function GET(req) {
  const { serve } = await import("inngest/next");
  const { inngest } = await import("@/lib/inngest/client");
  const funcs = await import("@/lib/inngest/function");

  const handlers = serve({
    client: inngest,
    functions: [
      funcs.processRecurringTransaction,
      funcs.triggerRecurringTransactions,
      funcs.generateMonthlyReports,
      funcs.checkBudgetAlerts,
    ],
  });

  return handlers.GET(req);
}

export async function POST(req) {
  const { serve } = await import("inngest/next");
  const { inngest } = await import("@/lib/inngest/client");
  const funcs = await import("@/lib/inngest/function");

  const handlers = serve({
    client: inngest,
    functions: [
      funcs.processRecurringTransaction,
      funcs.triggerRecurringTransactions,
      funcs.generateMonthlyReports,
      funcs.checkBudgetAlerts,
    ],
  });

  return handlers.POST(req);
}

export async function PUT(req) {
  const { serve } = await import("inngest/next");
  const { inngest } = await import("@/lib/inngest/client");
  const funcs = await import("@/lib/inngest/function");

  const handlers = serve({
    client: inngest,
    functions: [
      funcs.processRecurringTransaction,
      funcs.triggerRecurringTransactions,
      funcs.generateMonthlyReports,
      funcs.checkBudgetAlerts,
    ],
  });

  return handlers.PUT(req);
}
