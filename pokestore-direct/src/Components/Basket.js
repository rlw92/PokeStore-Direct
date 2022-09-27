import '../App.css';



function Basket( { func, basket }) {
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
      </div>

    </div>


    </div>
  );
}

export default Basket;
