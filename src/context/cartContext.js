import { createContext, useState } from "react";

export const cartContext = createContext({
    cart:[]
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const totalQuantity = cart.length;
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            const prodIndex = cart.findIndex(prod => prod.id === item.id);
            cart[prodIndex].quantity = cart[prodIndex].quantity + quantity;
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    const cleanCart = () => {
        setCart([])
    }
    const total = () => {
        let sumaPrice = 0;
        let cantidad = 0;
        cart.forEach(function(cart){
        cantidad = cart.quantity
        sumaPrice += cart.price*cantidad;
    })
    return sumaPrice;
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    return (
        <cartContext.Provider value ={{cart, addItem, removeItem, totalQuantity, cleanCart, total}}>
            {children}
        </cartContext.Provider>
    )
}