import React from "react";

import ModulePlay from './ModulePlay';
import ModuleItem from './ModuleItem';

import { useRef, useEffect } from 'react';
import useScript from "./hooks/useScript"
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

function actionByEnter(index_num){
  ({
    "1000" : ()=>{
      window.location.href = '/buymobile';
    },
    "1001" : ()=>{
      window.location.href = '/detail';
    },
  })[index_num]();
}

function actionAtIndex(next_num, direction){
  if(next_num === 1000){
    console.log('편성표');
  }
  if(next_num === 1003){
    console.log('편성표');
  }

  if(next_num.toString().match(/^3/)){
    window.scrollWithDatumH(document.querySelector('.module_item .carousel'), 4, direction);
  }
}

const menu_items = [
  {index:1, src_nor: "/img/lnb_icon_my_nor.png", src_foc: "/img/lnb_icon_my_foc.png", text:"마이메뉴"},
  {index:2, src_nor: "/img/lnb_icon_search_nor.png", src_foc: "/img/lnb_icon_search_foc.png", text:"검색"},
  {index:3, src_nor: "/img/lnb_icon_home_nor.png", src_foc: "/img/lnb_icon_home_foc.png", text:"홈"},
  {index:4, src_nor: "/img/lnb_icon_live_nor.png", src_foc: "/img/lnb_icon_live_foc.png", text:"지금하는 방송"},
  {index:5, src_nor: "/img/lnb_icon_schedule_nor.png", src_foc: "/img/lnb_icon_schedule_foc.png", text:"편성표"},
  {index:6, src_nor: "/img/lnb_icon_best_nor.png", src_foc: "/img/lnb_icon_best_foc.png", text:"베스트"},
]

function MenuLnb(props) {
  let menu;
  if(props.index === 2){
    menu = 
    <>
      <div className="menu">
        <div className="icon">
          <img className="nor" src={props.src_nor} alt="" />
          <img className="foc" src={props.src_foc} alt="" />
        </div>
        <span>{props.text}</span>
      </div>
      <hr />
    </>
  } else {
      menu = 
      <>
        <div className="menu">
          <div className="icon">
            <img className="nor" src={props.src_nor} alt="" />
            <img className="foc" src={props.src_foc} alt="" />
          </div>
          <span>{props.text}</span>
        </div>
      </>
    }
  return menu; 
}



function Lnb(){
  return (
    <div className="lnb">
      <div className="lnb_float">
        {menu_items.map(menu_item => <MenuLnb key={menu_item.index} index={menu_item.index} src_nor={menu_item.src_nor} src_foc={menu_item.src_foc} text={menu_item.text} />)}
      </div>
    </div>
  )
}

function SetNowPlay_3() {
  async function keyAction(event){
    const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
    let next_num; 
    if(event.key === "Enter"){
      actionByEnter(current_index);
    } else {
      ({
        "ArrowUp" : ()=>{
          next_num = parseInt(parseInt(current_index)/1000)*1000 - 1000
        },
        "ArrowRight" : ()=>{
          next_num = parseInt(current_index) + 1;
        },
        "ArrowDown" : ()=>{
          next_num = parseInt(parseInt(current_index)/1000)*1000 + 1000;
        },
        "ArrowLeft" : ()=>{
          next_num = parseInt(current_index) - 1;
        },
      })[event.key]();
      await window.changeActive(next_num);
      await actionAtIndex(next_num, event.key);
    }
  }

  const [isLnb, setIsLnb] = useState(false);
  const status = useScript('/function_module.js');
  const params = useParams();
  const location = useLocation();
  const keydownRef = useRef(null);
  useEffect(()=>{
    if(status === "ready") {
      window.defaultSetting();
      console.log('useeffect');
      console.log(keydownRef.current);
      document.addEventListener('keydown', keyAction);
    }
    return ()=>{
      document.removeEventListener('keydown', keyAction)
    }
  });
  return (
    <>  
      <section className="home_3" ref={keydownRef}>
        <Lnb />
        <div className="explore">
            <ModulePlay type={'type_b'}></ModulePlay>
            <ModuleItem type={'type_b'}></ModuleItem>
        </div>
      </section>
    </>
  );
}

export default SetNowPlay_3;
