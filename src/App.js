
import './App.css';
import Questionbank from './Questionbank';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <div className='instruct'>
       <h3>Instructions of quiz</h3>
       <ul>
        <li>Only one Change to attempt one question</li>
        <li>Plus one for each Correct and minus one for each wrong</li>
        <li>All the best</li>
       </ul>
      </div>
      <Questionbank/>
    </div>
  );
}

export default App;
