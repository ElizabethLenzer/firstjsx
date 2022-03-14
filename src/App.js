import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class App extends Component {    
      render() {        
          return (            
              <h1 className="my-class">Coding Dojo</h1>,
              <h3 className="todo">Things I need to do</h3>,
              <ul>
                <li>Learn React</li>
                <li>Climb Mt Everest</li>
                <li>Run Marathon</li>
                <li>Walk the Dog</li>
              </ul>
          );    
      }
  }  

export default App;
