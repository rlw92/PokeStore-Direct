import React from 'react';
import {Component} from 'react';
import "../App.css"
import PokeCard from './PokeCard'

class ProductsClass extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
      offset: 0,
      loadNumber:12

    }

    this.handleMoreClick = this.handleMoreClick.bind(this);
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
      return (<PokeCard pokemon={pokemon} />);
    });

    return (

      <div>

      <div className="navbar">
      <a href="/">Homepage</a>
      <a href="/products">Products</a>
      <a>Basket</a>
      </div>

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
