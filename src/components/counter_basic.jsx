import React, { Component } from "react";

class Counter extends Component {
  // State
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"],
  };

  // pengkondisian yang ada di react pada tag state
  renderTag() {
    if (this.state.tags.length === 0) return <p>Tidak ada tag</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }

  // Mengikat handleAdd() supaya bisa mengambil count pada state
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
  }

  // Tombol Button Tambah
  handleAdd() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      // React Fragment
      <React.Fragment>
        <div className="container">
          <h1 className="text-center">Basic</h1>
          {/* Rendering class dynamice */}
          <span className={this.DapatkanClassAngka()}>{this.formatCount()}</span>
          <br />
          <button onClick={this.handleAdd} className="btn btn-success me-3">
            Add
          </button>
          <button className="btn btn-danger">Delete</button>

          {/* Rendering List */}
          {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))} 
        </ul> */}

          {/* memanggil tag condition renderTag() */}
          {this.renderTag()}
        </div>
      </React.Fragment>
    );
  }

  // Otomatis dari Refactor
  DapatkanClassAngka() {
    let classes = "badge mb-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // pengkondisian saat angka = 0 maka ditulis zero sedangkan jika tidak maka ditampilkan angka tersebut
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
