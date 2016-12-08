/**
 * Created by chenanguo on 2016/10/27.
 */
var info = {
    "pageid": "play",
    "isDanmaku": 1,
    "cid": 6,
    "ptvcid": 5,
    "pid": 10017794,
    "vid": "24414342",
    "mmsid": "42175321,",
    "recVid": "24414342",
    "title": "火影忍者664",
    "authtype": 1,
    "trylook": 0,
    "appGuideTime": 5,
    "chargetype": 0,
    "duration": 1388,
    "isUnicom": false,
    "isautoloadplay": 1,
    "openapp": 1,
    "trueVV": 89573321,
    "showVV": 89573321,
    "albumType": "num",
    "total_episode": 0,
    "episode": "",
    "now_episode": 704,
    "is_end": 0,
    "is_pay": false,
    "is_home_made": false,
    "share": {
        "img": "http://i3.letvimg.com/lc05_isvrs/201601/14/17/25/63ca3b3b-54f0-47cf-b3a3-d31eeec4b0b5.jpg",
        "url": "http://m.le.com/vplay_24414342.html?locale=zh_cn",
        "title": "「8957.3万人正在关注」火影忍者664",
        "desc": "火影忍者 第664话「叛逃」！分享给你，一起来看吧！"
    },
    "appGuideImage": null,
    "appGuideUniversalLink": "http://app.m.letv.com/download_general.php?ref=010110468",
    "appGuideApplicationLink": "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&amp;ckey=CK1302109994632",
    "videoType": {
        "isPositive": 1,
        "isColumn": 0,
        "isShort": 0,
        "isPart": 0,
        "isHasPositive": 0,
        "isPre": 0,
        "isShowPositive": 0
    },
    "count": {
        "vdm_count": 2950,
        "is_comm": 1,
        "plist_count": 208,
        "plist_score": 9.6,
        "vcomm_count": 1514,
        "is_dm": 1,
        "pcomm_count": 14826,
        "preply": 2267,
        "vreply": 228,
        "vnpcomm": 1467,
        "pdm_count": 71570,
        "media_play_count": 12883412,
        "down": 7441,
        "up": 21353,
        "pnpcomm": 14237,
        "plist_play_count": 89573321
    },
    "lang": "zh_cn",
    "region": "CN"
};
window.Stat = {data: {cid: info.ptvcid}};
!function (e, o) {
    e.console || (console = {
        log: function () {
        }, dir: function () {
        }, error: function () {
        }
    }), e.JSTracker = {
        send: function () {
        }
    };
    try {
        o.domain = location.hostname.split(".").slice(-2).join(".")
    } catch (n) {
    }
    var t = function (e) {
        if (!e)return {};
        e = e.slice(1).split("&");
        for (var o, n, t = {}, i = 0, r = e.length; r > i; i++)o = e[i], o && (n = o.indexOf("="), v = decodeURIComponent(o.slice(n + 1)), v && n > 0 && (t[o.slice(0, n).toLowerCase()] = v));
        return t
    }(location.search), i = function (e) {
        e += "=";
        for (var n, t = (o.cookie || "").split(";"), i = e.length, r = t.length; r--;)if (n = t[r].replace(/^\s+/, ""), n.slice(0, i) === e)return n = decodeURIComponent(n.slice(i)).replace(/\s+$/, ""), "deleted" === n ? "" : n;
        return ""
    }, r = {"0101": 1, "0102": 1, "0103": 1, "0104": 1}[t.ref], a = navigator.userAgent.toLowerCase();
    info.ua = {
        src: a,
        android: a.indexOf("android") > -1,
        ios: a.indexOf("iphone os") > -1
    }, info.query = t, a.indexOf("lesports") > -1 ? (info.noheader = info.nofooter = 1, t.x && ("11" === t.x ? info.noheader = info.nofooter = 0 : "10" === t.x ? info.noheader = 0 : "01" === t.x && (info.nofooter = 0))) : (info.noheader = "1" === i("noheader") || t.noheader || r, info.nofooter = "1" === i("nofooter") || t.nofooter || r), r || i("openby") || a.indexOf("letvclient") > -1 || a.indexOf("letvmobileclient") > -1 ? info.openby = "letvapp" : /\bx\d\d\d\b|leuibrowser|eui browser/.test(a) && (info.openby = "letvphone");
    var l = i("lang");
    l && (info.lang === l || t.locale || info.lang && location.reload())
}(window, document), "live/play" === info.pageid || "izt" === info.pageid || function (e) {
    function o() {
        var o = a.getBoundingClientRect().width;
        o / n > 540 && (o = 540 * n), e.rem = o / 41.4, a.style.fontSize = e.rem + "px"
    }

    var n, t, i, r = e.document, a = r.documentElement, l = r.querySelector('meta[name="viewport"]'), d = (r.querySelector('meta[name="flexible"]'), l.getAttribute("content").match(/initial\-scale=(["‘]?)([\d\.]+)\1?/));
    d && (t = parseFloat(d[2]), n = parseInt(1 / t)), e.dpr = n, e.addEventListener("resize", function () {
        clearTimeout(i), i = setTimeout(o, 300)
    }, !1), e.addEventListener("pageshow", function (e) {
        e.persisted && (clearTimeout(i), i = setTimeout(o, 300))
    }, !1), "complete" === r.readyState ? r.body.style.fontSize = 12 * n + "px" : r.addEventListener("DOMContentLoaded", function () {
        r.body.style.fontSize = 12 * n + "px"
    }, !1), o()
}(window);
info.ua.ios ? !function () {
    var p = {
        p1: {
            img: "http://i3.letvimg.com/lc07_iscms/201607/25/10/36/f12c8766295b4383a7a715ac59948336.png ",
            url: "http://app.m.letv.com/download_general.php?ref=010110678&iref=dwhkY9&pref=dQtYFh",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "26114273",
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110978&iref=dwhkY9&pref=dQtYFh"}
        },
        p13: {
            img: " http://i1.letvimg.com/lc04_iscms/201601/11/18/00/148f85ac725943a99178f1f64bca0648.png",
            iosUrl: "https://itunes.apple.com/cn/app/le-shi-ti-yu/id983202217?mt=8",
            androidUrl: "http://g3.letv.cn/vod/v1/MjAxLzE4LzExMS9jbG91ZC13ZWIvMC9sYzA2XzIwMTYwNTA2LzEwMjkxMzI1MjcvbGVzcG9ydF92Mi4yLjBfbGVzcG9ydC5hcGs=?b=1234&np=1",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.lesports.glivesports",
            app: "lesport"
        },
        p2: {
            img: "http://i3.letvimg.com/lc07_iscms/201607/25/10/36/f12c8766295b4383a7a715ac59948336.png",
            url: "http://app.m.letv.com/download.php?from=downloadapptips&iref=BRdcs4&pref=k8EBd0",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "26114273",
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110978&iref=dwhkY9&pref=dQtYFh"}
        },
        p23: {
            img: " http://i1.letvimg.com/lc04_iscms/201601/11/18/00/148f85ac725943a99178f1f64bca0648.png",
            iosUrl: "https://itunes.apple.com/cn/app/le-shi-ti-yu/id983202217?mt=8",
            androidUrl: "http://g3.letv.cn/vod/v1/MjAxLzE4LzExMS9jbG91ZC13ZWIvMC9sYzA2XzIwMTYwNTA2LzEwMjkxMzI1MjcvbGVzcG9ydF92Mi4yLjBfbGVzcG9ydC5hcGs=?b=1234&np=1",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.lesports.glivesports",
            app: "lesport"
        },
        p5: {
            url: "http://app.m.letv.com/download_general.php?ref=010110377&iref=ElwNB1&pref=8kwhM5",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "",
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110984&iref=dwhkY9&pref=dQtYFh"}
        },
        p51: {
            url: "http://app.m.letv.com/download_general.php?ref=010110378&iref=ARJhg0&pref=xFNJNl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "",
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110772&iref=dwhkY9&pref=dQtYFh"}
        },
        p8: {
            titleImg: "http://i0.letvimg.com/lc06_iscms/201612/01/11/02/e551beb407574aa3992830270f624cf4.jpg",
            conImg: "http://i3.letvimg.com/lc03_iscms/201612/01/11/02/5fbba1e14bf54d1595472c67c40a5de0.jpg",
            url: "http://app.m.letv.com/download.php?from=launchpage&iref=tcc88g&pref=588IF9",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            background: "#000000",
            app: "letv",
            vid: "27168412",
            titleImg_us: "http://i2.letvimg.com/lc04_iscms/201610/24/18/07/57a273bca331412fa004551c0dbcb122.jpg",
            conImg_us: "http://i1.letvimg.com/lc04_iscms/201610/24/18/07/201aa1e7a0554a8b8994762cd13ed034.jpg",
            url_us: "http://app.m.letv.com/download.php?from=launchpage&iref=tcc88g&pref=588IF9",
            wxUrl_us: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            background_us: "#3D5061",
            app_us: "letv",
            vid_us: "27089702",
            titleImg_hk: "http://i1.letvimg.com/lc03_iscms/201611/19/15/02/429a4b7e0b2045328a054f19b3421813.jpg",
            conImg_hk: "http://i3.letvimg.com/lc04_iscms/201611/19/15/03/3738507e3dde40c7be2fd241abb4b295.jpg",
            url_hk: "http://app.m.letv.com/download.php?from=launchpage&iref=tcc88g&pref=588IF9",
            wxUrl_hk: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            background_hk: "#000000",
            app_hk: "letv",
            vid_hk: "27068091"
        },
        p9: {
            img: "http://i2.letvimg.com/lc07_iscms/201611/07/10/26/3f380b577e2a4ff4a5a5a12d5ca3d45a.png",
            url: "http://app.m.letv.com/download_general.php?ref=010110470&iref=d4cw98&pref=F58UZl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "26946887"
        },
        p10: {
            img: "http://i2.letvimg.com/lc07_iscms/201611/07/10/26/3f380b577e2a4ff4a5a5a12d5ca3d45a.png",
            url: "http://app.m.letv.com/download_general.php?ref=010110489&iref=gMFtAh&pref=dw9Ido",
            app: "letv",
            vid: "26946887"
        },
        p90: {
            img: "http://i2.letvimg.com/lc07_iscms/201608/03/18/38/3a97241069e947b1adac2ca795a06f23.png",
            url: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&g_f=991646",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "26467938"
        },
        p100: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p101: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p102: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p103: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p104: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p105: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        }
    };
    __PromotionApp = {
        homeBanner: {0: [{random: 100, options: p.p1}], 4: [{random: 100, options: p.p13}]},
        playfixTip: {
            0: [{random: 100, options: p.p100}],
            1: [{random: 100, options: p.p101}],
            2: [{random: 100, options: p.p101}],
            3: [{random: 100, options: p.p102}],
            4: [{random: 100, options: p.p103}],
            5: [{random: 100, options: p.p104}],
            11: [{random: 100, options: p.p105}]
        },
        shareplayBanner: {0: [{random: 100, options: p.p90}], 4: [{random: 100, options: p.p23}]},
        playBanner: {0: [{random: 100, options: p.p2}], 4: [{random: 100, options: p.p23}]},
        playScan: {0: [{random: 100, options: p.p5}]},
        playDownload: {0: [{random: 100, options: p.p51}]},
        startPage: {0: [{random: 100, options: p.p8}]},
        "leso/home": {0: [{random: 100, options: p.p9}]},
        "leso/list": {0: [{random: 100, options: p.p10}]}
    }, __homeOpenApp = {
        common: {
            url: "http://app.m.letv.com/download_general.php?ref=010110454&iref=hocMJ1&pref=R14I9c",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110771&iref=dwhkY9&pref=dQtYFh"}
        },
        play_vlist: {
            url: "http://app.m.letv.com/download_general.php?ref=010110491&iref=0sIZ9c&pref=pElgYl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        },
        mzs: {
            url: "http://app.m.letv.com/download_general.php?ref=010110553&iref=1QNt0k&pref=BJhoEl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        }
    }, __playerOpenApp = {
        playEnd: {
            url: "http://app.m.letv.com/download_general.php?ref=010110455&iref=9Q1Ix1&pref=gMhYp8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client",
            pic: "http://i1.letvimg.com/lc06_img/201604/12/14/59/pay_bg.jpg",
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110982&iref=dwhkY9&pref=dQtYFh"}
        },
        appTryLook: {
            url: "http://app.m.letv.com/download_general.php?ref=010110468&iref=h0AlU9&pref=hoUNdk",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1328890128755",
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110982&iref=dwhkY9&pref=dQtYFh"}
        },
        authBan: {url: "http://app.m.letv.com/download_general.php?ref=010110455&iref=9Q1Ix1&pref=gMhYp8"},
        liveAuthBan: {url: "http://app.m.letv.com/download_general.php?ref=010110495&iref=Jh8EZ5&pref=tYhUJ1"}
    }, __guideApp = {
        open: {
            url: "http://app.m.letv.com/download_general.php?ref=010110565&iref=U1g0cs&pref=F1cc4s",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        },
        download: {
            url: "http://app.m.letv.com/download_general.php?ref=010110566&iref=dM1Ut8&pref=1INxd4",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        }
    }, __APPGUIDE = {
        miyue: {url: "http://i2.letvimg.com/lc05_img/201601/11/14/37/1436/miyuezhuan.png"},
        common: {url: "http://i1.letvimg.com/lc05_img/201601/11/14/37/1436/ms_layer.png"}
    }
}() : !function () {
    var p = {
        p1: {
            img: "http://i3.letvimg.com/lc07_iscms/201607/25/10/36/f12c8766295b4383a7a715ac59948336.png",
            url: "http://app.m.letv.com/download_general.php?ref=010110678&iref=dwhkY9&pref=dQtYFh",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "26114273",
            tips: ["打开乐视视频app，提升3倍流畅度", "首播大剧抢先看，尽在乐视视频app"],
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110978&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        p13: {
            img: " http://i1.letvimg.com/lc04_iscms/201601/11/18/00/148f85ac725943a99178f1f64bca0648.png",
            iosUrl: "https://itunes.apple.com/cn/app/le-shi-ti-yu/id983202217?mt=8",
            androidUrl: "http://g3.letv.cn/vod/v1/MjAxLzE4LzExMS9jbG91ZC13ZWIvMC9sYzA2XzIwMTYwNTA2LzEwMjkxMzI1MjcvbGVzcG9ydF92Mi4yLjBfbGVzcG9ydC5hcGs=?b=1234&np=1",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.lesports.glivesports",
            app: "lesport"
        },
        p2: {
            img: "http://i3.letvimg.com/lc07_iscms/201607/25/10/36/f12c8766295b4383a7a715ac59948336.png",
            url: "http://app.m.letv.com/download.php?from=downloadapptips&iref=BRdcs4&pref=k8EBd0",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "26114273",
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110978&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        p23: {
            img: " http://i1.letvimg.com/lc04_iscms/201601/11/18/00/148f85ac725943a99178f1f64bca0648.png",
            iosUrl: "https://itunes.apple.com/cn/app/le-shi-ti-yu/id983202217?mt=8",
            androidUrl: "http://g3.letv.cn/vod/v1/MjAxLzE4LzExMS9jbG91ZC13ZWIvMC9sYzA2XzIwMTYwNTA2LzEwMjkxMzI1MjcvbGVzcG9ydF92Mi4yLjBfbGVzcG9ydC5hcGs=?b=1234&np=1",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.lesports.glivesports",
            app: "lesport"
        },
        p5: {
            url: "http://app.m.letv.com/download_general.php?ref=010110377&iref=ElwNB1&pref=8kwhM5",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "24185783",
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110984&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        p51: {
            url: "http://app.m.letv.com/download_general.php?ref=010110378&iref=ARJhg0&pref=xFNJNl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "",
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110772&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        p8: {
            titleImg: "http://i0.letvimg.com/lc06_iscms/201612/01/11/02/e551beb407574aa3992830270f624cf4.jpg",
            conImg: "http://i3.letvimg.com/lc03_iscms/201612/01/11/02/5fbba1e14bf54d1595472c67c40a5de0.jpg",
            url: "http://app.m.letv.com/download.php?from=launchpage&iref=tcc88g&pref=588IF9",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            background: "#000000",
            app: "letv",
            vid: "27168412",
            titleImg_us: "http://i2.letvimg.com/lc04_iscms/201610/24/18/07/57a273bca331412fa004551c0dbcb122.jpg",
            conImg_us: "http://i1.letvimg.com/lc04_iscms/201610/24/18/07/201aa1e7a0554a8b8994762cd13ed034.jpg",
            url_us: "http://app.m.letv.com/download.php?from=launchpage&iref=tcc88g&pref=588IF9",
            wxUrl_us: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            background_us: "#3D5061",
            app_us: "letv",
            vid_us: "26821245",
            titleImg_hk: "http://i1.letvimg.com/lc03_iscms/201611/19/15/02/429a4b7e0b2045328a054f19b3421813.jpg",
            conImg_hk: "http://i3.letvimg.com/lc04_iscms/201611/19/15/03/3738507e3dde40c7be2fd241abb4b295.jpg",
            url_hk: "http://app.m.letv.com/download.php?from=launchpage&iref=tcc88g&pref=588IF9",
            wxUrl_hk: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            background_hk: "#000000",
            app_hk: "letv",
            vid_hk: "27068091"
        },
        p9: {
            img: "http://i2.letvimg.com/lc07_iscms/201611/07/10/26/3f380b577e2a4ff4a5a5a12d5ca3d45a.png",
            url: "http://app.m.letv.com/download_general.php?ref=010110470&iref=d4cw98&pref=F58UZl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "26946887"
        },
        p10: {
            img: "http://i2.letvimg.com/lc07_iscms/201611/07/10/26/3f380b577e2a4ff4a5a5a12d5ca3d45a.png",
            url: "http://app.m.letv.com/download_general.php?ref=010110489&iref=gMFtAh&pref=dw9Ido",
            app: "letv",
            vid: "26946887"
        },
        p90: {
            img: "http://i0.letvimg.com/lc04_iscms/201604/18/14/51/9e92afb4a3984c428c8bb5da81dd03ea.png",
            url: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&g_f=991646",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            vid: "24771285"
        },
        p100: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        p101: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p102: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p103: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p104: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        },
        p105: {
            url: "http://app.m.letv.com/download_general.php?ref=010110828&iref=kkA9k8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            app: "letv",
            tips: ["打开乐视视频APP，提升3倍流畅度"],
            thirdApp: {"360video": "http://app.m.letv.com/download_general.php?ref=010110970&iref=dwhkY9&pref=dQtYFh"}
        }
    };
    __PromotionApp = {
        homeBanner: {0: [{random: 100, options: p.p1}], 4: [{random: 100, options: p.p13}]},
        playfixTip: {
            0: [{random: 100, options: p.p100}],
            1: [{random: 100, options: p.p101}],
            2: [{random: 100, options: p.p101}],
            3: [{random: 100, options: p.p102}],
            4: [{random: 100, options: p.p103}],
            5: [{random: 100, options: p.p104}],
            11: [{random: 100, options: p.p105}]
        },
        shareplayBanner: {0: [{random: 100, options: p.p90}], 4: [{random: 100, options: p.p23}]},
        playBanner: {0: [{random: 100, options: p.p2}], 4: [{random: 100, options: p.p23}]},
        playScan: {0: [{random: 100, options: p.p5}]},
        playDownload: {0: [{random: 100, options: p.p51}]},
        startPage: {0: [{random: 100, options: p.p8}]},
        "leso/home": {0: [{random: 100, options: p.p9}]},
        "leso/list": {0: [{random: 100, options: p.p10}]}
    }, __homeOpenApp = {
        common: {
            url: "http://app.m.letv.com/download_general.php?ref=010110454&iref=hocMJ1&pref=R14I9c",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110771&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        play_vlist: {
            url: "http://app.m.letv.com/download_general.php?ref=010110491&iref=0sIZ9c&pref=pElgYl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        },
        mzs: {
            url: "http://app.m.letv.com/download_general.php?ref=010110553&iref=1QNt0k&pref=BJhoEl",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        }
    }, __playerOpenApp = {
        playEnd: {
            url: "http://app.m.letv.com/download_general.php?ref=010110455&iref=9Q1Ix1&pref=gMhYp8",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client",
            pic: "http://i1.letvimg.com/lc06_img/201604/12/14/59/pay_bg.jpg",
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110982&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        appTryLook: {
            url: "http://app.m.letv.com/download_general.php?ref=010110468&iref=h0AlU9&pref=hoUNdk",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1328890128755",
            thirdApp: {
                "360video": "http://app.m.letv.com/download_general.php?ref=010110982&iref=dwhkY9&pref=dQtYFh",
                toutiao: "http://app.m.letv.com/download_general.php?ref=010111233&iref=dwhkY9&pref=dQtYFh"
            }
        },
        authBan: {url: "http://app.m.letv.com/download_general.php?ref=010110455&iref=9Q1Ix1&pref=gMhYp8"},
        liveAuthBan: {url: "http://app.m.letv.com/download_general.php?ref=010110495&iref=Jh8EZ5&pref=tYhUJ1"}
    }, __guideApp = {
        open: {
            url: "http://app.m.letv.com/download_general.php?ref=010110565&iref=U1g0cs&pref=F1cc4s",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        },
        download: {
            url: "http://app.m.letv.com/download_general.php?ref=010110566&iref=dM1Ut8&pref=1INxd4",
            wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
        }
    }, __APPGUIDE = {
        miyue: {url: "http://i2.letvimg.com/lc05_img/201601/11/14/37/1436/miyuezhuan.png"},
        common: {url: "http://i1.letvimg.com/lc05_img/201601/11/14/37/1436/ms_layer.png"}
    }
}();
info.noheader && document.write('<style type="text/css">header{display:none !important}.search_top .search_cnt{top:0}</style>');
info.nofooter && document.write('<style type="text/css">footer{display:none !important}</style>');