import React from "react";

function ComponentB (props) {
    const { counter, handleButttonClick} = props
    return (
        <div>
            Component B, count: {counter}
            <br/>
            <button onClick={handleButttonClick}>click</button>
        </div>
    )
}
export default ComponentB