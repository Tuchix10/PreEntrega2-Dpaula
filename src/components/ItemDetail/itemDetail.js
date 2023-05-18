import ItemCount from "../ItemCount/itemCount"

const ItemDetail = ({name, img, category, description,  price, stock}) => {
    return (
        <div className="ItemDetail">
            <div className="card border-dark text-center">
                <img src={img} className="img-product-card" alt={name}/>
                <div className="card-body">
                    <h5 className="card-header">{name}</h5>
                    <p className="card-price">Categoria: {category}</p>
                    <p className="card-price">{description}</p>
                    <p className="card-price">Precio: ${price}</p>
                    <p className="card-text">Stock disponible: {stock}</p>
                    <div className="product-card-footer">
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ItemDetail;