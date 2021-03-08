var slideIndex = 1 ;

//函數宣告區 ===================
function showSlides(n) {
    var i ;
    var slides = document.getElementsByClassName("slides") ;
    var dots = document.getElementsByClassName("demo") ;
    var showText = document.getElementById("caption") ;

    if (n > slides.length) {
        slideIndex = 1 ;
    } else if (n < 1) {
        
    }
}

function plusSlides(k) {
    showSlides(slideIndex += k) ;
}
function currenSlides(n) {
    showSlides(slideIndex = n) ;
}