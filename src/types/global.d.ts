interface StoryCardProps {
  title: string
  category?: string
  image: string
  progress?: boolean
  slug: string
}

interface ProductCarouselProps {
  data?: Product[]
  dots?: boolean
  className?: string
}

interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
}
