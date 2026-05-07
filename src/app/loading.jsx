export default function Loading() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <section className="w-full rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/15 border-t-orange-400" />
          </div>

          <div className="mt-6 space-y-3">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Loading
            </h1>
            <p className="mx-auto max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              Preparing the page with the same dark slate and orange theme.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400 [animation-delay:-0.3s]" />
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400 [animation-delay:-0.15s]" />
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />
          </div>
        </section>
      </div>
    </main>
  );
}
