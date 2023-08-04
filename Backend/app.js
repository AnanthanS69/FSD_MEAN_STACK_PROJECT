const express = require('express');                                           
const app = express();  

require("dotenv").config();                                                   
const ConnectionString = process.env.PORT;  

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname,'employee')))

const cors = require('cors');
app.use(cors());

const databse = require('./databse');
const api=require('./routers/router');
app.use('/api',api);

// app.get('*',async(req,res)=>{
//     res.sendFile(path.join(__dirname,'employee','index.html'))
// })

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})