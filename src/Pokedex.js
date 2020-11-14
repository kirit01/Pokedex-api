import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
       
        <h1 style={this.props.isWinner ? { color: "green" } : { color: "Red" }}>
          {this.props.isWinner ? "Winner Hand" : "Looser Hand"}
        </h1>
        <div>Total experience :{this.props.exp}</div>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              Exp={p.base_experience}
              key={p.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
