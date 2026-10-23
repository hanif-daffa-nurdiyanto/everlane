interface ButtonProps {
  children?: string
  variant?: 'light' | 'dark'
  rounded?: boolean
  className?: string
}

const Button = ({
  children = '...',
  variant = 'light',
  rounded = false,
  className,
}: ButtonProps) => (
  <button
    className={`w-full max-w-72 cursor-pointer px-8 py-3 text-300 sm:w-auto sm:max-w-none sm:px-12 xl:px-[79.5px]
      ${variant === 'light' && 'bg-white text-everlane-500'}
      ${variant === 'dark' && 'bg-everlane-500 text-white'}

      ${rounded && 'rounded-lg px-10 py-5 font-semibold sm:px-16 xl:px-20.75'}
      ${className}
    `}
  >
    {children}
  </button>
)

export default Button
