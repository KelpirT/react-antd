import {
  UserOutlined,
  BellFilled,
  PlusSquareFilled
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Menu, Tooltip } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout/HeaderPage.css'




const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);
const HeaderPage = () => {
  return (
 <div>
      <div></div>
      <div className="user-infor">
        <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
          <Button type="primary" shape="circle" className="bell-button" icon={<BellFilled className="bell" />} />
        </Dropdown>
        <Link to={'/account'}>
        <Avatar size={40} icon={<UserOutlined />} className="avatar" />
        </Link>
        <Link to={'/account'}>
        <div className="infor">
          <div className="infor-name">
            <h1 className="hello">Xin chào</h1>
            <h1 className="name">Nguyễn Văn A</h1>
          </div>
        </div>
        </Link>
      </div>
      </div>
  )
}
export default HeaderPage;