const express = require('express');
const appy = express();
const PORT = process.env.PORT || 3000;

appy.get("/",(req,res)=> {
    
    res.send("welcome to shopnetic!");

}) 

appy.listen(PORT, ()=> {
    console.log(`server is running on port  ${PORT}`);
})
