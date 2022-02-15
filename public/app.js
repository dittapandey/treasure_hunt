const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();


app.set("view engine","ejs");
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb://localhost:27017/puzzleDB",{ useNewUrlParser: true,useUnifiedTopology: true })



const puzzleSchema={
  moves: Number,
  min: Number,
  sec: Number,
  correctmatches: Number
};

const Puzzle = new mongoose.model("Puzzle",puzzleSchema);

app.get("/",(req,res)=>{
  res.render("home");
});
app.get("/thanks",(req,res)=>{
  res.render("thanks");
});


app.post("/",(req,res)=>{

const demo=req.body.submitBtn;
const demo2= req.body.hidInputTwo;
console.log(demo2);

  const post=new Puzzle({
  moves: req.body.submitBtn,
  min: req.body.hidInputOne,
  sec: req.body.hidInputTwo,
  correctmatches: req.body.hidInputThree
 });
  post.save();
  res.redirect("/thanks");

});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
