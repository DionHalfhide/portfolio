$(document).ready(function () {
    //smooth scrolling
    var scrollLink = $(".scroll");

    scrollLink.click(function (e) {

        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
    //Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 70;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });


    });

});

$(window).scroll(function () {
    var Beneden = 0;
    
    if ($(document).scrollTop() > 600) {
        Beneden = Beneden - 77;
        document.getElementById("shit").style.marginTop = Beneden + "vh";

        document.getElementById("home").innerHTML = 'HOME';

    } else if ($(document).scrollTop() < 100 && document.getElementById("shit").style.marginTop == '-77vh') {
        Beneden = Beneden + 0;
        document.getElementById("shit").style.marginTop = Beneden + "%";

        document.getElementById("home").innerHTML = '';
        document.getElementById("home").style.borderRight = 'none';
    }
});

//zorgt er voor dat border right bij home niet komt en gaat bij herladen----
$(window).ready(function () {
    if ($(document).click()) {
        document.getElementById("home").style.borderRight = 'none';

    } else if ($(document).click()) {
        document.getElementById("home").style.borderRight = 'none';
    }
});

//zorgt er voor dat border right bij home komt en gaat------------------------
$(document).click(function (event) {
    if ($(event.target).is('#home')) {
        (document.getElementById('home').style.borderRight = '1px solid none');
    } else {
        (document.getElementById('home').style.borderRight = '1px solid orange');
    }
});


$(document).ready(function () {
    $('.item').bind('click', function () {
        // remove the active class from all elements with active class
        $('.active').removeClass('active')
        // add active class to clicked element
        $(this).addClass('active');
    });
});
