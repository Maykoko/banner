window.onload = function() {
	//获取元素
	var banner = document.querySelector("#box");
	var screen = document.querySelector(".screen");
	var ul = screen.querySelector("ul:first-of-type");
	// console.log(ul.children)
	var ul_li = ul.querySelectorAll("li");
	// console.log(ul_li);
	var ol = screen.querySelector("ol:first-of-type");
	var ol_li = ol.querySelectorAll("li");
	console.log(ol_li);

	//箭头的隐藏和显示
	var arr = document.querySelector("#arr");
	var arr_l = arr.querySelector("#left");
	var arr_r = arr.querySelector("#right");
	// console.log(arr_l)
	banner.onmouseenter = function() {
		arr.style.display = 'none';
	}
	banner.onmouseleave = function() {
		arr.style.display = 'block'
	}

	//动态创建ol_li
	for (var i = 0; i < ul_li.length; i++) {
		var lis = ul_li[i] ;
		// console.log(lis)
		var li = document.createElement("li");
		ol.appendChild(li);
		li.innerHTML = i+1;
		ol.children[0].className = "current"
	}


}