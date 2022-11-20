import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
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
      filter:"",
      showItems: 8,
      offset: 0,
      loadNumber:300,
      shwBskt:false,
      itemName:"",
      price:"",
      query:"",
      basket:[]

    }

    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.showBasket=this.showBasket.bind(this);
    this.hideBasket=this.hideBasket.bind(this)
    this.addToBskt=this.addToBskt.bind(this)
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this)
    this.rmvFrmBskt=this.rmvFrmBskt.bind(this)
    this.handleShowMore=this.handleShowMore.bind(this)
    this.filterData=this.filterData.bind(this)
    this.search=this.search.bind(this)

  }


search(event){
  this.setState({query: event.target.value})

}

filterData(event){
  event.preventDefault();
  this.setState({filter: event.target.value});

  switch(event.target.value) {
  case "AZ":
    console.log("AZ")
    this.setState({pokemonDetails:this.state.pokemonDetails.sort((a, b) => a.name.localeCompare(b.name))})
    break;
  case "ZA":
    console.log("ZA")
    //Either functions below will work
    //this.setState({pokemonDetails:this.state.pokemonDetails.sort((z, y) => y.name.localeCompare(z.name))})
    this.setState({pokemonDetails:this.state.pokemonDetails.sort((a, b) => a.name.localeCompare(b.name)).reverse()})
    break;
    case "LH":
      console.log("LH")
      this.setState({pokemonDetails:this.state.pokemonDetails.sort(function(a, b){return a.cost-b.cost})});
      break;
    case "HL":
      console.log("HL")
    this.setState({pokemonDetails:this.state.pokemonDetails.sort(function(a, b){return b.cost-a.cost})});
      break;
      default:
      console.log("default")

}

}


  rmvFrmBskt(name){
    this.setState({basket:this.state.basket.filter(person => person.itemName != name)})
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

/*To use if you want to grab bits of json at a time change the load number
 to something small and plug this into the load button*/
 handleMoreClick(event) {
   const newOffset = this.getNextOffset();
   this.setState({offset: newOffset}, () => {
     console.log("Offset: " + this.state.offset)
     this.getMorePokemon();
   });

 }

/*The current one we are working on with the preloaded json*/
 handleShowMore() {
    this.setState({
      showItems:
        this.state.showItems >= this.state.pokemonDetails.length ?
          this.state.showItems : this.state.showItems + 8
    })
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

    const renderedPokemonList = pokemonDetails.filter(post => {
    if (this.state.query === '') {
      return post;
    } else if (post.name.toLowerCase().includes(this.state.query.toLowerCase())) {
      return post;
    }
  }).slice(0, this.state.showItems).map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} func={this.addToBskt}/>);
    });

    return (

      <div>

      <div className="navbar">
      <Link to="/">Homepage</Link>
      <a>Products</a>
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

      <div className="filter">
      Filter:<select value={this.state.filter} onChange={this.filterData}>
      <option value="" disabled selected hidden>Choose Filter</option>
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="LH">Price:Low-High</option>
        <option value="HL">Price:High-Low</option>
      </select>

      <input type="text" className="input" placeholder="search..." onChange={this.search}/>

  </div>


    <div className="centerbox">

      <div className="maincontent">

          {renderedPokemonList}



      </div>


      </div>

<button type="button" className="load" onClick={this.handleShowMore}>Load More</button>

      </div>
    );
  }
}

export default ProductsClass;
