import React, { useState } from 'react'
import SliderPage from '../Layout/SliderPage'
import HeaderPage from '../Layout/HeaderPage'
import { Layout } from 'antd';
import { Route, Routes } from "react-router-dom";
import Devices from '../Devices'
import GiveNumber from '../GiveNumber'
import Services from '../Page/Services/Services'
import Report from '../Page/Report/Report'
import ManageRole from '../Page/ManageRole/Role';
import ManageAccount from '../Page/ManageAccount/ManageAccount';
import History from '../Page/History/History'
import ManageDevice from '../Page/ManageDevice/ManageDevice'
const { Header, Footer, Sider, Content } = Layout;

function ContentRoute  () {
    const [collapsed, setCollapsed] = useState(false);
    return (
    
    <div>
        <div>
            <Layout style={{ "height": "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{background:"white"}}>
              <SliderPage/>
            </Sider>
                <Layout>
                    <Header style={{ "height": '13.5vh' ,background:'#EAEAEC', padding:10}}>
                      <HeaderPage/>
                    </Header>
                    <Content style={{ background :"#EAEAEC" }} >
                        <Routes>
                            <Route path="/devices">
                                <Route index element={<Devices/>}/>
                            </Route>
                            <Route path="/givenumber">
                                <Route index element={<GiveNumber/>}/>
                            </Route>
                            <Route path="/services">
                                <Route index element={<Services/>}/>
                            </Route>
                            <Route path="/report">
                                <Route index element={<Report/>}/>
                            </Route>
                            <Route path="/setting/manage-roles">
                                <Route index element={<ManageRole/>}/>
                            </Route>
                            <Route path="/setting/accounts">
                                <Route index element={<ManageAccount/>}/>
                            </Route>
                            <Route path="/setting/user-history">
                                <Route index element={<History/>}/>
                            </Route>
                            <Route path="/managedevice">
                                <Route index element={<ManageDevice/>}/>
                            </Route>
                            
                        </Routes>
                    </Content>
                    
                </Layout>
            </Layout>
        </div>
    </div>
  )
}
export default ContentRoute;
