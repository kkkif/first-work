$(document).ready(function () {
    $(".burger-menu").click(function() {
        $(".burger-menu").toggleClass("open");
        $(".nav").toggleClass("active")
        $(".header-block").toggleClass("active")
        $("body").toggleClass("active")
    });
    
    let headerContainer = $(".header-container");
    $(document).scroll(function(){
        // console.log($(window).scrollTop())
        if($(this).scrollTop() > 100){
            headerContainer.addClass("fixed")
        }else{
            headerContainer.removeClass("fixed")
        }
    })

    // найти элемент $(".element")
    $(".header")
    // найти элемент без класса $(".element div")
    $(".nav ul")
    // навесить события (клик по элементу, скролл) .click( function(){} )
    $(".nav ul a").click(function(){
        // some code
    })
    // $() функция которая ищет элемент на странице обращаемся точно так же к элементу как в css .class #id
    // function(){} используется внутри событий (клик по элементу, скролл)
});