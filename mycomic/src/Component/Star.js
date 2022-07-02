import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star(){
    return(
        <div>
            {[...Array(5)].map(star => {
                return <label><FaStar className='star mt-1'/></label>
            })}
        </div>
    )
}

export default Star;