import React from 'react';
import './TurnPlayer.css'

const TurnPlayer = ({turn}) => {
    return (
        <div>
           {
               turn === 'X' ?<div className='player-x'> "Turn Player X"</div> : <div className='player-o'>"Turn player O"</div>
           }
        </div>
    );
};

export default TurnPlayer;