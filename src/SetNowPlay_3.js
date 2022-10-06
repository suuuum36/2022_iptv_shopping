import React from "react";

import ModulePlay from './ModulePlay';
import ModuleItem from './ModuleItem';

import { useRef, useEffect } from 'react';
import useScript from "./hooks/useScript"
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const carousel_items = [
  {index: 0, src: '/img/sample/0_video.mp4', logo: '/img/sample/0_logo.png', price_final: '390,000', price_discount: '10%', price_original:'450,000', title:'[TV쇼핑]코치 첼레스트 백', poster: '/img/sample/0_poster.png' },
  {index: 1, src: '/img/sample/1_video.mp4', logo: '/img/sample/1_logo.png', price_final: '89,100', price_discount: '19%', price_original:'99,000', title:'[TV쇼핑][뱅뱅최신상] 16FW 웜 이지 보아퍼 데님팬츠 3종(여) Ver.3', poster: '/img/sample/1_poster.png' },
  {index: 2, src: '/img/sample/2_video.mp4', logo: '/img/sample/2_logo.png', price_final: '278,000', price_discount: '0%', price_original:'278,000', title:'에바큐브 더 컬렉션', poster: '/img/sample/2_poster.png' },
  {index: 3, src: '/img/sample/3_video.mp4', logo: '/img/sample/3_logo.png', price_final: '79,000', price_discount: '0%', price_original:'79,000', title:'빼자까페 런칭방송', poster: '/img/sample/3_poster.png' },
  {index: 4, src: '/img/sample/4_video.mp4', logo: '/img/sample/4_logo.png', price_final: '624,000', price_discount: '0%', price_original:'624,000', title:'[휴렉] TV방영 히어로 음식물처리기(혼합형) HD-9000DH (에어컨 탈취제 증정)', poster: '/img/sample/4_poster.png' },
  {index: 5, src: '/img/sample/5_video.mp4', logo: '/img/sample/5_logo.png', price_final: '79,900', price_discount: '0%', price_original:'79,900', title:'헉슬리 쿠션 오운 애티튜드', poster: '/img/sample/5_poster.png' },
  {index: 6, src: '/img/sample/6_video.mp4', logo: '/img/sample/6_logo.png', price_final: '38,800', price_discount: '10%', price_original:'42,680', title:'셀럽by재클린 시즌2 살롱 새치커버 염색약 8박스', poster: '/img/sample/6_poster.png' },
  {index: 7, src: '/img/sample/7_video.mp4', logo: '/img/sample/7_logo.png', price_final: '69,800', price_discount: '0%', price_original:'69,800', title:'더맑은 KF94 마스크 새부리형 컬러 마스크', poster: '/img/sample/7_poster.png' },
  {index: 8, src: '/img/sample/8_video.mp4', logo: '/img/sample/8_logo.png', price_final: '1,090,000', price_discount: '0%', price_original:'1,090,000', title:'현대의료기 천연석 온열 돌침대', poster: '/img/sample/8_poster.png' },
  {index: 9, src: '/img/sample/9_video.mp4', logo: '/img/sample/9_logo.png', price_final: '119,000', price_discount: '0%', price_original:'119,000', title:'라니앤라이프 라니 올리고 가스 와이드 그릴 고급형', poster: '/img/sample/9_poster.png' },
  {index: 10, src: '/img/sample/10_video.mp4', logo: '/img/sample/10_logo.png', price_final: '57,510', price_discount: '10%', price_original:'63,000', title:'블랙시카 마이크로바이옴 모공 클렌저/ 숯카마클렌저', poster: '/img/sample/10_poster.png' },
  {index: 11, src: '/img/sample/11_video.mp4', logo: '/img/sample/11_logo.png', price_final: '59,000', price_discount: '0%', price_original:'59,000', title:'푸쉬앤건 플레어핏 썸머 데님 히트상품', poster: '/img/sample/11_poster.png' },
  {index: 12, src: '/img/sample/12_video.mp4', logo: '/img/sample/12_logo.png', price_final: '60,820', price_discount: '12%', price_original:'69,900', title:'[A+G] 엣지 WINTER19 판초 니트 풀오버 4종', poster: '/img/sample/12_poster.png' },
];

function SetNowPlay_3() {
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
    document.querySelector('[data-index="3000"]').classList.add('active');
  }
  
  function actionByEnter(index_num){
    ({
      "2000" : ()=>{
        window.location.href = '/buymobile/3';
      },
      "2001" : ()=>{
        window.location.href = '/detail/3';
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
      changeVideoInfo(next_num%100);
      window.scrollWithDatumH(document.querySelector('.module_item .carousel'), 4, 56, direction);
    }
  }
  
  const menu_items = [
    {index:0, src_nor: "/img/lnb_icon_my_nor.png", src_foc: "/img/lnb_icon_my_foc.png", text:"마이메뉴"},
    {index:1, src_nor: "/img/lnb_icon_search_nor.png", src_foc: "/img/lnb_icon_search_foc.png", text:"검색"},
    {index:2, src_nor: "/img/lnb_icon_home_nor.png", src_foc: "/img/lnb_icon_home_foc.png", text:"홈"},
    {index:3, src_nor: "/img/lnb_icon_live_nor.png", src_foc: "/img/lnb_icon_live_foc.png", text:"지금하는 방송"},
    {index:4, src_nor: "/img/lnb_icon_schedule_nor.png", src_foc: "/img/lnb_icon_schedule_foc.png", text:"편성표"},
    {index:5, src_nor: "/img/lnb_icon_best_nor.png", src_foc: "/img/lnb_icon_best_foc.png", text:"베스트"},
  ]
  
  function MenuLnb(props) {
    let menu;
    if(props.index === 2){
      menu = 
      <>
        <div className={`menu controllable menu_${props.index}`}>
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
          <div className={`menu controllable menu_${props.index}`}>
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
        <div className="lnb_float wrapper_controllable" ref={lnbRef}>
          {menu_items.map(menu_item => <MenuLnb key={menu_item.index} index={menu_item.index} src_nor={menu_item.src_nor} src_foc={menu_item.src_foc} text={menu_item.text} />)}
        </div>
      </div>
    )
  }

  function changeVideoInfo(index){
    videoRef.current.src = carousel_items[index].src;
    logoRef.current.src = carousel_items[index].logo;
    titleRef.current.innerText = carousel_items[index].title;
    discountRef.current.innerText = carousel_items[index].price_discount;
    priceRef.current.innerText = carousel_items[index].price_final;
  }
  

  const islnb = useRef(false);
  const status = useScript('/function_module.js');
  const params = useParams();
  const location = useLocation();
  const keydownRef = useRef(null);
  const lnbRef = useRef(null);
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const discountRef = useRef(null);
  const priceRef = useRef(null);
  const ref =useRef({videoRef,logoRef, titleRef, discountRef, priceRef })

  useEffect(()=>{
    if(status === "ready") {
      console.log('useeffect');
      changeVideoInfo(0);
      defaultSetting();
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
            <ModulePlay ref={ref} type={'type_b'}></ModulePlay>
            <ModuleItem type={'type_b'}></ModuleItem>
        </div>
      </section>
    </>
  );
}

export default SetNowPlay_3;
