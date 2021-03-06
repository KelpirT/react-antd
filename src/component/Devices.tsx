import {
CaretDownOutlined,
PlusSquareFilled
} from '@ant-design/icons';
import { Form , Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar, MenuProps, Tag, Select, Dropdown, Tooltip } from 'antd';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import '../component/Devices.css';
import Table, { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
const { Title } = Typography;


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
    render: (text) => <Link to={'/managedevice'}>{text}</Link>

  },
  {
    title: '',
    dataIndex: 'update',
    key: 'update',
    render: (text) => <Link to={'/updatedevice'}>{text}</Link>
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


function Devices() {
    return (
        <div>
          <Row>
            <Col>
              <h2 className='title-1' style={{color:'#FF9138'}}>Danh sách thiết bị</h2>
            </Col>
          </Row>
          <Form layout="vertical">
            <Row justify="space-between" className='inputContainer'>
              <Col>
                <Space size={24}>
                  <Form.Item
                  label={<Typography.Text strong className="text-1">Trạng thái hoạt động</Typography.Text>}
                  className='selectContianer'
                  >      
                    <Select defaultValue="all" style={{ width: 300}} onChange={handleChange} className="first-select" size="large" suffixIcon={
                      <CaretDownOutlined
                        style={{ fontSize: "20px", color: "#FF7506" }}
                      />
                    }>
                            <Option value="all">Tất cả</Option>
                            <Option value="yes">Hoạt động</Option>
                            <Option value="no">Ngưng hoạt động</Option>
                          </Select>
                      </Form.Item>
                      <Form.Item
                      label={<Typography.Text strong className="text-2">Trạng thái kết nối</Typography.Text>}
                      className='selectContianer'
                      >
                          <Select defaultValue="all" style={{ width: 300}} onChange={handleChange} className="second-select" size="large" suffixIcon={
                            <CaretDownOutlined
                              style={{ fontSize: "20px", color: "#FF7506" }}
                            />
                          }>
                            <Option value="all">Tất cả</Option>
                            <Option value="yes">Kết nối</Option>
                            <Option value="no">Mất kết nối</Option>
                          </Select>
                      </Form.Item>
                  </Space>
                </Col>
                <Col flex="450px">
                  <Form.Item
                    label={<Typography.Text strong className="text-3">Từ khóa</Typography.Text>}
                  >
                        <Input placeholder="Nhập từ khóa" style={{ width: '95%' }} className="thirst-select" size="large"/>
                  </Form.Item>
                </Col>
              
            </Row>
          </Form>
                      <Row>
                        <Col span={23} flex="100%">
                          <Table columns={columns} dataSource={data} style={{ width: '95%', height: '90%' }} className='table-content' size="large" pagination={{ pageSize: 9 }}/>;
                        </Col>
                        <Col span={1}>
                          <Link to="/adddevice">
                                <Button
                                type="primary"
                                className="add"
                                style={{marginTop:"20px",height:"6rem",width:"4rem", position:"absolute",right:"0",textAlign:"center",background:"#FFF2E7"}}
                                >
                                  <PlusSquareFilled  size={20}/><br />Thêm<br/>thiết bị
                                </Button>
                          </Link>
                        </Col>
                        </Row>
        </div>
    );
}
export default Devices;