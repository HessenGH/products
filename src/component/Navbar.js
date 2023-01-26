import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModeStateContext } from "./Contexts";
const Navbar = () => {
    const{theme,setTheme}=useContext(ModeStateContext);
    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }
      function openNav() {
        document.getElementById("myForm").style.width = "200px";
      }
      
      function closeNav() {
        document.getElementById("myForm").style.width = "0";
      }
    return ( 
        <div>
        <div className="navbar" >
        <img src="icons/Menu.png" onClick={openNav}/>
           <Link to={"/"}><h2>Movie Star</h2></Link>
           <div className="nav-list">
            <Link to="/"  ><ul>Home</ul></Link>
            <Link to="/signin" ><ul>Register</ul></Link>
      
            </div>
        </div>

        <div class="form-popup" id="myForm">
        <div class="form-container">
          <h1>Register</h1>
          <img src="icons/close.png" onClick={closeNav} className="close-form"/>
          
          <h3>Contact-Us</h3>
          <img src="icons/Dark-Mode.png" onClick={toggleTheme}/>
           </div>
      </div>
      </div>
     );
}
 
export default Navbar;