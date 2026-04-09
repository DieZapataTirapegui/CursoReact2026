import { useState, type CSSProperties } from "react"
// import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface ItemCounterProps {
    name: string
    quantity?: number
}
 
export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {

  const [count, setCount] = useState(quantity)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    if (count===1)return;
    setCount(count - 1)
  }

  const style: CSSProperties = { 
      color: count === 1 ? 'red' : 'black'
  }

  return (
    <section className={styles['item-row']} >
      <span className={styles['item-name']}  style={style}>{name}</span>

        <button onClick={ handleAdd }>+1</button>
        <button>{count}</button>
        <button onClick={ handleSubtract }>-1</button>
    </section>
  )
}
