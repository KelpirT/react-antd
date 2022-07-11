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
import UpdateDevice from '../Page/UpdateDevice/UpdateDevice'
import AddDevice from '../Page/AddDevice/AddDevice'
import AddService from '../Page/AddService/AddService';
import NewNumber from '../Page/NewNumber/NewNumber'
import DetailNumber from '../Page/DetailNumber/DetailNumber';
import DetailService from '../Page/DetailService/DetailService';
import UpdateRole from '../Page/UpdateRole/UpdateRole'
import AddRole from '../Page/AddRole/AddRole';
import UpdateAccount from '../Page/UpdateAccount/UpdateAccount';
import AddAccount from '../Page/AddAccount/AddAccount';
import Account from '../Account'
import Dashboard from '../Page/Dashboard/Dashboard'
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
                            <Route path="/updatedevice">
                                <Route index element={<UpdateDevice/>}/>
                            </Route>
                            <Route path="/adddevice">
                                <Route index element={<AddDevice/>}/>
                            </Route>
                            <Route path="/addservice">
                                <Route index element={<AddService/>}/>
                            </Route>
                            <Route path="/newnumber">
                                <Route index element={<NewNumber/>}/>
                            </Route>
                            <Route path="/detailnumber">
                                <Route index element={<DetailNumber/>}/>
                            </Route>
                            <Route path="/detailservice">
                                <Route index element={<DetailService/>}/>
                            </Route>
                            <Route path="/setting/manage-roles/update">
                                <Route index element={<UpdateRole/>}/>
                            </Route>
                            <Route path="/setting/manage-roles/add">
                                <Route index element={<AddRole/>}/>
                            </Route>
                            <Route path="/update-account">
                                <Route index element={<UpdateAccount/>}/>
                            </Route>
                            <Route path="/add-account">
                                <Route index element={<AddAccount/>}/>
                            </Route>
                            <Route path="/account">
                                <Route index element={<Account/>}/>
                            </Route>
                            <Route path="/dashboard">
                                <Route index element={<Dashboard/>}/>
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
