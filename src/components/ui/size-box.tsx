interface SizeBoxProps {
  children: string
  value: string
  samesize?: boolean
}

const SizeBox = ({ children, value, samesize = false }: SizeBoxProps) => (
  <button
    type="button"
    className="text-200 flex items-center justify-center bg-everlane-100 py-3 cursor-pointer"
    style={{ width: samesize ? '45px' : 'auto' }}
    value={value}
  >
    {children}
  </button>
)

export default SizeBox
