var box = document.getElementById('wei');
var boxY = box.offsetTop;
document.body.onscroll = function () {
	if (window.pageYOffset > boxY + 20) {
		box.style.position = 'fixed';
		//		box.style.position='sticky';
	} else {
		box.style.position = 'relative';
	}
}

var diong = document.getElementById('#righttopA');
var rightA = document.querySelectorAll('#righttopA div');
var giong = document.getElementById('#righttopB');
var aw = document.querySelectorAll('#righttopB div');

for (var i = 0; i < rightA.length; i++) {
	rightA[i].index = i;
	//	console.log(rightA[i].index=i);
}
for (var j = 0; j < aw.length; j++) {
	aw[j].index = j;
}

for (i = 0; i < rightA.length; i++) {
	rightA[i].onclick = function () {
		for (var i = 0; i < rightA.length; i++) {
			rightA[i].style.backgroundPositionY = -0 + 'px';
		}
		rightA[this.index].style.backgroundPositionY = (-180) + 'px';
		for (var j = 0; j < aw.length; j++) {
			aw[j].style.display = 'none';
		}
		aw[this.index].style.display = 'block';
	}
}

//