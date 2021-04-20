import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container">
                    <NavLink className="navbar-brand" to="/">RandoStore</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav mx-auto" >
                            <NavLink className="nav-link mx-3" activeClassName="activeNav" to="/" exact>Home</NavLink>
                            <NavLink className="nav-link mx-3" activeClassName="activeNav" to="/additems">Add Items</NavLink>
                            <NavLink className="nav-link mx-3" activeClassName="activeNav" to="/items">Items</NavLink>
                            <NavLink className="nav-link mx-3" activeClassName="activeNav" to="/checkout">Checkout</NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
