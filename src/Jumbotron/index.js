import React from 'react'

const Jumbotron = () => {
    return(
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-3">The Clicky Memory Game</h1>
            <p className="lead">Click on a futurama picture</p>
            <hr className="my-2" />
            <p>Click a photo, but make sure you dont click the same one twice!</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
            </p>
        </div>
    </div>
    );
}

export default Jumbotron;