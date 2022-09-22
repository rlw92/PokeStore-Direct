import '../App.css';

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
    Welcome to PokeStore Direct. A place where you can get all of the items you would normally get in your
    local PokeStore delivered directly to you, wherever you are in the Kanto region!
    Simply click onto our products page, add the desired items to your basket and enter your location and details at the checkout.</div>


    </div>
  );
}

export default Homepage;
