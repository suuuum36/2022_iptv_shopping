import './css/navigator.css';
import ImgMenu from './img/nav/ic_menu.svg';
import ImgSearch from './img/nav/ic_search.svg';

function FunctionButton (props) {
    return (
        <div className="navigator_left_btn">
            <img src={props.imgUrl}/>
        </div>
    );
}

function LabelButton (props) {
  return (
    <div className='navigator_right_btn'>
      {props.label}
    </div>
  );
}

function SectionLine (props) {
  return (
    <div className='section_line' style={{height: `${props.height}`}}></div>
  )
}

function Navigator (props) {
  return (
    <section className='menu_navigator'>
      <div className='left_gnb'>
          <FunctionButton imgUrl={ImgMenu}/>
          <FunctionButton imgUrl={ImgSearch}/>
      </div>
      <SectionLine height='60px'/>
      <div className='right_gnb'>
        <LabelButton label='지금하는 방송' />
        <LabelButton label='베스트' />
        <LabelButton label='U+ 추천' />
        <LabelButton label='홈쇼핑 편성표' />
        <LabelButton label='편성메뉴' />
      </div>  
    </section>
  );
}

// export default Navigator;
export {SectionLine, Navigator};
