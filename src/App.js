// import { characters } from './components/characters';
import GuessWhoBoard from './components/guess_who_board';
import { useEffect, useState } from 'react';
import { APICall } from "./services/api.js";

function App() {
  const [showButton, setShowButton] = useState(false)
  const [stateObj, setStateObj] = useState({ stateStatus: "initial", characters: [] })

  useEffect(() => {
    if (stateObj.stateStatus === "initial") {
      APICall(setStateObj);
      setStateObj((prevState) => ({
        ...prevState,
        stateStatus: 'finished_fetching_characters',
      }));
    }
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    }
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility)
    }
  }, [stateObj.stateStatus])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {stateObj.characters.length > 0 ? <GuessWhoBoard characters={stateObj.characters} /> : <div>loading...</div>}
      {showButton && (
        <div className='scrollToTop'>
          <button className='p-4' onClick={handleScrollToTop}
          >
            <img src="up-arrow.svg" alt="scollToTop" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
