import React from 'react'

const Display = props => {

    return (
        <div className="display">
            <div className="balls">
                <span>{props.balls}</span>
            </div>

            <div className="strikes">
                <span>{props.strikes}</span>
            </div>
        </div>
    )
}

export default Display