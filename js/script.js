$( document ).ready(function() {
    srollHeader();
    function srollHeader() {
        var topOffset = $(window).scrollTop();
        if(topOffset > 10){
            $("header").addClass("active")
            console.log('daa')
        } else if (topOffset < 10){
            console.log('none')
            $("header").removeClass("active")
        }
    }

    $(".menu-list").on("click","a", function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $('body, html').animate({scrollTop: $($(this).attr('href')).offset().top}, 600);


    });
    // header fixed

    $(".menu-mobile").on("click", function () {
        console.log('daa')
        $('.menu-list').toggleClass('active')
    });



    $('.owl-theme').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },

        }
    });

    $('.reviews-slider').owlCarousel({
        loop:false,
        margin:15,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                loop:false,
            },
            600:{
                items:2,
                loop:false,
            },
            1000:{
                items:3,
                loop:false,
                dots: false,
            }
        }
    });


    $('#accordeon .acc-head').on('click', f_acc);
    function f_acc(){
        $('#accordeon .acc-body').not($(this).next()).slideUp(500).removeClass('active');
        $(this).next().slideToggle(500).addClass('active');
    }


//E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Ваша заявка принята. Мы вам позвоним");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $(function(){
        //2. Получить элемент, к которому необходимо добавить маску
        $("#phone").mask("+38(099) 999-9999");
    });
});







