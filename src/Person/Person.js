import React from 'react';


const person = (props) =>{
    return (
        <div>
    <p> {props.children}</p>
    <p>am {props.name} an awesome am {props.age} an fabuluos {Math.floor(Math.random() * 30)} stylish!</p>
    </div>
    )
}

export default person;
