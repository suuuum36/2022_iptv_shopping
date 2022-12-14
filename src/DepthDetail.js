import React from "react";
import './css/depth2.css';

function DepthDetail() {
  return (
    <article className="detail">
        <section>
            <div className="title">
                <span>상품 정보</span>
            </div>
            <hr />
            <div className="content">
                <div className="content__left">
                    <div className="module_info">
                        <div className="product">
                            <div className="product__img">
                                <img src="img/img_detail_product_1.png" alt="" />
                            </div>
                            <div className="set_info">
                                <div className="top">
                                    <div className="badge_left">
                                        <span>방송중</span>
                                    </div>
                                    <div className="text_1">
                                        <span>방송종료</span>
                                        <span><span className="num">30</span>분 전</span>
                                    </div>
                                </div>
                                <div className="middle">
                                    <div className="logo">
                                        <img src="img/logo_gs_shop_2.png" alt="" />
                                    </div>
                                    <div className="text_item">
                                        <p>바이브랩 5분 솔루션 울트라 프로틴 리페어 헤어팩 3종 세트 1+1</p>
                                    </div>
                                    <div className="module_text_price">
                                        <span>50%</span><span><span>29,900</span>원</span><span>60,000원</span> 
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="tag">
                                        <span>지난방송 매진</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="etc">
                            <div className="module_info_etc">
                                <span>배송 정보</span>
                                <span>무료 배송, 무료 반품</span>
                            </div>
                            <div className="module_info_etc">
                                <span>ARS 번호</span>
                                <span>080-0000-0000</span>
                            </div>
                            <div className="module_info_etc">
                                <span>상품 코드</span>
                                <span>00000000000</span>
                            </div>
                            <div className="module_info_etc">
                                <span>카드 할인</span>
                                <span>신한카드 7% 청구할인 무이자 36개월 </span>
                            </div>
                            <div className="module_info_etc">
                                <span>고객 리뷰</span>
                                <span>4.8/5.0 (0,000건)</span>
                            </div>
                        </div>
                        <div className="terms_img">
                            <img src="img/img_terms_1.png" alt="" />
                        </div>
                    </div>
                    <div className="module_detail_buttons">
                        <div className="set_info">
                            <div className="bottom wrapper_controllable">
                                <div className="button controllable">
                                    <div className="icon">
                                        <img src="img/ic_popup_close_nor.png" alt="" className="nor" />
                                        <img src="img/ic_popup_close_foc.png" alt="" className="foc" />
                                    </div>
                                    <span>닫기</span>
                                    <p>
                                        해당 상품화면을 닫고 이전화면으로 돌아갑니다.
                                    </p>
                                </div>
                                <div className="button controllable">
                                    <div className="icon">
                                        <img src="img/ic_popup_reserve_nor.png" alt="" className="nor" />
                                        <img src="img/ic_popup_reserve_foc.png" alt="" className="foc" />
                                    </div>
                                    <span>시청 예약</span>
                                    <p>
                                        상품을 놓치지 않고 시청할 수 있도록 방송 시작 시간 <br/>
                                        <span>1분 전</span> TV화면에서 알려드립니다.
                                    </p>
                                </div>
                                <div className="button controllable active">
                                    <div className="icon">
                                        <img src="img/ic_popup_mobile_nor.png" alt="" className="nor" />
                                        <img src="img/ic_popup_mobile_foc.png" alt="" className="foc" />
                                    </div>
                                    <span>모바일 주소 전송</span>
                                    <p>
                                        휴대폰에서 상품을 주문할 수 있도록 입력하신<br />
                                        전화번호로 구매 주소(URL)를 <span>문자메시지</span>로 전송해 드립니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content__right">
                    <div className="top">
                        <div className="banner">
                            <img src="img/img_detail_banner_v_1.png" alt="" />
                        </div>
                        <div className="btn_top">
                            <img src="img/btn_popup_top_nor.png" alt="" />
                        </div>
                    </div>
                    <div className="bottom">
                        <p>
                            위 상품 설명은 홈쇼핑 사에서 제공받은 정보이며 상품 <br />
                            정보 외 이벤트/혜택 정보는 일부 사실과 다를 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </article>
  );
}

export default DepthDetail;