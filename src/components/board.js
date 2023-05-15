import { Fragment } from 'react';

function Board({ characters, handleClick }) {
    return (
        <Fragment>
            <div className="board">
                {characters.length > 0 ? characters.map((character) => (
                    <div key={character.id} className="row">
                        <div className={"character character-information character-" + character.id} onClick={() => handleClick(character)}>
                            <img className={character.id} src={character.image.large} alt={character.name.full} />
                            <p>{character.name.full}</p>
                        </div>
                    </div>
                )) :
                    [...Array(24).keys()].map((id) => (
                        <div key={id} className="row">
                            <div className={"character"}>
                                <img src="gradient.gif" alt="filler" />
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