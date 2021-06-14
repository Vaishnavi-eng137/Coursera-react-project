import "./App.css";
import React,{Component} from "react";
import { DISHES } from "./shared/dishes";
import Menu from "./components/MenuComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar-dark navbar-expand-lg bg-primary">
          <div className="container">
            <a className="navbar-brand" href="\">
              Ristorante Con Fusion
            </a>
          </div>
        </nav>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
