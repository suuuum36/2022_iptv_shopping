function CheckControllable() {
    document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
        const line_num = index+13;
        item.querySelectorAll('.controllable').forEach((item, index)=>{
            const controllable_index = line_num * 1000 + index;
            item.setAttribute('data-index', controllable_index);
            // item.setAttribute('product-section', line_num-4);
        });
    });
}

function MoveWrapper(num, key, section, current_active){
    const productWrapper = document.querySelector('.channel_menu_list');
    productWrapper.style.transition = '0.5s all';
    let remainder = num % 1000;
    let share = parseInt(num/1000);

    let x = current_active.parentElement.style.transform;
    x = x.replace(')', '').split(',')[1];
    let moveX = 730;

    console.log(remainder);

    function MoveLogic (n, k) {
        if(share === 16) {
            if (key == 'Enter') {
                productWrapper.style.transform = `initial`;
            }
        }
        if (key == 'ArrowRight') {
            if (1<= remainder && remainder < 9) {
                current_active.parentElement.style.transform = `translate(${moveX * remainder * -1 + 'px'}, 0px)`;      
            }
        }
        if (key == 'ArrowLeft') {
            if (1<= remainder && remainder < 9) {
                current_active.parentElement.style.transform = `translate(${moveX * (remainder-1) * -1 + 'px'}, 0px)`;      
            }
        }
        if (key == 'ArrowDown') {
            if (share === 13) {
                productWrapper.style.transform = `translate(0px, -170px)`;
            }
            else if(share === 14) {
                productWrapper.style.transform = `translate(0px, -530px)`;
            }
        }
        if (key == 'ArrowUp') {
            if(share === 14) {
                productWrapper.style.transform = `translate(0px, 0px)`;
            }
            if(share === 15) {
                productWrapper.style.transform = `translate(0px, -170px)`;
            }
        }
    }
    if (num >= 13000) {
        // let defaultNum = 140;
        // switch (section) {
        //     case '4':
        //         MoveLogic(1, 0);
        //         break;
        //     case '5' :
        //         MoveLogic(5, defaultNum);
        //         break;
        //     case '6' :
        //         MoveLogic(9, defaultNum*2);
        //         break;  
        //     case '7' :
        //         MoveLogic(13, defaultNum*3);
        //         break;           
        // }
        MoveLogic(1,0);    
    } 
}

function changeActive(index_num){
    if(document.querySelector(`[data-index="${index_num}"]`) !== null ){
        document.querySelector('.controllable.active').classList.remove('active');
        document.querySelector(`[data-index="${index_num}"]`).classList.add('active');
    }
}

function Bubble() {
    document.querySelectorAll('.product_wrapper.controllable').forEach((item, index)=>{
        if(index==0) {
            if(item.classList.contains('active')) {
                document.querySelector('.bubble').classList.add('active');   
            } else {
                document.querySelector('.bubble').classList.remove('active');   
            }
        }
    });
}

function RemoteEffect () {
    const digit_array = [];
    clearActiveClass();
    document.addEventListener('keydown', (event)=>{
        const current_active = document.querySelector('.controllable.active');
        const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
        let num = current_index * 1;
        let num_0 = parseInt(num/1000)*1000;
        let prodcut_section = document.querySelector('.controllable.active').getAttribute('product-section');
        const action_key =  {
            "ArrowUp" : ()=>{
                if (parseInt(num/1000) === 13) {
                    changeActive (1004);
                } else {
                    changeActive(num-1000);
                }
            },
            "ArrowRight" : ()=>{
                changeActive(num + 1);
            },
            "ArrowDown" : ()=>{
                if(num === 1004){
                    changeActive(13000);
                }
                else if (parseInt(num/1000) === 15) {
                    changeActive(16000);
                }
                else {changeActive(num+1000);}
            },
            "ArrowLeft" : ()=>{
                changeActive(num - 1);
            },
            "Enter" : ()=>{
                if(parseInt(num/1000) === 16) {
                    changeActive(13000);
                } else {
                    ActionByEnter(current_index);
                }
            },
        };
        action_key[event.key]();
        MoveWrapper(num, event.key, prodcut_section, current_active);
        Bubble();
    });

    function ActionByEnter(index_num){
        let current_page = window.location.pathname;
        current_page = current_page.replace('/', '');
        if(current_page == 'channel') {
            const go_detail = {
                "channel" : () =>{
                    if(13000<= index_num || index_num < 16000) {
                        window.location.href = './detail';
                    }
                }
            };
            go_detail[current_page]();            
        } else {
            ({
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
    }

    function clearActiveClass() {
        document.querySelectorAll('.active').forEach((item)=>{
            item.classList.remove('active');
        });
    }
};

export {CheckControllable, RemoteEffect};