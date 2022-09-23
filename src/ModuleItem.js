import React from "react";

const carousel_items = [
    {index: 1, src: '/img/vidoe_sample.mp4', logo: '/img/logo_gs_shop_2.png', title:'바이브랩 5분 솔루션 울트라 프로…', thumbnail: '/img/img_item_164_1.png' },
    {index: 2, src: '/img/vidoe_sample.mp4', logo: '/img/logo_lotte.png', title:'네이더스 베이직 스트라이프 S/S…', thumbnail: '/img/img_item_164_2.png' },
    {index: 3, src: '/img/vidoe_sample.mp4', logo: '/img/logo_hyundai.png', title:'블랭코브 나일론 백팩DAYPACK…', thumbnail: '/img/img_item_164_3.png' },
    {index: 4, src: '/img/vidoe_sample.mp4', logo: '/img/logo_nsshop.png', title:'오가프 노킹 로고 베이스볼 캡 네…', thumbnail: '/img/img_item_164_4.png' },
    {index: 5, src: '/img/vidoe_sample.mp4', logo: '/img/logo_lotte_onetv.png', title:'토앤토 플립플랍 ZEROVITY BI…', thumbnail: '/img/img_item_164_5.png' },
    {index: 6, src: '/img/vidoe_sample.mp4', logo: '/img/logo_gs_myshop.png', title:'히든 퍼퓸 스프레이 바디로션', thumbnail: '/img/img_item_164_6.png' },
    {index: 7, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'소니 All New Design 노이즈…', thumbnail: '/img/img_item_164_7.png' },
    {index: 8, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
    {index: 9, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
    {index: 10, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
    {index: 11, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
    {index: 12, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
    {index: 13, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
    {index: 14, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
]

function CarouselItem(props) {
    return (
        <>
            <li className="carousel__item controllable">
                    <div className="logo">
                        <img src={props.logo} alt="" />
                    </div>
                    <div className="img_item">
                        <img src={props.thumbnail} alt="" />
                    </div>
                    <div className="text">
                        <p>
                            {props.title}
                        </p>
                    </div>
                </li>
        </>
    )
}

function ModuleItem (props) {
    return (
        <div className={`module_item ${props.type}`}>
            <ul className="carousel wrapper_controllable">
                {carousel_items.map(carousel_item => <CarouselItem key={carousel_item.index} logo={carousel_item.logo} thumbnail={carousel_item.thumbnail} title={carousel_item.title} />)}
            </ul>
        </div>
    );
}

export default ModuleItem;