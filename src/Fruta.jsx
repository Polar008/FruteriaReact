import './Fruta.css'

function Fruta(props){

    return(
        <>
            <div className="fruta">
                <p>{props.name} ({props.price}€/u)</p>
                <p className="btn" onClick={() => props.afegir(props.id)}>Afegir</p>
            </div>
        </>
    )
}

export default Fruta;