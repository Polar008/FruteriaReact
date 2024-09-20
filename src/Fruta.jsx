import './Fruta.css'
import { Afegir } from './App';

function Fruta(props){

    return(
        <>
            <div className="fruta">
                <p>{props.name} ({props.price}€/u)</p>
                <p className="btn" onClick={Afejir({
                    "id" : props.id,
                    "nom" : props.name,
                    "preu" : props.price
                })}>Afegir</p>
            </div>
        </>
    )
}

export default Fruta;