import {
    PlusSquareFilled,
    RollbackOutlined
    } from '@ant-design/icons';
import { Badge, Button, Card, Col, Row } from 'antd';
import "../ManageDevice/ManageDevice.css"
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const DetailNumber = () => {
  return (
    <div>
        <Row>
            <Col>
              <h2 className='title-1' style={{color:'#FF9138'}}>Quản lý cấp số</h2>
            </Col>
          </Row>
                      <Row>
                        <Col span={23} flex="100%">
                        <Card className="card-account" style={{ width: "95%", height:'220%' }}>
                            <Row style={{height:'50px'}}>
                                <div className="manage-device-title">
                                    Thông tin cấp số
                                </div>
                            </Row>
                            <Row>
                                <Col span={3}>
                                    <Row>
                                        <div className="sub-title-manage-device">Họ tên:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Tên dịch vụ:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Số thứ tự:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Thời gian cấp:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Hạn sử dụng:</div>
                                    </Row>
                                </Col>
                                <Col span={9}>
                                    <Row>
                                        <div className="sub-info-manage-device">Nguyễn Văn A</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">Khám tim mạch</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">2001201</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">14:35 - 07/11/2022</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">12:00 - 21/11/2022</div>
                                    </Row>
                                </Col>
                                <Col span={3}>
                                    <Row>
                                        <div className="sub-title-manage-device">Nguồn cấp:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Trạng thái:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Số điện thoại:</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-title-manage-device">Địa chỉ email:</div>
                                    </Row>
                                </Col>
                                <Col span={9}>
                                    <Row>
                                        <div className="sub-info-manage-device">Kiosk</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device"><Badge status="processing" text="Đang chờ" /></div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">0948523623</div>
                                    </Row>
                                    <Row>
                                        <div className="sub-info-manage-device">nguyevana@gmail.com</div>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                        </Col>
                        <Col span={1}>
                            <Link to="/givenumber">
                                <Button
                                type="primary"
                                className="add"
                                style={{marginTop:"20px",height:"5rem",width:"5rem", position:"absolute",right:"0",textAlign:"center",background:"#FFF2E7",borderRadius:'10px'}}
                                >
                                  <RollbackOutlined  size={30}/><br />Quay lại
                                </Button>
                            </Link>
                        </Col>
                        </Row>
    </div>
    );
}
export default DetailNumber;