import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
const MysteryRoom = () => {
    return ( 
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" type="text/css" media="screen" />
                <style dangerouslySetInnerHTML={{__html: "\n        /*body {\n            font-family: Arial, Helvetica, sans-serif;\n            {#overflow: hidden;#}\n            background: linear-gradient(to top, saddlebrown 0%, saddlebrown 50%, darkgreen 50%, darkgreen 100%);\n\n        }*/\n        body, html {\n\t\t  height: 100%;\n\t\t  margin: 0;\n\t\t}\n\n\t\t.bg {\n\t\t  /* The image used */\n\t\t  background-image: url(\"/imgnew/room-escape-maker.png\");\n\n\t\t  /* Full height */\n\t\t  height: 100%;\n\n\t\t  /* Center and scale the image nicely */\n\t\t  background-position: center;\n\t\t  background-repeat: no-repeat;\n\t\t  background-size: cover;\n\t\t}\n        /* The Modal (background) */\n        .modal {\n            display: none; /* Hidden by default */\n            position: fixed; /* Stay in place */\n            z-index: 1; /* Sit on top */\n            padding-top: 100px; /* Location of the box */\n            left: 0;\n            top: 0;\n            width: 100%; /* Full width */\n            height: 100%; /* Full height */\n            overflow: auto; /* Enable scroll if needed */\n            background-color: rgb(0, 0, 0); /* Fallback color */\n            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n        }\n\n        /* Modal Content */\n        .modal-content {\n            background-color: #fefefe;\n            margin: auto;\n            padding: 20px;\n            border: 1px solid #888;\n            width: 80%;\n        }\n\n        /* The Close Button */\n        .close {\n            color: #aaaaaa;\n            float: right;\n            font-size: 28px;\n            font-weight: bold;\n        }\n\n        .close:hover,\n        .close:focus {\n            color: #000;\n            text-decoration: none;\n            cursor: pointer;\n        }\n\n        span {\n            cursor: pointer;\n            font-size: 25px;\n        }\n        .header-right {\n            float: right;\n            color: white;\n            padding-right: 40px;\n        }\n\n        /*.modal {\n            position: fixed;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            z-index: 1050;\n            display: none;\n            overflow: hidden;\n            outline: 0;\n        }*/\n        .modal-content {\n            position: relative;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            width: 100%;\n            pointer-events: auto;\n            background-color: #fff;\n            background-clip: padding-box;\n            border: 1px solid rgba(0,0,0,.2);\n            border-radius: .3rem;\n            outline: 0;\n        }\n        .modal-body {\n            position: relative;\n            -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n            padding: 1rem;\n        }\n    " }} />
            </Helmet>
    
            <div>
  <div className="bg" />
  <div className="cabinet-section">
    <div style={{position: 'fixed', top: '15%', left: '2%', cursor: 'pointer'}}>
      <img src="/imgnew/cabinet.png" id="cupboard_final" />
    </div>
    <div id="cupboard_final_modal" className="modal">
      <div className="modal-content">
        <span id="cubboard_close">×</span>
        <div className="modal-body">
          <form action="/cabinet1" method="post">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Alpha and Beta were reading about some special sequence where each number of the sequence can be obtained by summing the previous two numbers. They searched for who the creator of this amazing sequence was, and found that the creator was an Italian mathematician. They were sad since they thought that it would be their favourite mathematician X, the one who invented zero. They then came across a group of words
                and thought to find an odd one out of them.
                Can you help them in their quest to proceed to the next level?
              </label>
              <input type="text" className="form-control" id="cabinetq1" placeholder="Enter Answer" name="cq1" />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" id="cabinetq1submit">save answer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="door-section">
    <div style={{position: 'fixed', top: '20%', left: '26%', cursor: 'pointer'}}>
      <img src="/imgnew/door.png" id="door_final" />
    </div>
    <div id="door_final_modal" className="modal">
      <div className="modal-content">
        <span id="door_close">×</span>
        <div className="modal-body">
          <form action="/door1" method="post">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Even after solving the puzzle correctly the other members of the friend circle aren’t convinced and hence they decide to give both of you another puzzle. Both of you have in total the number of coins which is the answer to the ‘snake and ladder’ puzzle. Now Gamma thinks of a 100 degree polynomial(p(x)) whose coefficients are all natural numbers. You have to guess all the coefficients of the polynomial.
                You can give 1 coin to gamma and a whole number ‘z’ and gamma will give you the value of p(z). You can borrow extra coins from your good friend delta but you would like to borrow as few as possible. How many extra coins would you have to borrow(except the coins you already have) to correctly guess all the coefficients of the polynomial.
              </label>
              <input type="text" className="form-control" id="doorq1" placeholder="Enter Answer" name="dq1" />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" id="doorq1submit">save answer</button>
              {/*<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>*/}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="locker1-section">
    <div style={{position: 'fixed', top: '40%', left: '45%', cursor: 'pointer'}}>
      <img style={{width: 140, height: 95}} src="/imgnew/loc.png" id="locker1_final" />
    </div>
    <div id="locker1_final_modal" className="modal">
      <div className="modal-content">
        <span id="locker_close1">×</span>
        <div className="modal-body">
          <form action="/locker1" method="post">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput"> Since Alpha and Beta disrespected the great mathematician X previously, by not following him, their friend Gamma removed them from their circle of friends in a moment of anger but he later felt that Alpha and Beta can be given another chance to prove themselves. He took out a standard snakes and ladders game and told them that he can finish this game in ‘a’ moves where ‘a’ is the unit’s place of the number ‘y’ they had 					 calculated in the previous question.
                He asks them if there is a way where they can finish the game in ‘b’ moves where ‘b’ is the digit at the ten’s place of their answer in the previous question and if yes in how many ways can they do it.<br />
                *note:- if they can’t do it the answer is 0.
              </label>
              <input type="text" className="form-control" id="locker1q1" defaultValue placeholder="Enter Answer" name="l1q1" />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" id="locker1q1submit">save answer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="locker2-section">
    <div style={{position: 'fixed', top: '54%', left: '45%', cursor: 'pointer'}}>
      <img src="/imgnew/alma.png" id="locker2_final" />
    </div>
    <div id="locker2_final_modal" className="modal">
      <div className="modal-content">
        <span id="locker_close3">×</span>
        <div className="modal-body">
          <form action="/locker2" method="post">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput"> Alpha and Beta hated odd things and wanted to make amends. They took the odd word from above and created ‘x' new words which would have fit the pattern with the other words given but each new word has only one character different from the original word. They then had a closer look at those newly created words and specifically wrote down the new characters in those words (the characters which were different from the original word). Then they added all those characters' numerical value, considering A as 1, B as 2 and so on, and subtracted ‘x' from it. Find out the answer they might have received and consider it as ‘y’.<br />
                *Note:-  The newly formed words may not be meaningful words.
              </label>
              <input type="text" className="form-control" id="locker2q1" placeholder="Enter Answer" name="l2q1" />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" id="locker2q1submit">Save answer</button>
            </div>
          </form>
        </div>
        {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="locker2q1submit">Save answer</button>
          </div> */}
      </div>
    </div>
  </div>
  <div className="painting1-section">
    <div style={{position: 'fixed', top: '6%', right: '25%', cursor: 'pointer'}} id="painting1_final">
      <img src="/images/painting1_final.png" width="220px" height="200px" />
    </div>
    <div id="painting1_final_modal" className="modal">
      <div className="modal-content">
        <span id="painting_close1">×</span>
        <div className="modal-body">
          <img src="/images/painting1_final.png" className="img-fluid img-thumbnail" />
        </div>
        {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="hint1">take a hint</button>

          </div> */}
      </div>
    </div>
  </div>
  <div className="painting2-section">
    <div style={{position: 'fixed', top: '6%', right: '3%', cursor: 'pointer'}} id="painting2_final">
      <img src="/images/painting2_final.png" width="220px" height="200px" />
    </div>
    <div id="painting2_final_modal" className="modal">
      <div className="modal-content">
        <span id="painting_close2">×</span>
        <div className="modal-body">
          <img src="/images/painting2_final.png" className="img-fluid img-thumbnail" />
        </div>
      </div>
    </div>
  </div>
  <div className="painting3-section">
    <div style={{position: 'fixed', top: '40%', right: '25%', cursor: 'pointer'}} id="painting3_final">
      <img src="/images/painting3_final.png" style={{width: 200, height: 220}} />
    </div>
    <div id="painting3_final_modal" className="modal">
      <div className="modal-content">
        <span id="painting_close3">×</span>
        <div className="modal-body">
          <img src="/images/painting3_final.png" className="img-fluid img-thumbnail" />
        </div>
        {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="hint2">take a hint</button>

          </div> */}
      </div>
    </div>
  </div>
  <div className="painting4-section">
    <div id="painting4_final" style={{position: 'fixed', top: '40%', right: '3%', cursor: 'pointer'}}>
      <img src="/images/painting_4final.png" style={{width: 200, height: 220}} />
    </div>
    <div id="painting4_final_modal" className="modal">
      <div className="modal-content">
        <span id="painting_close4">×</span>
        <div className="modal-body">
          <img src="/images/painting_4final.png" className="img-fluid img-thumbnail" />
        </div>
        {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="hint3">take a hint</button>

          </div> */}
      </div>
    </div>
  </div>
  <div id="cabinetmodal3" className="modal">
    <div className="modal-content">
      <span id="cabinet_close2">×</span>
      <div className="modal-body">
        <img src="/images/cupboardpuzzle2.png" className="img-fluid img-thumbnail" />
      </div>
    </div>
  </div>
  <div id="cabinetmodal2" className="modal">
    <div className="modal-content">
      <span id="cabinet_close1">×</span>
      <div className="modal-body">
        <img src="/images/cupboardpuzzle1.png" className="img-fluid img-thumbnail" />
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput"> submit code 5 capital letters
            </label>
            <input type="text" className="form-control" id="cabinetq2" placeholder="Enter Answer" />
          </div>
        </form>
      </div>
      {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="cabinetq2submit">save answer</button>
              <button type="button" class="btn btn-primary" id="hint5">take a hint</button>
          </div> */}
    </div>
  </div>
  <div id="locker1modal2" className="modal">
    <div className="modal-content">
      <span id="locker_close2">×</span>
      <div className="modal-body">
        <img src="/images/lockerpuzzle1.png" className="img-fluid img-thumbnail" />
      </div>
      {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="hint4">take a hint</button>

          </div> */}
    </div>
  </div>
  <div id="cabinetmodal3" className="modal">
    <div className="modal-content">
      <span id="cabinet_close2">×</span>
      <div className="modal-body">
        <img src="/images/cupboardpuzzle2.png" className="img-fluid img-thumbnail" />
      </div>
    </div>
  </div>
  <div id="locker2modal2" className="modal">
    <div className="modal-content">
      <span id="locker_close4">×</span>
      <img src="/images/lockerpuzzle2.png" className="img-thumbnail" />
    </div>
  </div>
  <button type="button" id="submit" style={{position: 'fixed', bottom: '2%', right: '3%'}}>Submit</button>
  {/* <button type="button" onclick="window.location = '../graduation'" id="submit" style="position: fixed; bottom: 2%; right: 9%">Skip</button> */}
  <div className="header-right" id="painting10_final" style={{position: 'fixed', bottom: '2%', right: '13%'}}>
    <a className="active">Rules</a>
  </div>
  <div id="painting10_final_modal" className="modal">
    <div className="modal-content">
      <span id="painting_close10" style={{cursor: 'pointer', fontSize: 25}}>×</span>
      <div className="modal-body">
        <strong>HOW TO PLAY:-</strong>    <br /> <br />
        <strong>  ↠ </strong> 1. Click on objects to view their contents. <br />
        <strong>  ↠ </strong> 2.Enter capital letters only (wherever applicable)  <br />
        <strong>  ↠ </strong> 3. Look out for clues hidden in puzzle images , they may be useful later. <br />
        <strong>  ↠ </strong> 4. You can take hints at certain points during the game , but keep in mind that points will be deducted on usage of hints . <br />
        <strong>  ↠ </strong> 5 . The main aim of the game is to escape the room through the door . Don't try guessing , it won't work 🙂 <br />
        <strong>  ↠ </strong> 6. Submitting each correct code will be rewarded with respective points. <br />
      </div>
    </div>
  </div>
</div>
</div>



     );
}
 
export default MysteryRoom;