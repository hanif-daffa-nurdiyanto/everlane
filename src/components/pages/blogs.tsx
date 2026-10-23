import Image from 'next/image'
import Button from '../ui/button'
import { progress, stories } from '@/data/stories'
import StoryCard from '../story-card'

const BlogsPage = () => (
  <div className="text-black">
    <section className="mx-4 my-10 sm:mx-8 sm:my-12 lg:mx-10 xl:mx-15 xl:my-16">
      <div className="h-2 w-full bg-everlane-500 sm:h-2.5 xl:h-3.5" />
      <div className="mt-2">
        <h1 className="display-900 font-bold">everworld</h1>
        <p className="display-100 max-w-4xl">
          We’re on a mission to clean up a dirty industry.
          <span className="block">
            These are the people, stories, and ideas that will help us get there.
          </span>
        </p>
      </div>
    </section>
    <section className="mx-4 my-16 space-y-5 sm:mx-8 sm:my-20 lg:mx-10 xl:mx-15 xl:my-30 xl:space-y-3">
      <h2 className="display-600 font-semibold">The Latest</h2>
      <div className="mb-10 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:gap-y-30">
        {stories.map((story) => (
          <StoryCard key={story.title} {...story} />
        ))}
      </div>
      <Button rounded variant="dark" className="mx-auto block">
        Load more Articles
      </Button>
    </section>
    <Image
      src="/images/stories/slide.png"
      alt="Everlane sustainability story"
      width={2654}
      height={450}
      sizes="100vw"
      className="h-28 w-full object-cover sm:h-40 lg:h-48 xl:h-56.25"
    />
    <section className="mx-4 my-16 space-y-5 sm:mx-8 sm:my-20 lg:mx-10 xl:mx-15 xl:my-30 xl:space-y-3">
      <h2 className="display-600 font-semibold">Our Progress</h2>
      <div className="mb-10 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:gap-y-30">
        {progress.map((story) => (
          <StoryCard progress key={story.title} {...story} />
        ))}
      </div>
    </section>
    <section className="space-y-6 bg-black px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-10 xl:space-y-8 xl:px-15 xl:py-22.5">
      <h2 className="display-600 font-semibold">Follow us on social for more</h2>
      <Button variant="light" rounded>
        @Everlane Instagram
      </Button>
    </section>
  </div>
)

export default BlogsPage
