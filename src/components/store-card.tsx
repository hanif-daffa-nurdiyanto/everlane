import Image from 'next/image'

interface StoreCardProps {
  image: string
  name: string
  location: string
}

const StoreCard = ({ image, name, location }: StoreCardProps) => (
  <article>
    <Image
      src={image}
      alt={name}
      width={1170}
      height={780}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      className="mb-2 aspect-3/2 w-full object-cover xl:h-70 xl:aspect-auto"
    />
    <p className="text-100 mb-1 uppercase">{location}</p>
    <h3 className="text-400">{name}</h3>
  </article>
)

export default StoreCard
