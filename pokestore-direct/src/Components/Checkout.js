import '../App.css';
import {useState, useEffect} from "react";
import bike from '../Assets/pokemon-bike.gif';
import {Link} from 'react-router-dom';

const BikeAni = (e) =>{
  e.preventDefault();
  console.log("TEST")
  document.querySelector(".bikanim").style.display = "flex";
  document.querySelector(".orderdet").style.display = "none";
}


function Checkout({func, basket, total}) {

  return (


<div className="modal">


  <div className="modal-content">
  <div className="orderdet">
    <span className="close" onClick={func}>&times;</span>
    <h4>Please check all details are correct!</h4>
    <div>
  <h3>  Order Details: </h3>
  <div>
   <ul>
  {basket.map((items) => (



 <li>
  <p>
  <strong>Name</strong>:&nbsp;<span>{items.itemName}</span>{' '}
  <strong>Price</strong>:&nbsp;<span>${items.price}</span>{' '}
  <label for="quantity">
  <strong>Quantity </strong>:{" "}</label>
    {" "}{items.quantity}{" "}

  {' '}${items.accTot}
  {' '}



  </p>
  </li>





  ))}

  </ul>
<p><strong>Total</strong>:&nbsp;${total}</p>
</div>
  </div>

  <div>
  <h3>Where shall we deliver your items?</h3>

  <form onSubmit={BikeAni}>
  <label for="fname">Full name:</label><br/>
  <input type="text" id="fname" name="fname" required/><br/>
  <label for="location">Location:</label><br/>
  <input type="text" id="lname" name="lname" required/><br/><br/>
  <input type="submit" value="Purchase"></input>
  </form>
  </div>
  </div>

<div className="bikanim">

<h3>Thank you for shopping with us at Pokestore-direct!</h3>
<h3>Your items will be with you shortly!</h3>
<img src={bike} /><br />
<button> <Link to="/">Return to homepage</Link></button>


</div>
  </div>



</div>
  )



}

export default Checkout;
