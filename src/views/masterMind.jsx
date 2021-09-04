import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const MasterMind = () => {

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     console.log(script);
    //     script.innerHTML = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script><script src="main.js"></script> <script> var modal1 = document.getElementById("painting1_final_modal"); var img1 = document.getElementById("painting1_final"); img1.onclick = function () {modal1.style.display = "block";}$("#painting_close1").on("click", () => {modal1.style.display = "none";}); </script> <script>$("#submit").on("click", () => {$.ajax({type: "POST",url: "{%url"mastermind_submission" %}",data: {"mastermind_solver": score,csrfmiddlewaretoken: "{{ csrf_token }}",},dataType: "json",success: function (data) {alert("Your response have been submitted");window.location.href = "{% url "thirdyear" %}"}});});</script>'
    // }, []);

  return (
    <div>
        <Helmet>
    <script src="https://code.jquery.com/jquery-3.5.1.js"
            integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,400italic,800,800italic' rel='stylesheet'
          type='text/css' />
    {/* <link rel="stylesheet" href="normalize.css" /> */}
    <link rel="stylesheet" href="main.css" />

    <style dangerouslySetInnerHTML={{__html: "\n        .modal {\n            position: fixed;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            z-index: 1050;\n            display: none;\n            overflow: hidden;\n            outline: 0;\n        }\n\n        .modal-content {\n            position: relative;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            width: 100%;\n            pointer-events: auto;\n            background-color: #fff;\n            background-clip: padding-box;\n            border: 1px solid rgba(0, 0, 0, .2);\n            border-radius: .3rem;\n            outline: 0;\n        }\n\n        .modal-content {\n            position: relative;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            width: 100%;\n            pointer-events: auto;\n            background-color: #fff;\n            background-clip: padding-box;\n            border: 1px solid rgba(0, 0, 0, .2);\n            border-radius: .3rem;\n            outline: 0;\n        }\n\n        .modal-body {\n            position: relative;\n            -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n            padding: 1rem;\n        }\n    " }} />

            </Helmet>
      <div className='wrapper'>
        <div className='header'>
          <a className='logo'>
            <img
              src='https://technothlon.techniche.org.in/images/technothlon.png'
              className='img-responsive'
              style={{
                height: 30,
                width: 125,
                margin: "auto",
                marginTop: "0%",
                marginBottom: "2.5%",
              }}
            />
          </a>
          <div style={{ color: "black" }}>
            <div
              style={{
                color: "black",
                display: "inline",
                marginRight: "10vw",
                height: 30,
                fontWeight: "bolder",
                fontSize: "xx-large",
              }}
              className='header-right'
            >
              <label id='minutes'>00</label> : <label id='seconds'>00</label>
            </div>
            <div className='header-right' id='painting1_final'>
              <a className='active'>Rules</a>
            </div>
            <div id='painting1_final_modal' className='modal'>
              <div className='modal-content'>
                <span
                  id='painting_close1'
                  style={{ cursor: "pointer", fontSize: 25 }}
                >
                  ×
                </span>
                <div className='modal-body'>
                  <strong> Instructions:-</strong> <br /> <br />
                  <strong> ↠ </strong>Guess the pattern in terms of color,
                  position and number. <br />
                  <strong> ↠ </strong>Insert your guess sequence into empty
                  socket from bottom. <br />
                  <strong> ↠ </strong>Feedback is provided on right side in form
                  of black, red and white pegs. <br />
                  <strong> ↠ </strong>Black peg corresponds to one peg from your
                  sequence that is right in all color, position and number .{" "}
                  <br />
                  <strong> ↠ </strong>Red peg corresponds to one peg from your
                  sequence that is correct in any 2 among color, position and
                  number <br />
                  <strong> ↠ </strong>White peg corresponds to one peg from your
                  sequence that is correct only with number or color <br />
                  <strong> ↠ </strong>Priority order for getting hint pegs is
                  black&gt;red&gt;white. <br />
                  <strong> ↠ </strong>If a guess peg in your sequence gets black
                  peg it is not eligible for red or white peg. <br />
                  <strong> ↠ </strong>Then, if a guess in your sequence gets red
                  peg it is not eligible for white peg.
                  <br />
                  <br />
                  <strong>
                    {" "}
                    Hints pegs are alloted randomly (i.e. in no particular order
                    of sequence)
                  </strong>
                  <br /> <br />
                  <strong> Marking scheme:- </strong> <br />
                  Points for black &gt;red &gt;white <br />
                  Points for bottom rows&gt; top rows <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='one clearfix'>
          <div className='right_board'>
            <div id='guesses'>
              <div className='code row'>
                <div className='secret socket'>?</div>
                <div className='secret socket'>?</div>
                <div className='secret socket'>?</div>
                <div className='secret socket'>?</div>
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
              <div className='guess'>
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
                <div className='socket' />
              </div>
            </div>
            <div id='hints'>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
              <div className='hint'>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
                <div className='row'>
                  <div className='js-hint-socket socket' />
                  <div className='js-hint-socket socket' />
                </div>
              </div>
            </div>
          </div>
          <div id='instructions'>
            <h3>How to play</h3>
            <p>
              <strong>Goal:</strong> Guess the pattern, in both order and color
            </p>
            <p>Insert your guess sequence into the empty sockets</p>
            <p>
              Feedback is provided on the right side in the form of black and
              white pegs.
            </p>
            <ul>
              <li>
                Black peg corresponds to one peg from your color sequence that
                is both the right color and in the right position
              </li>
              <li>
                White peg corresponds to one peg from your color sequence that
                is the right color but NOT in the right position
              </li>
            </ul>
            <p />
          </div>
          <div className='left_board'>
            <div id='options' className='container'>
              <button value={1} id='green_one' className='option green_one' />
              <button value={4} id='purple_one' className='option purple_one' />
              <button value={7} id='red_one' className='option red_one' />
              <button
                value={10}
                id='yellow_one'
                className='option yellow_one'
              />
              <button value={13} id='blue_one' className='option blue_one' />
              <button value={16} id='brown_one' className='option brown_one' />
            </div>
            <div id='options' className='container'>
              <button value={2} id='green_two' className='option green_two' />
              <button value={5} id='purple_two' className='option purple_two' />
              <button value={8} id='red_two' className='option red_two' />
              <button
                value={11}
                id='yellow_two'
                className='option yellow_two'
              />
              <button value={14} id='blue_two' className='option blue_two' />
              <button value={17} id='brown_two' className='option brown_two' />
            </div>
            <div id='options' className='container'>
              <button
                value={3}
                id='green_three'
                className='option green_three'
              />
              <button
                value={6}
                id='purple_three'
                className='option purple_three'
              />
              <button value={9} id='red_three' className='option red_three' />
              <button
                value={12}
                id='yellow_three'
                className='option yellow_three'
              />
              <button
                value={15}
                id='blue_three'
                className='option blue_three'
              />
              <button
                value={18}
                id='brown_three'
                className='option brown_three'
              />
            </div>
            <button id='delete' className>
              ⇠
            </button>
            <br />
            <button
              type='button'
              id='submit'
              className='green1'
              style={{ marginLeft: "10%", marginTop: "12%", color: "#333" }}
            >
              SUBMIT
            </button>
            <button
              type='button'
              className='green2'
              style={{ marginLeft: "40%", marginTop: "12%", color: "#333" }}
            >
              <a href="{% url 'thirdyear' %}">SKIP</a>
            </button>
            {/* <button type="button" id="newGame" class="green" style="margin-left: 40%;margin-top: 12%;"><a
              href="#">SUBMIT</a></button> */}
            {/* <button id="submit" type="button" class="green" style="margin-left: 40%;margin-top: 12%;"><a href="#">SUBMIT</a> */}
            {/* <button type="button" class="green" style="margin-left: 40%;margin-top: 12%;"><a href="#">SKIP</a></button> */}
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
      </div>
      <br />
      <footer>
        <p>
          Technothlon
          <br />
          Copyright © 2019-20
          <br />
          All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MasterMind;
