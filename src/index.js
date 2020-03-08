import React, { Component, useState } from "react";
import { render } from "react-dom";

import { Counter } from "./counter";
import { List } from "./list";

const items = [
  {
    name: "Tracking ",
    link: "https://master.d1skuzk79uqu7w.amplifyapp.com/"
  },
  {
    name: "Todos ",
    link: "https://master.d3cslmw4si24vo.amplifyapp.com/"
  }
];

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Counter />
        <h3>Links</h3>
        <List items={items} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
