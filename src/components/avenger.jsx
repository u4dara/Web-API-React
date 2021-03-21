import { render } from "@testing-library/react";
import React, { Component } from "react";

class Avenger extends Component {
    /*This is class component and also you can use function component
    every component should have render() */

    // state = {
    //     avengerID: 10000
    // };
    // isAvenger() {
    //     return this.state.avengerID > 1000 ? "He is avenger" : "Not an avenger";
    // }
    // render() {
    //     return ( //can use <div> or <React.Fragment>
    //         <React.Fragment> 
    //             <h1>Avenger Incoming.....</h1>
    //             <button className="btn btn-primary">Click Here {this.state.avengerID}</button>
    //             <p style={{color:"red", fontSize:"20px"}}>{this.isAvenger()}</p>
    //         </React.Fragment>
    //     );
    // }

  state = {
    likeCount: 0,
    movies: ["First Avenger", "Iron Man", "Endgame", "Infinity War"]
  };
  showMovies() {
    if(this.state.movies.length == 0)
    return <p>No movies available</p>;
    return this.state.movies.map((movie, index) => (<li key={index}>{movie}</li>))
  }
  likeAvenger = () => {
    this.setState({likeCount: this.state.likeCount + 1});
  }
  render() {
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="https://p1.hiclipart.com/preview/878/208/854/avengers-endgame-2019-avengers-logo-avengers-logo-png-clipart.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Avenger Name</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <ul>
            {this.showMovies()}
          </ul>
          <button className="btn btn-primary" onClick={this.likeAvenger}>Like <span className="badge bg-secondary">{this.state.likeCount}</span> </button>
        </div>
      </div>
    );
  }

}

export default Avenger;