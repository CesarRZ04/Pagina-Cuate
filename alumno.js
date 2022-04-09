const mongoose = require('mongoose')

const Schema = mongoose.Schema

const datosSchema = new Schema({
nombre:String,
grupo:String,
materia:String,
parciales:Array,
imgurl:String

},{
    timestamps:true
});
const datos = mongoose.model('datos',datosSchema)

module.exports=datos