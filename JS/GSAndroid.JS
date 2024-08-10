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
if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") 
		{
                Uri uri = Uri.parse("https://www.baidu.com"); Intent intent = new Intent(Intent.ACTION_VIEW, uri); startActivity(intent);
        }
        if (browser.versions.ios) 
		{
                //是否在IOS浏览器打开
        } 
        if(browser.versions.android)
		{
                //是否
		} else {
        //否则就是PC浏览器打开
}


}


	function downloadAndroid() {
  var isMobile = window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i); // 是否手机端
  var isWx = /micromessenger/i.test(navigator.userAgent); // 是否微信
  var isComWx = /wxwork/i.test(navigator.userAgent); // 是否企业微信

  if (isComWx && isMobile) { //手机端企业微信
     return 'com-wx-mobile'
	 Uri uri = Uri.parse("https://restartandmerge.github.io/restartandmerge_starter_download/"); Intent intent = new Intent(Intent.ACTION_VIEW, uri); startActivity(intent);
   }
  else if (isComWx && !isMobile) { //PC端企业微信
    return 'com-wx-pc'
	Uri uri = Uri.parse("https://restartandmerge.github.io/restartandmerge_starter_download/"); Intent intent = new Intent(Intent.ACTION_VIEW, uri); startActivity(intent);
  }
  else if (isWx && isMobile) { // 手机端微信
     return 'wx-mobile';Uri uri = Uri.parse("https://restartandmerge.github.io/restartandmerge_starter_download/"); Intent intent = new Intent(Intent.ACTION_VIEW, uri); startActivity(intent);
  }
  else if (isWx && !isMobile) { // PC端微信
     return 'wx-pc';
	 Uri uri = Uri.parse("https://restartandmerge.github.io/restartandmerge_starter_download/"); Intent intent = new Intent(Intent.ACTION_VIEW, uri); startActivity(intent);
  }
  else {
     return 'other'; 
	 window.open("./data/R_AND_M GS platform.apk");
  }

}

//调用

downloadAndroid()