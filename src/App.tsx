import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContentRoute from './component/Route/ContentRoute';
import RouteR from './component/Route/RouteR'
import Login from './component/Login'
import ForgotPass from './component/ForgotPass'
import NewPass from './component/NewPass'
const App: React.FC = () =>(
  <div>
    <div className="App">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/*" element={<RouteR />} /> */}
              <Route path="/*" element={<ContentRoute />}/>
              {/* <Route path="/home" element={<ContentRoute />}/> */}
              {/* <Route path="/forgotpass" element={<ForgotPass />}/>
              <Route path="/newpass" element={<NewPass />}/> */}
              {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
  </div>
    );
export default App;
