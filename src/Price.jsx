import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter Package',
    id: 'starter-package',
    accent: 'rose',
    badge: 'Launch-ready',
    price: '199€',
    payment: 'One-time payment',
    description:
      'A conversion-focused one pager with deployment services, two feedback rounds, and six months of assistance (hosting costs excluded).',
    features: [
      'One-pager website with premium typography and CTAs',
      '6 months of dedicated assistance after launch',
      'Two collaborative feedback rounds to polish every section',
      'Deployment setup so you can go live quickly (hosting not included)',
      'Hand-off guide with copy and asset recommendations',
    ],
    cta: 'Book starter call',
    featured: false,
  },
  {
    name: 'Business Package',
    id: 'business-package',
    accent: 'amber',
    badge: 'Most popular',
    price: '249€',
    payment: 'One-time payment',
    description:
      'Everything in Starter, plus SEO optimization, launch coaching, and strategic insights to keep the site growing for months.',
    features: [
      'Includes everything in the Starter Package',
      'SEO optimization and keyword tuning before launch',
      'Priority review sessions and launch coaching',
      'Performance checklist with analytics & tracking setup',
      'Content refresh, CMS training, and future-proof recommendations',
    ],
    cta: 'Book business call',
    featured: true,
  },
]

const accentStyles = {
  rose: {
    ring: 'ring-rose-200/80',
    gradient: 'bg-gradient-to-br from-rose-500/70 via-rose-400/40 to-amber-100/40',
    text: 'text-rose-600',
    icon: 'text-rose-500',
    button:
      'bg-rose-600 text-white hover:bg-rose-500 focus-visible:outline-rose-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500',
    badge: 'bg-rose-50 text-rose-600',
  },
  amber: {
    ring: 'ring-amber-200/70',
    gradient: 'bg-gradient-to-br from-amber-400/90 via-amber-300/40 to-rose-50/40',
    text: 'text-amber-600',
    icon: 'text-amber-500',
    button:
      'bg-amber-500 text-white hover:bg-amber-400 focus-visible:outline-amber-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500',
    badge: 'bg-amber-50 text-amber-600',
  },
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">Transparent pricing</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Clear packages that match your launch energy
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Choose the right fit, pay once, and keep working with us for months thanks to included guidance. Hosting is
          separate, so you stay in control of the platform you love.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
        {tiers.map((tier) => {
          const accent = accentStyles[tier.accent]
          return (
            <article
              key={tier.id}
              className={classNames(
                'relative overflow-hidden rounded-[2.5rem] border bg-white/80 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.15)] ring-1',
                accent.ring,
                tier.featured ? 'shadow-[0_35px_120px_rgba(249,115,22,0.15)]' : 'shadow-xl',
              )}
            >
              <div
                className={classNames(
                  'absolute inset-x-6 -top-6 h-32 rounded-[1.8rem] opacity-90 blur-[55px]',
                  accent.gradient,
                )}
                aria-hidden="true"
              />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id={tier.id} className="text-2xl font-semibold text-slate-900">
                    {tier.name}
                  </h3>
                  <span className={classNames('rounded-full px-3 py-1 text-xs font-semibold tracking-wide', accent.badge)}>
                    {tier.badge}
                  </span>
                </div>
                <div className="flex items-baseline gap-x-3">
                  <span className="text-4xl font-semibold tracking-tight text-slate-900">{tier.price}</span>
                  <span className="text-sm uppercase tracking-[0.3em] text-slate-500">{tier.payment}</span>
                </div>
                <p className="text-sm text-slate-600">{tier.description}</p>
                <ul className="space-y-4 text-sm text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className={classNames(accent.icon, 'h-6 w-5 flex-none')} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={classNames(
                    'w-full rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition',
                    accent.button,
                  )}
                >
                  {tier.cta}
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
