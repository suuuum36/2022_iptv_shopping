import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './reset.css';
import './font.css';
import DepthOne from './DepthOne';
import DepthDetail from './DepthDetail';
import DepthBuyMobile from './DepthBuyMobile';
import ModuleTime from './ModuleTime';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/home/*" element={<DepthOne />}></Route>
              <Route path="/detail" element={<DepthDetail />}></Route>
              <Route path="/buymobile" element={<DepthBuyMobile />}></Route>
            </Routes>
            <ModuleTime></ModuleTime>
          </BrowserRouter>
    </div>
  );
}

export default App;
