import { Fragment } from 'react';
import Button from './button';

function SelectedCharacter({ selectedCharacter, confirmDone, setConfirmDone }) {
    return (
        <Fragment>
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
        </Fragment >
    );
}

export default SelectedCharacter;