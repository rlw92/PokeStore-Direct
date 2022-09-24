import '../App.css';
import image from "../Assets/Mart.png"

function Homepage() {
  return (
    <div className="Homepage">

    <div className="navbar">
    <a>Homepage</a>
    <a href="/products">Products</a>
    <a>Basket</a>
    </div>

    <div className="Header">
    <h1>PokeStore-Direct</h1>
    </div>



    <br />

    <div className="About">
    Welcome to PokeStore Direct!
    <br />
    A place where you can get all of the items you would normally get in your
    local PokeMart delivered directly to you!
    <br />Wherever you are in the Kanto region!
    <br />
    Simply click onto our products page, add the desired items to your basket and enter your location and details at the checkout.
    </div>
   <br />
   <div className="martImage">
   <img src={image}></img>
   </div>


    </div>
  );
}

export default Homepage;
