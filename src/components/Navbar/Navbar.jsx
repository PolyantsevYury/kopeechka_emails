import React from 'react';
import { Menu } from 'antd';
import { WalletOutlined, PercentageOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"


class Navbar extends React.Component {
    state = {
        current: 'forbalance',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu className={s.nav} onClick={this.handleClick} style={{ fontSize: 20}} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="forbalance" icon={<WalletOutlined style={{ fontSize: 20 }} />}>
                    <NavLink to="/forbalance">За баланс</NavLink>
                </Menu.Item>
                <Menu.Item key="forpercent" icon={<PercentageOutlined style={{ fontSize: 20 }} />}>
                    <NavLink to="/forpercent">За процент</NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navbar;