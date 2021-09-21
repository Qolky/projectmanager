import React from "react";
import './structure.css';

export default function TaskStructure() {
    return(
        <div className={'TaskStructure'}>
            <table className={'TaskStructureTable'}>
                <thead>
                    <tr>
                        <th>#</th><th>Task</th><th>Tags</th><th>Hours</th><th>Assignee</th><th>Due Date</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}