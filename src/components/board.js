import LoadingCharacter from './loading_character';
import Character from './character';

function Board({ characters, handleClick }) {
    const arrayList = [...Array(24).keys()]
    const characterMap = characters.map((character) => (<Character character={character} handleClick={handleClick} />))
    const loadingCharacterMap = arrayList.map((id) => (<LoadingCharacter id={id} />))

    return (
        <div key="board" className="board">
            {characters.length > 0 ? characterMap : loadingCharacterMap}
        </div>
    );
}

export default Board;