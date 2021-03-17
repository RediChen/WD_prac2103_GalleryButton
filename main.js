// 全域變數區 ===================
var slideIndex = 0 ;//count from 0

// 馬上執行區 ===================
showSlides(slideIndex) ;

// 函數宣告區 ===================
function showSlides(n) {
    var i ;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var slides = document.getElementsByClassName("slides") ;
    var dots = document.getElementsByClassName("demo") ;
    var showText = document.getElementById("caption") ;
    // 處理超出範圍的值
    if (n >= slides.length) {
        slideIndex = 0 ;
    } else if (n < 0) {
        slideIndex = slides.length - 1 ;
    }
    // 各組全員隱藏
    for (i = 0 ; i < dots.length ; i++) {
        slides[i].style.display = "none" ;
    }
    // 所有點點還原
    for (i = 0 ; i < dots.length ; i++) {
        dots[i].className = dots[i].className.replace(" active", "") ;
        // 為什麼 active 要有空格是因為：只會作字串的串接，必須連空格一起給。
    }
    // 主角圖組出現
    slides[slideIndex].style.display = "block" ;
    // 主角點點啟動
    dots[slideIndex].className += " active" ;
    // 主角資訊顯現
    showText.innerHTML = dots[slideIndex].alt ;
}

function plusSlides(k) {
    showSlides(slideIndex += k) ;
}
function currentSlide(n) {
    showSlides(slideIndex = n) ;
}