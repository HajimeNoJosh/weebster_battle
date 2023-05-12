import { useState } from 'react';

function GuessWhoBoard({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [confirmDone, setConfirmDone] = useState(false);

    const handleClick = (character) => {
        if (confirmDone === false) {
            setSelectedCharacter(character);
        } else {
            const characterName = document.getElementsByClassName(character.name);
            if (character.flipped === false) {
                characterName[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png";
                character.flipped = true
            } else {
                characterName[0].src = character.image;
                character.flipped = false
            }

        }
    };

    return (
        <div className='page'>
            <h2>Guess Who Board</h2>
            {
                selectedCharacter && (
                    <div className="selected">
                        <h3>Selected Character</h3>
                        <div className="character">
                            <img src={selectedCharacter.image.large} alt={selectedCharacter.name.full} />
                            <p>{selectedCharacter.name.full}</p>
                        </div>
                        {selectedCharacter && !confirmDone ? <button onClick={() => setConfirmDone(true)}>Confirm</button> : <span></span>}
                    </div>
                )
            }
            <div className="board">
                {characters.map((character) => (
                    <div key={character.id} className="row">
                        <div className="character" onClick={() => handleClick(character)}>
                            <img className={character.name.full} src={character.image.large} alt={character.name.full} />
                            <p>{character.name.full}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
}



export default GuessWhoBoard;
