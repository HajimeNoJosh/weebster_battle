function Character({ character, handleClick }) {
    const animeTitle = character.media.nodes[0].title.english ?
        character.media.nodes[0].title.english : character.media.nodes[0].title.romaji ?
            character.media.nodes[0].title.romaji : character.media.nodes[0].title.native

    return (
        <div key={character.id} className="row" >
            <div data-tooltip-id="my-tooltip" data-tooltip-content={animeTitle} className={"character character-information character-" + character.id} onClick={() => handleClick(character)}>
                <img className={character.id} src={character.image.large} alt={character.name.full} />
                <p>{character.name.full}</p>
            </div>
        </div>
    );
}

export default Character;
