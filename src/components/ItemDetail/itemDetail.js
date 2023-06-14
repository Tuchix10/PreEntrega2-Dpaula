import ItemCount from "../ItemCount/itemCount"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const pesoArgentino = new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
    minimunFractionDigits: 2
});

const ItemDetail = ({id, title, img, category, description,  price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(cartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id,
            title,
            img,
            price
        }
        addItem(item,quantity)
    }
    return (
        <div className="ItemDetail">
            <div className="card border-dark text-center">
                <img src={img} className="img-product-card" alt={title}/>
                <div className="card-body">
                    <h5 className="card-header">{title}</h5>
                    <p className="card-price">Categoria: {category}</p>
                    <p className="card-price">{description}</p>
                    <p className="card-price">Precio: {pesoArgentino.format(price)}</p>
                    <p className="card-text">Stock disponible: {stock}</p>
                    <div className="product-card-footer">
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className="btn-product-card">Terminar Compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ItemDetail;