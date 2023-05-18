import React from "react";
import { Link } from "react-router-dom";
import '../../scss/components/_navbar.scss';
import BrandLogo from '../BrandLogo/brandLogo';
import CartWidget from "../CartWidget/cartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand">
                    <BrandLogo/>
                </Link>
                <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/about`}>Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/contact`}>Contacto</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Componentes de PC</Link>
                            <ul className="dropdown-menu">
                                <li><Link to={`/category/CPU`} className="dropdown-item">CPU</Link></li>
                                <li><Link to={`/category/GPU`} className="dropdown-item">GPU</Link></li>
                                <li><Link to={`/category/RAM`} className="dropdown-item">Memoria RAM</Link></li>
                                <li><Link to={`/category/MB`} className="dropdown-item">Motherboards</Link></li>
                                <li><Link to={`/category/storage`} className="dropdown-item">Almacenamiento</Link></li>
                                <li><Link to={`/category/case`} className="dropdown-item">Gabinetes</Link></li>
                                <li><Link to={`/category/powersupply`} className="dropdown-item">Fuentes de Alimentación</Link></li>
                                <li><Link to={`/category/cooling`} className="dropdown-item">Refrigeración</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;