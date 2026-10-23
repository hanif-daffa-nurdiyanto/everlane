'use client'

import Link from 'next/link'

const count = 249
import CaretUpIcon from '@/assets/icons/CaretUp.svg'
import CaretDownIcon from '@/assets/icons/CaretDown.svg'
import { useState } from 'react'
import Image from 'next/image'
import { ColorSelectionItem } from '../ui/color'
import SizeBox from '../ui/size-box'

interface Product {
  id: number
  slug: string
  name: string
  price: number
  image: string
  discount?: number
  colors?: {
    label: string
    hex: string
    image?: string
  }[]
  tags?: string[]
}

const category = [
  {
    label: 'Accessories & Gift Cards',
    id: '1',
  },
  {
    label: 'Backpacks, Weekenders & Duffle Bags',
    id: '2',
  },
  {
    label: 'Dress Shirts & Button Downs',
    id: '3',
  },
  {
    label: 'Hoodies & Sweatshirts',
    id: '4',
  },
]

const color = [
  {
    label: 'Black',
    hex: '#1A1A1A',
  },
  {
    label: 'Blue',
    hex: '#21558D',
  },
  {
    label: 'Brown',
    hex: '#925C37',
  },
  {
    label: 'Green',
    hex: '#585B45',
  },
  {
    label: 'Gray',
    hex: '#E1E1E3',
  },
  {
    label: 'Orange',
    hex: '#D38632',
  },
  {
    label: 'Pink',
    hex: '#EFCEC9',
  },
  {
    label: 'Red',
    hex: '#BD2830',
  },
  {
    label: 'Tan',
    hex: '#B3A695',
  },
]

const size = [
  {
    category: 'Waist',
    sizes: ['36', '38', '40', '42', '44', '46', '48', '50'],
  },
  {
    category: 'CLothing',
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  },
]

const product = [
  {
    id: 1,
    slug: 'slug-product',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
    image: '/images/products/1.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
  },
  {
    id: 2,
    slug: 'slug-product',
    name: 'The Organic Cotton Long-Sleeve Turtleneck',
    price: 132,
    discount: 0.3,
    image: '/images/products/2.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
    tags: ['ORGANIC COTTON'],
  },
  {
    id: 3,
    slug: 'slug-product',
    name: 'The Wool Flannel Pant',
    price: 132,
    discount: 0.3,
    image: '/images/products/3.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
    tags: ['RENWED MATERIALS', 'CLEANER CHEMISTRY'],
  },
  {
    id: 4,
    slug: 'slug-product',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
    image: '/images/products/4.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
  },
  {
    id: 1,
    slug: 'slug-product',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
    image: '/images/products/5.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
  },
  {
    id: 1,
    slug: 'slug-product',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
    image: '/images/products/6.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
  },
  {
    id: 1,
    slug: 'slug-product',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
    image: '/images/products/7.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
  },
  {
    id: 1,
    slug: 'slug-product',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
    image: '/images/products/8.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
  },
  {
    id: 1,
    slug: 'slug-product',
    name: 'The Cloud Relaxed Cardigan',
    price: 132,
    discount: 0.3,
    image: '/images/products/9.png',
    colors: [
      {
        label: 'Black',
        hex: '#1A1A1A',
        image: '/images/products/2.png',
      },
      {
        label: 'Blue',
        hex: '#21558D',
        image: '/images/products/3.png',
      },
    ],
  },
]

const ListingPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="mx-auto my-5 grid w-full grid-cols-1 gap-x-4 px-4 text-black sm:my-6 sm:px-6 lg:my-7.5 lg:grid-cols-[auto_1fr] lg:px-10 xl:px-20">
      {mobileFiltersOpen && (
        <>
          <button
            type="button"
            aria-label="Close filters"
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside
            id="mobile-product-filters"
            role="dialog"
            aria-modal="true"
            aria-label="Product filters"
            className="fixed inset-y-0 left-0 z-60 w-[min(20rem,calc(100%-3rem))] overflow-y-auto bg-white px-5 pb-8 shadow-xl lg:hidden"
          >
            <FilterPanel idPrefix="mobile" onClose={() => setMobileFiltersOpen(false)} />
          </aside>
        </>
      )}

      <aside className="hidden w-49 self-start select-none lg:block">
        <FilterPanel idPrefix="desktop" showProductCount />
      </aside>

      <main className="min-w-0 space-y-4 lg:space-y-2">
        <div className="pb-1 pt-2 sm:pt-3 lg:py-4">
          <span className="text-200 block text-everlane-300">Home / Men</span>
          <h1 className="display-200 mt-1">Men’s Clothing & Apparel - New Arrivals</h1>
          <span className="text-400 mt-1 block">Featured</span>

          <div className="mt-4 flex items-center justify-between border-y border-everlane-200 py-3 lg:hidden">
            <span className="text-200">{count} Products</span>
            <button
              type="button"
              aria-expanded={mobileFiltersOpen}
              aria-controls="mobile-product-filters"
              className="text-300 font-semibold"
              onClick={() => setMobileFiltersOpen(true)}
            >
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-2.5 gap-y-8 text-everlane-500 sm:gap-x-4 md:gap-y-10 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6">
          {product.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  )
}

