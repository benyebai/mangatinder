import './App.css';
import nazuna from './img/Nazuna.jpg';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MANGA TINDER</h1>
        <Link to="/recommend" className="button">
          <button>START</button>
        </Link>
      </header>

      <img src={nazuna} width='1300' />

    </div>
  );
}

export default App;
