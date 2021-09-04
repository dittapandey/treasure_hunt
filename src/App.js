import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useContext } from "react";
import './App.css';
import Final from "./views/Final";
import Home from "./views/Home";
import SignIn from './views/SignIn';
import AppContext from "./AppContext";
import Game_1 from "./views/Game_1";
import Game_2 from "./views/Game_2";
import Game_3 from "./views/Game_3";
import Game_4 from "./views/Game_4";
import Game_5 from "./views/Game_5";

function App() {
  const [user, setLoginUser] = useState();
  const userSettings = {
    user: user,
    setLoginUser
  }
  const myContext = useContext(AppContext);
  return (
    <AppContext.Provider value={userSettings}>
    <Router>
      <Switch>
        
        <Route exact path = "/home">
         {user? <Game_1/>:  <Home/>}
        </Route>
        <Route exact path = "/game1" >
          {console.log(user)}
          {user? <Game_1/>: <Home/>}
        </Route>
        <Route exact path = "/game2" >
          {user? <Game_2/>: <Home/>}
        </Route>
        <Route exact path = "/game3" >
          {user? <Game_3/>: <Home/>}
        </Route>
        <Route exact path = "/game4" >
          {user? <Game_4/>: <Home/>}
        </Route>
        <Route exact path = "/game5" >
          {user? <Game_5/>: <Home/>}
        </Route>
        <Route exact path = "/final" >
          {<Final/>}
        </Route>
        <Route exact path = "/signin">
          { <SignIn/>}
    
        </Route>
      </Switch>
    </Router>
  </AppContext.Provider>
    

    
  );
}

export default App;
