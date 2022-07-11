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
import '../UpdateRole/UpdateRole.css'
const { Option } = Select;
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const handleChange1 = (value: string[]) => {
    console.log(`selected ${value}`);
}
const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
};
const UpdateRole = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h2 className='title-1' style={{ color: '#FF9138' }}>Danh sách vai trò</h2>
                </Col>
            </Row>
            <Row>
                <Col span={23} flex="100%">
                    <Card className="card-account-1" style={{ width: "98%", height: '100%'}}>
                        <Row style={{ height: '100%' }}>
                            <div className="update-device-title">
                                Thông tin vai trò
                            </div>
                        </Row>
                        <Form style={{ height: '50%' }}>
                            <Row>
                                <Col span={12}>
                                    <Row>
                                        <Form.Item
                                            label="Tên vai trò"
                                            name="Tên vai trò"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                        >
                                            <Input
                                                className="input-update-form"
                                                style={{ width: '100%', marginTop: '2px' }}
                                                defaultValue="Kế toán"
                                            >
                                            </Input>
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Mô tả:"
                                            labelCol={{ span: 24 }}
                                            className="input-update-form"
                                        >
                                            <Input
                                                className="input-update-role"
                                                style={{ width: '100%', height: '200px' }}
                                                defaultValue="Chịu trách nghiệm thống kê và kiểm toán"
                                            >
                                            </Input>
                                        </Form.Item>
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
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Phân quyền chức năng"
                                        name="Phân quyền chức năng"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true }]}
                                        className="input-update-form"
                                    >
                                        <Card style={{ borderRadius: '15px', background:"#FFF2E7"}}>
                                            <Row>
                                                <Col>
                                                    <h2 className='title-1' style={{ color: '#FF9138' }}>Nhóm chức năng A</h2>
                                                </Col>
                                            </Row>
                                            <Row>    
                                                <Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Tất cả</Checkbox>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Nhóm chức năng A</Checkbox>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Nhóm chức năng B</Checkbox>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Nhóm chức năng C</Checkbox>
                                                    </Col>
                                                </Col>
                                            </Row>
                                            
                                            <Row>
                                                <Col>
                                                    <h2 className='title-1' style={{ color: '#FF9138' }}>Nhóm chức năng B</h2>
                                                </Col>
                                            </Row>
                                            <Row>    
                                                <Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Tất cả</Checkbox>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Nhóm chức năng X</Checkbox>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Nhóm chức năng Y</Checkbox>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Checkbox value="A">Nhóm chức năng Z</Checkbox>
                                                    </Col>
                                                </Col>
                                            </Row>

                                        </Card>
                                    </Form.Item>
                                </Col>

                            </Row>
                        </Form>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Form>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="gr-butoon-update">
                        <Space>
                            <Link to="/setting/manage-roles">
                                <Button type="primary" htmlType="submit" className="button-cancel-update" style={{ borderRadius: "0.8rem", paddingTop: "0.2rem", width: "10rem", height: "3rem" }}>
                                    Hủy bỏ
                                </Button>
                            </Link>
                            <Link to="/setting/manage-roles">
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
export default UpdateRole;