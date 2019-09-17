//F
var Fboxmove = document.querySelector('.Fboxtop');
var Fboxmovetop = Fboxmove.offsetTop;

//G
var Gboxmove = document.querySelector('.Gboxtop');
var Gboxmovetop = Gboxmove.offsetTop;

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
    if(window.pageYOffset > Fboxmovetop - window.innerHeight + Fboxmove.clientHeight-250){
        Fboxmove.className = 'container Fboxtop Fboxmove';
    }

    //G
    if(window.pageYOffset > Gboxmovetop - window.innerHeight + Gboxmove.clientHeight-350){
        Gboxmove.className = 'container Gboxtop Gboxmove';
    }
}