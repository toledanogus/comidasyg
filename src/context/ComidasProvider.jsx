import { useState } from "react";
import { ComidasContext } from "./ComidasContext"

// const comidasInicio:string[] = [{Caldo de res, Tortitas de pollo, Quesadillas de Ollejo, Pechugas asadas}];

const comidasInicio = [{
  nombre: 'Caldo de res',
  ingredientes: {
    'Carne de res': 1,
    tortillas: 1,
    calabacita: 2,
    zanahoria: 2,
  }
},
 {
  nombre: 'Tortitas de pollo',
  ingredientes: {
    pollo: 2,
    tortillas: 0.5,
    tomate: 1,
    huevo: 1.5,
  }
 },
{
  nombre: 'Pechugas asadas',
  ingredientes: {
    pollo: 2,
    tortillas: 0.5,
    lechuga: 1,
    aguacate: 0.5,
  }
},
{
  nombre: 'Tacos de zanahoria',
  ingredientes: {
    pollo: 2,
    tortillas: 1,
    lechuga: 1,
    aguacate: 0.5,
    crema: 1,
  }
},
{
  nombre: 'Milanesas empanizadas',
  ingredientes: {
    carne: 2,
    tortillas: 1,
    lechuga: 1,
    aguacate: 0.5,
    crema: 1,
  }
}];



export const ComidasProvider = ({ children }) => {

  const [comidas, setComidas] = useState(comidasInicio);
  const [ingredientesTotal, setIngredientesTotal] = useState();




  return (
    <ComidasContext.Provider value={{ comidas, setComidas, ingredientesTotal, setIngredientesTotal }}>
      {children}

    </ComidasContext.Provider>
  )
}
