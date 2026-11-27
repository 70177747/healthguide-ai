export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-slate-900">
      <div className="max-w-xl space-y-4">
        <span className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
          Phase 1 Setup Ready
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          HealthGuide AI
        </h1>
        <p className="text-base text-slate-600">
          Understand Your Health. Make Informed Decisions.
        </p>
        <p className="text-sm text-slate-500">
          Educational health-information assistant — not a doctor, diagnostic
          tool, or emergency service.
        </p>
      </div>
    </main>
  );
}
