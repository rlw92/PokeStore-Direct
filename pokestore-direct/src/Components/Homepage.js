import '../App.css';
import image from "../Assets/Mart.png"

function Homepage() {
  return (
    <div className="Homepage">

    <div className="navbar">
    <a>Homepage</a>
    <a href="/products">Products</a>
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
    Simply click onto our products page,choose from a wide selection of over 200 items sourced from local distributors,
     add the desired products to your basket and then enter your location and details at the checkout.
     <br />
     Within 24 hours our dedicated team of cyclists will deliver your basket to you, fresh and ready to use.
    </div>
   <br />
   <div className="martImage">
   <img src={image}></img>
   </div>


   <footer className="footer">
   PokeStoreDirect made with the PokeAPI for The Odin Project</footer>


    </div>
  );
}

export default Homepage;
