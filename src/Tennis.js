import React from "react";
import './Tennis.css';

function Tennis({association}) {
    return (
        <div className="Tennis">
            <h3>{association}</h3>
            <ol>
                <li>Player 1</li>
                <li>Player 2</li>
                <li>Player 3</li>
                <li>Player 4</li>
                <li>Player 5</li>
            </ol>
        </div>
    );
  }

export default Tennis; 