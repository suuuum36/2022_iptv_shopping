import './css/navigator.css';
import ImgMenu from './img/nav/ic_menu.svg';
import ImgSearch from './img/nav/ic_search.svg';
import ImgNavBtn1 from './img/nav/ic_nav_btn_1.svg';

function FunctionButton (props) {
    return (
        <div className="navigator_left_btn">
            <img src={props.imgUrl}/>
        </div>
    );
}

function LabelButton ({label, imgUrl, focus}) {
  return (
    <div className={`navigator_right_btn ${focus ? `${focus}` : ''}`}>
      {imgUrl ? <img src={imgUrl} alt={label}/> : null}
      <p>{label}</p>
    </div>
  );
}

function SectionLine (props) {
  return (
    <div className='section_line' style={{height: `${props.height}`}}></div>
  )
}

const labelArray = [
  {id:1, name: '지금하는 방송', img:ImgNavBtn1},
  {id:2, name: '베스트'},
  {id:3, name: 'U+ 추천'},
  {id:4, name: '홈쇼핑 편성표', focus:'active'},
  {id:5, name: '편성메뉴'}
];

function Navigator (props) {
  return (
    <section className='menu_navigator'>
      <div className='left_gnb'>
          <FunctionButton imgUrl={ImgMenu}/>
          <FunctionButton imgUrl={ImgSearch}/>
      </div>
      <SectionLine height='60px'/>
      <div className='right_gnb'>
        {labelArray.map(label=>(<LabelButton key={label.id} label={label.name} imgUrl={label.img} focus={label.focus}/>))}
      </div>  
    </section>
  );
}

// export default Navigator;
export {SectionLine, Navigator};
