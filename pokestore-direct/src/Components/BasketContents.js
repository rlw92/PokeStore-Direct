import '../App.css';
import {useState, useEffect} from "react";



function BasketContents( { func, basket, inc }) {
  const[total,setTotal]=useState("")
  const[accTot,setAcc]=useState([])
  const[update,setUpdate]=useState("")


  return (

    <div>

    <div className="modal">

        <div className="modal-content">
        <span className="close" onClick={func}>&times;</span>
        <h2>Basket</h2>
        <div>
        <ul>
        {basket.map((items) => (

        <li>
        <p>
        <strong>Name</strong>:&nbsp;<span>{items.itemName}</span>{' '}
        <strong>Price</strong>:&nbsp;<span>${items.price}</span>{' '}
        <label for="quantity">
        <strong>Quantity </strong>:</label>
        <button>-</button>
        {items.quantity}
        <button onClick={()=>inc(items.itemName,items.quantity)}>+</button>
        {items.accTot}

        </p>
        </li>



        ))}

        </ul>
</div>
<p><strong>Total</strong>:&nbsp;${total}</p>
<button>Go To Checkout</button>
      </div>

    </div>


    </div>
  );
}

export default BasketContents;
