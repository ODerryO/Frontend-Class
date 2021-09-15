import React from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
    const {handleButttonClick } = props;
    return (
        <div>
          <ComponentD handleButttonClick = {handleButttonClick}/>
        </div>
    )
}
export default ComponentC