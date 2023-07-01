const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db')();
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser')


//Routes
const AuthRoutes = require('./Routes/User');
const ProductRoutes = require('./Routes/District')

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin: true, credentials: true}));
app.use(cookieParser());

//Admin Auth Routes
app.use('/user',AuthRoutes)
app.use('/product',ProductRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`server is listening on the ${process.env.PORT}`)
})