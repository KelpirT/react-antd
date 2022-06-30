import {
    PlusSquareFilled
    } from '@ant-design/icons';
import { Button, Card, Col, Row } from 'antd';
import "../ManageDevice/ManageDevice.css"
import React from 'react'

const ManageDevice = () => {
  return (
    <div>
        <Row>
            <Col>
              <h2 className='title-1' style={{color:'#FF9138'}}>Danh sách thiết bị</h2>
            </Col>
          </Row>
                      <Row>
                        <Col span={23} flex="100%">
                        <Card className="card-account" style={{ width: "95%", height:'220%' }}>
                            <Row style={{height:'50px'}}>
                                <div className="manage-device-title">
                                    Thông tin thiết bị
                                </div>
                            </Row>
                            <Row>
                                <Col span={3}>
                                    <Row>
                                        <div className="sub-title-manage-device">Mã thiết bị:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Tên thiết bị:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Địa chỉ IP:</div>
                                    </Row>
                                </Col>
                                <Col span={9}>
                                    <Row>
                                        <div className="sub-info-manage-device">KIO_01</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">Kiosk</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">192.168.1.10</div>
                                    </Row>
                                </Col>
                                <Col span={3}>
                                    <Row>
                                        <div className="sub-title-manage-device">Loại thiết bị:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Tên đăng nhập:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Mật khẩu:</div>
                                    </Row>
                                </Col>
                                <Col span={9}>
                                    <Row>
                                        <div className="sub-info-manage-device">Kiosk</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">abc@123</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">12345</div>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <div className="sub-title-manage-device">Dịch vụ sử dụng:</div> 
                            </Row>
                            <Row>
                                <div className="sub-info-manage-device">Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Tai mũi họng</div>
                            </Row>
                        </Card>
                        </Col>
                        <Col span={1}>
                                <Button
                                type="primary"
                                className="add"
                                style={{marginTop:"20px",height:"6rem",width:"4rem", position:"absolute",right:"0",textAlign:"center",background:"#FFF2E7"}}
                                >
                                  <PlusSquareFilled  size={20}/><br />Thêm<br/>thiết bị
                                </Button>
                        </Col>
                        </Row>
    </div>
    );
}
export default ManageDevice;