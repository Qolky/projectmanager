import React from "react";
import './menu.css';

import MenuLogo from "./logo/logo";
import MenuPoint from "./point/point";

import {pageList} from "./pagesmenu";

export default function Menu() {
    return(
        <div className={'Menu'} id={'Menu'}>
            <div className={'MenuLogo'}>
                <MenuLogo text={'Logo'}/>
            </div>
            <div сlassName={'MenuOptions'}>
                {MenuPages()}
            </div>
        </div>
    )
}

function MenuPages() {
    return pageList.map((data, key) => {
        if(data.active === 1) return <MenuPoint icon={data.icon} text={data.menuName} page={data.page}/>
    })
}