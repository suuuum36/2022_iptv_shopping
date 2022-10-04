import React from "react";

import Gnb from './Gnb';
import ModulePlay from './ModulePlay';
import ModuleItem from './ModuleItem';

import { useRef, useEffect } from 'react';
import useScript from "./hooks/useScript"
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

function SetNowPlay_1() {
  async function keyAction(event){
    const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
    let next_num; 
    if(event.key === "Enter"){
      actionByEnter(current_index);
    } else {
      ({
        "ArrowUp" : ()=>{
          if(islnb.current === false){
            next_num = parseInt(parseInt(current_index)/1000)*1000 - 1000
          } else {
            next_num = parseInt(current_index) - 1;
          }
        },
        "ArrowRight" : ()=>{
          if(islnb.current === false){
            next_num = parseInt(current_index) + 1;
          } else {
            islnb.current = false;
            lnbRef.current.classList.remove('expanded');
            next_num = 3000;
          }
        },
        "ArrowDown" : ()=>{
          if(islnb.current === false){
            next_num = parseInt(parseInt(current_index)/1000)*1000 + 1000;
          } else {
            next_num = parseInt(current_index) + 1;
          }
        },
        "ArrowLeft" : ()=>{
          next_num = parseInt(current_index) - 1;
        },
      })[event.key]();
      await changeActive(next_num);
      await actionAtIndex(next_num, event.key);
    }
  }

  function checkNoElementCase(num_index){
    console.log('no_element');
    if(num_index.toString().match(/999$/)){
      islnb.current = true;
      lnbRef.current.classList.add('expanded');
      document.querySelector('.controllable.active').classList.remove('active');
      document.querySelector('[data-index="1003"]').classList.add('active');
    }
  }

  async function defaultSetting(){
    await clearActiveClass();
    await checkControllable();
    await activeFirstIndex();
  }

  function clearActiveClass(){
      document.querySelectorAll('.active').forEach((item)=>{
          item.classList.remove('active');
      })
  }

  function checkControllable(){
    document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
        const line_num = index + 1;
        item.querySelectorAll('.controllable').forEach((item, index)=>{
            const controllable_index = line_num * 1000 + index;
            item.setAttribute('data-index', controllable_index);
        })
    })
  }

  function changeActive(index_num_next){
    if(document.querySelector(`[data-index="${index_num_next}"]`) !== null ){
        console.log(document.querySelector(`[data-index="${index_num_next}"]`));
        document.querySelector('.controllable.active').classList.remove('active');
        document.querySelector(`[data-index="${index_num_next}"]`).classList.add('active');
    } else {
      checkNoElementCase(index_num_next);
    }
  }
  
  function activeFirstIndex(){
    document.querySelector('[data-index="1000"]').classList.add('active');
  }
  
  function actionByEnter(index_num){
    ({
      "2000" : ()=>{
        window.location.href = '/buymobile/1';
      },
      "2001" : ()=>{
        window.location.href = '/detail/1';
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
      mainvideoRef.current.src = item_video[next_num];
      window.scrollWithDatumH(document.querySelector('.module_item .carousel'), 4, direction);
    }
  }

  const item_video = {
    "3000" : "/img/video_sample_1.mp4",
    "3001" : "/img/video_sample.mp4",
  }

  const islnb = useRef(false);
  const status = useScript('/function_module.js');
  const params = useParams();
  const location = useLocation();
  const keydownRef = useRef(null);
  const mainvideoRef = useRef(null);
  const lnbRef = useRef(null);

  useEffect(()=>{
    if(status === "ready") {
      console.log('useeffect');
      console.log(mainvideoRef.current);
      defaultSetting();
      document.addEventListener('keydown', keyAction);
    }
    return ()=>{
      document.removeEventListener('keydown', keyAction)
    }
  });
  return (
    <section className="home_1">
      <Gnb></Gnb>
      <div>
        <ModulePlay ref={mainvideoRef}></ModulePlay>
        <ModuleItem></ModuleItem>
      </div>
    </section>
  );
}

export default SetNowPlay_1;
