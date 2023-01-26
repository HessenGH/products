import { useState } from "react";
function SignIn(){
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const [passwordType, setPasswordType] = useState("password");
    const [confirmpasswordType, setConfirmpasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmpasswordInput, setConfirmPasswordInput] = useState("");

    const handleChange = (event) => {
      event.preventDefault();
      const upperCase = /[A-Z]/;
      const lowerCase = /[a-z]/;
      const symbol = /[!@#\$%\^&\*]/;
      const number = /[0-9]/;
  
      if (!passwordInput.match(upperCase) || !passwordInput.match(lowerCase) || !passwordInput.match(symbol) || !passwordInput.match(number)) {
        setError('Password must contain at least one uppercase letter, one lowercase letter, one symbol and one number');
      } else {
        setError('');
      }
    }

    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const handlePasswordChange1=(evnt)=>{
        setConfirmPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    const togglePassword1 =()=>{
        if(confirmpasswordType==="password")
        {
            setConfirmpasswordType("text")
         return;
        }
        setConfirmpasswordType("password")
      }
    return(
        <div className="form-box">
          
        <form className="form">
          <h2>Register An Account</h2>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" required placeholder="Your name.."/>
        
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" required placeholder="Your last name.."/>
        <label for="pass">password</label>
        <div className="input">
        
        <input type={passwordType} onChange={handlePasswordChange} required value={passwordInput} name="password" placeholder="Password" className="input-password" id="pass"/>
        { passwordType==="password"? <img src="icons/openeye.png" onClick={togglePassword} className="eye"/> :<img src="icons/closeeye.png" onClick={togglePassword} className="eye"/> }
        </div>
        <label for="confpass"> confirm password</label>
        <div className="input">
        
        <input type={confirmpasswordType} onChange={handlePasswordChange1} required value={confirmpasswordInput} name="password" placeholder="Password" className="input-password" id="confpass"/>
        { confirmpasswordType==="password"? <img src="icons/openeye1.png" onClick={togglePassword1} className="eye"/> :<img src="icons/closeeye1.png" onClick={togglePassword1} className="eye"/> }
        </div>
        <input type="submit" value="Register" onClick={handleChange}/>
        <div className="error">{error}</div>
      </form>
      </div>
    )
}
export default SignIn;