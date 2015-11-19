(function (win) {
    var ua = win.navigator.userAgent,
        inWeixin = -1 != ua.indexOf("MicroMessenger"),
        isUCWeb = -1 != ua.indexOf("UCBrowser"),
        isWP = -1 != ua.indexOf("Windows Phone"),
        isIPod = /iPod/.test(ua) && !isWP,
        isIPad = /iPad/.test(ua) && !isWP,
        isIPhone = /iPhone/.test(ua) && !isWP,
        isAndroid = -1 != ua.indexOf('Android') && !isWP,
        isDroidPhone = isAndroid && -1 != ua.indexOf('Mobile'),
        isDroidPad = isAndroid && !isDroidPhone,
        isMobile = isWP || isDroidPhone || isDroidPad || isIPhone || isIPod || isIPad,
        baseWidth = (isIPad || isDroidPad) ? 720.0 : 480.0,
        initViewport = 'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width',
        docEl = document.documentElement,
        metaEl = docEl.querySelector('meta[name="viewport"]'),
        resetViewport = function () {
            var time = Number(arguments[0]) || 0;
            time > 0 && metaEl.setAttribute('content', initViewport);
            var setViewport = function () {
                var sWidth = docEl.getBoundingClientRect().width,
                    scale = sWidth / baseWidth,
                    setViewport = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no, width=' + baseWidth;

                if (isAndroid && !inWeixin && !isUCWeb) {
                    setViewport += ', target-densitydpi=device-dpi';
                }

                metaEl.setAttribute('content', setViewport);
            };
            (time == 0 && setViewport()) || (time > 0 && win.setTimeout(setViewport, time));
        };

    if (isAndroid && !inWeixin && !isUCWeb) {
        initViewport += ', target-densitydpi=device-dpi';
    }

    if (isMobile) {
        resetViewport();
        win.onorientationchange = function () { resetViewport(200); };
    }

    win.Device = { WindowsPhone: isWP, AndroidPhone: isDroidPhone, AndroidPad: isDroidPad, IPhone: isIPhone, IPod: isIPod, IPad: isIPad };
})(window);
