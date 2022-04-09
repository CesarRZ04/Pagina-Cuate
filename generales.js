const express=require('express');
const rutas=express.Router();

const carga=require('../storage')   ;
const alumno=require('../models/alumno');

rutas.get('/',async(req,res)=>{
    try {
        const alumdb=await alumno.find();
        res.render('alumnos',{filas:alumdb})
    } catch (error) {
        console.log(error);
    }
})

rutas.get('/eliminar/:id',async(req,res)=>{
    const id=req.params.id
    try {
        const alumdb=await alumno.deleteOne({_id:id})
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})
rutas.get('/agregar',(req,res)=>{
    res.render('agregar')
})

rutas.post('/guardar',carga.single('imagen'),async(req,res,next)=>{
    const alu=req.file.filename;
    const nombre=req.body.nombre;
    const grupo=req.body.grupo;
    const materia=req.body.materia;
    const c1=req.body.cal1;
    const c2=req.body.cal2;
    const c3=req.body.cal3;
    const prom=(parseInt(req.body.cal1)+parseInt(req.body.cal2)+parseInt(req.body.cal3))/3

    const datos={
        nombre:nombre,
        grupo:grupo,
        materia:materia,
        parciales:[c1, c2, c3, prom],
        imgurl:alu,
    };
    try {
        const alumdb=new alumno(datos);
        await alumdb.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})
rutas.get("/editar/:id", carga.single("imagen"), async (req, res) => {
    const id = req.params.id;
    try {
      const alumdb = await alumno.findOne({ _id: id });
      res.render("editar", { filas: alumdb });
    } catch (error) {
      console.log(error);
    }
  });
    rutas.post("/actualizar", carga.single("imagen"), async (req, res) => {
        const id = req.body.id;
        const alu = req.file.filename;
        const nombre = req.body.nombre;
        const grupo = req.body.grupo;
        const materia = req.body.materia;
        const c1 = req.body.cal1;
        const c2 = req.body.cal2;
        const c3 = req.body.cal3;
        const prom=(parseInt(req.body.cal1)+parseInt(req.body.cal2)+parseInt(req.body.cal3))/3

        const datos = {
          nombre: nombre,
          grupo: grupo,
          materia: materia,
          parciales: [c1, c2, c3, prom],
          imgurl: alu,
        };
        try {
          const alumdb = await alumno.updateOne({ _id: id }, datos);
          res.redirect("/");
        } catch (error) {
          console.log(error);
        }
      });
module.exports=rutas;