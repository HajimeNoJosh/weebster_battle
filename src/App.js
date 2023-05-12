import { characters } from './components/characters';
import GuessWhoBoard from './components/guess_who_board';
import { useEffect, useState } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    }
    window.addEventListener('scroll', handleScrollButtonVisibility)

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <GuessWhoBoard characters={characters} />
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
