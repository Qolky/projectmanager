import React from "react";
import './main.css';

import Application from "../../component/application/application";

//components import
import Menu from "../../component/menu/menu";
import Header from "../../component/header/header";

export default function Main() {
    return(
        <div className={'Page'}>
            <Menu/>
            <Header/>
            <Application/>
        </div>
    )
}