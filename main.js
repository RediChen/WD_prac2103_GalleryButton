var slideIndex = 1 ;

//函數宣告區 ===================
function showSlides(n) {
    var i ;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var slides = document.getElementsByClassName("slides") ;
    var dots = document.getElementsByClassName("demo") ;
    var showText = document.getElementById("caption") ;
    // 處理超出範圍的值
    if (n > slides.length) {
        slideIndex = 1 ;
    } else if (n < 1) {
        n = slides.length ;
    }
    // 全員隱藏
    for (i = 0 ; i < dots.length ; i++) {
        slides[i].style.display = "none" ;
    }
    // 點點模式切換
}

function plusSlides(k) {
    showSlides(slideIndex += k) ;
}
function currenSlides(n) {
    showSlides(slideIndex = n) ;
}