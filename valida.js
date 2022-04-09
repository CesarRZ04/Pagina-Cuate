const inp=document.querySelector('.inp');
const previa=document.querySelector('.previa');

inp.style.opacity=0;

inp.addEventListener('change', verifica);
function verifica(){
    previa.innerHTML="";
    const archivos=inp.files;
    if(archivos.length===0){
        previa.innertHTML='No existen archivos seleccionados'
    }
    else{
        let arch=archivos[0];
        if(validame(arch)){
            previa.innerHTML=`Nombre : <strong>${arch.name}</strong><br>Tamaño:
            <strong>${tarchivo(arch.size)}</strong><br>
            <img class="imgtempo" src="${URL.createObjectURL(arch)}">`

        }
        else{
            previa.innerHTML=`Nombre : ${arch.name} No es un tipo valido `;
        }
    }
}

const tipo=[
    'image/png',
    'image/jpeg',
    'image/gif'
]

function validame(arch){
    return tipo.includes(arch.type);

}

function tarchivo(ta){
    if(ta < 1024){
        return ta+'Bytes'
    }
    else if(ta >1024 && ta < 10488576){
        return (ta/1024).toFixed(1)+' KB';
    }
    else if(ta>1048576){
        return(ta/1048576).toFixed(1)+' MB'
    }
}