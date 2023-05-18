import { Link } from "react-router-dom";

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className="card border-dark text-center">
            <img src={img} className="img-product-card" alt={name}/>
            <div className="card-body">
            <h5 className="card-header">{name}</h5>
            <p className="card-price">Precio: ${price}</p>
            <p className="card-text">Stock: {stock}</p>
            <div className="product-card-footer">
                <Link className="btn-product-card" to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    </div>
    )
}

export default Item;

