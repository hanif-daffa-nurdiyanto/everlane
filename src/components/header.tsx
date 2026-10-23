'use client'

import ArrowRightIcon from '@/assets/icons/ArrowRight.svg'
import MenuIcon from '@/assets/icons/List.svg'
import SearchIcon from '@/assets/icons/MagnifyingGlass.svg'
import CartIcon from '@/assets/icons/ShoppingCartSimple.svg'
import UserIcon from '@/assets/icons/User.svg'
import CloseIcon from '@/assets/icons/X.svg'
import LogoIcon from '@/assets/icons/logo.svg'
import USIcon from '@/assets/icons/us.svg'
import CartDrawer from '@/components/cart-drawer'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const mainNavigation = [
  {
    label: 'Women',
    href: '/women',
  },
  {
    label: 'Men',
    href: '/men',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Everworld Stories',
    href: '/stories',
  },
]

const categoryNavigation = [
  'Holiday Gifting',
  'New Arrivals',
  'Best-Sellers',
  'Clothing',
  'Tops & Sweaters',
  'Pants & Jeans',
  'Shoes & Bags',
  'Sale',
]

const popularCategories = [
  { title: 'Women’s Sweaters', image: '/images/cat-1.png' },
  { title: 'Men’s Sweaters', image: '/images/cat-2.png' },
  { title: 'Women’s Denim', image: '/images/cat-3.png' },
  { title: 'Men’s Outerwear', image: '/images/cat-4.png' },
]

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
        setIsMobileMenuOpen(false)
        setIsDesktopMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen((current) => !current)
    setIsMobileMenuOpen(false)
    setIsDesktopMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current)
    setIsSearchOpen(false)
    setIsDesktopMenuOpen(false)
  }

  const openCart = () => {
    setIsCartOpen(true)
    setIsSearchOpen(false)
    setIsMobileMenuOpen(false)
    setIsDesktopMenuOpen(false)
  }

  return (
    <header className="relative z-50 bg-white text-200">
      <div className="relative flex min-h-8 items-center justify-center bg-black px-4 py-1.75 text-center text-white sm:px-7.5">
        <p className="flex flex-wrap items-center justify-center gap-x-1 font-semibold">
          <span className="hidden sm:inline">Get early access on launches and offers.</span>
          <span className="flex items-center gap-x-1 font-normal underline">
            Sign Up For Texts
            <ArrowRightIcon className="size-3.5 shrink-0 text-white" />
          </span>
        </p>
        <div className="absolute right-7.5 hidden items-center gap-x-3 md:flex">
          <USIcon className="shrink-0" />
          <span>USD</span>
        </div>
      </div>

      <nav className="relative grid min-h-14 grid-cols-[1fr_auto_1fr] items-center border-b border-everlane-200 px-4 text-everlane-500 sm:px-6 lg:px-8 xl:px-17">
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          className="w-fit cursor-pointer p-2 lg:hidden"
        >
          {isMobileMenuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>

        <ul className="hidden items-center whitespace-nowrap lg:flex">
          {mainNavigation.map(({ label, href }, i) => (
            <li key={i} className="relative group">
              <Link href={href} className="block px-2 py-5 xl:px-3">
                {label}
              </Link>
              {pathname.startsWith(href) ? (
                <div className="mx-2 xl:mx-3 h-0.5 bg-everlane-500 absolute bottom-0 w-[calc(100%-1rem)] xl:w-[calc(100%-1.5rem)]" />
              ) : (
                <div className="hidden group-hover:block mx-2 xl:mx-3 h-0.5 bg-everlane-300 absolute bottom-0 w-[calc(100%-1rem)] xl:w-[calc(100%-1.5rem)]" />
              )}
            </li>
          ))}
        </ul>

        <Link href="/" aria-label="Everlane home" className="flex justify-center">
          <LogoIcon className="h-auto w-28 sm:w-36 lg:w-32 xl:h-3.5 xl:w-auto" />
        </Link>

        <ul className="my-1 flex items-center justify-end sm:my-2">
          <li>
            <button
              type="button"
              onClick={toggleSearch}
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
              aria-expanded={isSearchOpen}
              className="cursor-pointer p-2 sm:p-3"
            >
              {isSearchOpen ? <CloseIcon className="size-4" /> : <SearchIcon className="size-4" />}
            </button>
          </li>
          <li className="hidden sm:block">
            <Link href="#" aria-label="Account" className="block p-3">
              <UserIcon className="size-4 shrink-0" />
            </Link>
          </li>
          <li>
            <button
              type="button"
              aria-label="Open shopping cart"
              aria-controls="cart-drawer"
              aria-expanded={isCartOpen}
              onClick={openCart}
              className="block cursor-pointer p-2 sm:p-3"
            >
              <CartIcon className="size-4 shrink-0" />
            </button>
          </li>
        </ul>
      </nav>

      {!pathname.startsWith('/stories') && (
        <ul
          onMouseEnter={() => !isSearchOpen && setIsDesktopMenuOpen(true)}
          onFocus={() => !isSearchOpen && setIsDesktopMenuOpen(true)}
          onMouseLeave={() => setIsDesktopMenuOpen(false)}
          className="scrollbar-none hidden items-center gap-x-1 overflow-x-auto whitespace-nowrap px-6 text-everlane-500 lg:flex lg:justify-start xl:justify-center"
        >
          {categoryNavigation.map((item) => (
            <li key={item} className="shrink-0">
              <Link href="#" className="block px-3 py-5">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {isMobileMenuOpen && <MobileMenu />}
      {isSearchOpen && <DropdownSearch onCancel={() => setIsSearchOpen(false)} />}
      {!pathname.startsWith('/stories') &&
        !pathname.startsWith('/blog') &&
        !isSearchOpen &&
        isDesktopMenuOpen && <DropdownMenu />}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

const MobileMenu = () => (
  <div className="absolute left-0 top-full max-h-[calc(100dvh-6rem)] w-full overflow-y-auto border-y border-everlane-200 bg-white px-5 py-6 shadow-md lg:hidden">
    <nav aria-label="Mobile navigation">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-5 text-300 sm:grid-cols-4">
        {mainNavigation.map(({ label, href }, i) => (
          <li key={i}>
            <Link href={href} className="block py-1 font-semibold">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-everlane-200 pt-6 text-200 sm:grid-cols-4">
        {categoryNavigation.map((item) => (
          <li key={item}>
            <Link href="#" className="block py-1">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

const DropdownMenu = () => (
  <div className="absolute left-0 top-full hidden max-h-[calc(100dvh-8rem)] w-full grid-cols-4 gap-6 overflow-y-auto border-t border-everlane-200 bg-white px-10 pb-14 pt-10 shadow-md lg:grid xl:px-20 xl:pb-18 xl:pt-12 2xl:px-35 2xl:pb-22.5 2xl:pt-13.5">
    <div>
      <h3 className="mb-4 text-100 font-semibold uppercase text-everlane-300">Highlights</h3>
      <ul className="flex flex-col gap-y-4 text-300">
        <li>
          <Link href="#">Shop All New Arrivals</Link>
        </li>
        <li>
          <Link href="#">The Gift Guide</Link>
        </li>
        <li>
          <Link href="#">New Bottoms</Link>
        </li>
        <li>
          <Link href="#">New Tops</Link>
        </li>
        <li>
          <Link href="#">T-Shirt Bundles</Link>
        </li>
        <li>
          <Link href="#">Under $100</Link>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="mb-4 text-100 font-semibold uppercase text-everlane-300">Featured Shops</h3>
      <ul className="flex flex-col gap-y-4 text-300">
        <li>
          <Link href="#">The Holiday Outfit Edit</Link>
        </li>
        <li>
          <Link href="#">Giftable Sweaters</Link>
        </li>
        <li>
          <Link href="#">Uniform & Capsule</Link>
        </li>
        <li>
          <Link href="#">The Performance Chino Shop</Link>
        </li>
        <li>
          <Link href="#">Top Rated Men’s Clothing</Link>
        </li>
      </ul>
    </div>
    <Link
      href="#"
      className="flex aspect-square w-full items-end justify-between gap-3 bg-[url('/images/dd-1.png')] bg-cover bg-center p-3 pl-4 text-white"
    >
      <h3 className="display-100 font-semibold">The Holiday Outfit Edit</h3>
      <ArrowRightIcon className="size-6 shrink-0" />
    </Link>
    <Link
      href="#"
      className="flex aspect-square w-full items-end justify-between gap-3 bg-[url('/images/dd-2.png')] bg-cover bg-center p-3 pl-4 text-white"
    >
      <h3 className="display-100 font-semibold">Giftable Sweaters</h3>
      <ArrowRightIcon className="size-6 shrink-0" />
    </Link>
  </div>
)

const DropdownSearch = ({ onCancel }: { onCancel: () => void }) => (
  <div className="absolute left-0 top-full max-h-[calc(100dvh-6rem)] w-full overflow-y-auto bg-white shadow-md">
    <form
      role="search"
      onSubmit={(event) => event.preventDefault()}
      className="flex border-y border-everlane-200 px-4 py-4 text-200 sm:px-8 lg:px-16 lg:py-6 xl:px-32 2xl:px-81.5"
    >
      <label htmlFor="site-search" className="sr-only">
        Search Everlane
      </label>
      <input
        id="site-search"
        type="search"
        className="min-w-0 flex-1 rounded-sm bg-everlane-100 p-4 focus:outline-2 focus:outline-offset-2 focus:outline-everlane-500"
        placeholder="Search"
        autoFocus
      />
      <button type="button" onClick={onCancel} className="cursor-pointer px-3 py-4 sm:px-4">
        Cancel
      </button>
    </form>
    <div className="px-4 py-6 text-everlane-400 sm:px-8 lg:px-10 lg:py-8 xl:px-20 2xl:px-39">
      <h2 className="mb-4 text-300">Popular Categories</h2>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-5">
        {popularCategories.map(({ title, image }) => (
          <Link href="#" key={title}>
            <Image
              src={image}
              className="aspect-3/4 h-auto w-full object-cover"
              alt={title}
              width={510}
              height={680}
              sizes="(min-width: 640px) 25vw, 50vw"
            />
            <h3 className="mt-2.5 text-300 font-normal underline underline-offset-2 sm:text-400">
              {title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default Header
