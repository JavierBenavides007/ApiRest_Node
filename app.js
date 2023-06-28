const express = require('express');
const { json } = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
//app.use(express(json));

app.use('/', require('./routes'));

app.listen(10000, ()=>{
    console.log("servidor encendido localhost")
})