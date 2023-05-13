import { Fragment } from 'react';

function Subtitle({ selectedCharacter, confirmDone }) {
    return (
        <Fragment>
            {!selectedCharacter ? <h2>Please select your character!</h2> : !confirmDone ? <h2>Confirm your character and begin the game!</h2> : <h2>Have fun!</h2>}
        </Fragment >
    );
}

export default Subtitle;