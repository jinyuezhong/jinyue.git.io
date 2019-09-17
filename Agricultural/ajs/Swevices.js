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
    if(window.pageYOffset > Fboxmovetop - window.innerHeight + Fboxmove.clientHeight-550){
        Fboxmove.className = 'container Fboxtop Fboxmove';
    }

    //G
    if(window.pageYOffset > Gboxmovetop - window.innerHeight + Gboxmove.clientHeight-250){
        Gboxmove.className = 'container Gboxtop Gboxmove';
    }

    // C
    if(window.pageYOffset > Cboxmovetop - window.innerHeight + Cboxmove.clientHeight - 350){
        Cboxmove.className = 'container Cboxtop Cboxmove';
    }

    //E
    if(window.pageYOffset > Eboxmovetop - window.innerHeight + Eboxmove.clientHeight - 350){
        Eboxmove.className = 'container Eboxtop Eboxmove';
    }
}