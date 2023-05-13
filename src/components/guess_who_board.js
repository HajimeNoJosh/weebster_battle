import { useState } from 'react';
import SelectedCharacter from './selected_character';
import Board from './board';
import Subtitle from './subtitle';
import Title from './title';

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
            <Title text={"Weebster Battle"} />
            <Subtitle selectedCharacter={selectedCharacter} confirmDone={confirmDone} />
            <SelectedCharacter selectedCharacter={selectedCharacter} confirmDone={confirmDone} setConfirmDone={setConfirmDone} />
            <Board characters={characters} handleClick={handleClick} />
        </div >
    );
}

export default GuessWhoBoard;