const FilterPanel = ({
  idPrefix,
  showProductCount = false,
  onClose,
}: {
  idPrefix: string
  showProductCount?: boolean
  onClose?: () => void
}) => {
  const [categoryOpen, setCategoryOpen] = useState(true)
  const [colorOpen, setColorOpen] = useState(true)
  const [sizeOpen, setSizeOpen] = useState(true)

  return (
    <div className="select-none">
      {onClose && (
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-everlane-200 bg-white py-5">
          <h2 className="display-100">Filters</h2>
          <button
            type="button"
            aria-label="Close filters"
            className="flex size-9 items-center justify-center text-2xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      )}

      {showProductCount && (
        <div className="text-200 border-b border-everlane-200 py-4">{count} Products</div>
      )}

      <div className="border-b border-everlane-200">
        <button
          type="button"
          aria-expanded={categoryOpen}
          className="flex w-full cursor-pointer items-center justify-between"
          onClick={() => setCategoryOpen((prev) => !prev)}
        >
          <span className="text-300 block py-4 font-semibold">Category</span>
          {categoryOpen ? <CaretUpIcon className="size-3" /> : <CaretDownIcon className="size-3" />}
        </button>
        {categoryOpen && (
          <>
            <div className="max-h-42.25 space-y-1.5 overflow-x-hidden overflow-y-auto">
              {category.map((item) => (
                <CategoryChecklistItem
                  key={item.id}
                  {...item}
                  inputId={`${idPrefix}-category-${item.id}`}
                />
              ))}
            </div>
            <button type="button" className="text-200 cursor-pointer pb-5 pt-1">
              View More +
            </button>
          </>
        )}
      </div>

      <div className="border-b border-everlane-200">
        <button
          type="button"
          aria-expanded={colorOpen}
          className="flex w-full cursor-pointer items-center justify-between"
          onClick={() => setColorOpen((prev) => !prev)}
        >
          <span className="text-300 block py-4 font-semibold">Color</span>
          {colorOpen ? <CaretUpIcon className="size-3" /> : <CaretDownIcon className="size-3" />}
        </button>
        {colorOpen && (
          <>
            <div className="grid grid-cols-3 gap-y-4">
              {color.map((item) => (
                <ColorItem key={item.label} label={item.label} hex={item.hex} />
              ))}
            </div>
            <button type="button" className="text-200 cursor-pointer pb-5 pt-1">
              View More +
            </button>
          </>
        )}
      </div>

      <div>
        <button
          type="button"
          aria-expanded={sizeOpen}
          className="flex w-full cursor-pointer items-center justify-between"
          onClick={() => setSizeOpen((prev) => !prev)}
        >
          <span className="text-300 block py-4 font-semibold">Size</span>
          {sizeOpen ? <CaretUpIcon className="size-3" /> : <CaretDownIcon className="size-3" />}
        </button>
        {sizeOpen &&
          size.map(({ category, sizes }) => (
            <div key={category}>
              <p className="text-200 mb-2">{category}</p>
              <div className="mb-6 grid grid-cols-4 gap-x-1 gap-y-2">
                {sizes.map((itemSize, index) => (
                  <SizeBox key={index} value={itemSize}>{itemSize}</SizeBox>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const CategoryChecklistItem = ({
  label,
  id,
  inputId,
}: {
  label: string
  id: string
  inputId: string
}) => {
  return (
    <label htmlFor={inputId} className="flex cursor-pointer items-center gap-2">
      <input id={inputId} type="checkbox" value={id} className="peer sr-only" />
      <span
        className="
          flex size-8 items-center justify-center rounded-md
          border-[0.5px] border-black bg-white transition-colors
          peer-checked:border-black
          peer-checked:bg-black
          peer-checked:[&>svg]:opacity-100
        "
      >
        <svg
          className="size-8 text-white opacity-0 transition-opacity"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>

      <span className="text-200">{label}</span>
    </label>
  )
}

const ColorItem = ({ label, hex }: { label: string; hex: string }) => (
  <div className="flex items-center gap-2 flex-col cursor-pointer">
    <div className="size-6 rounded-full" style={{ backgroundColor: hex }}></div>
    <span className="text-200">{label}</span>
  </div>
)

const ProductCard = ({ name, price, image, colors, discount, tags, slug }: Product) => {
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null)

  return (
    <article className="min-w-0 space-y-0.75">
      <Link href={'/product/' + slug || '#'} className="block">
        <div className="relative aspect-3/4 w-full overflow-hidden bg-everlane-200 xl:aspect-auto xl:h-98">
          <Image
            src={activeColorIndex !== null ? (colors?.[activeColorIndex]?.image ?? image) : image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 30vw, 50vw"
            className="object-cover object-bottom"
          />
          {discount && (
            <span className="text-200 absolute left-1.5 top-1.5 block bg-white px-1.5 py-1 text-red sm:left-2 sm:top-2">
              {discount * 100}% off
            </span>
          )}
        </div>
        <div className="text-200 mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-x-2">
          <h2 className="min-w-0 flex-1">{name}</h2>
          <div className="flex shrink-0 gap-x-1">
            <span className="text-everlane-300 line-through">$188</span>
            <span className="font-semibold">${price}</span>
          </div>
        </div>
      </Link>
      {colors && colors.length > 0 && (
        <div className="mb-2.5">
          <span className="text-200 mb-2.5 block text-everlane-300">
            {activeColorIndex !== null ? colors[activeColorIndex].label : colors[0].label}
          </span>

          <div className="flex items-center gap-2.5">
            {colors.map(({ hex }, index) => (
              <ColorSelectionItem
                key={index}
                hex={hex}
                active={index === activeColorIndex}
                onClick={() => setActiveColorIndex(index)}
                onUnset={() => setActiveColorIndex(null)}
              />
            ))}
          </div>
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-100 border border-everlane-200 px-2 py-1.5 text-everlane-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default ListingPage
