import { characters } from './components/characters';
import GuessWhoBoard from './components/guess_who_board';
import "./sass/main.scss";

function App() {

  return (
    <div className="app">
      <GuessWhoBoard characters={characters} />
    </div>
  );
}

export default App;
