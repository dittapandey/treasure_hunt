import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { useState, useContext } from "react";
import './App.css';
import Final from "./views/Final";
import Home from "./views/Home";
import SignIn from './views/SignIn';
// import AppContext from "./AppContext";
import Game_1 from "./views/Game_1";
import Game_2 from "./views/Game_2";
import Game_3 from "./views/Game_3";
import Game_4 from "./views/Game_4";
import Game_5 from "./views/Game_5";
import { AuthContext } from "./context/authContext";
import MasterMind from "./views/masterMind";

function App() {
  // const [user, setLoginUser] = useState();
  // const userSettings = {
  //   user: user,
  //   setLoginUser
  // }
  const {user} = useContext(AuthContext);
  return (
    <>
    <Router>
      <Switch>
        <Route path="/secret">
          <MasterMind/>
          </Route>
        <Route exact path = "/home">
         {user? <Redirect to="/game1"/>:  <Home/>}
        </Route>
        <Route exact path = "/game1" >
          {console.log(user)}
            {user ? <Game_1 /> : <Redirect to="/home" />}
        </Route>
        <Route exact path = "/game2" >
          {user? <Game_2/>: <Redirect to="/home" />}
        </Route>
        <Route exact path = "/game3" >
          {user? <Game_3/>: <Redirect to="/home" />}
        </Route>
        <Route exact path = "/game4" >
          {user? <Game_4/>: <Redirect to="/home" />}
        </Route>
        <Route exact path = "/game5" >
          {user? <Game_5/>: <Redirect to="/home" />}
        </Route>
        <Route exact path = "/final" >
          {<Final/>}
        </Route>
        <Route exact path = "/signin">
            {user ? <Redirect to="/home" /> : <SignIn/>}
        </Route>
        <Route path="*">
          <Redirect to="/signin"/>
        </Route>
      </Switch>
    </Router>
  </>
    

    
  );
}

export default App;
