import {
    CaretDownOutlined,
    PlusSquareFilled,
    CaretRightOutlined
} from '@ant-design/icons';
import { Form, Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar, MenuProps, Tag, Select, Dropdown, DatePicker, Card } from 'antd';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import '../DetailService/DetailService.css'
import Table, { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
const { Title } = Typography;


const { Option } = Select;

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

interface DataType {
    key: string;
    ma: string;
    status: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Mã thiết bị',
        dataIndex: 'ma',
        key: 'ma',

    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'status',
        key: 'status',
        render: (_, { status }) => (
            <>
                {status.map(status => {
                    let color = status.length > 5 ? 'geekblue' : 'green';

                    if (status === 'Đang thực hiện') {
                        color = 'geekblue';
                    }
                    if (status === 'Đã hoàn thành') {
                        color = 'green';
                    }
                    if (status === 'Vắng') {
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
]

const data: DataType[] = [
    {
        key: '1',
        ma: 'KIO_01',
        status: ['Ngưng hoạt động'],
    },
    {
        key: '2',
        ma: 'KIO_01',
        status: ['Hoạt động'],
    },
    {
        key: '3',
        ma: 'KIO_01',
        status: ['Ngưng hoạt động'],
    },
    {
        key: '4',
        ma: 'KIO_01',
        status: ['Vắng'],
    },
    {
        key: '5',
        ma: 'KIO_01',
        status: ['Ngưng hoạt động'],

    },
    {
        key: '6',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '7',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '8',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '9',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '10',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '11',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '12',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '13',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '14',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '15',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '16',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '17',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '18',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },
    {
        key: '19',
        ma: 'KIO_01',
        status: ['Hoạt động'],

    },

];
interface Size {
    width: number;
    height: number;
}

function useWindowSize() {
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


function DetailService() {
    return (
        <div>
            <Row>
                <Col>
                    <h2 className='title-1' style={{ color: '#FF9138' }}>Quản lý dịch vụ</h2>
                </Col>
            </Row>
            <Row>
                <Col span={9} flex="100%">
                    <Card className='card-service-right' style={{ width: '90%', marginLeft: '30px' , height: '100%' }}>
                        <Row style={{ height: '100%' }}>
                            <div className="update-device-title">
                                Thông tin dịch vụ
                            </div>
                        </Row>
                        <Form style={{ height: '50%', marginTop: '-15px' }}>
                            <Row>
                                <Form style={{ marginLeft: '55px' }}>
                                    <Form.Item>

                                        <Row gutter={8}>
                                            <Col>
                                                <div style={{ marginLeft: '-45px', fontWeight: '500', fontSize: '15px' }}>Mã dịch vụ:</div>
                                            </Col>
                                            <Col >
                                                <div style={{ marginLeft: '20px', fontSize: '15px' }}>201</div>
                                            </Col>
                                        </Row>

                                    </Form.Item>
                                    <Form.Item>
                                        <Row gutter={8}>
                                            <Col >
                                                <div style={{ marginLeft: '-45px', fontWeight: '500', fontSize: '15px' }}>Tên dịch vụ:</div>
                                            </Col>
                                            <Col >
                                                <div style={{ marginLeft: '20px', fontSize: '15px' }}>Khám tim mạch</div>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item>

                                        <Row gutter={8}>
                                            <Col>
                                                <div style={{ marginLeft: '-45px', fontWeight: '500', fontSize: '15px' }}>Mô tả:</div>
                                            </Col>
                                            <Col>
                                                <div style={{ marginLeft: '55px', fontSize: '15px', marginBottom: '40px' }}>Chuyên về các bệnh tim</div>
                                            </Col>
                                        </Row>

                                    </Form.Item>
                                </Form>
                            </Row>

                            <Row>
                                <div className="update-device-title" style={{ marginTop: '-30px' }}>
                                    Quy tắc cấp số
                                </div>
                            </Row>
                            <Row>
                                <Form>
                                    <Form.Item>

                                        <Input.Group style={{ height: '0', marginTop: '-10px' }}>
                                            <Row gutter={8}>
                                                <Col span={12}>
                                                    <div style={{ fontWeight: '500', fontSize: '15px' }}>Tăng tự động từ:</div>
                                                </Col>
                                                <Col span={4}>
                                                    <Input style={{ borderRadius: '5px', width: '55px', height: '40px' }} defaultValue="0001" />
                                                </Col>
                                                <Col span={5}>
                                                    <div>đến</div>
                                                </Col>
                                                <Col span={1}>
                                                    <Input style={{ borderRadius: '5px', width: '55px', height: '40px' }} defaultValue="0009" />
                                                </Col>
                                            </Row>
                                        </Input.Group>

                                    </Form.Item>
                                    <Form.Item>
                                        <Input.Group style={{ width: '100%' }}>
                                            <Row gutter={8}>
                                                <Col span={12}>
                                                    <div style={{ marginLeft: '-70px', fontWeight: '500', fontSize: '15px' }}>Prefix:</div>
                                                </Col>
                                                <Col span={4}>
                                                    <Input style={{ borderRadius: '5px', width: '55px', height: '40px' }} defaultValue="0001" />
                                                </Col>
                                            </Row>
                                        </Input.Group>
                                    </Form.Item>
                                    <Form.Item>
                                        <div style={{ marginLeft: '-150px', fontWeight: '500', fontSize: '15px' }}>Reset mỗi ngày</div>
                                    </Form.Item>
                                </Form>
                            </Row>
                            <Row>
                                <div style={{ marginLeft: '10px', fontSize: '15px', marginTop: '-20px' }}> Ví dụ: 201-2001</div>
                            </Row>
                        </Form>
                    </Card>
                </Col>
                <Col span={14} flex="100%">
                    <Card className='card-service-right'>
                        <Form layout="vertical">
                            <Row justify="space-between" className='inputContainer'>
                                <Col>
                                    <Space size={0}>
                                        <Form.Item
                                            label={<Typography.Text strong className="status-service">Trạng thái</Typography.Text>}
                                            className='selectContianer'
                                        >
                                            <Select defaultValue="all" style={{ width: 150 }} onChange={handleChange} className="chose-status-service" size="large" suffixIcon={
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
                                        >
                                            <div className="chose-time-service"> Chọn thời gian</div>
                                            <div className="chose-time-service-range">
                                                <Form.Item noStyle>
                                                    <DatePicker size="large" />
                                                </Form.Item>
                                                <CaretRightOutlined style={{ color: "#FF7506" }} />
                                                <Form.Item noStyle>
                                                    <DatePicker size="large" />
                                                </Form.Item>
                                            </div>
                                        </Form.Item>

                                        <Form.Item
                                            label={<Typography.Text strong className="search-service">Từ khóa</Typography.Text>}
                                        >
                                            <Input placeholder="Nhập từ khóa" style={{ width: '100%' }} className="input-search-service" size="large" />
                                        </Form.Item>
                                    </Space>
                                </Col>

                            </Row>
                        </Form>
                        <Table columns={columns} dataSource={data} style={{ width: '95%', height: '90%' }} className='table-content1' size="large" pagination={{ pageSize: 8 }} />;
                    </Card>
                </Col>

                <Col span={1}>
                    <Link to="/addservice">
                        <Button
                            type="primary"
                            className="add"
                            style={{ marginTop: "20px", height: "6rem", width: "4rem", position: "absolute", right: "0", textAlign: "center", background: "#FFF2E7" }}
                        >
                            <PlusSquareFilled size={20} /><br />Thêm<br />dịch vụ
                        </Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default DetailService;