import React from 'react';
import './App.css';
import Login from './component/Login'
import ForgotPass from './component/ForgotPass';
import NewPass from './component/NewPass'

const App: React.FC = () =>(
  <div>
    {/* <Login /> */}
    {/* <ForgotPass/> */}
    <NewPass />
  </div>
    );
export default App;
