import Image from 'next/image'
import Link from 'next/link'
import Tag from './ui/tag'

const StoryCard = ({ title, category, image, progress = false, slug }: StoryCardProps) => (
  <Link href={'/stories/' + slug} className="block">
    <Image
      src={image}
      alt={title}
      width={928}
      height={progress ? 666 : 928}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      className={`${progress ? 'aspect-928/666' : 'aspect-square'} mb-5 w-full object-cover`}
    />
    <h3 className="display-200">{title}</h3>
    {!progress && <Tag>{category}</Tag>}
  </Link>
)

export default StoryCard
