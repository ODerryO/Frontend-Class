import React from "react";
import ComponentE from "./ComponentE";


function ComponentB(props) {
  const { counter} = props
    
  return (
      <React.Fragment>
          <div>
          </div>
          <ComponentE counter={counter}/>
      </React.Fragment>
  )
}

export default ComponentB