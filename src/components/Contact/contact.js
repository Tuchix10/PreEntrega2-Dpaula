import React from "react"

const Contact = () => {
    return (
        <div>
            <section className="contact">
                <div className="titulos1">
                    <h2>Dejanos tus datos y nos comunicamos!</h2>
                </div>
                <div className="titulos2">
                    <h2>Seguinos en nuestras redes sociales</h2>
                </div>
                <div className="titulos3">
                    <h2>También podes contactarte a través de</h2>
                </div>
                <div className="form">
                    <input type="text" placeholder="Nombre y apellido" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea name="" id="" cols="25" rows="5" placeholder="Ingresa tu comentario"></textarea>
                    <input type="submit" value="Enviar" className="btn-submit-contact"/>
                </div>
                <div className="social">
                    <div>
                        <a target="_blank" rel="noreferrer" title="IGfooter" href="https://www.instagram.com"> <i className="bi bi-instagram"></i></a>
                    </div>
                    <div className="social-txt">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com">Instagram</a>
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer" title="Fbfooter" href="https://www.facebook.com"> <i className="bi bi-facebook"></i></a>
                    </div>
                    <div className="social-txt">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com">Facebook</a>
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer" title="Twfooter" href="https://www.twitter.com"> <i className="bi bi-twitter"></i></a>
                    </div>
                    <div className="social-txt">
                        <a target="_blank" rel="noreferrer" href="https://www.twitter.com">Twitter</a>
                    </div>
                </div>
                <div className="extra">
                    <div>
                        <i className="bi bi-envelope-at"></i>
                    </div>
                    <div className="extra-txt">
                        <p>Ejemplo@ejemplo.com.ar</p>
                    </div>
                    <div>
                        <i className="bi bi-telephone"></i>
                    </div>
                    <div className="extra-txt">
                        <p>011 123456789</p>
                    </div>
                    <div>
                        <i className="bi bi-whatsapp"></i>
                    </div>
                    <div className="extra-txt">
                        <p>+54 9 11 123456789</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;