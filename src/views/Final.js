import './Final.css'
import minion from '../images/Minion.png'
import Navbar from '../components/Navbar';
const Final = () => {
    return ( 
        <div className="final">
            {/* <div class="m-5 loading" v-if="isLoading">
                <div class="mx-auto" style={{width: "50%"; text-align: "center"}}>
                <img
                        src="../../public/minion.gif"
                        alt="Loading..."
                        width="100"
                        height="100"
                    />
                    <p>Loading...</p>
                </div>
                </div> */}
                        
            <div class="container" v-else>
                <div class="content">
                    <div className="image">
                    <img src={minion} alt="minion" width="150" />
                    </div>
                     
                </div>
                <div class="content card p-4">
                    <p>
                        And that's all Folks! <br />
                        <br />

                        Thank you for participating in The treasure Hunt. You are now ordained as a minion. Hope you have enjoyed the
                        event! 🎉
                    </p>
                </div>
            </div>
        </div>
            
     );
}
 
export default Final;