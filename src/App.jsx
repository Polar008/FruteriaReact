import { useState } from 'react'
import './App.css'
import Fruta from "./Fruta.jsx"
import FrutaCart from './FrutaCart.jsx';


function App() {
  const [carrito, setCarrito] = useState([]);

  function TotalCalculation(){
    let totalTemp = 0;
    carrito.forEach(e => totalTemp += e.preu * e.cant );
    //setTotal(totalTemp);
    return totalTemp.toFixed(2);

  }

  function Afegir(itemId) {

    let element = "";
    productes.forEach(e => { if (e.id == itemId) element = e });

    let flag = false;
    carrito.forEach(element => { if (element.id == itemId) flag = true });
    if (!flag) {
      element = { ...element, "cant": 1 }
      setCarrito([...carrito, element])
    } else {
      setCarrito(carrito.map(element => {
        const nowEle = { ...element }
        if (itemId == nowEle.id) {
          nowEle.cant++;
        }
        return nowEle;
      }));
    }
    // TotalCalculation()
  }

  function Treure(itemId) {
    setCarrito(carrito.map(element => {
      const nowEle = { ...element }
      if (itemId == nowEle.id) {
        nowEle.cant--;
      }
      return nowEle
    }).filter(e => e.cant > 0));

    // TotalCalculation()
  }

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

  const totalTicket = TotalCalculation()

  return (
    <>
      <div className="cart">
        {productes.map(e => <Fruta afegir={Afegir} id={e.id} name={e.nom} price={e.preu} />)}
      </div>
      <div className="cart">
        {carrito.map(e => <FrutaCart id={e.id} name={e.nom} price={e.preu} cant={e.cant} treure={Treure} />)}
        <h1 className='total'>Total: {totalTicket}€</h1>
      </div>
    </>
  )
}

export default App;
