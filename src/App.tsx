import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContentRoute from './component/Route/ContentRoute';

const App: React.FC = () =>(
  <div>
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<ContentRoute />} />
              {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
  </div>
    );
export default App;
