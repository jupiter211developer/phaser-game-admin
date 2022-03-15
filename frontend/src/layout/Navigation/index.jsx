import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  KeyOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation({ history }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = history.location.pathname.substring(1) || 'home'

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo">
          <h3 style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>Admin</h3>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
          <Menu.Item key="home" icon={<DashboardOutlined />}>
            <Link to="/" />
            Home Page
          </Menu.Item>
          <Menu.Item key="account" icon={<UserOutlined />}>
            <Link to="/account">Account</Link>
          </Menu.Item>
          <Menu.Item key="team" icon={<TeamOutlined />}>
            <Link to="/team">Team</Link>
          </Menu.Item>
          {/* <Menu.Item key="customer" icon={<CustomerServiceOutlined />}>
            <Link to="/customer">Customer</Link>
          </Menu.Item>
          <Menu.Item key="selectcustomer" icon={<UserOutlined />}>
            <Link to="/selectcustomer">Custom Select Customer</Link>
          </Menu.Item>
          <Menu.Item key="lead" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Lead
          </Menu.Item>
          <Menu.Item key="product" icon={<FileSyncOutlined />}>
            <Link to="/product" />
            Product
          </Menu.Item> */}
          <Menu.Item key="admin" icon={<KeyOutlined />}>
            <Link to="/admin" />
            Admins Management
          </Menu.Item>

          {/* <Menu.Item key="settings" icon={<SettingOutlined />}>
            <Link to="/settings" />
            Settings
          </Menu.Item> */}
        </Menu>
      </Sider>
    </>
  );
}
export default withRouter(Navigation);
