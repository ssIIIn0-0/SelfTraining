// 버튼을 누르면 홈 또는 캘린더 페이지로 이동


function goto_cal(form){
    if(form.id.value!=""){
        window.open('cal.html')
    }
}

function goto_home(form){
    if(form.id.value!=""){
        window.open('index.html')
    }
}