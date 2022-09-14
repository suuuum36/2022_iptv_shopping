import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useScript from "./hooks/useScript"

import './App.css';
import './reset.css';
import './font.css';
import DepthOne from './DepthOne';
import DepthDetail from './DepthDetail';
import DepthBuyMobile from './DepthBuyMobile';
import ModuleTime from './ModuleTime';

function App() {
  const status = useScript('/function_module.js');
  // function changeActive(index_num){
  //   if(document.querySelector(`[data-index="${index_num}"]`) !== null ){
  //     console.log(document.querySelector(`[data-index="${index_num}"]`));
  //     document.querySelector('.controllable.active').classList.remove('active');
  //     document.querySelector(`[data-index="${index_num}"]`).classList.add('active');
  //     actionByMovement(parseInt(index_num/1000));
  //   }
  // }
  
  // function actionByMovement(line_num){
  //   const path = document.querySelector('.App').getAttribute('data-page');
  //   ({
  //     'now_play' : {
  //       1 : ()=>{
  //         console.log('1 here!!!');
  //       },
  //       2 : ()=>{
  //         console.log('2 here!!!');
  //       },
  //       3 : ()=>{
  //         console.log('3 here!!!');
  //       },
  //     }
  //   })[path][line_num]();
  // }
  
  // function actionByEnter(index_num){
  //   const path = document.querySelector('.App').getAttribute('data-page');
  //   console.log(path);
  //   ({
  //     'now_play': {
  //       "2000" : ()=>{
  //         window.location.href = './buymobile';
  //       },
  //       "2001" : ()=>{
  //         window.location.href = './detail';
  //       }
  //     },
  //     'detail':{
  //       "1000" : ()=>{
  //         window.location.href = './';
  //       },
  //       "1002" : ()=>{
  //         document.querySelector('.App').setAttribute('data-page','buymobile');
  //         window.location.href = './buymobile';
  //       },
  //     },
  //     'buymobile' : {
  //       "1000" : ()=>{
  //         document.querySelector('.App').setAttribute('data-page','now_play');
  //         window.location.href = './';
  //       },
  //     }
  //   })[path][index_num]();
  // }
  
  // async function defaultSetting(){
  //   await clearActiveClass();
  //   await checkControllable();
  //   await activeFirstIndex();
    
  //   function clearActiveClass(){
  //     document.querySelectorAll('.active').forEach((item)=>{
  //         item.classList.remove('active');
  //     })
  //   }
    
  //   function activeFirstIndex(){
  //     document.querySelector('[data-index="1000"]').classList.add('active');
  //   }
    
    
  //   function checkControllable(){
  //     document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
  //       const line_num = index + 1;
  //       item.querySelectorAll('.controllable').forEach((item, index)=>{
  //         const controllable_index = line_num * 1000 + index;
  //         item.setAttribute('data-index', controllable_index);
  //       })
  //     })
  //   }
  // }
  // useEffect(()=>{
  //   defaultSetting();
  //   console.log('useeffect');
  //   document.addEventListener('keydown', (event)=>{
  //     const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
  //     const action_key =  {
  //       "ArrowUp" : ()=>{
  //         changeActive(parseInt(parseInt(current_index)/1000)*1000 - 1000);
  //       },
  //       "ArrowRight" : ()=>{
  //         changeActive(parseInt(current_index) + 1);
  //       },
  //       "ArrowDown" : ()=>{
  //         if(current_index === "1004"){
  //           changeActive(parseInt(parseInt(current_index)/1000)*1000 + 3000);
  //         } else {
  //           changeActive(parseInt(parseInt(current_index)/1000)*1000 + 1000);
  //         }
  //       },
  //       "ArrowLeft" : ()=>{
  //         changeActive(parseInt(current_index) - 1);
  //       },
  //       "Enter" : ()=>{
  //         actionByEnter(current_index);
  //       },
  //     };
      
  //     if(isFinite(event.key)){
  //       digit_array.push(event.key);
  //       console.log(digit_array.length);
  //       if(digit_array.length <12) {
  //         document.querySelector('#popup_digit').value = digit_array.toString().replace(/,/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, "");
  //       }
  //       console.log(digit_array.toString().replace(/,/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3"));
  //     } else  {
  //       action_key[event.key]();
  //     }
  //     console.log(event.key);
  //     console.log(current_index);
  //     console.log(document.querySelector(`[data-index="${current_index}"]`));
  //   });
  // })

  const digit_array = [];
  // const path = useLocation();
  
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DepthOne />}></Route>
              <Route path="/detail" element={<DepthDetail />}></Route>
              <Route path="/buymobile" element={<DepthBuyMobile />}></Route>
            </Routes>
            <ModuleTime></ModuleTime>
          </BrowserRouter>
    </div>
  );
}

export default App;
