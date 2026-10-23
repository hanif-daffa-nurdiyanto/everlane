import StoreCard from '../store-card'

const stores = [
  {
    image: '/images/store-1.png',
    name: 'Everlane Los Angeles',
    location: 'SEATTLE',
  },
  {
    image: '/images/store-2.png',
    name: 'Valencia Street, San Francisco',
    location: 'SAN FRANCISCO',
  },
  {
    image: '/images/store-3.png',
    name: 'Stanford',
    location: 'PALO ALTO',
  },
  {
    image: '/images/store-4.png',
    name: 'Abbot Kinney',
    location: 'LOS ANGELES',
  },
  {
    image: '/images/store-5.png',
    name: 'Seaport',
    location: 'BOSTON',
  },
  {
    image: '/images/store-6.png',
    name: 'Prince Street, New York',
    location: 'NEW YORK',
  },
  {
    image: '/images/store-7.png',
    name: 'Williamsburg',
    location: 'BROOKLYN',
  },
  {
    image: '/images/store-8.png',
    name: 'King of Prussia',
    location: 'KING OF PRUSSIA',
  },
  {
    image: '/images/store-9.png',
    name: 'GEORGETOWN',
    location: 'GEORGETOWN',
  },
]

const StoresPage = () => (
  <div className="mx-4 my-10 sm:mx-6 sm:my-12 lg:mx-8 xl:mx-8.75 xl:my-7.5">
    <section className="mb-10 space-y-3 px-4 text-center sm:mb-12 sm:space-y-4 xl:mb-16">
      <h1 className="display-200">Stores</h1>
      <p className="text-400">Find one of our 11 stores nearest you.</p>
    </section>
    <section className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 xl:gap-x-7.5 xl:gap-y-16">
      {stores.map((store, index) => (
        <StoreCard key={index} {...store} />
      ))}
    </section>
  </div>
)

export default StoresPage
