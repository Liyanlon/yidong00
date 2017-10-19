/*
* @Author: l
* @Date:   2017-10-15 14:13:00
* @Last Modified by:   l
* @Last Modified time: 2017-10-15 22:13:44
*/
//无限轮播
{
	let swboxs=document.querySelector(".swbox ul");
	let swas=document.querySelector(".sunwang");
	let lts=document.querySelector(".zuo");
	let ris=document.querySelector(".you");
	let now=4;
	let flag=true;
	let dir="r"
	let st=setInterval(fn,2000)
	function fn(){
		swboxs.style.transition="all 1s";
		if (dir=="r") {
			now++;
		}else if (dir=="l") {
			now--;
		}
		
		swboxs.style.marginLeft=-295*now+"px";
	}
	swboxs.addEventListener("transitionend",function(){
		if (now===12) {
			swboxs.style.marginLeft="-1180px";
			swboxs.style.transition="none";
			now=4;
		}
		if (now===0) {
			swboxs.style.marginLeft="-2360px";
			swboxs.style.transition="none";
			now=8;
		}
		flag=true;
	})
	swas.onmouseover=window.onblur=function(){
		clearInterval(st);
	}
	swas.onmouseout=window.onfocus=function(){
		st=setInterval(fn,2000);
	}
	ris.onclick=function(){
		dir="r";
		if (flag) {
			fn();
			flag=false;
		}
	}
	lts.onclick=function(){
		dir="l";
		if (flag) {
			fn();
			flag=false;
		}
	}
}
// 公告
{
	let tr =document.querySelector(".dakh");
		let zu=document.querySelector(".next");
		let yo=document.querySelector(".prev");
		let da=document.querySelector("#gg");
		let now=1;
		let st=setInterval(fn,2000)
		function fn(dir="r"){
			if (dir=="r") {
				now++;
				if (now===5) {
					now=1;
				}
			}else if (dir=="l") {
				now--;
				if (now===0) {
					now=4;
				}
			}
			tr.style.marginLeft=-500*now+"px";
		}
		da.onmouseover=function(){
			clearInterval(st);
		}
		da.onmouseout=function(){
			st=setInterval(fn,2000);
		}
		yo.onclick=function(){
			fn("r");
		}
		zu.onclick=function(){
			fn("l");
		}
}