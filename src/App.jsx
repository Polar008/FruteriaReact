import { useState } from 'react'
import './App.css'
import Fruta from "./Fruta.jsx"
import FrutaCart from './FrutaCart.jsx';

const [carrito, setCarrito] = useState([
  {
    "id": 1,
    "nom": "Plàtan",
    "preu": 0.5,
    "cant": 0
  },
  {
    "id": 2,
    "nom": "Poma",
    "preu": 0.8,
    "cant": 0
  },
  {
    "id": 3,
    "nom": "Pinya",
    "preu": 5,
    "cant": 0
  },
  {
    "id": 4,
    "nom": "Meló",
    "preu": 6,
    "cant": 0
  },
]);

function Afegir(item){
  setCarrito(carrito.map(element => {
    const nowEle ={...element}
    if(item.id == nowEle.id){
      nowEle.cant++;
    }
    return nowEle;
  }));

}


function App() {
  const productes = [
    {
      "id": 1,
      "nom": "Plàtan",
      "preu": 0.5
    },
    {
      "id": 2,
      "nom": "Poma",
      "preu": 0.8
    },
    {
      "id": 3,
      "nom": "Pinya",
      "preu": 5
    },
    {
      "id": 4,
      "nom": "Meló",
      "preu": 6
    },
  ];

  return (
    <>
      <div className="cart">
        {productes.map(e => <Fruta id={e.id} name={e.nom} price={e.preu} />)}
      </div>
      <div>
        {carrito.map(e => e.cant*1 > 0 && <FrutaCart name={e.nom} price={e.preu} cant={e.cant}  /> )}
      </div>
    </>
  )
}

export {App, Afegir};
