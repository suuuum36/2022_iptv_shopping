import { useAsync } from "react-async";

function CheckControllable() {
    document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
        const line_num = index+4;
        item.querySelectorAll('.controllable').forEach((item, index)=>{
            const controllable_index = line_num * 1000 + index;
            item.setAttribute('data-index', controllable_index);
            item.setAttribute('product-section', line_num-4);
        });
    });
}

function DayWrapper () {
    let scaleY = document.querySelector('.product_day').style.transform;
    scaleY = scaleY.replace('translateY(', '').replace('px)', '');
    let defaultY = 1180;
    let defaultNum = 4000;
    const removeFocus = ()=>{
        document.querySelectorAll('.date_focus_wrapper').forEach((e)=>{e.classList.remove(('focus'))});
    }
    function DayFocus (data) {
        removeFocus();
        const day = document.querySelector(`.date_focus_wrapper[data-index='${data}']`);
        day.classList.add('focus');
    }

    function MoveDay(n) {
        if(scaleY == defaultY*n*-1) {DayFocus(defaultNum+(1000*n))}
    }
    
    for(let i=0; i<4; i++) {MoveDay(i);}
}

function MoveWrapper(num, key, section){
    const productWrapper = document.querySelector('.product_day');
    productWrapper.style.transition = '0.3s';
    let remainder = num % 1000;
    let move = 260;

    function MoveLogic (n, k) {
        if(remainder==1 || remainder==5 || remainder==9) {
            if(key == 'ArrowDown') {
                productWrapper.style.transform = `translateY(${move*-(n)-k + 'px'})`;
            }
        }
        else if (remainder==2 || remainder==6 || remainder==10) {
            if(key == 'ArrowUp') {
                productWrapper.style.transform = `translateY(${move*-(n-1)-k + 'px'})`;
            } else if (key == 'ArrowDown') {
                productWrapper.style.transform = `translateY(${move*-(n+1)-k + 'px'})`;
            }
        }
        else if(remainder==3 || remainder==7 || remainder==11) {
            if (key == 'ArrowDown') {
                productWrapper.style.transform = `translateY(${move*-(n+3)-(k+140) + 'px'})`;
            }
        }
    }
    if (num >= 8000) {
        switch (section) {
            case '4':
                MoveLogic(1, 0);
                break;
            case '5' :
                MoveLogic(5, 140);
                break;
            case '6' :
                MoveLogic(9, 280);
                break;  
            case '7' :
                MoveLogic(13, 420);
                break;           
        }          
    } 
    else if (4000<= num && num <= 7000) {
        let defaultY = 1180;
        function MoveDay(data, k) {
            const day = document.querySelector(`.date_focus_wrapper[data-index='${data}']`);
            if(day.classList.contains('active')) {
                productWrapper.style.transform = `translateY(${defaultY*k*-1 + 'px'})`;
            }
        }
        for(let i=0; i<4; i++) {MoveDay(4000+(1000*i), i);}
    }
}

const RemoteEffect = async () => {
    const digit_array = [];
    changePageSetting();
    document.addEventListener('keydown', (event)=>{
        const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
        let num = current_index * 1;
        let num_0 = parseInt(num/1000)*1000;
        let prodcut_section = document.querySelector('.controllable.active').getAttribute('product-section');
        const action_key =  {
            "ArrowUp" : ()=>{
                if(num >= 8000) {
                    if(num % 4 === 0) {changeActive(1003);}
                    else {changeActive(num - 1);}
                }
                else if (num == 4000){changeActive(7000)}
                else {changeActive(num-1000);}
            },
            "ArrowRight" : ()=>{
                if(num >= 8000) {changeActive(num + 4);}
                else if (4000<= num && num <= 7000) {changeActive(num + 4000);}
                else {changeActive(num + 1);}
            },
            "ArrowDown" : ()=>{
                if(num === 1003){changeActive(num_0 + 7000);}
                else if (num >= 8000 ) {
                    if(num % 1000 === 3) {
                        if (num === 11003) {changeActive(8000);}
                        else {changeActive(num_0 + 1000)};
                    }
                    else if (num % 1000 === 7) {changeActive(num_0 + 1000 + 4);}
                    else if (num % 1000 === 11) {changeActive(num_0 + 1000 + 8);}
                    else {changeActive(num + 1)};
                }
                else if (num === 7000){changeActive(4000)}
                else {changeActive(num+1000);}
            },
            "ArrowLeft" : ()=>{
                if(num >= 8000) {
                    if(num%1000 < 4) {changeActive(num_0 - 4000);}
                    else {changeActive(num - 4)};
                } else {changeActive(num - 1);}
            },
            "Enter" : ()=>{
                actionByEnter(current_index);
            },
        };
        action_key[event.key]();
        MoveWrapper(num, event.key, prodcut_section);
        DayWrapper();
    });
    
    function changeActive(index_num){
        if(document.querySelector(`[data-index="${index_num}"]`) !== null ){
            // console.log(document.querySelector(`[data-index="${index_num}"]`));
            document.querySelector('.controllable.active').classList.remove('active');
            document.querySelector(`[data-index="${index_num}"]`).classList.add('active');
        }
    }

    function actionByEnter(index_num){
        const current_page = document.querySelector('.App').getAttribute('data-page');
        console.log(current_page);
        ({
            'now_play': {
                "2000" : ()=>{
                    window.location.href = './buymobile';
                },
                "2001" : ()=>{
                    window.location.href = './detail';
                }
            },
            'detail':{
                "1000" : ()=>{
                    document.querySelector('.App').setAttribute('data-page','now_play');
                    window.location.href = './';
                },
                "1002" : ()=>{
                    document.querySelector('.App').setAttribute('data-page','buymobile');
                    window.location.href = './buymobile';
                },
            },
            'buymobile' : {
                "1000" : ()=>{
                    document.querySelector('.App').setAttribute('data-page','now_play');
                    window.location.href = './';
                },
            }
        })[current_page][index_num]();
    }

    function changePageSetting(){
        defaultSetting();
    }

    async function defaultSetting(){
        await clearActiveClass();
    }

     function clearActiveClass(){
        document.querySelectorAll('.active').forEach((item)=>{
            item.classList.remove('active');
        });
     }
};

export {CheckControllable, RemoteEffect};