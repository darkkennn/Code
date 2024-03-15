import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChanges = () => {
    const names = ['Sachin', 'Kevin', 'Goofballer'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  
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
 