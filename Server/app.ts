import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config()
const app = express();
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import PhotographyPackage_Router from './Routers/PhotographyPackage.Router'
import OrderPackage_Controller from './Controllers/OrderPackage.Controller'

app.use(PhotographyPackage_Router)
app.use(OrderPackage_Controller)

app.listen(PORT, () =>{
  console.log(`http://localhost:${PORT}`)
}).on('error',function(err){ console.log("Error occurred, server can't start" , err); })

