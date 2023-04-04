import { useContext, useState } from "react";

export const CalcularIngredientes = ({ definitivas }) => {

  const [ingredientesok, setIngredientesok] = useState([]);
  const [cantidadesok, setCantidadesok] = useState([]);
  const [unidadesok, setUnidadesok] = useState([]);
  const [oculto2, setOculto2] = useState(false);
  



  const calcularIngredientes = () => {
    let ingretemp = [];
    let cantidades = [];
    let unidades = [];
    definitivas.map((com, i) => {

      Object.entries(com.ingredientes).map((ing, i) => {
        if (ingretemp.includes(ing[0])) {
          console.log(ing[0], ' ya está repetido');
          let index = ingretemp.indexOf(ing[0]);
          cantidades[index] = cantidades[index] + ing[1];

        } else {
          ingretemp.push(ing[0]);
          cantidades.push(ing[1]);

          switch (ing[0]) {
            case 'tortillas':
            case 'tomate':
            case 'huevo':
            case 'aguacate':
            case 'carne':
            case 'zanahoria':
            case 'calabacita':
            case 'Carne de res':
              unidades.push('Kg.');
              break;
            case 'pollo':
              unidades.push('Pechugas');
              break;
            case 'lechuga':
              unidades.push('Pieza(s)');
              break;
            case 'crema':
              unidades.push('Botecito de 1/4');
              break;
            default:
              break;
          }
        }

      })
    })

    setIngredientesok(ingretemp);
    setCantidadesok(cantidades);
    setUnidadesok(unidades);
    setOculto2(true);
    console.log(ingretemp);
    console.log(cantidadesok);
    console.log(unidades);
  }



  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              {
                oculto2 ? (
                  <td>
                Ingredientes:
              </td>
                ):null
              }
              
            </tr>
          </thead>
          <tbody>
            {ingredientesok.length > 0 &&
              ingredientesok.map((ingre, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {ingre.charAt(0).toUpperCase() + ingre.slice(1)}
                    </td>
                    <td>
                      {cantidadesok[i]} {unidadesok[i]}
                    </td>
                  </tr>

                );
              })}
          </tbody>
        </table>
         <div className="button-container">
        <button onClick={calcularIngredientes}>Calcular ingredientes</button>
      </div>
      </div>
     
      

    </>
  )
}
