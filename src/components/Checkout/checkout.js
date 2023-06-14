import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/checkoutForm";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Timestamp, getDocs, addDoc, collection, where, documentId, query, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {cart, total, cleanCart} = useContext(cartContext)
    console.log(cart)
    const createOrder = async ({name, phone, email, address, city, state, zip}) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                    address,
                    city,
                    state,
                    zip,
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productRef = collection(db, 'Items');
            const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), 'in', ids)));
            const {docs} = productsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity;
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id)
                cleanCart()
            } else {
                console.error('hay productos que están fuera de stock')
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }
    return (
        <div>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout