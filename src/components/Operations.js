import React from'react';
export const Operations=(props)=>{
    return(
        <button className={props.cssClass} onClick={props.click}>{props.title}</button>
    )
}