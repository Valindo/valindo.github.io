$(document).ready(function() {
    $('#fullpage').fullpage({
    	css3: true,
        scrollingSpeed: 5,
        autoScrolling: false,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,

        sectionsColor: ['#3498db','#f2ae2e','#81d5f2','#8e44ad','#E67E22','#2ECC71','#F22613','#fff899']


    });

//     $.fn.fullpage.setAutoScrolling(false);

    var width = Math.floor($(window).width()/2);
    var height = Math.floor($(window).height()/2);

    var w = $(window).width();
    var h = $(window).height();
    // document.getElementById('section1').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:blue;")
    // document.getElementById('section2').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:green;")
    // document.getElementById('section3').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:red;")
    // document.getElementById('section4').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:yellow;")


    // document.getElementsByClassName("section").setAttribute("style","width:"+w+"px");
    // document.getElementsByClassName("section").style.width = $(window).width()
    // document.getElementsByClassName("section").style.height = $(window).height()    

    document.getElementById('ifrm').src = "http://clips.animatron.com/9d2aa5da1421219c96c9684a3835846a?w="+width+"&h="+height+"&autoPlay=1&r=1&c=false&rc=blue&bg=#81d5f2";

    $(".progress-bar-success").animate({
            width: "35%"
        },100);

    $(".progress-bar-info").animate({
            width: "65%"
        },100);
    

});