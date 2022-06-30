import {
    CaretDownOutlined,
    PlusSquareFilled,
    CaretRightOutlined
    } from '@ant-design/icons';
    import { Form , Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar, MenuProps, Tag, Select, Dropdown, Tooltip, DatePicker } from 'antd';
    import { Typography } from 'antd';
    import React, { useEffect, useState } from 'react'
    import '../ManageRole/Role.css'
    import Table, { ColumnsType } from 'antd/lib/table';
    const { Title } = Typography;
    
    
    const { Option } = Select;
    
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    
    interface DataType {
      key: string;
      name_job: string;
      number_job: number;
      detail: string;
      update: string;
    }
    
    const columns: ColumnsType<DataType> = [
      {
        title: 'Tên vai trò',
        dataIndex: 'name_job',
        key: 'name_job',
        
      },
      {
        title: 'Số người dùng',
        dataIndex: 'number_job',
        key: 'number_job',
      },
      {
        title: 'Mô tả',
        dataIndex: 'detail',
        key: 'detail',
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
        name_job: 'Kế toán',
        number_job: 6,
        detail: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
        update: 'Cập nhật',
      },
      {
        key: '2',
        name_job: 'Bác sĩ',
        number_job: 6,
        detail: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
        update: 'Cập nhật',
      },
      {
        key: '3',
        name_job: 'Lễ tân',
        number_job: 6,
        detail: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
        update: 'Cập nhật',
      },
      {
        key: '4',
        name_job: 'Quản lý',
        number_job: 6,
        detail: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
        update: 'Cập nhật',
      },
      {
        key: '5',
        name_job: 'Admin',
        number_job: 6,
        detail: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
        update: 'Cập nhật',
      },
      {
        key: '6',
        name_job: 'Superadmin',
        number_job: 6,
        detail: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
        update: 'Cập nhật',
      }
    
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
    
    
    function ManageRole() {
        return (
            <div>
              <Row>
                <Col>
                  <h2 className='title-1' style={{color:'#FF9138'}}>Danh sách vai trò</h2>
                </Col>
              </Row>
              <Form layout="vertical">
                <Row  className='inputContainer'>
                  {/* <Col> */}
                    {/* <Space size={1}> */}
  
                    <Col span={3} flex="100%">
                      </Col>
                      <Col span={3} flex="100%">

                        </Col>
                        <Col span={3} flex="100%">

                          </Col>
                          <Col span={7} flex="100%">

                          </Col>
                          <Col span={8} flex="100%">
                      <Form.Item
                        label={<Typography.Text strong className="text-search">Từ khóa</Typography.Text>}
                      >
                            <Input placeholder="Nhập từ khóa" style={{ width: '80%' }} className="search-box" size="large"/>
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
                                    <Button
                                    type="primary"
                                    className="add"
                                    style={{marginTop:"20px",height:"6rem",width:"4rem", position:"absolute",right:"0",textAlign:"center",background:"#FFF2E7"}}
                                    >
                                      <PlusSquareFilled  size={20}/><br />Thêm<br/>vai trò
                                    </Button>
                            </Col>
                            </Row>
            </div>
        );
    }
    export default ManageRole;