import React from "react";
import './tile.css';

export default function Tile({title, notif, content, area}){
    const areaStyle = {
        gridArea: area,
    }
    return(
        <div className={'AppTile'} style={areaStyle}>
            <div className="AppTileTitle">{title}</div>
            <div className="AppTitleNotif">{notif}</div>
            <div className="AppContent">{content}</div>
        </div>
    )
}