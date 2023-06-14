import { Link } from "react-router-dom";

const pesoArgentino = new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
    minimunFractionDigits: 2
});

const Item = ({id, title, img, price, stock}) => {
    return (
        <div className="card border-dark text-center">
            <img src={img} className="img-product-card" alt={title}/>
            <div className="card-body">
                <h5 className="card-header">{title}</h5>
                <p className="card-price">Precio: {pesoArgentino.format(price)}</p>
                <p className="card-text">Stock: {stock}</p>
                <div className="product-card-footer">
                    <Link className="btn-product-card" to={`/item/${id}`}>Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;

