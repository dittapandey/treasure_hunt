class Puzzle {
    constructor() {
     this.moves;
     this.started;

     this.board = document.getElementById("board");
     document.getElementById("shuffle").addEventListener("click", () => {
      this.shuffle();
     });
     this.reset();
    }

    reset() {
     while (this.board.hasChildNodes()) {
      this.board.removeChild(this.board.firstChild);
     }

     this.moves = 0;
     this.started = false;
     document.getElementById("moves").innerText = this.moves;
     document.getElementById("done").style.visibility = "hidden";
     document.getElementById("submittedGame").style.visibility = "hidden";
     document.getElementById("subbtn").style.visibility = "hidden";

     let t = 1;
     for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 6; x++) {
       const d = document.createElement("div");
       d.id = `${x}_${y}`;
       if (y === 0 || x === 0 || y === 5 || x === 5) {
        if (((y === 0 || y === 5) && (x === 0 || x === 5))) {
         d.className = "hide";
        } else {
         d.className = "btn";
         if (y === 0) {
          d.innerText = "🡇";
          d.func = () => {
           this.rollDownRight(x, true);
          };
         } else if (y === 5) {
          d.innerText = "🡅";
          d.func = () => {
           this.rollUpLeft(x, true);
          };
         }
         if (x === 0) {
          d.innerText = "🡆";
          d.func = () => {
           this.rollDownRight(y, false);
          };
         } else if (x === 5) {
          d.innerText = "🡄";
          d.func = () => {
           this.rollUpLeft(y, false);
          };
         }
         d.addEventListener("click", (ev) => {
          ev.srcElement.func();
         })
        }
       } else {
        d.className = "numbers";
        d.innerText = `${t}`;
        t++;
       }
       this.board.appendChild(d);
      }
     }
     document.getElementById("shuffle").innerText = "SHUFFLE";
    }

    shuffle() {
     if (this.started) {
      this.reset();
      Clock.reset();
     } else {
      this.started = true;
      const e = Math.floor(Math.random() * 30) + 30;
      for (let z = 0; z < e; z++) {
       switch (Math.floor(Math.random() * 4)) {
        case 0:
         this.rollDownRight(Math.floor(Math.random() * 4) + 1, false);
         break;
        case 1:
         this.rollUpLeft(Math.floor(Math.random() * 4) + 1, true);
         break;
        case 2:
         this.rollUpLeft(Math.floor(Math.random() * 4) + 1, false);
         break;
        case 3:
         this.rollDownRight(Math.floor(Math.random() * 4) + 1, true);
         break;
       }
      }
      this.moves = 0;
      document.getElementById("moves").innerText = this.moves;
      document.getElementById("shuffle").innerText = "RESTART";
      document.getElementById("shuffle").style.visibility = "hidden";
      document.getElementById("subbtn").style.visibility = "visible";

        Clock.start();


     }
    }

    getElements(l, col) {
     const z = Array.from(document.querySelectorAll(".numbers"));
     for (let e = 15; e > -1; e--) {
      if (z[e].id[(col ? 0 : 2)] != l) {
       z.splice(e, 1)
      }
     }
     return z;
    }

    rollDownRight(x, col) {
     if (!this.started) return;
     const z = this.getElements(x, col),
      a = z[3].innerText;
     for (let r = 3; r > 0; r--) {
      z[r].innerText = z[r - 1].innerText;
     }
     z[0].innerText = a;
     this.updateMoves();
     this.checkSolved();
    }

    rollUpLeft(x, col) {
     if (!this.started) return;
     const z = this.getElements(x, col),
      a = z[0].innerText;
     for (let r = 0; r < 3; r++) {
      z[r].innerText = z[r + 1].innerText;
     }
     z[3].innerText = a;
     this.updateMoves();
     this.checkSolved();
    }

    updateMoves() {
     this.moves++;
     document.getElementById("moves").innerText = this.moves;
    }

    checkSolved() {
     function check() {
      const z = document.querySelectorAll(".numbers");
      let u = 1;
      for (let r of z) {
       if (r.innerText != u) return false;
       u++;
      }
      return true;
     }
     if (this.started && check()) {
      document.getElementById("done").style.visibility = "visible";
      Clock.pause();
      const minuteTaken =document.getElementById("min").innerHTML;
      const secondTaken = document.getElementById("sec").innerHTML;
      const movesTaken = document.getElementById("moves").innerHTML;
      console.log(minuteTaken,secondTaken,movesTaken);
     }
    }
   }

   function submitFunction(event){

    Clock.pause();

    const minuteTaken =document.getElementById("min").innerHTML;
    const secondTaken = document.getElementById("sec").innerHTML;
    const movesTaken = document.getElementById("moves").innerHTML;
    console.log(minuteTaken,secondTaken,movesTaken);
    document.getElementById("shuffle").style.visibility = "hidden";
    document.getElementById("subbtn").style.visibility = "hidden";


    let count=1;

   for(let i=0;i<=15;i++){
     if(document.querySelectorAll(".numbers")[i].innerText==count){

       count=count+1;

     }
    else{
      break;
    }
   }
   let p=count-1;

   

  document.getElementById("subbtn").value=movesTaken
  document.getElementById("one").value=minuteTaken
  document.getElementById("two").value=secondTaken
  document.getElementById("three").value=p


   }







   new Puzzle();



   var Clock = {
    totalSeconds: 0,
    start: function () {
      if (!this.interval) {
          var self = this;
          function pad(val) { return val > 9 ? val : "0" + val; }
          this.interval = setInterval(function () {
            self.totalSeconds += 1;

            document.getElementById("min").innerHTML = pad(Math.floor(self.totalSeconds / 60 % 60));
            document.getElementById("sec").innerHTML = pad(parseInt(self.totalSeconds % 60));
          }, 1000);
      }
    },

    reset: function () {
      Clock.totalSeconds = null;
      clearInterval(this.interval);
      document.getElementById("min").innerHTML = "00";
      document.getElementById("sec").innerHTML = "00";
      delete this.interval;
    },
    pause: function () {
      clearInterval(this.interval);
      delete this.interval;
    },

    resume: function () {
      this.start();
    },

    restart: function () {
       this.reset();
       Clock.start();
    }
  };
