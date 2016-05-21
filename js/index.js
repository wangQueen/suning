window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 2500,
        loop: true
    });
    var zz=document.querySelector('.zhezhao');
    var yuan=document.querySelector('.yuan');
    var dayuan=document.querySelector('.dayuan');
    var flag=true;
    yuan.onclick=function(){
        if(flag){
            flag=false;
            yuan.style.cssText="background:#fff;bottom:2.6rem;border:1px solid #ccc;color:#ccc;";
            yuan.innerHTML="×";
            dayuan.style.width="5.5rem";
            dayuan.style.height="5.5rem";
            zz.style.display="block";
        }else{
            flag=true;
            yuan.style.cssText="background:#ECA300;bottom:0.5rem;border:none;color:#fff;";
            yuan.innerHTML="＋";
            dayuan.style.width="0rem";
            dayuan.style.height="0rem";
            zz.style.display="none";
        }

    }
}
