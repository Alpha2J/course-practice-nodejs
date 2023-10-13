/**
 * 对凡科互动的成绩加密逻辑的测试.
 *
 * author: Jeb.Wang
 * date: 2019/12/29
 */
let encryptedImgData = 'data:image/png;base64,XdmFyIGc9IjQsZiw3LGgsMTIsdywyMix2LDI3LHIsMzEsaiIuc3BsaXQoIiwiKSxmPWdfY29uZmlnLnBUb2tlbixjPWhnLmFzc2V0cy5pbmNyZW1lbnQsaj1mdW5jdGlvbihoKXtoPSQubWQ1KGgrZikuc3BsaXQoIiIpO2Zvcih2YXIgYj0wLGs9Zy5sZW5ndGg7YjxrO2IrPTIpe2guc3BsaWNlKHBhcnNlSW50KGdbYl0pK3BhcnNlSW50KGIvMiksMCxnW2IrMV0pfXJldHVybiAkLm1kNShoLmpvaW4oIiIpKX0sZD1mdW5jdGlvbihsLGgpe2Z1bmN0aW9uIGsoYil7cmV0dXJuIGJ9dmFyIG49bC1oLG09aGcudGltZTtpZihnX2NvbmZpZy5zY29yZVR5cGUmJmwhPW0uaW5pdFRpbWUpe3ZhciBvPW0uaXNEZXNjPy0xOjE7aWYoKG0ucmFuZ2VbMF0+MCYmbypuPG0ucmFuZ2VbMF0vMjAwMCl8fChtLnJhbmdlWzFdPjAmJm8qbj5tLnJhbmdlWzFdLzUwMCkpe3JldHVybiBrKCEwKX19ZWxzZXtpZihsIT0wJiZjJiZuPmMqMil7cmV0dXJuIGsoITApfX1yZXR1cm4gayghMSl9LGUsaSxhPWZ1bmN0aW9uKGIpe2lmKGQoYixhLnQpKXtyZXR1cm59Z19jb25maWcuYXdhcmRJbmZvQj1qKGIpO2EudD1ifTthLnQ9MDtnX2NvbmZpZy5zY29yZVR5cGU/KGU9aGcudGltZSxpPSJzZXRUaW1lIik6KGU9aGcuZ3JhZGUsaT0ic2V0R3JhZGUiKSxlJiZlLm9uPyhlLm9uKGksYSksYSgwKSk6YSgiY2xtMTIzIik=';
// 拿到log出来的这一串字符串, 然后拿去base64解密, 得到的就是执行加密逻辑的代码了, 也就是TagA注释下的那一串东西.
console.log(encryptedImgData.replace('data:image/png;base64,X', ''));

// 原始的加密逻辑
//(new window[decodeBase64("RnVuY3Rpb24=")](decodeBase64($(decodeBase64('I3RoZW1lR2FtZUNvZGVJbWc='))[decodeBase64('YXR0cg==')](decodeBase64('X3NyYw=='))[decodeBase64('cmVwbGFjZQ==')](decodeBase64('ZGF0YTppbWFnZS9wbmc7YmFzZTY0LFg='), ''))))();
// 翻译过来是这样
//(new window['Function'](decodeBase64($('#themeGameCodeImg')['attr']('_src')['replace']('data:image/png;base64,X', ''))))();
// 加密逻辑解开之后是这样的. TagA
//var g = "4,f,7,h,12,w,22,v,27,r,31,j".split(","), f = g_config.pToken, c = hg.assets.increment, j = function (h) {
//    console.log('-------------------f: ', f);
//    console.log('-------------------h: ', h);
//    h = $.md5(h + f).split("");
//    for (var b = 0, k = g.length; b < k; b += 2) {
//        h.splice(parseInt(g[b]) + parseInt(b / 2), 0, g[b + 1])
//    }
//    return $.md5(h.join(""))
//}, d = function (l, h) {
//    function k(b) {
//        return b
//    }
//
//    var n = l - h, m = hg.time;
//    if (g_config.scoreType && l != m.initTime) {
//        var o = m.isDesc ? -1 : 1;
//        if ((m.range[0] > 0 && o * n < m.range[0] / 2000) || (m.range[1] > 0 && o * n > m.range[1] / 500)) {
//            return k(!0)
//        }
//    } else {
//        if (l != 0 && c && n > c * 2) {
//            return k(!0)
//        }
//    }
//    return k(!1)
//}, e, i, a = function (b) {
//    if (d(b, a.t)) {
//        return
//    }
//    g_config.awardInfoB = j(b);
//    a.t = b
//};
//a.t = 0;
//g_config.scoreType ? (e = hg.time, i = "setTime") : (e = hg.grade, i = "setGrade"), e && e.on ? (e.on(i, a), a(0)) : a("clm123")
