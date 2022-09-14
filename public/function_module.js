function changeActive(index_num_next){
    if(document.querySelector(`[data-index="${index_num_next}"]`) !== null ){
        console.log(document.querySelector(`[data-index="${index_num_next}"]`));
        document.querySelector('.controllable.active').classList.remove('active');
        document.querySelector(`[data-index="${index_num_next}"]`).classList.add('active');
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
    // ({
    //     'now_play' : async ()=>{
    //     },
    // }
    // )[document.querySelector('.App').getAttribute('data-page')]();
    // console.log(document.querySelector('.App').getAttribute('data-page'));
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

function scrollWithDatumH(target_el, datum_value, direction){
    console.log("target_el = ", target_el);
    console.log("direction = ", direction);
    const counts = target_el.childNodes.length;
    const num_nth = parseInt(document.querySelector('.active').getAttribute('data-index'))%1000;
    const move_value = target_el.childNodes[0].getBoundingClientRect().width;
    let point_start;
    let point_end;
    let total_move_distance;
    if(direction === 'ArrowRight') {
        point_start = datum_value - 1;
        point_end = counts - datum_value + 1;
        total_move_distance = (move_value+56)*(num_nth-datum_value + 1) - 56;
    } else if (direction === "ArrowLeft") {
        point_start = datum_value - 2;
        point_end = counts - datum_value;
        total_move_distance = (move_value+56)*(num_nth-datum_value + 1);
    }
    console.log("datum_value - 1 = ", datum_value -2);
    console.log("num_nth = ", num_nth);
    console.log("counts - datum_value = ", counts - datum_value + 1);
    console.log("total_move_distance = ", total_move_distance);
    if(point_start < num_nth && num_nth < point_end) {
        target_el.style.transform = `translate(-${total_move_distance}px)`;
    }
}