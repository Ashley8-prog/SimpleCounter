import { string } from "prop-types";
import React from "react";
const SecondsCounter = (props) => {
    const segundo = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosición = String(segundos)[longitud - 1]
        return ultimaPosición
    }
    const segundonumero2 = (tiempo) => {
        let segundos2 = tiempo
        let longitud = String(segundos2).length
        let penúltimaposición = String(segundos2)[longitud - 2]
        return penúltimaposición
    }

    const tercernumero = (tiempo) => {
        let segundo3 = tiempo
        let longitud = String(segundo3).length
        let antepenultimaposicion = String(segundo3)[longitud - 3]
        return antepenultimaposicion

    }
    const cuartonúmero = (tiempo) => {
        let segundo4 = tiempo
        let longitud = String(segundo4).length
        let cuartaposición = String(segundo4)[longitud - 4]
        return cuartaposición

    }

    const quintonúmero = (tiempo) => {
        let segundo5 = tiempo
        let longitud = String(segundo5).length
        let quintaposición = String(segundo5)[longitud - 5]
        return quintaposición

    }

    const sextonúmero = (tiempo) => {
        let segundo6 = tiempo
        let longitud = String(segundo6).length
        let sextaposición = String(segundo6)[longitud - 6]
        return sextaposición

    }



    return (
        <>
            <div className="container bigCounter">
                <div>⏱</div>
                <div><h1 className="col-2">{props.seconds6 ? sextonúmero(props.seconds6) : "0"}</h1></div>
                <div> <h1 className="col-2">{props.seconds5 ? quintonúmero(props.seconds5) : "0"}</h1></div>
                <div> <h1 className="col-2">{props.seconds4 ? cuartonúmero(props.seconds4) : "0"}</h1></div>
                <div> <h1 className="col-2">{props.seconds3 ? tercernumero(props.seconds3) : "0"}</h1></div>
                <div> <h1 className="col-2">{props.seconds2 ? segundonumero2(props.seconds2) : "0"}</h1></div>
                <div> <h1 className="col-2">{props.seconds ? segundo(props.seconds) : "0"} </h1> </div>
            </div>
        </>
    )
}













export default SecondsCounter