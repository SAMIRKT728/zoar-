
import React from "react";

const ValidaEstudiante =({Cedula,  nombre, apellido, correo, CodigoGrupo, imagen })=>{

let mensaje=[];
const Estudiante ={};

if (!Cedula) {
    mensaje.push('el campo cedula esta vacio') 
} else if (typeof Cedula !== 'string' || Cedula.length<5 || Cedula.length>11 ) {
    mensaje.push('la cedula no es valida')  
} else{
    Estudiante.Cedula = Cedula
}
if (!nombre) {
    mensaje.push('el campo nombre esta vacio') 
} else if (typeof nombre !== 'string'|| /\d/.test(nombre) ) {
    mensaje.push('El nombre no es valido')  
} else{
    Estudiante.nombre = nombre
}
if (!apellido) {
    mensaje.push('el campo apellido esta vacio') 
} else if (typeof apellido !== 'string'|| /\d/.test(apellido) ) {
    mensaje.push('El apellido no es valido')  
} else{
    Estudiante.apellido = apellido
}
if (!correo) {
    mensaje.push('el campo correo esta vacio') 
} else if (!correo.endsWith("@unicesar.edu.co")) {
    mensaje.push("Correo no válido. Debe ser un correo de @unicesar.edu.co");
} else{
    Estudiante.correo = correo
}
if (!CodigoGrupo) {
    mensaje.push('el campo CodigoGrupo esta vacio') 
} else if (typeof CodigoGrupo !== 'string' || CodigoGrupo.length<1 || CodigoGrupo.length>99) {
    mensaje.push("el codigo del Grupo no existe");
} else{
    Estudiante.CodigoGrupo = CodigoGrupo
}
Estudiante.imagen = imagen

if (mensaje.length > 0) {
    return mensaje;
  } else {
    return Estudiante;
  }

   
}

export default ValidaEstudiante;