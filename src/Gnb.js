import React from "react"

const labelArray = [
    {}
];

function GnbMenu(...args) {

}

function Gnb(){
    return (
        <div className="gnb">
            <div className="left_set">
                <div className="menu_icon menu_icon--my">
                    <img src="img/ic_mymenu.png" alt="" />
                </div>
                <div className="menu_icon menu_icon--search">
                    <img src="img/ic_search.png" alt="" />
                </div>
            </div>
            <hr />
            <div className="right_set wrapper_controllable">
                <div className="menu_text menu_text--now controllable active">
                    <div className="indicator">
                        <img src="img/ic_indicator_live_nor.png" alt="" className="nor" />
                        <img src="img/ic_indicator_live.png" alt="" className="foc" />
                    </div>
                    <span>지금하는 방송</span>
                </div>
                <div className="menu_text menu_text--best controllable">
                    {/* <!-- <div className="indicator"></div> --> */}
                    <span>베스트</span>
                </div>
                <div className="menu_text menu_text--recommend controllable">
                    {/* <!-- <div className="indicator"></div> --> */}
                    <span>U+추천</span>
                </div>
                <div className="menu_text menu_text--schedule controllable">
                    {/* <!-- <div className="indicator"></div> --> */}
                    <span>홈쇼핑편성표</span>
                </div>
                <div className="menu_text menu_text--organize controllable">
                    {/* <!-- <div className="indicator"></div> --> */}
                    <span>편성메뉴</span>
                </div>
            </div>
        </div>
    )
}

export default Gnb;