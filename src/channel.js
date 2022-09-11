import './css/channel.css';
import {SectionLine} from './navigator';

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
  )
}

const dateArray = [
  {day: '오늘', date: '29', line:'y', focus:'focus'},
  {day: '내일', date: '30', line:'y'},
  {day: '수요일', date: '31', line:'y'},
  {day: '목요일', date: '1'}
]

function Channel() {
  return (
    <section className='channel_wrapper'>
      <div className='date_gnb'>
        {dateArray.map(element => (<DateNavigator day={element.day} date={element.date} line={element.line} focus={element.focus}/>))}
      </div>
      <div className='list_wrapper'></div>
    </section>
  );
}

export default Channel;
