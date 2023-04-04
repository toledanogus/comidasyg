import React, { useContext, useEffect, useState } from 'react';
import { ComidasContext } from './context/ComidasContext';
import { CalcularIngredientes } from './CalcularIngredientes';


export const MenuPrincipal = () => {

    const { comidas } = useContext(ComidasContext);
    const [arrAzar, setArrAzar] = useState([]);
    const [seleccion3, setSeleccion3] = useState([]);
    const [seleccionado1, setSeleccionado1] = useState(false);
    const [seleccionado2, setSeleccionado2] = useState(false);
    const [seleccionado3, setSeleccionado3] = useState(false);
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [num3, setNum3] = useState();
    const [deshabilitado, setDeshabilitado] = useState();
    const [tituloOculto, setTituloOculto] = useState(false);



    const seleccionador = () => {


        let index1, index2, index3;
        do {
            index1 = Math.floor(Math.random() * comidas.length);
            index2 = Math.floor(Math.random() * comidas.length);
            index3 = Math.floor(Math.random() * comidas.length);
        } while (index1 === index2 || index1 === index3 || index2 === index3);

        setArrAzar([index1, index2, index3]);

        setNum1(index1);
        setNum2(index2);
        setNum3(index3);

        setSeleccionado1(false);
        setSeleccionado2(false);
        setSeleccionado3(false);

        setDeshabilitado('disabled');
        setTituloOculto(true);


    }


    const verificador = () => {
        let n1, n2, n3;

        if (!seleccionado1 && seleccionado2 && seleccionado3) {
            do {
                n1 = Math.floor(Math.random() * comidas.length);
            }
            while (n1 === num1 || n1 === num2 || n1 === num3);
            console.log(n1);
            setNum1(n1);
        }

        else if (seleccionado1 && !seleccionado2 && seleccionado3) {

            do {
                n2 = Math.floor(Math.random() * comidas.length);
            }
            while (n2 === num2 || n2 === num1 || n2 === num3);
            console.log(n2);
            setNum2(n2);
        }
        else if (seleccionado1 && seleccionado2 && !seleccionado3) {

            do {
                n3 = Math.floor(Math.random() * comidas.length);
            }
            while (n3 === num2 || n3 === num1 || n3 === num3);
            console.log(n3);
            setNum3(n3);
        }


        else if (!seleccionado1 && !seleccionado2 && seleccionado3) {

            do {
                n1 = Math.floor(Math.random() * comidas.length);
                n2 = Math.floor(Math.random() * comidas.length);
            }
            while (n1 === n2 || n1 === n2 || n1 === num3 || n2 === num3);
            console.log(n1);
            setNum1(n1);
            setNum2(n2);
        }

        else if (!seleccionado1 && seleccionado2 && !seleccionado3) {

            do {
                n1 = Math.floor(Math.random() * comidas.length);
                n3 = Math.floor(Math.random() * comidas.length);
            }
            while (n1 === n3 || n1 === num2 || n1 === num3 || n3 === num3 || n3 === num2);
            console.log(n1);
            setNum1(n1);
            setNum3(n3);
        }

        else if (seleccionado1 && !seleccionado2 && !seleccionado3) {

            do {
                n2 = Math.floor(Math.random() * comidas.length);
                n3 = Math.floor(Math.random() * comidas.length);
            }
            while (n2 === n3 || n2 === num1 || n2 === num2 || n3 === num3 || n3 === num2 || n3 === num1 || n3 === num2);
            console.log(n2);
            setNum2(n2);
            setNum3(n3);
        }

        else if (!seleccionado1 && !seleccionado2 && !seleccionado3) {

            do {
                n1 = Math.floor(Math.random() * comidas.length);
                n2 = Math.floor(Math.random() * comidas.length);
                n3 = Math.floor(Math.random() * comidas.length);
            }
            while (n1 === n2 || n1 === n3 || n2 === n3);
            console.log(n2);
            setNum1(n1);
            setNum2(n2);
            setNum3(n3);
        }
    }


    const test = (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case '0':
                setSeleccionado1(e.target.checked);
                break;
            case '1':
                setSeleccionado2(e.target.checked);
                break;
            case '2':
                setSeleccionado3(e.target.checked);
                break;
            default:
                break;
        }

    };



    useEffect(() => {
        console.log(seleccionado1, seleccionado2, seleccionado3);
    }, [seleccionado1, seleccionado2, seleccionado3]);


    useEffect(() => {
        console.log(arrAzar, seleccion3, 'Primeros buenos');
    }, [arrAzar]);

    useEffect(() => {
        if (arrAzar.length > 1) {
            setSeleccion3([comidas[num1], comidas[num2], comidas[num3]]);
            console.log(arrAzar, 'a verrrr');
            console.log(num1, num2, num3);
        }
    }, [num1, num2, num3]);




    return (
        <>


            <div className="container">
                <table>

                    <thead>
                        <tr>
                            {
                                tituloOculto ? (
                                    <td>
                                        Comida:
                                    </td>
                                ) : null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seleccion3.map((elemento, i) => (
                                <React.Fragment key={elemento.nombre}>
                                    <tr >
                                        <td>
                                            — {elemento.nombre}
                                        </td>


                                        <td>
                                            <input
                                                className='casillas'
                                                type="checkbox"
                                                name={elemento.nombre}
                                                id={i}
                                                // checked={`seleccionado${i}`}
                                                // onChange={()=>test(i+1)}
                                                onChange={test}
                                            />
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))

                        }
                    </tbody>

                </table>
                <div className="button-container">

                    {
                        !tituloOculto ? (
                            <button onClick={seleccionador}
                                    className='inicial'
                                    disabled={deshabilitado}>
                            Presiona para elegir 3 menús
                            </button>
                        ) : null
                    }

                    {
                        tituloOculto ? (
                            <button onClick={verificador}>Cambiar comida</button>
                        ) : null
                    }

                </div>
            </div>


                    {
                        tituloOculto ? (
                            <CalcularIngredientes definitivas={seleccion3} />
                        ):null
                    }
            

        </>
    )
}
