const express = require('express')
const app = express()
const path = require('path')

//configuração responsável por direcionar consulta a pasta view ao tipo de arquivo ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

//Rota "home"
app.get('/', (req, res) => { 
       res.render('home')
    })







app.listen(3000, err=>{
    if(err){
        console.log('could not start application')
    }else{
        console.log('started application')
    }
})