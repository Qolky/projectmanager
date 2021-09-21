import React from "react";
import './application.css';

export default function Application({component}){
    return(
        <div className={'Application'} id={'Application'}>
            {component}
        </div>
    )
}