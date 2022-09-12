(async ()=>{
    // 페이지 전환
    // 인덱스 부여
    // 인덱스 이동
    // 초기 세팅 함수
    
    changePageSetting();
    document.addEventListener('keydown', (event)=>{
        const current_index = document.querySelector('.controllable.active').getAttribute('data-index');
        ({
            "ArrowUp" : ()=>{
                changeActive(parseInt(parseInt(current_index)/1000)*1000 - 1000);
            },
            "ArrowRight" : ()=>{
                changeActive(parseInt(current_index) + 1);
            },
            "ArrowDown" : ()=>{
                changeActive(parseInt(parseInt(current_index)/1000)*1000 + 1000);
            },
            "ArrowLeft" : ()=>{
                changeActive(parseInt(current_index) - 1);
            },
            "Enter" : ()=>{},
        })[event.key]();
        console.log(event.key);
        console.log(current_index);
        console.log(document.querySelector(`[data-index="${current_index}"]`));
    });
    
    function changeActive(index_num){
        if(document.querySelector(`[data-index="${index_num}"]`) !== null ){
            console.log(document.querySelector(`[data-index="${index_num}"]`));
            document.querySelector('.controllable.active').classList.remove('active');
            document.querySelector(`[data-index="${index_num}"]`).classList.add('active');
            console.log(typeof(index_num));
            actionByMovement(parseInt(index_num/1000));
        }
    }

    function actionByMovement(line_num){
        const current_page = document.querySelector('body').getAttribute('data-page');
        ({
            'now_play' : {
                1 : ()=>{},
                2 : ()=>{},
                3 : ()=>{
                    console.log('here!!!');
                },
            }
        })[current_page][line_num]();
    }

    function changePageSetting(){
        ({
            'now_play' : async ()=>{
            },
        }
        )[document.querySelector('body').getAttribute('data-page')]();
        console.log(document.querySelector('body').getAttribute('data-page'));
        defaultSetting();
    }

    async function defaultSetting(){
        await clearActiveClass();
        await checkControllable();
        await activeFirstIndex();
    }

     function clearActiveClass(){
        document.querySelectorAll('.active').forEach((item)=>{
            item.classList.remove('active');
        })
     }

    function activeFirstIndex(){
        document.querySelector('[data-index="1000"]').classList.add('active');
    }


    function checkControllable(){
        document.querySelectorAll('.wrapper_controllable').forEach((item, index)=>{
            const line_num = index + 1;
            item.querySelectorAll('.controllable').forEach((item, index)=>{
                const controllable_index = line_num * 1000 + index;
                item.setAttribute('data-index', controllable_index);
            })
        })
    }
    
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
})();