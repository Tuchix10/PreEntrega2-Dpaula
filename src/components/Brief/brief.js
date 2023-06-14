import React from "react"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext"

const pesoArgentino = new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
    minimunFractionDigits: 2
});

const Brief = () => {
    const {cart, total} = useContext(cartContext)
    return (
        <div className="brief-container">
            <div className="brief-title">
                <i className="bi bi-cart"></i>
                <label>Resumen de compra</label>
            </div>
            <div className="product-container">
                {cart.map(prod => <p>{prod.quantity} | {prod.title}</p>)}
                <span>El total a pagar es: {pesoArgentino.format(total())}</span>
            </div>
        </div>
    )
}

export default Brief



