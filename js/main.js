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
    var Rechts = 0;

    if ($(document).scrollTop() > 600) {
        Beneden = Beneden - 75;
        document.getElementById("shit").style.marginTop = Beneden + "vh";
        console.log(document.getElementById("shit").style.marginTop);
        document.getElementById("home").innerHTML = 'HOME';
    
    } else if ($(document).scrollTop() < 100 && document.getElementById("shit").style.marginTop == '-75vh') {
        Beneden = Beneden + 0;
        document.getElementById("shit").style.marginTop = Beneden + "%";
        document.getElementById("home").innerHTML = '';
        document.getElementById("home").style.borderRight = 'none';
    }
});
//zorgt er voor dat border right bij home niet komt en gaat bij herladen----
$(window).ready(function () {
    if ($(document).click() ) {
       document.getElementById("home").style.borderRight = 'none';
    
    } else if ($(document).click() ){
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
$(document).click(function (event) {
    if ($(event.target).is('#face')) {
        (document.getElementById('face').innerHTML = '');
    } else {
        (document.getElementById('home').style.borderRight = '1px solid orange');
    }
});
$(document).ready(function () {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function doeIets() {
        alert("Thank you for choosing AZTEC CASITA catering service ");
    }
    $(function () {
        $("#button").click(function () {
            $("#button").addClass("onclic", 250, validate);
        });

        function validate() {
            setTimeout(function () {
                $("#button").removeClass("onclic");
                $("#button").addClass("validate", 450, callback);
            }, 2250);
        }

        function callback() {
            setTimeout(function () {
                $("#button").removeClass("validate");
            }, 1250);
        }
    })
});

$(document).ready(function () {
    $('.item').bind('click', function () {
        // remove the active class from all elements with active class
        $('.active').removeClass('active')
        // add active class to clicked element
        $(this).addClass('active');
    });
});
/*
$(document).click(function (event) {
    if ($(event.target).is('#home')) {
        (document.getElementById('home').style.borderRightColor = 'none');
        (document.getElementById('a').style.borderRightColor = 'orange');
        (document.getElementById('b').style.borderRightColor = 'orange');
        (document.getElementById('c').style.borderRightColor = ' orange');
    } else if ($(event.target).is('#a')) {
        (document.getElementById('home').style.borderRightColor = 'red');
        (document.getElementById('a').style.borderRightColor = 'red');
        (document.getElementById('b').style.borderRightColor = 'red');
        (document.getElementById('c').style.borderRightColor = ' red');
    } else if ($(event.target).is('#b')) {
        (document.getElementById('home').style.borderRightColor = 'orange');
        (document.getElementById('a').style.borderRightColor = 'orange');
        (document.getElementById('b').style.borderRightColor = 'orange');
        (document.getElementById('c').style.borderRightColor = ' orange');
    } else if ($(event.target).is('#c')) {
         (document.getElementById('home').style.borderRightColor = 'red');
        (document.getElementById('a').style.borderRightColor = 'red');
        (document.getElementById('b').style.borderRightColor = 'red');
        (document.getElementById('c').style.borderRightColor = ' red');
    } else {
        alert('bullshit');
    }
});*/