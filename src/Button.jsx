import React from "react";

const Button = (props) =>{
    return <button onClick={props.callApi}>
        Click here to generate joke
    </button>;
}

export default Button;
