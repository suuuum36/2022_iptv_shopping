import { useAsync } from "react-async";

function CheckControllable() {
    document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
        const line_num = index + 4;
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
    const removeFocus = ()=>{
        document.querySelectorAll('.date_focus_wrapper').forEach((e)=>{e.classList.remove(('focus'))});
    }
    if(scaleY =='-1180') {
        removeFocus();
        const day2 = document.querySelector('.date_focus_wrapper[data-index="5000"]');
        day2.classList.add('focus');
    } else if (scaleY == '-2360') {
        removeFocus();
        const day2 = document.querySelector('.date_focus_wrapper[data-index="6000"]');
        day2.classList.add('focus');
    } else if (scaleY == '-3540') {
        removeFocus();
        const day2 = document.querySelector('.date_focus_wrapper[data-index="7000"]');
        day2.classList.add('focus');
    }
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
                if(remainder==1 || remainder==5 || remainder==9) {
                    if(key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-1 + 'px'})`;
                    }
                }
                else if (remainder==2 || remainder==6 || remainder==10) {
                    if(key == 'ArrowUp') {
                        productWrapper.style.transform = `translateY(${move*0 + 'px'})`;
                    } else if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-2 + 'px'})`;
                    }
                }
                else if(remainder==3 || remainder==7 || remainder==11) {
                    if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-4-140 + 'px'})`;
                    }
                }
                break;
            case '5' :
                if(remainder==1 || remainder==5 || remainder==9) {
                    if(key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-5-140 + 'px'})`;
                    }
                }
                else if (remainder==2 || remainder==6 || remainder==10) {
                    if(key == 'ArrowUp') {
                        productWrapper.style.transform = `translateY(${move*-4-140 + 'px'})`;
                    } else if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-6-140 + 'px'})`;
                    }
                }
                else if(remainder==3 || remainder==7 || remainder==11) {
                    if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-8-280 + 'px'})`;
                    }
                }
                break;
            case '6' :
                if(remainder==1 || remainder==5 || remainder==9) {
                    if(key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-9-280 + 'px'})`;
                    }
                }
                else if (remainder==2 || remainder==6 || remainder==10) {
                    if(key == 'ArrowUp') {
                        productWrapper.style.transform = `translateY(${move*-8-280 + 'px'})`;
                    } else if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-10-280 + 'px'})`;
                    }
                }
                else if(remainder==3 || remainder==7 || remainder==11) {
                    if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-12-420 + 'px'})`;
                    }
                }
                break;  
            case '7' :
                if(remainder==1 || remainder==5 || remainder==9) {
                    if(key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-13-420 + 'px'})`;
                    }
                }
                else if (remainder==2 || remainder==6 || remainder==10) {
                    if(key == 'ArrowUp') {
                        productWrapper.style.transform = `translateY(${move*-12-420 + 'px'})`;
                    } else if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-14-420 + 'px'})`;
                    }
                }
                else if(remainder==3 || remainder==7 || remainder==11) {
                    if (key == 'ArrowDown') {
                        productWrapper.style.transform = `translateY(${move*-16-560 + 'px'})`;
                        // productWrapper.style.transition = "0ms";
                        // productWrapper.style.transform = `translateY(${move*0 + 'px'})`;
                    }
                }
                break;           
        }
          
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
        // if(isFinite(event.key)){
        //     digit_array.push(event.key);
        //     console.log(digit_array.length);
        //     if(digit_array.length <12) {
        //         document.querySelector('#popup_digit').value = digit_array.toString().replace(/,/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, "");
        //     }

        //     console.log(digit_array.toString().replace(/,/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3"));

        // } else  {
        //     action_key[event.key]();
        // }
        action_key[event.key]();
        MoveWrapper(num, event.key, prodcut_section);
        DayWrapper();
        // console.log(event.key);
        // console.log(current_index);
        // console.log(document.querySelector(`[data-index="${current_index}"]`));
    });
    
    function changeActive(index_num){
        if(document.querySelector(`[data-index="${index_num}"]`) !== null ){
            // console.log(document.querySelector(`[data-index="${index_num}"]`));
            document.querySelector('.controllable.active').classList.remove('active');
            document.querySelector(`[data-index="${index_num}"]`).classList.add('active');
            // actionByMovement(parseInt(index_num/1000));
        }
    }

    // function actionByMovement(line_num){
    //     const current_page = document.querySelector('body').getAttribute('data-page');
    //     ({
    //         'now_play' : {
    //             1 : ()=>{},
    //             2 : ()=>{},
    //             3 : ()=>{
    //                 console.log('here!!!');
    //             },
    //         }
    //     })[current_page][line_num]();
    // }

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
        // await checkControllable();
        // await activeFirstIndex();
    }

     function clearActiveClass(){
        document.querySelectorAll('.active').forEach((item)=>{
            item.classList.remove('active');
        });
     }

    // function activeFirstIndex(){
    //     document.querySelector('[data-index="1000"]').classList.add('active');
    // }

    // function checkControllable(){
    //     document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
    //         const line_num = index + 4;
    //         item.querySelectorAll('.controllable').forEach((item, index)=>{
    //             const controllable_index = line_num * 1000 + index;
    //             item.setAttribute('data-index', controllable_index);
    //         });
    //     })
    // }
    
    function getUrlParameter(sParam) {
        const sPageURL = window.location.search.substring(1);
        const sURLVariables = sPageURL.split('&');
        let sParameterName;
    
        for (let i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                console.log('sParam is ' + sParam);
                console.log('sParameterName is ' + sParameterName[1]);
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return true;
        // return 0;
    };
};

export {CheckControllable, RemoteEffect};