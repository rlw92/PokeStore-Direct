import React from 'react';
import {Component} from 'react';
import "../App.css"
import PokeCard from './PokeCard'
import Basket from './Basket'

class ProductsClass extends Component {
  constructor() {
    super();
    this.state = {
      update: "",
      pokemons : [],
      pokemonDetails : [],
      offset: 0,
      loadNumber:12,
      shwBskt:false,
      itemName:"",
      price:"",
      basket:[
        {
          itemName:"Hat",
          price:"70",
          quantity:1
        },
        {
          itemName:"Shoes",
          price:"60",
          quantity:1
        }
      ]

    }

    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.showBasket=this.showBasket.bind(this);
    this.hideBasket=this.hideBasket.bind(this)
    this.addToBskt=this.addToBskt.bind(this)
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this)
    this.rmvFrmBskt=this.rmvFrmBskt.bind(this)


  }

  rmvFrmBskt(name){
    this.state.basket = this.state.basket.filter(person => person.itemName != name)
    this.setState({update:true});}

  increment(name,items){
    let obj = this.state.basket.find(o => o.itemName === name);
    console.log(obj);
    ++items
    obj.quantity=items
    this.setState({update:true})
  }

  decrement(name,items){
      let obj = this.state.basket.find(o => o.itemName === name);
    console.log(obj);
    if(obj.quantity>1){
    --items
    obj.quantity=items
    this.setState({update:true})
  }
  }

  addToBskt(name,price){

    if (this.state.basket.filter(e => e.itemName === name).length > 0) {
      let obj = this.state.basket.find(o => o.itemName === name);
      ++obj.quantity

      console.log("In basket already")

}

else{


    const newList = this.state.basket.concat({
      itemName:name,
      price:price,
      quantity: 1

      })
    this.setState({
      basket:newList,
      itemName:"",
      price:""
    })

  }

  }



  showBasket(){
    this.setState({shwBskt:true})
    console.log(this.state.basket)
  }

  hideBasket(){
    this.setState({shwBskt:false})
  }


  getNextOffset() {
   return this.state.offset+this.state.loadNumber;
 }

 handleMoreClick(event) {
   const newOffset = this.getNextOffset();
   this.setState({offset: newOffset}, () => {
     console.log("Offset: " + this.state.offset)
     this.getMorePokemon();
   });

 }

  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url = "https://pokeapi.co/api/v2/item?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results}, () => {
          this.state.pokemons.map(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
              if (data) {
                var temp = this.state.pokemonDetails
                temp.push(data)
                this.setState({pokemonDetails: temp})
              }
            })
            .catch(console.log)
          })
        })
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemonDetails} = this.state;

    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} func={this.addToBskt}/>);
    });

    return (

      <div>

      <div className="navbar">
      <a href="/">Homepage</a>
      <a href="/products">Products</a>
      <a onClick={this.showBasket}>Basket({this.state.basket.length})</a>
      </div>

    {this.state.shwBskt &&  <Basket
      basket={this.state.basket}
      func={this.hideBasket}
      inc={this.increment}
      dec={this.decrement}
      rmv={this.rmvFrmBskt}/>}

      <div className="Header">
      <h1>Products</h1>
      </div>

    <div className="centerbox">
      <div className="maincontent">

          {renderedPokemonList}



      </div>


      </div>

<button type="button" className="load" onClick={this.handleMoreClick}>Load More</button>

      </div>
    );
  }
}

export default ProductsClass;
