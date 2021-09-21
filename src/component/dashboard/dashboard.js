import React from "react";
import './dashboard.css';
import {tileDashboardList} from './tilelist';

import Tile from "../application/tile/tile";

export default function DashboardBody(){
    return(
        <div className={'DashboardBody'}>
            {DashboardTile()}
        </div>
    )
}

function DashboardTile() {
    return tileDashboardList.map((data,key) => {
        if(data.active === 1) return <Tile title={data.tileName} notif={'15'} content={data.tileContent} area={data.area}/>
    })
}