import React, {useState, useEffect} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function PassingProps() {
    const [counter, setCounter] = useState(0);
    const handleButttonClick = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log('use effect ini akan jalan saat render dan update');
      });
    
    useEffect(() => {
        console.log('use effect ini hanya berjalan saat render pertama');
    }, []);
      
    useEffect(() => {
        const interval = setInterval(() => {
          console.log('contoh interval');
        }, 1000)
        return function cleanup() {
          console.log('cleanup; terjadi saat component akan unmount/hilang dari halaman web');
          clearInterval(interval);
        }
    }, []);
    
    useEffect(() => {
        console.log('use effect ini akan jalan saat pertama render dan terjadi update pada `counter`');
    }, [counter]);




    return (
        <React.Fragment>
            <div>
                Counter Patent: {counter}
                <button onClick= {handleButttonClick}> + </button>
            </div>
            <ComponentA counter={counter} handleButttonClick = {handleButttonClick}/>
            <ComponentB counter={counter} handleButttonClick = {handleButttonClick} />
        </React.Fragment>
    )
}

export default PassingProps