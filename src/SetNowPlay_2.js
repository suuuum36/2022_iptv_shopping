import React from "react";
import Gnb from './Gnb';

import { useRef, useEffect } from 'react';
import useScript from "./hooks/useScript"
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const video_infos = [
    {index: 0, src: '/img/video_sample.mp4#t=0.1', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'aaaaaa'},
    {index: 1, src: '/img/video_sample.mp4#t=1.1', logo: '/img/logo_lotte.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'bbbbbb' },
    {index: 2, src: '/img/video_sample.mp4#t=2.2', logo: '/img/logo_hyundai.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'cccccc'},
];

const carousel_items = [
    {index: 0, src: '/img/video_sample.mp4', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'[런칭가 99,900원] 김서룡 시그니처 오간자 봄버 재킷', poster: '/img/img_item_sample_440_1.png' },
    {index: 1, src: '/img/video_sample.mp4', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'bbbbbb', poster: '/img/img_item_sample_440_1.png' },
    {index: 2, src: '/img/video_sample.mp4', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'cccccc', poster: '/img/img_item_sample_440_1.png' },
]


const ModuleVideo = React.forwardRef((props, ref) =>{
    return (
        <>
            <div className="wrapper_set_play controllable">
                <div className="logo">
                    <img src={props.logo} alt="" />
                </div>
                <div className="set_play">
                    <video ref={ref} src={props.src} loop={true} playsInline={true} muted={true}></video>
                    <div className="layer_info">
                        <div className="top">
                            <span>{props.index}</span>
                        </div>
                        <div className="wrapper_text">
                            <div className="text_1">
                                <span>{props.price_original}</span>
                            </div>
                            <div className="text_2">
                                <span>{props.price_discount}</span><span>{props.price_final}<span>원</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <span>{props.title}</span>
                </div>
            </div>
        </>
    )
})

const ModuleCarouselItem = React.forwardRef((props, ref) => {
    return(
        <>
            <li className="carousel__item controllable">
                <div className="img">
                    <video src={props.src} poster={props.poster} ref={ref}></video>
                </div>
                <div className="layer_info">
                    <div className="logo">
                        <img src="/img/logo_hyundai.png" alt="" />
                    </div>
                    <div className="text_1">
                        <span>{props.title}</span>
                    </div>
                    <div className="text_2">
                        <span>{props.price_discount}</span><span><span>{props.price_final}</span>원</span>
                    </div>
                </div>
            </li>
        </>
    )
})

const SetNowPlay_2 = React.forwardRef((props, ref) =>{
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
          await changeActive(next_num);
          await actionAtIndex(next_num, event.key);
          event.preventDefault();
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
        }
      }
      
      function activeFirstIndex(){
        document.querySelector('[data-index="1000"]').classList.add('active');
      }
      
      function actionByEnter(index_num){
        ({
          "2000" : ()=>{
            window.location.href = '/buymobile/2';
          },
          "2001" : ()=>{
            window.location.href = '/detail/2';
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
          stopAllVideo();
          carouselRef.current[next_num%1000].play();
          window.scrollWithDatumH(document.querySelector('.module_item .carousel'), 4, direction);
        }
      }

      function stopAllVideo(){
        // videoRef.current.forEach((item)=>{
        //   console.log(item);
        //   item.pause();
        // })
        carouselRef.current.forEach((item)=>{
          item.load();
        })
      }

      const status = useScript('/function_module.js');
      const params = useParams();
      const location = useLocation();
      const keydownRef = useRef(null);
      const videoRef = useRef([]);
      const carouselRef = useRef([]);

      useEffect(()=>{
        if(status === "ready") {
          console.log('useeffect');
          console.log(keydownRef.current);
          console.log(videoRef.current);
          console.log(carouselRef.current);
          defaultSetting();
          document.addEventListener('keydown', keyAction);
        }
        return ()=>{
          document.removeEventListener('keydown', keyAction)
        }
      });

    return (
        <>
            <Gnb></Gnb>
            <div className="main_content_2" >
                <div className="module_a2 module_play_top3">
                    <div className="wrapper_title">
                        <span>많이 보는 방송</span><span>TOP 3</span>
                    </div>
                    <div className="wrapper_content wrapper_controllable">
                        {video_infos.map((video_info, index) => <ModuleVideo  ref={elem => videoRef.current[video_info.index] = elem} key={video_info.index} index={video_info.index} src={video_info.src} logo={video_info.logo} price_original={video_info.price_original} price_discount={video_info.price_discount} price_final={video_info.price_final} title={video_info.title} />)}
                    </div>
                </div> 
                <div className="module_a2 module_item_expand">
                    <div className="wrapper_title">
                        <span>의류 베스트 상품</span><span></span>
                    </div>
                    <ul className="carousel wrapper_controllable">
                        {carousel_items.map(carousel_item => <ModuleCarouselItem ref={elem => carouselRef.current[carousel_item.index] = elem} key={carousel_item.index} src={carousel_item.src} logo={carousel_item.logo} price_original={carousel_item.price_original} price_discount={carousel_item.price_discount} price_final={carousel_item.price_final} title={carousel_item.title} poster={carousel_item.poster} />)}
                    </ul>
                </div>
            </div>
        </>
    );

})

export default SetNowPlay_2;
