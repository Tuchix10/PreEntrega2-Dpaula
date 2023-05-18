import React from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <div className="container-cart">
            <Link to={`/cart`}>
                <i className="bi bi-cart" ></i>
            </Link>
            <div>
                <label className="cart-count">1</label>
            </div>
        </div>
    )
}

export default CartWidget