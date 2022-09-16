import React from "react";

function SetNowPlay_2() {
  return (
    <>
        <div className="module_a2 module_play_top3">
            <div className="wrapper_title">
                <span>많이 보는 방송</span><span>TOP 3</span>
            </div>
            <div className="wrapper_content">
                <div className="wrapper_set_play">
                    <div className="logo">
                        <img src="/img/logo_gs_shop_2.png" alt="" />
                    </div>
                    <div className="set_play">
                        <video src="/img/vidoe_sample.mp4" autoPlay={true} loop={true} playsInline={true} muted={true}></video>
                        <div className="layer_info">
                            <div className="top">
                                <span>1</span>
                            </div>
                            <div className="wrapper_text">
                                <div className="text_1">
                                    <span>75,400</span>
                                </div>
                                <div className="text_2">
                                    <span>30%</span><span>58,000<span>원</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="module_a2 module_item_expand">
            <div className="wrapper_title">
                <span>의류 베스트 상품</span><span></span>
            </div>
            <ul className="carousel wrapper_controllable">
                <li className="carousel__item controllable">
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
                </li>
            </ul>
        </div>
    </>
  );
}

export default SetNowPlay_2;
