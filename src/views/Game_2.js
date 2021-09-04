import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../components/Navbar";
import questionImage from "../images/clue2.jpg";

const Game_2 = () => {
  const question = "Find the place these minion symbols talk about:";
  const answer = "Kapili Hostel";
  const [givenAnswer, setGivenAnswer] = useState("nothing");
  const [isAnsCor, setIsAnsCor] = useState(false);
  const history = useHistory();
  const verifyAnswer = (e) => {
    e.preventDefault();
    if(givenAnswer.toUpperCase() === answer.toUpperCase()){
      setIsAnsCor(true);
      alert("You answered the question correctly. Onto the next question minion");
      history.push("/game3");
    } else {
      alert("The answer was incorrect. My minion, try again!");

    }
  }
    return ( 
        <div className="game">
            <Navbar />
            <div class="container">
    {/* <div class="m-5 loading" v-if="isLoading">
      <div class="mx-auto" style={{width: "50%"; textAlign: "center"}}>
        <img
          src="../../public/minion.gif"
          alt="Loading..."
          width="100"
          height="100"
        />
        <p>Loading...</p>
      </div>
    </div> */}
    <div class="row" v-else>
      <div class="col col-lg-10 mx-auto m-5">
        <div class="card p-3">
          <h3 class="pb-3">
            <b
              ><i>Level 2</i></b
            >
          </h3>
          <img
            src={questionImage}
            class="mx-auto"
            style={{width: "100%"}}
            alt="`{level}`"
          />
          <div class="card-body">
            <p class="card-text">
              {question}
            </p>
            <form class="form-inline" onSubmit={(e)=>verifyAnswer(e)}>
              <div class="form-group mb-2">
                <label for="validationServer01" class="sr-only">Answer</label>
                <input
                  type="text"
                  class="form-control"
                  
                  id="validationServer01"
                  placeholder="Enter your Answer"
                  required
                  value={givenAnswer}
                  onChange = {(e)=> setGivenAnswer(e.target.value)}
                />
              </div>
               {/* <button
                type="submit"
                class="btn mb-2"
                style={{backgroundColor: "#f59800"}}
              >
                <span
                  // v-if="spinning"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                 <span v-if="spinning" class="sr-only">&nbsp; Verifying...</span>
                 <span v-else class="sr-only">Verify Answer</span>  
              </button>   */}
              <button v-else onClick="checkLevel" class="btn btn-success mb-2">
                Play Next Level
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
        
    );
}

export default Game_2;