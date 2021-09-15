import React from "react";
import ComponentC from "./ComponentC";

function ComponentA(props) {
  const {handleButttonClick } = props;
  return (
      <div>
        <ComponentC handleButttonClick = {handleButttonClick}/>
      </div>

  )
}

export default ComponentA