import iconDashboard from './img/dashboard.svg';
import iconDashboardSelected from './img/dashboard_selected.svg'
import iconProject from './img/project.svg';
import iconProjectSelected from './img/project_selected.svg';
import iconTask from './img/task.svg';
import iconTaskSelected from './img/task_selected.svg';

import BodyDashboard from '../dashboard/dashboard';
import BodyProject from "../projects/project";
import BodyTask from "../tasks/task";



export const pageList = [
    {
        page: <BodyDashboard/>,
        menuName: 'DASHBOARD',
        icon: iconDashboard,
        iconSelected: iconDashboardSelected,
        active: 1,
    },
    {
        page: <BodyProject/>,
        menuName: 'PROJECTS',
        icon: iconProject,
        iconSelected: iconProjectSelected,
        active: 1,
    },
    {
        page: <BodyTask/>,
        menuName: 'TASKS',
        icon: iconTask,
        iconSelected: iconTaskSelected,
        active: 1,
    },
    {
        page: 'reports',
        menuName: 'REPORTS',
        icon: iconTask,
        iconSelected: iconTaskSelected,
        active: 1,
    },
    {
        page: 'incidents',
        menuName: 'INCIDENTS',
        icon: iconTask,
        iconSelected: iconTaskSelected,
        active: 1,
    },
];