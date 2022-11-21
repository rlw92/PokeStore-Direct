import '../App.css';
import {useState, useEffect} from "react";
import Checkout from "./Checkout"



function Basket( { func, basket, inc, dec, rmv }) {
  const[total,setTotal]=useState("")
  const[accTot,setAcc]=useState([])
  const[update,setUpdate]=useState("")
  const[checkout,setcheckout]=useState(false)



useEffect(()=>{

  basket.forEach((element) => {
element.accTot = element.quantity*element.price
})

let sum = basket.reduce(function(prev, current) {
return prev + +current.accTot
}, 0);
setTotal(sum)


})

const showCheckout = ()=>{setcheckout(checkout => !checkout)}




  return (

    <div>

    <div className="modal">

        <div className="modal-content">
        <span className="close" onClick={func}>&times;</span>
        <h2 className="name">Basket</h2>
        <div>
         <ul>
        {basket.map((items) => (



       <li>
        <p>
        <strong>Name</strong>:&nbsp;<span>{items.itemName}</span>{' '}
        <strong>Price</strong>:&nbsp;<span>${items.price}</span>{' '}
        <label for="quantity">
        <strong>Quantity </strong>:{" "}</label>
        <button onClick={()=>dec(items.itemName,items.quantity)}>-</button>
        {" "}{items.quantity}{" "}
        <button onClick={()=>inc(items.itemName,items.quantity)}>+</button>
        {' '}${items.accTot}
        {' '}
     <button onClick={()=> rmv(items.itemName)}>Remove</button>


        </p>
        </li>





        ))}

        </ul>

</div>
<p><strong>Total</strong>:&nbsp;${total}</p>
<button onClick={showCheckout}>Go To Checkout</button>

      </div>
      {checkout &&  <Checkout
                      basket = {basket}
                      total = {total}
                      func={showCheckout}/>}
    </div>


    </div>
  );
}

export default Basket;
