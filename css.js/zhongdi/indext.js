var zo = document.querySelector('.topbott');
var zooY = zo.offsetTop;

var lo=document.querySelector('.con');
var looY=lo.offsetTop;

var io=document.querySelector('.conB');
var iooY=io.offsetTop;

var to=document.querySelector('.conC');
var tooY=to.offsetTop;

var uo=document.querySelector('.conD');
var uooY=uo.offsetTop;

var eo=document.querySelector('.altB');
var eooY=eo.offsetTop;

var ko=document.querySelector('.contop');
var kooY=ko.offsetTop;

var vo=document.querySelector('.Btop');
var vooY=vo.offsetTop;

var no=document.querySelector('.class');
var nooy=no.offsetTop;

var mo=document.querySelector('.DB');
var mooy=mo.offsetTop;

var ho=document.querySelector('.altA');
var hooy=ho.offsetTop;

document.body.onscroll = function() {
	if(window.pageYOffset > zooY - window.innerHeight + zo.clientHeight) {
		zo.className = 'topbott xxx';
	}
	if(window.pageYOffset > looY - window.innerHeight + lo.clientHeight - 100) {
		lo.className = 'con www';
	} 
	if(window.pageYOffset > iooY - window.innerHeight + io.clientHeight  - 100) {
		io.className = 'conB www';
	} 
	if(window.pageYOffset > tooY - window.innerHeight + to.clientHeight  - 200) {
		to.className = 'conC www';
	} 
	if(window.pageYOffset > uooY - window.innerHeight + uo.clientHeight  - 100) {
		uo.className = 'conD www';
	} 
	if(window.pageYOffset > eooY - window.innerHeight + eo.clientHeight  - 100) {
		eo.className = 'altB www';
	} 
	if(window.pageYOffset > kooY - window.innerHeight + ko.clientHeight  + 300) {
		ko.className = 'contop www';
	} 
	if(window.pageYOffset > vooY - window.innerHeight + vo.clientHeight  + 200) {
		vo.className = 'Btop ppp';
	} 
	if(window.pageYOffset > nooy - window.innerHeight + no.clientHeight  - 100){
		no.className = 'class oopp';
	}
	if(window.pageYOffset > mooy - window.innerHeight + mo.clientHeight  - 100){
		mo.className = 'DB hhh';
	}
	if(window.pageYOffset > hooy - window.innerHeight + ho.clientHeight  + 200){
		ho.className = 'altA jin';
	}
}

