const steps = [
  {
    title: 'Choose a style & plan',
    description: 'Pick the aesthetic that matches your brand and settle on one of our starter or business packages.',
  },
  {
    title: 'Answer a short business questionnaire',
    description: 'Tell us about your audience, goals, and tone so every section reflects your strategy.',
  },
  {
    title: 'We generate & customize your site',
    description: 'We build, personalize, and deploy the one-pager with two feedback rounds and polished interactions.',
  },
  {
    title: 'Review → launch → done',
    description: 'Approve the final version, launch with deployment help, and keep six months of guidance within reach.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">How it works</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          A simple path from idea to launch
        </h2>
        <p className="mt-3 max-w-3xl text-center text-lg text-slate-600">
          Every step stays practical and collaborative so you understand what’s happening while we design and deploy your
          new presence.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="flex flex-col gap-3 rounded-[26px] border border-slate-100 bg-slate-50/60 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-center rounded-full bg-white/80 p-3 text-sm font-semibold tracking-[0.35em] text-rose-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
