
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Form , Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar } from 'antd';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import '../component/Account.css';
import Logo from '../component/Image/Logo.png';
import Dashboard from '../component/Image/icon/dashboard.png'
import Computer from '../component/Image/icon/computer.png'
import Layer from '../component/Image/icon/layer.png'
import Question from '../component/Image/icon/question.png'
import Report from '../component/Image/icon/report.png'
import Setting from '../component/Image/icon/setting.png'
import Logout from '../component/Image/icon/logout.png'
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;




interface Size {
    width: number;
    height: number ;
  }

function useWindowSize(){
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<Size>({
      width: 1,
      height: 1,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }





function Account() {
    const size = useWindowSize();
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Layout style={{ "height": "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{background:"white"}}>
              <div className="logo" />
              <img
                            className="logoalta"
                            src={Logo}
                            alt="Logo Alta"
                            style={{ width: "70%", height: "15%" }} 
                        />
              <Menu
                theme="light"
                mode="inline"
                // defaultSelectedKeys={['']}
                items={[
                  {
                    key: '1',
                    icon: <img src={Dashboard} style={{ width: "14%", height: "55%" }} />,
                    label: 'Dashboard',
                  },
                  {
                    key: '2',
                    icon: <img src={Computer} style={{ width: "14%", height: "55%" }} />,
                    label: 'Thiết bị',
                  },
                  {
                    key: '3',
                    icon: <img src={Question} style={{ width: "14%", height: "55%" }} />,
                    label: 'Dịch vụ',
                  },
                  {
                    key: '4',
                    icon: <img src={Layer} style={{ width: "14%", height: "55%" }} />,
                    label: 'Cấp số',
                  },
                  {
                    key: '5',
                    icon: <img src={Report} style={{ width: "14%", height: "55%" }} />,
                    label: 'Báo cáo',
                  },
                  {
                    key: '6',
                    icon: <img src={Setting} style={{ width: "14%", height: "55%" }} />,
                    label: 'Cài đặt hệ thống',
                  },
                ]}
              />

              <Button style={{ background :"#FFF2E7" }} className="button-logout" > 
                <img src={Logout} className="icon-logout" style={{ width: "14%", height: "55%" , float:'left'}} /> 
                  Đăng xuất
              </Button>
 
                
            </Sider>
                <Layout>
                    <Header style={{ "height": '13.5vh' ,background:'#EAEAEC', padding:10}}>
                      <div>

                      <h2 style={{ float:'right' }} className='title-n'>Nguyễn Văn A</h2>
                      <Avatar size="large" icon={<UserOutlined /> } className='title-avatar' style={{ float:'right' }}/>
                        
                      </div>
                      
                      <h2 style={{color:'#FF9138'}} className='title-name'> Thông tin cá nhân</h2>
                        

                    </Header>
                    <Content style={{ background :"#EAEAEC" }}>Content</Content>
                    <Footer style={{ background :"#EAEAEC" }}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
}
export default Account;