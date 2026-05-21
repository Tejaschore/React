interface ButtonProps {
  label: string
  onClick: (label: string) => void
  className?: string
}

const Button = ({ label, onClick, className }: ButtonProps) => (
  <button className={`btn ${className || ''}`} onClick={() => onClick(label)}>
    {label}
  </button>
)

export default Button