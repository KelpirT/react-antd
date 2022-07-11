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
    console.log(`selected ${value}`);}
  const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };
const AddDevice = () => {
  return (
    <div>
                <Row>
            <Col>
              <h2 className='title-1' style={{color:'#FF9138'}}>Quản lý thiết bị</h2>
            </Col>
          </Row>
                      <Row>
                        <Col span={23} flex="100%">
                        <Card className="card-account-1" style={{ width: "98%", height:'100%' }}>
                            <Row style={{height:'100%'}}>
                                <div className="update-device-title">
                                    Thông tin thiết bị
                                </div>
                            </Row>
                            <Form style={{ height:'50%'}}>
                            <Row>    
                                    <Col span={12}>
                                        <Row>
                                            <Form.Item
                                            label="Mã thiết bị:"
                                            name="Mã thiết bị"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                            >
                                                <Input
                                                className="input-update-form"
                                                    style={{ width: '100%' }}
                                                    placeholder="Nhập mã thiết bị"
                                                >
                                                </Input>
                                            </Form.Item>
                                        </Row>
                                        <Row>
                                            <Form.Item
                                            label="Tên thiết bị:"
                                            name="Tên thiết bị"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                            >
                                                <Input
                                                className="input-update-form"
                                                    style={{ width: '100%' }}
                                                    placeholder="Nhập tên thiết bị"
                                                >
                                                </Input>
                                            </Form.Item>
                                        </Row>
                                        <Row>
                                            <Form.Item
                                            label="Địa chỉ IP:"
                                            name="Địa chỉ IP:"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form"
                                            >
                                                <Input
                                                className="input-update-form"
                                                    style={{ width: '100%' }}
                                                    placeholder="Nhập địa chỉ IP"
                                                >
                                                </Input>
                                            </Form.Item>
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row>
                                            <Form.Item
                                            label="Loại thiết bị"
                                            name="Loại thiết bị"
                                            rules={[{ required: true }]}
                                            labelCol={{ span: 24 }}
                                            className="input-update-form1"
                                            >
                                                <Select  placeholder="Chọn loại thiết bị" style={{ width: '100%'}} onChange={handleChange} className="select-update" size="large" suffixIcon={
                                                    <CaretDownOutlined
                                                        style={{ fontSize: "20px", color: "#FF7506" }}
                                                    />
                                                    }>
                                                            <Option value="all">Kiosk</Option>
                                                            <Option value="yes">DisplayCounter</Option>
                                                            
                                                </Select>
                                            </Form.Item>
                                        </Row>
                                        <Row>
                                            <Form.Item
                                            label="Tên đăng nhập"
                                            name="Tên đăng nhập"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form2"
                                            >
                                                <Input
                                                className="input-update-form"
                                                    style={{ width: '100%' }}
                                                    placeholder="Nhập tài khoản"
                                                >
                                                </Input>
                                            </Form.Item>
                                        </Row>
                                        <Row>
                                            <Form.Item
                                            label="Mật khẩu"
                                            name="Mật khẩu"
                                            labelCol={{ span: 24 }}
                                            rules={[{ required: true }]}
                                            className="input-update-form3"
                                            >
                                                <Input
                                                className="input-update-form"
                                                    style={{ width: '100%' }}
                                                    placeholder="Nhập mật khẩu"
                                                >
                                                </Input>
                                            
                                            </Form.Item>
                                        </Row>
                                    </Col>
                                   
                            </Row>
                            <Row>
                                <Form.Item
                                    label="Dịch vụ sử dụng"
                                    name="Dịch vụ sử dụng"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true }]}
                                    className="input-update-form"
                                >
                                <Select
                                    mode="multiple"
                                    style={{width: '100%', borderRadius:'30' }}
                                    placeholder="select one country"
                                    defaultValue={['tim']}
                                    onChange={handleChange1}
                                    optionLabelProp="label"
                                >
                                    <Option value="tim" label="Khám tim mạch">
                                    <div className="demo-option-label-item">
                                        Khám tim mạch
                                    </div>
                                    </Option>
                                    <Option value="ham" label="Khám răng hàm mặt">
                                    <div className="demo-option-label-item">
                                    Khám răng hàm mặt
                                    </div>
                                    </Option>
                                    <Option value="phu" label="Khám sản phụ khoa">
                                    <div className="demo-option-label-item">
                                    Khám sản phụ khoa
                                    </div>
                                    </Option>
                                    <Option value="mui" label="Khám tai mũi họng">
                                    <div className="demo-option-label-item">
                                    Khám tai mũi họng
                                    </div>
                                    </Option>
                                </Select>
                                </Form.Item>
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
                                <Link to="/devices">
                                <Button type="primary" htmlType="submit" className="button-cancel-update" style={{borderRadius:"0.8rem",paddingTop:"0.2rem",width:"10rem",height:"3rem"}}>
                                    Hủy bỏ
                                </Button>
                                </Link>
                                <Link to="/devices">
                                <Button type="primary" htmlType="submit" className="button-continue-update" style={{borderRadius:"0.8rem",paddingTop:"0.2rem",width:"10rem",height:"3rem"}}>
                                   Thêm thiết bị
                                </Button>
                                </Link>
                                </Space>
                            </Form.Item>
            </Form>
        </Row>
    </div>
  )
}
export default AddDevice;