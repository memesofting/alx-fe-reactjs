import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div style={{backgroundColor: "rgb(60, 73, 141)",
        color: "aliceblue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        }}>
            <Link to={"/home"} style={{color: "aliceblue", textDecoration: "none",padding: "20px",}}>Home</Link>
            <Link to={"/about"} style={{color: "aliceblue", textDecoration: "none",padding: "20px",}}>About</Link>
            <Link to={"/services"} style={{color: "aliceblue", textDecoration: "none",padding: "20px",}}>Services</Link>
            <Link to={"/contact"} style={{color: "aliceblue", textDecoration: "none",padding: "20px",}}>Contact</Link>
        </div>
     );
}

export default Navbar;