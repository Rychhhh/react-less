import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./Navbar/NavBar";
import Forms from "./Forms/Forms";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    this.addButton = this.addButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  resetButton() {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  addButton(counter) {
    const counters = [...this.state.counters]; // mendefinisikan counters state local
    const index = counters.indexOf(counter); // mengambil id pada state local yang bernama counters
    counter[index] = { ...counter };
    counters[index].value++; // menambah value pada id pertama
    this.setState(counter); // memanggil id atau counter pada fungsi ke browser
  }

  deleteButton(counterId) {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  }

  render() {
    console.log("App - Render");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.resetButton} onAdd={this.addButton} onDelete={this.deleteButton} />
          <Forms />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
