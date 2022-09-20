import React from "react";

const video_infos = [
    {index: 1, src: '/img/vidoe_sample.mp4#t=0.1', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'aaaaaa'},
    {index: 2, src: '/img/vidoe_sample.mp4#t=1.1', logo: '/img/logo_lotte.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'bbbbbb' },
    {index: 3, src: '/img/vidoe_sample.mp4#t=2.2', logo: '/img/logo_hyundai.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'cccccc'},
];

const carousel_items = [
    {index: 1, src: '/img/vidoe_sample.mp4', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'aaaaaa', poster: '/img/img_item_sample_440_1.png' },
    {index: 2, src: '/img/vidoe_sample.mp4', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'aaaaaa', poster: '/img/img_item_sample_440_1.png' },
    {index: 3, src: '/img/vidoe_sample.mp4', logo: '/img/logo_gs_shop_2.png', price_original: '75,400', price_discount: '30%', price_final:'58,000', title:'aaaaaa', poster: '/img/img_item_sample_440_1.png' },
]


function ModuleVideo(props){
    console.log(props);
    return (
        <>
            <div className="wrapper_set_play controllable">
                <div className="logo">
                    <img src={props.logo} alt="" />
                </div>
                <div className="set_play">
                    <video src={props.src} loop={true} playsInline={true} muted={true}></video>
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
}

function ModuleCarouselItem(props) {
    return(
        <>
            <li className="carousel__item controllable">
                <div className="img">
                    <video src={props.src} poster={props.poster}></video>
                </div>
                <div className="layer_info">
                    <div className="logo">
                        <img src="/img/logo_hyundai.png" alt="" />
                    </div>
                    <div className="text_1">
                        <span>[런칭가 99,900원] 김서룡 시그니처 오간자 봄버 재킷</span>
                    </div>
                    <div className="text_2">
                        <span>20%</span><span><span>99,900</span>원</span>
                    </div>
                </div>
            </li>
        </>
    )
}

function SetNowPlay_2() {
  return (
    <div className="main_content_2">
        <div className="module_a2 module_play_top3">
            <div className="wrapper_title">
                <span>많이 보는 방송</span><span>TOP 3</span>
            </div>
            <div className="wrapper_content wrapper_controllable">
                {video_infos.map(video_info => <ModuleVideo index={video_info.index} src={video_info.src} logo={video_info.logo} price_original={video_info.price_original} price_discount={video_info.price_discount} price_final={video_info.price_final} title={video_info.title} />)}
            </div>
        </div> 
        <div className="module_a2 module_item_expand">
            <div className="wrapper_title">
                <span>의류 베스트 상품</span><span></span>
            </div>
            <ul className="carousel wrapper_controllable">
                {/* <li className="carousel__item controllable">
                    <div className="img">
                        <img src="/img/img_item_sample_440_1.png" alt="" />
                    </div>
                    <div className="layer_info">
                        <div className="logo">
                            <img src="/img/logo_hyundai.png" alt="" />
                        </div>
                        <div className="text_1">
                            <span>[런칭가 99,900원] 김서룡 시그니처 오간자 봄버 재킷</span>
                        </div>
                        <div className="text_2">
                            <span>20%</span><span><span>99,900</span>원</span>
                        </div>
                    </div>
                </li> */}
                {carousel_items.map(carousel_item => <ModuleCarouselItem index={carousel_item.index} src={carousel_item.src} logo={carousel_item.logo} price_original={carousel_item.price_original} price_discount={carousel_item.price_discount} price_final={carousel_item.price_final} title={carousel_item.title} poster={carousel_item.poster} />)}
            </ul>
        </div>
    </div>
  );
}

export default SetNowPlay_2;
