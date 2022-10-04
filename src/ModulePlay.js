import React, { useEffect, useRef } from "react"


const Module_play = React.forwardRef((props, ref)=>{
    console.log(ref);
    // const videoRef = useRef(null);
    const videoRef = ref;
    const progressRef = useRef(null);
    const isListenerAttached = useRef(false);
    function timeUpdate(){
        const progress = 100 * videoRef.current.currentTime / videoRef.current.duration;
        progressRef.current.style.width = `${progress}%`;
    }
    useEffect(()=>{
        if(!isListenerAttached.current){
            videoRef.current.addEventListener('timeupdate', timeUpdate);
            isListenerAttached.current = true;
            console.log('excuted');
            return;
        }
        return ()=>{
            videoRef.current.removeEventListener('timeupdate', timeUpdate);
        }
    })
    return (
        // <div className="module_play">
        <div className={`module_play ${props.type}`}>
            <div className="set_play">
                <video src="/img/video_sample.mp4" ref={videoRef} autoPlay={true} loop={true} playsInline={true} muted={true}></video>
                <div className="set_progress">
                    <div className="progress" ref={progressRef}></div>
                </div>
            </div>
            <div className="set_info">
                <div className="top">
                    <div className="badge_left">
                        <span>방송중</span>
                    </div>
                    <div className="text_1">
                        <span>방송종료</span>
                        <span><span className="num">30</span>분 전</span>
                    </div>
                    <div className="badge_right">
                        <img src="/img/badge_reservation.png" alt="" />
                    </div>
                </div>
                <div className="middle">
                    <div className="logo">
                        <img src="/img/logo_gs_shop_1.png" alt="" />
                    </div>
                    <div className="text_item">
                        <p>바이브랩 5분 솔루션 울트라 프로틴 리페어 헤어팩 3종 세트 1+1</p>
                    </div>
                    <div className="module_text_price">
                        <span>50%</span><span><span>29,900</span>원</span><span></span> 
                    </div>
                </div>
                <div className="bottom wrapper_controllable">
                    <div className="button controllable active">
                        <div className="icon">
                            <img src="/img/ic_mobile_withtext.png" alt="" className="nor" />
                            <img src="/img/ic_mobile_withtext_foc.png" alt="" className="foc" />
                        </div>
                        <span>모바일 구매</span>
                    </div>
                    <div className="button controllable">
                        <div className="icon">
                            <img src="/img/ic_search_withtext.png" alt="" className="nor" />
                            <img src="/img/ic_search_withtext_foc.png" alt="" className="foc" />
                        </div>
                        <span>상세 정보</span>
                    </div>
                </div>
            </div>
            <div className="set_carousel">
                <div className="carousel">
                    <div className="carousel__item">
                        <img src="/img/img_banner_1.png" alt="" />
                    </div>
                </div>
                <div className="wrapper_indicator">
                    <div className="indicator now"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
            </div>
        </div>
    )
})

export default Module_play;