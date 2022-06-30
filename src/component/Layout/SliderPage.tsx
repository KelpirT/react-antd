import {
  MoreOutlined
  } from '@ant-design/icons';
    import {Button, Menu, MenuProps} from 'antd';
    import React, { useState } from 'react'
    import '../Account.css';
    import '../Devices.css';
    import Logo from '../Image/Logo.png';
    import Dashboard from '../Image/icon/dashboard.png'
    import Computer from '../Image/icon/computer.png'
    import Layer from '../Image/icon/layer.png';
    import Question from '../Image/icon/question.png';
    import Report from '../Image/icon/report.png';
    import Setting from '../Image/icon/setting.png';
    import Logout from '../Image/icon/logout.png'
    import { Link } from 'react-router-dom';


const SliderPage = () => {
    

    const items: MenuProps["items"] = [
        {
          label: (
            <>
              DashBoard
              <Link to="/dashboard" />
            </>
          ),
          key: "/dashboard",
          icon: <img src={Dashboard} style={{ width: "14%", height: "55%" }} />
        },
        {
          label: (
            <>
              Thiết bị
              <Link to="/devices" />
            </>
          ),
      
          key: "/devices",
          icon: <img src={Computer} style={{ width: "14%", height: "55%" }} />
        },
        {
          label: (
            <>
              Dịch Vụ
              <Link to="/services" />
            </>
          ),
          key: "/services",
          icon: <img src={Question} style={{ width: "14%", height: "55%" }} />
        },
        {
          label: (
            <>
              Cấp số
              <Link to="/givenumber" />
            </>
          ),
          key: "/givenumber",
          icon: <img src={Layer} style={{ width: "14%", height: "55%" }} />
        },
        {
          label: (
            <>
              Báo cáo
              <Link to="/report" />
            </>
          ),
          key: "/report",
          icon: <img src={Report} style={{ width: "14%", height: "55%" }} />
        },
        {
          label: "Cài đặt Hệ thống",
      
          key: "sub1",
          icon: <img src={Setting} style={{ width: "14%", height: "55%" }} />,
          //expandIcon: <MoreOutlined size={2} className="icon-ex"/>,
          children: [
            {
              label: (
                <>
                  Quản lý vai trò
                  <Link to="/setting/manage-roles" />
                </>
              ),
              key: "/setting/manage-roles",
            },
            {
              label: (
                <>
                  Quản lý tài khoản
                  <Link to="/setting/accounts" />
                </>
              ),
              key: "/setting/accounts",
            },
            {
              label: (
                <>
                  Nhật ký người dùng
                  <Link to="/setting/user-history" />
                </>
              ),
              key: "/setting/user-history",
            },
          ],
        },
      ];




    return (
        <div>
                <div className="logo" />
                <img
                    className="logoalta"
                    src={Logo}
                    alt="Logo Alta"
                    style={{ width: "70%", height: "15%" }} 
                />
                <Menu
                    mode="vertical"
                    theme="light"
                    items={items}
                />

                <Button style={{ background :"#FFF2E7" }} className="button-logout" > 
                    <img src={Logout} className="icon-logout" style={{ width: "14%", height: "55%" , float:'left'}} /> 
                    Đăng xuất
                </Button>
        </div>
    )
    }
export default SliderPage;