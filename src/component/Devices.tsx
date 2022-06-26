
import {
UserOutlined,
} from '@ant-design/icons';
import { Form , Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar, MenuProps, Tag, Select } from 'antd';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import '../component/Account.css';
import '../component/Devices.css';
import Logo from '../component/Image/Logo.png';
import Dashboard from '../component/Image/icon/dashboard.png'
import Computer from '../component/Image/icon/computer.png'
import Layer from '../component/Image/icon/layer.png'
import Question from '../component/Image/icon/question.png'
import Report from '../component/Image/icon/report.png'
import Setting from '../component/Image/icon/setting.png'
import Logout from '../component/Image/icon/logout.png'
import Table, { ColumnsType } from 'antd/lib/table';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
type MenuItem = Required<MenuProps>['items'][number];

const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
interface DataType {
  key: string;
  ma:string;
  name: string;
  address: string;
  status: string[];
  connect: string[];
  service: string;
  detail: string;
  update: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Mã thiết bị',
    dataIndex: 'ma',
    key: 'ma',
    
  },
  {
    title: 'Tên thiết bị',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Địa chỉ IP',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'status',
    key: 'status',
    render: (_, { status }) => (
      <>
        {status.map(status => {
          let color = status.length > 5 ? 'geekblue' : 'green';
          
          if (status === 'Ngưng hoạt động') {
            color = 'volcano';
          }
          if (status === 'Hoạt động') {
            color = 'green';
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: 'Trạng thái kết nối',
    dataIndex: 'connect',
    key: 'connect',
    render: (_, { connect }) => (
      <>
        {connect.map(connect => {
          let color = connect.length > 5 ? 'geekblue' : 'green';
          
          if (connect === 'Mất kết nối') {
            color = 'volcano';
          }
          if (connect === 'Kết nối') {
            color = 'green';
          }
          return (
            <Tag color={color} key={connect}>
              {connect.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Dịch vụ ứng dụng',
    dataIndex: 'service',
    key: 'service',
    render: text => <a>{text}</a>,
  },
  {
    title: '',
    dataIndex: 'detail',
    key: 'detail',
    render: text => <a>{text}</a>,
  },
  {
    title: '',
    dataIndex: 'update',
    key: 'update',
    render: text => <a>{text}</a>,
  },

]

const data: DataType[] = [
  {
    key: '1',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Ngưng hoạt động'],
    connect: ['Mất kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '2',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Mất kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '3',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Ngưng hoạt động'],
    connect: ['Mất kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '4',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Ngưng hoạt động'],
    connect: ['Mất kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '5',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Ngưng hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '6',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '7',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '8',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '9',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '10',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '11',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '12',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '13',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '14',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '15',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '16',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '17',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '18',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },
  {
    key: '19',
    ma: 'KIO_01',
    name: 'Kiosk',
    address: '192.168.1.10',
    status: ['Hoạt động'],
    connect: ['Kết nối'],
    service: 'Khám mắt, khám tim mạch',
    detail: 'Chi tiết',
    update: 'Cập nhật'
  },

];






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

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    theme?: 'light' | 'dark',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      theme,
    } as MenuItem;
  }



function Account() {
    const size = useWindowSize();
    const [collapsed, setCollapsed] = useState(false);
    

    const [current, setCurrent] = useState('1');



    const onClick: MenuProps['onClick'] = e => {
      setCurrent(e.key);
    };

    const items: MenuItem[] = [
      getItem('Dashboard', '1' ,<img src={Dashboard} style={{ width: "14%", height: "55%" }} />),
      getItem('Thiết bị', '2', <img src={Computer} style={{ width: "14%", height: "55%" }} />),
      getItem('Dịch vụ', '3' ,<img src={Question} style={{ width: "14%", height: "55%" }} />),
      getItem('Cấp số', '4', <img src={Layer} style={{ width: "14%", height: "55%" }} />),
      getItem('Báo cáo', '5' ,<img src={Report} style={{ width: "14%", height: "55%" }} />),
      getItem(
        'Cài đặt hệ thống',
        'sub1',
        <img src={Setting} style={{ width: "14%", height: "55%" }}/>,
        [getItem('Quản lý vai trò', '7'), getItem('Quản lý tài khoản', '8'), getItem('Nhật ký người dùng', '9')],
      ),
      
    ];
    
    
    
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
                onClick={onClick}
                // style={{ width: 256 }}
                defaultOpenKeys={['2']}
                selectedKeys={[current]}
                mode="vertical"
                theme="light"
                items={items}
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
                      <h2 style={{color:'black'}} className='title-name'> Thiết bị {'>'} Danh sách thiết bị</h2>
                        

                    </Header>
                    <Content style={{ background :"#EAEAEC" }} >
                      <h2 className='title-1' style={{color:'#FF9138'}}>Danh sách thiết bị</h2>
                      <div className='content-h'>
                        <Select defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
                          <Option value="all">Tất cả</Option>
                          <Option value="yes">Hoạt động</Option>
                          <Option value="no">Ngưng hoạt động</Option>
                        </Select>
                        <Select defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
                          <Option value="all">Tất cả</Option>
                          <Option value="yes">Kết nối</Option>
                          <Option value="no">Mất kết nối</Option>
                        </Select>
                        <Input placeholder="Nhập từ khóa" style={{ width: '10%' }}/>
                      </div>
                      <Table columns={columns} dataSource={data} style={{ width: '90%' }} className='table-content'/>;
                    </Content>
                    
                </Layout>
            </Layout>
        </div>
    );
}
export default Account;