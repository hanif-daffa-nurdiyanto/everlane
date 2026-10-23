'use client'

import Image from 'next/image'
import StarIcon from '@/assets/icons/Star.svg'
import StarFillIcon from '@/assets/icons/star-fill.svg'
import TruckIcon from '@/assets/icons/truck.svg'
import GiftIcon from '@/assets/icons/gift.svg'
import BoxIcon from '@/assets/icons/box.svg'
import ListIcon from '@/assets/icons/List.svg'
import CaretDownIcon from '@/assets/icons/CaretDown.svg'
import CheckCircleIcon from '@/assets/icons/CheckCircle.svg'

import { ColorSelectionItem } from '../ui/color'
import SizeBox from '../ui/size-box'
import Button from '../ui/button'
import ProductCard from '../product-card'
import { Fragment } from 'react'

const product = {
  images: [
    '/images/detail/1.png',
    '/images/detail/2.png',
    '/images/detail/3.png',
    '/images/detail/4.png',
    '/images/detail/5.png',
    '/images/detail/6.png',
  ],
}

const recomendations = [
  {
    images: '/images/products/1.png',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
  },
  {
    images: '/images/products/2.png',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
  },
  {
    images: '/images/products/3.png',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
  },
  {
    images: '/images/products/4.png',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
  },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const ratings = [
  { star: 5, count: 1000 },
  { star: 4, count: 50 },
  { star: 3, count: 7 },
  { star: 2, count: 8 },
  { star: 1, count: 2 },
]

const reviews = [
  {
    id: 1,
    author: 'ElizabethRBklyn',
    verified: true,
    height: '5’9” - 5’11”',
    weight: '161 - 180 lb',
    bodyType: 'Petite',
    sizePurchased: 'L',
    usualSize: 'L',
    rating: 5,
    title: 'Warm and very attractive on',
    content:
      'Got this to keep my husband warm on those chilly late fall days. He loves it as it not only is pretty warm but he looks good in it and he knows it.',
    createdAt: '14 days ago',
  },
  {
    id: 2,
    author: 'Anonymous',
    verified: true,
    height: '5’9” - 5’11”',
    weight: '161 - 180 lb',
    bodyType: 'Petite',
    sizePurchased: 'L',
    usualSize: 'L',
    rating: 5,
    title: 'Super comfy',
    content:
      'Got this to keep my husband warm on those chilly late fall days. He loves it as it not only is pretty warm but he looks good in it Great quality, warm and super comfy. Got the XL cuz I have a large back and it fits perfect. It does run a bit oversized which is good.',
    createdAt: '14 days ago',
  },
]

const pricing = [
  {
    image: 'materials.png',
    title: 'Materials',
    price: 47.96,
  },
  {
    image: 'hardware.png',
    title: 'Hardware',
    price: 5.74,
  },
  {
    image: 'labor.png',
    title: 'Labor',
    price: 13.75,
  },
  {
    image: 'duties.png',
    title: 'Duties',
    price: 8.09,
  },
  {
    image: 'transport.png',
    title: 'Transport',
    price: 1.53,
  },
]

const DetailPage = () => (
  <main className="overflow-x-hidden text-black">
    <section className="mx-auto my-5 grid w-full grid-cols-1 gap-6 px-4 sm:my-6 sm:px-6 lg:my-7.5 lg:grid-cols-[minmax(0,1fr)_21rem] lg:px-10 xl:grid-cols-[minmax(0,1fr)_24rem] xl:px-20">
      <div className="grid min-w-0 grid-cols-2 gap-1.5 sm:gap-2">
        {product.images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            <Image
              src={image}
              alt={`The ReWool Oversized Shirt Jacket view ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 32vw, 50vw"
              className="object-cover"
              priority={index < 2}
            />
            {index === 0 && (
              <span className="text-200 absolute left-1.5 top-1.5 block bg-white px-1.5 py-1 text-red sm:left-2 sm:top-2">
                30% off
              </span>
            )}
          </div>
        ))}
      </div>
      <aside className="w-full min-w-0">
        <div className="space-y-1 border-b border-everlane-100 pb-4">
          <span className="text-200 text-everlane-300">Men / Outerwear - Jackets & Coats</span>
          <div className="display-100 flex flex-wrap items-start gap-x-1 gap-y-1 sm:flex-nowrap">
            <h1 className="mr-1.5 min-w-0 flex-1 basis-full sm:basis-auto">
              The ReWool® Oversized Shirt Jacket
            </h1>
            <span className="shrink-0 text-everlane-300 line-through">$238</span>
            <span className="shrink-0">$167</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <StarIcon className="size-3 text-everlane-500" fill="#262626" />
              <StarIcon className="size-3 text-everlane-500" fill="#262626" />
              <StarIcon className="size-3 text-everlane-500" fill="#262626" />
              <StarIcon className="size-3 text-everlane-500" fill="#262626" />
              <StarIcon className="size-3 text-everlane-500" fill="#262626" />
            </div>
            <p className="text-200 text-everlane-300">5.0 (2 Reviews)</p>
          </div>
        </div>
        <div className="space-y-2.5 py-4 sm:py-4.5">
          <div className="text-200 flex items-center gap-3">
            <h2 className="font-semibold">Color</h2>
            <span>Black / Olive</span>
          </div>
          <div className="flex gap-2.5">
            <ColorSelectionItem
              size="25px"
              hex="#bad455"
              active
              onClick={() => {}}
              onUnset={() => {}}
            />
            <ColorSelectionItem size="25px" hex="#000" onClick={() => {}} onUnset={() => {}} />
          </div>
        </div>
        <div className="text-200 space-y-2.5 py-4 sm:py-4.5">
          <div className="flex justify-between">
            <span className="font-semibold">Size</span>
            <span className="underline underline-offset-2 cursor-pointer">Size Guide</span>
          </div>
          <div className="flex w-full flex-wrap gap-3">
            {sizes.map((size, index) => (
              <SizeBox key={index} value={size} samesize>
                {size}
              </SizeBox>
            ))}
          </div>
        </div>
        <Button variant="dark" className="my-6 w-full! sm:my-8">
          ADD TO BAG
        </Button>
        <div className="space-y-6 border-y border-everlane-200 py-6">
          <div className="flex gap-4 items-center">
            <TruckIcon className="size-8.5 shrink-0" />
            <div className="flex flex-col">
              <h3 className="text-300 font-semibold">Free Shipping</h3>
              <p className="text-200">On all U.S. orders over $100 Learn more.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <BoxIcon className="size-8.5 shrink-0" />
            <div className="flex flex-col">
              <h3 className="text-300 font-semibold">Easy Returns</h3>
              <p className="text-200">Extended returns through January 31. Returns Details.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <GiftIcon className="size-8.5 shrink-0" />
            <div className="flex flex-col">
              <h3 className="text-300 font-semibold">Send It As A Gift</h3>
              <p className="text-200">Add a free personalized note during checkout.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 pb-3 pt-8 sm:pt-10">
          <h2 className="text-400 font-semibold">Part shirt, part jacket, all style.</h2>
          <p className="text-300">
            Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the
            classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two
            front chest flap pockets and on-seam pockets. The sleeves are fully lined for added
            warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified
            recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of
            increasing the use of recycled materials and reducing the harmful impacts of production,
            the Global Recycled Standard (GRS) sets requirements for third-party certification of
            recycled input in products—including chain of custody, social and environmental
            practices, and chemical restrictions.
          </p>
        </div>
        <div className="grid grid-cols-[6.625rem_minmax(0,1fr)] items-center border-b border-everlane-200 py-5">
          <h2 className="text-400 font-semibold">Model</h2>
          <p className="text-300">Model is 6′2″, wearing a size M</p>
        </div>
        <div className="grid grid-cols-[6.625rem_minmax(0,1fr)] items-center border-b border-everlane-200 py-5">
          <h2 className="text-400 font-semibold">Fit</h2>
          <p className="text-300 whitespace-pre-line">{`Questions about fit?\nContact Us\nSize Guide`}</p>
        </div>
        <div className="border-b border-everlane-200 py-5">
          <h2 className="text-400 font-semibold">Sustainability</h2>
          <Image
            src="/images/sustainability.png"
            alt="Sustainability certifications"
            width={400}
            height={400}
            className="h-auto w-full"
          />
        </div>
      </aside>
    </section>
    <section className="mx-auto my-12 w-full space-y-3 px-4 sm:my-14 sm:px-6 lg:my-16 lg:px-10 xl:px-49">
      <h2 className="text-400 font-semibold">Recommended Products</h2>
      <div className="-mx-4 flex w-auto gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:gap-6 sm:px-6 lg:mx-0 lg:grid lg:w-full lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
        {recomendations.map(({ name, price, images }, index) => (
          <ProductCard
            className="w-60 sm:w-70.5 lg:w-auto lg:min-w-0"
            simple
            title={name}
            key={index}
            price={price}
            image={images}
          />
        ))}
      </div>
    </section>
    <section className="mx-auto w-full space-y-7 px-4 sm:space-y-8 sm:px-6 lg:space-y-10 lg:px-10 xl:px-49">
      <h2 className="display-100 font-semibold text-center">Reviews</h2>
      <div className="grid grid-cols-1 gap-8 bg-everlane-100 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-3 lg:gap-10 lg:px-10 lg:pb-16 xl:gap-13.75 xl:px-14 xl:pb-21">
        <div className="space-y-3.75">
          <span className="text-400 block font-semibold">5.0 Overall Rating</span>
          <span className="flex gap-1">
            <StarFillIcon className="size-5.5" />
            <StarFillIcon className="size-5.5" />
            <StarFillIcon className="size-5.5" />
            <StarFillIcon className="size-5.5" />
            <StarFillIcon className="size-5.5" />
          </span>
        </div>
        <RatingBar ratings={ratings} />
        <div>
          <div className="text-400 font-semibold">Runs slightly large</div>
          <div className="flex gap-1 pb-2 pt-4">
            <div className="h-2 flex-1 bg-everlane-200" />
            <div className="h-2 flex-1 bg-everlane-200" />
            <div className="h-2 flex-1 bg-everlane-200" />
            <div className="h-2 flex-1 bg-everlane-500" />
            <div className="h-2 flex-1 bg-everlane-200" />
          </div>
          <div className="text-200 flex items-center justify-between">
            <span>Run Small</span>
            <span>Run large</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-between">
        <button
          type="button"
          className="flex h-full min-w-0 items-center justify-between gap-2 border border-everlane-200 p-3 text-left sm:h-fit sm:w-60 sm:p-4"
        >
          <span className="display-100 font-semibold">Filter</span>
          <ListIcon className="size-6 shrink-0 sm:size-8" />
        </button>
        <button
          type="button"
          className="flex h-full min-w-0 items-center justify-between gap-2 border border-everlane-200 p-3 text-left sm:h-fit sm:w-60 sm:p-4"
        >
          <div className="min-w-0">
            <span className="display-100 font-semibold">Sort by:</span>
            <p className="text-200 hidden text-everlane-300 sm:block">Highest to Lowest Rating</p>
          </div>
          <CaretDownIcon className="size-6 shrink-0 sm:size-8" />
        </button>
      </div>
      <div>
        {reviews.map((review, index) => (
          <article
            key={review.id}
            className={`mb-7 grid grid-cols-1 gap-5 pb-8 sm:mb-8 sm:pb-10 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:gap-4 lg:mb-10 lg:grid-cols-[14.375rem_minmax(0,1fr)_auto] lg:gap-2.5 lg:pb-14.25 ${index < reviews.length - 1 ? 'border-b border-everlane-200' : ''}`}
          >
            <div className="min-w-0">
              <h3 className="text-400 font-semibold">{review.author}</h3>
              {review.verified && (
                <div className="mt-2.25 mb-5.25 flex items-center gap-x-1">
                  <CheckCircleIcon className="size-5" />
                  <span className="text-200">Verified</span>
                </div>
              )}
              <div className="mb-4">
                <p className="text-200">
                  <span className="font-semibold">Height: </span>
                  {review.height}
                </p>
                <p className="text-200">
                  <span className="font-semibold">Weight (lbs): </span>
                  {review.weight}
                </p>
                <p className="text-200">
                  <span className="font-semibold">Body Type: </span>
                  {review.bodyType}
                </p>
              </div>
              <div>
                <p className="text-200">
                  <span className="font-semibold">Size Purchased: </span>
                  {review.sizePurchased}
                </p>
                <p className="text-200">
                  <span className="font-semibold">Usual Size: </span>
                  {review.usualSize}
                </p>
              </div>
            </div>
            <div className="min-w-0 space-y-3">
              <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }, (_, starIndex) => (
                  <StarFillIcon key={starIndex} className="size-5" />
                ))}
              </div>
              <h4 className="text-400 font-semibold">{review.title}</h4>
              <p className="text-300">{review.content}</p>
            </div>
            <div className="text-200 shrink-0 whitespace-nowrap text-everlane-300">
              {review.createdAt}77 
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="space-y-4 px-4 py-12 text-center sm:px-10 sm:py-14 lg:px-40 lg:py-16 xl:px-89.5 xl:py-20">
      <h2 className="display-100 font-semibold">Transparent Pricing</h2>
      <p className="text-300">
        We publish what it costs us to make every one of our products. There are a lot of costs we
        can't neatly account for - like design, fittings, wear testing, rent on office and retail
        space - but we believe you deserve to know what goes into making the products you love.
      </p>
      <div className="grid grid-cols-2 items-start sm:grid-cols-3 lg:grid-cols-5">
        {pricing.map((item, index) => (
          <div key={index} className="text-200 flex flex-col items-center py-4 sm:py-6">
            <Image
              src={`/images/detail/pricing/${item.image}`}
              width={64}
              height={64}
              alt={item.title}
              className="mb-3 w-14.5 h-14.5 object-contain"
            ></Image>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  </main>
)

const RatingBar = ({ ratings }: { ratings: { star: number; count: number }[] }) => {
  const total = ratings.reduce((sum, item) => sum + item.count, 0)
  return (
    <div className="grid flex-1 grid-cols-[8px_18px_minmax(0,1fr)_auto] items-center gap-x-1 gap-y-2">
      {ratings.map(({ star, count }) => (
        <Fragment key={star}>
          <span className="text-200 text-everlane-300">{star}</span>

          <StarFillIcon className="size-4.5" />

          <div className="h-1.5 w-full bg-everlane-200">
            <div
              className="h-full bg-everlane-500"
              style={{
                width: total ? `${(count / total) * 100}%` : '0%',
              }}
            />
          </div>

          <span className="text-200 text-everlane-300 text-left">{count}</span>
        </Fragment>
      ))}
    </div>
  )
}

export default DetailPage
