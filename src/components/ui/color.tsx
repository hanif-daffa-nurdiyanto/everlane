interface ColorSelectionItemProps {
  hex: string
  active?: boolean
  onClick?: () => void
  onUnset?: () => void
  size?: string
}

const ColorSelectionItem = ({
  hex,
  active = false,
  size = '20px',
  onClick,
  onUnset,
}: ColorSelectionItemProps) => {
  return active ? (
    <button
      type="button"
      aria-label="Clear selected color"
      onClick={onUnset}
      className="flex cursor-pointer items-center justify-center rounded-full border bg-white"
      style={{ borderColor: 'black', width: size, height: size }}
    >
      <div
        className="rounded-full"
        style={{
          backgroundColor: hex,
          width: `${parseFloat(size) - parseFloat(size) / 5}px`,
          height: `${parseFloat(size) - parseFloat(size) / 5}px`,
        }}
      />
    </button>
  ) : (
    <button
      type="button"
      aria-label="Select color"
      onClick={onClick}
      className="cursor-pointer rounded-full"
      style={{ backgroundColor: hex, width: size, height: size }}
    />
  )
}

export { ColorSelectionItem }
