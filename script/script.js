$(function(){

    //headerGNB MENU
    $("nav#headerGNB li.mainLi").mouseover(function(){
        $("div#navBG").stop().slideDown(800);
        $("nav#headerGNB ul.subMenu").stop().slideDown(800);
    });

    $("nav#headerGNB li.mainLi").mouseout(function(){
        $("div#navBG").stop().slideUp(300);
        $("nav#headerGNB ul.subMenu").stop().slideUp(300);
    });

    //Slideshow Function
    setInterval(fn_slideShow, 3000);

    function fn_slideShow() {
        $("")
        $("div#slideShuttle").animation(
            { "margin-left" : "-1200px" }
            , 1000
            ,
            $("#slideShuttle div:first-child").insertAfter("#slideShuttle div:last-child")
        );

    
    }

});