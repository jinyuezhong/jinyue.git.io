//F
var Fboxmove = document.querySelector('.Fboxtop');
var Fboxmovetop = Fboxmove.offsetTop;

//G
var Gboxmove = document.querySelector('.Gboxtop');
var Gboxmovetop = Gboxmove.offsetTop;

//B
var Bboxmove = document.querySelector('.Bboxwen');
var Bboxmovetop = Bboxmove.offsetTop;

var openging = document.querySelector('.Home_2');
var divli = document.querySelector('.openli');
openging.onclick=function(){
    // openging.style.backgquerySelectorround='red';
    if(divli.style.display=='block'){
        divli.style.display='none';
    } else{
        divli.style.display='block';
    }
}

document.body.onscroll = function() {
    //F
    if(window.pageYOffset > Fboxmovetop - window.innerHeight + Fboxmove.clientHeight-350){
        Fboxmove.className = 'container Fboxtop Fboxmove';
    }

    //G
    if(window.pageYOffset > Gboxmovetop - window.innerHeight + Gboxmove.clientHeight-450){
        Gboxmove.className = 'container Gboxtop Gboxmove';
    }

    //B
    if(window.pageYOffset > Bboxmovetop - window.innerHeight + Bboxmove.clientHeight-350){
        Bboxmove.className = 'Bboxwen Bboxmove';
    }
}