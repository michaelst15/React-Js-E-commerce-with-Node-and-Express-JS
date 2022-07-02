import React from "react";
// import styled from "styled-components";
import '../App.css';
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

function Card(){    

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = e => {
        e.preventDefault();               
        setIsFlipped(!isFlipped)
    }

    return(
        <div className="CardBlock">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="front">
                depan  
                <button onClick={handleClick}>dedede</button>
            </div>
            <div className="back">
                belakang
                <button onClick={handleClick}>iuhuhu</button>
            </div>
            </ReactCardFlip>   
        </div>
    )
}

export default Card;