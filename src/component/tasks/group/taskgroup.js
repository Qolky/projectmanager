import React from "react";
import './taskgroup.css';

import TaskPoint from "./point/taskpoint";

import {getData} from "../../../firebase";

export default function TaskGroup({id,name}){
    const count = 0;
    taskList();
    return(
        <div className={id}>
            <table className={id + 'Table'}>
                <thead>
                    <tr>
                        <th>#</th><th>{name} ({count})</th><th></th><th></th><th></th><th></th>
                    </tr>
                </thead>
                <tbody>
                    <TaskPoint/>
                </tbody>
            </table>
        </div>
    )
}

function taskList() {
    let tasks = getData('task');
    }