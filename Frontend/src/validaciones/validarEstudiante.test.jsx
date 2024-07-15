import ValidaEstudiante from "./validarEstudiante";

describe('ValidaEstudiante', () => {
  let resultado;
  
  beforeEach(() => {
    resultado = ValidaEstudiante({
      Cedula: '1003234926',
      nombre: 'Samir',
      apellido: 'ramirez',
      correo: 'saramirez@unicesar.edu.co',
      CodigoGrupo: '01',
      imagen: 'imagen.jpg'
    });
  });

  it('Estudiante válido', () => {
    expect(resultado).toEqual({
      Cedula: '1003234926',
      nombre: 'Samir',
      apellido: 'ramirez',
      correo: 'saramirez@unicesar.edu.co',
      CodigoGrupo: '01',
      imagen: 'imagen.jpg'
    });
  });

  it('campo Nombre vacío', () => {
    const resultado = ValidaEstudiante({
      Cedula: '1003234926',
      nombre: '',
      apellido: 'ramirez',
      correo: 'saramirez@unicesar.edu.co',
      CodigoGrupo: '01',
      imagen: 'imagen.jpg'
    });

    expect(resultado).toEqual(['el campo nombre esta vacio']);
  });

  it('campo apellido vacío', () => {
    const resultado = ValidaEstudiante({
      Cedula: '1003234926',
      nombre: 'samir',
      apellido: '',
      correo: 'saramirez@unicesar.edu.co',
      CodigoGrupo: '01',
      imagen: 'imagen.jpg'
    });

    expect(resultado).toEqual(['el campo apellido esta vacio']);
  });

  it('campo Correo vacío', () => {
    const resultado = ValidaEstudiante({
      Cedula: '1003234926',
      nombre: 'samir',
      apellido: 'ramirez',
      correo: '',
      CodigoGrupo: '01',
      imagen: 'imagen.jpg'
    });

    expect(resultado).toEqual(['el campo correo esta vacio']);
  });

  it(' correo no es de @unicesar.edu.co', () => {
    const resultado = ValidaEstudiante({
      Cedula: '9999',
      nombre: 'Samir',
      apellido: 'ramirez',
      correo: 'saramirez@gmail.com',
      CodigoGrupo: '01',
      imagen: 'imagen.jpg'
    });
  
    expect(resultado).toEqual(['la cedula no es valida','Correo no válido. Debe ser un correo de @unicesar.edu.co',
      
    ]);
  });

  it(' campo CodigoGrupo está vacío', () => {
    const resultado = ValidaEstudiante({
      Cedula: '1003234926',
      nombre: 'Samir',
      apellido: 'ramirez',
      correo: 'saramirez@unicesar.edu.co',
      CodigoGrupo: '',
      imagen: 'imagen.jpg'
    });

    expect(resultado).toEqual(['el campo CodigoGrupo esta vacio']);
  });
});



