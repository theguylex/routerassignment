import React, { useState } from "react";
import { Component } from "react";



// Handle next button click
const HandleNext = (event) => {
  event.preventDefault();
};


// Handle prev button click
const HandlePrev = (event) => {
  event.preventDefault();
};

class FetchRandomUser extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }

  render() {
    var { items, loading } = this.state;

    if (!loading) {
      return <div>Loading...</div>;
    } else
      return (
        <section className="api-container">
          <section className="avi" key={items.id}>
            {items.map((item) => (
              <img src={item.picture.large} alt={item.name.first} />
            ))}
          </section>
          <div className="paginate">
            <button className="prev">Prev</button>
            <button className="next">Next</button>
          </div>
          {/* try to figure out how to fetch & display both image-name together */}
          {/* <div key={items.id}>{items.map(item =>(<h1>{item.name.first}</h1>))}</div> */}
        </section>
      );
  }
}

export default FetchRandomUser;
