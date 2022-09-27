import '../App.css';
import {useState, useEffect} from "react";



function Basket( { func, basket }) {
  const[total,setTotal]=useState("")


  let sum = basket.reduce(function(prev, current) {
  return prev + +current.price
}, 0);

useEffect(()=>{
  setTotal(sum)

  }
)


  return (

    <div>

    <div className="modal">

        <div className="modal-content">
        <span className="close" onClick={func}>&times;</span>
        <h2>Basket</h2>
        <div>
        <ul>
        {basket.map((items) => (

        <li>  <p><strong>Name</strong>:&nbsp;<span>{items.itemName}</span>{' '}<strong>Price</strong>:&nbsp;<span>${items.price}</span></p> </li>

        ))}

        </ul>
</div>
<p><strong>Total</strong>:&nbsp;${total}</p>
      </div>

    </div>


    </div>
  );
}

export default Basket;
