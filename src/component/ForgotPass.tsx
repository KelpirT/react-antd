import { Form, Input, Checkbox, Button, Row, Col, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import '../component/ForgotPass.css'
import Logo from '../component/Image/Logo.png';
import LogoI from '../component/Image/FogotPass.png'
import { Link } from 'react-router-dom';

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





function ForgotPass() {
    const size = useWindowSize();
    return (
        <div>
            <Row style={{ "height": "100vh" }}>
                <Col span={10} className="login-local">
                    <Row>
                        <img
                            className="logo"
                            src={Logo}
                            alt="Logo Alta"
                            style={{ width: "30%", height: "30%" }}
                        />
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Form
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            className="login-local-input"
                        >
                            <h1 className="text"> Đặt lại mật khẩu</h1>
                            <h2 className="text1">Vui lòng nhập email để đặt lại mật khẩu của bạn *</h2>
                            <Form.Item
                                name={['user', 'email']}
                                rules={[{ type: 'email' }]}
                                className="email-username"
                            //autoComplete="off"
                            >
                                <Input className="input-email" />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="gr-butoon">
                                <Space>
                                    <Link to='/login'>
                                        <Button type="primary" htmlType="submit" className="button-cancel" style={{ borderRadius: "0.8rem", paddingTop: "0.2rem", width: "10rem", height: "3rem" }}>
                                            Hủy
                                        </Button>
                                    </Link>
<Link to='/newpass'>
                                    <Button type="primary" htmlType="submit" className="button-continue" style={{ borderRadius: "0.8rem", paddingTop: "0.2rem", width: "10rem", height: "3rem" }}>
                                        Tiếp tục
                                    </Button>
                                    </Link>
                                </Space>
                            </Form.Item>
                        </Form>



                    </Row>
                </Col>
                <Col span={14} className="image-local">
                    {(size.width <= 1500) ? (
                        <>
                            <img
                                src={LogoI}
                                className="image-fix" />
                        </>
                    ) : (
                        <>
                            <img
                                src={LogoI}
                                className="image" />
                        </>
                    )}
                </Col>
            </Row>
        </div>
    );
}
export default ForgotPass;