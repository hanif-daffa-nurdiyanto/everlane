import CategoryCard from '@/components/category-card'
import { CommunityCarousel, ProductsCarousel, TestimonialsCarousel } from '@/components/carousel'
import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const category = [
  {
    title: 'shirts',
    image: '/images/shirts.png',
  },
  {
    title: 'denim',
    image: '/images/denim.png',
  },
  {
    title: 'tees',
    image: '/images/tees.png',
  },
  {
    title: 'pants',
    image: '/images/pants.png',
  },
  {
    title: 'sweaters',
    image: '/images/sweaters.png',
  },
  {
    title: 'outwear',
    image: '/images/outwear.png',
  },
]

const HomePage = () => (
  <>
    <section className="relative grid h-128 w-full grid-cols-1 bg-everlane-500 bg-[url('/images/hero.png')] bg-cover bg-position-[62%_center] bg-no-repeat text-white before:absolute before:inset-0 before:bg-black/35 sm:h-152 md:h-176 md:grid-cols-2 md:bg-center md:before:hidden xl:h-189.5">
      <div className="relative z-10 mx-auto flex flex-col items-center justify-end px-5 pb-12 text-center md:justify-center md:pb-0">
        <h1 className="display-500 mb-3.5">Your Cozy Era</h1>
        <p className="display-100">Get peak comfy-chic</p>
        <p className="display-100"> with new winter essentials.</p>
        <Button className="mt-7.5">SHOP NOW</Button>
      </div>
    </section>

    <section className="px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 xl:px-10.5 xl:pt-22.5">
      <h2 className="display-100 mb-6.25 text-center">Shop by Category</h2>
      <div className="mb-12 grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 lg:mb-16 xl:mb-22.5 xl:grid-cols-6">
        {category.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <CategoryCard
          variant="large"
          title="New Arrivals"
          buttonText="shop the latest"
          image="/images/arrival.png"
        />
        <CategoryCard
          variant="large"
          title="Best-Sellers"
          buttonText="shop your favorites"
          image="/images/best.png"
        />
        <CategoryCard
          variant="large"
          title="The Holiday Outfit"
          buttonText="shop occasion"
          image="/images/holiday.png"
        />
      </div>
    </section>

    <section className="px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 xl:px-10.5 xl:py-22.5">
      <div className="flex w-full flex-col items-center bg-[url('/images/scene.png')] bg-cover bg-center bg-no-repeat px-5 py-12 text-center sm:py-14 xl:py-18">
        <h2 className="display-200 mb-3">We’re on a Mission To Clean Up the Industry</h2>
        <p className="text-400 mb-5">Read about our progress in our latest Impact Report.</p>
        <Button>learn more</Button>
      </div>
    </section>

    <section className="pb-12 pt-12 sm:pb-14 sm:pt-16 xl:pb-18.25 xl:pt-22.5">
      <div className="mb-7.5 flex w-full flex-col items-center px-4 text-center">
        <h2 className="display-100 mb-3">Everlane Favorites</h2>
        <p className="text-400">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </p>
      </div>
      <ProductsCarousel />
    </section>

    <section className="px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 xl:px-8.75 xl:pb-18.5">
      <TestimonialsCarousel />
    </section>

    <section className="mx-4 grid grid-cols-1 gap-12 border-y border-black py-12 sm:mx-6 md:grid-cols-2 md:gap-x-5 md:gap-y-0 lg:mx-12 lg:px-12 lg:py-16 xl:mx-19.25 xl:px-27 xl:py-22.5">
      <article className="w-full">
        <h3 className="display-100 mb-5 text-center">Our Holiday Gift Picks</h3>
        <Image
          src="/images/gift.png"
          className="max-h-156.5 w-full object-cover"
          width={300}
          height={400}
          alt="Holiday gift picks"
        />
        <p className="text-300 my-5 text-center">The best presents for everyone on your list.</p>
        <Link
          href="#"
          className="text-300 my-3.75 text-center underline underline-offset-4 mx-auto block"
        >
          Read More
        </Link>
      </article>
      <article className="w-full">
        <h3 className="display-100 mb-5 text-center">Cleaner Fashion</h3>
        <Image
          src="/images/cleaner.png"
          className="max-h-156.5 w-full object-cover"
          width={300}
          height={400}
          alt="Cleaner fashion materials"
        />
        <p className="text-300 my-5 text-center">
          See the sustainability efforts behind each of our products.
        </p>
        <Link
          href="#"
          className="text-300 my-3.75 text-center underline underline-offset-4 mx-auto block"
        >
          Learn More
        </Link>
      </article>
    </section>

    <section className="px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 xl:px-10.5 xl:pt-22.5">
      <div className="mb-3 flex w-full flex-col items-center px-2 text-center">
        <h2 className="display-200 mb-6.25">Everlane On You</h2>
        <p className="text-300 mb-1">
          Share your latest look with #EverlaneOnYou for a chance to be featured.
        </p>
        <button type="button" className="underline text-300 cursor-pointer underline-offset-2">
          Add Your Photo
        </button>
      </div>
      <CommunityCarousel />
    </section>
    <section className="grid grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:gap-1.5 lg:px-10 lg:py-16 xl:px-17.5 xl:py-22.5">
      <div className="flex flex-col items-center px-4 xl:px-13.75">
        <Image
          src="/images/box.png"
          alt="box"
          className="w-19.5 aspect-square object-contain"
          width={200}
          height={200}
        />
        <h3 className="mt-5 mb-1 text-300 font-semibold">Complimentary Shipping</h3>
        <p className="text-300 max-w-75 text-center">
          Enjoy free shipping on U.S. orders over $100.
        </p>
      </div>
      <div className="flex flex-col items-center px-4 xl:px-13.75">
        <Image
          src="/images/recycle.png"
          alt="recycle"
          className="w-19.5 aspect-square object-contain"
          width={200}
          height={200}
        />
        <h3 className="mt-5 mb-1 text-300 font-semibold">Consciously Crafted</h3>
        <p className="text-300 max-w-75 text-center">Designed with you and the planet in mind.</p>
      </div>
      <div className="flex flex-col items-center px-4 xl:px-13.75">
        <Image
          src="/images/pin.png"
          alt="pin"
          className="w-19.5 aspect-square object-contain"
          width={200}
          height={200}
        />
        <h3 className="mt-5 mb-1 text-300 font-semibold">Come Say Hi</h3>
        <p className="text-300 max-w-75 text-center">We have 11 stores across the U.S.</p>
      </div>
    </section>
  </>
)

export default HomePage
