import React from 'react';
import s from "./TarifTable.module.css";
import { Table } from 'antd';
import 'antd/dist/antd.css';

const TarifTable = (domains) => {
    const columns = [
        {
            title: 'Сервис',
            dataIndex: 'service',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
        },
    ];

    const data = [];
    for (let i = 0; i < domains.domains.length; i++) {
        let cost = domains.domains[i].cost / 100 + 'р';
        data.push({
            key: i,
            service: domains.domains[i].domain,
            price: cost,
        });
    }

    const pagination = {
        current: 1,
        pageSize: 20,
    };

    return (
        <div className={s.table}>
            <Table title={() => 'Тарифы'} size="small" pagination={pagination}
                   style={{backgroundColor: "white", minWidth: 300, maxWidth: 500}} scroll={{x: true}}
                   columns={columns} bordered={true} dataSource={data}/>
        </div>
    );
};

export default TarifTable;