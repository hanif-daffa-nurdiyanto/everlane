import Image from 'next/image'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import FacebookIcon from '@/assets/icons/facebook.svg'
import { ProductsCarousel } from '../carousel'
import Button from '../ui/button'
import { product, stories } from '@/data/blog'
import StoryCard from '../story-card'

const BlogPage = () => (
  <div className="text-black">
    <section className="relative flex h-128 w-full flex-col justify-end bg-[url('/images/stories/detail/1.png')] bg-cover bg-center px-4 py-10 text-white before:absolute before:inset-0 before:bg-linear-to-t before:from-black/70 before:via-black/15 before:to-transparent sm:h-152 sm:px-8 sm:py-12 lg:h-164 lg:px-10 lg:py-14 xl:h-172.75 xl:px-13.25 xl:py-17.5">
      <div className="relative z-10">
        <div className="mb-2.5 w-fit rounded-full border border-white px-5 py-2 text-200">
          Style
        </div>
        <h1 className="display-700 mb-4.5 max-w-3xl whitespace-pre-line font-semibold">
          {'Style\nHow To Style Winter\nWhites'}
        </h1>
        <p className="display-100 max-w-235">
          Redefine your winter wardrobe with the timeless elegance of winter whites with this style
          guide.
        </p>
      </div>
    </section>
    <section className="mx-4 my-16 space-y-8 sm:mx-8 sm:my-20 lg:mx-10 lg:my-24 xl:mx-15 xl:my-28.75 xl:space-y-10">
      <div className="h-2 w-full bg-everlane-500 sm:h-2.5 xl:h-3.5" />
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-37">
        <div className="flex shrink-0 gap-3 lg:gap-1.5">
          <a href="#" aria-label="Share on Twitter" className="p-1">
            <TwitterIcon className="size-7 shrink-0" />
          </a>
          <a href="#" aria-label="Share on Facebook" className="p-1">
            <FacebookIcon className="size-7 shrink-0" />
          </a>
          <a href="#" aria-label="Share on LinkedIn" className="p-1">
            <LinkedinIcon className="size-7 shrink-0" />
          </a>
        </div>
        <p className="display-400 flex-1 font-semibold">
          In a season dominated by dark hues, redefine your winter wardrobe with the timeless
          elegance of winter whites. Whether top-to-toe white outfits, tonal mixing-and-matching, or
          a key white piece (or two), give your style a breath of fresh air with this list of winter
          white closet essentials.
        </p>
      </div>
    </section>
    <section className="px-4 py-12 sm:px-10 sm:py-16 lg:px-32 lg:py-20 xl:px-76.25 xl:py-25">
      <Image
        src="/images/stories/blog.png"
        alt="A winter-white Everlane outfit"
        width={1124}
        height={1500}
        sizes="(min-width: 1280px) 65vw, 100vw"
        className="mx-auto h-auto w-full max-w-232 object-cover"
      />
    </section>
    <section className="px-4 py-12 sm:px-10 sm:py-16 md:px-16 lg:px-36 lg:py-20 xl:px-57 xl:py-25">
      <h2 className="display-400 mb-6 font-semibold sm:mb-8 xl:mb-11">Nail the Classics</h2>
      <p className="display-100 mb-8 xl:mb-11">
        Do pure winter chic with a <u>classic cashmere white sweater</u>. Made in the softest
        cashmere, it’s a sweater that will last season after season. Effortlessly elevating any
        winter outfit, a white sweater is a must for any capsule collection. Just make{' '}
        <u>sure you keep it clean and stain free</u>, to maintain that clean, polished look. Pair it
        with dark jeans or <u>Utility Barrel</u> pants for a casual yet refined ensemble, or layer
        it over a collared shirt for a preppy touch.
      </p>
      <h2 className="display-400 mb-6 font-semibold sm:mb-8 xl:mb-11">Monochromatic Magic</h2>
      <p className="display-100 mb-8 xl:mb-11">
        Nothing feels more luxe than an all-white winter outfit. And the best part? You don’t have
        to break the bank to create a super chic top-to-toe look. Pair classic <u>corduroy pants</u>{' '}
        in a modern wide-legged silhouette with a relaxed <u>Oxford style white shirt</u> for a
        mix-and-match texture play. Extra points if you add a <u>white blazer</u>, <u>cardigan</u>,
        or <u>sweater</u>. Accessorize with subtle metallic accents or a bold red lip for a pop of
        color, letting your outfit take center stage.
      </p>
      <h2 className="display-400 mb-6 font-semibold sm:mb-8 xl:mb-11">Keep Warm in White</h2>
      <p className="display-100 mb-8 xl:mb-11">
        Stay warm all winter long with a <u>white puffer jacket</u>. This durable, cold weather
        jacket is puffed-up for extra warmth, giving an on-point blown out silhouette. A white coat
        not only stands out against the sea of dark winter jackets but also provides a fun canvas
        for experimenting with textures and patterns. Throw on a white coat over a neutral-toned
        outfit for an easy elegant look.
      </p>
    </section>
    <section className="px-4 py-12 sm:px-10 sm:py-16 lg:px-32 lg:py-20 xl:px-76.25 xl:py-25">
      <Image
        src="/images/stories/blog-2.png"
        alt="Layered winter-white clothing"
        width={1124}
        height={1500}
        sizes="(min-width: 1280px) 65vw, 100vw"
        className="mx-auto h-auto w-full max-w-232 object-cover"
      />
    </section>
    <section className="px-4 py-12 sm:px-10 sm:py-16 md:px-16 lg:px-36 lg:py-20 xl:px-57 xl:py-25">
      <h2 className="display-400 mb-6 font-semibold sm:mb-8 xl:mb-11">Textures and Layers</h2>
      <p className="display-100 mb-8 xl:mb-11">
        Winter fashion is all about layering, and white outfits provide the perfect base for playing
        with textures and layers. Start with your <u>white turtleneck</u> and experiment with
        different fabrics like wool, cashmere, and silk to add depth and interest to your look. A{' '}
        <u>white silk blouse</u> layered under a chunky knit sweater or a white wool skirt paired
        with a <u>turtleneck</u> creates a textural look that's both cozy and chic.
      </p>
      <h2 className="display-400 mb-6 font-semibold sm:mb-8 xl:mb-11">Accessorize with Neutrals</h2>
      <p className="display-100 mb-8 xl:mb-11">
        When working with a predominantly white palette, neutrals become your best friends. From{' '}
        <u>white leather Chelsea boots</u> to <u>off-white beanies</u>, mix in plenty of
        winter-ready accessories and shoes for those finishing outfit tonal touches. So, step into
        the season with confidence, and let your winter whites make a bold and beautiful statement.
        Shop our <u>winter white edit here</u>.
      </p>
    </section>
    <section className="flex flex-col items-center gap-y-8 px-4 py-12 sm:px-8 sm:py-16 xl:gap-y-10 xl:p-15">
      <h2 className="display-400 text-center font-semibold">The White Whites Edit</h2>
      <ProductsCarousel data={product} dots={false} className="w-full" />
      <Button variant="dark" rounded>
        Shop Now
      </Button>
    </section>

    <section className="mb-10 grid grid-cols-1 gap-x-5 gap-y-12 px-4 sm:grid-cols-2 sm:gap-y-16 sm:px-8 lg:grid-cols-3 lg:gap-x-6 lg:px-10 xl:gap-y-30 xl:px-0">
      {stories.map((story) => (
        <StoryCard key={story.title} {...story} />
      ))}
    </section>
  </div>
)

export default BlogPage
