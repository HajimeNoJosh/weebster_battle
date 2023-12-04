import { Fragment } from 'react';
import { Tooltip } from 'react-tooltip'

function Board({ characters, handleClick }) {

    return (
        <Fragment>
            <div className="board">
                {characters.length > 0 ? characters.map((character) => {
                    const animeTitle = character.media.nodes[0].title.english ?
                        character.media.nodes[0].title.english : character.media.nodes[0].title.romaji ?
                            character.media.nodes[0].title.romaji : character.media.nodes[0].title.native
                    return (
                        < div key={character.id} className="row" >
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={animeTitle} className={"character character-information character-" + character.id} onClick={() => handleClick(character)}>
                                <img className={character.id} src={character.image.large} alt={character.name.full} />
                                <p>{character.name.full}</p>
                            </div>

                        </div>
                    )
                }) :
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
            <Tooltip id="my-tooltip" />
        </Fragment >
    );
}

export default Board;