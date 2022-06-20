const express = require("express")
const morgan = require("morgan")
//inicializando
const app = express()
//configuraciones
app.set("port", process.env.port || 4000);
//midlewares
app.use(morgan("dev"));

//inicializando servidor
app.listen(app.get("port"),	()=>{
	console.log("server on port", app.get("port"));
})