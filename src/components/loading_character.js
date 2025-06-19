function LoadingCharacter({ id }) {

    return (
        <div key={id} className="row">
            <div className={"character"}>
                <img src="gradient.gif" alt="filler" />
                <p>Characters Name</p>
            </div>
        </div>
    );
}

export default LoadingCharacter;