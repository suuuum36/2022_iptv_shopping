import './css/channel.css';
import {SectionLine} from './navigator';
import channel_logo_1 from './img/channel/logo_1.png';
import channel_logo_2 from './img/channel/logo_2.png';
import channel_logo_3 from './img/channel/logo_3.png';
import favorite_btn from './img/channel/favorite.svg';
import bell_btn from './img/channel/bell.svg';

function DateNavigator ({day, date, line, focus}) {
  return (
    <div className='date_wrapper'>
      <div className={`date_focus_wrapper ${focus ? `${focus}`: ''}`}>
        <p>{day}</p>
        <p className={`date_text ${focus ? `${focus}`: ''}`}>
          <span>{date}</span>일
        </p>
        {focus=='focus' ? <div className='focus_line'></div> : null}
      </div>
      {line ? <div className='date_line'></div> : null}
    </div>
  );
}

class 

const FavoriteButton = (
  <div className='favorite_btn'>
    <img src={favorite_btn} />
    <p>관심 상품</p>
  </div>
);

const ReserveButton = (
  <div className='reserve_btn'>
    <img src={bell_btn} />
    <p>시청예약</p>
  </div>
);

function CompanyLogo ({url}) {
  return (<img src={url}/>);
}

function LiveTitle ({time}) {
  return (
    <div className='live_title'>
      <div className='live_label'>
        <span className='yoon_bold'>방송중</span>
      </div>
      <div className='live_text yoon_bold'>
        <span>방송 종료</span>
        <span className='red'>
          <span className='number'>{time}</span>
          <span>분 전</span>
        </span>
      </div>
    </div>
  );
}

function ProductCard({url, live, live_time, meridiem, time_1, time_2, name, favorite, reserve}) {
  return(
    <div className={`product_wrapper ${live? 'live':''}`}>
      <div className='product_img'>
        <img src={url}/>
        {favorite ? FavoriteButton : null}
      </div>
      <div className='product_info'>
        {live ? <LiveTitle time={live_time}/> : (
        <p className='product_time'>
          <span>{meridiem}</span>
          <span>
            <span className='number'>{time_1}</span>시
          </span>
          <span>
            <span className='number'>{time_2}</span>분
          </span>
        </p>
        )}
        <p className='product_name'>{name}</p>
        {reserve ? ReserveButton : null}
      </div>
    </div>
  );
}

//focus 항목에 active 혹은 focus 입력
const dateArray = [
  {day: '오늘', date: '29', line: true, focus:'focus'},
  {day: '내일', date: '30', line: true},
  {day: '수요일', date: '31', line: true},
  {day: '목요일', date: '1'}
]

const logoArray = [
  {img: channel_logo_1},
  {img: channel_logo_2},
  {img: channel_logo_3}
]

const prodcutArray1 = [
  {url: require('./img/channel/product_1.png'), favorite: true, live: true, live_time : '20', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 시…'},
  {url: require('./img/channel/product_2.png'), meridiem:'오전', time_1: '10', time_2: '30', name : '블랭코브 나일론 백팩 DAYPACK 26 올리브 그…'},
  {url: require('./img/channel/product_3.png'), reserve: true, meridiem:'오전', time_1: '11', time_2: '45', name : '소니 All New Design 노이즈캔슬링 헤드폰(WH…'},
  {url: require('./img/channel/product_1.png'), meridiem:'오후', time_1: '1', time_2: '30', name : 'GS SHOP 네번째 상품 GS SHOP 네번째 상품'}
]

const prodcutArray2 = [
  {url: require('./img/channel/product_4.png'), live: true, live_time : '120', name : '토앤토 플립플랍 ZEROVIT Y BIO 네추롤 타우페'},
  {url: require('./img/channel/product_5.png'), favorite:true, meridiem:'오전', time_1: '10', time_2: '00', name : '오가프 노킹 로고 베이스볼 캡 네이비'},
  {url: require('./img/channel/product_6.png'), favorite:true, reserve:true, meridiem:'오전', time_1: '11', time_2: '30', name : '토마스모어 TC2-PT02 인디고 스트링 팬츠'},
  {url: require('./img/channel/product_4.png'), meridiem:'오후', time_1: '12', time_2: '30', name : 'CJ ONSTYLE 네번째 상품 CJ ONSTYLE 네번…'}
]

const prodcutArray3 = [
  {url: require('./img/channel/product_7.png'), favorite: true, live: true, live_time : '20', name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이…'},
  {url: require('./img/channel/product_8.png'), meridiem:'오전', time_1: '10', time_2: '30', name : '블랭코브 나일론 백팩 DAYPACK 26 올리브 그레'},
  {url: require('./img/channel/product_9.png'), favorite:true, meridiem:'오전', time_1: '11', time_2: '45', name : '소니 All New Design 노이즈캔슬링 헤드폰'},
  {url: require('./img/channel/product_7.png'), meridiem:'오후', time_1: '1', time_2: '00', name : '롯데홈쇼핑 네번째 상품 롯데홈쇼핑 네번째 상품'}
]

function Channel() {
  return (
    <section className='channel_wrapper'>
      <div className='date_gnb'>
        {dateArray.map(element => (<DateNavigator day={element.day} date={element.date} line={element.line} focus={element.focus}/>))}
      </div>
      <div className='list_wrapper'>
        <div className='logo_wrapper'>
          {logoArray.map(element=>(<CompanyLogo url={element.img}/>))} 
        </div>
        <div className='product_list_wrapper'>
          <div className='product_block'>
            {prodcutArray1.map(element=>(<ProductCard url={element.url} live={element.live} live_time={element.live_time} meridiem={element.meridiem} time_1={element.time_1} time_2={element.time_2} name={element.name} favorite={element.favorite} reserve={element.reserve}/>))}              
          </div>
          <div className='block_line'></div>
          <div className='product_block'>
            {prodcutArray2.map(element=>(<ProductCard url={element.url} live={element.live} live_time={element.live_time} meridiem={element.meridiem} time_1={element.time_1} time_2={element.time_2} name={element.name} favorite={element.favorite} reserve={element.reserve}/>))}              
          </div>
          <div className='block_line'></div>
          <div className='product_block'>
            {prodcutArray3.map(element=>(<ProductCard url={element.url} live={element.live} live_time={element.live_time} meridiem={element.meridiem} time_1={element.time_1} time_2={element.time_2} name={element.name} favorite={element.favorite} reserve={element.reserve}/>))}              
          </div>
        </div>          
      </div>
    </section>
  );
}

export default Channel;