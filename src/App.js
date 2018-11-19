import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

var Home = () => {return <p>Home</p>};
var About = () => {return <p>About</p>};

class NoMatch extends Component {
    render()
    {
        return (<p>{this.props.match.params.url}</p>)
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./img/logo.jpg" className="App-logo" alt="logo" />
          <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/:url" component={NoMatch} />
              </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
