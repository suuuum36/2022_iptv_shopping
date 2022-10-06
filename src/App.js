import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './reset.css';
import './font.css';
import './css/font.css';
// import './css/default.css';
import './index.css';
import DepthOne from './DepthOne';
import DepthDetail from './DepthDetail';
import DepthBuyMobile from './DepthBuyMobile';
import ModuleTime from './ModuleTime';
import {Channel} from './Channel';
import {ChannelMenu} from './Channel_Menu';
import {Navigator} from './Navigator';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/home/*" element={<DepthOne />}></Route>
              <Route path="/detail/:id" element={<DepthDetail />}></Route>
              <Route path="/buymobile/:id" element={<DepthBuyMobile />}></Route>
              <Route path='/channel' element = {<Channel />}/>
              <Route path='/menu' element = {<ChannelMenu />}/>
            </Routes>
            <ModuleTime></ModuleTime>
          </BrowserRouter>
    </div>
  );
}

export default App;
