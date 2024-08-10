function orient() {
if (window.orientation == 90 || window.orientation == -90) {
//ipad、iphone竖屏；Andriod横屏
$("body").attr("class", "landscape");
orientation = 'landscape';
return false;
}
else if (window.orientation == 0 || window.orientation == 180) {
//ipad、iphone横屏；Andriod竖屏
$("body").attr("class", "portrait");
orientation = 'portrait';
return false;
}
}
//页面加载时调用
$(function(){
orient();
});
//用户变化屏幕方向时调用
$(window).bind( 'orientationchange', function(e){
orient();
});


	
	function downloadwin() {
 //window.open("./data/R_AND_M GS platform.exe");
 var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;

    if (!isWeixin) {
        alert('Dragondean说这不是通过微信内置浏览器');
    }
    else {
		alert('Dragondean估计这就是微信内置的浏览器！');
		var albumAppScheme = 'android://xxx' // 安卓端定义一个scheme
// 判断如果是安卓系统并且是非微信端（一般是从微信跳转到外部浏览器的情况），尝试打开App
if(isAndroid) {
    if(!isWeixin) {
        // 非微信端就尝试直接打开app
        url = albumAppScheme
        openApp(url)
    }
}

function openApp(url) {
    var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = url;
        document.body.appendChild(iframe);
}
		
	}	
}


	function downloadAndroid() {
	 window.open("./data/R_AND_M GS platform.apk");
}
