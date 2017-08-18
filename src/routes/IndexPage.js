import React, {Component} from 'react';
import styles from './IndexPage.css';
import { Layout, Menu, Icon } from 'antd';
import SiderComponent from '../components/Sider';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function IndexPage({children}) {
  return (
    <Layout style={{width:'100%',height: '100%'}}>
      <Sider>
        <SiderComponent />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 , borderBottom:'1px solid #ccc'}}>
          <Menu mode="horizontal" style={{float:'right'}}>
            <SubMenu  title={<span><Icon type="user"/>YangHJ</span>}>
              <Menu.Item key="setting:1">退出</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Content className={styles.rightBox}>
            {children || 'content'}
        </Content>
        <Footer className={styles.footer}>
            React Dva Demo ©2017 Created by YHJ
        </Footer>
      </Layout>
    </Layout>
  );
}

export default IndexPage;