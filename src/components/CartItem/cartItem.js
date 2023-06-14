import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const pesoArgentino = new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
    minimunFractionDigits: 2
});

const CartItem = ({id, title, img, price, quantity}) => {
    const {removeItem} = useContext(cartContext)
    const removerItem = () => {
        removeItem(id)
    }
    return (
        <div className="cart-item">
            <div className="card border-dark text-center">
                <img src={img} className="img-product-card" alt={title}/>
                <div className="card-body">
                    <h5 className="card-header">{title}</h5>
                    <p className="card-price">Precio: {pesoArgentino.format(price)}</p>
                    <p className="card-price">Cantidad: {quantity}</p>
                    <p className="card-price">Subtotal: {pesoArgentino.format(price*quantity)}</p>
                    <div className="product-card-footer-cart">
                        <Link className="btn-product-card" to={`/item/${id}`}>Ver detalle</Link>
                        <button className="btn-product-card" onClick={removerItem}>Eliminar producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;