import {
    CaretDownOutlined,
    PlusSquareFilled,
    CaretRightOutlined
    } from '@ant-design/icons';
    import { Form , Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar, MenuProps, Tag, Select, Dropdown, Tooltip, DatePicker } from 'antd';
    import { Typography } from 'antd';
    import React, { useEffect, useState } from 'react'
    import '../History/History.css'
    import Table, { ColumnsType } from 'antd/lib/table';
    const { Title } = Typography;
    
    
    const { Option } = Select;
    
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    
    interface DataType {
      key: string;
      username: string;
      timelog: string;
      ip: string;
      activity: string;
    }
    
    const columns: ColumnsType<DataType> = [
      {
        title: 'Tên đăng nhập',
        dataIndex: 'username',
        key: 'username',
        
      },
      {
        title: 'Thời gian tác động',
        dataIndex: 'timelog',
        key: 'timelog',
      },
      {
        title: 'IP thực hiện',
        dataIndex: 'ip',
        key: 'ip',
      },
      {
        title: 'Thao tác thực hiện',
        dataIndex: 'activity',
        key: 'activity',
      },
    
    ];
    const data: DataType[] = [
        {
            key: '1',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '2',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '3',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '4',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '5',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '6',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '7',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '8',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '9',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
        {
            key: '10',
            username: 'nguyenvvana@12',
            timelog: '01/01/2022 12:30:00',
            ip: '191,168.1.1',
            activity: 'Cập nhật thông tin dịch vụ DV_01',
        },
    ]
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
    
    
    function History() {
        return (
            <div>

              <Form layout="vertical">
                <Row  className='inputContainer'>
                  {/* <Col> */}
                    {/* <Space size={1}> */}
  
                    <Col span={7} flex="100%">
                    <Form.Item
                          label={<Typography.Text strong className="history-date">Chọn thời gian</Typography.Text>}
                            
                          >
                        <div className="date-pick-history">
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
                      <Col span={3} flex="100%">

                        </Col>
                        <Col span={3} flex="100%">

                          </Col>
                          <Col span={3} flex="100%">

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
                              <Table columns={columns} dataSource={data} style={{ width: '95%', height: '90%' }} className='table-content' size="large" pagination={{ pageSize: 10 }}/>;
                            </Col>
                            <Col span={1}>
                                    {/* <Button
                                    type="primary"
                                    className="add"
                                    style={{marginTop:"20px",height:"6rem",width:"4rem", position:"absolute",right:"0",textAlign:"center",background:"#FFF2E7"}}
                                    >
                                      <PlusSquareFilled  size={20}/><br />Thêm<br/>vai trò
                                    </Button> */}
                            </Col>
                            </Row>
            </div>
        );
    }
    export default History;