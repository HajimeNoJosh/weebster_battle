
import { Fragment } from 'react';

function Board({ characters, handleClick }) {
    return (
        <Fragment>
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
        </Fragment >
    );
}

export default Board;