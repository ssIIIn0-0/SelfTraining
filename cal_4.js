

// 운동기록및 삭제


// 각 날짜에 맞는 기록을 업데이트
// 현재 있는 요소를 삭제 후,  업데이트된 memo를 이용해 날짜에 맞는 기록을 out
function reshowingList(){
  keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
  if(todoList[keyValue] === undefined){
      inputList.textContent = '';
      todoList[keyValue] = [];
      const $divs = document.querySelectorAll('#input-list > div');
      $divs.forEach(function(e){
        e.remove();
      });
      const $btns = document.querySelectorAll('#input-list > button');
      $btns.forEach(function(e1){
        e1.remove();
      });
  }else if(todoList[keyValue].length ===0){
      inputList.textContent = "";
      const $divs = document.querySelectorAll('#input-list > div');
      $divs.forEach(function(e){
        e.remove();
      });
      const $btns = document.querySelectorAll('#input-list > button');
      $btns.forEach(function(e1){
        e1.remove();
      });
  }else{
      const $divs = document.querySelectorAll('#input-list > div');
      $divs.forEach(function(e){
        e.remove();
      });
      const $btns = document.querySelectorAll('#input-list > button');
      $btns.forEach(function(e1){
        e1.remove();
      });
      var $div = document.createElement('div');
      for(var i = 0; i < todoList[keyValue].length; i++){
          var $div = document.createElement('div');
          $div.textContent = todoList[keyValue][i];
          var $btn = document.createElement('button');
          $btn.setAttribute('type', 'button'); 
          $btn.setAttribute('id', 'del-ata');
          $btn.setAttribute('id', dataCnt+keyValue);
          $btn.setAttribute('class', 'del-data');
          $btn.textContent = delText;
          inputList.appendChild($div);
          inputList.appendChild($btn);
          $div.addEventListener('click',checkList);
          $btn.addEventListener('click',deleteTodo);
          inputBox.value = '';
          function deleteTodo(){
              $div.remove();
              $btn.remove();
          }
      }
  }

}
var inputBox = document.getElementById('input-box');
var inputDate = document.getElementById('input-data');
var inputList = document.getElementById('input-list');
var delText = 'X';
inputDate.addEventListener('click',addTodoList);
var dataCnt = 1;
var keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
let todoList = [];
todoList[keyValue] = [];

// 기록으로 저장할 내용을 받은 list, 버튼태그로 삭제버튼생성
function addTodoList(){
  var $div = document.createElement('div');
  $div.textContent = inputBox.value;
  var $btn = document.createElement('button');
  $btn.setAttribute('type', 'button'); 
  $btn.setAttribute('id', 'del-ata');
  $btn.setAttribute('id', dataCnt+keyValue);
  $btn.setAttribute('class', "del-data");
  $btn.textContent = delText;
  inputList.appendChild($div);
  inputList.appendChild($btn);
  todoList[keyValue].push(inputBox.value);
  dataCnt++;
  inputBox.value = '';
  $div.addEventListener('click',checkList);
  $btn.addEventListener('click',deleteTodo);
  function deleteTodo(){
      $div.remove();
      $btn.remove();
  }
}
console.log(keyValue);
function checkList(e){
  e.currentTarget.classList.add('checked');
}

