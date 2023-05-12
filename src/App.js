import { characters } from './components/characters';
import GuessWhoBoard from './components/guess_who_board';
import './App.css';

function App() {

  return (
    <div className="App">
      <GuessWhoBoard characters={characters} />
    </div>
  );
}

export default App;
