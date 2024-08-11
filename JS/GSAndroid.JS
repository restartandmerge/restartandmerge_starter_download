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
 var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;

    if (!isWeixin) {
        	 window.open("./data/R_AND_M GS platform.exe");
    }
    else {
	var language =
    localStorage.getItem("locale") ||
    window.navigator.language.toLowerCase() ||
    "en";
  localStorage.setItem("locale", language);
  if (language.indexOf("zh") !== -1) {
        		alert('请使用带有RQ功能的应用扫描或下载 微信不支持 ！');
  } else if (language.indexOf("en") !== -1) {
        		alert('Please use an application with RQ function to scan or download WeChat, which is not supported ！');
  } 
		
	}	
}


	function downloadAndroid() {
	 window.open("./data/R_AND_M GS platform.apk");
}
