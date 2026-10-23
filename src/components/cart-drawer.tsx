'use client'

import CaretLeftIcon from '@/assets/icons/CaretLeft.svg'
import CaretRightIcon from '@/assets/icons/CaretRight.svg'
import CloseIcon from '@/assets/icons/X.svg'
import MinusIcon from '@/assets/icons/Minus.svg'
import PlusIcon from '@/assets/icons/Plus.svg'
import TrashIcon from '@/assets/icons/TrashSimple.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Button from './ui/button'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

interface CartItem {
  id: string
  image: string
  name: string
  variant: string
  price: number
  originalPrice?: number
  discount?: number
  quantity: number
}

interface Recommendation {
  id: string
  name: string
  variant: string
  price: number
  image: string
}

const initialCartItems: CartItem[] = [
  {
    id: 'organic-cotton-turtleneck',
    image: '/images/cart/image-1.png',
    name: 'The Organic Cotton Long-Sleeve Turtleneck',
    variant: 'Medium | Black',
    originalPrice: 50,
    price: 35,
    discount: 30,
    quantity: 1,
  },
  {
    id: 'rewool-oversized-shirt-jacket',
    image: '/images/cart/image-2.png',
    name: 'The ReWool® Oversized Shirt Jacket',
    variant: 'Small | Black',
    originalPrice: 238,
    price: 167,
    discount: 30,
    quantity: 1,
  },
]

