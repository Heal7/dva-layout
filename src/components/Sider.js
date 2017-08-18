import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.css';
import logoSrc from '../assets/logo.png';
const SubMenu = Menu.SubMenu;

const SiderComponent = () => {
  return(
  <div className={styles.leftMenu}>
    <img src={logoSrc} width="50" className={styles.logo} />
    <Menu theme="dark" 
      defaultOpenKeys={['sub1', 'sub2']}
       defaultSelectedKeys={['5']}  
      mode="inline"
    >
      <SubMenu
        key="sub1"
        title={<span><Icon type="mail" /><span>导航一</span></span>}
      >
        <Menu.Item key="1"><Link to="/table">表格</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/form">表单</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/chart">图表</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/calendar">日历</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={<span><Icon type="team" /><span>导航二</span></span>}
      >
        <Menu.Item key="5"><Link to="/">问答</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/animate">关注</Link></Menu.Item>
      </SubMenu>
    </Menu>
  </div>
  )
}

export default SiderComponent;
