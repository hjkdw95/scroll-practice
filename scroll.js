let scrollTop = 0;
let bar = 0;
let cloudWrap;



window.onload = function(){
    bar = document.querySelector(".bar");
    cloudWrap = document.querySelector(".cloudWrap")

    window.addEventListener("scroll", function(){
        scrollTop = document.documentElement.scrollTop;
        // scroll 값을 볼 수 있다.
    
        // 스크롤top 값을 이용해 프로그레스 바 만들기
        // 현재 스크롤 top 값이 전체에서 몇 퍼센트 내려온 것인지 확인
        let per = Math.ceil(scrollTop/(document.body.scrollHeight-window.innerHeight) * 100);

        // 구름이 스크롤 내리는 값에 맞추어 조금씩 움직이게 하기
        cloudWrap.style.transform = `translate(0, ${+-scrollTop/2}px)`

        bar.style.width = `${per}%`;
    }, false);
}

