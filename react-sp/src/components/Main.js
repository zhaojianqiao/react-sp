import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import Index from './Index'
import shopCat from './shopCat'
import purchasing from './purchasing'
import Detail from './Detail'
import {Menu, Icon} from 'antd'

const SubMenu = Menu.SubMenu

const Basic = () => (
    <Router>
      <div className="clear container-main">
        <div className="fl">
          <Menu
            style={{width: 240}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>操作</span></span>}>
              <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/shopCat">购物车</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/purchasing">购买记录</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>

        <Route exact path="/" component={Index}/>
        <Route path="/shopCat" component={shopCat}/>
        <Route path="/purchasing" component={purchasing}/>
        <Route path="/detail/:topicId" component={Detail} />
      </div>
    </Router>
)


export default connect()(Basic);
