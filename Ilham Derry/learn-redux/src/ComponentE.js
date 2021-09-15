import React from "react";
import ComponentF from "./ComponentF";

function ComponentE(props) {
    const { counter} = props;
    return (
        <div>
            <ComponentF counter={counter}/>
        </div>
    )
}
export default ComponentE