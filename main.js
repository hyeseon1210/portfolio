$(document).ready(function(){
    
    var sc_pg=parseInt($(window).height());
         $(window).on("mousewheel",function(e){
             if(e.originalEvent.wheelDelta<0){
                 $("html,body").not(":animated").animate({
                     scrollTop:"+="+sc_pg+"px"
                 },800);
             }else{$("html,body").not(":animated").animate({
                 scrollTop:"-="+sc_pg+"px"
             },800);
                 
             }
             return false;
         });
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.bground').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','top':'0%'},1500);
                    
            }
            
        }); 
    
    });
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.vdo1').each( function(i){
            
            var bottom_of_object2 = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window2 = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window2 > bottom_of_object2 ){
                
                $(this).animate({'opacity':'1','left':'23%'},1000);
                    
            }
            
        }); 
    
    });
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.vdo2').each( function(i){
            
            var bottom_of_object3 = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window3 = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window3 > bottom_of_object3 ){
                
                $(this).animate({'opacity':'1','right':'23%'},1000);
                    
            }
            
        }); 
    
    });
    
    
    var intv = setInterval(function () {
        nextAni();
    }, 4000);

    function nextAni() {
        $(".slide").not(":animated").animate({
            "margin-left": "-100%"
        }, 0, function () {
            $(".slide li").eq(0).appendTo($(".slide"));
            $(".slide").css("margin-left", "0");
        });
    }
    function prevAni() {
        $(".slide li").eq(2).prependTo($(".slide"));
        $(".slide").css("margin-left", "-100%");
        $(".slide").not(":animated").animate({"margin-left": "0"}, 0);
    }
    $(".prev_btn").click(function(){
       clearInterval(intv);
        prevAni();
        intv = setInterval(function () {nextAni();}, 5000);
    });
    $(".next_btn").click(function(){
       clearInterval(intv);
        nextAni();
        intv = setInterval(function () {nextAni();}, 5000);
    });
    
    var intv2 = setInterval(function () {
        nextAni2();
    }, 3000);

    function nextAni2() {
        $(".main-newsletter-big-slide").not(":animated").animate({
            "margin-left": "-100%"
        }, 400, function () {
            $(".main-newsletter-big-slide li").eq(0).appendTo($(".main-newsletter-big-slide"));
            $(".main-newsletter-big-slide").css("margin-left", "0");
        });
        $(".main-newsletter-small-slide").not(":animated").animate({
            "margin-left": "-50%"
        }, 400, function () {
            $(".main-newsletter-small-slide li").eq(0).appendTo($(".main-newsletter-small-slide"));
            $(".main-newsletter-small-slide").css("margin-left", "0");
        });
    }
    function prevAni2() {
        $(".main-newsletter-big-slide li").eq(2).prependTo($(".main-newsletter-big-slide"));
        $(".main-newsletter-big-slide").css("margin-left", "-100%");
        $(".main-newsletter-big-slide").not(":animated").animate({"margin-left": "0"}, 400);
        $(".main-newsletter-small-slide li").eq(2).prependTo($(".main-newsletter-small-slide"));
        $(".main-newsletter-small-slide").css("margin-left", "-50%");
        $(".main-newsletter-small-slide").not(":animated").animate({"margin-left": "0"}, 400);
    }
    
    $("#prev_Btn").click(function(){
       clearInterval(intv);
        prevAni2();
        intv = setInterval(function () {nextAni();}, 5000);
    });
    $("#next_Btn").click(function(){
       clearInterval(intv);
        nextAni2();
        intv = setInterval(function () {nextAni();}, 5000);
    });

    
    var $moveIcon = $('.main-scroll-icon');
	var moveIcon = setInterval(function() {
		$moveIcon.animate({opacity:'.5',"margin-bottom":'-=10px'}).animate({opacity:'1',"margin-bottom":'+=10px'})
	}, 1000);
    
    
     $(".vdo1").click(function(){
         $("#vdopop").show();
         
     });   
    $(".close_btn").click(function(){
        $("#vdopop").hide();
    });
    $(".vdo2").click(function(){
         $("#vdopop").show();
         
     });   
    $(".close_btn").click(function(){
        $("#vdopop").hide();
    });
    
});
