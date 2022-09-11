import './css/channel.css';
import {SectionLine} from './navigator';
import channel_logo_1 from './img/channel/logo_1.png';
import channel_logo_2 from './img/channel/logo_2.png';
import channel_logo_3 from './img/channel/logo_3.png';
import favorite_btn from './img/channel/favorite.svg';
import bell_btn from './img/channel/bell.svg';
import product_1 from './img/channel/product_1.png';

function DateNavigator ({day, date, line, focus}) {
  return (
    <div className='date_wrapper'>
      <div className={`date_focus_wrapper ${focus ? `${focus}`: ''}`}>
        <p>{day}</p>
        <p className='date_text'><span>{date}</span> 일</p>
        {focus=='focus' ? <div className='focus_line'></div> : null}
      </div>
      {line ? <div className='date_line'></div> : null}
    </div>
  );
}

const FavoriteButton = (
  <div className='favorite_btn'>
    <img src={favorite_btn} />
    <p>관심 상품</p>
  </div>
);

const ReserveButton = (
  <div>
    <img src={bell_btn} />
    <p>시청예약</p>
  </div>
);

function CompanyLogo ({url}) {
  return (
    <div className='logo_wrapper'>
      <img src={url} />
    </div>
  );
}

function LiveTitle ({time}) {
  return (
    <div className='live_title'>
      <div className='live_label'>방송중</div>
      <div className='live_text'>
        방송종료
        <span className='number red'>{time}</span>
        <span className='red'>분 전</span>
        </div>
    </div>
  );
}

function ProductCard({url, live, live_time, time_1, time_2, name, favorite, reserve}) {
  return(
    <div className='product_wrapper'>
      <div className='product_img'>
        <img src={url}/>
        {favorite ? FavoriteButton : null}
      </div>
      <div className='product_info'>
        {live ? <LiveTitle time={live_time}/> : (
        <p>
          오전 
          <span className='number'>{time_1}</span>시
          <span className='number'>{time_2}</span>분
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

const prodcutArray = [
  {url: product_1, live: true, live_time : 20, name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 시…', favorite: true},
  {url: product_1, name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 시…'},
  {url: product_1, live: true, live_time : 20, name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 시…', favorite: true},
  {url: product_1, live: true, live_time : 20, name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 시…', favorite: true},
  {url: product_1, live: true, live_time : 20, name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 시…', favorite: true},
  {url: product_1, live: true, live_time : 20, name : '네이더스 베이직 스트라이프 S/S 티셔츠 네이비 시…', favorite: true}
]

function Channel() {
  return (
    <section className='channel_wrapper'>
      <div className='date_gnb'>
        {dateArray.map(element => (<DateNavigator day={element.day} date={element.date} line={element.line} focus={element.focus}/>))}
      </div>
      <div className='list_wrapper'>
        <CompanyLogo url={channel_logo_1}/>
        <div className='product_list_wrapper'>
          {prodcutArray.map(element=>(<ProductCard url={element.url} live={element.live} live_time={element.live_time} time_1={element.time_1} time_2={element.time_2} name={element.name} favorite={element.favorite} reserve={element.reserve}/>))}          
        </div>
      </div>
    </section>
  );
}

export default Channel;
