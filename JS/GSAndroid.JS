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
	}	
}


	function downloadAndroid() {
	 window.open("./data/R_AND_M GS platform.apk");
}
