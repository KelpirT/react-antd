import {
    CaretDownOutlined,
    PlusSquareFilled,
    PlusOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    CaretRightOutlined
} from '@ant-design/icons';
import { Calendar, Checkbox, InputRef, Space, Statistic } from 'antd';
import { Button, Card, Col, Form, Input, Row, Select, Tag, Tooltip } from 'antd';
import React from 'react'
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import { Link } from 'react-router-dom';
import '../Dashboard/Dashboard.css'
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
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <div>

            <Row>
                <Col span={18} flex="100%">
                    <Row>
                        <Col>
                            <h2 className='' style={{ color: '#FF9138', marginLeft: '20px' }}>Biểu đồ cấp số</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '100%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
                                <Row></Row>
                                <Row>
                                    <Col span={18} flex="100%">

                                    </Col>
                                    <Col span={6} flex="100%">
                                        <Card style={{ width: "90%", height: '100%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '100%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>

                            </Card>
                        </Col>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '100%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>

                            </Card>
                        </Col>
                        <Col span={6} flex="100%">
                            <Card style={{ width: "90%", height: '100%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>

                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Card style={{ width: "98%", height: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', borderRadius: '10px' }}></Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={6} flex="100%">
                    <Card style={{ width: "98%", height: '745px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', borderRadius: '10px' }}>
                        <Row>
                            <Col>
                                <h2 className='' style={{ color: '#FF9138' }}>Tổng quan</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>
                                <Card style={{ width: "98%", height: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', borderRadius: '10px' }}></Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>
                                <Card style={{ width: "98%", height: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px', borderRadius: '10px' }}></Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>
                                <Card style={{ width: "98%", height: '85%', marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', borderRadius: '10px' }}></Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='card-dashboard' span={24}>
                                
                                    <div style={{ width: "100%", height: '85%', marginLeft: 'auto', marginRight: 'auto', marginTop: '70px', borderRadius: '10px' }} className="site-calendar-demo-card">
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