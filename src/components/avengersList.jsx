import React, { Component } from "react";
import Avenger from "./avenger"

class avengersList extends Component {
    state = {
        avengerNames: [
            { id: 1, likeCount: 5 },
            { id: 2, likeCount: 3 },
            { id: 3, likeCount: 7 }
        ]
    };
    render() {
        return <div className="container">
            <div className="row">
                {this.state.avengerNames.map((avenger) => (<div key={avenger.id} className="col">
                    <Avenger key={avenger.id} />
                </div>))}
            </div>
        </div>
    }
}

export default avengersList;