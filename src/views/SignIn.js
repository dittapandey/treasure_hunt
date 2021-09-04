import './SignIn.css';
import {useHistory} from "react-router-dom";
import minion from "../images/Minion.png";
import quarun from "../images/QuaRunTime.png";
import logo from "../images/Technothlon-logo.png"
import treasureHunt from "../images/TREASUREHUNT.png";
const SignIn = () => {
    const history = useHistory();
    const handleClick = ()=>{
      history.push("/home");
    }
    return ( 
    <div className="SignIn">
        <div class="signup">
    <div class="container">
      <div class="item m-4 mx-auto">
        <img src={logo} alt="icon" style={{width: "100%", height: "auto"}}/>
      </div>
      <div class="item m-3">
        <img src={treasureHunt} alt="icon" />
      </div>
      <div class="item minion m-3">
        <img src={minion} alt="icon" />
      </div>
      <div class="item">
        <button class="btn mt-3" style={{backgroundColor: "orange"}} onClick={handleClick}>
          {/* <span
            v-if="spinning"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span> */}

          {/* <span v-if="spinning" class="sr-only">&nbsp; Loading...</span> */}
          <span v-else class="sr-only">Sign In </span>
        </button>
      </div>
    </div>
  </div>
    </div>
        
     );
}
 
export default SignIn;