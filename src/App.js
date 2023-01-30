
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import MovieDetails from "./component/ProductDetails/ProductDetails";
import Register from "./component/Register/Register";
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
        <Route path="/register">
        <Register/>
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
