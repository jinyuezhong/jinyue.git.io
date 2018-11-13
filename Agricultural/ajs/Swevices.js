//F
var Fboxmove = document.querySelector('.Fboxtop');
var Fboxmovetop = Fboxmove.offsetTop;

//G
var Gboxmove = document.querySelector('.Gboxtop');
var Gboxmovetop = Gboxmove.offsetTop;

// C
var Cboxmove = document.querySelector('.Cboxtop');
var Cboxmovetop = Cboxmove.offsetTop;

//E
var Eboxmove = document.querySelector('.Eboxtop');
var Eboxmovetop = Eboxmove.offsetTop;

document.body.onscroll = function() {
    //F
    if(window.pageYOffset > Fboxmovetop - window.innerHeight + Fboxmove.clientHeight-300){
        Fboxmove.className = 'container Fboxtop Fboxmove';
    }

    //G
    if(window.pageYOffset > Gboxmovetop - window.innerHeight + Gboxmove.clientHeight-50){
        Gboxmove.className = 'container Gboxtop Gboxmove';
    }

    // C
    if(window.pageYOffset > Cboxmovetop - window.innerHeight + Cboxmove.clientHeight - 100){
        Cboxmove.className = 'container Cboxtop Cboxmove';
    }

    //E
    if(window.pageYOffset > Eboxmovetop - window.innerHeight + Eboxmove.clientHeight){
        Eboxmove.className = 'container Eboxtop Eboxmove';
    }
}