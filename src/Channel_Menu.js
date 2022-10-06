import React, { Fragment } from 'react';
import './css/channel.css';
import './css/channel_menu.css';
import logo_gs from './img/channel_menu/logo_gs.svg';
import logo_lotte from './img/channel_menu/logo_lotte.svg';
import logo_hyundai from './img/channel_menu/logo_hyundai.svg';
import logo_cj from './img/channel_menu/logo_cj.svg';
import logo_home from './img/channel_menu/logo_home.svg';
import bubble from './img/channel_menu/bubble.svg';
import {ReactComponent as ArrowTop} from './img/channel_menu/arrow_top.svg';
import {Navigator} from './Navigator';
import {CheckControllable, RemoteEffect} from './function_remote_menu.js';
import {Channel, FavoriteButton, PageIndex, bell_btn} from './Channel';

const ReserveButton = (
    <div className='reserve_btn'>
        <img src={bell_btn} />
    </div>
);

function LiveTitle ({status, date, day, time, reserve, color}) {
    return (
        <div className='live_title'>
            <div className={`live_label ${color}`}>
            <span className='yoon_bold'>{status}</span>
            </div>
            <div className='live_text yoon_bold'>
                <span className='number'>{date}</span>
                <span>{day}</span>
                <span className='number'>{time}</span>
                {reserve ? ReserveButton : null}
            </div>
        </div>
    );
}

function Tag ({tag}) {
    return (
        <div className='product_tag'>{tag}</div>
    );
}

function ProductCard({url, url_logo, favorite, live_status, live_date, live_day, live_time, live_color, reserve, name, sale_num, price, tag}) {
    return(
        <div className={'product_wrapper controllable'}>
            <div className='product_img'>
                <img src={url}/>
                {favorite ? FavoriteButton : null}
            </div>
            <div className='product_info'>
                <LiveTitle status={live_status} date={live_date} day={live_day} time={live_time} reserve={reserve} color={live_color}/>
                <img className="logo" src={url_logo}></img>
                <p className='product_name'>{name}</p>
                <div className='price_wrapper'>
                    {sale_num ? <div className="sale_text">{sale_num}</div> :null}
                    <div className='price'>
                        <span className='number'>{price}</span>
                        <span className='unit'>원</span>
                    </div>
                </div>
                {tag ? <Tag tag={tag} /> : null}
            </div>
        </div>
    );
}

