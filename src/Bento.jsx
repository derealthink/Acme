import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const showcaseSlides = [
  {
    id: 'preview-1',
    label: 'Editorial launch pad',
    description: 'Clean hierarchy and bold serif headlines that keep content front and center.',
  },
  {
    id: 'preview-2',
    label: 'Product spotlight',
    description: 'Hero storytelling with responsive layouts and refined card clusters.',
  },
  {
    id: 'preview-3',
    label: 'Boutique studio',
    description: 'Warm textures, soft gradients, and tactile details for a handmade feel.',
  },
  {
    id: 'preview-4',
    label: 'Service hub',
    description: 'Structured grids and purposeful whitespace designed for conversion-focused founders.',
  },
]

function ShowcaseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: false, containScroll: 'trimSnaps' })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="w-full">
      <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_40px_80px_rgba(15,23,42,0.12)] sm:p-10">
        <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Featured work</p>
            <h3 className="mt-1 text-3xl font-semibold text-slate-900 sm:text-4xl">We build modern, good-looking websites fast</h3>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-[30px] bg-slate-50 p-6">
          <div className="embla" ref={emblaRef}>
            <div className="flex gap-8 py-3">
              {showcaseSlides.map((slide) => (
                <article
                  key={slide.id}
                  className="min-w-[420px] flex-0 rounded-[32px] border border-white/60 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_rgba(15,23,42,0.2)] sm:min-w-[520px] lg:min-w-[560px]"
                >
                  <div className="h-56 w-full rounded-3xl bg-gradient-to-br from-rose-100 via-white to-amber-100 shadow-inner" />
                  <div className="mt-6 space-y-3">
                    <h4 className="text-2xl font-semibold text-slate-900">{slide.label}</h4>
                    <p className="text-sm leading-relaxed text-slate-600">{slide.description}</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                    <span>Preview</span>
                    <span>Touch-friendly</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {showcaseSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`h-2.5 w-12 rounded-full transition ${selectedIndex === idx ? 'bg-rose-600' : 'bg-slate-300/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default function Bento() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-slate-50 py-24 sm:py-32">
      <div className="mx-auto flex w-full flex-col items-center px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">Portfolio showcase</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          We build modern, good-looking websites fast
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          These placeholder previews hint at the systems we deliver—tight typography, subtle motion, and layouts that highlight content
          while keeping brands in premium control.
        </p>
        <div className="mt-12 w-full">
          <ShowcaseCarousel />
        </div>
      </div>
    </section>
  )
}
