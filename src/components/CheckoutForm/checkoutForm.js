import { useState } from "react";
import Brief from "../Brief/brief";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function validarIngresos(nameReg , phoneReg , emailReg , addressReg , cityReg , stateReg , zipReg) {
    if (nameReg === "" || phoneReg === "" || emailReg === "" || addressReg === "" || cityReg === "" || stateReg === "" || zipReg === "") {
        toast.error('Por favor llene todos los campos', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        return false;
    }
    return true;
}

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
        const handleConfirm = (event) => {
        event.preventDefault()
        if (validarIngresos(name, phone, email, address, city, state, zip)) {
            const userData = {
                name,
                phone,
                email,
                address,
                city,
                state,
                zip
            }
            onConfirm(userData)
        }
    }
    return (
        <div className="checkout-container">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <section className="form-checkout">
                <form className="personal-info-form" onSubmit={handleConfirm}>
                <h1 className="titulo-checkout">Checkout</h1>
                    <div className="personal-info">
                        <div>
                            <div>
                                <i className="bi bi-file-person"></i>
                                <label htmlFor="Nombre">Nombre</label>
                            </div>
                            <input placeholder="John M. Doe" type="text" id="Nombre" value={name} onChange={({target}) => setName((target.value).toLowerCase())}/>
                        </div>
                        <div>
                            <div>
                                <i className="bi bi-telephone"></i>
                                <label htmlFor="Phone">Telefono</label>
                            </div>
                            <input type="text" placeholder="3871234567" id="Phone" value={phone} onChange={({target}) => setPhone(target.value)}/>
                        </div>
                        <div>
                            <div>
                                <i className="bi bi-envelope-at"></i>
                                <label htmlFor="Mail">E-mail</label>
                            </div>
                            <input type="email" id="Mail" placeholder="john@example.com" value={email} onChange={({target}) => setEmail(target.value)}/>
                        </div>
                        <div>
                            <div>
                                <i className="bi bi-person-vcard"></i>
                                <label htmlFor="Dirección">Dirección</label>
                            </div>
                                <input type="text" id="Dirección" placeholder="221B Baker Street" value={address} onChange={({target}) => setAdress(target.value)}/>
                        </div>
                        <div>
                            <div>
                                <i className="bi bi-bank"></i>
                                <label htmlFor="Ciudad">Ciudad</label>
                            </div>
                            <input type="text" id="Ciudad" placeholder="London" value={city} onChange={({target}) => setCity(target.value)}/>
                        </div>
                        <div className="city-container">
                            <div>
                                <i class="bi bi-building"></i>
                                <label htmlFor="Localidad">Localidad</label>
                            </div>
                            <input type="text" id="Localidad" placeholder="London" value={state} onChange={({target}) => setState(target.value)}/>
                        </div>
                        <div className="zip-container">
                            <div>
                                <i class="bi bi-envelope-paper"></i>
                                <label htmlFor="Zip">Código Postal</label>
                            </div>
                            <input type="text" id="Zip" placeholder="EC3A2EB" value={zip} onChange={({target}) => setZip(target.value)}/>
                        </div>
                    </div>
                    <div className="personal-info-button">
                    <button type="submit" className="btn-submit-contact">Crear Orden de Compra</button>
                    </div>
                    <div className="cart-brief">
                        <Brief/>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CheckoutForm;