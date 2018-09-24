//获取页面元素
var divbox=document.getElementById('dabox');
var divkai=document.getElementById('kaishi');
var bustart=document.getElementById('start');
var divzho=document.getElementById("zhoxi");
var divjiu=document.getElementById("jiuxu");
var bucho=document.getElementById("choxi");
var divgua=document.getElementById("guang");
var pytscore=document.getElementById("ytscore");
var divscore=document.getElementById('score');
var divtang=document.getElementById('tang');

//获取游戏界面宽高度
var cont=divbox.currentStyle?divbox.currentStyle:window.getComputedStyle(divbox,null);
var stasizeX=parseInt(cont.width);
var stasizeY=parseInt(cont.height);

var score=0;

//创建不同飞机型号对象
var planes={
    width:34,
    height:24,
    imgs:'./imgs/enemy-plane-s.png',
    boomsrc:'./imgs/enemy-plane-s-boom.gif',
    boomtime:100,
    hp:1
};
var planem={
    width:46,
    height:60,
    imgs:'./imgs/enemy-plane-m.png',
    hits:'./imgs/planemai.png',
    boomsrc:'./imgs/enemy-plane-m-boom.gif',
    boomtime:100,
    hp:3
}
var planel={
    width:110,
    height:164,
    imgs:'./imgs/enemy-plane-l.png',
    hits:'./imgs/planelai.png',
    boomsrc:'./imgs/enemy-plane-l-boom.gif',
    boomtime:100,
    hp:5
}
var planew={
    width:68,
    height:88,
    imgs:'./imgs/our-plane.gif',
    boomsrc:'./imgs/our-plane-boom.gif',
    boomtime:100,
    hp:2
}
var bullet={
    width:6,
    height:14,
    imgs:'./imgs/our-bullet.png',
    speed:20
}

//创建飞机的构造函数
var plane=function(cenX, cenY, model, speed){
    this.cenX=cenX;
    this.cenY=cenY;
    this.sizeX=model.width;
    this.sizeY=model.height;
    this.imgs=model.imgs;
    this.boomsrc=model.boomsrc;
    this.boomtime=model.boomtime;
    this.hp=model.hp;
    this.speed=speed;
    this.hits=model.hits;

    this.currX=this.cenX -this.sizeX/2;
    this.currY=this.cenY -this.sizeY/2;
}

//画出一个飞机的方法
plane.prototype.draw=function() {
    this.imgN=new Image();
    this.imgN.src=this.imgs;
    this.imgN.style.top=this.cenY - this.sizeY/2 + 'px';
    this.imgN.style.left=this.cenX - this.sizeX/2 + 'px';
    divzho.appendChild(this.imgN);
}

//某个飞机的移动方法
plane.prototype.move = function(){
    this.currY += this.speed;
    this.cenY=this.currY+this.sizeY/2;
    this.imgN.style.top=this.currY + 'px';
    this.over();
}

// 检测飞机超出画布
plane.prototype.over=function(){
//     // if(this.currY>(stasizeY-this.sizeY)){
//     //     // console.log('中标');
//     //     // divzho.removeChild(this.imgN);
//     // }
    // return this.ibr=this.currY>(stasizeY-this.sizeY);
    this.ibr=this.currY>(stasizeY - this.sizeY);
    this.itr=this.currY<0;
}

//敌机的构造函数
var asas=function(){
    this.segments=[];
    this.gencoun=0;
}

//随机生成min-max之间的随机数
var ranumber=function(min,max){
    return Math.round(Math.random()*(max-min))+min;
    //随机数当成 min+（max-min）范围min 到（min+（max-min））
};

//生成画出所有新的飞机的方法
asas.prototype.crney=function(){
    this.gencoun ++;
    if(this.gencoun%3===0){
        this.newas=new plane(ranumber(planel.width/2,stasizeX-planel.width/2),12,planel,1);
    }else if(this.gencoun%2===0){
        this.newas=new plane(ranumber(planem.width/2,stasizeX-planem.width/2),12,planem,ranumber(3,4));
    }else{
        this.newas=new plane(ranumber(planes.width/2,stasizeX-planes.width/2),12,planes,ranumber(5,6));
    }

//新生成的飞机写入数组
this.segments.push(this.newas);

//新生成的飞机画出来
this.newas.draw();
};

//移动所有飞机
asas.prototype.moveall=function(){
    //遍历敌机对象里面的保存敌机的数组 让每一个都移动
    for(var i=0 ; i<this.segments.length ; i++){
        this.segments[i].move();
        //如果超出画布怎样
        if(this.segments[i].ibr){
            divzho.removeChild(this.segments[i].imgN);
            this.segments.splice(i,1);
        }

        //检测子弹撞机
        for(var j=0; j<planewion.segment.length; j++){
            //如果飞机未死亡就挡住子弹
            if(this.segments[i].hp>0){
                var horcoll=Math.abs(this.segments[i].cenX - planewion.segment[j].cenX)<(this.segments[i].sizeX/2 + planewion.segment[j].sizeX/2);
                var vercoll=Math.abs(this.segments[i].cenY - planewion.segment[j].cenY)<(this.segments[i].sizeY/2 + planewion.segment[j].sizeY/2);
                var chbcoll=horcoll&&vercoll;
                // console.log(chbcoll);

                if(chbcoll){
                    //飞机挨打
                    score++;
                    divscore.innerHTML=score;
                    this.segments[i].imgN.src=this.segments[i].hits ? this.segments[i].hits:this.segments[i].boomsrc;
                    this.segments[i].hp--;

                    //把子弹消除
                    divzho.removeChild(planewion.segment[j].imgN);
                    planewion.segment.splice(j,1);
                }
            }
        }

        //我方飞机撞机
        var ourhorcoll=Math.abs(this.segments[i].cenX - planewion.cenX)<(this.segments[i].sizeX/2 + planewion.sizeX/2);
        var ourvercoll=Math.abs(this.segments[i].cenY - planewion.cenY)<(this.segments[i].sizeY/2 + planewion.sizeY/2); 
        var cheourcoll=ourhorcoll&&ourvercoll;
        // console.log(cheourcoll);
        if(cheourcoll){
            this.segments[i].hp=0;
            planewion.hp--;
            if(planewion.hp<=0){
                gameover();
            }
        }

        //检测飞机是否死亡
        if(this.segments[i].hp<=0){
            this.segments[i].imgN.src=this.segments[i].boomsrc;
            this.segments[i].boomtime -= 10;

        //把飞机消除
            if(this.segments[i].boomtime<=0){
                divzho.removeChild(this.segments[i].imgN);
                this.segments.splice(i,1);
            }
        }
    }
}

