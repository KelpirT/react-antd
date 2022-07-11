import {
  CaretDownOutlined,
  PlusSquareFilled,
  CaretRightOutlined
  } from '@ant-design/icons';
  import { Form , Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar, MenuProps, Tag, Select, Dropdown, Tooltip, DatePicker } from 'antd';
  import { Typography } from 'antd';
  import React, { useEffect, useState } from 'react'
  import '../component/GiveNumber.css'
  import Table, { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
  const { Title } = Typography;
  
  
  const { Option } = Select;
  
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  interface DataType {
    key: string;
    stt:string;
    name_cus: string;
    name_ser: string;
    time: string;
    hsd:string;
    status: string[];
    nsx: string;
    detail: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'name_cus',
      key: 'name_cus',
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'name_ser',
      key: 'name_ser',
    },
    {
      title: 'Thời gian cấp',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Hạn sử dụng',
      dataIndex: 'hsd',
      key: 'hsd',
    },
    {
      title: 'Nguồn cấp',
      dataIndex: 'nsx',
      key: 'nsx',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <>
          {status.map(status => {
            let color = status.length > 5 ? 'geekblue' : 'green';
            
            if (status === 'Bỏ qua') {
              color = 'volcano';
            }
            if (status === 'Đang chờ') {
              color = 'blue';
            }
            if (status === 'Đã sử dụng') {
              color = 'gray';
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
      title: '',
      dataIndex: 'detail',
      key: 'detail',
      render: (text) => <Link to={'/detailnumber'}>{text}</Link>
    },
  
  ]
  
  const data: DataType[] = [
    {
      key: '1',
      stt:'2010001',
      name_cus: 'Nguyễn Văn A',
      name_ser: 'Khám tim mạch',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đang chờ'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '2',
      stt:'2010002',
      name_cus: 'Nguyễn Văn B',
      name_ser: 'Khám sản - Phụ khoa',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đã sử dụng'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '3',
      stt:'2010003',
      name_cus: 'Nguyễn Văn C',
      name_ser: 'Khám tim mạch',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Bỏ qua'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '4',
      stt:'2010004',
      name_cus: 'Nguyễn Văn B',
      name_ser: 'Khám sản - Phụ khoa',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đã sử dụng'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '5',
      stt:'2010005',
      name_cus: 'Nguyễn Văn A',
      name_ser:'Khám mắt',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đang chờ'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '6',
      stt:'2010006',
      name_cus: 'Nguyễn Văn B',
      name_ser: 'Khám sản - Phụ khoa',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Bỏ qua'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '7',
      stt:'2010007',
      name_cus: 'Nguyễn Văn A',
      name_ser: 'Khám tim mạch',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đang chờ'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '8',
      stt:'2010008',
      name_cus: 'Nguyễn Văn B',
      name_ser: 'Khám sản - Phụ khoa',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đã sử dụng'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '9',
      stt:'2010009',
      name_cus: 'Nguyễn Văn A',
      name_ser: 'Khám tim mạch',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đang chờ'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
    },
    {
      key: '10',
      stt:'2010010',
      name_cus: 'Nguyễn Văn B',
      name_ser: 'Khám sản - Phụ khoa',
      time: '14:35 - 07/11/2022',
      hsd:  '14:35 - 21/11/2022',
      status:['Đã sử dụng'],
      nsx: 'Kiosk',
      detail: 'Chi tiết',
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
  
  
  function GiveNumber() {
      return (
          <div>
            <Row>
              <Col>
                <h2 className='title-1' style={{color:'#FF9138'}}>Quản lý cấp số</h2>
              </Col>
            </Row>
            <Form layout="vertical">
              <Row  className='inputContainer'>
                {/* <Col> */}
                  {/* <Space size={1}> */}

                  <Col span={3} flex="100%">
                    <Form.Item
                    label={<Typography.Text strong className="text1">Tên dịch vụ</Typography.Text>}
                    className='selectContianer2'
                    >      
                      <Select defaultValue="all" style={{ width: 200}} onChange={handleChange} className="select-1" size="large" suffixIcon={
                        <CaretDownOutlined
                          style={{ fontSize: "20px", color: "#FF7506" }}
                        />
                      }>
                              <Option value="all">Tất cả</Option>
                              <Option value="yes">Hoạt động</Option>
                              <Option value="no">Ngưng hoạt động</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={3} flex="100%">
                        <Form.Item
                        label={<Typography.Text strong className="text2">Tình trạng</Typography.Text>}
                        className='selectContianer'
                        >
                            <Select defaultValue="all" style={{ width: 200}} onChange={handleChange} className="select-2" size="large" suffixIcon={
                              <CaretDownOutlined
                                style={{ fontSize: "20px", color: "#FF7506" }}
                              />
                            }>
                              <Option value="all">Tất cả</Option>
                              <Option value="yes">Kết nối</Option>
                              <Option value="no">Mất kết nối</Option>
                            </Select>
                        </Form.Item>
                      </Col>
                      <Col span={3} flex="100%">
                        <Form.Item
                        label={<Typography.Text strong className="text3">Nguồn cấp</Typography.Text>}
                        className='selectContianer'
                        >
                            <Select defaultValue="all" style={{ width: 200}} onChange={handleChange} className="select-3" size="large" suffixIcon={
                              <CaretDownOutlined
                                style={{ fontSize: "20px", color: "#FF7506" }}
                              />
                            }>
                              <Option value="all">Tất cả</Option>
                              <Option value="yes">Kết nối</Option>
                              <Option value="no">Mất kết nối</Option>
                            </Select>
                        </Form.Item>
                        </Col>
                        <Col span={7} flex="100%">
                        <Form.Item
                          label={<Typography.Text strong className="text4">Chọn thời gian</Typography.Text>}
                            
                          >
                        <div className="date-pick2">
                            <Form.Item noStyle>
                            <DatePicker size="large" />
                            </Form.Item>
                            <CaretRightOutlined style={{color:"#FF7506"}}/>
                            <Form.Item noStyle>
                            <DatePicker size="large" />
                            </Form.Item>
                            </div>
                        </Form.Item>
                        </Col>
                        <Col span={8} flex="100%">
                    <Form.Item
                      label={<Typography.Text strong className="text5">Từ khóa</Typography.Text>}
                    >
                          <Input placeholder="Nhập từ khóa" style={{ width: '95%' }} className="select-5" size="large"/>
                    </Form.Item>
                    </Col>
                    {/* </Space> */}
                    {/* </Col> */}
                  
              </Row>
            </Form>
                        <Row>
                          <Col span={23} flex="100%">
                            <Table columns={columns} dataSource={data} style={{ width: '95%', height: '90%' }} className='table-content' size="large" pagination={{ pageSize: 9 }}/>;
                          </Col>
                          <Col span={1}>
                            <Link to={'/newnumber'}>
                                  <Button
                                  type="primary"
                                  className="add"
                                  style={{marginTop:"20px",height:"6rem",width:"4rem", position:"absolute",right:"0",textAlign:"center",background:"#FFF2E7",borderRadius:'10px'}}
                                  >
                                    <PlusSquareFilled  size={20}/><br />Cấp<br/>số mới
                                  </Button>
                            </Link>
                          </Col>
                          </Row>
          </div>
      );
  }
  export default GiveNumber;