const router = require("express").Router();
//importamos axios
const axios = require("axios")

/* GET home page */
router.get("/", (req, res, next) => {
  //hacer peticion con axios 
  //axios.get(url).then().catch()
  axios.get("https://rickandmortyapi.com/api/character")
  .then(responseAxios=>{
    console.log("la respuest del axios",responseAxios.data.results) //este console nos muestra todos los objetos de la api
    res.render("index",{characters: responseAxios.data.results})//ya podremos visualizar, se renderizan los personajes y las imagenes :3
  })
  .catch(error=>{
    next(error)
  })
});
 //post demo
 //esta peticion se hara en scripts.js con axios
router.post("/api/demoPost", (req,res,next)=>{
const {name,phone,role}=req.body  
  
  res.status(200).json({
    id:"123456789",
    msg:"Todo cool",
    name,
    phone,
    role
  })
})

module.exports = router;
