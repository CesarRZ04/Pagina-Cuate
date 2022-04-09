focusMethod = function getFocus() {
    document.getElementById("s").focus();
  }

  
  function agrega(tipo,nombre,personas,origen,destino,ida,regreso,pago) {
    let datos = document.getElementById("datos");
    var reader = new FileReader();
    let basico=1500;
    let medio=2000;
    let platinum=2200;
    let premium=2500;
    let vip=3000;
    let totalb=basico*personas;
    let totalm=medio*personas;
    let totalp=platinum*personas;
    let totalpr=premium*personas;
    let totalv=vip*personas;
    let sfechai = ida.trim();
    sfechai = sfechai.slice(8,10)+"/"+sfechai.slice(5,7)+"/"+sfechai.slice(0,4);
    let sfechao = regreso.trim();
    sfechao = sfechao.slice(8,10)+"/"+sfechao.slice(5,7)+"/"+sfechao.slice(0,4);
    NL++;
    
  switch(tipo){
    case "Basico":datos.innerHTML += `<tr> 
        <td id="nu">${NL}</td> 
        <td>${tipo}</td> 
        <td>${nombre}</td>
        <td>${personas}</td> 
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${sfechai}</td>
        <td>${sfechao}</td>
        <td>${pago}</td>
        <td>${basico}</td>
        <td>${totalb}</td>
        <td><input type="button" value="Eliminar" name="eliminar" id="eliminar" > 
        <input type="button" value="Modificar" name="modificar" id="modificar" ></td>
        <tr>`
        break;
        case "Medio":datos.innerHTML += `<tr> 
        <td id="nu">${NL}</td> 
        <td>${tipo}</td> 
        <td>${nombre}</td>
        <td>${personas}</td> 
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${sfechai}</td>
        <td>${sfechao}</td>
        <td>${pago}</td>
        <td>${medio}</td>
        <td>${totalm}</td>
        <td><input type="button" value="Eliminar" name="eliminar" id="eliminar" > 
        <input type="button" value="Modificar" name="modificar" id="modificar" ></td>
        <tr>`
        break;
        case "Platinum":datos.innerHTML += `<tr> 
        <td id="nu">${NL}</td> 
        <td>${tipo}</td> 
        <td>${nombre}</td>
        <td>${personas}</td> 
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${sfechai}</td>
        <td>${sfechao}</td>
        <td>${pago}</td>
        <td>${platinum}</td>
        <td>${totalp}</td>
        <td><input type="button" value="Eliminar" name="eliminar" id="eliminar" > 
        <input type="button" value="Modificar" name="modificar" id="modificar" ></td>
        <tr>`
        break;
        case "Premium":datos.innerHTML += `<tr> 
        <td id="nu">${NL}</td> 
        <td>${tipo}</td> 
        <td>${nombre}</td>
        <td>${personas}</td> 
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${sfechai}</td>
        <td>${sfechao}</td>
        <td>${pago}</td>
        <td>${premium}</td>
        <td>${totalpr}</td>
        <td><input type="button" value="Eliminar" name="eliminar" id="eliminar" > 
        <input type="button" value="Modificar" name="modificar" id="modificar" ></td>
        <tr>`
      break;
      case "VIP":datos.innerHTML += `<tr> 
        <td id="nu">${NL}</td> 
        <td>${tipo}</td> 
        <td>${nombre}</td>
        <td>${personas}</td> 
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${sfechai}</td>
        <td>${sfechao}</td>
        <td>${pago}</td>
        <td>${vip}</td>
        <td>${totalv}</td>
        <td><input type="button" value="Eliminar" name="eliminar" id="eliminar" > 
        <input type="button" value="Modificar" name="modificar" id="modificar" ></td>
        <tr>`
        break;
  }
    cierramodal()
  }
  
  function limpiar() {
    document.getElementById("Viajes").reset();
  }
  
  function eliminare(ele){
  if(ele.name=="eliminar"){
      ele.parentElement.parentElement.remove()
      msj("Reservacion Eliminada")
      reodenar()
    }
  
  }
  function msj(si){
    document.getElementById("mensaje").innerHTML=`<h3>${si}</h3>`   
    setTimeout(function(){
    document.getElementById("mensaje").innerHTML=``    
    },3000)
  
  }
  
  
  function modificar(ele){
    if (ele.name=="modificar"){
      abremodal()
      document.getElementById("guardar").value="Guardar"
      seleccionado=ele.parentElement.parentElement
      document.getElementById("tipo").value=seleccionado.cells[1].innerHTML
      document.getElementById("nombre").value=seleccionado.cells[2].innerHTML
      document.getElementById("personas").value=seleccionado.cells[3].innerHTML
      document.getElementById("origen").value=seleccionado.cells[4].innerHTML
      document.getElementById("destino").value=seleccionado.cells[5].innerHTML
      document.getElementById("ida").value=seleccionado.cells[6].innerHTML
      document.getElementById("regreso").value=seleccionado.cells[7].innerHTML
      document.getElementById("pago").value=seleccionado.cells[8].innerHTML
    }
  }
  
  function actualiza(tipo,nombre,personas,origen,destino,ida,regreso,pago){
    let basico=1500;
    let medio=2000;
    let platinum=2200;
    let premium=2500;
    let vip=3000;
    let totalb=basico*personas;
    let totalm=medio*personas;
    let totalp=platinum*personas;
    let totalpr=premium*personas;
    let totalv=vip*personas;
    sfechai = ida.trim()
    sfechai= sfechai.slice(8,10)+"/"+sfechai.slice(5,7)+"/"+sfechai.slice(0,4) 
    sfechao =regreso.trim()
    sfechao= sfechao.slice(8,10)+"/"+sfechao.slice(5,7)+"/"+sfechao.slice(0,4) 
    seleccionado.cells[1].innerHTML=tipo
    seleccionado.cells[2].innerHTML=nombre
  seleccionado.cells[3].innerHTML=personas
  seleccionado.cells[4].innerHTML=origen
  seleccionado.cells[5].innerHTML=destino
    seleccionado.cells[6].innerHTML=sfechai
  seleccionado.cells[7].innerHTML=sfechao
  seleccionado.cells[8].innerHTML=pago
    switch(tipo){
    case "Basico":
      seleccionado.cells[9].innerHTML=`<td>${basico}</td>`
      seleccionado.cells[10].innerHTML=`<td>${totalb}</td>`
    break;
    case "Medio":
      seleccionado.cells[9].innerHTML=`<td>${medio}</td>`
      seleccionado.cells[10].innerHTML=`<td>${totalm}</td>`
    break;
    case "Platinum":
      seleccionado.cells[9].innerHTML=`<td>${platinum}</td>`
      seleccionado.cells[10].innerHTML=`<td>${totalp}</td>`
    break;
    case "Premium":
      seleccionado.cells[9].innerHTML=`<td>${premium}</td>`
      seleccionado.cells[10].innerHTML=`<td>${totalpr}</td>`
    break;
    case "VIP":
      seleccionado.cells[9].innerHTML=`<td>${vip}</td>`
      seleccionado.cells[10].innerHTML=`<td>${totalv}</td>`
    break;
    }
  
  seleccionado=null
  limpiar()
  msj("Registro Actualizado")
  document.getElementById("guardar").value="Agregar"
  cierramodal()
  }
    
  
  
  function reodenar(){
    let listaNu=document.querySelectorAll("#nu")
    NL=0
    for(ele of listaNu){
      NL++
      ele.innerHTML=NL
    }
  }
  
  
  function abremodal(){
    modal.style.display="block"
  }
  
  function cierramodal(){
    modal.style.display="none"
  }