const productArray_1 = [
    {url: require('./img/channel_menu/product_1.png'), url_logo: logo_gs, favorite: true, live_status: '방송중', live_time : '12:50', live_color:'live', reserve: true, name : '네이더스 베이직 스트라이프 S/S 티셔츠 추가 경…', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_2.png'), url_logo: logo_cj, live_status: '방송 종료', live_color:'finished', name : '[런칭가 99,9000원] 김서룡 시그니처 오간자 봄버 재킷', price:'69,000'},
    {url: require('./img/channel_menu/product_3.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 추가 경...', sale_num:'30%', price:'42,000', tag:'MD 추천'},
    {url: require('./img/channel_menu/product_1.png'), url_logo: logo_gs, favorite: true, live_status: '방송중', live_time : '12:50', live_color:'live', reserve: true, name : '네이더스 베이직 스트라이프 S/S 티셔츠 추가 경…', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_2.png'), url_logo: logo_cj, live_status: '방송 종료', live_color:'finished', name : '[런칭가 99,9000원] 김서룡 시그니처 오간자 봄버 재킷', price:'69,000'},
    {url: require('./img/channel_menu/product_3.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 추가 경...', sale_num:'30%', price:'42,000', tag:'MD 추천'},
    {url: require('./img/channel_menu/product_1.png'), url_logo: logo_gs, favorite: true, live_status: '방송중', live_time : '12:50', live_color:'live', reserve: true, name : '네이더스 베이직 스트라이프 S/S 티셔츠 추가 경…', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_2.png'), url_logo: logo_cj, live_status: '방송 종료', live_color:'finished', name : '[런칭가 99,9000원] 김서룡 시그니처 오간자 봄버 재킷', price:'69,000'},
    {url: require('./img/channel_menu/product_3.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 추가 경...', sale_num:'30%', price:'42,000', tag:'MD 추천'},
    {url: require('./img/channel_menu/product_1.png'), url_logo: logo_gs, favorite: true, live_status: '방송중', live_time : '12:50', live_color:'live', reserve: true, name : '네이더스 베이직 스트라이프 S/S 티셔츠 추가 경…', sale_num:'30%', price:'42,000', tag:'1+1'}
];

const productArray_2 = [
    {url: require('./img/channel_menu/product_4.png'), url_logo: logo_hyundai, live_status: '오늘', live_time : '8:15', live_color:'today', name : '[오트리] 고메넛츠 니치 100봉(봉당 30g)+쇼핑백 2장', price:'139,800', tag:'무료 배송'},
    {url: require('./img/channel_menu/product_5.png'), url_logo: logo_lotte, live_status: '예정', live_color:'reserved', live_date: '08/26', live_day: '(금)', live_time : '19:49', name : '스마트카라 음식물처리기(모던그레이_PCS400SA)', sale_num:'10%', price:'773,100', tag:'무이자'},
    {url: require('./img/channel_menu/product_6.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 추가…', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_4.png'), url_logo: logo_hyundai, live_status: '오늘', live_time : '8:15', live_color:'today', name : '[오트리] 고메넛츠 니치 100봉(봉당 30g)+쇼핑백 2장', price:'139,800', tag:'무료 배송'},
    {url: require('./img/channel_menu/product_5.png'), url_logo: logo_lotte, live_status: '예정', live_color:'reserved', live_date: '08/26', live_day: '(금)', live_time : '19:49', name : '스마트카라 음식물처리기(모던그레이_PCS400SA)', sale_num:'10%', price:'773,100', tag:'무이자'},
    {url: require('./img/channel_menu/product_6.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 추가…', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_4.png'), url_logo: logo_hyundai, live_status: '오늘', live_time : '8:15', live_color:'today', name : '[오트리] 고메넛츠 니치 100봉(봉당 30g)+쇼핑백 2장', price:'139,800', tag:'무료 배송'},
    {url: require('./img/channel_menu/product_5.png'), url_logo: logo_lotte, live_status: '예정', live_color:'reserved', live_date: '08/26', live_day: '(금)', live_time : '19:49', name : '스마트카라 음식물처리기(모던그레이_PCS400SA)', sale_num:'10%', price:'773,100', tag:'무이자'},
    {url: require('./img/channel_menu/product_6.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 추가…', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_4.png'), url_logo: logo_hyundai, live_status: '오늘', live_time : '8:15', live_color:'today', name : '[오트리] 고메넛츠 니치 100봉(봉당 30g)+쇼핑백 2장', price:'139,800', tag:'무료 배송'}
];

const productArray_3 = [
    {url: require('./img/channel_menu/product_7.png'), url_logo: logo_cj, live_status: '모레', live_time : '20:30', live_color:'tomorrow', name : '푸마 여성 스포츠 로고 티쳐츠 그레이', price:'59,800', tag:'무료 배송'},
    {url: require('./img/channel_menu/product_8.png'), url_logo: logo_home, live_status: '예정', live_color:'reserved', live_date: '08/27', live_day: '(토)', live_time : '07:40', name : '타미힐피거 스포츠웨어 티셔츠 창고 정리 세일', sale_num:'40%', price:'22,900', tag:'무이자'},
    {url: require('./img/channel_menu/product_9.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '카파 남성용 스포츠 웨어 할인전', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_7.png'), url_logo: logo_cj, live_status: '모레', live_time : '20:30', live_color:'tomorrow', name : '푸마 여성 스포츠 로고 티쳐츠 그레이', price:'59,800', tag:'무료 배송'},
    {url: require('./img/channel_menu/product_8.png'), url_logo: logo_home, live_status: '예정', live_color:'reserved', live_date: '08/27', live_day: '(토)', live_time : '07:40', name : '타미힐피거 스포츠웨어 티셔츠 창고 정리 세일', sale_num:'40%', price:'22,900', tag:'무이자'},
    {url: require('./img/channel_menu/product_9.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '카파 남성용 스포츠 웨어 할인전', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_7.png'), url_logo: logo_cj, live_status: '모레', live_time : '20:30', live_color:'tomorrow', name : '푸마 여성 스포츠 로고 티쳐츠 그레이', price:'59,800', tag:'무료 배송'},
    {url: require('./img/channel_menu/product_8.png'), url_logo: logo_home, live_status: '예정', live_color:'reserved', live_date: '08/27', live_day: '(토)', live_time : '07:40', name : '타미힐피거 스포츠웨어 티셔츠 창고 정리 세일', sale_num:'40%', price:'22,900', tag:'무이자'},
    {url: require('./img/channel_menu/product_9.png'), url_logo: logo_gs, live_status: '내일', live_color:'tomorrow', name : '카파 남성용 스포츠 웨어 할인전', sale_num:'30%', price:'42,000', tag:'1+1'},
    {url: require('./img/channel_menu/product_7.png'), url_logo: logo_cj, live_status: '모레', live_time : '20:30', live_color:'tomorrow', name : '푸마 여성 스포츠 로고 티쳐츠 그레이', price:'59,800', tag:'무료 배송'}

];

function ProductSection ({title, product}) {
    return(
        <div className='section_wrapper'>
            <div className='section_header'>
                <p className='section_title'>{title}</p>
                <div className='product_index'>
                    <span className='current_index'>01</span>
                    <span className='total_index'>/10</span>
                </div>
            </div>
            <div className='product_list wrapper_controllable'>
                {product.map(element=>(
                    <ProductCard 
                    url={element.url} url_logo={element.url_logo} favorite={element.favorite}
                    live_status={element.live_status} live_date={element.live_date} live_day={element.live_day} live_time={element.live_time} live_color={element.live_color}
                    reserve={element.reserve} name={element.name} sale_num={element.sale_num} price={element.price} tag={element.tag} />
                ))}                
            </div>
        </div>
    );
}

const sectionArray = [
    {title: '여름 옷 고민 해결', product: productArray_1},
    {title: '최저가 할인!', product: productArray_2},
    {title: '스포츠 웨어 특집', product: productArray_3}
];

function Bubble () {
    if(document.querySelector('.product_wrapper.controllable').classList.contains('active')) {
        document.querySelector('.bubble').classList.add('active');    
    } else {
        document.querySelector('.bubble').classList.remove('active');    
    }
}

class ChannelMenu extends React.Component {
    componentDidMount() {
        CheckControllable();
    }
    render () {
        RemoteEffect();
        return (
            <Fragment>
                <Navigator />
                <section className="channel_menu_wrapper">
                    <div className='channel_menu_list'>
                        <object className="bubble" data={bubble}></object>
                        {sectionArray.map(element=>(
                            <ProductSection title={element.title} product={element.product}/>
                        ))}
                        <div className='wrapper_controllable'>
                            <div className='btn_top controllable'>
                                <ArrowTop fill="#A9A9A9" style={{transition: '0.5s all'}}/>
                                <p>맨위로</p>                
                            </div>                            
                        </div>
                    </div>
                </section> 
                <PageIndex />
            </Fragment>
        )
    }
}
export {ChannelMenu}