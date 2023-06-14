import React from "react"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {totalQuantity} = useContext(cartContext)
    return (
        <div className="container-cart">
            <Link to={`/cart`}>
                <i className="bi bi-cart"></i>
            </Link>
            <div>
                <label className="cart-count">{totalQuantity}</label>
            </div>
        </div>
    )
}

export default CartWidget