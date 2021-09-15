import React from "react";

function ComponentA(props) {
    const { counter, handleButttonClick } = props;
    return (
        <div>
            Component A, count: {counter}
            <br/>
            <button onClick={handleButttonClick}> click</button>
        </div>
    )
}
export default ComponentA