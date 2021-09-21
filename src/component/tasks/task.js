import React from "react";
import './task.css';

import TaskStructure from "./structure/structure";
import TaskGroup from "./group/taskgroup";

export default function BodyTask() {
    return(
        <div className={'BodyTask'}>
            <div className="BodyTaskHeader"></div>
            <TaskStructure/>
            <TaskGroup id={'ToDo'} name={'To Do'}/>
        </div>
    )
}