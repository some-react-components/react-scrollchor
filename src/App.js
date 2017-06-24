import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lorem from "react-lorem-component";
import Scrollchor from "react-scrollchor";
import circularIterator from "circular-iterator";

class Sequentially extends Component {
  constructor(props) {
    super(props);
    this._iterator = circularIterator(["one", "two", "three"]);
    this.state = { to: this._iterator.next().value };
  }

  _afterAnimate = () => {
    this.setState({ to: this._iterator.next().value });
    setTimeout(() => this._back.simulateClick(), 1000);
  };

  render() {
    const { children, top, ...props } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div>
        <Scrollchor ref={ref => (this._back = ref)} to="_back" />
        <Scrollchor
          id="_back"
          {...props}
          to={this.state.to}
          afterAnimate={this._afterAnimate}
        >
          {children(this.state.to)}
        </Scrollchor>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div id="page-wrap">

          <h1 id="top">
            Smooth Page Scrolling with<strong id="scroll-chor">
              Scrollchor
            </strong>
          </h1>

          <ul>
            <li><Scrollchor to="#two">Scroll to Section Two</Scrollchor></li>
            <li><Scrollchor to="three">Scroll to Section Three</Scrollchor></li>
            <li>
              <Sequentially>
                {to =>
                  <span>
                    Scroll sequentially to Section{" "}
                    <strong style={{ color: "red" }}>{to}</strong> and comeback
                  </span>}
              </Sequentially>
            </li>
          </ul>

          <h1 id="one">Section One</h1>
          <Lorem />

          <h1 id="two">Section Two</h1>
          <p><Scrollchor to="#top">Top</Scrollchor></p>
          <Lorem />

          <h1 id="three">Section Three</h1>
          <p><Scrollchor to="">Home</Scrollchor></p>
          <Lorem />
        </div>
      </div>
    );
  }
}

export default App;
