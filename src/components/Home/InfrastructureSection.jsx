export default function InfrastructureSection() {
  return (
    <section className="bg-base-200 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <article className="group relative overflow-hidden rounded-[10px] lg:col-span-2 lg:row-span-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjxpVOHr-Gx66sUy8Gj4aMzzrcqHqJTWFVVXOc4BeCRZcowcTBZpBYB8rugVqOjUx3rYLgIZan2BwYSkoKW2oKZ8R8-38U2H75YqHJWWjn6URdS8lZvMYc4Qeomm2tUTdK-2BNJd6o6F1tYWsENdEfA5l8loitTH4MoQCkwhoDyVJ-SRPhyPgykmgKt3PLtIs4oARLbdPWpcKG93uWcv4TNPfvh9kI5HNob4KGb-hdZ6vUYPzHEFsnsxRvB8Px2Vmh9n6BdA6MjbY"
              alt="Data analytics dashboard"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-base-content/80 via-base-content/20 to-transparent" />
            <div className="relative flex h-full min-h-96 flex-col justify-end p-8 text-base-100 md:p-10">
              <h3 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
                Scalable Infrastructure
              </h3>
              <p className="mt-3 max-w-lg text-base leading-7 text-base-100/80">
                Building foundations that handle tomorrow&apos;s traffic today.
              </p>
            </div>
          </article>

          <article className="rounded-[10px] bg-base-100 p-8 text-center shadow-lg shadow-black/5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[10px] bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M4 12h7V4h2v8h7v2h-7v8h-2v-8H4v-2Z" />
              </svg>
            </div>
            <h4 className="mt-6 text-2xl font-semibold tracking-tight text-base-content">
              Fast Deployment
            </h4>
            <p className="mt-3 text-base leading-7 text-base-content/70">
              From concept to production in record time without compromising
              quality.
            </p>
          </article>

          <article className="brand-gradient rounded-[10px] p-8 text-primary-content brand-shadow">
            <h4 className="text-2xl font-semibold tracking-tight">
              Global Impact
            </h4>
            <p className="mt-3 text-base leading-7 text-primary-content/90">
              Supporting clients across 15+ countries with localized digital
              strategies.
            </p>

            <div className="mt-6 flex -space-x-2">
              <span className="h-10 w-10 rounded-full border-2 border-primary-content bg-primary-content/20" />
              <span className="h-10 w-10 rounded-full border-2 border-primary-content bg-primary-content/35" />
              <span className="h-10 w-10 rounded-full border-2 border-primary-content bg-primary-content/50" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
