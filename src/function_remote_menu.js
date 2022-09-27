function CheckControllable() {
    document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
        const line_num = index+13;
        item.querySelectorAll('.controllable').forEach((item, index)=>{
            const controllable_index = line_num * 1000 + index;
            item.setAttribute('data-index', controllable_index);
        });
    });
    document.querySelectorAll ('.product_index').forEach((item, index)=>{
        item.setAttribute('data-index', index+13);
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

    function MoveLogic (n, k) {
        if(share === 16) {
            if (key == 'Enter') {
                productWrapper.style.transform = `initial`;
            }
        }
        if (key == 'ArrowRight') {
            if (0<= remainder && remainder < 8 && num != 16000) {
                current_active.parentElement.style.transform = `translate(${moveX * (remainder+1) * -1 + 'px'}, 0px)`;      
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

function IndexShow () {
    let product_index = document.querySelectorAll('.product_index');
    product_index.forEach((e, index, array)=>{
        let childWrapper =[... e.parentElement.parentElement.children[1].childNodes];
        let activeArray = childWrapper.filter(t => t.classList.contains('active'));
        if (activeArray.length == 1) {
            e.style.opacity = 1;
            let index = e.firstElementChild;
            for (let i=0; i<childWrapper.length; i++) {
                if (childWrapper[i].classList.contains('active')) {
                    if(i<9) {index.innerText = '0' + (i + 1);}
                    else {index.innerText = i+1;}
                } 
            }
        } else {
            e.style.opacity = 0;
        }
        if (document.querySelector('.navigator_right_btn[data-index="1004"]').classList.contains('active')) {
            if(index == 0) {e.style.opacity = 1;}
        }
        else if (document.querySelector('.btn_top.controllable').classList.contains('active')) {
            if(index == array.length -1) {e.style.opacity = 1;}
        }
    });
}

function FindFirstActive (num, key) {
    let share = parseInt(num/1000);
    function getIndex (calc) {
        let next_index = document.querySelector(`.product_index[data-index='${calc}']`);
        next_index = next_index.firstElementChild.innerText;
        next_index = (parseInt(next_index)-1) + (calc * 1000);
        changeActive(next_index);
    }
    switch(key) {
        case 'ArrowDown':
            getIndex(share+1);
            break;
        case 'ArrowUp':
            getIndex(share-1);
            break;
        case 'Enter':
            getIndex(share);
            break;
    }
}

function RemoteEffect () {
    clearActiveClass();
    document.addEventListener('keydown', (event)=>{
        const current_active = document.querySelector('.controllable.active');
        const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
        let prodcut_section = document.querySelector('.controllable.active').getAttribute('product-section');
        let num = current_index * 1;
        let num_share = parseInt(num/1000);
        const action_key =  {
            "ArrowUp" : ()=>{
                if (num_share === 13) {
                    changeActive (1004);
                }
                else if (num_share === 14 || num_share === 15) {
                    FindFirstActive(num, event.key);
                } else if (num_share === 16) {
                    FindFirstActive(15000, 'Enter');
                }
            },
            "ArrowRight" : ()=>{
                changeActive(num + 1);
            },
            "ArrowDown" : ()=>{
                if(num === 1004){
                    FindFirstActive(13000, 'Enter');
                }
                else if (num_share === 13 || num_share === 14) {
                    FindFirstActive(num, event.key);
                }
                else if (num_share === 15) {
                    changeActive(16000);
                }
            },
            "ArrowLeft" : ()=>{
                changeActive(num - 1);
                if(num === 1004) {
                    window.location.href = './channel';
                }
            },
            "Enter" : ()=>{
                if(num_share === 16) {
                    FindFirstActive(13000, event.key);
                } else {
                    ActionByEnter(current_index);
                }
            },
        };
        action_key[event.key]();
        MoveWrapper(num, event.key, prodcut_section, current_active);
        Bubble();
        IndexShow();
    });

    function ActionByEnter(index_num){
        let current_page = window.location.pathname;
        current_page = current_page.replace('/', '');
        if(current_page == 'channel' || current_page == 'menu') {
            if(8000<= index_num || index_num <= 12011) {
                window.location.href = './detail';
            }          
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