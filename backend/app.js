const express = require('express');
const app = express();
console.log("hiiii")

app.get('/', (res,req)=>{
res.json({
    message:"Hi"
})
})
app.listen(3000);