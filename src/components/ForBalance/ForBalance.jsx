import React from 'react';
import s from '../common/Content.module.css';
import StatusTableContainer from "../StatusTable/StatusTableContainer";
import UploadEmailsAnt from "../UploadForm/UploadForm";

const ForBalance = () => {
    return (
            <div className={s.rightBlock}>
                <div className={s.attention}>
                    Мы не принимаем брут аккаунты!
                    Загруженные аккаунты остаются с нами навечно.
                    Пароли будут сменены!
                    Залив происходит в течении 24 часов.
                </div>
                <StatusTableContainer/>
                <div className={s.recommendation}>
                    При заливе необходимо указать, на каком сайте были
                    использованы эти почты, дабы мы исключили его выдачи. <br/>
                    Это поможет нам предоставлять более качественный сервис и вам
                    не потерять свои аккаунты и сохранить конфиденциальность данных.
                </div>
                <div className={s.uploadContainer}>
                    <UploadEmailsAnt />
                </div>
            </div>
    )
};


export default ForBalance;