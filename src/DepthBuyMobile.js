import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useScript from "./hooks/useScript"

function DepthBuyMobile() {
    function actionByEnter(index_num){
        ({
            "2000" : ()=>{
                window.location.href = '/home/'+params.id;
            },
            "2001" : ()=>{
                // 팝업 동작
            },
        })[index_num]();
    }

    const status = useScript('/function_module.js');
    const digit_array = [];
    const params = useParams();
    useEffect(()=>{
        if(status === "ready") {
            window.defaultSetting();
            document.addEventListener('keydown', (event)=>{
                const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
                const action_key =  {
                  "ArrowUp" : ()=>{
                    window.changeActive(parseInt(parseInt(current_index)/1000)*1000 - 1000);
                  },
                  "ArrowRight" : ()=>{
                    window.changeActive(parseInt(current_index) + 1);
                  },
                  "ArrowDown" : ()=>{
                    window.changeActive(parseInt(parseInt(current_index)/1000)*1000 + 1000);
                  },
                  "ArrowLeft" : ()=>{
                    window.changeActive(parseInt(current_index) - 1);
                  },
                  "Enter" : ()=>{
                    actionByEnter(current_index);
                  },
                };
                
                if(isFinite(event.key)){
                    if(document.querySelector('.input_text').classList.contains('active')){
                        console.log(document.querySelector('.input_text'));
                        digit_array.push(event.key);
                        console.log(digit_array.length);
                        if(digit_array.length <12) {
                          document.querySelector('#popup_digit').value = digit_array.toString().replace(/,/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, "");
                        }
                        console.log(digit_array.toString().replace(/,/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3"));
                    }
                } else  {
                  action_key[event.key]();
                }
              });
        }
    })
    require('./reset.css');

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
                        <div className="input_text controllable">
                            <input type="" name="" id="popup_digit" placeholder="휴대폰 번호를 입력해주세요." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        </div>
                        <div className="input_checkbox controllable">
                            <input type="checkbox" name="" id="popup_checkbox"/>
                            <label htmlFor="popup_checkbox" className="box"></label>
                            <label htmlFor="popup_checkbox" className="text">번호 기억</label>
                        </div>
                    </div>
                    <div className="module_buttons wrapper_controllable">
                        <button className="btn_popup controllable">취소</button>
                        <hr />
                        <button className="btn_popup controllable">입력 완료</button>
                    </div>
                </div>
            </section>
        </article>
    );
}

export default DepthBuyMobile;
