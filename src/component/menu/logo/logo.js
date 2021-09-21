import React from "react";
import './logo.css';

export default function MenuLogo({text}){
    return(
        <div className={'MenuLogo'}>
           <span className={'MenuLogoSpan'}>{text}</span>
        </div>
    )
}