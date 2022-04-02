
const yesans = document.getElementById('Yes');
const Noans = document.getElementById('No');
const Body = document.getElementById('body');
const Title = document.getElementById('maintitle');
const navul = document.getElementById('navul');
const scrollDown = document.getElementById('scroll-down')
let fadeinTarget = document.querySelectorAll('.fade-in');//.fade-inすべて取得
const Spmenu = document.getElementsByClassName('spmenu');



//YesNOの処理
  yesans.addEventListener('click',function(){
    Body.classList.add("body");
    navul.classList.add("navul");
    if(Spmenu){
      for (let i =0; i <Spmenu.length; i++){
        Spmenu[i].style.display = "";
      }
    }
    Title.innerHTML = '先に進んでいいですよ!'
    scrollDown.classList.add('scrolldown');
  })

  Noans.addEventListener('click',function(){
    Title.innerHTML = '帰ってください!'
    Body.classList.remove("body");
    navul.classList.remove("navul");
    if(Spmenu){
      for (let i =0; i <Spmenu.length; i++){
        Spmenu[i].style.display = "none";
      }
    }
    scrollDown.classList.remove('scrolldown');
  })


  //スクロールイン
  window.addEventListener('scroll', ()=>{
    for(let i = 0; i < fadeinTarget.length; i++){//fadeinのクラスがついてる要素分繰り返す
      //要素の位置を左上を起点(0, 0)として取得
      const rect = fadeinTarget[i].getBoundingClientRect().top;
      //垂直方向のスクロール量
      const scroll = document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight;//現在のブラウザの高さ
      if(scroll > offset - windowHeight + 150){//ここ調整部分
        fadeinTarget[i].classList.add('scroll-in');
      };
    };
  })

  //リロード時にスクロールTOPに戻す処理
$(function() {
  $('html,body').animate({ scrollTop: 0 }, '1');
});

//スマホ版ハンバーガーメニューの処理
$('.spmenu').on('click',function(){
  $('.overlay').css('opacity' ,'1');
  $('.overlay').css('z-index' ,'10');
  $('#open').css('opacity' ,'0');
})
//閉じる
$('#close').on('click',function(){
  $('.overlay').css('opacity','0');
  $('.overlay').css('z-index' ,'0');
  $('#open').css('opacity' ,'1');
})

// let windowWidth = window.innerWidth;
// let windowSm = 599;
// console.log(windowWidth)
// if (windowWidth >= windowSm){
//   if(Spmenu){
//     for (let i =0; i <Spmenu.length; i++){
//       Spmenu[i].style.display = 'none';
//     }
//   }else{
//     if (windowWidth >= windowSm){
//       if(Spmenu){
//         for (let i =0; i <Spmenu.length; i++){
//           Spmenu[i].style.display = '';
//         }}
//       }
//     }
//   }

