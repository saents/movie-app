import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, Menu, Typography } from "antd";
import Sider from "antd/es/layout/Sider.js";

import { useDispatch, useSelector } from "react-redux";

import { setIsSidebarOpen } from "../../store/reducers/sidebar.reducer.js";
import routesData, { SIDEBAR_DATA } from "../../constants/routesData.js";

import { UserOutlined } from "@ant-design/icons";
import s from './index.module.scss';

const {Paragraph} = Typography;

const CustomSidebar = () => {
    const {isSidebarOpen} = useSelector(state => state.sidebar);
    const dispatch = useDispatch();
    return (
        <Sider
            width={350}
            style={{zIndex: 900, backgroundColor: 'var(--tv-sidebar-background)'}}
            collapsible={true}
            collapsed={!isSidebarOpen}
            onMouseEnter={() => dispatch(setIsSidebarOpen(true))}
            onMouseLeave={() => dispatch(setIsSidebarOpen(false))}
            trigger={null}
        >
            <div>
                {isSidebarOpen &&
                    <div className={s.sidebar_userInformation}>
                        <Avatar size={60}
                                className={s.sidebar_userInformation_avatarIcon}
                                icon={<UserOutlined color={'#fff'}/>}
                        />
                        <p className={s.sidebar_userInformation_userName}>
                            Daniel
                        </p>
                    </div>
                }
                <Menu
                    theme="dark"
                    mode="vertical"
                    style={{
                        backgroundColor: 'var(--tv-sidebar-background)',
                        marginBottom: 50,
                        marginTop: !isSidebarOpen && 160
                    }}
                >
                    {routesData.map((item) =>
                        <Menu.Item
                            onClick={() => setIsSidebarOpen(false)}
                            style={{backgroundColor: window.location.pathname === item.url ? 'var(--tv-sidebar-active)' : 'var(--tv-sidebar-background)',}}
                            className={s.Menu_Item} key={item.text}
                            icon={<img style={{marginLeft: 7, marginTop: 6}} src={item.icon}/>}>
                            <Link className={s.sidebar_navigation_link} to={item.url}>{item.text}</Link>
                        </Menu.Item>
                    )}
                </Menu>
                    {
                        isSidebarOpen && <Menu theme="dark" mode="vertical" style={{
                            backgroundColor: 'var(--tv-sidebar-background)',
                        }}>
                            {SIDEBAR_DATA.map((item) =>
                                <Menu.Item danger={item === 'Exit' && true} key={item}>
                                    <Paragraph className={s.sidebar_settings_option} strong>
                                        {item}
                                    </Paragraph>
                                </Menu.Item>
                            )}
                        </Menu>
                    }
            </div>
        </Sider>
    );
};

export default CustomSidebar;