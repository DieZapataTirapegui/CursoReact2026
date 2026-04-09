import { ItemCounter } from "./shopping-cart/ItemCounter"

interface ItemInCart {
    productName: string;
    quantity: number;
} 

const itemsInCart: ItemInCart[] = [
    { productName: 'Play Station 5', quantity: 1 },
    { productName: 'Xbox Series X', quantity: 2 },
    { productName: 'Nintendo Switch', quantity: 3 },
]

export function FirstStepsApp() {
    return (
        <>
            {/* <h1>Hello, React!</h1>
            <p>Soy un parrafito</p>
        
            <button>Click me</button>
        
            <div>
              <h2>Hola dentro de un div</h2>
            </div> */}
            <h1>Carrito de Compras</h1>
            {itemsInCart.map(item => (
                <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />
            ))}

        </>
    )
}