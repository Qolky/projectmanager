import React from "react";
import './point.css';

import * as ReactDOM from "react-dom";
import {pageList} from "../pagesmenu";

export default function MenuPoint({icon, text, page}){
    MenuCondition(localStorage.getItem('cuPage'))
    return(
        <div className={'MenuPoint'} id={'MenuPoint' + text} onClick={() => ChangePage()}>
            <img className={'MenuPointIcon'} src={icon} alt={text}/>
            <span className={"MenuPointText"}>{text}</span>
            <div className={'MenuPointSelect'} id={'MenuPointSelect' + text}></div>
        </div>
    )
    function ChangePage(){
        let SelectedNum = document.getElementsByClassName('Selected');
        while (SelectedNum.length) SelectedNum[0].classList.remove('Selected');

        document.getElementById('MenuPoint' + text).classList.add('Selected');
        document.getElementById('MenuPointSelect' + text).classList.add('Selected');

        localStorage.setItem('cuPage', text);

        ReactDOM.render(page, document.getElementById('Application'));
    }
}

function MenuCondition(cuPage){
    document.addEventListener("DOMContentLoaded", function(event) {
        if (document.getElementById('MenuPoint' + cuPage)) document.getElementById('MenuPoint' + cuPage).classList.add('Selected');
        if (document.getElementById('MenuPointSelect' + cuPage)) document.getElementById('MenuPointSelect' + cuPage).classList.add('Selected');

        return pageList.map((data, key) => {
            if (data.menuName === cuPage) {
                return ReactDOM.render(data.page, document.getElementById('Application'));
            }
        })
    })
}

