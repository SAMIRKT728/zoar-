import validaUser from "./ValidarUsuario";

describe('Prueba Validar Usuario',()=>{
    
    it('Datos Correctos del usuario ',()=>{
        const resultado = validaUser({
            Usuario:'Carlos',
            Contraseña:'contraseña',
            RepetirContra:'contraseña'
            
        })
        expect (resultado).toEqual({
            Usuario:'Carlos',
            Contraseña:'contraseña',
            RepetirContra:'contraseña'
        }
    
         )
    })
    it('Usuario debajo del rango',()=>{
        const resultado = validaUser({
            Usuario:'sarah',
            Contraseña:'contra1236',
            RepetirContra:'contra1236'
            
        })
        expect (resultado).toEqual(['Escribir un usuario entre 4 y 45 caracteres'])
    })
    it('Usuario encima del rango',()=>{
        const resultado = validaUser({
            Usuario:'saramirezajshajjhahsjasjhshhjaqwertyuiopasdfghjkl',
            Contraseña:'contra1236',
            RepetirContra:'contra1236'
            
        })
        expect (resultado).toEqual(['Escribir un usuario entre 4 y 45 caracteres'])
    })
    it('Contraseña vacia',()=>{
        const resultado = validaUser({
            Usuario:'saramirez',
            Contraseña:'',
            RepetirContra:'contra1236'
            
        })
        expect (resultado).toEqual([
            'LLenar todos los campos',
            "La contraseña debe contener entre 8 y 25 caracteres",
             "Las contraseñas no coinciden",
        ])
    })
    it('Contraseñas diferentes',()=>{
        const resultado = validaUser({
            Usuario:'saramirez',
            Contraseña:'contra9236',
            RepetirContra:'contra1236'
            
        })
        expect(resultado).toEqual(['Las contraseñas no coinciden'])
    })
    it('contraseña por debajo del rango',()=>{
        const resultado = validaUser({
            Usuario:'saramirez',
            Contraseña:'con',
            RepetirContra:'con'
            
        })
        expect (resultado).toEqual(['La contraseña debe contener entre 8 y 25 caracteres'])
    })
    it('contraseña por encima del rango',()=>{
        const resultado = validaUser({
            Usuario:'saramirez',
            Contraseña:'contraseñaconmasde25caracteres',
            RepetirContra:'contraseñaconmasde25caracteres'
            
        })
        expect (resultado).toEqual(['La contraseña debe contener entre 8 y 25 caracteres'])
    })
    it('repetir contraseña esta vacio',()=>{
        const resultado = validaUser({
            Usuario:'Alberto',
            Contraseña:'contraseñaconma',
            RepetirContra:'contraseñaconma'
            
        })
        expect (resultado).toEqual({
            Usuario:'Alberto',
            Contraseña:'contraseñaconma',
            RepetirContra:'contraseñaconma'

        }
            
        )
    })
    
})