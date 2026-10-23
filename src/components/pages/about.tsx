import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => (
  <div className="text-black">
    <section className="relative flex min-h-112 w-full items-center justify-center bg-everlane-500 bg-[url('/images/about-hero.png')] bg-cover bg-center bg-no-repeat px-4 py-16 text-center text-white before:absolute before:inset-0 before:bg-black/30 sm:min-h-128 sm:px-10 sm:py-24 md:px-24 lg:min-h-0 lg:px-64 lg:py-34 xl:px-96 2xl:px-114">
      <div className="relative z-10">
        <h1 className="display-800">We believe we can all make a difference.</h1>
        <p className="display-100 mt-3 sm:mt-4">
          Our way: Exceptional quality. Ethical factories. Radical Transparency.
        </p>
      </div>
    </section>
    <section className="px-4 py-12 text-center sm:px-8 sm:py-16 lg:py-19">
      <p className="display-300 mx-auto max-w-5xl">
        At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s
        why we partner with the best, ethical factories around the world. Source only the finest
        materials. And share those stories with you—down to the true cost of every product we make.
        It’s a new way of doing things. We call it Radical Transparency.
      </p>
    </section>
    <section className="grid grid-cols-1 bg-timberwolf lg:grid-cols-2">
      <Image
        src="/images/smile.png"
        className="aspect-square h-full w-full object-cover"
        width={1280}
        height={1240}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt="Everlane factory partner smiling at work"
      />
      <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-12 xl:px-17.5">
        <h2 className="w-full text-200 font-semibold">OUR FACTORIES</h2>
        <h3 className="display-400 mb-5 w-full">Our ethical approach.</h3>
        <p className="w-full text-300">
          We spend months finding the best factories around the world—the same ones that produce
          your favorite designer labels. We visit them often and build strong personal relationships
          with the owners. Each factory is given a compliance audit to evaluate factors like fair
          wages, reasonable hours, and environment. Our goal? A score of 90 or above for every
          factory.
        </p>
      </div>

      <Image
        src="/images/factory.png"
        className="h-auto w-full object-cover lg:col-span-2"
        width={2684}
        height={1274}
        sizes="100vw"
        alt="Workers inside an Everlane partner factory"
      />

      <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-12 xl:px-17.5">
        <h2 className="w-full text-200 font-semibold">OUR QUALITY</h2>
        <h3 className="display-400 mb-5 w-full">Designed to last.</h3>
        <p className="w-full text-300">
          At Everlane, we’re not big on trends. We want you to wear our pieces for years, even
          decades, to come. That’s why we source the finest materials and factories for our timeless
          products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
        </p>
      </div>
      <Image
        src="/images/product.png"
        className="aspect-square h-full w-full object-cover"
        width={1280}
        height={1240}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt="Close-up of an Everlane product"
      />
      <Image
        src="/images/plan.png"
        className="h-auto w-full object-cover lg:col-span-2"
        width={2800}
        height={1120}
        sizes="100vw"
        alt="Everlane product planning and materials"
      />
    </section>
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <Image
        src="/images/graph.png"
        className="mx-auto h-auto max-h-165 w-full object-contain px-8 py-10 sm:px-16 lg:px-8 lg:py-0"
        width={764}
        height={1170}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt="Cost comparison between Everlane and traditional retail"
      />
      <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-12 xl:px-17.5">
        <h2 className="w-full text-200 font-semibold">OUR PRICES</h2>
        <h3 className="display-400 mb-5 w-full">Radically Transparent.</h3>
        <p className="w-full text-300">
          We believe our customers have a right to know how much their clothes cost to make. We
          reveal the true costs behind all of our products—from materials to labor to
          transportation—then offer them to you, minus the traditional retail markup.
        </p>
      </div>
    </section>
    <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-24 lg:py-20.5 xl:px-50">
      <h2 className="display-200 mb-5 text-center">More to Explore</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
        <Link href="#">
          <Image
            src="/images/products.png"
            className="aspect-3/2 h-auto w-full object-cover"
            width={600}
            height={376}
            sizes="(min-width: 640px) 33vw, 100vw"
            alt="Explore Everlane products"
          />
          <h3 className="text-400 mt-2.5 text-center">Our Products</h3>
        </Link>
        <Link href="#">
          <Image
            src="/images/stores.png"
            className="aspect-3/2 h-auto w-full object-cover"
            width={600}
            height={376}
            sizes="(min-width: 640px) 33vw, 100vw"
            alt="Visit an Everlane store"
          />
          <h3 className="text-400 mt-2.5 text-center">Our Stores</h3>
        </Link>
        <Link href="#">
          <Image
            src="/images/carrers.png"
            className="aspect-3/2 h-auto w-full object-cover"
            width={600}
            height={376}
            sizes="(min-width: 640px) 33vw, 100vw"
            alt="Explore careers at Everlane"
          />
          <h3 className="text-400 mt-2.5 text-center">Careers</h3>
        </Link>
      </div>
    </section>
  </div>
)

export default AboutPage
