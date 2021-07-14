import React from 'react';

function Card(props){
    return(
        <>
        <div className="shadow-lg px-3 h-75 py-4 text-white text-center my-3 mx-2 rounded-pill card" style={{backgroundColor : props.color, textShadow : '5px 5px 4px #000', opacity:'0.8'}}>
            <div className="d-flex flex-row justify-content-center">
            <p className="mt-2 me-1">{props.subHead}</p><h3>{props.head}</h3>
            </div>
            <div className="mb-3">
                <h1>{props.body}</h1>
            </div>
        </div>
        </>
    );
}

export default Card;