import React from 'react'
import menuConfig from './../../config/menuConfig'
import {Link} from 'react-router-dom'
import './index.less'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  componentWillMount(){
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children){
        return (
          <SubMenu key={item.key} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}><Icon type="pie-chart" />{item.title}</Link>
        </Menu.Item> 
      )

    })
  }

  render() {
    return(
      <div>
        <div className="logo">
          <img src="assets/logo-ant.svg" alt="logo" />
          <h1>MS</h1>
        </div>
        <Menu
          mode="inline"
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      
      </div>
    );
  }
}