import '../App.css';



function Basket( { func }) {
  return (

    <div>

    <div className="modal">

        <div className="modal-content">
        <span className="close" onClick={func}>&times;</span>
        <h2>Basket</h2>
        <p>This is where the items will be listed.</p>
      </div>

    </div>


    </div>
  );
}

export default Basket;
