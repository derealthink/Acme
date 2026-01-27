const faqs = [
  {
    question: 'How soon can we launch after choosing a package?',
    answer:
      'We typically send the questionnaire within 24 hours; once we have your answers and assets, the first draft is ready within 5 business days.',
  },
  {
    question: 'Is hosting included in the price?',
    answer: 'Hosting is not included so you can keep the provider you already trust. We handle deployment and can recommend managed solutions if you prefer.',
  },
  {
    question: 'How many revisions are part of the package?',
    answer: 'Starter has two feedback rounds baked in, while Business grants additional review sessions and launch coaching without adding surprise charges.',
  },
  {
    question: 'Can we upgrade from Starter to Business later?',
    answer: 'Absolutely. We can extend your scope with additional SEO, analytics, or premium integrations while keeping your foundation intact.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">FAQ</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Answers that keep things clear</h2>
          <p className="mt-3 text-lg text-slate-600">
            Get a clear sense of what to expect from the process, the deliverables, and the timeline before you click the
            button.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[28px] border border-slate-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm/6 text-slate-600 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
