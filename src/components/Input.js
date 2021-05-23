import React from 'react';
export const Input=(props)=>{
    let placeholder=`Type ${props.title} Here`
    return(
        <>
           <label >{props.title}</label>
           <input value={props.val} onChange={props.change}  Type='text' placeholder={placeholder}/>
 
 
        </>

    );

}

