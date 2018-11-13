//F
var Fboxmove = document.querySelector('.Fboxtop');
var Fboxmovetop = Fboxmove.offsetTop;

//G
var Gboxmove = document.querySelector('.Gboxtop');
var Gboxmovetop = Gboxmove.offsetTop;

//B
var Bboxmove = document.querySelector('.Bboxwen');
var Bboxmovetop = Bboxmove.offsetTop;

document.body.onscroll = function() {
    //F
    if(window.pageYOffset > Fboxmovetop - window.innerHeight + Fboxmove.clientHeight-300){
        Fboxmove.className = 'container Fboxtop Fboxmove';
    }

    //G
    if(window.pageYOffset > Gboxmovetop - window.innerHeight + Gboxmove.clientHeight-50){
        Gboxmove.className = 'container Gboxtop Gboxmove';
    }

    //B
    if(window.pageYOffset > Bboxmovetop - window.innerHeight + Bboxmove.clientHeight-50){
        Bboxmove.className = 'Bboxwen Bboxmove';
    }
}