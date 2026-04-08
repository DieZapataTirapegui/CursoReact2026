import type { CSSProperties } from "react"

interface ItemCounterProps {
    name: string
    quantity?: number
}

// Como puedo hacer funcionar los btones de +1 y -1?
const styles: CSSProperties = { display: 'flex', 
    gap: '1rem', alignItems: 'center', 
    marginBottom: '1rem', 
    padding: '1rem', 
    border: '1px solid #ccc', 
    borderRadius: '8px' }

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {
  return (
    <section style={styles}>
      <span style={{ fontWeight: 'bold' }}>{name}</span>

        <button>+1</button>
        <button>{quantity || 0}</button>
        <button>-1</button>
    </section>
  )
}
