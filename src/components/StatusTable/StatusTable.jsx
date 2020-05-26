import React from 'react';
import s from "./StatusTable.module.css";
import {Table} from 'antd';
import 'antd/dist/antd.css';

const StatusTable = (status) => {
    const columns = [
        {
            title: 'Дата залива',
            dataIndex: 'uploadDate',
            sorter: (a, b) => a.key - b.key,
            defaultSortOrder: 'descend',
        },
        {
            title: 'Дата проверки',
            dataIndex: 'checkDate',
        },
        {
            title: 'Количество аккаунтов',
            children: [
                {
                    title: 'Загружено',
                    dataIndex: 'uploadedAccounts',
                },
                {
                    title: 'Активные',
                    dataIndex: 'activeAccounts'
                },
            ]
        },
        {
            title: 'Ваш комментарий',
            dataIndex: 'yourComment',
        },
        {
            title: 'Баланс',
            dataIndex: 'balance',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
        },
        {
            title: 'Комментарий поддержки',
            dataIndex: 'supportComment',
        },
    ];

    function timeConverter(UNIX_timestamp){
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    const decodeStatus = (statusNumber) => {
        switch (statusNumber) {
            case '0':
                return 'Ожидание проверки';
            case '1':
                return 'Принят, загружен';
            case '2':
                return 'Принят, чекается';
            case '-1':
                return 'Не принят';
            default:
                return 'ожидание проверки';
        }
    };

    const data = [];
    let statusData = status.status;
    if (Object.keys(statusData).length > 0) {
        for (let i = 0; i < Object.keys(statusData).length - 1; i++) {
            data.push({
                key: i,
                uploadDate: timeConverter(statusData[i].date_upload),
                checkDate: statusData[i].date_check,
                uploadedAccounts: statusData[i].count,
                activeAccounts: statusData[i].alive,
                yourComment: statusData[i].comment_user,
                balance: statusData[i].balance_up,
                status: decodeStatus(statusData[i].status),
                supportComment: statusData[i].comment_support,
            })
        }
    }

    return (
        <div className={s.table}>
            <Table size="middle" style={{backgroundColor: "white"}} scroll={{x: true}} columns={columns}
                   bordered={true} dataSource={data}/>
        </div>
    );
};

export default StatusTable;