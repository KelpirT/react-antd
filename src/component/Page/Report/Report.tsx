import {
    CaretDownOutlined,
    DownloadOutlined,
    CaretRightOutlined
    } from '@ant-design/icons';
    import { Form ,Button, Row, Col, Tag, Select, DatePicker } from 'antd';
    import { Typography } from 'antd';
    import React, { useEffect, useState } from 'react'
    import '../Report/Report.css'
    import Table, { ColumnsType } from 'antd/lib/table';
    const { Title } = Typography;
    
    
    const { Option } = Select;
    
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    
    interface DataType {
      key: string;
      stt:string;
      name_ser: string;
      time: string;
      status: string[];
      nsx: string;
    }
    
    const columns: ColumnsType<DataType> = [
      {
        title: 'Số thứ tự',
        dataIndex: 'stt',
        key: 'stt',
        
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
        title: 'Nguồn cấp',
        dataIndex: 'nsx',
        key: 'nsx',
      },
    
    ]
    
    const data: DataType[] = [
      {
        key: '1',
        stt:'2010001',
        name_ser: 'Khám tim mạch',
        time: '14:35 - 07/11/2022',
        status:['Đang chờ'],
        nsx: 'Kiosk',
      },
      {
        key: '2',
        stt:'2010002',

        name_ser: 'Khám sản - Phụ khoa',
        time: '14:35 - 07/11/2022',
        status:['Đã sử dụng'],
        nsx: 'Kiosk',
      },
      {
        key: '3',
        stt:'2010003',

        name_ser: 'Khám tim mạch',
        time: '14:35 - 07/11/2022',
        status:['Bỏ qua'],
        nsx: 'Kiosk',
      },
      {
        key: '4',
        stt:'2010004',

        name_ser: 'Khám sản - Phụ khoa',
        time: '14:35 - 07/11/2022',
        status:['Đã sử dụng'],
        nsx: 'Kiosk',
      },
      {
        key: '5',
        stt:'2010005',

        name_ser:'Khám mắt',
        time: '14:35 - 07/11/2022',
        status:['Đang chờ'],
        nsx: 'Kiosk',
      },
      {
        key: '6',
        stt:'2010006',

        name_ser: 'Khám sản - Phụ khoa',
        time: '14:35 - 07/11/2022',
        status:['Bỏ qua'],
        nsx: 'Kiosk',
      },
      {
        key: '7',
        stt:'2010007',

        name_ser: 'Khám tim mạch',
        time: '14:35 - 07/11/2022',
        status:['Đang chờ'],
        nsx: 'Kiosk',
      },
      {
        key: '8',
        stt:'2010008',

        name_ser: 'Khám sản - Phụ khoa',
        time: '14:35 - 07/11/2022',
        status:['Đã sử dụng'],
        nsx: 'Kiosk',
      },
      {
        key: '9',
        stt:'2010009',

        name_ser: 'Khám tim mạch',
        time: '14:35 - 07/11/2022',
        status:['Đang chờ'],
        nsx: 'Kiosk',
      },
      {
        key: '10',
        stt:'2010010',

        name_ser: 'Khám sản - Phụ khoa',
        time: '14:35 - 07/11/2022',
        status:['Đã sử dụng'],
        nsx: 'Kiosk',
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
    
    
    function Report() {
        return (
            <div>
              <Form layout="vertical">
                <Row  className='inputContainer'>
                  {/* <Col> */}
                    {/* <Space size={1}> */}
                          <Form.Item
                            label={<Typography.Text strong className="text-date">Chọn thời gian</Typography.Text>}
                              
                            >
                          <div className="date-pick3">
                              <Form.Item noStyle>
                              <DatePicker size="large" />
                              </Form.Item>
                              <CaretRightOutlined style={{color:"#FF7506"}}/>
                              <Form.Item noStyle>
                              <DatePicker size="large" />
                              </Form.Item>
                              </div>
                          </Form.Item>
                          <Col span={8} flex="100%">
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
                                    <Button
                                    type="primary"
                                    className="add"
                                    style={{marginTop:"20px",height:"4rem",width:"4rem", position:"absolute",right:"0",textAlign:"center",background:"#FFF2E7"}}
                                    >
                                      <DownloadOutlined  size={20}/><br />Tải về
                                    </Button>
                            </Col>
                            </Row>
            </div>
        );
    }
    export default Report;