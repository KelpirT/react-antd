import { Form , Input, Checkbox, Button, Row, Col, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import '../component/NewPass.css';
import Logo from '../component/Image/Logo.png';
import LogoI from '../component/Image/FogotPass.png'

interface Size {
    width: number;
    height: number ;
  }

function useWindowSize(){
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





function NewPass() {
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
                            <h1 className="text"> Đặt lại mật khẩu mới</h1>
                            <h2 className="text1">Mật khẩu *</h2>
                            <Form.Item
                                // label="Mật khẩu *"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                                //className="login-password"
                            >
                                <Input.Password className="login-password"/>
                            </Form.Item>
                            <h2 className="text1">Nhập lại mật khẩu *</h2>
                            <Form.Item
                                // label="Nhập lại mật khẩu *"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                                //className="login-password"
                            >
                                <Input.Password className="login-password"/>
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" className="button-confirm" style={{borderRadius:"0.8rem",paddingTop:"0.2rem",width:"10rem",height:"3rem"}}>
                                    Xác nhận
                                </Button>
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
export default NewPass;