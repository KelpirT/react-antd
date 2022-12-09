import {
    CaretDownOutlined,
    PlusSquareFilled,
    PlusOutlined,
    ArrowUpOutlined,
    CalendarOutlined,
    CreditCardOutlined,
    CarryOutOutlined, ContactsOutlined, DiffOutlined,
    UngroupOutlined, DesktopOutlined, WechatOutlined,
    ArrowDownOutlined,
    CaretRightOutlined
} from '@ant-design/icons';
import { Badge, Calendar, Checkbox, InputRef, Progress, Space, Statistic } from 'antd';
import { Button, Card, Col, Form, Input, Row, Select, Tag, Tooltip } from 'antd';
import React from 'react'
import { Typography } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import { Link } from 'react-router-dom';
import '../Dashboard/Dashboard.css'
import { Area, Line, RadialBar } from '@ant-design/charts';
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
const Dashboard = () => {
    const data = [
        {
            name: 'X6',
            star: 297,
        },
        {
            name: 'G',
            star: 506,
        },
        {
            name: 'AVA',
            star: 805,
        },
        {
            name: 'G2Plot',
            star: 1478,
        },
        {
            name: 'L7',
            star: 2029,
        },
        {
            name: 'G6',
            star: 7100,
        },
        {
            name: 'F2',
            star: 7346,
        },
        {
            name: 'G2',
            star: 10178,
        },
    ];





    const myData = [
        { x: 0, y: 0 },
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 11 },
        { x: 4, y: 9 },
        { x: 5, y: 14 },
        { x: 6, y: 19 },
        { x: 7, y: 17 },
        { x: 8, y: 22 },
        { x: 9, y: 24 },
        { x: 10, y: 23 },
        { x: 11, y: 27 },
        { x: 12, y: 32 },
        { x: 13, y: 30 },
        { x: 14, y: 35 },
        { x: 15, y: 37 },
        { x: 16, y: 40 },
    ];
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const config = {
        myData,
        padding: 'auto',
        xField: 'x',
        yField: 'y',
        xAxis: {
          // type: 'timeCat',
          tickCount: 5,
        },
        smooth: true,
      };
    return (
        
        <div>

            <Row>
                <Col span={16} flex="100%">
                    <Row>
                        <Col>
                            <h2 className='' style={{ color: '#FF9138', marginLeft: '20px' }}>Biểu đồ cấp số</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '90%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
                                <Row>
                                    <div className=''>
                                        <CalendarOutlined style={{ color:'#1890ff',fontSize: '170%', background: "#e9f2ff", borderRadius: '50%', padding: '10px', marginTop: '-5px' }} />
                                    </div>
                                    <div style={{ fontSize: '18px', marginLeft: 'auto', marginRight: 'auto', marginTop: '-10px' }}>Số thứ tự <br /> đã cấp</div>
                                </Row>
                                <Row>
                                    <Col span={12} flex="100%" style={{ float: 'left' }}>
                                        <div style={{ fontSize: '25px', fontWeight: '500', float: 'left' }}>4.221</div>
                                    </Col>
                                    <Col span={12} flex="100%">

                                        <Statistic

                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: 'rgb(255, 145, 56)', fontSize: '70%' }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%"
                                            style={{ background: 'rgb(255 243 234)', width: '50%', borderRadius: '10px', float: 'right', marginTop: '10px' }}

                                        />


                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '90%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
                                <Row>
                                    <div className=''>
                                        <CarryOutOutlined style={{ color: "#35C75A", fontSize: '170%', background: "#ccffda", borderRadius: '50%', padding: '10px', marginTop: '-5px' }} />
                                    </div>
                                    <div style={{ fontSize: '18px', marginLeft: 'auto', marginRight: 'auto', marginTop: '-10px' }}>Số thứ tự <br /> đã sử dụng</div>
                                </Row>
                                <Row>
                                    <Col span={12} flex="100%" style={{ float: 'left' }}>
                                        <div style={{ fontSize: '25px', fontWeight: '500', float: 'left' }}>4.221</div>
                                    </Col>
                                    <Col span={12} flex="100%">

                                        <Statistic

                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: 'rgb(255, 145, 56)', fontSize: '70%' }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%"
                                            style={{ background: '#ffdae6', width: '50%', borderRadius: '10px', float: 'right', marginTop: '10px' }}

                                        />


                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '90%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
                                <Row>
                                    <div className=''>
                                        <ContactsOutlined style={{ color: '#FF7506', fontSize: '170%', background: "#fffaf2", borderRadius: '50%', padding: '10px', marginTop: '-5px' }} />
                                    </div>
                                    <div style={{ fontSize: '18px', marginLeft: 'auto', marginRight: 'auto', marginTop: '-10px' }}>Số thứ tự <br /> đang chờ</div>
                                </Row>
                                <Row>
                                    <Col span={12} flex="100%" style={{ float: 'left' }}>
                                        <div style={{ fontSize: '25px', fontWeight: '500', float: 'left' }}>4.221</div>
                                    </Col>
                                    <Col span={12} flex="100%">

                                        <Statistic

                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: 'rgb(255, 145, 56)', fontSize: '70%' }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%"
                                            style={{ background: 'rgb(255 243 234)', width: '50%', borderRadius: '10px', float: 'right', marginTop: '10px' }}

                                        />


                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '90%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
                                <Row>
                                    <div className=''>
                                        <DiffOutlined style={{ color: '#e90f56', fontSize: '170%', background: "#ffdae6", borderRadius: '50%', padding: '10px', marginTop: '-5px' }} />
                                    </div>
                                    <div style={{ fontSize: '18px', marginLeft: 'auto', marginRight: 'auto', marginTop: '-10px' }}>Số thứ tự <br /> đã bỏ qua</div>
                                </Row>
                                <Row>
                                    <Col span={12} flex="100%" style={{ float: 'left' }}>
                                        <div style={{ fontSize: '25px', fontWeight: '500', float: 'left' }}>4.221</div>
                                    </Col>
                                    <Col span={12} flex="100%">

                                        <Statistic

                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: '#e90f56', fontSize: '70%' }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%"
                                            style={{ background: '#ffdae6', width: '50%', borderRadius: '10px', float: 'right', marginTop: '10px' }}

                                        />


                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row>

                        <Card style={{ width: "98%", height: '577px', marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', borderRadius: '10px' }}>
                            <Row>
                                <Col span={12}>
                                    <div style={{ float: 'left' }}>
                                        <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Bảng thống kê theo ngày</div>
                                        <div style={{ float: 'left', marginBottom: '20px', fontSize: '15px' }}>Tháng 07/2022</div>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label={<Typography.Text strong className="text-11" style={{paddingLeft: '20px' }}>Xem theo</Typography.Text>}
                                        className='selectContianer'
                                        style={{ float: 'right' }}
                                    >
                                        <Select defaultValue="yes" style={{ width: 100, paddingLeft: '-20px' }} onChange={handleChange} className="select1" size="large" suffixIcon={
                                            <CaretDownOutlined
                                                style={{ fontSize: "20px", color: "#FF7506" }}
                                            />
                                        }>
                                            <Option value="all">Tất cả</Option>
                                            <Option value="yes">Ngày</Option>
                                            <Option value="no">Tháng</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row>
                                <Col span={24}>
                                    
                                    <Line
                                        data={myData}
                                        height={500}
                                        xField="x"
                                        yField="y"
                                        point={{ size: 4, shape: 'diamon' }}
                                        color='blue'
                                        smooth       
                                        style={{ height: '450px' }}
                                    />
                                </Col>
                            </Row>
                        </Card>

                    </Row>
                </Col>
                <Col span={8} flex="100%">
                    <Card style={{ width: "98%", height: '745px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', borderRadius: '10px' }}>
                        <Row>
                            <Col>
                                <h2 className='' style={{ color: '#FF9138' }}>Tổng quan</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>
                                <Link to="/devices">
                                    <Card style={{ width: "98%", height: '90px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', borderRadius: '10px' }}>
                                        <Row>
                                            <Col span={4}>
                                                <div style={{ marginTop: "-5px", marginLeft: "-18px" }}><Progress type="circle" percent={10} strokeColor={"#a1a1a1"} style={{ borderColor: "#a1a1a1" }} showInfo={false} width={46} /></div>
                                                <div style={{ marginTop: "-35px", marginLeft: "-18px" }}><Progress type="circle" percent={90} strokeColor={"#FF7506"} width={55} style={{ marginTop: "-200px", paddingBottom: "100px", marginBottom: "30px" }} /></div>
                                            </Col>
                                            <Col span={8}><Row><Statistic value={4221} valueStyle={{ fontSize: "28px", fontWeight: "700" }} style={{ marginTop: "-20px", marginLeft: "3px" }} /></Row>
                                                <Row><DesktopOutlined style={{ marginTop: '5px', color: "#FF7506" }} /><p style={{ marginLeft: "4px", fontWeight: "600", fontSize: "14px", color: "#FF7506" }}>Thiết bị</p></Row>
                                            </Col>
                                            <Col span={12}>
                                                <Row><Badge color="#FF7506" text="Đang hoạt động" style={{ marginTop: "-10px" }} /><Statistic value={3799} valueStyle={{ color: "#FF7506", fontWeight: "600", fontSize: "18px" }} style={{ marginTop: "-13px", marginLeft: "15px" }} /></Row>
                                                <Row><Badge color="#a1a1a1" text="Ngưng hoạt động" /><Statistic value={422} valueStyle={{ color: "#FF7506", fontWeight: "600", fontSize: "18px" }} style={{ marginTop: "-3px", marginLeft: "7px" }} /></Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>
                                <Link to="/services">
                                    <Card style={{ width: "98%", height: '90px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', borderRadius: '10px' }}>
                                        <Row>
                                            <Col span={4}>
                                                <div style={{ marginTop: "-5px", marginLeft: "-18px" }}><Progress type="circle" percent={10} strokeColor={"#a1a1a1"} style={{ borderColor: "#a1a1a1" }} showInfo={false} width={46} /></div>
                                                <div style={{ marginTop: "-35px", marginLeft: "-18px" }}><Progress type="circle" percent={76} strokeColor={"#4277FF"} width={55} style={{ marginTop: "-200px", paddingBottom: "100px", marginBottom: "30px" }} /></div>
                                            </Col>
                                            <Col span={8}><Row><Statistic value={4221} valueStyle={{ fontSize: "28px", fontWeight: "700" }} style={{ marginTop: "-20px", marginLeft: "3px" }} /></Row>
                                                <Row><WechatOutlined style={{ marginTop: '5px', color: "#4277FF" }} /><p style={{ marginLeft: "4px", fontWeight: "600", fontSize: "14px", color: "#4277FF" }}>Dịch vụ</p></Row>
                                            </Col>
                                            <Col span={12}>
                                                <Row><Badge color="#4277FF" text="Đang hoạt động" style={{ marginTop: "-10px" }} /><Statistic value={210} valueStyle={{ color: "#4277FF", fontWeight: "600", fontSize: "18px" }} style={{ marginTop: "-13px", marginLeft: "15px" }} /></Row>
                                                <Row><Badge color="#a1a1a1" text="Ngưng hoạt động" /><Statistic value={66} valueStyle={{ color: "#4277FF", fontWeight: "600", fontSize: "18px" }} style={{ marginTop: "-3px", marginLeft: "7px" }} /></Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>
                                <Link to="/givenumber">
                                    <Card style={{ width: "98%", height: '90px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', borderRadius: '10px' }}>
                                        <Row>
                                            <Col span={4}>
                                                {/* <RadialBar {...config2} className="radial" style={{fontSize:"10px"}} percent={40}/> */}
                                                <div style={{ marginTop: "-5px", marginLeft: "-18px" }}><Progress type="circle" percent={12} strokeColor={"#a1a1a1"} style={{ borderColor: "#a1a1a1" }} showInfo={false} width={46} /></div>
                                                <div style={{ marginTop: "-35px", marginLeft: "-18px" }}><Progress type="circle" percent={86} strokeColor={"#35C75A"} width={55} style={{ marginTop: "-200px", paddingBottom: "100px", marginBottom: "30px" }} /></div>
                                                <div style={{ marginTop: "-170px", marginLeft: "-18px" }}><Progress type="circle" percent={2} strokeColor={"#F178B6"} width={38} showInfo={false} style={{ marginTop: "-200px", paddingBottom: "100px", marginBottom: "30px" }} /></div>
                                            </Col>
                                            <Col span={8}><Row><Statistic value={4221} valueStyle={{ fontSize: "28px", fontWeight: "700" }} style={{ marginTop: "-20px", marginLeft: "3px" }} /></Row>
                                                <Row><UngroupOutlined style={{ color: "#35C75A" }} /><p style={{ marginLeft: "4px", fontWeight: "600", fontSize: "14px", color: "#35C75A" }}>Cấp số</p></Row>
                                            </Col>
                                            <Col span={12}>
                                                <Row><Badge color="#35C75A" text="Đã sử dụng" style={{ marginTop: "-18px" }} /><Statistic value={3721} valueStyle={{ color: "#35C75A", fontWeight: "600", fontSize: "18px" }} style={{ marginTop: "-21px", marginLeft: "45px" }} /></Row>
                                                <Row><Badge color="#a1a1a1" text="Đang chờ" /><Statistic value={486} valueStyle={{ color: "#35C75A", fontWeight: "600", fontSize: "18px" }} style={{ marginTop: "-3px", marginLeft: "57px" }} /></Row>
                                                <Row><Badge color="#F178B6" text="Bỏ qua" /><Statistic value={32} valueStyle={{ color: "#35C75A", fontWeight: "600", fontSize: "18px" }} style={{ marginTop: "-3px", marginLeft: "74px" }} /></Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>

                                <div style={{ width: "100%", height: '85%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', borderRadius: '10px' }} className="site-calendar-demo-card">
                                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                </div>

                            </Col>
                        </Row>
                    </Card>
                </Col>


            </Row>
        </div>
    )
}
export default Dashboard;