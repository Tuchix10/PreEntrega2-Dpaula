import React from "react"
import { useContext } from "react"
import CartItem from "../CartItem/cartItem"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const pesoArgentino = new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
    minimunFractionDigits: 2
});

const Cart = () => {
    const {cart, cleanCart, totalQuantity, total} = useContext(cartContext)
    if(totalQuantity === 0) {
        return (
            <div className="no-items-container">
                <h1 className="">No hay items en el carrito</h1>
                <Link to="/" className="btn-product-card">Productos</Link>
            </div>
        )
    }
    return (
        <div>
            <div className="cart-item-container">
                {cart.map(p => <CartItem key={p.id} {...p}/>)}
            </div>
            <div className="cart-total-container">
                <h3>Total: {pesoArgentino.format(total())}</h3>
                <Link to="/checkout" className="btn-product-card">Checkout</Link>
                <button onClick={() => cleanCart()} className="btn-product-card">Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart