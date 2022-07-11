import {
  AntDesignOutlined
} from '@ant-design/icons';
import { Avatar, Card, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import '../component/Account.css'; interface Size {
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





function Account() {
  const size = useWindowSize();

  return (
    <div>

      <Card className="card-account-1" style={{ width: "95%", height: '100%',marginTop:'100px' }}>

        <Form style={{ height: '50%' }}>
          <Row>
            <Col span={6}>
              <Avatar
                size={{ xs: 48 * 1.5, sm: 64 * 1.5, md: 80 * 1.5, lg: 128 * 1.5, xl: 160 * 1.5, xxl: 200 * 1.5 }}
                icon={<AntDesignOutlined />}
              />
              <div className='name-account'>Nguyễn Văn A</div>
            </Col>
            <Col span={9}>
              <Row>
                <Form.Item
                  label="Họ tên:"
                  name="Họ tên"
                  labelCol={{ span: 24 }}
                  
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
                  rules={[{ type: 'email'}]}
                  className="input-update-form"
                >
                  <Input
                    className="input-update-form"
                    style={{ width: '100%' }}
                    defaultValue="nguyena123@gmail.com"
                  >
                  </Input>
                </Form.Item>
              </Row>
              <Row>

              </Row>
            </Col>
            <Col span={9}>
              <Row>
                <Form.Item
                  label="Tên đăng nhập"
                  name="Tên đăng nhập"
                  labelCol={{ span: 24 }}
                 
                  className="input-update-form2"
                  style={{ marginTop: '-10px' }}
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
                  
                  style={{ marginTop: '-5px' }}
                  className="input-update-form3"

                >
                  <Input
                    className="input-update-form"
                    style={{ width: '100%' }}
                    defaultValue="nguyenvana@"
                  >
                  </Input>

                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  label="Vai trò"
                  name="password"
                  labelCol={{ span: 24 }}
                  
                  style={{ marginTop: '-5px' }}
                  className="input-update-form3"

                >
                  <Input
                    className="input-update-form"
                    style={{ width: '100%' }}
                    defaultValue="Kế toán"
                  >
                  </Input>

                </Form.Item>
              </Row>
              <Row>

              </Row>
            </Col>

          </Row>
        </Form>
      </Card>
    </div>
  );
}
export default Account;