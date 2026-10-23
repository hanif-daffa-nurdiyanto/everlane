import { ReactNode } from "react"

const Tag = ({ children }: { children: ReactNode }) => (
  <div className="mt-3 w-fit rounded-full border border-everlane-200 px-5 py-1 text-200 font-semibold">
    {children}
  </div>
)

export default Tag