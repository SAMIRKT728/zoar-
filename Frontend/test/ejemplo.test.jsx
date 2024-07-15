import multiplicar from "../src/Hooks/ejemplo";

describe('probando la funcion de multplicar numeros',()=>{
    it ('Multiplicacion correcta', ()=>{

        const resultado = multiplicar(3,1)
        expect(resultado).toEqual(9)

    })
})