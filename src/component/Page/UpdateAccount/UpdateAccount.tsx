import {
    CaretDownOutlined,
    PlusSquareFilled,
    PlusOutlined,
    CaretRightOutlined
} from '@ant-design/icons';
import { InputRef, Space } from 'antd';
import { Button, Card, Col, Form, Input, Row, Select, Tag, Tooltip } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import '../UpdateDevice/UpdateDevice.css'
const { Option } = Select;
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const handleChange1 = (value: string[]) => {
    console.log(`selected ${value}`);
};
const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
};
const UpdateAccount = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h2 className='title-1' style={{ color: '#FF9138' }}>Quản lý tài khoản</h2>
                </Col>
            </Row>
            <Row>
                <Col span={23} flex="100%">
                    <Card className="card-account-1" style={{ width: "98%", height: '100%' }}>
                        <Row style={{ height: '100%' }}>
                            <div className="update-device-title">
                                Thông tin tài khoản
                            </div>
                        </Row>
                        <Form style={{ height: '50%' }}>
                            <Row>
                                <Col span={12}>
                                    <Row>
                                        <Form.Item
                                            label="Họ tên:"
                                            name="Họ tên"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                        >
                                            <Input
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="Nguyễn Văn A"
                                            >
                                            </Input>
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Số điện thoại:"
                                            name="Số điện thoại"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                        >
                                            <Input
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="0912345678"
                                            >
                                            </Input>
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Email:"
                                            name="email"
                                            labelCol={{ span: 24 }}
                                            rules={[{ type: 'email',required: true }]}
                                            className="input-update-form"
                                        >
                                            <Input
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="abc@gmail.com"
                                            >
                                            </Input>
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Vai trò"
                                            name="Vai trò"
                                            rules={[{ required: true }]}
                                            labelCol={{ span: 24 }}
                                            className="input-update-form1"
                                        >
                                            <Select defaultValue="all" style={{ width: '100%' }} onChange={handleChange} className="select-update" size="large" suffixIcon={
                                                <CaretDownOutlined
                                                    style={{ fontSize: "20px", color: "#FF7506" }}
                                                />
                                            }>
                                                <Option value="all">Kế toán</Option>
                                                <Option value="yes">Admin</Option>

                                            </Select>
                                        </Form.Item>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <Row>
                                        <Form.Item
                                            label="Tên đăng nhập"
                                            name="Tên đăng nhập"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form2"
                                            style={{marginTop:'-10px'}}
                                        >
                                            <Input
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="nguyenvana123"
                                            >
                                            </Input>
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Mật khẩu"
                                            name="password"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            style={{marginTop:'-5px'}}
                                            className="input-update-form3"
                                            
                                        >
                                            <Input.Password
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="CMS"
                                            >
                                            </Input.Password>

                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Nhập lại mật khẩu"
                                            name="password"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            style={{marginTop:'-5px'}}
                                            className="input-update-form3"
                                            
                                        >
                                            <Input.Password
                                                className="input-update-form"
                                                style={{ width: '100%' }}
                                                defaultValue="CMS"
                                            >
                                            </Input.Password>

                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Tình trạng:"
                                            name="Tình trạng"
                                            rules={[{ required: true }]}
                                            labelCol={{ span: 24 }}
                                            className="input-update-form1"
                                            style={{marginTop:'-10px'}}
                                        >
                                            <Select defaultValue="all" style={{ width: '100%' }} onChange={handleChange} className="select-update" size="large" suffixIcon={
                                                <CaretDownOutlined
                                                    style={{ fontSize: "20px", color: "#FF7506" }}
                                                />
                                            }>
                                                <Option value="all">Tất cả</Option>
                                                <Option value="yes">Hoạt động</Option>
                                                <Option value="no">Ngưng hoạt động</Option>
                                            </Select>
                                        </Form.Item>
                                    </Row>
                                </Col>

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
                            <Link to="/setting/accounts">
                                <Button type="primary" htmlType="submit" className="button-cancel-update" style={{ borderRadius: "0.8rem", paddingTop: "0.2rem", width: "10rem", height: "3rem" }}>
                                    Hủy bỏ
                                </Button>
                            </Link>
                            <Link to="/setting/accounts">
                                <Button type="primary" htmlType="submit" className="button-continue-update" style={{ borderRadius: "0.8rem", paddingTop: "0.2rem", width: "10rem", height: "3rem" }}>
                                    Cập nhật
                                </Button>
                            </Link>
                        </Space>
                    </Form.Item>
                </Form>
            </Row>
        </div>
    )
}
export default UpdateAccount;