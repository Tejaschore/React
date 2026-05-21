interface DisplayProps {
  value: string
}

const Display = ({ value }: DisplayProps) => (
  <div className="display">
    <span>{value}</span>
  </div>
)

export default Display