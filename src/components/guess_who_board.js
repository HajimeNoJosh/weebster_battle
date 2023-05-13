import { useState } from 'react';
import Button from './button';

function GuessWhoBoard({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [confirmDone, setConfirmDone] = useState(false);

    const handleClick = (character) => {

        console.log(character.flipped)

        if (confirmDone === false) {
            setSelectedCharacter(character);
        } else {
            const characterName = document.getElementsByClassName(character.name.full);
            if (character.flipped === false || character.flipped === undefined) {
                character.flipped = true
                characterName[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png";
            } else if (character.flipped === true) {
                character.flipped = false
                characterName[0].src = character.image.large;
            }

        }
    };

    return (
        <div className='page'>
            <h1>Weebster Battle</h1>
            {!selectedCharacter ? <h2>Please select your character!</h2> : <h2>Confirm your character and begin the game!</h2>}
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
