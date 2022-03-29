
const yesans = document.getElementById('Yes');
const Noans = document.getElementById('No');
const Body = document.getElementById('body');
const Title = document.getElementById('maintitle');
const navul = document.getElementById('navul');
const scrollDown = document.getElementById('scroll-down')
let fadeinTarget = document.querySelectorAll('.fade-in');


  yesans.addEventListener('click',function(){
    Body.classList.add("body");
    navul.classList.add("navul");
    Title.innerHTML = '先に進んでいいですよ!'
    scrollDown.classList.add('scrolldown');
  })

  Noans.addEventListener('click',function(){
    Title.innerHTML = '帰ってください!'
    Body.classList.remove("body");
    navul.classList.remove("navul");
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
      if(scroll > offset - windowHeight + 150){//ここ調整部分だな
        fadeinTarget[i].classList.add('scroll-in');
      };
    };
  })

