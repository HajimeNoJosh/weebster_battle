import { useState } from 'react';
import SelectedCharacter from './selected_character';
import Board from './board';
import Subtitle from './subtitle';
import Title from './title';
import { Tooltip } from 'react-tooltip'

function GuessWhoBoard({ characters }) {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [confirmDone, setConfirmDone] = useState(false);

    const handleClick = (character) => {
        const characterName = document.getElementsByClassName("character-" + character.id);
        confirmDone ? characterName[0].classList.toggle("character-flipped") : setSelectedCharacter(character);
    };

    return (
        <div className='page'>
            <Title text={"Weebster Battle"} />
            <Subtitle selectedCharacter={selectedCharacter} confirmDone={confirmDone} />
            <SelectedCharacter selectedCharacter={selectedCharacter} confirmDone={confirmDone} setConfirmDone={setConfirmDone} />
            <Board characters={characters} handleClick={handleClick} />
            <Tooltip id="my-tooltip" />
        </div >
    );
}

export default GuessWhoBoard;
