import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModeStateContext } from "../Contexts";
import './Navbar.css';
const Navbar = () => {
    const{theme,setTheme}=useContext(ModeStateContext);
    const toggleTheme=()=> {
        setTheme(theme === "light" ? "dark" : "light");
    }
      const openNav=()=> {
        document.getElementById("myForm").style.width = "200px";
      }
      
      const closeNav=()=> {
        document.getElementById("myForm").style.width = "0";
      }
    return ( 
        <div>
        <div className="navbar" >
        {/* <img src="icons/Menu.png" onClick={openNav}/> */}
           <Link to={"/"}><h2 className="title-nav">GH Store</h2></Link>
           <div className="nav-list">
            <Link to="/"  >Home</Link>
            <Link to="/register" >Register</Link>
      
            </div>
        </div>

        {/* <div class="form-popup" id="myForm">
        <div class="form-container">
          <h1>Register</h1>
          <img src="icons/close.png" onClick={closeNav} className="close-form"/>
          
          <h3>Contact-Us</h3>
          <img src="icons/Dark-Mode.png" onClick={toggleTheme}/>
           </div>
      </div> */}
      </div>
     );
}
 
export default Navbar;