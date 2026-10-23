import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  simple?: boolean
  title: string
  category?: string
  price: number
  image?: string
  className?: string
}

const ProductCard = ({
  title,
  image,
  category,
  price,
  simple = false,
  className = 'w-60 sm:w-70.5',
}: ProductCardProps) => (
  <Link href="#" className={`block h-full shrink-0 ${className}`}>
    <article >
      <Image
        src={image || '/images/hero.png'}
        className="h-90 w-full object-cover sm:h-105"
        width={400}
        height={800}
        alt={title}
      />
      <div className="flex w-full gap-x-3 mb-0.75 text-200 mt-1.5">
        <h3 className="text-wrap flex-1">{title}</h3>
        <p>${price}</p>
      </div>
      <p className="text-200 text-everlane-300">{category}</p>
    </article>
  </Link>
)

export default ProductCard
