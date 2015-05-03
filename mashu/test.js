function Divs() {
    var divs= $('#parent div'),
        now = divs.filter(':visible'),
        next = now.next().length ? now.next() : divs.first(),
        speed = 1000;

    now.fadeOut(speed);
    next.fadeIn(speed);
}

// $(function () {
    
// });

var startSlide = 0;
function start(){
	var song = document.getElementById("mySong");
	song.autoplay = true;
	song.load();
	startSlide = setInterval(Divs, 10000);

}

function stop(){
	clearInterval(startSlide)
}

// var divs = $('div[id^="content-"]').hide(),
//     i = 0,j=0;

// (function cycle() { 

//     divs.eq(i).fadeIn(400)
//               .delay(10000)
//               .fadeOut(400, cycle);

//     i = ++i % divs.length;
//     //j+=1
//     //if (j===7){break;}
// })();