const recommendations: Recommendation[] = [
  {
    id: 'merino-wool-beanie',
    name: 'The Good Merino Wool Beanie',
    variant: 'One Size | Chambray Blue',
    price: 35,
    image: '/images/cart/before-you-go.png',
  },
  {
    id: 'cashmere-rib-beanie',
    name: 'The Cashmere Rib Beanie',
    variant: 'One Size | Heather Grey',
    price: 45,
    image: '/images/cart/before-you-go.png',
  },
  {
    id: 'alpaca-knit-beanie',
    name: 'The Alpaca Knit Beanie',
    variant: 'One Size | Pale Blue',
    price: 40,
    image: '/images/cart/before-you-go.png',
  },
  {
    id: 'recycled-wool-beanie',
    name: 'The Recycled Wool Beanie',
    variant: 'One Size | Light Blue',
    price: 38,
    image: '/images/cart/before-you-go.png',
  },
]

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [activeRecommendation, setActiveRecommendation] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen, onClose])

  const changeQuantity = (id: string, amount: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item,
      ),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const showPreviousRecommendation = () => {
    setActiveRecommendation(
      (current) => (current - 1 + recommendations.length) % recommendations.length,
    )
  }

  const showNextRecommendation = () => {
    setActiveRecommendation((current) => (current + 1) % recommendations.length)
  }

  const addRecommendation = (recommendation: Recommendation) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === recommendation.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === recommendation.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...currentItems, { ...recommendation, quantity: 1 }]
    })
  }

  const handleTouchEnd = (touchEndX: number) => {
    if (touchStartX.current === null) return

    const distance = touchStartX.current - touchEndX
    if (Math.abs(distance) > 50) {
      if (distance > 0) showNextRecommendation()
      else showPreviousRecommendation()
    }

    touchStartX.current = null
  }

  return (
    <div
      className={`fixed inset-0 z-100 transition-[visibility] duration-300 ${isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible delay-300'}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close shopping cart"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
        className={`absolute inset-0 cursor-default bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute inset-y-0 right-0 flex h-dvh w-full max-w-119.25 flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-8 pt-3 sm:px-5 sm:pt-4">
          <div className="mb-5 flex justify-end sm:mb-6">
            <button
              type="button"
              aria-label="Close shopping cart"
              tabIndex={isOpen ? 0 : -1}
              onClick={onClose}
              className="flex size-10 cursor-pointer items-center justify-center"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <h2 className="display-100 mb-6 font-semibold sm:mb-7">Your Cart</h2>

          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 sm:grid-cols-[5.5rem_minmax(0,1fr)]"
                >
                  <div className="relative aspect-3/4 overflow-hidden bg-everlane-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  </div>

                  <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-x-2">
                    <div className="min-w-0">
                      <h3 className="text-300 font-medium">{item.name}</h3>
                      <p className="text-300 text-everlane-300">{item.variant}</p>
                    </div>

                    <button
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item.id)}
                      className="flex size-8 cursor-pointer self-start justify-self-end items-center justify-center text-everlane-300"
                    >
                      <TrashIcon className="size-4" />
                    </button>

                    <div className="self-end pb-1">
                      <div className="text-300 flex items-center gap-1">
                        {item.originalPrice && (
                          <span className="text-everlane-300 line-through">
                            {currencyFormatter.format(item.originalPrice)}
                          </span>
                        )}
                        <span className="font-semibold">
                          {currencyFormatter.format(item.price)}
                        </span>
                      </div>
                      {item.discount && <p className="text-300 text-red">({item.discount}% Off)</p>}
                    </div>

                    <div className="flex h-10 self-end border border-everlane-200 sm:h-11">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => changeQuantity(item.id, -1)}
                        className="flex size-10 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-40 sm:size-11"
                        disabled={item.quantity === 1}
                      >
                        <MinusIcon className="size-4" />
                      </button>
                      <span
                        className="text-300 flex min-w-6 items-center justify-center"
                        aria-label={`Quantity: ${item.quantity}`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => changeQuantity(item.id, 1)}
                        className="flex size-10 cursor-pointer items-center justify-center sm:size-11"
                      >
                        <PlusIcon className="size-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-300 py-8 text-center text-everlane-300">Your cart is empty.</p>
          )}

          <section className="mt-7" aria-labelledby="before-you-go-title">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 id="before-you-go-title" className="text-300 font-semibold">
                Before You Go
              </h3>
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Previous recommendation"
                  onClick={showPreviousRecommendation}
                  className="flex size-8 cursor-pointer items-center justify-center"
                >
                  <CaretLeftIcon className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next recommendation"
                  onClick={showNextRecommendation}
                  className="flex size-8 cursor-pointer items-center justify-center"
                >
                  <CaretRightIcon className="size-4" />
                </button>
              </div>
            </div>

            <div
              className="overflow-hidden border border-everlane-200"
              role="region"
              aria-label="Product recommendations"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'ArrowLeft') showPreviousRecommendation()
                if (event.key === 'ArrowRight') showNextRecommendation()
              }}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null
              }}
              onTouchEnd={(event) => {
                handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)
              }}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeRecommendation * 100}%)` }}
              >
                {recommendations.map((recommendation, index) => (
                  <article
                    key={recommendation.id}
                    aria-hidden={index !== activeRecommendation}
                    className="grid min-w-full grid-cols-[6rem_minmax(0,1fr)] gap-3 p-2.5 sm:grid-cols-[7rem_minmax(0,1fr)]"
                  >
                    <div className="relative aspect-3/4 overflow-hidden bg-everlane-100">
                      <Image
                        src={recommendation.image}
                        alt={recommendation.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <h4 className="text-300 font-medium">{recommendation.name}</h4>
                      <p className="text-200 text-everlane-300">{recommendation.variant}</p>
                      <div className="mt-auto flex items-end justify-between gap-3">
                        <span className="text-300 font-semibold">
                          {currencyFormatter.format(recommendation.price)}
                        </span>
                        <button
                          type="button"
                          tabIndex={index === activeRecommendation ? 0 : -1}
                          onClick={() => addRecommendation(recommendation)}
                          className="text-300 cursor-pointer bg-everlane-500 px-7 py-3 text-white sm:px-9"
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-2.5 flex gap-3" aria-label="Choose recommendation slide">
              {recommendations.map((recommendation, index) => (
                <button
                  key={recommendation.id}
                  type="button"
                  aria-label={`Show recommendation ${index + 1}`}
                  aria-current={index === activeRecommendation}
                  onClick={() => setActiveRecommendation(index)}
                  className={`size-2.5 cursor-pointer rounded-full transition-colors ${index === activeRecommendation ? 'bg-everlane-500' : 'bg-everlane-200'}`}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="shrink-0 space-y-6 px-4 py-5 shadow-[0_-6px_18px_rgba(0,0,0,0.18)] sm:space-y-7 sm:px-5 sm:py-6">
          <div className="text-300 flex items-center justify-between font-semibold">
            <p>
              Subtotal <span className="font-normal">({itemCount} items)</span>
            </p>
            <p>{currencyFormatter.format(subtotal)}</p>
          </div>
          <Button variant="dark" className="w-full!">
            CONTINUE TO CHECKOUT
          </Button>
          <p className="text-200 text-center font-semibold">
            Psst, get it now before it sells out.
          </p>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
