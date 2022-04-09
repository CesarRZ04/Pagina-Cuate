const express =require('express')
const path = require('path')
const morgan=require('morgan')
const mongoose=require('mongoose')

//servidor
const app=express()
app.set('port',process.env.PORT || 3200)
app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto:',app.get('port'));
})

//conexion
mongoose.connect('mongodb://localhost:27017/alumnos', {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error'))
db.once('open',()=>{
    console.log('Conexion Exitosa')
})

//middlewere
app.use(morgan('dev'))

//body parser 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//views
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'./views'))

//ruta estatica
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./alumnos')));

//rutas generales
app.use(require('./routes/generales'))