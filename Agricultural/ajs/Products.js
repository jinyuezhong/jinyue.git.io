//D
var Dboxmove = document.querySelector('.Dboxtop');
var Dboxmovetop = Dboxmove.offsetTop;

//F
var Fboxmove = document.querySelector('.Fboxtop');
var Fboxmovetop = Fboxmove.offsetTop;

//G
var Gboxmove = document.querySelector('.Gboxtop');
var Gboxmovetop = Gboxmove.offsetTop;

document.body.onscroll = function() {
    //D
    if(window.pageYOffset > Dboxmovetop - window.innerHeight + Dboxmove.clientHeight - 350){
        Dboxmove.className = 'container Dboxtop Dboxmove';
    }

    //F
    if(window.pageYOffset > Fboxmovetop - window.innerHeight + Fboxmove.clientHeight-100){
        Fboxmove.className = 'container Fboxtop Fboxmove';
    }

    //G
    if(window.pageYOffset > Gboxmovetop - window.innerHeight + Gboxmove.clientHeight-50){
        Gboxmove.className = 'container Gboxtop Gboxmove';
    }
}
