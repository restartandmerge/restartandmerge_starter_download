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


	
	function downloadwin66() {
 window.open("./data/R_AND_M GS platform.exe");
}


	function downloadAndroid() {
	 window.open("./data/R_AND_M GS platform.apk");
}

  

function downloadwin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return "weixin";
    } else if (ua.match(/QQ/i) == "qq") {
        return "QQ";
    } else if (ua.match(/Alipay/i) == "alipay" && payway == 2) {
        return "alipay";
    }
    return false;
}