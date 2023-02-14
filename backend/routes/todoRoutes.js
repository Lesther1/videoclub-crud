const router = require("express").Router();
const Movie = require("./models/Movie");

router.get("/", (req, res) =>{
  Movie.find((err, result)=>{
    if(err) throw new Error(err);
    console.log(result);
  });
});

router.post("/new", (req, res) =>{
    console.log(result);
  });

module.exports= router;
