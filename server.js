const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname+"/build"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/build","index.html");
});

app.listen(port,()=>{console.log('listening on port '+port+'...')});
