import { useState } from 'react'
import { evaluate } from 'mathjs'
import Display from './Display'
import Button from './Button'

const buttons: string[] = [
  'C', '±', '%', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '−',
  '1', '2', '3', '+',
  '0', '.', '=',
]

const Calculator = () => {
  const [input, setInput] = useState<string>('0')

  const handleClick = (label: string): void => {
    if (label === 'C') return setInput('0')

    if (label === '=') {
      try {
        const expr = input
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-')
        setInput(String(evaluate(expr)))
      } catch {
        setInput('Error')
      }
      return
    }

    if (label === '±') return setInput(String(parseFloat(input) * -1))
    if (label === '%') return setInput(String(parseFloat(input) / 100))

    setInput(prev => (prev === '0' ? label : prev + label))
  }

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map(btn => (
          <Button
            key={btn}
            label={btn}
            onClick={handleClick}
            className={
              btn === '='
                ? 'btn-equal'
                : ['÷', '×', '−', '+'].includes(btn)
                ? 'btn-operator'
                : ['C', '±', '%'].includes(btn)
                ? 'btn-function'
                : ''
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Calculator