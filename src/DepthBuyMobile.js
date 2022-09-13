import React from "react";

function DepthBuyMobile() {
  return (
    <article className="popup">
        <section>
            <div className="wrapper_popup">
                <div className="title"><span>상품 정보 전송</span></div>
                <hr />
                <div className="text_1">
                    <span>상품 구매 주소를 받을 휴대폰 번호를 입력 해주세요.</span>
                </div>
                <div className="module_input wrapper_controllable">
                    <div className="input_text controllable active">
                        <input type="" name="" id="popup_digit" placeholder="휴대폰 번호를 입력해주세요." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                    </div>
                    <div className="input_checkbox controllable active">
                        <input type="checkbox" name="" id="popup_checkbox"/>
                        <label htmlFor="popup_checkbox" className="box"></label>
                        <label htmlFor="popup_checkbox" className="text">번호 기억</label>
                    </div>
                </div>
                <div className="module_buttons wrapper_controllable">
                    <button className="btn_popup controllable active">취소</button>
                    <hr />
                    <button className="btn_popup controllable">입력 완료</button>
                </div>
            </div>
        </section>
    </article>
  );
}

export default DepthBuyMobile;
