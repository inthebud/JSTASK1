
//取出小盒子节点集合
var box = document.getElementsByClassName("box");
console.log(box);
//恢复颜色的方法
var i ;
function restorecolor(){
	for (i = 0; i<box.length; i++) {
		box[i].style.backgroundColor="#fea000";
	}
}

//随机获取颜色
var r;
var g;
var b;
function arr(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return "rgb(" + r + "," + g + "," + b + ")";
}
console.log(arr());

//按钮按下时执行的函数
function color(){
	restorecolor();//先恢复所有颜色；
	//创建一个数组，装九个格子的下标；
	var a = [];
	var i;
	for (i = 0; i<box.length; i++) {
		a[i]=i;
	}
	//打乱数组排序
	var w = a.length;
	var x,y;
	while(w>0){
		y = Math.floor(Math.random()*w--);
		x = a[w];
		a[w] = a[y];
		a[y] = x;
	}
	console.log(a);
	box[a[0]].style.backgroundColor = arr();
	box[a[1]].style.backgroundColor = arr();
	box[a[2]].style.backgroundColor = arr();
}

var t;
function bling(){
	clearInterval(t);
	t = setInterval("color()",1000);
}

function stop(){
	clearInterval(t);
	restorecolor();
	console.log("stop");
}
