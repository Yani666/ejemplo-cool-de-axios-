

document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("demoaxios JS imported successfully!");
  },
  false
);
//peticion get para que nos traiga la listaPASO 2
axios({
  method:"get",
  url:"https://rickandmortyapi.com/api"
})
.then(res=>{
  console.log("respuesta correcta",res)
})
.catch(error=>console.log("error",error))

//peticion POST
//esta es una manera
/* axios({
  method: "post",
  url: "https://localhost:3000/api/demoPost",
  params:{}
}) */

//esta es otra manera
axios.post("http://localhost:3000/api/demoPost",{name:"yani",role:"ADMIN",phone:5510952192})
.then(res=>{
  console.log("Respuesta en post:",res)
})
.catch(error=>console.log("error",error))