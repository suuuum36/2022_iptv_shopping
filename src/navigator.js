import React, { useEffect } from 'react';
import './css/navigator.css';
import ImgMenu from './img/nav/ic_menu.svg';
import ImgSearch from './img/nav/ic_search.svg';
import ImgNavBtn1 from './img/nav/ic_nav_btn_1.svg';

function FunctionButton ({name, imgUrl}) {
    return (
        <div className="navigator_left_btn">
            <img src={imgUrl} alt={name}/>
        </div>
    );
}

function LabelButton ({label, imgUrl, focus, index}) {
  return (
    <div className={`navigator_right_btn controllable ${focus ? `${focus}` : ''}`} data-index={index}>
      {imgUrl ? <img src={imgUrl} alt={label}/> : null}
      <p>{label}</p>
    </div>
  );
}

function SectionLine ({height}) {
  return (
    <div className='section_line' style={{height: `${height}`}}></div>
  )
}

const FunctionArray = [
  {id:'func_btn_1', name:'메뉴', imgUrl: ImgMenu},
  {id:'func_btn_2', name:'검색', imgUrl: ImgSearch}
]

const labelArray = [
  {id:'1000', name: '지금하는 방송', img: ImgNavBtn1},
  {id:'1001', name: '베스트'},
  {id:'1002', name: 'U+ 추천'},
  {id:'1003', name: '홈쇼핑 편성표'},
  {id:'1004', name: '편성메뉴'}
];

function Navigator (props) {
  switch (props['props']) {
    case 'channel' :
      labelArray[3]['focus'] = 'active focus';
      break;
    case 'channel_menu' :
      labelArray[4]['focus'] = 'active focus';
      break;
  }

  let current_page = window.location.pathname;
  current_page = current_page.replace('/', '');

  switch (current_page) {
    case 'channel' :
      labelArray[3]['focus'] = 'active focus';
      break;
    case 'menu' :
      labelArray[4]['focus'] = 'active focus';
      break;
  }

  return (
    <section className='menu_navigator'>
      <div className='left_gnb'>
          {FunctionArray.map(element=>(<FunctionButton key={element.id} name={element.name} imgUrl={element.imgUrl}/>))}
      </div>
      <SectionLine height='60px'/>
      <div className='right_gnb'>
        {labelArray.map(element=>(<LabelButton key={element.id} label={element.name} imgUrl={element.img} focus={element.focus} index={element.id}/>))}
      </div>  
    </section>
  );
}

// export default Navigator;
export {SectionLine, Navigator};
