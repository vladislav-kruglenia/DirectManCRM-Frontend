import React from 'react';
import style from './Nawbar.module.css'
import {NavLink} from "react-router-dom";


let NawBar = () => {
    return <div className={style.NawbarContainer}>
        <div>
            <NavLink to={'/admin'}>Admin Panel</NavLink>
        </div>
        <div>
            <NavLink to={'/project-creation'}>Project Creation</NavLink>
        </div>

    </div>
};

export default NawBar