import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ClickFace from "./components/ClickFace/ClickFace";
import pokemon from "./pokemon.js";
import Container from "./components/Container/Container";

class App extends React.Component {
  state = { pokes: pokemon };

  //logic but no methods or reusable logic = state
  //once a class, needs to wrap what we are returning within a render method
  componentDidMount() {
    this.setState({ pokes: this.randomize(this.state.pokes) });
  }

  handleClick = id => {
    // this variable is so that it keeps it within this method, so it copies the state so we can mess with it (since State is the truth for the app)
    const dontMessWithState = this.state.pokes.map(item => {
      //compare if the id has been clicked,
    });

    //win/loss

    //this.setState(pokes: dontMess)
    //randomize()
  };

  randomize = () => {
    // // for each i
    // // k=random number
    // swap i and k
    // // create a temporary variable to hold i
    // temp=i
    // i=k
    // k=temp
  };

  reset = () => {};

  render() {
    //console.log(pokemon);
    return (
      <div className="App">
        <Container>
          {this.state.pokes.map(pokemon => (
            <ClickFace
              // removeFriend={this.removeFriend}
              id={pokemon.id}
              key={pokemon.id}
              // name={pokemon.name}
              image={pokemon.image}
              method={this.handleClick}
              // typing={pokemon.occupation}
              // location={pokemon.location}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
