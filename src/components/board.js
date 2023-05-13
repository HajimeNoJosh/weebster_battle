import { Fragment } from 'react';

function Board({ characters, handleClick }) {
    const rows = [];
    for (let i = 0; i < 24; i++) {
        rows.push(i);
    }
    return (
        <Fragment>
            <div className="board">
                {characters.length > 0 ? characters.map((character) => (
                    <div key={character.id} className="row">
                        <div className={"character character-" + character.id} onClick={() => handleClick(character)}>
                            <img className={character.id} src={character.image.large} alt={character.name.full} />
                            <p>{character.name.full}</p>
                        </div>
                    </div>
                )) :
                    rows.map((character) => (
                        <div key={character.id} className="row">
                            <div className={"character"}>
                                <img src="clouds.gif" alt="filler" />
                                <p>Characters Name</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment >
    );
}

export default Board;