import React from 'react';
import s from "./MyTable.module.css";
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Сервис',
        dataIndex: 'service',
    },
    {
        title: 'Сайт',
        dataIndex: 'site',
    },
    {
        title: 'SMS',
        dataIndex: 'sms',
    },
    {
        title: 'Статус',
        dataIndex: 'status',
    },
    {
        title: 'Стоимость',
        dataIndex: 'price',
    },
    {
        title: 'Номер',
        dataIndex: 'number',
    },
    {
        title: 'Страна',
        dataIndex: 'country',
    },
];

const data = [
    {
        key: '1',
        id: '50cq32523r23dff',
        service: "5sim",
        site: "vk",
        sms: "смс",
        status: "Отправлено",
        price: "2р",
        number: "+78005553535",
        country: "Россия",
    },
    {
        key: '2',
        id: '50cq32523r23dff',
        service: "5sim",
        site: "vk",
        sms: "смс",
        status: "Отправлено",
        price: "2р",
        number: "+78005553535",
        country: "Россия",
    },
    {
        key: '3',
        id: '50cq32523r23dff',
        service: "5sim",
        site: "vk",
        sms: "смс",
        status: "Отправлено",
        price: "2р",
        number: "+78005553535",
        country: "Россия",
    },
];

class MyTable extends React.Component {
    render() {
        return (
                <div className={s.table}>
                    <Table size="middle" style={{backgroundColor: "white"}} scroll={{x: true}} columns={columns} bordered={true} dataSource={data}/>
                </div>
        );
    }
}

export default MyTable;