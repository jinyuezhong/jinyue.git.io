// A
var Aboxmove=document.querySelector('.Aboxbottom');
var Aboxmovetop = Aboxmove.offsetTop;

// B
var Bboxmove = document.querySelector('.Bboxtop');
var Bboxmovetop = Bboxmove.offsetTop;

// C
var Cboxmove = document.querySelector('.Cboxtop');
var Cboxmovetop = Cboxmove.offsetTop;

//D
var Dboxmove = document.querySelector('.Dboxtop');
var Dboxmovetop = Dboxmove.offsetTop;

//E
var Eboxmove = document.querySelector('.Eboxtop');
var Eboxmovetop = Eboxmove.offsetTop;

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
    // A
    if(window.pageYOffset > Aboxmovetop - window.innerHeight + Aboxmove.clientHeight -0){
        Aboxmove.className = 'Aboxbottom container Aboxlol';
    }

    // B
    if(window.pageYOffset > Bboxmovetop - window.innerHeight + Bboxmove.clientHeight - 250){
        Bboxmove.className = 'container Bboxtop Bboxmove';
    }

    // C
    if(window.pageYOffset > Cboxmovetop - window.innerHeight + Cboxmove.clientHeight - 250){
        Cboxmove.className = 'container Cboxtop Cboxmove';
    }

    //D
    if(window.pageYOffset > Dboxmovetop - window.innerHeight + Dboxmove.clientHeight - 250){
        Dboxmove.className = 'container Dboxtop Dboxmove';
    }

    //E
    if(window.pageYOffset > Eboxmovetop - window.innerHeight + Eboxmove.clientHeight){
        Eboxmove.className = 'container Eboxtop Eboxmove';
    }

    //F
    if(window.pageYOffset > Fboxmovetop - window.innerHeight + Fboxmove.clientHeight-250){
        Fboxmove.className = 'container Fboxtop Fboxmove';
    }

    //G
    if(window.pageYOffset > Gboxmovetop - window.innerHeight + Gboxmove.clientHeight-250){
        Gboxmove.className = 'container Gboxtop Gboxmove';
    }
}

console.log(Aboxmovetop)

