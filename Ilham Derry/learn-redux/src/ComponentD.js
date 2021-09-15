import React from "react";
function ComponentD (props) {
    const {handleButttonClick} = props
    return (
      <React.Fragment>
          <div>
              ComponentD:<button onClick= {handleButttonClick}> Button Component </button>
          </div>
      </React.Fragment>
    )
}
export default ComponentD