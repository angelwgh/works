'use strict';

/**
 * 顶部通知条模块
 * 
 */
(function () {
	var tips=document.getElementById('J_top-tips');
	var tipsClose=document.getElementById('J_tips-close');
	tips.style.display='none';
	var cookies=getCookie();
	/*var cookies=document.cookie;*///读取cookie
	/*console.log(cookies);*/
	/*var k='tipsHidden=1';*/
	if (!cookies.tipsHidden) {//判断cookie中是否存在'tipsHidden=1'值
		tips.style.display='block';//如过不存在，则显示tips通知条
		addEventListener(tipsClose,'click', function () {
		tips.style.display='none'; //添加鼠标点击事件，点击关闭通知条
		setCookie('tipsHidden',1)		//并在cookie上加上内容
		/*console.log(document.cookie);*/
		})
	}/*else {
		tips.style.display='none';//如果判断不存在
	} */
	
})();

