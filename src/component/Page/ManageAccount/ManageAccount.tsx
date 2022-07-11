import {
  CaretDownOutlined,
  PlusSquareFilled
} from '@ant-design/icons';
import { Form, Input, Checkbox, Button, Row, Col, Space, Layout, Menu, Avatar, MenuProps, Tag, Select, Dropdown, Tooltip } from 'antd';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import '../ManageAccount/ManageAccount.css';
import Table, { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
const { Title } = Typography;


const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface DataType {
  key: string;
  user_name: string;
  full_name: string;
  phone_number: string;
  email: string;
  role: string;
  status: string[];
  update: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên đăng nhập',
    dataIndex: 'user_name',
    key: 'user_name',

  },
  {
    title: 'Họ tên',
    dataIndex: 'full_name',
    key: 'full_name',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'status',
    key: 'status',
    render: (_, { status }) => (
      <>
        {status.map(status => {
          let color = status.length > 5 ? 'geekblue' : 'green';

          if (status === 'Ngưng hoạt động') {
            color = 'volcano';
          }
          if (status === 'Hoạt động') {
            color = 'green';
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '',
    dataIndex: 'update',
    key: 'update',
    render: (text) => <Link to={'/update-account'}>{text}</Link>
  },

]

const data: DataType[] = [
  {
    key: '1',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '2',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Ngưng hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '3',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '4',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '5',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Ngưng hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '6',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '7',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '8',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '9',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '10',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '11',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },
  {
    key: '12',
    user_name: 'abc@123',
    full_name: 'Nguyễn Văn A',
    phone_number: '0912345678',
    email: 'abc@gmail.com',
    role: 'Kế toán',
    status: ['Hoạt động'],
    update: 'Cập nhật',
  },

];
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


function ManageAccount() {
  return (
    <div>
      <Row>
        <Col>
          <h2 className='title-1' style={{ color: '#FF9138' }}>Danh sách tài khoản</h2>
        </Col>
      </Row>
      <Form layout="vertical">
        <Row justify="space-between" className='inputContainer'>
          <Col>
            <Space size={24}>
              <Form.Item
                label={<Typography.Text strong className="text-1">Trạng thái hoạt động</Typography.Text>}
                className='selectContianer'
              >
                <Select defaultValue="all" style={{ width: 300 }} onChange={handleChange} className="first-select" size="large" suffixIcon={
                  <CaretDownOutlined
                    style={{ fontSize: "20px", color: "#FF7506" }}
                  />
                }>
                  <Option value="all">Tất cả</Option>
                  <Option value="yes">Hoạt động</Option>
                  <Option value="no">Ngưng hoạt động</Option>
                </Select>
              </Form.Item>
            </Space>
          </Col>
          <Col flex="450px">
            <Form.Item
              label={<Typography.Text strong className="text-3">Từ khóa</Typography.Text>}
            >
              <Input placeholder="Nhập từ khóa" style={{ width: '95%' }} className="thirst-select" size="large" />
            </Form.Item>
          </Col>

        </Row>
      </Form>
      <Row>
        <Col span={23} flex="100%">
          <Table columns={columns} dataSource={data} style={{ width: '95%', height: '90%' }} className='table-content' size="large" pagination={{ pageSize: 9 }} />;
        </Col>
        <Col span={1}>
          <Link to={'/add-account'}>
            <Button
              type="primary"
              className="add"
              style={{ marginTop: "20px", height: "6rem", width: "5rem", position: "absolute", right: "0", textAlign: "center", background: "#FFF2E7" }}
            >
              <PlusSquareFilled size={20} /><br />Thêm<br />tài khoản
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
export default ManageAccount;