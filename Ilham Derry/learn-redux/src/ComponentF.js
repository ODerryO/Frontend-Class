import React from "react";

function ComponentF(props) {
    const { counter} = props;
    return (
        <div>
            Component F, counter: {counter}
        </div>
    )
}
export default ComponentF