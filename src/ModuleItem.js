import React from "react";

// const carousel_items = [
//     {index: 0, src: '/img/vidoe_sample.mp4', logo: '/img/logo_gs_shop_2.png', title:'바이브랩 5분 솔루션 울트라 프로…', thumbnail: '/img/img_item_164_1.png' },
//     {index: 1, src: '/img/vidoe_sample.mp4', logo: '/img/logo_lotte.png', title:'네이더스 베이직 스트라이프 S/S…', thumbnail: '/img/img_item_164_2.png' },
//     {index: 2, src: '/img/vidoe_sample.mp4', logo: '/img/logo_hyundai.png', title:'블랭코브 나일론 백팩DAYPACK…', thumbnail: '/img/img_item_164_3.png' },
//     {index: 3, src: '/img/vidoe_sample.mp4', logo: '/img/logo_nsshop.png', title:'오가프 노킹 로고 베이스볼 캡 네…', thumbnail: '/img/img_item_164_4.png' },
//     {index: 4, src: '/img/vidoe_sample.mp4', logo: '/img/logo_lotte_onetv.png', title:'토앤토 플립플랍 ZEROVITY BI…', thumbnail: '/img/img_item_164_5.png' },
//     {index: 5, src: '/img/vidoe_sample.mp4', logo: '/img/logo_gs_myshop.png', title:'히든 퍼퓸 스프레이 바디로션', thumbnail: '/img/img_item_164_6.png' },
//     {index: 6, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'소니 All New Design 노이즈…', thumbnail: '/img/img_item_164_7.png' },
//     {index: 7, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
//     {index: 8, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
//     {index: 9, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
//     {index: 10, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
//     {index: 11, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
//     {index: 12, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
//     {index: 13, src: '/img/vidoe_sample.mp4', logo: '/img/logo_cj_onstyle.png', title:'서플프레퍼레이션 언센티드 토너', thumbnail: '/img/img_item_164_8.png' },
// ]
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

function CarouselItem(props) {
    return (
        <li className="carousel__item controllable">
            <div className="logo">
                <img src={props.logo} alt="" />
            </div>
            <div className="img_item">
                <img src={props.poster} alt="" />
            </div>
            <div className="text">
                <p>
                    {props.title}
                </p>
            </div>
        </li>
    )
}

function ModuleItem (props) {
    return (
        <div className={`module_item ${props.type}`}>
            <ul className="carousel wrapper_controllable">
                {carousel_items.map(carousel_item => <CarouselItem key={carousel_item.index} logo={carousel_item.logo} poster={carousel_item.poster} title={carousel_item.title} />)}
            </ul>
        </div>
    );
}

export default ModuleItem;