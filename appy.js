const express = require('express');
const appy = express();
const PORT = process.env.PORT || 3000;

appy.get("/",(req,res)=> {
    
    res.send("welcome to shopnetic! and is used by  1 billion trusable customers ");

}) 

appy.listen(PORT, ()=> {
    console.log(`server is running on port  ${PORT}`);
})
