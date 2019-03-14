$(document).ready(function () {
    $('#showMenu').click(function () {
        $('nav').toggleClass('push');
        $('body').toggleClass('pushHeader');
    });

    $(function() {
        $(".search svg").click(function() {
            $("#searchbox").val("");
            toggleSearch();
        });
    });
    
    function toggleSearch() {
        $("#searchbox").toggleClass("searchexpanded");
    }

    // $('.num1').click(function () {
    //     $('.num1').addClass('active');
    //     $('.num2').removeClass('active');
    //     $('.num3').removeClass('active');
    //     $('.num4').removeClass('active');
        
    // });
    // $('.num2').click(function () {
    //     $('.num2').addClass('active');
    //     $('.num3').removeClass('active');
    //     $('.num4').removeClass('active');
    //     $('.num1').removeClass('active');
    // });
    // $('.num3').click(function () {
    //     $('.num3').addClass('active');
    //     $('.num1').removeClass('active');
    //     $('.num4').removeClass('active');
    //     $('.num2').removeClass('active');
    // });
    // $('.num4').click(function () {
    //     $('.num4').addClass('active');
    //     $('.num1').removeClass('active');
    //     $('.num2').removeClass('active');
    //     $('.num3').removeClass('active');
    // });


    $("button.showMore").click(function () {
        if ($(this).hasClass("showMore")) {
            $(this).removeClass("showMore");
            $(this).addClass("less");
            var ul = $(this).prev("ul");
            $(ul).children("li").removeClass("none");
        }
        else {
            $(this).removeClass("less");
            $(this).addClass("showMore");
            var ul = $(this).prev("ul");
            $(ul).children("li").addClass("none");
        }
    });

    $(window).scroll(function(){
		var top=$(window).scrollTop();
			if (top>0) {
				$('nav').addClass('fixed');
			}
            else{
                $('nav').removeClass('fixed');
            }
			if (top<0) {
			 	$('nav').show();
			}	
    });

    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('nav').removeClass('push');
        } else {
            $('nav').addClass('push');
        }
      }
      
      var x = window.matchMedia("(max-width: 736px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

});


