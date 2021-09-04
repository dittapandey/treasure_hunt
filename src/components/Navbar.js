import './Navbar.css';
import logo from '../images/Technothlon-logo.png';
import { useContext, useEffect, useState } from 'react';
import treasureHunt from '../images/TREASUREHUNT.png';
import { useHistory } from 'react-router';
const Navbar = () => {
    const history = useHistory();
    const [isClicked, setIsClicked] = useState(false);
    const dropdown = () => {
        if(isClicked === false){
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }
    const handleClick = () => {
        // myContext.setLoginUser();
        // console.log(myContext.user);
        alert("You have Signed out");
        // localStorage.clear(myContext.user);
        localStorage.removeItem("user");
        localStorage.clear();
        // history.go(0);
        history.push('/final');
        history.block();
    }

    useEffect(()=>{console.log("Dropdown done")},[isClicked]);

    return (
        <div className="header">
            
            <nav class="navbar navbar-light sticky-top" style={{backgroundColor: "#f59800"}} >
            {/* <img src={logo} width="10%" height="30vh" /> */}
            <h2 class="navbar-brand px-3"><a className="game-name">Treasure Hunt</a></h2>
            {/* <a class="btn btn-danger" href="https://www.iitg.ac.in/campusmap/" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Map
            </a>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div> */}
            <div class="d-flex flex-row-reverse">
            <a class="btn btn-danger px-3 mx-4" onClick={handleClick} >Logout</a>
            <div class="dropdown mx-3">
                <a class="btn btn-danger dropdown-toggle" type="button" onClick={dropdown}>
                    Instructions
                </a>               
            </div>
            </div>
            </nav>
            {isClicked && <div class="card mx-auto" style={{width: "72rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">Instructions</h5>
                            <h6 class="card-subtitle mb-2 text-muted"></h6>
                            <ol>
                                <li>Instruction 1</li>
                                <li>Instruction 2</li>
                                <li><a href="https://www.iitg.ac.in/campusmap/" class="card-link" target="_blank">Map</a></li>
                            </ol>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            <a href="#" class="card-link black">Another link</a>
                        </div>
                    </div>}
        </div>
     );
}
 
export default Navbar;