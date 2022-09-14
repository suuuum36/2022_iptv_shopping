import React from "react";
const dt = new Date();
const dt_month = dt.getMonth().toString().padStart(2,'0');
const dt_date = dt.getDate().toString().padStart(2,'0');
const dt_day = (()=>{
    switch (dt.getDay()) {
        case 0:
            return '일'
        case 1:
            return '월'
        case 2:
            return '화'
        case 3:
            return '수'
        case 4:
            return '목'
        case 5:
            return '금'
        case 6:
            return '토'
        default:
            break;
    }
})();
const dt_hour = (()=>{
    const hour = dt.getHours();
    if(hour > 12) {
        const tr_hour = (hour - 12).toString().padStart(2,'0');
        return ['오후', tr_hour]
    } else {
        return ['오전', hour]
    }
})();
const dt_minuate = dt.getMinutes().toString().padStart(2,'0');

function ModuleTime(){
    return (
        <div className="display_time">
            <img src="/img/bg_keynotice_gr.png" alt="" />
            <span className="time"><span className="num">{dt_month}/{dt_date}</span><span className="kor">&nbsp;({dt_day})&nbsp;{dt_hour[0]}</span><span className="num">&nbsp;{dt_hour[1]}:{dt_minuate}</span></span>
        </div>
    )
}

export default ModuleTime;