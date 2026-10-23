import type { ButtonHTMLAttributes } from 'react'

interface DotProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

const Dot = ({ active = false, ...props }: DotProps) => (
  <button
    type="button"
    aria-current={active ? 'true' : undefined}
    className="flex size-6 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-everlane-500"
    {...props}
  >
    <span
      className={`aspect-square w-1.75 rounded-full ${active ? 'bg-everlane-500' : 'bg-everlane-200'}`}
    />
  </button>
)

export default Dot
