
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";
import SignIn from "./component/Signin";
import { ModeStateContext } from "./component/Contexts";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");
 
  return (
    
    <Router>
      <ModeStateContext.Provider 
      value={{
        theme,setTheme
      }}>
     <div className={`App ${theme}`}>
      <Navbar/>
      <div className="content">
        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/signin">
        <SignIn/>
        </Route>
        <Route path="/movies/:id">
          <MovieDetails/>       
        </Route>
        </Switch>
        </div>
    </div>
    </ModeStateContext.Provider>
    </Router>
  );
}

export default App;
