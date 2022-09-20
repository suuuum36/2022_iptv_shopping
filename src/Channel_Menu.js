import React, { Fragment } from 'react';
import './css/channel.css';
import './css/channel_menu.css';
import {Navigator} from './Navigator';
import {CheckControllable, RemoteEffect} from './function_remote';
import {Channel, FavoriteButton, PageIndex, bell_btn, channel_logo_1, channel_logo_2, channel_logo_3} from './Channel';

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

const prodcutArray3 = [
    {url: require('./img/channel/product_7.png'), url_logo: channel_logo_1, favorite: true, live_status: '방송중', live_date: '08/26', live_day:'(금)', live_time : '12:50', live_color:'live', reserve: true, name : '네이더스 베이직 스트라이프 S/S 티셔츠 추가 경…', sale_num:'30%', price:'42,000', tag:'1+1'}
]


function ChannelMenu () {
return (
    <Fragment>
        <Navigator />
        <section className="channel_wrapper channel_menu_wrapper">
            {prodcutArray3.map(element=>(
                <ProductCard 
                url={element.url} url_logo={element.url_logo} favorite={element.favorite}
                live_status={element.live_status} live_date={element.live_date} live_day={element.live_day} live_time={element.live_time} live_color={element.live_color}
                reserve={element.reserve} name={element.name} sale_num={element.sale_num} price={element.price} tag={element.tag}/>
            ))}   
        </section>   
        <PageIndex />
    </Fragment>
)
}
export {ChannelMenu}