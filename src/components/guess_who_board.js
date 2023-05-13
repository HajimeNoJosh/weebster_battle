import { useState } from 'react';
import Button from './button';

function GuessWhoBoard({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [confirmDone, setConfirmDone] = useState(false);

    const handleClick = (character) => {
        if (confirmDone === false) {
            setSelectedCharacter(character);
        } else {
            const characterName = document.getElementsByClassName("character-" + character.id);
            if (character.flipped === false || character.flipped === undefined) {
                character.flipped = true
                characterName[0].classList.add("character-flipped");
            } else if (character.flipped === true) {
                character.flipped = false
                characterName[0].classList.remove("character-flipped");
            }
        }
    };

    return (
        <div className='page'>
            <h1>Weebster Battle</h1>
            {!selectedCharacter ? <h2>Please select your character!</h2> : !confirmDone ? <h2>Confirm your character and begin the game!</h2> : <h2>Have fun!</h2>}
            {
                selectedCharacter && (
                    <div className="selected">
                        <h3>Selected Character</h3>
                        <div className="character">
                            <img src={selectedCharacter.image.large} alt={selectedCharacter.name.full} />
                            <p>{selectedCharacter.name.full}</p>
                        </div>
                        {selectedCharacter && !confirmDone ? <Button onClick={() => setConfirmDone(true)}>Confirm</Button> : <span></span>}
                    </div>
                )
            }
            <div className="board">
                {characters.map((character) => (
                    <div key={character.id} className="row">
                        <div className={"character character-" + character.id} onClick={() => handleClick(character)}>
                            <img className={character.id} src={character.image.large} alt={character.name.full} />
                            <p>{character.name.full}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
}

export default GuessWhoBoard;
