import { MenuPrincipal } from "./MenuPrincipal"
import imagen from './assets/comidas.png'



export const ComidasApp = () => {

  return (
    <>
    <h1> <img src={imagen} alt="comidas" /></h1>
    <MenuPrincipal/>    
    </>
    
  )
}
