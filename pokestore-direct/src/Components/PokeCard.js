import React from 'react'
import '../App.css'

const PokeCard = ({pokemon}) => {
    return (





    <div key={pokemon.id}>
       <h2 className="name">{pokemon.name}</h2>
       <h2>${pokemon.cost}</h2>
       <h2><img src={pokemon.sprites.default}></img></h2>
       <h2 className="text">{pokemon["flavor_text_entries"][0].text}</h2>
  </div>


    )
};

export default PokeCard
