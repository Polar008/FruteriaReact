import './Fruta.css'

function FrutaCart(props) {

    return (
        <div className="fruta2">
            <p>{props.name}</p>
            <p>{props.cant}u x {props.price}/u = {props.price * props.cant}€</p>
            <p className="btn" onClick={() => props.treure(props.id)}>Treure</p>
        </div>
    )
}

export default FrutaCart;