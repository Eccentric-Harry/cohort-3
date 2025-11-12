import React from 'react';

function Button(props){
    function incrementCounter(){
        props.setCount(props.count + 1);
    }
    return(
        <button onClick={incrementCounter}>Count: {props.count}</button>
    )
}

export default Button;