import React from "react";
import { useEffect } from 'react';
import useScript from "./hooks/useScript"

import Gnb from './Gnb';
import SetNowPlay from "./SetNowPlay";
import SetNowPlayTest from "./SetNowPlayTest";

function actionByEnter(index_num){
  
  ({
    "2000" : ()=>{
      window.location.href = './buymobile';
    },
    "2001" : ()=>{
      window.location.href = './detail';
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

function DepthOne() {
  const status = useScript('/function_module.js');
  useEffect(()=>{
    if(status === "ready") {
      window.defaultSetting();
      console.log('useeffect');
      document.addEventListener('keydown', keyAction);
    }
    return ()=>{
      // document.removeEventListener('keydown', keyAction)
    }
  });
  return (
    <article className="now_play">
        <section>
          <Gnb></Gnb>
          <SetNowPlay></SetNowPlay>
          {/* <SetNowPlayTest></SetNowPlayTest> */}
        </section>
    </article>
  );
}

export default DepthOne;
