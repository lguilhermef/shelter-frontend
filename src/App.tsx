import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import { AddShelter } from './Views/AddShelter/AddShelter';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          Header
            <Link to={"/add-shelter"}>
              <button className="headerButton">Add Shlter</button>
            </Link>
        </header>
        Main Page
      </div>
      
      <Route path="/add-shelter" component={() => <AddShelter/>}/>
    </BrowserRouter>
  );
}

export default App;
