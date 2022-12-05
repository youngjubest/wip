// 모달 창 기능
for(let i=0;i<35;i++) {
$(function(){ 

  $(".item"+i).click(function(){
    $("#m"+i).fadeIn();
  });
  
  $(".close").click(function(){
    $("#m"+i).fadeOut();
  });
  
});

}


// form창 나타내기 및 숨기기
function toggleForm() {
  
  // 토글 할 버튼 선택 (btn1)
  const btn = document.getElementById("myButton");
  const form = document.getElementById("form");

  // form 숨기기 (display: none)
  if(form.style.display !== 'none') {
    form.style.display = 'none';
    btn.value="show!";
  }
  // form 보이기 
  else {
      form.style.display = "";
      btn.style.display = 'none';
  }
  
}

function closeBtn() {
  const btn = document.getElementById("myButton");
  const form = document.getElementById("form");

  form.style.display = 'none';
  btn.style.display = "";
  
}


function alertA() {
  if (!confirm("제출하시겠습니까?")) {
  }
  else {
        alert("제출 감사합니다 ♥.");
  }
}