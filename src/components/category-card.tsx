import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/button'

interface CategoryCardProps {
  variant?: 'small' | 'large'
  title: string
  image?: string
  buttonText?: string
}

const CategoryCard = ({
  variant = 'small',
  title,
  image,
  buttonText = '...',
}: CategoryCardProps) => {
  if (variant === 'small') {
    return (
      <Link href={'#'}>
        <article>
          <Image
            src={image || '/images/shirts.png'}
            className="aspect-4/5 w-full object-cover"
            alt={title}
            width={100}
            height={100}
          />
          <h3 className="uppercase text-300 underline text-center mt-3">{title}</h3>
        </article>
      </Link>
    )
  }

  if (variant === 'large') {
    return (
      <article
        style={{
          backgroundImage: `url("${image}")`,
        }}
        className="
        flex h-112 w-full sm:h-128 md:h-104 lg:h-120 xl:h-133.5
        flex-col items-center justify-center
        gap-5.75
        bg-cover bg-center bg-no-repeat
      "
      >
        <h3 className="display-400 px-4 text-center text-white">{title}</h3>

        <Button>{buttonText}</Button>
      </article>
    )
  }
}

export default CategoryCard
