import React from "react";
import Gnb from './Gnb';

import { useRef, useEffect } from 'react';
import useScript from "./hooks/useScript"
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const video_infos = [
    // {index: 0, src: '/img/sample/0_video.mp4#t=0.1', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'aaaaaa'},
    // {index: 1, src: '/img/video_sample.mp4#t=1.1', logo: '/img/logo_lotte.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'bbbbbb' },
    // {index: 2, src: '/img/video_sample.mp4#t=2.2', logo: '/img/logo_hyundai.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'cccccc'},
    {index: 0, src: '/img/sample/10_video.mp4', logo: '/img/sample/10_logo.png', price_final: '57,510', price_discount: '10%', price_original:'63,000', title:'블랙시카 마이크로바이옴 모공 클렌저/ 숯카마클렌저', poster: '/img/sample/10_poster.png' },
    {index: 1, src: '/img/sample/11_video.mp4', logo: '/img/sample/11_logo.png', price_final: '59,000', price_discount: '0%', price_original:'59,000', title:'푸쉬앤건 플레어핏 썸머 데님 히트상품', poster: '/img/sample/11_poster.png' },
    {index: 2, src: '/img/sample/12_video.mp4', logo: '/img/sample/12_logo.png', price_final: '60,820', price_discount: '12%', price_original:'69,900', title:'[A+G] 엣지 WINTER19 판초 니트 풀오버 4종', poster: '/img/sample/12_poster.png' },
];

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
                            <span>{props.index + 1}</span>
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
                    <video src={props.src} poster={props.poster} ref={ref} loop></video>
                </div>
                <div className="layer_info">
                    <img src="/img/tag_live_timetable_48px.png" alt="" className="tag_live" />
                    <div className="logo">
                        <img src={props.logo} alt="" />
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
              actionBeforeChange(current_index, "ArrowDown");
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

      function actionBeforeChange(current_num, direction){
        if(current_num.toString().match(/^1/)){
          document.querySelectorAll('[data-index^="1"]').forEach(function(item){
            item.classList?.remove('pinned');
          })          
          document.querySelector(`[data-index="${current_num}"]`).classList.toggle('pinned');
        }
      }
      
      function actionAtIndex(next_num, direction){
        try {
          ({
            1000 : ()=>{
              console.log('지금하는 방송');
            },
            1003 : ()=>{
              console.log('편성표');
            },
            2000 : ()=>{
              // checkScroll();
              scrollRef.current.scrollTop =  0; 
            },
            3000 : ()=>{
              // checkScroll();
              scrollRef.current.scrollTop =  240; 
            }
          })[next_num]();
        } catch (error) {
          console.log(error);
        } 

        stopAllVideo();

        if(next_num.toString().match(/^3/)){
          carouselRef.current[next_num%1000].play();
          window.scrollWithDatumHType2(document.querySelector('.module_item_expand .carousel'), 3, 32, direction);
        }
      }

      function checkScroll(){
        const top_line = scrollRef.current.getBoundingClientRect().top;
        const bottom_line = window.innerHeight;
        const bottom_el_active = document.querySelector('.carousel__item.active').getBoundingClientRect().bottom;
        console.log(top_line);
        console.log(bottom_el_active);
        console.log(scrollRef.current.scrollTop );
        console.log( bottom_line + scrollRef.current.scrollTop  );
        if(bottom_el_active > bottom_line + scrollRef.current.scrollTop) {
          scrollRef.current.scrollTop =  bottom_el_active - bottom_line + 100;
          console.log(bottom_el_active - bottom_line + 100);
          // scrollRef.current.scrollTo({top: bottom_el_active - screen_height + 100, behavior: 'smooth' });
        } 
        // else if(bottom_el_active < )
      };

      function stopAllVideo(){
        videoRef.current.forEach((item)=>{
          if(!item.paused){
            item.load();
          }
        })
        carouselRef.current.forEach((item)=>{
          if(!item.paused){
            item.load();
          }
        })
      }

      const status = useScript('/function_module.js');
      const params = useParams();
      const location = useLocation();
      const keydownRef = useRef(null);
      const scrollRef = useRef(null);
      const videoRef = useRef([]);
      const carouselRef = useRef([]);

      useEffect(()=>{
        if(status === "ready") {
          console.log('useeffect');
          // console.log(keydownRef.current);
          // console.log(videoRef.current);
          // console.log(carouselRef.current);
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
            <div className="main_content_2" ref={scrollRef}>
                <div className="module_a2 module_play_top3">
                    <div className="wrapper_title">
                        <img src="/img/icon_home_2_1.png" alt="" /><span>지금 많이 보는 방송</span><span>TOP 3</span>
                    </div>
                    <div className="wrapper_content wrapper_controllable">
                        {video_infos.map((video_info, index) => <ModuleVideo  ref={elem => videoRef.current[video_info.index] = elem} key={video_info.index} index={video_info.index} src={video_info.src} logo={video_info.logo} price_original={video_info.price_original} price_discount={video_info.price_discount} price_final={video_info.price_final} title={video_info.title} />)}
                    </div>
                </div> 
                <div className="module_a2 module_item_expand">
                    <div className="wrapper_title">
                    <img src="/img/icon_home_2_2.png" alt="" /><span>지금하는 방송</span><span></span>
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
