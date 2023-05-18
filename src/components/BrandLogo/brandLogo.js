import logo from "./assets/Mercury.png"
import logo1 from "./assets/Mercury1.png"

const BrandLogo = () => {
    return (
        <div>
            <img className="brand-noicon" src={logo1} alt="brand-logo-noicon"/>
            <img className="brand-icon" src={logo} alt="brand-logo"/>
        </div>
    )
}

export default BrandLogo