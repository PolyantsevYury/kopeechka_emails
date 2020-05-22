import preloader from "../../../images/loader3.svg";
import React from "react";
import s from './Preloader.module.css';

let Preloader = () => {
    return <div className={s.container}>
        <img src={preloader} />
    </div>
};

export default Preloader;