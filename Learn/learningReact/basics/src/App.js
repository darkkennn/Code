import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Sachin';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}!
        </p>
      </header>
    </div>
  );
}

export default App;
