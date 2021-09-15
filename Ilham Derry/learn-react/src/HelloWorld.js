import React from "react";
import { useState } from "react/cjs/react.development";

function HelloWorld () {
    let [name, setName] = useState(null)
    const [counter, setCounter] = useState(0)
    const counterUp = () => {
        setCounter(counter + 1)
    }

    const counterDown = () => {
        setCounter(counter - 1)
    }


    const handleClick = (e) => {
        setName((name = "isekai"))
    }


    return (
        <React.Fragment>
            <h3>{name}</h3>
            <button onClick={handleClick}>Click</button>
            <h2>counter: {counter}</h2>
            <button onClick= {counterUp}> + </button>

            {/* membuat button - menjadi disabled */}
            <button onClick= {counterDown} disabled={counter === 0}> - </button>

            {/* negasi pada state  */}
            {/* <button onClick= {this.counterDown} disabled={!this.state.counter}> - </button> */}
            
            {/* Membuat button - menjadi hilang */}
            {/* {(this.state.counter > 0) ?
                (<button onClick= {this.counterDown}> - </button>) :
                (<span>Count kurang dari 1</span>)
            } */}
        </React.Fragment>
    )
}

export default HelloWorld