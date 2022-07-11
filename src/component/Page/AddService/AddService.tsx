import {
    CaretDownOutlined,
    PlusSquareFilled,
    PlusOutlined,
    CaretRightOutlined
} from '@ant-design/icons';
import { Checkbox, InputRef, Space } from 'antd';
import { Button, Card, Col, Form, Input, Row, Select, Tag, Tooltip } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import '../AddService/AddService.css'
const { Option } = Select;
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
};
const AddService = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h2 className='title-1' style={{ color: '#FF9138' }}>Quản lý dịch vụ</h2>
                </Col>
            </Row>
            <Row>
                <Col span={23} flex="100%">
                    <Card className="card-account-1" style={{ width: "98%", height: '100%' }}>
                        <Row style={{ height: '100%' }}>
                            <div className="update-device-title">
                                Thông tin dịch vụ
                            </div>
                        </Row>
                        <Form style={{ height: '50%', marginTop: '-15px' }}>
                            <Row>
                                <Col span={12}>
                                    <Row>
                                        <Form.Item
                                            label="Mã dịch vụ:"
                                            name="Mã dịch vụ"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                        >
                                            <Input
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="201"
                                            >
                                            </Input>
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Tên dịch vụ:"
                                            name="Tên dịch vụ"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                        >
                                            <Input
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="Khám tim mạch"
                                            >
                                            </Input>
                                        </Form.Item>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Mô tả"
                                        name="Mô tả"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true }]}
                                        className="input-service-form"
                                    >
                                        <Input
                                            className="input-service"
                                            style={{ height: '145px' }}

                                        >
                                            {/* <Tag closable onClose={log}>
                                        Tag 2
                                    </Tag> */}

                                        </Input>
                                    </Form.Item>

                                </Col>

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
                                                    <Checkbox>Tăng tự động từ</Checkbox>
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
                                                    <Checkbox style={{ float: 'left' }}>Prefix</Checkbox>
                                                </Col>
                                                <Col span={4}>
                                                    <Input style={{ borderRadius: '5px', width: '55px', height: '40px' }} defaultValue="0001" />
                                                </Col>
                                            </Row>
                                        </Input.Group>
                                    </Form.Item>
                                    <Form.Item>
                                        <Input.Group style={{ width: '100%' }}>
                                            <Row gutter={8}>
                                                <Col span={12}>
                                                    <Checkbox style={{ float: 'left' }}>Surfix</Checkbox>
                                                </Col>
                                                <Col span={4}>
                                                    <Input style={{ borderRadius: '5px', width: '55px', height: '40px' }} defaultValue="0001" />
                                                </Col>
                                            </Row>
                                        </Input.Group>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox style={{ float: 'left' }}>Reset mỗi ngày</Checkbox>
                                    </Form.Item>
                                </Form>
                            </Row>
                            <Row>

                                <Form.Item
                                    label="Là trường thông tin bắt buộc"
                                    name="Dịch vụ sử dụng"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true }]}
                                    className="warning-update"
                                >
                                </Form.Item>
                            </Row>
                        </Form>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Form>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="gr-butoon-update">
                        <Space>
                            <Link to="/services">
                                <Button type="primary" htmlType="submit" className="button-cancel-update" style={{ borderRadius: "0.8rem", paddingTop: "0.2rem", width: "10rem", height: "3rem" }}>
                                    Hủy bỏ
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button type="primary" htmlType="submit" className="button-continue-update" style={{ borderRadius: "0.8rem", paddingTop: "0.2rem", width: "10rem", height: "3rem" }}>
                                    Thêm dịch vụ
                                </Button>
                            </Link>
                        </Space>
                    </Form.Item>
                </Form>
            </Row>
        </div>
    )
}
export default AddService;