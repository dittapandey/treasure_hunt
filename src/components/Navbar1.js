import './Navbar1.css';
import { useContext, useState } from 'react';
import treasureHunt from '../images/TREASUREHUNT.png';
import { useHistory } from 'react-router';
const Navbar1 = () => {
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
    return (
        <div className="header">
            
            <nav className="navbar navbar-light sticky-top" style={{backgroundColor: "#f59800"}} >
            
            <h2 className="navbar-brand px-3"><a className="game-name">Treasure Hunt</a></h2>
            {/* <a className="btn btn-danger" href="https://www.iitg.ac.in/campusmap/" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Map
            </a>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div> */}
            <div className="d-flex flex-row-reverse">
            {/* <a className="btn btn-danger px-3 mx-4" onClick={handleClick} >Logout</a> */}
            <div className="dropdown mx-3">
                <a className="btn btn-danger dropdown-toggle" type="button" onClick={dropdown}>
                    Instructions
                </a>               
            </div>
            </div>
            </nav>
            {isClicked && <div className="card mx-auto" style={{width: "72rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Instructions</h5>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                            <ol>
                                <li>Instruction 1</li>
                                <li>Instruction 2</li>
                                <li><a href="https://www.iitg.ac.in/campusmap/" className="card-link" target="_blank">Map</a></li>
                            </ol>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            <a href="#" className="card-link black">Another link</a>
                        </div>
                    </div>}
        </div>
     );
}
 
export default Navbar1;