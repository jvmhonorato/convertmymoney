//imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const path = require('path')

//Static files
app.use(express.static("public"));
app.use(express.static(__dirname +"public/css"));
app.use(express.static(__dirname +"public/js"));
app.use(express.static(__dirname +"public/img"));


//configuração responsável por direcionar consulta a pasta view ao tipo de arquivo ejs TEMPLATE ENGINE 
app.set(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));



//Navigation
    app.get('/', (req, res) => { 
       res.render('home')
    })
    app.get('/about', (req, res) => { 
        res.render('about')
     })





//listen PORT
app.listen(3000, err=>{
    if(err){
        console.log('could not start application')
    }else{
        console.log('started application')
    }
})