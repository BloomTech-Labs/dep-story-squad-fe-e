import React, { Component } from 'react';
import { Layout, Menu, Button, Typography } from 'antd';

import { PlusCircleFilled } from '@ant-design/icons';

import '../../../styles/HomeScreen.less';

const { Content, Sider } = Layout;
const { Title } = Typography;

class HomeScreen extends Component {
  render() {
    return (
      <>
        <Layout className="container">
          <Sider className="sider">
            <div className="logo">
              <Title className="welcome" level={4}>
                Welcome Back
              </Title>
            </div>
            <Menu
              className="menu"
              mode="inline"
              defaultSelectedKeys={['dashboard']}
            >
              <Menu.Item key="dashboard">Dashboard</Menu.Item>
              <Menu.Item key="settings">Parent Settings</Menu.Item>
              <Menu.Item key="help">Help</Menu.Item>
              <Menu.Item key="logout">Log out</Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Title className="title" style={{ color: '#0267C1' }} level={1}>
              STORY SQUAD
            </Title>
            <Content className="content">
              <button>
                <h2>
                  <PlusCircleFilled />
                  Add a Child
                </h2>
              </button>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default HomeScreen;