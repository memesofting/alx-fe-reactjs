import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div className="navbar">
            <Link to={"/home"} id="link">Home</Link>
            <Link to={"/about"} id="link">About</Link>
            <Link to={"/services"} id="link">Services</Link>
            <Link to={"/contact"} id="link">Contact</Link>
        </div>
     );
}

export default Navbar;