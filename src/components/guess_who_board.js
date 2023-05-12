import { useState } from 'react';

function GuessWhoBoard({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [confirmDone, setConfirmDone] = useState(false);

    const handleClick = (character) => {
        if (confirmDone === false) {
            setSelectedCharacter(character);
        } else {
            const characterName = document.getElementsByClassName(character.name);
            characterName[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png";
        }
    };

    return (
        <div>
            <h2>Guess Who Board</h2>
            {
                selectedCharacter && (
                    <div className="selected">
                        <h3>Selected Character</h3>
                        <div className="character">
                            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                            <p>{selectedCharacter.name}</p>
                        </div>
                        {selectedCharacter && !confirmDone ? <button onClick={() => setConfirmDone(true)}>Confirm</button> : <span></span>}
                    </div>
                )
            }
            <div className="board">
                {characters.map((character) => (
                    <div key={character.name} className="row">
                        <div className="character" onClick={() => handleClick(character)}>
                            <img className={character.name} src={character.image} alt={character.name} />
                            <p>{character.name}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
}



export default GuessWhoBoard;
