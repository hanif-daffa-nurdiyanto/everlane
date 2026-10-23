import ArrowRightIcon from '@/assets/icons/ArrowRight.svg'

const Footer = () => (
  <footer className="bg-everlane-100 px-4 pt-10 sm:px-6 lg:px-10 xl:px-18">
    <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 xl:grid-cols-6 xl:gap-y-0">
      <div className="p-2 sm:p-5">
        <h3 className="mb-5 text-400 font-semibold">Account</h3>
        <ul className="flex flex-col gap-2.5 text-300 text-everlane-300">
          <li>
            <a href="">Log In</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Redeem a Gift Card</a>
          </li>
        </ul>
      </div>
      <div className="p-2 sm:p-5">
        <h3 className="mb-5 text-400 font-semibold">Company</h3>
        <ul className="flex flex-col gap-2.5 text-300 text-everlane-300">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Environmental Initiatives</a>
          </li>
          <li>
            <a href="">Factories</a>
          </li>
          <li>
            <a href="">DEI</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">International</a>
          </li>
        </ul>
      </div>
      <div className="p-2 sm:p-5">
        <h3 className="mb-5 text-400 font-semibold">Get Help</h3>
        <ul className="flex flex-col gap-2.5 text-300 text-everlane-300">
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Return Policy</a>
          </li>
          <li>
            <a href="">Shipping Info</a>
          </li>
          <li>
            <a href="">Bulk Orders</a>
          </li>
        </ul>
      </div>
      <div className="p-2 sm:p-5">
        <h3 className="mb-5 text-400 font-semibold">Connect</h3>
        <ul className="flex flex-col gap-2.5 text-300 text-everlane-300">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Affiliates</a>
          </li>
          <li>
            <a href="">Our Stores</a>
          </li>
        </ul>
      </div>
      <div className="order-first col-span-2 mb-4 p-2 sm:p-5 md:col-span-4 xl:order-none xl:col-span-2 xl:mb-0">
        <form action="" className="flex w-full">
          <input
            type="email"
            className="min-w-0 flex-1 border-y border-l border-everlane-200 bg-white px-3.75 py-4.5 text-300 placeholder:text-everlane-200 focus:outline-0"
            placeholder="Email Address"
          />
          <button type="submit" className="py-[14.5px] px-3.5 bg-everlane-500 cursor-pointer">
            <ArrowRightIcon className="size-6 shrink-0 text-white" />
          </button>
        </form>
      </div>
    </div>
    <div className="py-6 text-200 text-everlane-300 xl:py-4">
      <div className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-center">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Do Not Sell or Share My Personal Information</a>
        <a href="#">CS Supply Chain Transparency</a>
        <a href="#">Vendor Code of Conduct</a>
        <a href="#">Sitemap Pages</a>
        <a href="#">Sitemap Products</a>
      </div>
      <div className="text-center w-full">© {new Date().getFullYear()} All Rights Reserved</div>
    </div>
  </footer>
)

export default Footer
