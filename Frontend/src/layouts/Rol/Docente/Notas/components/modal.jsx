import * as React from 'react';
import { Box, Modal, Button, Collapse, Typography, Card } from '@mui/material';
import FormComponentA from './FormComponentA'; // Asegúrate de que este componente esté correctamente importado

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', // Añadir scroll vertical
};

const itemsA = [
  "Muestra buen nivel de expresión oral y escrita de conformidad a su formación académica y profesional.",
  "Demuestra ética y valores, discreción con la información a su cargo y responsabilidad en su quehacer diario.",
  "Su arreglo y presentación personal es impecable, viste uniformes; completos, limpios y en buen estado, (Uniforme de Mayo y de diario).",
  "Demuestra interés en su desempeño y afronta adecuadamente las situaciones de estrés (toma decisiones adecuadas que permiten la resolución de situaciones y conflictos).",
  "Es organizado, demuestra iniciativa y recursividad.",
];

const itemsB = [
"    Revisa las historias clínicas y verifica las condiciones generales del paciente",
"    Describe claramente las técnicas quirúrgica y de instrumentación y con base en ello solicita anticipadamente los materiales, las suturas, el instrumental y demás elementos requeridos para la intervención,  previendo las complicaciones y/o cambios en las técnicas quirúrgicas",
"    Realiza apertura del paquete de ropa y circula  adecuadamente insumos, elementos e instrumentos requeridos para la intervención quirúrgica",
"    Cumple adecuadamente con las medidas de bioseguridad: lavado de mano (social, después de contacto con paciente y al final de la jornada) y porte de los elementos de protección persona",
"Aplica correctamente las diferentes técnicas del lavado de manos, se viste, y viste adecuada y oportunamente al equipo quirúrgico y al paciente",
  "Conoce y aplica los protocolos de las especialidades y conserva el orden y la limpieza del instrumental en todas las etapas del acto quirúrgico",
  "Demuestra habilidad, destreza y seguridad durante el procedimiento quirúrgico",
  "Conoce y aplica las normas de asepsia y se interesa por preservarla en las diferentes etapas del acto quirúrgico",
  "Demuestra interés por brindar un tratamiento adecuado a la herida quirúrgica",
  "Expresa sus inquietudes de manera clara segura y respetuosa",
  "Distingue con precisión un procedimiento limpio, sucio y contaminado y aplica correctamente la técnica aséptica en cada una de ellas",
  "Atiende de manera adecuada los cambios en las técnicas operatorias y se anticipa a las necesidades del equipo quirúrgico",
  "Atiende y aplica las sugerencias y correcciones realizadas durante el procedimiento quirúrgico",
  "Realiza correcta y oportunamente el conteo y el recuento de elementos e insumos en las diferentes etapas del acto quirúrgico",
  "Regula el gasto de materiales quirúrgicos y/u otros, y se responsabiliza por el tratamiento adecuado, y custodia de esta y de otros elementos a su cargo",
  "Maneja y descarta adecuadamente los materiales medico-quirúrgicos y elementos cortopunzantes (Aplica las normas de bioseguridad, clasifica y manipula adecuadamente desechos cortantes y punzantes)",
  "Verifica el funcionamiento de los equipos, de la dotación del quirófano, del instrumental a su cargo antes y después de cada procedimiento",
  "Es responsable del inventario a su cargo y del orden y la limpieza del área quirúrgica",
];

const itemsC =[
"  Cumple con el proceso investigativo asignado por el docente para la elaboración y diseño del trabajo (casos clínicos, revisión bibliográfica de artículos científicos, propuesta de investigación)",
"  Elabora y ejecuta estrategias y trabajos orientados a la internacionalización del curriculo y de la práctica formativa abordando temas de interés general dirigidas a funcionarios y comunidad académica, aportando a la visibilidad de la profesión y validando su intervención de manera positiva. (Entre otros el plan de mejora)",
"  Desarrolla y participa activamente en la ejecución de la proyección social (institucional y/o comunidad)",


]
export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [collapseA, setCollapseA] = React.useState(false);
  const [collapseB, setCollapseB] = React.useState(false); 
  const [collapseC, setCollapseC] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box  >
      <Button  variant="contained" color="primary" onClick={handleOpen}>
        Agregar Notas
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        
      >
        <Box sx={style}>
          <Box>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => setCollapseA(!collapseA)}
              sx={{ marginBottom: 2 }}
            >
              Componente A, ACTITUD PERSONAL
            </Button>
            <Collapse in={collapseA}>
              <Box sx={{ marginBottom: 4 }}>
                <FormComponentA
                  title="A, ACTITUD PERSONAL"
                  nombrecolum={"Se evaluan de manera integral las competencias comunicativas, actitudinales y comportamentales en terminos generales,"}
                  items={itemsA}
                  percentage={10}
                />
              </Box>
            </Collapse>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => setCollapseB(!collapseB)}
              sx={{ marginBottom: 2 }}
            >
              Componente B, CONOCIMIENTOS ESPECIFICOS DESDE EL AMBITO ASISTENCIAL 
              </Button>
            <Collapse in={collapseB}>
              <Box sx={{ marginBottom: 4 }}>
                <FormComponentA
                  title="B, CONOCIMIENTOS ESPECIFICOS DESDE EL AMBITO ASISTENCIAL"
                  nombrecolum={'Se evalúan las competencias comunicativas, cognitivas y las derivadas del proceso asistencial  (Procedimentales)'}
                  items={itemsB}
                  percentage={80}
                />
              </Box>
            </Collapse>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => setCollapseC(!collapseC)}
              sx={{ marginBottom: 2 }}
            >
              Componente C, CONOCIMIENTOS ESPECIFICOS DESDE EL AMBITO ASISTENCIAL
              </Button>
            <Collapse in={collapseC}>
              <Box sx={{ marginBottom: 4 }}>
                <FormComponentA
                  title="C, CONOCIMIENTOS ESPECIFICOS DESDE EL AMBITO ASISTENCIAL"
                  nombrecolum={'Se evaluan las competencias comunicativas, cognitivas, comportamentales y procedimentales desde el ambito de la investigacion y la proyeccion social'}
                  items={itemsC}
                  percentage={10}
                />
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
