'use client'

import CaretLeftIcon from '@/assets/icons/CaretLeft.svg'
import CaretRightIcon from '@/assets/icons/CaretRight.svg'
import CartIcon from '@/assets/icons/ShoppingCartSimple.svg'
import StarFillIcon from '@/assets/icons/star-fill.svg'
import ProductCard from '@/components/product-card'
import Dot from '@/components/ui/dot'
import { communityImages, products, testimonials } from '@/data/home'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

const useItemsPerPage = (desktopItems: number) => {
  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1280) setItemsPerPage(desktopItems)
      else if (window.innerWidth >= 1024) setItemsPerPage(Math.min(3, desktopItems))
      else if (window.innerWidth >= 640) setItemsPerPage(Math.min(2, desktopItems))
      else setItemsPerPage(1)
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)

    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [desktopItems])

  return itemsPerPage
}

const useInfinitePages = (itemCount: number, itemsPerPage: number) => {
  const pageCount = Math.max(1, Math.ceil(itemCount / itemsPerPage))
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    setActivePage((current) => Math.min(current, pageCount - 1))
  }, [pageCount])

  return {
    activePage,
    pageCount,
    goTo: setActivePage,
    previous: () => setActivePage((current) => (current - 1 + pageCount) % pageCount),
    next: () => setActivePage((current) => (current + 1) % pageCount),
  }
}

interface CarouselNavigationProps {
  label: string
  direction: 'previous' | 'next'
  onClick: () => void
  size?: 'small' | 'large'
}

const CarouselNavigation = ({
  label,
  direction,
  onClick,
  size = 'large',
}: CarouselNavigationProps) => {
  const Icon = direction === 'previous' ? CaretLeftIcon : CaretRightIcon

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex shrink-0 cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-everlane-500"
    >
      <Icon className={size === 'large' ? 'size-7 sm:size-10' : 'size-6'} />
    </button>
  )
}

interface CarouselDotsProps {
  activePage: number
  count: number
  label: string
  onChange: (page: number) => void
}

const CarouselDots = ({ activePage, count, label, onChange }: CarouselDotsProps) => (
  <div className="flex items-center justify-center gap-1 py-5" aria-label={label}>
    {Array.from({ length: count }, (_, index) => (
      <Dot
        key={index}
        active={index === activePage}
        aria-label={`Go to slide ${index + 1}`}
        onClick={() => onChange(index)}
      />
    ))}
  </div>
)

export const ProductsCarousel = ({
  data = products,
  dots = true,
  className,
}: ProductCarouselProps) => {
  const itemsPerPage = useItemsPerPage(4)
  const carousel = useInfinitePages(data.length, itemsPerPage)

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Everlane favorite products"
      className={className}
    >
      <div className="mb-7.5 flex w-full gap-1.5 sm:gap-3">
        <CarouselNavigation
          direction="previous"
          label="Show previous favorite products"
          onClick={carousel.previous}
        />
        <div className="min-w-0 flex-1 overflow-hidden">
          <div
            className="-mx-1.5 flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${carousel.activePage * 100}%)` }}
          >
            {data.map((product) => (
              <div
                key={product.id}
                className="min-w-0 shrink-0 basis-full px-1.5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard {...product} className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <CarouselNavigation
          direction="next"
          label="Show next favorite products"
          onClick={carousel.next}
        />
      </div>
      {dots && (
        <CarouselDots
          activePage={carousel.activePage}
          count={carousel.pageCount}
          label="Favorite product slides"
          onChange={carousel.goTo}
        />
      )}
    </div>
  )
}

export const TestimonialsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const testimonial = testimonials[activeSlide]
  const previous = () =>
    setActiveSlide((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveSlide((current) => (current + 1) % testimonials.length)

  return (
    <div aria-roledescription="carousel" aria-label="Customer testimonials">
      <div className="mb-7.5 flex w-full gap-2 sm:gap-5 lg:gap-10 xl:gap-18.5">
        <CarouselNavigation
          direction="previous"
          label="Show previous testimonial"
          onClick={previous}
          size="small"
        />
        <article className="min-w-0 flex-1" aria-live="polite">
          <div className="flex w-full flex-col gap-8 px-2 sm:px-6 md:flex-row md:items-center lg:gap-12 lg:px-10 xl:gap-18.5 xl:px-15.5">
            <div className="order-2 md:order-1 md:flex-1">
              <p className="mb-6 text-400 sm:mb-10">People Are Talking</p>
              <div className="mb-3.75 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarFillIcon key={index} className="size-3.5 shrink-0" aria-hidden="true" />
                ))}
              </div>
              <p className="display-100 mb-6 sm:mb-10">“{testimonial.quote}”</p>
              <p className="text-300">
                — {testimonial.author}, {testimonial.product}
              </p>
            </div>
            <Image
              key={testimonial.image}
              src={testimonial.image}
              alt={`${testimonial.author} wearing ${testimonial.product}`}
              className="order-1 aspect-4/5 w-full object-cover md:order-2 md:w-2/5 xl:w-100"
              width={400}
              height={500}
            />
          </div>
        </article>
        <CarouselNavigation
          direction="next"
          label="Show next testimonial"
          onClick={next}
          size="small"
        />
      </div>

      <CarouselDots
        activePage={activeSlide}
        count={testimonials.length}
        label="Testimonial slides"
        onChange={setActiveSlide}
      />
    </div>
  )
}

export const CommunityCarousel = () => {
  const itemsPerPage = useItemsPerPage(4)
  const carousel = useInfinitePages(communityImages.length, itemsPerPage)
  const slides = useMemo(
    () => communityImages.map((image, index) => ({ image, label: `Community look ${index + 1}` })),
    [],
  )

  return (
    <div aria-roledescription="carousel" aria-label="Everlane community looks">
      <div className="mb-7.5 flex w-full gap-1.5 sm:gap-4.5">
        <CarouselNavigation
          direction="previous"
          label="Show previous community looks"
          onClick={carousel.previous}
        />
        <div className="min-w-0 flex-1 overflow-hidden">
          <div
            className="-mx-1.5 flex transition-transform duration-500 ease-out motion-reduce:transition-none sm:-mx-2.25"
            style={{ transform: `translateX(-${carousel.activePage * 100}%)` }}
          >
            {slides.map(({ image, label }) => (
              <div
                key={image}
                className="min-w-0 shrink-0 basis-full px-1.5 sm:basis-1/2 sm:px-2.25 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={label}
                    fill
                    sizes="(min-width: 1280px) 25vw, 100vw"
                    className="object-cover"
                  />
                  <button
                    type="button"
                    aria-label={`Shop ${label}`}
                    className="absolute right-2.5 top-2.5 cursor-pointer rounded-full bg-white p-1.25"
                  >
                    <CartIcon className="size-5 shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CarouselNavigation
          direction="next"
          label="Show next community looks"
          onClick={carousel.next}
        />
      </div>
      <CarouselDots
        activePage={carousel.activePage}
        count={carousel.pageCount}
        label="Community look slides"
        onChange={carousel.goTo}
      />
    </div>
  )
}