//实例化所有飞机
var es=new asas();

var planewion=new plane(stasizeX/2,stasizeY-planew.height/2,planew,0);
planewion.draw();

divzho.onmousemove=function(ev){
    // console.log((ev.clientX - divbox.offsetLeft) + ' ' + (ev.clientY-divbox.offsetTop));
    planewion.cenX=ev.clientX-divbox.offsetLeft;
    if(planewion.cenX<0){
        planewion.cenX=0;
    }
    if(planewion.cenX>stasizeX){
        planewion.cenX=stasizeX;
    }
    planewion.cenY=ev.clientY-divbox.offsetTop;
    if(planewion.cenY<0){
        planewion.cenY=0;
    }
    if(planewion.cenY>(stasizeY-planewion.sizeY/3)){
        planewion.cenY=(stasizeY-planewion.sizeY/3);
    }

    planewion.currX=planewion.cenX-planewion.sizeX/2;
    planewion.currY=planewion.cenY-planewion.sizeY/2;
    // planewion.currX=(ev.clientX-divbox.offsetLeft)-planewion.sizeX/2;
    // planewion.currY=(ev.clientY-divbox.offsetTop)-planewion.sizeY/2;
    
    planewion.imgN.style.left=planewion.currX + 'px';
    planewion.imgN.style.top=planewion.currY + 'px';
}

planewion.segment=[];

var boom=plane;

// var boom=function(cenX,cenY,boomdel,speed){
//     this.cenX=cenX;
//     this.cenY=cenY;
//     this.speed=speed;
//     this.imgs=boomdel.imgs;
//     this.sizeX=boomdel.width;
//     this.sizeY=boomdel.height;

//     this.currX=this.cenX-this.sizeX/2;
//     this.currY=this.cenY-this.sizeY/2;
// }

// boom.prototype.draw=function(){
//     this.imgN=new Image();
//     this.imgN.src=this.imgs;
//     this.imgN.style.top=this.cenY-this.sizeY/2 + 'px';
//     this.imgN.style.left=this.cenX-this.sizeX/2 + 'px';
//     divzho.appendChild(this.imgN);
// }

//某个子弹的移动方法


function creatboom(){
    planewion.bom=new boom(planewion.cenX,planewion.cenY-planewion.sizeY/2,bullet,-10);
    planewion.segment.push(planewion.bom);
    planewion.bom.draw();
}

function moveboom(){
    for(var i=0 ; i<planewion.segment.length ; i++){
        planewion.segment[i].move();
   
        if(planewion.segment[i].itr){
            divzho.removeChild(planewion.segment[i].imgN);
            planewion.segment.splice(i,1);
        } 
    }   
    // this.currY -= this.speed;
    // this.imgN.style.top=this.currY + 'px';
}
// var bom=new boom(planewion.cenX,planewion.cenY-planewion.sizeY/2,bullet,-10);
// bom.draw();

// var planew={
//     width:68,
//     height:88,
//     imgs:'/imgs/our-plane.gif',
//     boomsrc:'/imgs/our-plane-boom.gif',
//     boomtime:100,
//     hp:3
// }

// var planesion=new plane(17,12,planes,3);
// planesion.draw();

// var planemion=new plane(120,30,planem,2);
// planemion.draw();

// var planelion=new plane(265,85,planel,1);
// planelion.draw();

// setInterval(function(){
//     planesion.move();
//     planemion.move();
//     planelion.move();
// },50000);

//游戏结束页面
var gameover=function(){
    planewion.imgN.src=planewion.boomsrc;
    clearInterval(timeid);
    // divzho.style.display='none';
    divgua.style.display='block';
    document.querySelector('p#ytscore').innerText=score;
}

var time=0;
var timeid;
var start=function(){
    //隐藏开始页面
    divkai.style.display='none';
    //显示游戏页面
    divzho.style.display='block';
    //暂停页面
    divtang.style.display='none';
    //结束页面
    divgua.style.display='none';

timeid = setInterval(function(){
    time++;
    if(time%40===0){
        es.crney();
    }
    if(time%10===0){
        creatboom();
    }
    es.moveall();
    moveboom();

    if(planewion.hp<=0){
        gameover();
    }

},100);
}

var restart=function(){
    window.location.reload();
}

divjiu.onclick=function(ev){
    ev.stopPropagation();
    start();
}

divzho.onclick=function(){
    clearInterval(timeid);
    divtang.style.display='block';
}