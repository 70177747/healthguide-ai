export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-lg space-y-4">
        <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
          AI Health Assistant
        </span>
        <h1 className="text-4xl font-bold text-slate-900">HealthGuide AI</h1>
        <p className="text-lg text-slate-600">
          Understand Your Health. Make Informed Decisions.
        </p>
        <p className="text-sm text-slate-400">
          Educational health information — not a doctor, diagnostic tool, or emergency service.
        </p>
      </div>
    </main>
  );
}
