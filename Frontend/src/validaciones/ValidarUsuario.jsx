
const validaUser = ({Usuario, Contraseña, RepetirContra}) =>{

let mensaje=[];
const User ={};


    if(!Usuario || !Contraseña || !RepetirContra){
     mensaje.push('LLenar todos los campos') 
    } 
    if(typeof Usuario !== 'string'|| Usuario.length<5 || Usuario.length>45){
     mensaje.push('Escribir un usuario entre 4 y 45 caracteres') 
    }else {
        User.Usuario = Usuario 
    }
    if(typeof Contraseña !== 'string'||Contraseña.length<8 || Contraseña.length>20){
    mensaje.push('La contraseña debe contener entre 8 y 25 caracteres') 
    }else{
        User.Contraseña= Contraseña 
    }
    if(typeof RepetirContra !== 'string'||RepetirContra!==Contraseña){
        mensaje.push('Las contraseñas no coinciden') 
    }else{
         User.RepetirContra= RepetirContra 
    }
    if (mensaje.length > 0) {
         return mensaje;
        } else {
        return User;
        }

}

export default validaUser;