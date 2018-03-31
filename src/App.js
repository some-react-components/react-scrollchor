import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import logo from "./logo.svg";
import "./App.css";


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

const Lorem = () =>
    <div>
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
        <p>Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.</p>
        <p>Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit quis aute in elit magna ullamco in consequat ex proident.</p>
        <p>Dolore incididunt mollit fugiat pariatur cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo. Veniam voluptate cupidatat ex nisi do ullamco in quis elit.</p>
    </div>


function *circularIterator(arr) {
  let index = -1;
  const elements = Array.isArray(arr) ? arr.slice() : [];
  const length = elements.length;

  while (length) {
    index = (index + 1) % length;
    yield elements[index];
  }
}
