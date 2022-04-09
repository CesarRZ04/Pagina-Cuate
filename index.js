let seleccionado = null
let NL=0
let modal=document.getElementById("modal")
let btnAgrega=document.getElementById("btnAgrega")

document.getElementById("Viajes").addEventListener("submit",function(e){
e.preventDefault()
let tipo = document.getElementById("tipo").value
let nombre=document.getElementById("nombre").value
let personas = document.getElementById("personas").value
let origen= document.getElementById("origen").value
let destino=document.getElementById("destino").value
let ida=document.getElementById("ida").value
let regreso=document.getElementById("regreso").value
let pago=document.getElementById("pago").value

if(seleccionado===null){
 agrega(tipo,nombre,personas,origen,destino,ida,regreso,pago)   
}else{
    actualiza(tipo,nombre,personas,origen,destino,ida,regreso,pago)
}
limpiar()
})

document.getElementById("datos").addEventListener("click",(e)=>{
e.preventDefault()
eliminare(e.target)
modificar(e.target)   
})

btnAgrega.addEventListener("click",()=>{
    abremodal();
})