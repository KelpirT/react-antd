import {
    CaretDownOutlined,
    PlusSquareFilled,
    PlusOutlined,
    CaretRightOutlined
    } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Select, Space, Typography } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import '../NewNumber/NewNumber.css'
const { Option } = Select;
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
const NewNumber = () => {
  return (
    <div>
        <Row>
            <Col>
              <h2 className='title-1' style={{color:'#FF9138'}}>Quản lý thiết bị</h2>
            </Col>
          </Row>
          <Card className="card-account-1" style={{ width: "95%", height:'90ch' }}>
                      <Row>
                        <Col span={23} flex="100%">
                        
                            <Row>
                                <div className="new-number">Cấp số mới</div>
                            </Row> 
                            <Row>
                            <Form.Item
                                label={<Typography.Text strong className="new-number-1">Dịch vụ khách hàng lựa chọn</Typography.Text>}
                                className='new-number-2'
                                labelCol={{ span: 24 }}
                                >
                                    <Select placeholder="Chọn dịch vụ" style={{ width: 400}} onChange={handleChange} className="select-newnumber" size="large" suffixIcon={
                                    <CaretDownOutlined
                                        style={{ fontSize: "20px", color: "#FF7506" }}
                                    />
                                    }>
                                    <Option value="all">Khám tim mạch</Option>
                                    <Option value="yes">Khám sản phụ khoa</Option>
                                    <Option value="no">Khám răng hàm mặt</Option>
                                    </Select>
                            </Form.Item>
                            </Row>      
                        
                        </Col>

        </Row>
        <Row>
            <Form>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="gr-butoon-number">
                                <Space>
                                <Link to="/givenumber">
                                <Button type="primary" htmlType="submit" className="button-cancel-update" style={{borderRadius:"0.8rem",paddingTop:"0.2rem",width:"10rem",height:"3rem"}}>
                                    Hủy bỏ
                                </Button>
                                </Link>
                                <Link to="">
                                <Button type="primary" htmlType="submit" className="button-continue-update" style={{borderRadius:"0.8rem",paddingTop:"0.2rem",width:"10rem",height:"3rem"}}>
                                   Thêm thiết bị
                                </Button>
                                </Link>
                                </Space>
                            </Form.Item>
            </Form>
        </Row>
        </Card>
    </div>
  )
}
export default NewNumber;
