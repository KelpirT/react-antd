import React, { useState } from 'react'
import SliderPage from '../Layout/SliderPage'
import HeaderPage from '../Layout/HeaderPage'
import { Layout } from 'antd';
import { Route, Routes } from "react-router-dom";
import Login from '../Login'
import ContentRoute from '../Route/ContentRoute'
import ForgotPass from '../ForgotPass';
import NewPass from '../NewPass';

function RouteR  () {
    return (
    
    <div>
                        <Routes>
                            <Route path="/*">
                                <Route index element={<Login/>}/>
                            </Route>
                            <Route path="/login">
                                <Route index element={<Login/>}/>
                            </Route>
                            <Route path="/home">
                                <Route index element={<ContentRoute/>}/>
                            </Route>
                            <Route path="/forgotpass">
                                <Route index element={<ForgotPass/>}/>
                            </Route>
                            <Route path="/newpass">
                                <Route index element={<NewPass/>}/>
                            </Route>
                        </Routes>

    </div>
  )
}
export default RouteR;
