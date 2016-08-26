(function (win) {
    'use strict';

    var docEl = win.document.documentElement,
        viewportEl = docEl.querySelector('meta[name="viewport"]');

    if (!!!viewportEl) throw 'the tag: <head><meta name="viewport"></head> not found!';

    var ua = win.navigator.userAgent,
        isH5Plus = -1 != ua.indexOf("Html5Plus"),                   //HBuilder的webview
        isWeixin = -1 != ua.indexOf("MicroMessenger"),              //微信
        isUCWeb = -1 != ua.indexOf("UCBrowser"),                    //UCWeb浏览器
        isWindowsPhone = -1 != ua.indexOf("Windows Phone"),
        isIPod = /iPod/.test(ua) && !isWindowsPhone,
        isIPad = /iPad/.test(ua) && !isWindowsPhone,
        isIPhone = /iPhone/.test(ua) && !isWindowsPhone,
        isAndroid = -1 != ua.indexOf('Android') && !isWindowsPhone,
        isAndroidPhone = isAndroid && -1 != ua.indexOf('Mobile'),
        isAndroidPad = isAndroid && !isAndroidPhone,
        isMobile = isWindowsPhone || isAndroidPhone || isAndroidPad || isIPhone || isIPod || isIPad,
        baseWidth = (isIPad || isAndroidPad) ? 720.0 : 480.0,
        densitydpi = isAndroid && !isWeixin && !isUCWeb ? ', target-densitydpi=device-dpi' : '',
        baseViewportContent = 'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width' + densitydpi,
        resetViewport = function () {
            var time = ~~arguments[0],
                setViewport = function () {
                    var sWidth = docEl.getBoundingClientRect().width,
                        scale = sWidth / baseWidth,
                        newViewportContent = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no, width=' + baseWidth + densitydpi;

                    viewportEl.setAttribute('content', newViewportContent);
                };

            (time == 0 && setViewport()) || (time > 0 && viewportEl.setAttribute('content', baseViewportContent) && win.setTimeout(setViewport, time));
        };

    isMobile && resetViewport() && (win.onorientationchange = function () { resetViewport(200); });
    win.Device = { WindowsPhone: isWindowsPhone, AndroidPhone: isAndroidPhone, AndroidPad: isAndroidPad, IPhone: isIPhone, IPod: isIPod, IPad: isIPad };
    win.Runtime = { Weixin: isWeixin, Html5Plus: isH5Plus, UCWeb: isUCWeb };    //这里后续需要继续完善不同的运行环境，如：微博内置浏览器、QQ内置浏览器、系统原生浏览器等
})(window);
