
import './App.css';
import Menu from "./components/MenuComponent"

function App () {
    return (
      <div className="App">
       <nav className="navbar-dark navbar-expand-lg bg-primary">
         <div className="container">
         <a className="navbar-brand" href="\">Ristorante Con Fusion</a>
         </div>
       </nav>
       <Menu/>
      </div>
    );
  }
  

export default App;
