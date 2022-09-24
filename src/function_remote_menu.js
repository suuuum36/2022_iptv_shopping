import { useAsync } from "react-async";

function CheckControllable() {
    document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
        const line_num = index+13;
        item.querySelectorAll('.controllable').forEach((item, index)=>{
            const controllable_index = line_num * 1000 + index;
            item.setAttribute('data-index', controllable_index);
            item.setAttribute('product-section', line_num-4);
        });
    });
}

function MoveWrapper(num, key, section){
    const productWrapper = document.querySelector('.channel_menu_wrapper');
    productWrapper.style.transition = '0.5s all';
    let remainder = num % 1000;
    let move = 260;
    
    let x = productWrapper.style.transform;
    x = x.replace(')', '').split(',')[1];
    let moveX = '-330px';

    function MoveLogic (n, k) {
        if(remainder==1 || remainder==5) {
            if(key == 'ArrowDown') {
                productWrapper.style.transform = `translate(0px, ${move*-(n)-k + 'px'})`;
            }
        }
        else if (remainder==2 || remainder==6) {
            if(key == 'ArrowUp') {
                productWrapper.style.transform = `translate(0px, ${move*-(n-1)-k + 'px'})`;
            } else if (key == 'ArrowDown') {
                productWrapper.style.transform = `translate(0px, ${move*-(n+1)-k + 'px'})`;
            }
        }
        else if(remainder==3 || remainder==7) {
            if (key == 'ArrowDown') {
                productWrapper.style.transform = `translate(0px, ${move*-(n+3)-(k+140) + 'px'})`;
            }
        }
        if (key == 'ArrowRight') {
            if (4<=remainder && remainder <=7) {
                if(x==''){x= '0px'}
                productWrapper.style.transform = `translate(${moveX}, ${x})`;      
            }
        }
        if (key == 'ArrowLeft') {
            if (8<=remainder && remainder <=11) {
                if(x==''){x= '0px'}
                console.log(`translate(0px, ${x})`);
                productWrapper.style.transform = `translate(0px, ${x})`;
            }
        }
        if (key == 'ArrowDown') {
            if (remainder == 9) {
                productWrapper.style.transform = `translate(${moveX}, ${move*-(n)-k + 'px'})`;
            }
            else if(remainder == 10) {
                productWrapper.style.transform = `translate(${moveX}, ${move*-(n+1)-k + 'px'})`;
            }
            else if (remainder == 11) {
                productWrapper.style.transform = `translate(${moveX}, ${move*-(n+3)-(k+140) + 'px'})`;
            }
        }
        if (key == 'ArrowUp') {
            if(remainder == 10) {
                productWrapper.style.transform = `translate(${moveX}, ${move*-(n-1)-k + 'px'})`;
            }
            if(remainder == 0 || remainder == 4 || remainder == 8) {
                productWrapper.style.transform = `translate(0px, ${x})`;
            }
        }
    }
    if (num >= 8000) {
        let defaultNum = 140;
        switch (section) {
            case '4':
                MoveLogic(1, 0);
                break;
            case '5' :
                MoveLogic(5, defaultNum);
                break;
            case '6' :
                MoveLogic(9, defaultNum*2);
                break;  
            case '7' :
                MoveLogic(13, defaultNum*3);
                break;           
        }          
    } 
    else if (4000<= num && num <= 7000) {
        let defaultY = 1180;
        function MoveDay(data, k) {
            const day = document.querySelector(`.date_focus_wrapper[data-index='${data}']`);
            if(day.classList.contains('active')) {
                productWrapper.style.transform = `translate(0px, ${defaultY*k*-1 + 'px'})`;
            }
        }
        for(let i=0; i<4; i++) {MoveDay(4000+(1000*i), i);}
    }
}

function FindClosestActive () {
    let focusedSection = document.querySelector('.date_focus_wrapper.focus').getAttribute('product-section');
    focusedSection = focusedSection * 1 + 4;
    let closestProduct = document.querySelectorAll(`.product_wrapper[product-section='${focusedSection}']`);
    closestProduct.forEach((e)=>{
        let num = e.getAttribute('data-index');
        if(num % 1000 == 0) {changeActive(num);}
    });
    console.log('HI');
}

function ActiveMove (){
    let element = document.querySelectorAll('.controllable.active');
    let element2 = document.querySelectorAll('.controllable.fake');
    function checkMove (element){
        element.forEach((element)=>{
            let children = [...element.parentElement.children];
            children = children.filter(child => child !== element);
            children = children.filter(child => child.classList.contains('live'));
        
            if (element.classList.contains('live')) {
                element.classList.remove('moved');
                children.forEach((e)=> {e.classList.add('moved');});
            } else {
                element.classList.remove('moved');
                children.forEach((e)=> {e.classList.remove('moved');});
                document.querySelectorAll('.product_wrapper').forEach((e)=>{
                    e.classList.remove('moved');
                })
            }
        });
    }
    checkMove(element);
    if(element2 != null) {
        checkMove(element2);
    }        
}

function changeActive(index_num){
    if(document.querySelector(`[data-index="${index_num}"]`) !== null ){
        document.querySelector('.controllable.active').classList.remove('active');
        document.querySelector(`[data-index="${index_num}"]`).classList.add('active');
    }
}

function Bubble () {
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
                ActionByEnter(current_index);
            },
        };
        action_key[event.key]();
        MoveWrapper(num, event.key, prodcut_section);
        ActiveMove();
        Bubble();
    });

    function ActionByEnter(index_num){
        // const current_page = document.querySelector('#root').getAttribute('data-page');
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