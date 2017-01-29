/* file tree:
|...lem:main/search/leso_list_v2.js
|   |...lib:gmu/zepto.imglazyload_v2.js
|   |   |...lib:gmu/zepto.extend.js
|   |...lem:components/search/leso_stat.js
|   |   |...lem:components/app/apph5Adapter.js
|   |   |   |...lem:sdk/bridge/index.js
|   |   |   |   |...lem:sdk/bridge/base/cb.js
|   |   |   |   |   |...lem:sdk/bridge/base/listeners.js
|   |   |   |   |...lem:sdk/common/index.js
|   |   |   |   |   |...lem:sdk/common/decode.js
|   |   |   |   |   |   |...lem:sdk/common/md5.js
|   |   |   |   |   |   |...lem:sdk/common/base64.js
|   |   |   |   |...lem:sdk/bridge/app.js
|   |   |   |   |   |...lem:sdk/bridge/base/register.js
|   |   |   |   |...lem:sdk/bridge/user.js
|   |   |   |   |   |...lem:sdk/bridge/base/event.js
|   |   |   |   |...lem:sdk/bridge/video.js
|   |   |   |   |...lem:sdk/bridge/shake.js
|   |   |   |   |...lem:sdk/bridge/share.js
|   |   |   |   |...lem:sdk/bridge/alert.js
|   |   |   |   |...lem:sdk/bridge/device.js
|   |   |   |   |...lem:sdk/bridge/qrcode.js
|   |   |   |   |...lem:sdk/bridge/screen.js
|   |   |   |   |...lem:sdk/bridge/network.js
|   |   |   |   |...lem:sdk/bridge/browser.js
|   |   |   |   |...lem:sdk/bridge/gallery.js
|   |   |   |   |...lem:sdk/bridge/webview.js
|   |   |   |   |...lem:sdk/bridge/geolocation.js
|   |   |   |   |...lem:sdk/bridge/vip.js
|   |   |   |   |...lem:sdk/bridge/hasFeature.js
|   |   |   |   |...lem:sdk/bridge/gEvent.js
|   |   |   |...lem:components/user/getUserInfo.js
|   |   |   |...lem:components/share/share_base.js
|   |   |   |   |...lib:weixin.js
|   |   |   |   |...lem:components/player/mPlayer.js
|   |   |   |   |...lem:sdk/share/index.js
|   |   |   |   |   |...lem:sdk/share/assign.js
|   |   |   |   |   |...lem:sdk/share/appShare.js
|   |   |   |   |   |...lem:sdk/share/url.js
|   |   |   |   |   |...lem:sdk/share/jsonp.js
|   |   |   |   |...lem:air/lang/extend.js
|   |   |   |   |...lem:air/env/ua.js
|   |   |   |   |...lem:components/langPack/pub.js
|   |   |   |   |   |...lem:components/com_base/global.js
|   |   |   |...lem:components/share/share_ui_imitateApp.js
|   |   |   |   |...lem:components/util/events.js
|   |   |   |   |   |...lem:air/event/givee.js
|   |   |   |...lem:components/app/appAddList.js
|   |...lem:air/util/Url.js
|   |...lem:projects/search/search_v2.js
|   |   |...lem:air/array/uniqueUnshift.js
|   |   |...lem:air/array/each.js
|   |   |...lem:components/touchComp/animateScroll.js
|   |   |   |...lem:components/touchComp/touchEvent.js
|   |   |   |...lem:components/touchComp/touchUtil.js
|   |   |   |...lem:components/touchComp/leTimer.js
|   |   |...lem:projects/search/suggest.js
|   |   |   |...lib:gmu/widget/suggestion/suggestion.js
|   |   |   |   |...lib:gmu/core/widget.js
|   |   |   |   |   |...lib:gmu/core/gmu.js
|   |   |   |   |   |...lib:gmu/core/event.js
|   |   |   |   |   |...lib:gmu/extend/parseTpl.js
|   |   |   |   |...lib:gmu/extend/highlight.js
|   |   |   |...lib:gmu/widget/suggestion/sendrequest.js
|   |   |   |...lib:gmu/widget/suggestion/renderlist.js
|   |...lem:projects/search/lesoList/leso_list_live_v2.js
|   |   |...lem:components/com_banner/common_focus.js
|   |   |   |...lib:iscroll.js
|   |   |   |...lem:components/util/img_load.js
|   |   |...lem:projects/search/lesoList/leso_list_focus_v2.js
|   |...lem:projects/search/lesoList/leso_list_app_v2.js
|   |   |...lem:components/app/open_app.js
|   |   |   |...lem:components/app/open_app_schema.js
|   |   |   |...lem:components/tips/msTip.js
|   |   |   |...lem:components/tips/msTip_v2.js
|   |   |   |...lem:components/tips/msTip_v3.js
|   |...lem:projects/search/lesoList/leso_list_showmore_v2.js
|   |...lem:projects/search/lesoList/leso_list_album_v2.js
|   |   |...lem:projects/search/leso_list_sitelist.js
|   |...lem:projects/search/lesoList/leso_list_tvalbum_v2.js
|   |   |...lem:air/util/tpl.js
|   |   |...lem:projects/search/lesoList/leso_list_render_v2.js
|   |   |   |...lem:components/com_banner/bottom_popup_v2.js
|   |   |   |   |...lem:components/com_banner/prefixstyle.js
|   |   |...lem:projects/search/lesoList/leso_list_albumnav_v2.js
|   |   |   |...lem:components/util/adjustBottom.js
|   |...lem:projects/search/lesoList/changesite_v2.js
|   |...lem:projects/search/lesoList/leso_list_nav_v2.js
|   |...lem:projects/search/lesoList/leso_list_scroll_v2.js
|   |...lem:projects/search/lesoList/leso_list_stat_v2.js
|   |...lem:projects/search/lesoList/leso_empty_related_v2.js
|   |   |...lem:views/related_list.js
|   |   |   |...lem:views/view.js
|   |   |   |   |...lib:hogan/hogan.js
|   |   |   |...lem:tpls/related_list.js
|   |...lem:projects/search/lesoList/leso_list_loadmore_v2.js
|   |   |...lem:air/util/formatTime.js
|   |   |...lem:air/number/shorten.js
|   |   |...lem:air/util/formatDuration.js
|   |   |...lem:air/util/scrollingLoader.js
*/
/* === lib:gmu/zepto.extend.js === */
;(function($){
    $.extend($, {
        contains: function(parent, node) {
            
            return parent.compareDocumentPosition
                ? !!(parent.compareDocumentPosition(node) & 16)
                : parent !== node && parent.contains(node)
        }
    });
})(Zepto);


//Core.js
;(function($, undefined) {
    //扩展在Zepto静态类上
    $.extend($, {
        
        toString: function(obj) {
            return Object.prototype.toString.call(obj);
        },

        
        slice: function(array, index) {
            return Array.prototype.slice.call(array, index || 0);
        },

        
        later: function(fn, when, periodic, context, data) {
            return window['set' + (periodic ? 'Interval' : 'Timeout')](function() {
                fn.apply(context, data);
            }, when || 0);
        },

        
        parseTpl: function(str, data) {
            var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' + 'with(obj||{}){__p.push(\'' + str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g, function(match, code) {
                return "'," + code.replace(/\\'/g, "'") + ",'";
            }).replace(/<%([\s\S]+?)%>/g, function(match, code) {
                    return "');" + code.replace(/\\'/g, "'").replace(/[\r\n\t]/g, ' ') + "__p.push('";
                }).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "');}return __p.join('');";
            var func = new Function('obj', tmpl);
            return data ? func(data) : func;
        },

        
        throttle: function(delay, fn, debounce_mode) {
            var last = 0,
                timeId;

            if (typeof fn !== 'function') {
                debounce_mode = fn;
                fn = delay;
                delay = 250;
            }

            function wrapper() {
                var that = this,
                    period = Date.now() - last,
                    args = arguments;

                function exec() {
                    last = Date.now();
                    fn.apply(that, args);
                };

                function clear() {
                    timeId = undefined;
                };

                if (debounce_mode && !timeId) {
                    // debounce模式 && 第一次调用
                    exec();
                }

                timeId && clearTimeout(timeId);
                if (debounce_mode === undefined && period > delay) {
                    // throttle, 执行到了delay时间
                    exec();
                } else {
                    // debounce, 如果是start就clearTimeout
                    timeId = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - period : delay);
                }
            };
            // for event bind | unbind
            wrapper._zid = fn._zid = fn._zid || $.proxy(fn)._zid;
            return wrapper;
        },

        
        debounce: function(delay, fn, t) {
            return fn === undefined ? $.throttle(250, delay, false) : $.throttle(delay, fn, t === undefined ? false : t !== false);
        }
    });

    
    
    
    
    
    
    
    
    
    $.each("String Boolean RegExp Number Date Object Null Undefined".split(" "), function( i, name ){
        var fn;

        if( 'is' + name in $ ) return;//already defined then ignore.

        switch (name) {
            case 'Null':
                fn = function(obj){ return obj === null; };
                break;
            case 'Undefined':
                fn = function(obj){ return obj === undefined; };
                break;
            default:
                fn = function(obj){ return new RegExp(name + ']', 'i').test( toString(obj) )};
        }
        $['is'+name] = fn;
    });

    var toString = $.toString;

})(Zepto);

//Support.js
(function($, undefined) {
    var ua = navigator.userAgent,
        na = navigator.appVersion,
        br = $.browser;

    
    $.extend( br, {
        qq: /qq/i.test(ua),
        uc: /UC/i.test(ua) || /UC/i.test(na)
    } );

    br.uc = br.uc || !br.qq && !br.chrome && !br.firefox && !/safari/i.test(ua);

    try {
        br.version = br.uc ? na.match(/UC(?:Browser)?\/([\d.]+)/)[1] : br.qq ? ua.match(/MQQBrowser\/([\d.]+)/)[1] : br.version;
    } catch (e) {}


    
    $.support = $.extend($.support || {}, {
        orientation: !(br.uc || (parseFloat($.os.version)<5 && (br.qq || br.chrome))) && !($.os.android && parseFloat($.os.version) > 3) && "orientation" in window && "onorientationchange" in window,
        touch: "ontouchend" in document,
        cssTransitions: "WebKitTransitionEvent" in window,
        has3d: 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()
    });

})(Zepto);

//Event.js
(function($) {
    
    $.matchMedia = (function() {
        var mediaId = 0,
            cls = 'gmu-media-detect',
            transitionEnd = $.fx.transitionEnd,
            cssPrefix = $.fx.cssPrefix,
            //$style = $('<style></style>').append('.' + cls + '{' + cssPrefix + 'transition: width 0.001ms; width: 0; position: relative; bottom: -999999px;}\n').appendTo('head');
			$style = $('<style></style>').append('.' + cls + '{' + cssPrefix + 'transition: width 0.001ms; width: 0; height: 0; position: relative; bottom: 0px;}\n').appendTo('head');

        return function (query) {
            var id = cls + mediaId++,
                $mediaElem = $('<div class="' + cls + '" id="' + id + '"></div>').appendTo('body'),
                listeners = [],
                ret;

            $style.append('@media ' + query + ' { #' + id + ' { width: 100px; } }\n') ;   //原生matchMedia也需要添加对应的@media才能生效
            // if ('matchMedia' in window) {
            //     return window.matchMedia(query);
            // }

            $mediaElem.on(transitionEnd, function() {
                ret.matches = $mediaElem.width() === 100;
                $.each(listeners, function (i,fn) {
                    $.isFunction(fn) && fn.call(ret, ret);
                });
            });

            ret = {
                matches: $mediaElem.width() === 100 ,
                media: query,
                addListener: function (callback) {
                    listeners.push(callback);
                    return this;
                },
                removeListener: function (callback) {
                    var index = listeners.indexOf(callback);
                    ~index && listeners.splice(index, 1);
                    return this;
                }
            };

            return ret;
        };
    }());

    $(function () {
        var handleOrtchange = function (mql) {
                if ( state !== mql.matches ) {
                    $( window ).trigger( 'ortchange' );
                    state = mql.matches;
                }
            },
            state = true;
        $.mediaQuery = {
            ortchange: 'screen and (width: ' + window.innerWidth + 'px)'
        };
        $.matchMedia($.mediaQuery.ortchange).addListener(handleOrtchange);
    });

    
    
    function _registerScrollStop(){
        $(window).on('scroll', $.debounce(80, function() {
            $(document).trigger('scrollStop');
        }, false));
    }
    //在离开页面，前进或后退回到页面后，重新绑定scroll, 需要off掉所有的scroll，否则scroll时间不触发
    function _touchstartHander() {
        $(window).off('scroll');
        _registerScrollStop();
    }
    _registerScrollStop();
    $(window).on('pageshow', function(e){
        if(e.persisted) {//如果是从bfcache中加载页面
            $(document).off('touchstart', _touchstartHander).one('touchstart', _touchstartHander);
        }
    });
})(Zepto);

/* === lib:gmu/zepto.imglazyload_v2.js === */
; //doc http://gmu.baidu.com/doc#imglazyload
(function ($) {
    
    var pedding;
    $.fn.imglazyload = function (opts) {
        var splice = Array.prototype.splice,
            opts = $.extend({
                threshold:0,
                container:window,
                urlName:'data-src',
                optUrlName: 'data-url',
                placeHolder:'',
                eventName:'scrollStop',
                refresh: false,
                innerScroll: false,
                isVertical: true,
                startload: null
            }, opts),
            $viewPort = $(opts.container),
            isVertical = opts.isVertical,
            isWindow = $.isWindow($viewPort.get(0)),
            OFFSET = {
                win: [isVertical ? 'scrollY' : 'scrollX', isVertical ? 'innerHeight' : 'innerWidth'],
                img: [isVertical ? 'top' : 'left', isVertical ? 'height' : 'width']
            };

        !isWindow && (OFFSET['win'] = OFFSET['img']);   //若container不是window，则OFFSET中取值同img

        function isInViewport(offset) {      //图片出现在可视区的条件
            var viewOffset = isWindow ? window : $viewPort.offset(),
                viewTop = viewOffset[OFFSET.win[0]],
                viewHeight = viewOffset[OFFSET.win[1]];
            return viewTop >= offset[OFFSET.img[0]] - opts.threshold - viewHeight && viewTop <= offset[OFFSET.img[0]] + offset[OFFSET.img[1]];
        }

        pedding = $.slice(this).reverse();
        if (opts.refresh) return this;      //更新pedding值，用于在页面追加图片

        function _load(div) {     //加载图片，并派生事件
            var useNext = false;
            if (div.tagName === 'IMG') {
                useNext = true;
            }

            var $div = $(div), $img;
            $.isFunction(opts.startload) && opts.startload.call($div);
            var imgUrl = $div.attr(opts.urlName) || $div.attr(opts.optUrlName);
            $img = $('<img />').on('load', function () {
                var $current = $div;
                //更改为把真实图片的url地址放到img标签的background上，避免尺寸不同时页面变形
                if (useNext) {
                    $current = $div.next();
                }
                $current.css({
                    'opacity': '0',
                    'background-image': 'url(' + imgUrl + ')'
                });
                // 兼容写法
                if (useNext) {
                    $current.css({
                        'background-size': 'cover'
                    });
                }
                $current.trigger('loadcomplete');
                $img.off('load');
                $div.attr(opts.urlName, null).attr(opts.optUrlName, null);
                $current.animate({
                    opacity: 1
                });
            }).on('error', function () {     //图片加载失败处理
                var errorEvent = $.Event('error');       //派生错误处理的事件
                $div.trigger(errorEvent);
                errorEvent.defaultPrevented || pedding.push(div);
                $img.off('error').remove();
            }).attr('src', imgUrl);
        }

        function _detect() {     //检测图片是否出现在可视区，并对满足条件的开始加载
            var i, $image, offset, div;
            for (i = pedding.length; i--;) {
                $image = $(div = pedding[i]);
                offset = $image.offset();
                isInViewport(offset) && (splice.call(pedding, i, 1), _load(div));
            }
        }

        $(document).ready(function () {    //页面加载时条件检测
            opts.placeHolder && $(pedding).append(opts.placeHolder);     //初化时将placeHolder存入
            _detect();
        });

        !opts.innerScroll && $(window).on(opts.eventName + ' ortchange', function () {    //不是内滚时，在window上绑定事件
            _detect();
        });

        $.fn.imglazyload.detect = _detect;    //暴露检测方法，供外部调用

        return this;
    };

})(Zepto);

/* === lem:sdk/bridge/base/listeners.js === */
;(LTK["sdk/bridge/base/listeners"] = function(require, exports, module) {
  'use strict';

  var listeners = {};
  module.exports = {
    listeners: listeners
  };
});

/* === lem:sdk/bridge/base/cb.js === */
;(LTK["sdk/bridge/base/cb"] = function(require, exports, module) {
  'use strict';

  var listeners = require('sdk/bridge/base/listeners');

  //自定义事件回调函数
  var fireEvent = function(eventType, data) {
    var cb = listeners[eventType];
    data = data || '{}';
    try {
      data = JSON.parse(data);
      data.eventName = eventType;
      cb && cb(data);
    } catch(e) {
      // 客户端返回的json字符串格式不正确，
    }
  }

  //接口调用完成后待执行的回调函数
  var callback = function(id, data) {
    var cb = listeners[id];
    data = data || '{}';
    try {
      data = JSON.parse(data);
    } catch(e) {}
    cb && cb(data);
    delete listeners[id];

    var rmNode = document.getElementById(id);
    rmNode && rmNode.parentNode.removeChild(rmNode);
  }

  module.exports = {
    fireEvent: fireEvent,
    callback: callback
  };
});

/* === lem:sdk/common/md5.js === */
;(LTK["sdk/common/md5"] = function(require, exports, module) {
  
  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xFFFF)
  }

  
  function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  
  function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
  }

  function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
  }

  function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
  }

  function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t)
  }

  function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
  }

  
  function binl_md5(x, len) {
    
    x[len >> 5] |= 0x80 << (len % 32)
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5_ff(a, b, c, d, x[i], 7, -680876936)
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5_gg(b, c, d, a, x[i], 20, -373897302)
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5_hh(d, a, b, c, x[i], 11, -358537222)
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5_ii(a, b, c, d, x[i], 6, -198630844)
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safe_add(a, olda)
      b = safe_add(b, oldb)
      c = safe_add(c, oldc)
      d = safe_add(d, oldd)
    }
    return [a, b, c, d]
  }

  
  function binl2rstr(input) {
    var i
    var output = ''
    for (i = 0; i < input.length * 32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF)
    }
    return output
  }

  
  function rstr2binl(input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    for (i = 0; i < input.length * 8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32)
    }
    return output
  }

  
  function rstr_md5(s) {
    return binl2rstr(binl_md5(rstr2binl(s), s.length * 8))
  }

  
  function rstr_hmac_md5(key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binl_md5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5C5C5C5C
    }
    hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binl_md5(opad.concat(hash), 512 + 128))
  }

  
  function rstr2hex(input) {
    var hex_tab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hex_tab.charAt((x >>> 4) & 0x0F) +
        hex_tab.charAt(x & 0x0F)
    }
    return output
  }

  
  function str2rstr_utf8(input) {
    return unescape(encodeURIComponent(input))
  }

  
  function raw_md5(s) {
    return rstr_md5(str2rstr_utf8(s))
  }

  function hex_md5(s) {
    return rstr2hex(raw_md5(s))
  }

  function raw_hmac_md5(k, d) {
    return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))
  }

  function hex_hmac_md5(k, d) {
    return rstr2hex(raw_hmac_md5(k, d))
  }

  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hex_md5(string)
      }
      return raw_md5(string)
    }
    if (!raw) {
      return hex_hmac_md5(key, string)
    }
    return raw_hmac_md5(key, string)
  }

  module.exports = md5;
});

/* === lem:sdk/common/base64.js === */
;(LTK["sdk/common/base64"] = function(require, exports, module) {
  // Create Base64 Object
  var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    encode: function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64._utf8_encode(input);

      while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output +
          this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
          this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

      }

      return output;
    },

    decode: function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }

      }

      output = Base64._utf8_decode(output);

      return output;

    },

  // private method for UTF-8 encoding
    _utf8_encode: function (string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        }
        else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }

      }

      return utftext;
    },

  // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;

      while (i < utftext.length) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        }
        else if ((c > 191) && (c < 224)) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        }
        else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }

      }

      return string;
    }

  };

  module.exports = Base64;
});

/* === lem:sdk/common/decode.js === */
;(LTK["sdk/common/decode"] = function(require, exports, module) {
  var md5 = require('sdk/common/md5');
  var base64 = require('sdk/common/base64');

  function decode(str, key) {
    var key = key ? key : '';

    var ckey_length = 4;
    key = md5(key);

    // 密匙a会参与加解密
    var keya = md5(key.substr(0, 16));
    // 密匙b会用来做数据完整性验证
    var keyb = md5(key.substr(16, 16));
    // 密匙c用于变化生成的密文
    // IE下不支持substr第一个参数为负数的情况
    if (ckey_length) {
      var keyc = str.substr(0, ckey_length);
    } else {
      var keyc = '';
    }
    // 参与运算的密匙
    var cryptkey = keya + md5(keya + keyc);

    var strbuf;

    str = str.substr(ckey_length);
    strbuf = base64.decode(str);
    //string = b.toString();

    var box = new Array(256);
    for (var i = 0; i < 256; i++) {
      box[i] = i;
    }
    var rndkey = new Array();
    // 产生密匙簿
    for (var i = 0; i < 256; i++) {
      rndkey[i] = cryptkey.charCodeAt(i % cryptkey.length);
    }
    // 用固定的算法，打乱密匙簿，增加随机性，好像很复杂，实际上对并不会增加密文的强度
    for (var j = i = 0; i < 256; i++) {
      j = (j + box[i] + rndkey[i]) % 256;
      tmp = box[i];
      box[i] = box[j];
      box[j] = tmp;
    }

    // 核心加解密部分
    var s = '';
    //IE下不支持直接通过下标访问字符串的字符，需要先转换为数组
    strbuf = strbuf.split('');
    for (var a = j = i = 0; i < strbuf.length; i++) {
      a = (a + 1) % 256;
      j = (j + box[a]) % 256;
      tmp = box[a];
      box[a] = box[j];
      box[j] = tmp;
      // 从密匙簿得出密匙进行异或，再转成字符
      s += chr(ord(strbuf[i]) ^ (box[(box[a] + box[j]) % 256]));
    }

    if ((s.substr(0, 10) == 0 || s.substr(0, 10) - time() > 0) && s.substr(10, 16) == md5(s.substr(26) + keyb).substr(0, 16)) {
      s = s.substr(26);
    } else {
      s = '';
    }

    return s;
  }

  function time() {
    var unixtime_ms = new Date().getTime();
    return parseInt(unixtime_ms / 1000);
  }

  function chr(s) {
    return String.fromCharCode(s);
  }

  function ord(s) {
    return s.charCodeAt();
  }

  module.exports = decode;
});

/* === lem:sdk/common/index.js === */
;(LTK["sdk/common/index"] = function(require, exports, module) {
  
  var decode = require('sdk/common/decode');

  var check = function (access) {
    var t = 'iWFeNzVA7669bOni|mOC2O3sJMQbwIwOL|gJ8DbpRG4ecetQF2|hLTnSUxZixla3j0n|Y8yEqn61vi84cQsd';
    var a = t.split('|');
    if (access.length == 16) {
      return a.indexOf(access) > -1;
    } else {
      return decode(access, 'm') === 'le';
    }
  };

  var config = function (config) {
    if (check(config.key)) {
      LemSdk.access = true;
      for (var key in LemSdk) {
        if (typeof LemSdk[key].config === 'function') {
          LemSdk[key].config();
          delete LemSdk[key].config;
        }
      }
      setTimeout(function () {
        if (typeof LemSdk.onReady === 'function') {
          LemSdk.onReady();
        }
      }, 1);
    }
  };

  module.exports = {
    config: config,
    check: check
  };
});

/* === lem:sdk/bridge/base/register.js === */
;(LTK["sdk/bridge/base/register"] = function(require, exports, module) {
  'use strict';

  var listeners = require('sdk/bridge/base/listeners');
  var ua = navigator.userAgent.toLowerCase();
  var isLeSuperView = ua.indexOf('lesuperview') > -1;
  var isIOS = /iphone|ipad|ipod/.test(ua) ? true : false;
  var bridge = {core: {}, fun: {}};

  //IOS调用过程
  var iosSendHandler = function(stringData, funcName, id) {
    var messagingIframe = document.createElement('iframe');
    messagingIframe.id = id;
    messagingIframe.style.display = 'none';
    document.documentElement.appendChild(messagingIframe);
    messagingIframe.src = 'letvjsbridge:' + funcName + ':' + stringData;
  }
  //Android调用过程
  var androidSendHandler = function(stringData, funcName) {
    if (window['LetvJSBridge_For_Android'] && window['LetvJSBridge_For_Android'][funcName]) {
      window['LetvJSBridge_For_Android'][funcName](stringData);
    }
  }
  
  var callNative = function(stringData) {
    window.LeSuperWebview && window.LeSuperWebview.callNativeFunc && window.LeSuperWebview.callNativeFunc(stringData);
  }
  
  var registerEvent = function(data, callback) {
    var id = 'letv_bridge_' + new Date().getTime() + '' + Math.floor(Math.random() * 10000);//回调唯一标示
    var sendData = {};//传送到客户端（IOS、Android）的参数
    //回调函数缓存
    listeners[id] = callback;
    sendData['name'] = data;
    sendData['callback_id'] = id;
    sendData['callback'] = 'LetvJSBridge.callback';
    window.LeSuperWebview && window.LeSuperWebview.callEventManage && window.LeSuperWebview.callEventManage(JSON.stringify(sendData));
  }
  //注册接口API
  var registerFunc = function(funcName, eventname) {
    var namespace = funcName.split('.');
    if (namespace.length === 2) {
      bridge[namespace[0]][namespace[1]] = function(data, callback) {
        data = data || '{}';
        callback = callback || function() {};
        var id = 'letv_bridge_' + new Date().getTime() + '' + Math.floor(Math.random() * 10000);//回调唯一标示
        var funcName = isIOS ? namespace.join(".") : namespace.join("_");
        var sendData = {};//传送到客户端（IOS、Android）的参数
        //回调函数缓存
        listeners[id] = callback;
        sendData['name'] = data;
        sendData['callback_id'] = id;
        sendData['callback'] = 'LetvJSBridge.callback';
        sendData['func'] = funcName;
        if (isLeSuperView) {
          sendData['eventname'] = eventname || '';
        }
        isLeSuperView ? callNative(JSON.stringify([sendData])) :
        (isIOS ? iosSendHandler(JSON.stringify([sendData]), funcName, id) :
        androidSendHandler(JSON.stringify([sendData]), funcName));
      }
    }
  }

  module.exports = {
    bridge: bridge,
    registerFunc: registerFunc,
    registerEvent: registerEvent
  };
});

/* === lem:sdk/bridge/app.js === */
;(LTK["sdk/bridge/app"] = function(require, exports, module) {
  'use strict';

  var ua = navigator.userAgent.toLowerCase();
  var isLetvClient = ua.indexOf('letvclient') > -1 || ua.indexOf('letvmobileclient') > -1;
  var isLeSuperView = ua.indexOf('lesuperview') > -1;
  var register = require('sdk/bridge/base/register');
  var app = {};

  register.registerFunc('core.getVersion');

  app.getVersion = function(cb) {
    register.bridge.core.getVersion(null, cb);
  }
  app.isAppEnv = isLetvClient;//早期的webview环境
  app.isLeSuperView = isLeSuperView;//乐视超级webview环境

  module.exports = app;
});

/* === lem:sdk/bridge/base/event.js === */
;(LTK["sdk/bridge/base/event"] = function(require, exports, module) {
  'use strict';

  var listeners = require('sdk/bridge/base/listeners');

  //注册自定义事件
  var on = function(eventType, callback) {
    if (typeof callback === "function") {
      listeners[eventType] = callback;
    }
  }

  module.exports = {
    on: on
  };
});

/* === lem:sdk/bridge/user.js === */
;(LTK["sdk/bridge/user"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var evt = require('sdk/bridge/base/event');
  var user = Object.create(evt);

  register.registerFunc('fun.callLogin');
  register.registerFunc('fun.callLogout');
  register.registerFunc('core.getUserInfo');

  user.login = function(cb) {
    register.bridge.fun.callLogin(null, cb);
  }
  user.logout = function(cb) {
    register.bridge.fun.callLogout(null, cb);
  }
  user.getInfo = function(cb) {
    register.bridge.core.getUserInfo(null, cb);
  }

  module.exports = user;
});

/* === lem:sdk/bridge/video.js === */
;(LTK["sdk/bridge/video"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var video = {};

  register.registerFunc('fun.playVideo');
  register.registerFunc('fun.saveVideo');
  register.registerFunc('fun.autoPlay');

  video.play = function(data, cb) {
    data.type = data.type || 1;
    data.screen = data.screen || 1;
    register.bridge.fun.playVideo(data, cb);
  }
  video.playLive = function(data, cb) {
    data.type = data.type || 2;
    data.screen = data.screen || 2;
    register.bridge.fun.playVideo(data, cb);
  }
  video.save = function(data, cb) {
    data.pid = data.pid || '';
    data.definition = data.definition || '1000',  //默认1000（高清）其它350(流畅)、1300（超清）
    register.bridge.fun.saveVideo(data, cb);
  }
  video.auto = function(data, cb) {
    register.bridge.fun.autoPlay(data, cb);
  }

  module.exports = video;
});

/* === lem:sdk/bridge/shake.js === */
;(LTK["sdk/bridge/shake"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var evt = require('sdk/bridge/base/event');
  var shake = Object.create(evt);

  register.registerFunc('fun.enableShake');

  shake.enable = function(cb) {
    register.bridge.fun.enableShake(null, cb);
  }

  module.exports = shake;
});

/* === lem:sdk/bridge/share.js === */
;(LTK["sdk/bridge/share"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var evt = require('sdk/bridge/base/event');
  var share = Object.create(evt);

  register.registerFunc('fun.callShare', 'onsharebefore');
  register.registerFunc('fun.setShare');

  share.callShare = function(data, cb) {
    register.bridge.fun.callShare(data, cb);
  }
  share.setShare = function(data, cb) {
    register.bridge.fun.setShare(data, cb);
  }

  module.exports = share;
});

/* === lem:sdk/bridge/alert.js === */
;(LTK["sdk/bridge/alert"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var alert = {};

  register.registerFunc('fun.callAlert');

  alert.toast = function(data, cb) {
    data.type = 'alert';
    register.bridge.fun.callAlert(data, cb);
  }

  module.exports = alert;
});

/* === lem:sdk/bridge/device.js === */
;(LTK["sdk/bridge/device"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var device = {};

  register.registerFunc('core.getDeviceInfo');
  register.registerFunc('core.getOnlineDevice');
  register.registerFunc('core.getPowerLevel');
  register.registerFunc('core.getSpaceSize');

  device.getInfo = function(cb) {
    register.bridge.core.getDeviceInfo(null, cb);
  }
  device.getOnline = function(cb) {
    register.bridge.core.getOnlineDevice(null, cb);
  }
  device.getPowerLevel = function(cb) {
    register.bridge.core.getPowerLevel(null, cb);
  }
  device.getSpaceSize = function(cb) {
    register.bridge.core.getSpaceSize(null, cb);
  }

  module.exports = device;
});

/* === lem:sdk/bridge/qrcode.js === */
;(LTK["sdk/bridge/qrcode"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var qrcode = {};

  register.registerFunc('fun.callScanCode');

  qrcode.scan = function(cb) {
    register.bridge.fun.callScanCode(null, cb);
  }

  module.exports = qrcode;
});

/* === lem:sdk/bridge/screen.js === */
;(LTK["sdk/bridge/screen"] = function(require, exports, module) {
  'use strict';

  var evt = require('sdk/bridge/base/event');
  var screen = Object.create(evt);

  module.exports = screen;
});

/* === lem:sdk/bridge/network.js === */
;(LTK["sdk/bridge/network"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var evt = require('sdk/bridge/base/event');
  var network = Object.create(evt);

  register.registerFunc('core.getNetworkState');

  network.getInfo = function(cb) {
    register.bridge.core.getNetworkState(null, cb);
  }

  module.exports = network;
});

/* === lem:sdk/bridge/browser.js === */
;(LTK["sdk/bridge/browser"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var browser = {};

  register.registerFunc('fun.callBrowser');

  browser.view = function(data, cb) {
    register.bridge.fun.callBrowser(data, cb);
  }

  module.exports = browser;
});

/* === lem:sdk/bridge/gallery.js === */
;(LTK["sdk/bridge/gallery"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var gallery = {};

  register.registerFunc('fun.openImage');
  register.registerFunc('fun.openCamera');

  gallery.openImage = function(data, cb) {
    data.scale = data.scale || 0.1;
    register.bridge.fun.openImage(data, cb);
  }
  gallery.openCamera = function(data, cb) {
    data.scale = data.scale || 0.1;
    register.bridge.fun.openCamera(data, cb);
  }

  module.exports = gallery;
});

/* === lem:sdk/bridge/webview.js === */
;(LTK["sdk/bridge/webview"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var webview = {};

  register.registerFunc('fun.callWebview');
  register.registerFunc('fun.callNativeUI');
  register.registerFunc('fun.openNewWin');

  webview.open = function(data, cb) {
    data.target = data.target || 0;
    register.bridge.fun.callWebview(data, cb);
  }
  webview.callNativeUI = function(data, cb) {
    data.url = data.url || 'Home';
    register.bridge.fun.callNativeUI(data, cb);
  }
  webview.openNewWin = function(data, cb) {
    data.type = data.type || 1;
    data.isShowNav = data.isShowNav || 1;
    data.title = data.title || '';
    register.bridge.fun.openNewWin(data, cb);
  }

  module.exports = webview;
});

/* === lem:sdk/bridge/geolocation.js === */
;(LTK["sdk/bridge/geolocation"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var geolocation = {};

  register.registerFunc('fun.getGeolocation');

  geolocation.get = function(cb) {
    register.bridge.fun.getGeolocation(null, cb);
  }

  module.exports = geolocation;
});

/* === lem:sdk/bridge/vip.js === */
;(LTK["sdk/bridge/vip"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var vip = {};

  register.registerFunc('fun.updateStatus');

  vip.update = function(data, cb) {
    var tmpData = {
      type: 'vip',
      info: data
    };
    register.bridge.fun.updateStatus(tmpData, cb);
  }

  module.exports = vip;
});

/* === lem:sdk/bridge/hasFeature.js === */
;(LTK["sdk/bridge/hasFeature"] = function(require, exports, module) {
  'use strict';

  var ua = navigator.userAgent.toLowerCase();
  var isIOS = /iphone|ipad|ipod/.test(ua) ? true : false;
  var register = require('sdk/bridge/base/register');

  register.registerFunc('core.hasFeature');

  module.exports = function(funcName, cb) {
    funcName = !isIOS ? funcName.replace('.', '_') : funcName;
    register.bridge.core.hasFeature(funcName, cb);
  };
});

/* === lem:sdk/bridge/gEvent.js === */
;(LTK["sdk/bridge/gEvent"] = function(require, exports, module) {
  'use strict';

  var register = require('sdk/bridge/base/register');
  var evt = require('sdk/bridge/base/event');
  var gEvent = Object.create(evt);

  gEvent.enable = function(eventName, callback) {
    var data = {
      eventName: eventName,
      switch: 1
    };
    register.registerEvent(data, callback);
  }
  gEvent.disable = function(eventName, callback) {
    var data = {
      eventName: eventName,
      switch: 0
    };
    register.registerEvent(data, callback);
  }

  module.exports = gEvent;
});

/* === lem:sdk/bridge/index.js === */
;(LTK["sdk/bridge/index"] = function (require, exports, module) {
  'use strict';

  var cb = require('sdk/bridge/base/cb');
  var LetvJSBridge = window.LetvJSBridge || {};
  LetvJSBridge.callback = cb.callback;
  LetvJSBridge.fireEvent = cb.fireEvent;
  window.LetvJSBridge = LetvJSBridge;//自定义事件回调及函数回调

  var obj = {
    name: 'bridge',
    version: '0.2.7'
  };

  var common = require('sdk/common/index');
  var _setFunContent = function () {
    obj.app = require('sdk/bridge/app');
    obj.user = require('sdk/bridge/user');
    obj.video = require('sdk/bridge/video');
    obj.shake = require('sdk/bridge/shake');
    obj.share = require('sdk/bridge/share');
    obj.alert = require('sdk/bridge/alert');
    obj.device = require('sdk/bridge/device');
    obj.qrcode = require('sdk/bridge/qrcode');
    obj.screen = require('sdk/bridge/screen');
    obj.network = require('sdk/bridge/network');
    obj.browser = require('sdk/bridge/browser');
    obj.gallery = require('sdk/bridge/gallery');
    obj.webview = require('sdk/bridge/webview');
    obj.geolocation = require('sdk/bridge/geolocation');
    obj.vip = require('sdk/bridge/vip');
    obj.hasFeature = require('sdk/bridge/hasFeature');
    obj.gEvent = require('sdk/bridge/gEvent');
  };
  var _setFun = function () {
    //TODO 上报
    if (arguments.length > 0) {
      if (common.check(arguments[0].key)) {
        _setFunContent();
      }
    } else {
      _setFunContent();
    }
  };

  if (!!window.LemSdk && LemSdk.access) {
    _setFun();
  } else {
    obj.config = _setFun;
  }
  if (!!window.LemSdk) {
    LemSdk.config = common.config;
  }

  module.exports = obj;
});

/* === lem:components/user/getUserInfo.js === */
;(LTK["components/user/getUserInfo"] = function(require, exports, module){
	var userInfo, getting = false;

	var cbs = [];
	var callAll = function(){
		for(var i = 0, len = cbs.length; i < len; i++){
			cbs[i](userInfo);
		}
		cbs.length = 0; //清空队列
	};

	module.exports = function(callback){
		typeof callback==='function' || (callback = function(){});
		var ssouid = $.cookie('ssouid');
		if(!ssouid){
			userInfo = null;
			callback(null);
			return;
		}
		if(userInfo){
			callback(userInfo);
			return;
		}
		cbs.push(callback);
		if(getting){
			return;
		}
		getting = true;

		var headicon = $.cookie('sso_picture'); //用户头像 保留此字段是为了向前兼容
		var sso_icon = $.cookie('sso_icon'); //用户全部头像
		if(sso_icon){
			sso_icon = sso_icon.split(',');
		}else{
			sso_icon = [headicon, headicon, headicon]; //200, 70, 50头像向后兼容
		}

		userInfo = {
			ssouid: ssouid, //用户uid
			username: $.cookie('m'),
			nickname: $.cookie('sso_nickname'),
			headicon: headicon,
			headicon_50: sso_icon[3], //50头像向后兼容
			headicon_70: sso_icon[2], //70头像向后兼容
			headicon_200: sso_icon[1] //200头像向后兼容
		};
		
		$.ajax({
			url: le.api_host.yuanxian + '/letv/net/checkLogin.jsp?callback=?&location='+location.href,
			dataType: 'jsonp',
			success: function(data){
				data || (data = {});
				userInfo.userlevel = data.isvip; //用户等级 0普通用户 1vip用户 2高级vip用户
				userInfo.lasttime = data.productEndTime; //用户等级最后到期日 没有表示之前不是会员
				userInfo.surplus = data.days; //会员服务剩余天数
				userInfo.expireDate = data.endtime; //会员服务截至日期
				//callback(userInfo);
				getting = false;
				callAll();
			}
		});
	};

});

/* === lib:weixin.js === */
;!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){h(b,a,d)}):k(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),h(b,a,c)}):d?k(b,d):k(b,c)}function e(a){return a=a||{},a.appId=A.appId,a.verifyAppId=A.appId,a.verifySignType="sha1",a.verifyTimestamp=A.timestamp+"",a.verifyNonceStr=A.nonceStr,a.verifySignature=A.signature,a}function f(a,b){return{scope:b,signType:"sha1",timeStamp:a.timestamp+"",nonceStr:a.nonceStr,addrSign:a.addrSign}}function g(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function h(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=i(a,d,c),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",A.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function i(a,b){var d,e,f,g;if(b){switch(d=b.indexOf(":"),a){case p.config:e="config";break;case p.openProductSpecificView:e="openProductSpecificView";break;default:e=b.substring(0,d),e=e.replace(/_/g," "),e=e.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}),e=e.substring(0,1).toLowerCase()+e.substring(1),e=e.replace(/ /g,""),-1!=e.indexOf("Wcpay")&&(e=e.replace("Wcpay","WCPay")),f=q[e],f&&(e=f)}g=b.substring(d+1),"confirm"==g&&(g="ok"),-1!=g.indexOf("failed_")&&(g=g.substring(7)),-1!=g.indexOf("fail_")&&(g=g.substring(5)),g=g.replace(/_/g," "),g=g.toLowerCase(),("access denied"==g||"no permission to execute"==g)&&(g="permission denied"),"config"==e&&"function not exist"==g&&(g="ok"),b=e+":"+g}return b}function j(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=p[d],e&&(a[b]=e);return a}}function k(a,b){if(A.debug&&!b.isInnerInvoke){var c=q[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function l(){if(!("6.0.2">x||z.systemType<0)){var b=new Image;z.appId=A.appId,z.initTime=y.initEndTime-y.initStartTime,z.preVerifyTime=y.preVerifyEndTime-y.preVerifyStartTime,D.getNetworkType({isInnerInvoke:!0,success:function(a){z.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+z.version+"&o="+z.isPreVerifyOk+"&s="+z.systemType+"&c="+z.clientVersion+"&a="+z.appId+"&n="+z.networkType+"&i="+z.initTime+"&p="+z.preVerifyTime+"&u="+z.url;b.src=c}})}}function m(){return(new Date).getTime()}function n(b){u&&(a.WeixinJSBridge?b():r.addEventListener&&r.addEventListener("WeixinJSBridgeReady",b,!1))}function o(){D.invoke||(D.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},D.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;if(!a.jWeixin)return p={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},q=function(){var b,a={};for(b in p)a[p[b]]=b;return a}(),r=a.document,s=r.title,t=navigator.userAgent.toLowerCase(),u=-1!=t.indexOf("micromessenger"),v=-1!=t.indexOf("android"),w=-1!=t.indexOf("iphone")||-1!=t.indexOf("ipad"),x=function(){var a=t.match(/micromessenger\/(\d+\.\d+\.\d+)/)||t.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),y={initStartTime:m(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},z={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:w?1:v?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},A={},B={_completes:[]},C={state:0,res:{}},n(function(){y.initEndTime=m()}),D={config:function(a){A=a,k("config",a),n(function(){c(p.config,{verifyJsApiList:j(A.jsApiList)},function(){B._complete=function(a){y.preVerifyEndTime=m(),C.state=1,C.res=a},B.success=function(){z.isPreVerifyOk=0},B.fail=function(a){B._fail?B._fail(a):C.state=-1};var a=B._completes;return a.push(function(){A.debug||l()}),B.complete=function(b){for(var c=0,d=a.length;d>c;++c)a[c](b);B._completes=[]},B}()),y.preVerifyStartTime=m()}),A.beta&&o()},ready:function(a){0!=C.state?a():(B._completes.push(a),!u&&A.debug&&a())},error:function(a){"6.0.2">x||(-1==C.state?a(C.res):B._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=q[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:j(a.jsApiList)},function(){return a._complete=function(a){if(v){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(p.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||s,desc:a.title||s,img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareAppMessage:function(a){d(p.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||s,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(p.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||s,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(p.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||s,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2"},function(){return a._complete=function(a){if(v){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(p.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){c(p.getLocation,function(){var b=f(a,"jsapi_location");return b.type="wgs84",b}(),function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){c("closeWindow",{immediate_close:a&&a.immediateClose||0},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){c("scanQRCode",{desc:a.desc,needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},a)},openProductSpecificView:function(a){c(p.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(p.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:A.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(p.openCard,{card_list:d},a)},chooseWXPay:function(a){c(p.chooseWXPay,g(a),a)}},b&&(a.wx=a.jWeixin=D),D});
/* === lem:components/player/mPlayer.js === */
;(LTK["components/player/mPlayer"] = function(require, exports, module) {
    'use strict';

    //点击时实时获取播放器，避免后生成的播放器获取不到
    function getPlayer() {
        if(typeof window.__canControlPlayer ==='undefined') {
            window.__canControlPlayer = true;
        }

        var
            player,
            video = $('video');
        if (video.length > 0 && window.__canControlPlayer) {
            player = video.parent().parent();
            return player;
        } else {
            return null;
        }
    }
    function show() {
        var player = getPlayer();
        player && player.css('display', '');//.css('left', 0);
    }
    function hide() {
        var player = getPlayer();
        player && player.css('display','none');//.css('left', -5000);
    }

    module.exports = {show: show, hide: hide};
});
/* === lem:sdk/share/assign.js === */
;(LTK["sdk/share/assign"] = function(require, exports, module) {
    'use strict';
    
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
        if (val === null || val === undefined) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
    }

    function shouldUseNative() {
        try {
            if (!Object.assign) {
                return false;
            }

            // Detect buggy property enumeration order in older V8 versions.

            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            var test1 = new String('abc');  // eslint-disable-line
            test1[5] = 'de';
            if (Object.getOwnPropertyNames(test1)[0] === '5') {
                return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test2 = {};
            for (var i = 0; i < 10; i++) {
                test2['_' + String.fromCharCode(i)] = i;
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                return test2[n];
            });
            if (order2.join('') !== '0123456789') {
                return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                test3[letter] = letter;
            });
            if (Object.keys(Object.assign({}, test3)).join('') !==
                    'abcdefghijklmnopqrst') {
                return false;
            }

            return true;
        } catch (e) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
        }
    }

    module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);

            for (var key in from) {
                if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                }
            }

            if (Object.getOwnPropertySymbols) {
                symbols = Object.getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                        to[symbols[i]] = from[symbols[i]];
                    }
                }
            }
        }

        return to;
    };
});

/* === lem:sdk/share/appShare.js === */
;(LTK["sdk/share/appShare"] = function(require, exports, module) {
    'use strict';

    var
        userAgent = navigator.userAgent.toLowerCase(),
        isIOS = /iphone|ipad|ipod/.test(userAgent) ? true : false,
        isLetvClient = userAgent.indexOf('letvclient') > -1 || userAgent.indexOf('letvmobileclient') > -1,
        protocol = 'letvjsbridge',//苹果机监听协议;
        callBackModel = {}, //回调函数缓存模型
        bridge = {fun: {}};

    
    var callback = function(id, data) {
        data = data || '{}';
        if (callBackModel[id]) {
            try {
                callBackModel[id](JSON.parse(data));
                delete callBackModel[id];
            } catch(e) {
                // 客户端返回的json字符串格式不正确;
            }
        } else {
            //未注册对应的回调函数
        }
        var rmNode = document.getElementById(id);
        if (rmNode) {
            rmNode.parentNode.removeChild(rmNode);
        }
    };
    window.LetvJSBridge = window.LetvJSBridge || {};
    window.LetvJSBridge.shareback = callback;


    //注册接口API
    var registerFunc = function(funcName, index, arr) {
        var namespace = funcName.split('.');
        if (namespace.length === 2) {
            bridge[namespace[0]][namespace[1]] = function() {
                var id = 'letv_bridge_' + new Date().getTime() + '' + Math.floor(Math.random() * 10000);//回调唯一标示
                var funcName = isIOS ? namespace.join(".") : namespace.join("_");
                var sendData = {};//传送到客户端（IOS、Android）的参数
                var data;
                var callback;
                if (arguments.length === 0) {
                    data = '{}';
                    callback = function(){};
                } else if (arguments.length === 1) {
                    if (typeof arguments[0] !== 'function') {
                        data = arguments[0] || '{}';
                        callback = function() {};
                    } else {
                        data = '{}';
                        callback = typeof arguments[0] === 'function' ? arguments[0] : function(){};
                    }
                } else {
                    data = arguments[0] || '{}';
                    callback = typeof arguments[1] === 'function' ? arguments[1] : function(){};
                }
                if (namespace[1] !== 'hasFeature' && (typeof data === "string")) {
                    try {
                        data = JSON.parse(data);
                    } catch (ex) {
                        alert('参数不是一个有效的JSON格式');
                        return;
                    }
                }
                //回调函数缓存
                callBackModel[id] = callback;

                sendData['name'] = data;
                sendData['callback_id'] = id;
                sendData['callback'] = 'LetvJSBridge.shareback';
                sendData['func'] = funcName;
                _doSend(JSON.stringify([sendData]), funcName, id);
            }
        }
    }

    //IOS调用过程
    var _iosSendHandler = function(stringData, funcName, id) {
         try {
            var messagingIframe = document.createElement('iframe');
            messagingIframe.id = id;
            messagingIframe.style.display = 'none';
            document.documentElement.appendChild(messagingIframe);
            messagingIframe.src = protocol + ':' + funcName + ':' + stringData;
         } catch (ex) {
            //throw new Error(ex);
         }
    };

    //Android调用过程
    var _androidSendHandler = function(stringData, funcName) {
        try {
            window['LetvJSBridge_For_Android'][funcName](stringData);
        } catch (ex) {
            //throw new Error(ex);
        }
    };

    //发送请求
    var _doSend = (isIOS ? _iosSendHandler : _androidSendHandler);


    //注册系统方法

    ['fun.callShare',
     'fun.setShare'].forEach(registerFunc);

    bridge.isAppEnv = isLetvClient;

    module.exports = bridge;
});

/* === lem:sdk/share/url.js === */
;(LTK["sdk/share/url"] = function(require, exports, module) {
  'use strict';

  var Url = {
    //私有属性
    _query: null,
    
    getParam: function(name){
      var query = this._query;
      if(query===null){
        query = this._query = this.parseParam(window.location.search.slice(1));
      }
      return name ? (query[name.toLowerCase()]||'') : query;
    },
    
    serializeParam: function(param){
      var k, v, p = [];
      for(k in param){
        v = param[k];
        v!=='' && param.hasOwnProperty(k) && p.push(k+'='+encodeURIComponent(v));
      }
      return p.join('&');
    },
    
    parseParam: function(url){
      url = url.split('#')[0]; //去掉hash
      if(url.indexOf('?')>0){
        url = url.split('?')[1];
      }
      url = url.split('&');
      var query = {},
        i = 0, l = url.length,
        p, j, v;
      for(; i < l; i++){
        p = url[i];
        if(p){
          j = p.indexOf('=');
          v = p.slice(j+1);
          v && j>0 && (query[p.slice(0,j).toLowerCase()] = decodeURIComponent(v));
        }
      }
      return query;
    },
    
    setParam: function(url, param){
      var hash = '';
      if(url.indexOf('#')>-1){
        url = url.split('#');
        hash = '#'+url[1];
        url = url[0];
      }
      if(url.indexOf('?')>0){
        var query = this.parseParam(url);
        for(var k in query){
          param.hasOwnProperty(k) ||
            (query.hasOwnProperty(k) && (param[k] = query[k]));
        }
        url = url.split('?')[0];
      }
      return url + '?' + this.serializeParam(param) + hash;
    }
  };

  module.exports = Url;
});

/* === lem:sdk/share/jsonp.js === */
;(LTK["sdk/share/jsonp"] = function(require, exports, module) {
  'use strict';

  var send = function(url, cb) {
    var timeStamp = Math.floor(new Date().getTime() / 1000);
    url += '&callback=jsonp' + timeStamp;
    var scriptObj = document.createElement("script");
    scriptObj.src = url;
    scriptObj.id = "jsonpScript";
    document.body.appendChild(scriptObj);
    window['jsonp' + timeStamp] = function(data) {
      if (document.getElementById("jsonpScript")) {
        document.body.removeChild(scriptObj);
      }
      cb(data);
    };
  };
  module.exports = send;
});

/* === lem:sdk/share/index.js === */
;(LTK["sdk/share/index"] = function (require, exports, module) {
  'use strict';

  var assign = require('sdk/share/assign');
  var bridge = require('sdk/share/appShare');
  var url = require('sdk/share/url');
  var send = require('sdk/share/jsonp');
  var targets = ['weixin', 'weibo', 'qzone', 'tw', 'fb'].join(',');
  var _jsApiList = [
    'checkJsApi',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo'
  ];
  var emptyFunc = function () {
  };
  var cfg = {
    tsina: '1414119400',
    debug: false, // 关闭调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
    jsApiList: _jsApiList
  }
  var p = {
    type: 'webpage', //webpage、image、text
    title: '', //自定义分享标题
    desc: '', //自定义分享内容
    summary: '', //自定义分享摘要
    link: '', //自定义分享链接
    imgUrl: '', //自定义分享图标
    onsuccess: emptyFunc,
    oncancel: emptyFunc
  };
  //分享到微信
  var shareTowx = function (funcName, shareInfo) {
    shareInfo.success = function () {
      p.onsuccess({type: funcName});
    };
    shareInfo.cancel = function () {
      p.oncancel({type: funcName});
    };
    wx && wx[funcName](shareInfo);
  };
  var formatLink = function (target) {
    var refIndex = p.link.indexOf('ref=share_' + target);
    var qIndex = p.link.indexOf('?');
    var eIndex = /&$/.test(p.link);
    var link = (refIndex === -1) ?
      (qIndex === -1 ? p.link + '?ref=share_' + target : (eIndex ? p.link + 'ref=share_' + target : p.link + '&ref=share_' + target)) : p.link;
    return link;
  };
  var getAppId = function(callback) {
    var url = 'http://s.api.m.le.com/api/newwxparam?_debug=1&url=';
    url += encodeURIComponent(window.location.href.split('#')[0]);
    send(url, function(json) {
      assign(cfg, json.data);
      callback();
    });
  }
  var shareToTarget = {
    weixin: function() {
      if (!window.wx) {
        console.log('请先引入微信JSSDK！');
        return;
      }
      var callback = function() {
        wx.config({
          debug: cfg.debug,
          appId: cfg.appId,
          timestamp: cfg.timestamp,
          nonceStr: cfg.nonceStr,
          signature: cfg.signature,
          jsApiList: cfg.jsApiList
        });
        wx.error(function () {

        });
        wx.ready(function () {
          var shareInfo = {
            title: p.title, // 分享标题
            desc: p.desc, // 分享描述
            link: p.link, // 分享链接
            imgUrl: p.imgUrl, // 分享图标
          };
          shareTowx('onMenuShareTimeline', shareInfo);
          shareTowx('onMenuShareAppMessage', shareInfo);
          shareTowx('onMenuShareQQ', shareInfo);
          shareTowx('onMenuShareWeibo', shareInfo);
        });
      }
      if (!!cfg.appId) {
        callback();
      } else {
        getAppId(callback);
      }
    },
    weibo: function () {
      var tsina = 'http://service.weibo.com/share/share.php?';
      tsina += 'url=' + encodeURIComponent(formatLink('tsina'));
      tsina += '&title=' + encodeURIComponent(p.desc);
      tsina += '&pic=' + encodeURIComponent(p.imgUrl);
      tsina += '&appkey=' + encodeURIComponent(cfg.tsina);
      window.location.href = tsina;
    },
    qzone: function () {
      var qzone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
      qzone += 'url=' + encodeURIComponent(formatLink('qzone'));
      qzone += '&title=' + encodeURIComponent(p.title);
      qzone += '&desc=' + encodeURIComponent(p.desc);
      qzone += '&summary=' + encodeURIComponent(p.summary);
      qzone += '&site=';
      qzone += '&pics=' + encodeURIComponent(p.imgUrl);
      // window.location.href = qzone;
      window.open(qzone, '_blank');
    },
    fb: function () {
      var fb = 'https://www.facebook.com/sharer/sharer.php?';
      fb += 'u=' + encodeURIComponent(formatLink('facebook'));
      fb += '&display=popup&ref=plugin&src=share_button&app_id=';
      window.open(fb, '_blank');
    },
    tw: function () {
      var tw = 'https://twitter.com/intent/tweet?';
      tw += 'url=' + encodeURIComponent(formatLink('twitter'));
      tw += '&text=' + encodeURIComponent(p.title);
      tw += '&related=msite';
      window.location.href = tw;
    }
  };

  var formatShareInfo = function () {
    p.title = p.title && p.title.length > 50 ? (p.title.substr(0, 50) + '...') : p.title;
    p.desc = p.desc && p.desc.length > 140 ? (p.desc.substr(0, 140) + '...') : p.desc;
    p.summary = p.summary && p.summary.length > 50 ? (p.summary.substr(0, 50) + '...') : p.summary;
    p.onsuccess = p.onsuccess || emptyFunc;
    p.oncancel = p.oncancel || emptyFunc;
  };
  var formatAppShareInfo = function () {
    return {
      type: p.type || 'webpage',
      title: p.title,
      webUrl: p.link,
      webImage: p.imgUrl,
      desc: p.desc
    };
  };
  var share = {
    callShare: function (data) {
      if (typeof data !== 'object') {
        return;
      }
      if (targets.indexOf(data.channelName) === -1) {
        return;
      }
      assign(p, data);
      if (data.channelName === 'weixin') {
        assign(cfg, p.cfg);
        if (url.getParam('_wxdebug') === '1' && !cfg.debug) {
          cfg.debug = true;
        }
      }
      delete p.cfg;
      formatShareInfo();
      shareToTarget[p.channelName]();
    },
    callAppShare: function (data) {
      assign(p, data);
      delete p.cfg;
      formatShareInfo();
      var callback = function (res) {
        res.result === 200 ? p.onsuccess(res) : p.oncancel(res);
      };
      bridge.isAppEnv && bridge.fun.callShare(formatAppShareInfo(), callback);
    },
    setAppShare: function (data) {
      assign(p, data);
      delete p.cfg;
      formatShareInfo();
      var callback = function (res) {
        res.result === 200 ? p.onsuccess(res) : p.oncancel(res);
      };
      bridge.isAppEnv && bridge.fun.setShare(formatAppShareInfo(), callback);
    }
  };

  var obj = {
    name: 'share',
    version: '0.2.6'
  };

  var common = require('sdk/common/index');
  var _setFunContent = function () {
    obj.callShare = share.callShare;
    obj.setAppShare = share.setAppShare;
    obj.callAppShare = share.callAppShare;
  };
  var _setFun = function () {
    //TODO 上报
    if (arguments.length > 0) {
      if (common.check(arguments[0].key)) {
        _setFunContent();
      }
    } else {
      _setFunContent();
    }
  };

  if (!!window.LemSdk && LemSdk.access) {
    _setFun();
  } else {
    obj.config = _setFun;
  }

  if (!!window.LemSdk) {
    LemSdk.config = common.config;
  }

  module.exports = obj;
});

/* === lem:air/lang/extend.js === */
;(LTK["air/lang/extend"] = function (require, exports, module) {
	
	var extend = function (dest, someObj, override) {
		var k;
		if (override===false) {
			for (k in someObj) {
				!dest.hasOwnProperty(k) && someObj.hasOwnProperty(k) &&
					(dest[k] = someObj[k]);
			}
		} else {
			for (k in someObj) {
				someObj.hasOwnProperty(k) && (dest[k] = someObj[k]);
			}
		}
		return dest;
	};

	module.exports = extend;

});

/* === lem:air/env/ua.js === */
;(LTK["air/env/ua"] = function (require, exports, module) {
	
	var ua = {};
	var userAgent = navigator.userAgent.toLowerCase();

	var data = {
		platforms: [
			// windows phone must be tested before win
			{ tag: 'windows phone', flags: ['winPhone', 'mobile']},
			{ tag: 'win', flags: ['win']},
			// ipad and ipod must be tested before iphone
			{ tag: 'ipad', flags: ['ipad', 'ios'] },
			{ tag: 'ipod', flags: ['ipod', 'ios', 'mobile'] },
			// iphone must be tested before mac
			{ tag: 'iphone', flags: ['iphone', 'ios', 'mobile'] },
			{ tag: 'macintosh', flags: ['mac', 'ios'] },
			// android must be tested before linux
			{ tag: 'android', flags: ['android'] },
			//versionSearch: '(?:blackberry\\d{4}[a-z]?|version)/',
			{ tag: 'blackberry', flags: ['blackberry', 'mobile'] },
			{ tag: 'linux', flags: ['linux'] }
		],
		browsers: [
			{ tag: 'micromessenger', flags: ['weixin'] },
			{ tag: '__weibo__', flags: ['weibo'] },
			{ tag: /ucbrowser|ucweb/, flags: ['uc'] },
			{ tag: 'qqbrowser', flags: ['qq'] },
			{ tag: /letvmobileclient\s+android;letv;/, flags: ['superLetvClient'] },
			{ tag: /leuibrowser|eui browser/, flags: ['letvMobile', 'letvBrowser'] },
			{ tag: 'baiduboxapp', flags: ['baidubox'] },
			{ tag: 'baidubrowser', flags: ['baidu'] },
			{ tag: 'xiaomi', flags: ['xiaomi'] },
			{ tag: 'iemobile', flags: ['ieMobile', 'mobile']}, // IE手机浏览器
			{ tag: 'msie ', flags: ['msie']}, // IE浏览器
			{ tag: 'chrome', flags: ['chrome']}, // 谷歌浏览器
			{ tag: 'crios', flags: ['chrome']}, // 谷歌浏览器
			{ tag: 'firefox', flags: ['firefox']}, // firefox浏览器
			{ tag: 'opera', flags: ['opera']}, // opera浏览器
			{ tag: /iphone.+?safari/, flags: ['safari']} // safari浏览器
		],
		engines: [
			{ tag: 'trident', flags: ['trident'] },
			// webkit must be tested before gecko
			{ tag: 'webkit', flags: ['webkit'] },
			{ tag: 'gecko', flags: ['gecko'] },
			{ tag: 'presto', flags: ['presto'] }
		]
	};

	var detect = function (items) {
		var flags, item, i, len, tag, got, j;
		for (i = 0, len = items.length; i < len; i++) {
			item = items[i];
			tag = item.tag;
			got = typeof tag==='string' ? userAgent.indexOf(tag)>-1 : tag.test(userAgent);
			if (got) {
				flags = item.flags;
				if (flags) {
					for (j = flags.length; j--; ) {
						ua[flags[j]] = true;
					}
				}
				break;
			}
		}
	};

	detect(data.platforms);
	detect(data.browsers);
	detect(data.engines);
	ua.mobile || (ua.mobile = userAgent.indexOf('mobile')>0);
	ua.android && (ua.androidPad = !ua.mobile);
	if (!ua.msie) {
		//IE 11 的ua里已经没有msie字样
		ua.msie = !!window.ActiveXObject || 'ActiveXObject' in window;
	}

	//增加乐视自己的各种判断
	try {
		ua.letvTv = typeof LetvFish.getBrowserType==='function';
		if (ua.letvTv) {
			//C1S, C2: Mozilla/5.0 (LETVC1;iPad; CPU OS 5_0 like Mac OS X) ...
			ua.letvBox = userAgent.indexOf('letvc1')>0;
			//S40, S50: Mozilla/5.0 (LETVX40;iPad; CPU OS 5_0 like Mac OS X) ...
			ua.letvS40 = userAgent.indexOf('letvx40')>0;
			//40Air, 50Air, X60, MAX70: Mozilla/5.0 (LETVX60;iPad; CPU OS 5_0 like Mac OS X) ...
			ua.letvX60 = userAgent.indexOf('letvx60')>0;
		}
	} catch (e) {}
	//乐视视频客户端
	ua.letvClient = userAgent.indexOf('letvclient')>-1 || userAgent.indexOf('letvmobileclient')>-1;
	//超级手机视频客户端
	//ua.superLetvClient = /letvmobileclient\s+android;letv;/.test(userAgent);
	//乐视手机
	ua.letvMobile || (ua.letvMobile = /\bx\d\d\d\b/.test(userAgent));

	ua.src = userAgent;

	module.exports = ua;

});

/* === lem:components/com_base/global.js === */
;(LTK["components/com_base/global"] = function (require, exports, module) {
    'use strict';
    var Global = {
        
        init: function () {
            this.initDom();
            this.initEvent();
            this.initPage();
        },

        
        initDom: function () {
            window.info = window.info || {};
            this.geo = Cookie.get('geo') || 'CN_0_0';
        },

        
        initEvent: function () {
        },

        
        initPage: function () {
            window.info.lang = window.info.lang || 'zh_cn';
            window.info.region = window.info.region || 'CN';
            window.info.geo = this.geo;
        }
    };
    Global.init();
});
/* === lem:components/langPack/pub.js === */
;(LTK["components/langPack/pub"] = function (require, exports, module) {
   'use strict';
    require('components/com_base/global');
    var zh_cn = {
    	pre_end:'试看已结束',
    	pre_time:'3秒',
    	pre_full:'观看完整版',
    	downapp:'下载乐视视频APP',
    	downapp_ty:'下载乐视体育APP',
    	timeout1:'程序员哥哥打瞌睡睡着了',
    	timeout2:'戳这里叫他起床',
    	timeout3:'睡得太香了,竟然没有醒',
    	timeout4:'继续戳他',
    	timeout5:'程序员哥哥太疲劳,再让他睡会吧',
    	timeout6:'稍后再试',
    	browser:'http://i2.letvimg.com/lc02_img/201512/02/14/41/browser.png',
    	watch_now:'立即观看',
    	shareImg:'http://i0.letvimg.com/lc03_img/201508/21/10/59/1058/share.png',
    	layerImg:'http://i1.letvimg.com/lc05_img/201601/11/14/37/1436/ms_layer.png',
    	topdl:'使用乐视视频APP看直播更流畅',
    	topapp:'下载App',
    	topdl_ty:'使用乐视体育APP 看赛事直播更流畅',
    	topdl_pre1:'试看',
    	topdl_pre2:'分钟，完整版尽在乐视视频APP',
    	loadmore1:'上拉加载更多',
    	loadmore2:'下拉加载更多',
    	loadmore3:'加载中...',
    	loadmore4:'加载失败，请上拉重试',
    	loadmore5:'加载失败，请下拉重试',
    	bdphone1:'为充分保护您信息安全和合法权利',
    	bdphone2:'请绑定手机后方可评论',
    	bdphone3:'前往绑定',
    	qq:'QQ空间',
    	wb:'新浪微博',
    	wx:'微信',
    	cancel:'取消',
    	layerImg2:'http://i2.letvimg.com/lc03_img/201510/20/17/45/img_collect.png',
    	pcover1:'本片为付费影片，开通会员可免费观看',
    	pcover2:'试看已结束，继续观看请开通会员',
    	pcover3:'开通会员',
    	pcover4:'已是会员，立即登录',
    	item_w:' 万',
    	item_y:' 亿',
    	vip0:'会员极速看视频',
    	vip1:'乐次元影视会员',
    	vip2:'乐视超级影视会员'
    };
    
    var en_us = {
    	pre_end:'Preview has ended',
    	pre_time:'',
    	pre_full:'',
    	downapp:'Watch the full movie by downloading the Le',
    	downapp_ty:'Use LeSports now',
    	timeout1:'The computer programmer fell asleep',
    	timeout2:'Call him up here',
    	timeout3:'Sleep too sweet, not even wake up',
    	timeout4:'Continue to call him',
    	timeout5:'The computer programmer is too tired, then let him sleep',
    	timeout6:'Try again later',
    	browser:'http://i3.letvimg.com/lc06_img/201606/20/16/20/1619/us_browser.png',
    	watch_now:'Watch now',
    	shareImg:'http://i0.letvimg.com/lc06_img/201606/20/16/51/1650/us_share.png',
    	layerImg:'http://i2.letvimg.com/lc07_img/201606/20/18/34/1833/en_layer.png',
    	topdl:'Use Le app now!',
    	topapp:'Download App',
    	topdl_ty:'Use Le Sports app now!',
    	topdl_pre1:'',
    	topdl_pre2:'',
    	loadmore1:'Pull up to load more',
    	loadmore2:'Down to load more',
    	loadmore3:'Loading...',
    	loadmore4:'Failed to load, please try again',
    	loadmore5:'Failed to load, please try again',
    	bdphone1:'To fully protect your information security and lawful rights',
    	bdphone2:'You can remark only after you peg your mobile phone number to your account',
    	bdphone3:'To linked up with your mobile',
    	qq:'Q-Zone',
    	wb:'Weibo',
    	wx:'WeChat',
    	cancel:'Cancel',
    	layerImg2:'http://i3.letvimg.com/lc06_img/201606/23/17/46/1744/en_img_collect.png',
    	pcover1:'This movie is a premium movie free for members',
    	pcover2:'The preview has ended. To continue, please activate membership',
    	pcover3:'Activate membership',
    	pcover4:'Log in now',
    	item_w:'',
    	item_y:'',
    	vip0:'Express viewing membership',
    	vip1:'LeEco+ Mobile',
    	vip2:'Super LePass'
    };
    
    var zh_hk = {
    	pre_end:'試睇已結束',
    	pre_time:'3秒',
    	pre_full:'觀看完整版',
    	downapp:'下載樂視視頻 APP',
    	downapp_ty:'下載樂視體育 APP',
    	timeout1:'程式師哥哥打瞌睡睡著了',
    	timeout2:'戳這裡叫他起床',
    	timeout3:'睡的太香了，竟然沒有醒',
    	timeout4:'繼續戳他',
    	timeout5:'程式師哥哥太疲勞，再讓他睡會兒吧',
    	timeout6:'稍後再試',
    	browser:'http://i2.letvimg.com/lc06_img/201606/20/16/20/1619/hk_browser.png',
    	watch_now:'立即觀看',
    	shareImg:'http://i1.letvimg.com/lc06_img/201606/20/16/51/1650/hk_share.png',
    	layerImg:'http://i1.letvimg.com/lc07_img/201606/20/18/34/1833/hk_layer.png',
    	topdl:'使用樂視視頻 APP 看直播更流暢',
    	topapp:'下載App',
    	topdl_ty:'使用樂視體育APP 看賽事直播更流暢',
    	topdl_pre1:'試看',
    	topdl_pre2:'分鐘，完整版盡在樂視視頻APP',
    	loadmore1:'上拉載入更多',
    	loadmore2:'下拉載入更多',
    	loadmore3:'加載中...',
    	loadmore4:'加載失敗，請上拉重試',
    	loadmore5:'加載失敗。請下拉重試',
    	bdphone1:'爲充分保護您的信息安全和合法權利',
    	bdphone2:'請綁定手提電話後再評論',
    	bdphone3:'去綁定手提電話號碼',
    	qq:'QQ空間',
    	wb:'新浪微博',
    	wx:'微信',
    	cancel:'取消',
    	layerImg2:'http://i3.letvimg.com/lc06_img/201606/23/17/46/1744/hk_img_collect.png',
    	pcover1:'本片為付費影片，開通會員可免費觀看',
    	pcover2:'試睇已結束，繼續觀看請開通會員',
    	pcover3:'開通會員',
    	pcover4:'已是會員，立即登入',
    	item_w:' 萬',
    	item_y:' 億',
    	vip0:'會員極速看視頻',
    	vip1:'樂次元影視會員',
    	vip2:'樂視超級影視會員'
    };
    
    var Lang = {
        init: function() {
        	this.initDom();
        	this.initLangPack();
        },
        
        initDom: function(){
        	// 简体中文
		    this.zh_cn = zh_cn;
		    // 英文
		    this.en_us = this.hi_in = en_us;
		    // 中文繁体
		    this.zh_hk = zh_hk;
        },
        
        initLangPack: function(){
        	if(info.langPack){
        		$.extend(info.langPack,this[info.lang] || this.zh_cn);
        	}else{
        		info.langPack = this[info.lang] || this.zh_cn;
        	}
        }
    };
    Lang.init();
});
/* === lem:components/share/share_base.js === */
;(LTK["components/share/share_base"] = function(require,exports,module){

	var player = require('components/player/mPlayer');
	var share = require("sdk/share/index");//全球化分享组件
	var extend = require('air/lang/extend');
	var ua = require('air/env/ua');
	var wxConfigOk = false;
	var inited = false;
	var weixinShareInfo = {};
    require('components/langPack/pub'); //多语言设置

    share.config({key: 'iWFeNzVA7669bOni', debug: false}); //授权认证后，api才可以调用

	var shareBase = {
		'init':function(){
			this._getShareInfo();
			if (ua.weixin) {
				weixinShareInfo = this.getShareInfo();
				this._weixinUpdate(weixinShareInfo);
			}
		},
		//暂存数据
		'_cache':{
			'weixinLayer':null,
			'collectLayer':null,
			'extendObj':null
		},
		//当前分享信息数据
		'_currentShareInfo':{},
		//当前格式化后的数据
		'_currentShareFomartInfo':{},
		//获得默认分享信息
		'_getShareInfo':function(){
			//第一种获取方法
			this._currentShareInfo = {
				'title':document.title,
				'link':location.href,
				'desc':$('meta[name="description"]').attr('content'),
				'imgUrl':$('body img').length > 0 && $('body img').eq(0).attr('src') ||  'http://i0.letvimg.com/lc05_img/201601/11/14/37/1436/appLetv.png'
			};
			//第二种获取方法覆盖第一种
			if(window.info && window.info.share) {
				window.info.share.imgUrl = window.info.share.imgUrl || window.info.share.img || window.info.share.webImage;
				window.info.share.link = info.share.link || info.share.webUrl || info.share.url;
				this._currentShareInfo = $.extend(this._currentShareInfo,window.info.share);
			}
		},
		//获得当前分享信息
		'getShareInfo':function(){
			return this._currentShareInfo;
		},
		//手动设置分享信息
		'setShareInfo':function(data){
			data = data || {};
			data.imgUrl = data.imgUrl || data.img || data.webImage;
			data.link = data.link || data.webUrl || data.url;
			this._currentShareInfo = $.extend(this._currentShareInfo,data);
			this._updateShareInfo();
			return this._currentShareInfo;
		},
		//内部分享信息更新逻辑
		'_updateShareInfo':function(){
			if (ua.weixin) {
				this._weixinUpdate(this._currentShareInfo);
			}
		},
		//微信信息更新update
		'_weixinUpdate':function(weixinShareInfo){
			var me = this,
				shareSuccessCallBack;
			shareSuccessCallBack = (me._cache.extendObj && me._cache.extendObj.customCallback) || (window.info && window.info.share && window.info.share.customCallback);
			//分享之前判断success是否存在
			var onsuccess = function() {
				me._cache.weixinLayer.hide();//关闭浮层
				player.show();
				shareSuccessCallBack && shareSuccessCallBack();
			}
			var shareInfo = {channelName: 'weixin', onsuccess: onsuccess};
			share.callShare(extend(shareInfo, weixinShareInfo));
		},
		//分享动作
		'bindDom':function(dom){
			var _self = this;
			dom && dom.on('tap',function(evt){
				evt.preventDefault();
				evt.stopPropagation();
				var item_type = $(this).attr('data-type');
				if(item_type == 'weixin'){//微信点击出浮层 其他点击跳地址
					_self._weixinAction(item_type);
				}else{
					_self._otherAction(item_type);
				}
			});
		},
		//其他分享动作
		'_otherAction':function(type){
			var _self = this;
			var shareInfo = {channelName: type};
            share.callShare(extend(shareInfo, _self._currentShareInfo));
			Stats.sendAction({
                ap: 'ch=share&link='+type
            });
		},
		//微信分享动作
		'_weixinAction':function(type){
			var _this = this;
			if(!this._cache.weixinLayer || this._cache.weixinLayer.length === 0){
				var tipHTML = '<div class="j-wx-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:101%;z-index:20000;"></div>'
							+'<div class="j-wx-openTip" style="position:fixed;right:25px;top:5px;background:url('+info.langPack.shareImg+') no-repeat center center; width:265px; height:35px; background-size:100%;margin:0 auto;z-index:20001"></div>';
				$('body').append(tipHTML);
				this._cache.weixinLayer = $('.j-wx-openTip');
				this._cache.weixinLayer.on('tap',function(e){
					e.stopPropagation();
					_this._cache.weixinLayer.hide();
					player.show();
					$('#uniShare_close').trigger('click');
				});
				this._cache.weixinLayer.show();
				player.hide();
			}else{
				this._cache.weixinLayer.show();
				player.hide();
			}
			$('#uniShare_close').trigger('click');
			//控制通用分享层
			$('#uniShare_layer').hide();
			$('#uniShare_cover').hide();
			Stats.sendAction({
                ap: 'ch=share&link=weixin'
            });
		},
		//微信收藏动作
		_weixinCollect: function(){
			var _this = this;
			if (!this._cache.collectLayer || this._cache.collectLayer.length == 0) {
				tipHTML = '<div class="j-wx-cl-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:101%;z-index:20000;"></div>'
					+ '<div class="j-wx-cl-openTip" style="position:fixed;right:25px;top:5px;background:url('+info.langPack.layerImg2+') no-repeat center center; width:265px; height:35px; background-size:100%;margin:0 auto;z-index:20001"></div>';
				$('body').append(tipHTML);
				this._cache.collectLayer = $('.j-wx-cl-openTip');
				this._cache.collectLayer.on('click', function (e) {
					e.stopPropagation();
					_this._cache.collectLayer.hide();
					player.show();
				});
			}
			this._cache.collectLayer.show();
			player.hide();
		},
		otherShare : function(type){
			this._otherAction(type);
		},
		weixinShare : function(){
			this._weixinAction();
		},
		weixinCollect : function(){
			this._weixinCollect();
		}
	};

	shareBase.init();

	module.exports = {
		//获得用户动态信息
		'getShareInfo':function(){
			return shareBase.getShareInfo();
		},
		//动态设定分享信息
		'setShareInfo':function(data){
			return shareBase.setShareInfo(data);
		},
		//元素绑定
		'bind': function(dom){
			shareBase.bindDom(dom);
		},
		otherShare : function(type){
			shareBase.otherShare(type);
		},
		weixinShare : function(){
			shareBase.weixinShare();
		},
		weixinCollect : function(){
			shareBase.weixinCollect();
		},
		setCallBack: function(obj) {
			shareBase._cache.extendObj = obj;
		}
	};
});
/* === lem:air/event/givee.js === */
;(LTK["air/event/givee"] = function(require, exports, module){
	
	
	var CustomEvent = {
		//_EVENTS_: {}, //事件池
		
		on: function(type, handler, once){
			if(!type){trace('CustomEvent::on:', arguments.callee.caller);return}
			var j = type.indexOf('.');
			if(j > 0){
				handler._ENAME_ = type.slice(j);
				type = type.slice(0, j);
			}
			handler._ONCE_ = once || false;
			(this._EVENTS_[type] || (this._EVENTS_[type] = [])).push(handler);
			return this;
		},
		
		one: function(type, handler){
			return this.on(type, handler, true);
		},
		
		off: function(type){
			var j = type.indexOf('.');
			if(j > 0){
				var handlerName = type.slice(j);
				type = this._EVENTS_[type.slice(0, j)];
				if(type){
					for(var i = type.length; i--; ){
						j = type[i];
						j && j._ENAME_===handlerName && (type[i] = false);
					}
				}
			}else{
				this._EVENTS_[type] = null;
			}
			return this;
		},
		
		emit: function(type){
			if(!type){trace('CustomEvent::emit:', arguments.callee.caller);return}
			var j = type.indexOf('.'), handlerName;
			if(j > 0){
				handlerName = type.slice(j);
				type = type.slice(0, j);
			}
			type = this._EVENTS_[type];
			if(type){
				var i = 0, len = type.length, args = type.slice.call(arguments, 1), handler;
				for(; i < len; i++){
					handler = type[i];
					if(handler && (!handlerName || handler._ENAME_===handlerName)){
						handler.apply(this, args);
						handler._ONCE_ && (type[i] = false);
					}
				}
			}
			return this;
		}
	};

	
	var givee = function(obj){
		typeof obj==='function' && (obj = obj.prototype);
		obj._EVENTS_ || (obj._EVENTS_ = {});
		obj.on || (obj.on = CustomEvent.on);
		obj.one || (obj.one = CustomEvent.one);
		obj.off || (obj.off = CustomEvent.off);
		obj.emit || (obj.emit = CustomEvent.emit);
		return obj;
	};

	module.exports = givee;
});

/* === lem:components/util/events.js === */
;(LTK["components/util/events"] = function (require, exports, module) {
	module.exports = require('air/event/givee')({});
});
/* === lem:components/share/share_ui_imitateApp.js === */
;(LTK["components/share/share_ui_imitateApp"] = function(require,exports,module){
	var events = require('components/util/events');
	var baseShare = require('components/share/share_base');
	var shareStr = '';
	var region = info.region || 'CN';
	if(region === 'CN'){
		shareStr = '<div class="shareBox" style=" display:block"><ul><li class="ico_weixin" id="uniShare_weixin" data-type="weixin" style="display:none;"><a href="javascript:;"><i></i><span>'+info.langPack.wx+'</span></a></li><li class="ico_qq"  id="uniShare_qqzone" data-type="qzone"><a href="javascript:;"><i style="background:url(http://i0.letvimg.com/img/201503/25/1718/QQ.png) no-repeat;background-size:100%"></i><span>'+info.langPack.qq+'</span></a></li><li class="ico_weibo" id="uniShare_weibo" data-type="weibo"><a href="javascript:;"><i style="background:url(http://i2.letvimg.com/img/201503/25/1718/xinlang.png) no-repeat;background-size:100%"></i><span>'+info.langPack.wb+'</span></a></li><li class="ico_pyq" id="uniShare_timeline"   style="display:none;"><a href="javascript:;"><i></i><span>朋友圈</span></a></li></ul><div class="qx_btn"><p class="qx"><a id="uniShare_close" href="javascript:;">'+info.langPack.cancel+'</a></p></div></div>';
	}
	if(region === 'HK' || region === 'US' || region === 'IN'){
		shareStr = '<div class="shareBox" style=" display:block"><ul><li class="ico_weixin" id="uniShare_weixin" data-type="weixin" style="display:none;"><a href="javascript:;"><i></i></a></li><li class="ico_twitter"  id="uniShare_twitter" data-type="tw"><a href="javascript:;"><i style="background:url(http://i0.letvimg.com/lc05_img/201606/03/11/19/1118/twitter.png) no-repeat;background-size:100%"></i></a></li><li class="ico_facebook" id="uniShare_facebook" data-type="fb"><a href="javascript:;"><i style="background:url(http://i0.letvimg.com/lc05_img/201606/03/11/19/1118/facebook.png) no-repeat;background-size:100%"></i></a></li><li class="ico_pyq" id="uniShare_timeline"   style="display:none;"><a href="javascript:;"><i></i></a></li></ul><div class="qx_btn"><p class="qx"><a id="uniShare_close" href="javascript:;">cancel</a></p></div></div>';
	}
	var html = {
			'css':'<style type="text/css">.block_layer{ position:fixed; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:100; left:0; top:0;}.shareBox .qx_btn{clear:both;margin-bottom:18px}.shareBox .qx_btn .qx{width:60%;height:30px;line-height:30px;margin:0 auto;text-align:center;border:1px solid #00a0e9;border-radius:4px}.shareBox .qx_btn .qx a{display:block;width:100%;height:100%;color:#00a0e9;font-size:12px}.shareBox{position:fixed;width:100%;height:auto;left:0;bottom:0;background:#fff;background:rgba(255,255,255,0.9);text-align:center;z-index:101;display:none}.shareBox ul{width:100%;text-align:center;-webkit-padding-start:0}.shareBox li{display:inline-block;margin:0 16px 16px 16px;color:#fff;list-style:none}.shareBox a{text-decoration:none}.shareBox a:hover{color:#529bef}.shareBox li i{display:block;width:46px;height:46px;margin:0 auto;background-size:100%;margin-top:9px;margin-bottom:9px}.shareBox span{color:#5c5c5c;font:12px/1.14 "\5FAE\8F6F\96C5\9ED1",Arial,sans-serif,"\65B0\5B8B\4F53"}.shareBox .ico_weixin i{background:url(http://i0.letvimg.com/img/201503/25/1718/weixin.png) no-repeat;background-size:100%} .shareBox .ico_pyq i{background:url(http://i3.letvimg.com/img/201503/25/1718/pyq.png) no-repeat;background-size:100%}.fadeInUp{-webkit-animation:fadeInUp .5s linear .2s 1;-ms-animation:fadeInUp .5s linear .2s 1;-moz-animation:fadeInUp .5s linear .2s 1;-o-animation:fadeInUp .5s linear .2s 1;animation:fadeInUp .5s linear .2s 1;-webkit-animation-fill-mode:forwards}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}</style>',	
			'shareHtml':shareStr,
			'coverHTML':'<div id="uniShare_cover" class="block_layer" style="display:none;"></div>'
	};
	
	var shareCss,shareHtml,shareButton;
	
	var imitApp = {
		'init':function(){
			this._createShareButton();			
		},
		//创建
		'_createShareLayer':function(){
			if(!shareCss && !shareHtml){
				$('head').append(shareCss = $(html.css));
				$('body').append(shareHtml = $(html.shareHtml)).append(coverHTML = $(html.coverHTML));
				$('#uniShare_close, #uniShare_cover').on('click',function(){
					coverHTML.hide();
					shareHtml.hide();
				});
				$('#uniShare_close, #uniShare_cover, .shareBox').on('touchmove', function (e) {
					e.preventDefault();
				});
				if(/MicroMessenger/i.test(navigator.userAgent)) $('#uniShare_weixin').show();				
				$('.shareBox').on('click','li',$.proxy(this._startShare,this));
			};
		},
		'_createShareButton':function(){
			var _self = this;
			if(!window.info || !window.info.share || !window.info.share.shareButton) return;
			if($('#j-btn-showhide').length == 0){
				$('body').append($('<div class="up-letv" id="j-btn-showhide"></div>'));
			};
			if($('#j-btn-showhide .diy_share').length == 0){
				$('head').append('<style>.up-letv{position:fixed;right:8px;bottom:65px;width:50px;z-index:99;}.up-letv .diy_share{width:50px;height:50px;text-indent:-3000px;position:absolute;left:0;top:0;color:#f9a038;font-size:16px;text-align:center;line-height:50px;background:url("http://i2.letvimg.com/img/201503/25/1647/share_btn.png") no-repeat left top; background-size:100%;}</style>');				
				$('#j-btn-showhide').append(shareButton = $('<span data-type="weixin"><a href="javascript:;"><b class="diy_share">分享</b></a></span>'));
			};
			
			$('#j-btn-showhide').show();
			
			$('#j-btn-showhide .diy_share').show().on('click',function(){
				_self.show();
			});
			
		},
		//修改浮层分享按钮的点击事件逻辑
		'changeEvent':function(callback){
			$('#j-btn-showhide .diy_share').off('click').on('click',function(){
				callback();
			});
		},
		//显示
		'show':function(){
			this._createShareLayer();
			coverHTML.show();
			shareHtml.show();
		},
		//隐藏
		'hide':function(){
			coverHTML.hide();
			shareHtml.hide();			
		},
		//绑定DOM
		'bindDom':function(dom){
			var _self = this;
			dom && dom.on('click',function(evt){
				evt.preventDefault();
				_self.show();
			});				
		},
		//设定分享信息
		'setShareInfo':function(data){
			baseShare.setShareInfo(data)
		},
		//开始分享,如果需要可单独触发数据上报
		'_startShare':function(e){
			e.preventDefault();
			var li = $(e.target).closest('li');
			var type = li.attr('data-type');
			events.emit('sendDataShare',type);
			if(type === 'weixin'){
				baseShare.weixinShare();
			}else{
				baseShare.otherShare(type);
			}
		}
	};
	
	imitApp.init();
	
	module.exports = {
		'show':function(){
			imitApp.show()
		},
		'hide': function(){
			imitApp.hide()
		},
		'bind':function(dom){
			imitApp.bindDom(dom);
		},
		'changeEvent':function(callback){
			imitApp.changeEvent(callback);
		}
		
	};	
});
/* === lem:components/app/appAddList.js === */
;(LTK["components/app/appAddList"] = function(require,exports,module){
	var addList = {
		'tv':[ //电视剧
			'1711_2_1002696317'
		],
		'movie':[ //电影
			'1711_1_1002697474'
		],
		'sports':[//体育
			'1711_4_1002696794'
		],
		'zongyi':[//综艺
			'1711_11_1002696813'
		],
		'comic':[//动漫
			'1711_5_1002696762'
		],
		'vip':[//会员
			'1711_1000_1002697479'
		],
		'music':[//音乐
			'1711_9_1002697478'
		],
		'news':[//咨讯
			'1711_1009_1002698457'
		],
		'qinzi':[//亲子
			'1711_34_1002697460'
		],
		'nba':[//NBA
			'1711_1004_1002697497'
		],
		'finance':[//财经
			'1711_22_1002697461'
		],
		'fashion':[//风尚
			'1711_20_1002700424'
		],
		'jilu':[//记录
			'1711_16_1002697542'
		],
		'auto':[//汽车
			'1711_14_1002699936'
		],
		'travel':[//旅游
			'1711_23_1002697252'
		],
		'gaoxiao':[//搞笑
			'1711_1010_1002702325',
			le.api_host.m_href + '/'
		],
		'dubi':[//杜比
			'1711_1001',
			le.api_host.m_href + '/'
		],
		'hot':[//热点
			'hot'
		],
		'live_lunbo':[//直播_轮播
			'Live_lunbo',
			le.api_host.m_href + '/live/'
		],
		'live_weishi':[//直播_卫视
			'Live_weishi',
			le.api_host.m_href + '/live/list/channel/weishi/'
		],
		'live_ent':[//直播_娱乐
			'Live_ent',
			le.api_host.m_href + '/live/list/channel/ent/'
		],
		'live_music':[//直播_音乐
			'Live_music',
			le.api_host.m_href + '/live/list/channel/music/'
		],
		'live_other':[//直播_其他
			'Live_other',
			le.api_host.m_href + '/live/list/channel/letv_other/'
		],

		'special':[//专题
			'Topics',
			le.api_host.m_href + '/'
		],
		'me_record':[//播放记录
			'Me_Record',
			le.api_host.m_href + '/history'
		],
		'pay':[//支付
			'Me_Checkout',
			le.api_host.zhifu + '/mz/tobuy/pro'
		],
		'pay.reg':[//去移动会员类型支付页
			'Me_Checkout',
			le.api_host.zhifu + '/mz/tobuy/regular'
		],
		'pay.pro':[//去全屏会员类型支付页
			'Me_Checkout',
			le.api_host.zhifu + '/mz/tobuy/pro'
		],
		'me':[//用户中心
			'Me_Login',
			le.api_host.m_href + '/my/'
		],
		'setpannel':[//设置面板
			'NiceApp',
			le.api_host.m_href + '/my/'
		],
		'search':[//搜索
			'Search',
			le.api_host.m_href + '/search'
		],
		'soft':[//精品软件
			'NiceApp',
			le.api_host.m_href + '/static/soft'
		]
	};
	module.exports = addList;
});
/* === lem:components/app/apph5Adapter.js === */
;(LTK["components/app/apph5Adapter"] = function(require, exports, module) {

	var appAdapter = {};

	var envData = {
		env: ''//当前是否是app环境,
	};

	var bridge = require('sdk/bridge/index');
	var getUserInfo = require('components/user/getUserInfo');//获得用户信息
	var share_base = require('components/share/share_base');//分享基础组件(非UI层)
	var share_ui_imitateApp = require('components/share/share_ui_imitateApp');//UI仿APP分享组件
	var appList = require('components/app/appAddList');//APP页面与M站功能页面跳转映射关系

	var shareCss,shareHtml,coverHTML;//分享模板引用

	bridge.config({key: 'iWFeNzVA7669bOni', debug: false}); //授权认证后，api才可以调用
	//创建自定义方法,自定义方法覆盖default方法
	var createCustomMothed = function(methodName, fun) {
		if (adapterConfig[methodName]) {
			adapterConfig[methodName]['default'] = fun;
		} else {
			alert('appAdapter no find this method');
		}
	}

	appAdapter.setMethod = createCustomMothed;

	var createExtMothed = function() {

		var methodName = [];
		var initArray = [];//需要初始化的引用
		for(var key in adapterConfig) {
			methodName.push(key);
		}

		var execInit = function() {
			if(initArray.length === 0) return;
			var item = initArray.shift();
 			item();
			arguments.callee();
		};

		var setAppMethod = function() {
			if (methodName.length === 0) {
				execInit();
				return;
			}
			var item = methodName.shift();

			appAdapter[item] = adapterConfig[item][envData.env];
			adapterConfig[item].init && initArray.push(adapterConfig[item].init);
			arguments.callee();
		};

		var setBrowserMethod  = function() {
			for(var key in adapterConfig) {
				appAdapter[key]  = adapterConfig[key]['default'];
				adapterConfig[key].init && adapterConfig[key].init();
			}
		};

		if (envData.env === 'app') {
			setAppMethod();
		} else {
			setBrowserMethod();
		}
	};

	var adapterConfig = {
		//环境判断
		isApp: {
			'name': 'isAppEnv',
			'app': function() {
				return envData.env === 'app' ? true : false;
			},
			'default': function() {
				return adapterConfig.isApp['app']();
			}
		},
		//获得版本号
		getVersion: {
			'name': 'core.getVersion',
			'app': function(callBack) {
				bridge.app.getVersion(function(res) {
					callBack(res);
				});
			},
			'default': function(callBack) {
				callBack({'result':200,'version':'msite'});
			}
		},
		//获得用户信息
		getUserInfo: {
			'name': 'core.getUserInfo',
			'app': function(callBack) {
				bridge.user.getInfo(function(res) {
					callBack(res);
				});
			},
			'default': function(callBack) {
				getUserInfo(callBack);
			}
		},
		//获得当前网络状态
		getNetworkState: {
			'name': 'core.getNetworkState',
			'app': function(callBack) {
				bridge.network.getInfo(function(res) {
					callBack(res);
				});
			},
			'default': function(callBack) {
				callBack({});//浏览器下返回空的对象
			}
		},
		//获得当前电池电量
		getPowerLevel: {
			'name': 'core.getPowerLevel',
			'app': function(callBack) {
				bridge.device.getPowerLevel(function(res) {
					callBack(res);
				});
			},
			'default': function(callBack) {
				callBack({});//浏览器下返回空的对象
			}
		},
		autoPlay: {
			'name': 'fun.autoPlay',
			'app': function(data, callBack) {
				bridge.video.auto(data, function(res) {
					callBack(res);
				});
			},
			'default': function(data, callBack) {
				callBack({});//浏览器下返回空的对象
			}
		},
		//获得当前环境设备信息
		getDeviceInfo: {
			'name': 'core.getDeviceInfo',
			'app': function(callBack) {
				bridge.device.getInfo(function(res) {
					callBack(res);
				});
			},
			'default': function(callBack) {
				callBack({});//浏览器下返回空的对象
			}
		},
		//调用登录
		callLogin: {
			'name': 'fun.callLogin',
			'app': function() {
				bridge.user.login(function(res) {

				});
			},
			'default': function(data) {
				location.href = le.api_host.sso_http + '/user/mloginHome?next_action='+ encodeURIComponent(location.href);
			}
		},
		
		callLogout: {
			'name': 'fun.callLogout',
			'app': function(callBack) {
				bridge.user.logout(function(res) {
					callBack(res);
				});
			},
			'default': function(data) {
				$.ajax({
					url: le.api_host.sso_http + '/user/loginout?jsonp=?',
					dataType: 'jsonp',
					jsonp: 'jsonp',
					success: function() {
						if (data && data.next_action) {
							location.href = data.next_action;
						} else {
							location.href = le.api_host.m_href;
						}
					}
				});
			}
		},
		//调动callWebview
		callWebview: {
			'name': 'fun.callWebview',
			'app': function(data, callBack) {
				data = data || {};
				data.url = adapterConfig.callWebview.map(data.url) || 'Home' //默认调用APP首页
				//会员中心目前用到的参数，app客户端改动较多。格式为：Me_Checkout_title_url
				if (data.params) {
					if (data.params.title) {
						data.url += "_" + data.params.title;
					}
					if (data.params.url) {
						data.url += "_" + data.params.url;
					}
				}
				bridge.webview.open(data, function(res) {
					callBack(res);
				});
			},
			'default': function(data) {
				data = data || {};
				location.href = adapterConfig.callWebview.map(data.url) || le.api_host.m_href; //默认调用APP首页
			},
			'map': function(addr) {
				var mapItem = appList[addr];
				if (mapItem) {
					if (envData.env === 'app') {
						return mapItem[0];
					} else {
						if (mapItem.length === 1) {
							return le.api_host.m_href + '/' + addr;
						} else {
							return mapItem[1];
						}
					}
				} else {
					return addr;
				}
			}
		},
		//alert调用
		callAlert: {
			'name': 'fun.callAlert',
			'app': function(data, callBack) {
				bridge.alert.toast(data, function(res) {
					callBack(res);
				});
			},
			'default': function(data) {
				if (data.type === 'alert') {
					alert(data.text);
				}
			}
		},
		//分享
		callShare: {
			'name': 'fun.callShare',
			'init': function() {
				if (envData.env === 'app') {
					share_ui_imitateApp.changeEvent(function() {
						adapterConfig.callShare.app();
					});
				}
			},
			'app': function(data, callBack) {
				var formatData = adapterConfig.callShare.argumentsFormat(arguments);

				bridge.share.callShare(adapterConfig.callShare.setShare(formatData.shareInfo), function(res) {
					formatData.callback(res);
				});
			},
			'default': function(data, callBack) {
				adapterConfig.callShare.setShare(data);
				if(data && (typeof data.showCustomLayer === 'function')){
					data.showCustomLayer();
				}else{
					share_ui_imitateApp.show();
				}
			},
			'setShare': function(data) {
				data = data || {};
				var rData = share_base.setShareInfo(data);
				rData.type = 'webpage';
				rData.title = data.title;
				rData.webUrl = data.link || data.webUrl;
				rData.webImage = data.imgUrl || data.img || data.webImage;
				rData.desc = data.desc;
				return rData
			},
			'argumentsFormat': function(arg) {
				var formatData;

				if (arg && arg.length === 2) {
					formatData = {
						'shareInfo':arg[0],
						'callback' : arg[1]
					}
				} else {
					formatData = {
						'shareInfo':share_base.getShareInfo(),
						'callback' : arg && arg.length === 1 && typeof arg === 'function' ? arg[0] : function(){}
					}
				}
				return formatData;
			}
		},
		//设定分享内容
		setShare: {
			'name': 'fun.setShare',
			'init': function() {
				if(envData.env === 'app') {
					adapterConfig.setShare.app(function(){});
				}
			},
			'app': function(data, callBack) {
				var formatData = adapterConfig.callShare.argumentsFormat(arguments);
				bridge.share.setShare(adapterConfig.callShare.setShare(formatData.shareInfo), function(res) {
					formatData.callback(res);
				});
			},
			'default': function(data) {
			}
		},
		//视频点播
		playVideo:  {
			'name': 'fun.playVideo',
			'app': function(data, callBack) {
				data.type = '1'; //点播
				data.screen =  data.screen || 1 //默认半屏播放
				data.vid = data.id || data.vid;

				bridge.video.play (data, function(res) {
					callBack(res);
				});
			},
			'default': function(data) {
				data.vid = data.id || data.vid;
				location.href = le.api_host.m_href + '/vplay_' + data.vid + '.html';
			}
		},
		//直播
		playLiveVideo: {
			'name': 'fun.playLiveVideo',
			'app': function(data, callBack) {
				data.type = '2'; //直播
				data.screen =  data.screen || 1 ;//默认半屏播放
				data.liveid = data.id || data.liveid;
				data.channel =  data.channel || 'other';

				bridge.video.playLive(data, function(res) {
					callBack(res);
				});
			},
			'default': function(data) {//去直播播放页
				data.liveid = data.id || data.liveid;
				data.channel = data.channel || 'other';//默认其他类型
				location.href = le.api_host.m_href + '/live/play_' + data.channel + '.html?id=' + data.liveid;
			}
		},
		//调用打开页面
		callBrowser: {
			'name': 'fun.callBrowser',
			'app': function(data, callBack) {
				data = data || {};
				data.url = data.url || le.api_host.m_href;
				bridge.browser.view(data, function(res) {
					// callBack(res);
				});
			},
			'default': function(data, callBack) {
				data = data || {};
				location.href = data.url || le.api_host.m_href;
			}
		},
		//调用扫描二维码
		callScanCode: {
			'name': 'fun.callScanCode',
			'app': function(callBack) {
				bridge.qrcode.scan(function(res) {
					callBack(res);
				});
			},
			'default': function(data, callBack) {

			}
		}
	};

	//app环境判断
	envData.env = bridge.app.isAppEnv ? 'app' : 'browser';
	createExtMothed();
	le.app = appAdapter;

	module.exports = {
		'setMethod': appAdapter.setMethod
	};
});
//乐搜自己的数据上报
//wanghui
//2016.10.12

/* === lem:components/search/leso_stat.js === */
;(LTK["components/search/leso_stat"] = function(require, exports, module) {
    'use strict';
    var apph5Adapter = require('components/app/apph5Adapter');
    //乐搜数据上报url
    var lesoApiUrl = 'http://dc.so.le.com/data_collect.so';
    var lesoStat = {

        sendData: function(opt, callback) {
            var _self = this,
                config = { 'from': 'mobile_msite0400', 'imei': '' };
            config = $.extend(config, opt);
            if ($.cookie('ssouid')) {
                config.uid = $.cookie('ssouid');
            } else {
                config.uid = '';
            }

            le.app.getDeviceInfo(function(dInfo) {
                config.device_id = dInfo.deviceId || Stats.getLC();
            });

            le.app.getVersion(function(data) {
                config.version = data.version || '';
            });
            config.time = new Date().getTime();
            if (!config.query) { config.query = $('#j-search').val() || $('.j-search').val(); }

            //接口不支持jsonp格式，所有用如下方式请求
            var confStr = '';
            for (var i in config) { confStr += i + '=' + config[i] + '&'; }
            confStr = confStr.slice(0, confStr.length - 1);
            var img = new Image(1, 1);
            img.onload = img.onerror = function () {
                img = null;
                if (callback) {
                    typeof callback==='string' ?
                        (window.location.href = callback) : callback();
                }
            };
            img.src = lesoApiUrl + '?' + confStr;

            // 除了callback，同时确保在ie和firefox下页面关闭时也能发出img请求
            setTimeout(function () {
                if (img && callback) {
                    typeof callback==='string' ?
                        (window.location.href = callback) : callback();
                    callback = false;
                }
            }, 1000);

        }

    };

    module.exports = lesoStat;
});

/* === lem:air/util/Url.js === */
;(LTK["air/util/Url"] = function(require, exports, module){
	
	var Url = {
		//私有属性
		_query: null,
		
		getParam: function(name){
			var query = this._query;
			if(query===null){
				query = this._query = this.parseParam(window.location.search.slice(1));
			}
			return name ? (query[name.toLowerCase()]||'') : query;
		},
		
		serializeParam: function(param){
			var k, v, p = [];
			for(k in param){
				v = param[k];
				v!=='' && param.hasOwnProperty(k) && p.push(k+'='+encodeURIComponent(v));
			}
			return p.join('&');
		},
		
		parseParam: function(url){
			url = url.split('#')[0]; //去掉hash
			if(url.indexOf('?')>0){
				url = url.split('?')[1];
			}
			url = url.split('&');
			var query = {},
				i = 0, l = url.length,
				p, j;
			for(; i < l; i++){
				p = url[i];
				if(p){
					j = p.indexOf('=');
					v = p.slice(j+1);
					v && j>0 && (query[p.slice(0,j).toLowerCase()] = decodeURIComponent(v));
				}
			}
			return query;
		},
		
		setParam: function(url, param){
			var hash = '';
			if(url.indexOf('#')>-1){
				url = url.split('#');
				hash = '#'+url[1];
				url = url[0];
			}
			if(url.indexOf('?')>0){
				var query = this.parseParam(url);
				for(var k in query){
					param.hasOwnProperty(k) || 
						(query.hasOwnProperty(k) && (param[k] = query[k]));
				}
				url = url.split('?')[0];
			}
			return url + '?' + this.serializeParam(param) + hash;
		}
	};

	module.exports = Url;
	
});

/* === lem:air/array/uniqueUnshift.js === */
;(LTK["air/array/uniqueUnshift"] = function (require, exports, module) {
	
	module.exports = function (arr, item, maxLength) {
		var i = arr.length;
		while (i--) {
			if (item===arr[i]) {
				arr.splice(i, 1);
				break;
			}
		}
		arr.unshift(item);
		maxLength && arr.length>maxLength && arr.pop();

		return arr;
	};
});

/* === lem:air/array/each.js === */
;(LTK["air/array/each"] = function (require, exports, module) {
	
	module.exports = function (obj, handler) {
		var i;

		if (obj instanceof Array) {
			i = 0;
			for (var len = obj.length; i < len; i++) {
				if (handler(i, obj[i]) === false){
					break;
				}
			}
		} else {
			for (i in obj) {
				if (obj.hasOwnProperty(i)) {
					if (handler(i, obj[i]) === false){
						break;
					}
				}
			}
		}
		
	};

});

/* === lem:components/touchComp/touchEvent.js === */
;(LTK["components/touchComp/touchEvent"] = function (require, exports, module) {
    'use strict';
    var doc = $(document);
    var TouchEvent = function () {

    };
    TouchEvent.prototype = {
        constructor: TouchEvent,

        
        init: function (options) {
            this.initDom(options);
            this.initEvent();
        },

        
        initDom: function (options) {
            this.settings = options;
            this.container = options.container;
            this.target = options.target || '';
        },

        
        initEvent: function () {
            if (this.settings.onOrtChange) {
                $(window).on('resize ortchange', this.settings.onOrtChange);
            }
            this.container.on('touchstart', this.target, $.proxy(this.onTouchStart, this));
            if (this.settings.onTransitionEnd) {
                this.container.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', this.settings.onTransitionEnd);
            }
        },

        
        onTouchStart: function (e) {
            this.settings.onTouchStart(e);
            doc.on('touchmove', this.target, this.settings.onTouchMove);
            doc.on('touchend touchcancel', $.proxy(this.onTouchEnd, this));
        },

        
        onTouchEnd: function (e) {
            this.settings.onTouchEnd(e);
            doc.off('touchmove', this.target, this.settings.onTouchMove);
            doc.off('touchend touchcancel', $.proxy(this.onTouchEnd, this));
        }
    };

    module.exports = TouchEvent;
});
/* === lem:components/touchComp/touchUtil.js === */
;(LTK["components/touchComp/touchUtil"] = function (require, exports, module) {
    'use strict';
    var TouchUtil = {
        _vendor: function () {
            var _elementStyle = document.createElement('div').style;
            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                transform,
                i = 0,
                l = vendors.length;

            for ( ; i < l; i++ ) {
                transform = vendors[i] + 'ransform';
                if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
            }

            return false;
        },

        _prefixStyle: function (style) {
            var _vendor = this._vendor();
            if (_vendor === false) return false;
            if (_vendor === '') return style;
            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
        },

        
        setTransition: function ($container, duration, timingFunction) {
            var name = this._prefixStyle('transition');
            var tf = timingFunction || 'cubic-bezier(0.1, 0.57, 0.1, 1)';
            if (!$container[0]) {
                return;
            }
            $container[0].style[name] = 'all ' + duration + 'ms ' + tf;
        },

        
        removeTransition: function ($container) {
            var name = this._prefixStyle('transition');
            var con = $container[0];
            if (con && con.style) {
                con.style[name] = '';
            }
        },

        
        setTranslateX: function ($container, translateX) {
            this.setTranslate($container, translateX, 0);
        },

        
        setTranslateY: function ($container, translateY) {
            this.setTranslate($container, 0, translateY);
        },
        
        
        setTranslate: function ($container, translateX, translateY) {
            var name = this._prefixStyle('transform');
            if (!$container[0]) {
                return;
            }
            $container[0].style[name] = 'translate(' + parseInt(translateX, 10) + 'px, ' + parseInt(translateY, 10) + 'px)';
        },

        
        removeTranslate: function ($container) {
            var name = this._prefixStyle('transform');
            $container[0].style[name] = '';
        },

        
        removeTrans: function ($container) {
            this.removeTransition($container);
            this.removeTranslate($container);
        },

        
        getWidth: function (dom) {
            return dom.getBoundingClientRect().width;
        }
    };

    module.exports = TouchUtil;
});
/* === lem:components/touchComp/leTimer.js === */
;(LTK["components/touchComp/leTimer"] = function (require, exports, module) {
    'use strict';
    var LeTimer = {
        
        setInterval: function (callback, duration) {
            var timerObj = {};
            var beforeTime = (new Date()).getTime();
            this._interval(callback, beforeTime, duration, timerObj);
            return timerObj;
        },

        
        setTimeout: function (callback, duration) {
            var timerObj = {};
            var beforeTime = (new Date()).getTime();
            this._timeout(callback, beforeTime, duration, timerObj);
            return timerObj;
        },

        
        clear: function (timerObj) {
            if (!timerObj || !timerObj.timer) {
                return;
            }
            window.cancelAnimationFrame(timerObj.timer);
        },

        
        _interval: function (callback, beforeTimer, duration, timerObj) {
            var _self = this;
            var afterTime = (new Date()).getTime();
            var bs = beforeTimer;
            if (afterTime - beforeTimer >= duration) {
                bs = afterTime;
                callback && callback.call(this);
            }

            timerObj.timer = window.requestAnimationFrame(function () {
                _self._interval(callback, bs, duration, timerObj);
            });
        },

        
        _timeout: function (callback, beforeTimer, duration, timerObj) {
            var _self = this;
            var afterTime = (new Date()).getTime();
            var bs = beforeTimer;
            var delta = afterTime - beforeTimer;
            if (delta >= duration && (delta-duration) < 300 ) {
                bs = afterTime;
                callback && callback.call(this);
                window.cancelAnimationFrame(timerObj.timer);
            } else {
                timerObj.timer = window.requestAnimationFrame(function () {
                    _self._timeout(callback, bs, duration, timerObj);
                });
            }
        }
    };
    module.exports = LeTimer;
});
/* === lem:components/touchComp/animateScroll.js === */
;(LTK["components/touchComp/animateScroll"] = function (require, exports, module) {
    'use strict';
    var TouchEvent = require('components/touchComp/touchEvent');
    var touchUtil = require('components/touchComp/touchUtil');
    var leTimer = require('components/touchComp/leTimer');
    var AnimateScroll = function () {

    };
    AnimateScroll.prototype = {
        constructor: AnimateScroll,

        
        init: function (options) {
            this.initDom(options);
            this.initEvent();
            this.initPage();
        },

        
        initDom: function (options) {
            var defaults = {
                container: '#container',
                wrapper: '#wrapper',
                offsetWidth: 0
            };
            this.settings = $.extend(defaults, options);
            this.container = $(this.settings.container);
            this.wrapper = this.container.find(this.settings.wrapper);
            this.offsetWidth = this.settings.offsetWidth;
            this.items = this.wrapper.find('li');
            this.offsetWrapperWidth = this.settings.offsetWrapperWidth || 0;
            this.maxTranslateX = 10000;
            this.translateX = 0;
            this.delta = 0;
            this.currentScrolledIndex = 0;
        },

        
        initEvent: function () {
            var touchEvnet = new TouchEvent();
            touchEvnet.init({
                container: this.container,
                onTouchStart: $.proxy(this.onTouchStart, this),
                onTouchMove: $.proxy(this.onTouchMove, this),
                onTouchEnd: $.proxy(this.onTouchEnd, this),
                // onTransitionEnd: $.proxy(this.onTransitionEnd, this),
                onOrtChange: $.proxy(this.onBeforePageResize, this)
            });
        },

        
        initPage: function () {
            this.setWrapperSize();
        },

        
        onBeforePageResize: function () {
            leTimer.setTimeout($.proxy(this.onPageResize, this), 500);
        },

        
        onPageResize: function () {
            var beforeMaxTranslateX = this.maxTranslateX;
            this.setWrapperSize();
            if (beforeMaxTranslateX > this.maxTranslateX && this.translateX === -beforeMaxTranslateX) {
                this.setTranslateX(-this.maxTranslateX);
            }
            this.scrollTo(this.currentScrolledIndex);
        },

        
        setWrapperSize: function () {
            var width = 0;
            for (var i = 0; i < this.items.length; i++) {
                width += touchUtil.getWidth(this.items[i]);
            }
            if (!width) {
                return;
            }
            // 修复item只有一个时，横竖屏，宽度计算有误，字体被遮盖bug
            if( this.items.length == 1 ){ width += 20; }
            this.wrapper.width(width + this.offsetWrapperWidth);
            this.maxTranslateX = width - touchUtil.getWidth(this.container[0]) + this.offsetWidth;
        },

        
        onTouchStart: function (e) {
            touchUtil.removeTransition(this.wrapper);
            this.startX = e.targetTouches[0].clientX;
            this.startY = e.targetTouches[0].clientY;
            this.startTimer = (new Date()).getTime();
        },

        
        onTouchMove: function (e) {
            this.currentX = e.targetTouches[0].clientX;
            this.currentY = e.targetTouches[0].clientY;
            this.delta = this.currentX - this.startX;

            // 如果纵向拖动大于横向拖动则无视
            if (Math.abs(this.currentX - this.startX) < Math.abs(this.currentY - this.startY)) {
                return;
            }
            e.preventDefault();
            if (this.translateX + this.delta > 0) {
                this.translateX = 0;
                this.delta = 0;
                this.setTranslateX(0);
                return;
            } else if (this.translateX + this.delta < -this.maxTranslateX) {
                this.translateX = -this.maxTranslateX;
                this.delta = 0;
                this.setTranslateX(-this.maxTranslateX);
                return;
            }
            var translateX = this.translateX + this.delta;

            this.setTranslateX(translateX);
        },

        
        onTouchEnd: function (e) {
            this.endTimer = (new Date()).getTime();
            var duration = this.endTimer - this.startTimer;
            var length = Math.abs(this.delta);
            this.speed = length / duration;
            // 如果距离太小,时间太长,或者正在动画 都不进行下一次动画
            if (duration > 700 || length < 10 || this.speed === 0) {
                this.translateX += this.delta;
                return;
            }
            // delta大于0是左划(<-<-<-<-<-); 小于0是右划(->->->->->)
            var newDura = Math.floor(duration * 3);
            if (this.delta > 0) {
                this.doAnimateScroll(length * 3 * this.speed, newDura);
            } else {
                this.doAnimateScroll(-length * 3 * this.speed, newDura);
            }
        },

        
        doAnimateScroll: function (delta, newDura) {
            this.translateX = delta + this.translateX;
            touchUtil.setTransition(this.wrapper, newDura);
            this.setTranslateX(this.translateX, true);
            leTimer.setTimeout($.proxy(this.onTransitionEnd, this), newDura);
        },

        
        onTransitionEnd: function (e) {
            touchUtil.removeTransition(this.wrapper);
            this.speed = 0;
            this.delta = 0;
        },

        
        setTranslateX: function (value, fromScroll) {
            if (value > 0 || value < -this.maxTranslateX && !fromScroll) {
                return;
            }
            if (fromScroll && value < -this.maxTranslateX) {
                var x = -this.maxTranslateX;
                if (x > 0) {
                    x = 0;
                }
                touchUtil.setTranslateX(this.wrapper, x);
            } else {
                touchUtil.setTranslateX(this.wrapper, value);
            }
        },

        
        scrollTo: function (index, offsetX) {
            var translateX = 0;
            var getOffsetX = offsetX || 0;
            this.currentScrolledIndex = index;
            for (var i = 0; i < index; i++) {
                translateX += touchUtil.getWidth(this.items[i]);
            }
            this.translateX = -Math.round(translateX + getOffsetX);
            this.setTranslateX(this.translateX, true);
        }
    };

    module.exports = AnimateScroll;
});
/* === lib:gmu/core/gmu.js === */
;// Copyright (c) 2013, Baidu Inc. All rights reserved.
//
// Licensed under the BSD License
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://gmu.baidu.com/license.html
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




var gmu = gmu || {
    version: '@version',
    $: window.Zepto,

    
    staticCall: (function( $ ) {
        var proto = $.fn,
            slice = [].slice,

            // 公用此zepto实例
            instance = $();

        instance.length = 1;

        return function( item, fn ) {
            instance[ 0 ] = item;
            return proto[ fn ].apply( instance, slice.call( arguments, 2 ) );
        };
    })( Zepto )
};
/* === lib:gmu/core/event.js === */
;(function( gmu, $ ) {
    var slice = [].slice,
        separator = /\s+/,

        returnFalse = function() {
            return false;
        },

        returnTrue = function() {
            return true;
        };

    function eachEvent( events, callback, iterator ) {

        // 不支持对象，只支持多个event用空格隔开
        (events || '').split( separator ).forEach(function( type ) {
            iterator( type, callback );
        });
    }

    // 生成匹配namespace正则
    function matcherFor( ns ) {
        return new RegExp( '(?:^| )' + ns.replace( ' ', ' .* ?' ) + '(?: |$)' );
    }

    // 分离event name和event namespace
    function parse( name ) {
        var parts = ('' + name).split( '.' );

        return {
            e: parts[ 0 ],
            ns: parts.slice( 1 ).sort().join( ' ' )
        };
    }

    function findHandlers( arr, name, callback, context ) {
        var matcher,
            obj;

        obj = parse( name );
        obj.ns && (matcher = matcherFor( obj.ns ));
        return arr.filter(function( handler ) {
            return handler &&
                    (!obj.e || handler.e === obj.e) &&
                    (!obj.ns || matcher.test( handler.ns )) &&
                    (!callback || handler.cb === callback ||
                    handler.cb._cb === callback) &&
                    (!context || handler.ctx === context);
        });
    }

    
    function Event( type, props ) {
        if ( !(this instanceof Event) ) {
            return new Event( type, props );
        }

        props && $.extend( this, props );
        this.type = type;

        return this;
    }

    Event.prototype = {

        
        isDefaultPrevented: returnFalse,

        
        isPropagationStopped: returnFalse,

        
        preventDefault: function() {
            this.isDefaultPrevented = returnTrue;
        },

        
        stopPropagation: function() {
            this.isPropagationStopped = returnTrue;
        }
    };

    
    gmu.event = {

        
        on: function( name, callback, context ) {
            var me = this,
                set;

            if ( !callback ) {
                return this;
            }

            set = this._events || (this._events = []);

            eachEvent( name, callback, function( name, callback ) {
                var handler = parse( name );

                handler.cb = callback;
                handler.ctx = context;
                handler.ctx2 = context || me;
                handler.id = set.length;
                set.push( handler );
            } );

            return this;
        },

        
        one: function( name, callback, context ) {
            var me = this;

            if ( !callback ) {
                return this;
            }

            eachEvent( name, callback, function( name, callback ) {
                var once = function() {
                        me.off( name, once );
                        return callback.apply( context || me, arguments );
                    };

                once._cb = callback;
                me.on( name, once, context );
            } );

            return this;
        },

        
        off: function( name, callback, context ) {
            var events = this._events;

            if ( !events ) {
                return this;
            }

            if ( !name && !callback && !context ) {
                this._events = [];
                return this;
            }

            eachEvent( name, callback, function( name, callback ) {
                findHandlers( events, name, callback, context )
                        .forEach(function( handler ) {
                            delete events[ handler.id ];
                        });
            } );

            return this;
        },

        
        trigger: function( evt ) {
            var i = -1,
                args,
                events,
                stoped,
                len,
                ev;

            if ( !this._events || !evt ) {
                return this;
            }

            typeof evt === 'string' && (evt = new Event( evt ));

            args = slice.call( arguments, 1 );
            evt.args = args;    // handler中可以直接通过e.args获取trigger数据
            args.unshift( evt );

            events = findHandlers( this._events, evt.type );

            if ( events ) {
                len = events.length;

                while ( ++i < len ) {
                    if ( (stoped = evt.isPropagationStopped()) ||  false ===
                            (ev = events[ i ]).cb.apply( ev.ctx2, args )
                            ) {

                        // 如果return false则相当于stopPropagation()和preventDefault();
                        stoped || (evt.stopPropagation(), evt.preventDefault());
                        break;
                    }
                }
            }

            return this;
        }
    };

    // expose
    gmu.Event = Event;
})( gmu, gmu.$ );
/* === lib:gmu/extend/parseTpl.js === */
;(function( $, undefined ) {
    
    
    $.parseTpl = function( str, data ) {
        var tmpl = 'var __p=[];' + 'with(obj||{}){__p.push(\'' +
                str.replace( /\\/g, '\\\\' )
                .replace( /'/g, '\\\'' )
                .replace( /<%=([\s\S]+?)%>/g, function( match, code ) {
                    return '\',' + code.replace( /\\'/, '\'' ) + ',\'';
                } )
                .replace( /<%([\s\S]+?)%>/g, function( match, code ) {
                    return '\');' + code.replace( /\\'/, '\'' )
                            .replace( /[\r\n\t]/g, ' ' ) + '__p.push(\'';
                } )
                .replace( /\r/g, '\\r' )
                .replace( /\n/g, '\\n' )
                .replace( /\t/g, '\\t' ) +
                '\');}return __p.join("");',

            
            func = new Function( 'obj', tmpl );
        
        return data ? func( data ) : func;
    };
})( Zepto );
/* === lib:gmu/core/widget.js === */
;(function( gmu, $, undefined ) {
    var slice = [].slice,
        toString = Object.prototype.toString,
        blankFn = function() {},

        // 挂到组件类上的属性、方法
        staticlist = [ 'options', 'template', 'tpl2html' ],

        // 存储和读取数据到指定对象，任何对象包括dom对象
        // 注意：数据不直接存储在object上，而是存在内部闭包中，通过_gid关联
        // record( object, key ) 获取object对应的key值
        // record( object, key, value ) 设置object对应的key值
        // record( object, key, null ) 删除数据
        record = (function() {
            var data = {},
                id = 0,
                ikey = '_gid';    // internal key.

            return function( obj, key, val ) {
                var dkey = obj[ ikey ] || (obj[ ikey ] = ++id),
                    store = data[ dkey ] || (data[ dkey ] = {});

                val !== undefined && (store[ key ] = val);
                val === null && delete store[ key ];

                return store[ key ];
            };
        })(),

        event = gmu.event;

    function isPlainObject( obj ) {
        return toString.call( obj ) === '[object Object]';
    }

    // 遍历对象
    function eachObject( obj, iterator ) {
        obj && Object.keys( obj ).forEach(function( key ) {
            iterator( key, obj[ key ] );
        });
    }

    // 从某个元素上读取某个属性。
    function parseData( data ) {
        try {    // JSON.parse可能报错

            // 当data===null表示，没有此属性
            data = data === 'true' ? true :
                    data === 'false' ? false : data === 'null' ? null :

                    // 如果是数字类型，则将字符串类型转成数字类型
                    +data + '' === data ? +data :
                    /(?:\{[\s\S]*\}|\[[\s\S]*\])$/.test( data ) ?
                    JSON.parse( data ) : data;
        } catch ( ex ) {
            data = undefined;
        }

        return data;
    }

    // 从DOM节点上获取配置项
    function getDomOptions( el ) {
        var ret = {},
            attrs = el && el.attributes,
            len = attrs && attrs.length,
            key,
            data;

        while ( len-- ) {
            data = attrs[ len ];
            key = data.name;

            if ( key.substring(0, 5) !== 'data-' ) {
                continue;
            }

            key = key.substring( 5 );
            data = parseData( data.value );

            data === undefined || (ret[ key ] = data);
        }

        return ret;
    }

    // 在$.fn上挂对应的组件方法呢
    // $('#btn').button( options );实例化组件
    // $('#btn').button( 'select' ); 调用实例方法
    // $('#btn').button( 'this' ); 取组件实例
    // 此方法遵循get first set all原则
    function zeptolize( name ) {
        var key = name.substring( 0, 1 ).toLowerCase() + name.substring( 1 ),
            old = $.fn[ key ];

        $.fn[ key ] = function( opts ) {
            var args = slice.call( arguments, 1 ),
                method = typeof opts === 'string' && opts,
                ret,
                obj;

            $.each( this, function( i, el ) {

                // 从缓存中取，没有则创建一个
                obj = record( el, name ) || new gmu[ name ]( el,
                        isPlainObject( opts ) ? opts : undefined );

                // 取实例
                if ( method === 'this' ) {
                    ret = obj;
                    return false;    // 断开each循环
                } else if ( method ) {

                    // 当取的方法不存在时，抛出错误信息
                    if ( !$.isFunction( obj[ method ] ) ) {
                        throw new Error( '组件没有此方法：' + method );
                    }

                    ret = obj[ method ].apply( obj, args );

                    // 断定它是getter性质的方法，所以需要断开each循环，把结果返回
                    if ( ret !== undefined && ret !== obj ) {
                        return false;
                    }

                    // ret为obj时为无效值，为了不影响后面的返回
                    ret = undefined;
                }
            } );

            return ret !== undefined ? ret : this;
        };

        
        $.fn[ key ].noConflict = function() {
            $.fn[ key ] = old;
            return this;
        };
    }

    // 加载注册的option
    function loadOption( klass, opts ) {
        var me = this;

        // 先加载父级的
        if ( klass.superClass ) {
            loadOption.call( me, klass.superClass, opts );
        }

        eachObject( record( klass, 'options' ), function( key, option ) {
            option.forEach(function( item ) {
                var condition = item[ 0 ],
                    fn = item[ 1 ];

                if ( condition === '*' ||
                        ($.isFunction( condition ) &&
                        condition.call( me, opts[ key ] )) ||
                        condition === opts[ key ] ) {

                    fn.call( me );
                }
            });
        } );
    }

    // 加载注册的插件
    function loadPlugins( klass, opts ) {
        var me = this;

        // 先加载父级的
        if ( klass.superClass ) {
            loadPlugins.call( me, klass.superClass, opts );
        }

        eachObject( record( klass, 'plugins' ), function( opt, plugin ) {

            // 如果配置项关闭了，则不启用此插件
            if ( opts[ opt ] === false ) {
                return;
            }

            eachObject( plugin, function( key, val ) {
                var oringFn;

                if ( $.isFunction( val ) && (oringFn = me[ key ]) ) {
                    me[ key ] = function() {
                        var origin = me.origin,
                            ret;

                        me.origin = oringFn;
                        ret = val.apply( me, arguments );
                        origin === undefined ? delete me.origin :
                                (me.origin = origin);

                        return ret;
                    };
                } else {
                    me[ key ] = val;
                }
            } );

            plugin._init.call( me );
        } );
    }

    // 合并对象
    function mergeObj() {
        var args = slice.call( arguments ),
            i = args.length,
            last;

        while ( i-- ) {
            last = last || args[ i ];
            isPlainObject( args[ i ] ) || args.splice( i, 1 );
        }

        return args.length ?
                $.extend.apply( null, [ true, {} ].concat( args ) ) : last; // 深拷贝，options中某项为object时，用例中不能用==判断
    }

    // 初始化widget. 隐藏具体细节，因为如果放在构造器中的话，是可以看到方法体内容的
    // 同时此方法可以公用。
    function bootstrap( name, klass, uid, el, options ) {
        var me = this,
            opts;

        if ( isPlainObject( el ) ) {
            options = el;
            el = undefined;
        }

        // options中存在el时，覆盖el
        options && options.el && (el = $( options.el ));
        el && (me.$el = $( el ), el = me.$el[ 0 ]);

        opts = me._options = mergeObj( klass.options,
                getDomOptions( el ), options );

        me.template = mergeObj( klass.template, opts.template );

        me.tpl2html = mergeObj( klass.tpl2html, opts.tpl2html );

        // 生成eventNs widgetName
        me.widgetName = name.toLowerCase();
        me.eventNs = '.' + me.widgetName + uid;

        me._init( opts );

        // 设置setup参数，只有传入的$el在DOM中，才认为是setup模式
        me._options.setup = (me.$el && me.$el.parent()[ 0 ]) ? true: false;

        loadOption.call( me, klass, opts );
        loadPlugins.call( me, klass, opts );

        // 进行创建DOM等操作
        me._create();
        me.trigger( 'ready' );

        el && record( el, name, me ) && me.on( 'destroy', function() {
            record( el, name, null );
        } );

        return me;
    }

    
    function createClass( name, object, superClass ) {
        if ( typeof superClass !== 'function' ) {
            superClass = gmu.Base;
        }

        var uuid = 1,
            suid = 1;

        function klass( el, options ) {
            if ( name === 'Base' ) {
                throw new Error( 'Base类不能直接实例化' );
            }

            if ( !(this instanceof klass) ) {
                return new klass( el, options );
            }

            return bootstrap.call( this, name, klass, uuid++, el, options );
        }

        $.extend( klass, {

            
            register: function( name, obj ) {
                var plugins = record( klass, 'plugins' ) ||
                        record( klass, 'plugins', {} );

                obj._init = obj._init || blankFn;

                plugins[ name ] = obj;
                return klass;
            },

            
            option: function( option, value, method ) {
                var options = record( klass, 'options' ) ||
                        record( klass, 'options', {} );

                options[ option ] || (options[ option ] = []);
                options[ option ].push([ value, method ]);

                return klass;
            },

            
            inherits: function( obj ) {

                // 生成 Sub class
                return createClass( name + 'Sub' + suid++, obj, klass );
            },

            
            extend: function( obj ) {
                var proto = klass.prototype,
                    superProto = superClass.prototype;

                staticlist.forEach(function( item ) {
                    obj[ item ] = mergeObj( superClass[ item ], obj[ item ] );
                    obj[ item ] && (klass[ item ] = obj[ item ]);
                    delete obj[ item ];
                });

                // todo 跟plugin的origin逻辑，公用一下
                eachObject( obj, function( key, val ) {
                    if ( typeof val === 'function' && superProto[ key ] ) {
                        proto[ key ] = function() {
                            var $super = this.$super,
                                ret;

                            // todo 直接让this.$super = superProto[ key ];
                            this.$super = function() {
                                var args = slice.call( arguments, 1 );
                                return superProto[ key ].apply( this, args );
                            };

                            ret = val.apply( this, arguments );

                            $super === undefined ? (delete this.$super) :
                                    (this.$super = $super);
                            return ret;
                        };
                    } else {
                        proto[ key ] = val;
                    }
                } );
            }
        } );

        klass.superClass = superClass;
        klass.prototype = Object.create( superClass.prototype );


        

        klass.extend( object );

        return klass;
    }

    
    gmu.define = function( name, object, superClass ) {
        gmu[ name ] = createClass( name, object, superClass );
        zeptolize( name );
    };

    
    gmu.isWidget = function( obj, klass ) {

        // 处理字符串的case
        klass = typeof klass === 'string' ? gmu[ klass ] || blankFn : klass;
        klass = klass || gmu.Base;
        return obj instanceof klass;
    };

    
    gmu.Base = createClass( 'Base', {

        
        _init: blankFn,

        
        _create: blankFn,


        
        getEl: function() {
            return this.$el;
        },

        
        on: event.on,

        
        one: event.one,

        
        off: event.off,

        
        trigger: function( name ) {
            var evt = typeof name === 'string' ? new gmu.Event( name ) : name,
                args = [ evt ].concat( slice.call( arguments, 1 ) ),
                opEvent = this._options[ evt.type ],

                // 先存起来，否则在下面使用的时候，可能已经被destory给删除了。
                $el = this.getEl();

            if ( opEvent && $.isFunction( opEvent ) ) {

                // 如果返回值是false,相当于执行stopPropagation()和preventDefault();
                false === opEvent.apply( this, args ) &&
                        (evt.stopPropagation(), evt.preventDefault());
            }

            event.trigger.apply( this, args );

            // triggerHandler不冒泡
            $el && $el.triggerHandler( evt, (args.shift(), args) );

            return this;
        },

        
        tpl2html: function( subpart, data ) {
            var tpl = this.template;

            tpl =  typeof subpart === 'string' ? tpl[ subpart ] :
                    ((data = subpart), tpl);

            return data || ~tpl.indexOf( '<%' ) ? $.parseTpl( tpl, data ) : tpl;
        },

        
        destroy: function() {

            // 解绑element上的事件
            this.$el && this.$el.off( this.eventNs );

            this.trigger( 'destroy' );
            // 解绑所有自定义事件
            this.off();


            this.destroyed = true;
        }

    }, Object );

    // 向下兼容
    $.ui = gmu;
})( gmu, gmu.$ );
//__req('gmu/extend/touch.js');
/* === lib:gmu/extend/highlight.js === */
;(function( $ ) {
    var $doc = $( document ),
        $el,    // 当前按下的元素
        timer;    // 考虑到滚动操作时不能高亮，所以用到了100ms延时

    // 负责移除className.
    function dismiss() {
        var cls = $el.attr( 'hl-cls' );

        clearTimeout( timer );
        $el.removeClass( cls ).removeAttr( 'hl-cls' );
        $el = null;
        $doc.off( 'touchend touchmove touchcancel', dismiss );
    }

    
    $.fn.highlight = function( className, selector ) {
        return this.each(function() {
            var $this = $( this );

            $this.css( '-webkit-tap-highlight-color', 'rgba(255,255,255,0)' )
                    .off( 'touchstart.hl' );

            className && $this.on( 'touchstart.hl', function( e ) {
                var match;

                $el = selector ? (match = $( e.target ).closest( selector,
                        this )) && match.length && match : $this;

                // selctor可能找不到元素。
                if ( $el ) {
                    $el.attr( 'hl-cls', className );
                    timer = setTimeout( function() {
                        $el.addClass( className );
                    }, 100 );
                    $doc.on( 'touchend touchmove touchcancel', dismiss );
                }
            } );
        });
    };
})( Zepto );

/* === lib:gmu/widget/suggestion/suggestion.js === */
;(function( $, win ) {

     
    
    var guid = 0;

    gmu.define( 'Suggestion', {

        // 默认options
        options: {

            
            
            
            
            
            
            
            
            
            historyShare: true,

            
            confirmClearHistory: true,

            
            autoClose: false
        },

        template: {

            // ui-suggestion的class必须有
            // ontent, button, clear, close这几个div必须有，其他的可以更改
            wrapper: '<div class="ui-suggestion">' +
                '<div class="ui-suggestion-content"></div>' +
                '<div class="ui-suggestion-button">' +
                '<span class="ui-suggestion-clear">清除历史记录</span>' +
                '<span class="ui-suggestion-close">关闭</span>' +
                '</div></div>'
        },

        _initDom: function() {
			
			var me = this;
			me.$wrapper = $('#j-suggest-wrapper');
			me.$mask = me.$wrapper.parent();
			me.$content = me.$wrapper.find('.suggest_cnt');
			//me.$btn = ;
			//me.$clearBtn = ;
			//me.$closeBtn = ;
            return me.trigger('initdom');
        },

        _bindEvent: function() {
            var me = this,
                $el = me.getEl(),
				defaultVal = $el.val(),
                ns = me.eventNs;

         me._options.autoClose && $( document ).on( 'tap' + ns, function( e ) {

                // 若点击是的sug外边则关闭sug
              if( !$.contains( me.$mask.get( 0 ), e.target )){
					me.getEl().blur();
					me.hide().trigger( 'close' );	
				}
            } );

            $el.on( 'focus' + ns, function() {//alert('focus')
				if($el.val() == defaultVal) $el.val('');//获取焦点时，默认推荐关键字消失
                // @update 20140902 songshijie 判断是否和默认值相同，如相同才清除输入值
                // 当sug已经处于显示状态时，不需要次showlist
               // !me.isShow && me._showList().trigger( 'open' );
            } );
			//失去焦点时，如果未输入，则默认推荐关键字显示
			$el.on( 'blur' + ns, function() {
				if($el.val() == '') $el.val(defaultVal);
                me.hide().trigger( 'close' );
            } );

            $el.on( 'input' + ns, function() {

                // 考虑到在手机上输入比较慢，故未进行稀释处理
                me._showList();
            } );

            me.$clearBtn && me.$clearBtn.on( 'click' + ns, function() {

                //清除历史记录
                me.history( null );
            } ).highlight( 'ui-suggestion-highlight' );

            me.$closeBtn && me.$closeBtn.on( 'click' + ns, function() {

                // 隐藏sug
                me.getEl().blur();
                me.hide().trigger( 'close' );
            } ).highlight( 'ui-suggestion-highlight' );

            return me;
        },

        _create: function() {
            var me = this,
                opts = me._options,
                hs = opts.historyShare;

            opts.container && (me.$el = $(opts.container));

            // 若传默认传true，则使用默认key：'SUG-Sharing-History'
            // 若传false，即表示不共享history，以该sug的id作为key值
            // 若传string，则在此基础上加上'SUG-Sharing-History'
            me.key = hs ?
                    (($.type( hs ) === 'boolean' ? '' : hs + '-') +
                    'SUG-Sharing-History') :
                    me.getEl().attr( 'id' ) || ('ui-suggestion-' + (guid++));

            // localStorage中数据分隔符
            me.separator = encodeURIComponent( ',' );

            // 创建dom，绑定事件
            me._initDom()._bindEvent();

            return me;
        },

        
        _showList: function() {
            var me = this,
                query = me.value(),
                data;

            if ( query ) {

                // 当query不为空，即input或focus时,input有值
                // 用户自己发送请求或直接本地数据处理，可以在sendrequest中处理
                me.trigger( 'sendrequest', query, $.proxy( me._render, me ),
                        $.proxy( me._cacheData, me ));

            } else {

                // query为空，即刚开始focus时，读取localstorage中的数据渲染
                (data = me._localStorage()) ?
                        me._render( query, data.split( me.separator ) ) :
                        me.hide();
            }

            return me;
        },

        _render: function( query, data ) {

            this.trigger( 'renderlist', data, query, $.proxy( this._fillWrapper, this ) );
        },

        
        _fillWrapper: function( listHtml ) {

            // 数据不是来自历史记录时隐藏清除历史记录按钮
            this.$clearBtn && this.$clearBtn[ this.value() ? 'hide' : 'show' ]();
            listHtml ? (this.$content.html( listHtml ), this.show()) :
                    this.hide();

            return this;
        },

        _localStorage: function( value ) {
            var me = this,
                key = me.key,
                separator = me.separator,
                localStorage,
                data;

            try {

                localStorage = win.localStorage;

                if ( value === undefined ) {    // geter
                    return localStorage[ key ];

                } else if ( value === null ) {    // setter clear
                    localStorage[ key ] = '';

                } else if ( value ) {    // setter
                    data = localStorage[ key ] ?
                            localStorage[ key ].split( separator ) : [];

                    // 数据去重处理
                    // todo 对于兼容老格式的数据中有一项会带有\u001e，暂未做判断
                    if ( !~$.inArray( value, data ) ) {
                        data.unshift( value );
                        localStorage[ key ] = data.join( separator );
                    }
                }

            } catch ( ex ) {
                console.log( ex.message );
            }

            return me;
        },

        _cacheData: function( key, value ) {
            this.cacheData || (this.cacheData = {});

            return value !== undefined ?
                this.cacheData[ key ] = value : this.cacheData[ key ];
        },

        
        value: function() {
            return this.getEl().val();
        },

        
        history: function( value ) {
            var me = this,
                clearHistory = value !== null || function() {
                    return me._localStorage( null).hide();
                };

            return value === null ? (me._options.confirmClearHistory ?
                win.confirm( '清除全部查询历史记录？' ) && clearHistory() :
                clearHistory()) : me._localStorage( value )
        },

        
        show: function() {

            if ( !this.isShow ) {
                this.$wrapper.show();
                this.isShow = true;
                return this.trigger( 'show' );
            }else{
                return this;
            }

        },

        
        hide: function() {

            if ( this.isShow ) {
                this.$wrapper.hide();
                this.isShow = false;
                return this.trigger( 'hide' );
            }else{
                return this;
            }

        },

        
        destroy: function() {
            var me = this,
                $el = me.getEl(),
                ns = me.ns;

            // 先执行父级destroy，保证插件或option中的destroy先执行
            me.trigger( 'destroy' );

            $el.off( ns );
            me.$mask.replaceWith( $el );
            me.$clearBtn.off( ns );
            me.$closeBtn.off( ns );
            me.$wrapper.children().off().remove();
            me.$wrapper.remove();
            me._options.autoClose && $( document ).off( ns );

            this.destroyed = true;

            return me;
        }

        

        
        
        
        
        
        
        
        
        
        
        
    } );
})( gmu.$, window );

/* === lib:gmu/widget/suggestion/sendrequest.js === */
;(function( $, win ) {

    $.extend( gmu.Suggestion.options, {

        
        isCache: true,

        
        
        queryKey: 'wd',

        
        cbKey: 'callback',

        
        sendrequest: null
    } );

    
    gmu.Suggestion.option( 'sendrequest', function() {

        // 当sendRequest不是Function类型时，该option操作生效
        return $.type( this._options.sendrequest ) !== 'function';

    }, function() {
        var me = this,
            opts = me._options,
            queryKey = opts.queryKey,
            cbKey = opts.cbKey,
            param = opts.param,
            isCache = opts.isCache,
            cdata;

        this.on( 'sendrequest', function( e, query, callback, cacheData ) {

            var url = opts.source,

            // 以date作为后缀，应该不会重复，故不作origin
                cb = 'suggestion_' + (+new Date());

            // 若缓存中存数请求的query数据，则不发送请求
            if ( isCache && (cdata = cacheData( query )) ) {
                callback( query, cdata );
                return me;

            }

            // 替换url后第一个参数的连接符?&或&为?
            url = (url + '&' + queryKey + '=' + encodeURIComponent( query ))
                    .replace( /[&?]{1,2}/, '?' );

            !~url.indexOf( '&' + cbKey ) &&  (url += '&' + cbKey + '=' + cb);

            param && (url += '&' + param);

            win[ cb ] = function( data ) {

                
				
				//console.log([query,data]);
                callback( query, data );
				

                // 缓存请求的query
                isCache && cacheData( query, data );

                delete win[ cb ];
            };

            // 以jsonp形式发送请求
            $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function(data){
                    win[ cb ] (data);
                }
            });

            return me;
        } );

    } );
})( gmu.$, window );
/* === lib:gmu/widget/suggestion/renderlist.js === */
;(function( $ ) {

    $.extend( gmu.Suggestion.options, {

        
        isHistory: true,

        
        usePlus: false,

        
        listCount: 5,

        
        renderlist: null
    } );

    
    gmu.Suggestion.option( 'renderlist', function() {

        // 当renderList不是Function类型时，该option操作生效
        return $.type( this._options.renderlist ) !== 'function';

    }, function() {

        var me = this,
            $xssElem = $( '<div></div>'),
            _xssFilter = function( str ) {
                return $xssElem.text( str ).html();
            },

            // 渲染sug list列表，返回list array
            _createList = function( query, sugs ) {
                var opts = me._options,
                    html = [],
                    str = '',
                    item,
                    sug,
                    len,
                    category,
                    i;

                if ( !sugs || !sugs.length ) {
                    me.hide();
                    return html;
                }

                sugs = sugs.slice( 0, opts.listCount );

                // 防止xss注入，通过text()方法转换一下
                query = _xssFilter( query || '' );

                // sug列表渲染比较频繁，故不采用模板来解析
                for ( i = 0, len = sugs.length; i < len; i++ ) {
                    item = sugs[ i ];
                    //输入框清空时，会有默认的搜索词，但没有name属性，此时不渲染list
                    if(!item['name']) continue;
                    sug = _xssFilter( item['name'] );
                    
                    // 若是query为空则不需要进行替换
                    query && (str = $.trim( sug )
                        .replace( query, '<span>' + query + '</span>' ));

                    opts.usePlus &&
                            (str += '<div class="ui-suggestion-plus" ' +
                                'data-item="' + sug + '"></div>');

                    //0722 liubi1 取DOM value
                    //1009 selina 增加data-index 统计使用
                    category = item['category'];
                    str = '<li value=' + sug + ' data-index='+(i+1)+ (category ? ' data-category=' + category :'')+'>' + sug;
                    str += category ? '<span style="font-size:12px;">(' +
                        category + ')</span></li>' : '</li>';

                    html.push( str );
                }

                return html;
            };

        me.on( 'ready', function() {
            var me = this,
                ns = me.eventNs,
                $form = $( me._options.form || me.getEl().closest( 'form' ));

            // 绑定form的submit事件
            $form.size() && (me.$form = $form .on( 'submit' + ns,
                    function( e ) {
                        var submitEvent = gmu.Event('submit');

                        me._options.isHistory &&
                        me._localStorage( me.value() );

                        me.trigger( submitEvent );

                        // 阻止表单默认提交事件
                        submitEvent.isDefaultPrevented() && e.preventDefault();
                    }));

            // todo 待验证，新闻页面不会有该bug，待排查原因，中文输入不跳转的bug
            me.$content.on( 'touchstart' + ns, function(e) {
                e.preventDefault();
            });



            // 注册tap事件由于中文输入法时，touch事件不能submit
            me.$content.on( 'tap' + ns, function(e) {
                var $input = me.getEl(),
                    query = $input.val(),
                    target = e.target,
                    $elem = target.nodeName.toLowerCase()==='li' ? $(target) : $(target).parents('li'),
                    index = $elem.attr('data-index'),
                    category = $elem.attr('data-category'),
                    elemValue = $elem.attr('value');

                // 点击加号，input值上框
                if ( $elem.hasClass( 'ui-suggestion-plus' ) ) {
                    $input.val( $elem.attr( 'data-item' ) );
                } else if ( $.contains( me.$content.get( 0 ),
                    $elem.get( 0 ) ) ) {
					
                    //0507 selina 点选列表中后input中值不及时更新
                    //0722 liubin1 取dom value
					$input.val( elemValue );

                    //2014-10-08 selina 搜索增加query统计，需要区分suggest
                    $form.find('#j-query').val('suggest');
                    $form.find('#j-index').val( index || 0);

                    
                    //20150114 selina suggest增加点击上报
                    Stats.sendAction({ap:'el=01020200&fl=r2&wz=' + index +'&query=' + query + '&text=' + elemValue + (category ? '|'+category:'') +'&pageid=001'});

                    // 点击sug item, 防止使用tap造成穿透
                    setTimeout( function() {
					//$input.val( $elem.text() );
                       me.trigger( 'select', $elem )
                            .hide().$form.submit();
                    }, 400 );

                    e.preventDefault();
                    e.stopPropagation();
                }
            }).highlight( 'ui-suggestion-highlight' );

            me.on( 'destroy', function() {
                $form.size() && $form.off( ns );
                me.$content.off();
            } );
        } );

        me.on( 'renderlist', function( e, data, query, callback ) {
            var ret = _createList( query, data );

            // 回调渲染suglist
            return callback( ret.length ?
                        '<ul class="active">' + ret.join( ' ' ) + '</ul>' : '' );
        } );

        //20150227 selina suggest增加曝光上报
        me.on( 'show', function() {
            var $input = me.getEl(),
                query = $input.val();
            Stats.sendAction({
                ap:'el=01020200&fl=r2&query=' + query + '&pageid=001',
                acode:19
            });
        } );
    } );

})( gmu.$ );

/* === lem:projects/search/suggest.js === */
;(LTK["projects/search/suggest"] = function (require, exports, module) {
    'use strict';
    var Url = require('air/util/Url');
    var events = require('components/util/events');
    var lesoStat = require('components/search/leso_stat');
    var uniqueUnshift = require('air/array/uniqueUnshift');
    var Suggest = {
        init: function (config) {
            this.initDom();
            this.initEvent();
            this.initSuggest(config);
        },

        //记录需要一直跟随的查询参数
        _param: ['ref'],

        //获取location.href中需要带着的参数组成的对象
        _getParam: function () {
            var self = this,
                query = {};
            $.each(self._param, function (i, v) {
                query[v] = Url.getParam(self._param[i]);
            });
            return query;
        },

        _setParam: function () {
            var param = this._getParam();
            if (!Url.serializeParam(param)) {
                return;
            }
            for (var k in param) {
                if (param.hasOwnProperty(k)) {
                    var v = param.k;
                    if (v !== '') {
                        this._form.append('<input type="hidden" name = "' + k + '" value="' + param[k] + '"/>');
                    }
                }
            }
        },

        
        initDom: function () {
            this.listCount = 10;
            var suggestWraper = '<div id="j-suggest-wrapper">' +
                                    '<div class="suggest_cnt">' +
                                    '</div>' +
                                '</div>';
            this._form = $('#j-form');
            this._form.after(suggestWraper);
            this.$content = $('#j-suggest-wrapper').find('.suggest_cnt');
            this._input = this._form.find('.j-search');
            this._doc = $(document);
            this._setParam();
            this.suggestObj = {};
            this.$siblingDoms = $('.srh-serach').siblings().not('header');
            if ($('.column_search').length) {
                this.$siblingDoms = $('.column_search');
            }
            this.leSoParams = {};
            this.suggestText = '';
            this.clickArea = 'text';
        },

        
        initEvent: function () {
            this._input.on('input',$.proxy(this._pvSend, this));
            this._form.on('submit', $.proxy(this._onSubmit, this));
            this.$content.on('click', '.so_txt', $.proxy(this.onTextClicked, this));
            this.$content.on('click', '.icon_play', $.proxy(this.onPlayIconClicked, this));
            this._form.on('click', '.i-b', $.proxy(this.onSearchBtnClicked, this));
            $(document).on('touchmove', '.wrappers,.layout', $.proxy(this.onWrapperMove, this));
            events.on('changeSuggestText',$.proxy(this.changeSuggestText,this));
        },
        
        changeSuggestText:function () {
            this.suggestText = '';
        },
        
        onSearchBtnClicked: function (e) {
            e.preventDefault();
            this.clickArea = 'search_button';
            Stats.sendAction({ap: 'el=01020100&fl=r2&pageid=001'});
            var inputVal = this._input.val();
            var defaultVal = this._input.attr('value');

            var settings = {
                is_default_query:inputVal=defaultVal?'0':'1',
                is_trigger : $('#j-suggest-wrapper').attr('data-is_trigger'),
                experiment_id : $('#j-suggest-wrapper').attr('data-experiment_id'),
                eid : $('#j-suggest-wrapper').attr('data-eid'),
                action_code : 0,
                status:'success'
            }
            this.doSuggestReport(settings);
            this.doSubmit();
        },
        
        doSubmit: function () {
            this.suggest.hide();
            this._form.submit();
        },

        
        _onSubmit: function () {
            this.prepareForm();
            var url = '?' + this._form.serialize();
            setTimeout(function () {
                location.href = url;
            }, 300);
            return false;
        },

        
        prepareForm: function () {
            var leSoParams = this.leSoParams;
            var $searchInput = $('.j-search');
            if (this._form.find('input[name="query"]').length) {
                this._form.find('input[name="query"]').val($searchInput.val());
            } else {
                this._form.append('<input type="hidden" name="query" value="' + $searchInput.val() + '">');
            }

            if (this._form.find('input[name="parent_eid"]').length) {
                this._form.find('input[name="parent_eid"]').val((leSoParams.eid || ''));
            } else {
                this._form.append('<input type="hidden" name="parent_eid" value="' + (leSoParams.eid || '') + '">');
            }

            if (this._form.find('input[name="suggestText"]').length) {
                this._form.find('input[name="suggestText"]').val((this.suggestText || ''));
            } else {
                this._form.append('<input type="hidden" name="suggestText" value="' + (this.suggestText || '') + '">');
            }

            if (this._form.find('input[name="click_area"]').length) {
                this._form.find('input[name="click_area"]').val(this.clickArea);
            } else {
                this._form.append('<input type="hidden" name="click_area" value="' + this.clickArea + '">');
            }
            if (this.suggestText) {
                $searchInput.val(this.suggestText);
            }
        },

        
        onTextClicked: function (e) {
            var $target = $(e.currentTarget);
            var $li = $target.parent('li');
            var settings = {
                'suggest_text': $target.text(),
                'eid': $li.attr('data-eid'),
                'gid': $li.attr('data-gid'),
                'position': $li.attr('data-index'),
                'experiment_bucket_str': $li.attr('data-experiment_bucket_str'),
                'trigger_str': $li.attr('data-trigger_str'),
                'experiment_id': $li.attr('data-experiment_id'),
                'is_trigger': $li.attr('data-is_trigger')
            };

            this.suggestText = settings.suggest_text;
            this.clickArea = 'text';
            var text = $target.text();
            $('#j-suggest-wrapper').attr('data-value',text);
            this._input.val(text);
            this.doSuggestReport(settings);
            this._save(e);
            events.emit('createHistory');
            this.doSubmit();
        },
        
        _save:function (e) {
            var _search = '',
                _val = $.trim(this._input.val());
            if (!_val) {
                return;
            }
            if(Cookie.get('_search')){
                var dataList = uniqueUnshift(Cookie.get('_search').split(','), _val, 10);
                this._valStr = dataList.join(',');
            }else{
                this._valStr = _val;
            }
            Cookie.set('_search', this._valStr, {exp:'forever'});
        },
        
        onPlayIconClicked: function (e) {
            var $target = $(e.currentTarget),
                $em = $target.parents('li').find('p').text();
            this._input.val($em);
            this.suggest.hide()
            this._save(e);
            location.href = $target.attr('data-href');
        },

        
        doSuggestReport: function (settings) {
            var defaultSettings = {
                'module': 'suggest_list',
                'click_area': this.clickArea,
                'query': $('.j-search').val(),
            };
            if(settings.action_code === 4){
                delete defaultSettings.click_area
            }
            var sendSettings = $.extend(defaultSettings, settings);
            lesoStat.sendData(sendSettings);
        },

        
        initSuggest: function (config) {
            if (config && config.listCount) {
                this.listCount = config.listCount;
            }
            var dataParams = {
                    'ph':'420001',
                    'dt':'1,2,3,4,6',
                    'lang':info.lang || 'zh_cn',
                    'user_setting_country':info.region || 'CN',
                    'sales_area':'',
                    'client_ip':'',
                    'city_info':info.geo || 'CN_1_9'
                };
            var params = { 'from': 'mobile_msite0400', 'imei': '' };
                if ($.cookie('ssouid')) {
                    params.uid = $.cookie('ssouid');
                } else {
                    params.uid = '';
                }

                le.app.getDeviceInfo(function(dInfo) {
                    params.device_id = dInfo.deviceId || Stats.getLC();
                });

                le.app.getVersion(function(data) {
                    params.version = data.version || '';
                });
                params.time = new Date().getTime();
                dataParams = $.extend(dataParams,params);
            var url = 'http://search.lekan.letv.com/leso/suggest.so?callback=?&from='+dataParams.from+'&imei='+dataParams.imei+'&uid='+dataParams.uid+'&device_id='+dataParams.device_id+'&version='+dataParams.version+'&request_time='+dataParams.time+'&ph='+dataParams.ph+'&dt='+dataParams.dt+'&lang='+dataParams.lang+'&user_setting_country='+dataParams.user_setting_country+'&sales_area='+dataParams.sales_area+'&client_ip='+dataParams.client_ip+'&city_info='+dataParams.city_info+'&jf=1&t=all&p=mobile&displayAppId=&displayPlatformId=&m=name';
            this.suggest = new gmu.Suggestion(this._input, {
                source: url,
                autoClose: true,
                queryKey: 'q',
                renderlist: $.proxy(this.onRenderList, this)
            });
            // 去掉suggest 的 blur事件
            this.suggest.getEl().off('blur');

            this.suggest.on('show', _.bind(this._show, this));
            this.suggest.on('hide', _.bind(this._hide, this));
        },

        
        _show: function () {
            this._doc.on('touchmove', $.proxy(this._touchmove, this));
            this._doc.on('tap', $.proxy(this._touchmove, this));
            if ($('#j-suggest-wrapper').find('.active').attr('mark')=='0' || !this._input.val()) {
                this.suggest.hide();
                $('#j-smartnew').show();
                this.$siblingDoms.show();
                if(!Cookie.get('_search')){
                    $('#j-history').hide();
                }
            }else{
                $('#j-smartnew').hide();
                this.$siblingDoms.hide();
            }
            
        },
        
        _pvSend: function () {
            var $li = this._input.parents('.box-sh').find('#j-suggest-wrapper').find('li');
            var settings = {
                'eid': $li.attr('data-eid'),
                'experiment_bucket_str': $li.attr('data-experiment_bucket_str'),
                'trigger_str': $li.attr('data-trigger_str'),
                'experiment_id': $li.attr('data-experiment_id'),
                'is_trigger': $li.attr('data-is_trigger'),
                'action_code':4,
            };
            this.doSuggestReport(settings);
        },
        
        _hide: function () {
            this._doc.off('touchmove', $.proxy(this._touchmove, this));
            this._doc.off('tap', $.proxy(this._touchmove, this));
            $('#j-smartnew').show();
            this.$siblingDoms.show();
            if(!Cookie.get('_search')){
                $('#j-history').hide();
            }else{
                $('#j-history').show();
            }
        },

        
        _touchmove: function (e) {
            this.suggest.show();
        },

        
        onWrapperMove: function () {
            this._form.find('input.j-search').blur();
            this._form.removeClass('border-focus');
        },

        
        onRenderList: function (e, data, query, callback) {
            var renderData = data.data || {};  
            this.leSoParams.eid = renderData.event_id;
            this.leSoParams.experiment_bucket_str = renderData.experiment_id;
            this.leSoParams.experiment_id = renderData.experiment_id;
            this.leSoParams.is_trigger = renderData.is_trigger;
            this.leSoParams.trigger_str = renderData.trigger_str;
            $('#j-suggest-wrapper').attr({
                'data-eid':this.leSoParams.eid,
                'data-experiment_bucket_str':this.leSoParams.experiment_bucket_str,
                'data-experiment_id':this.leSoParams.experiment_id,
                'data-is_trigger':this.leSoParams.is_trigger,
                'data-trigger_str':this.leSoParams.trigger_str
            })
            var ret = this.createList(query, renderData);
            // 回调渲染suglist
            return callback(ret.length ? '<ul class="active" mark="1" style="z-index: 99;">' + ret.join('') + '</ul>' : '<ul class="active" mark="0" style="display:none;"></ul>');
        },
        
        createList: function (query, sugst) {
            var sugs = sugst;
            var suggestObj = this.suggestObj;
            if (sugst.data_list) {
                suggestObj.eid = sugst.eid;
                suggestObj.experiment_bucket_str = sugst.experiment_bucket_str;
                suggestObj.experiment_id = sugst.experiment_id;
                suggestObj.is_trigger = sugst.is_trigger;
                suggestObj.trigger_str = sugst.trigger_str;
                sugs = sugst.data_list;
            }
            var html = [], str = '', video_id;

            if (!sugs || !sugs.length) {
                this.suggest.hide();
                return html;
            }

            query = this._xssFilter(query || '');
            sugs = sugs.slice(0, this.listCount);

            // sug列表渲染比较频繁，故不采用模板来解析
            for (var i = 0, len = sugs.length; i < len; i++) {
                var item = sugs[i];
                //输入框清空时，会有默认的搜索词，但没有name属性，此时不渲染list
                if (!item.name) {
                    continue;
                }
                var sug = this._xssFilter(item.name);
                if (item.video_id) {
                    video_id = this._xssFilter(item.video_id);
                }
                var string = item['name'];
                var reg = /(.*)?[<](.*)[>](.*)?/g;
                var redWord = string.replace(reg,'<p class="j-sotxt so_txt">$1<em>$2</em>$3</p>')
                var category = item.category;
                var gid = item.global_id;
                if (item.video_id) {
                    str = '<li data-eid = ' + suggestObj.eid + ' data-experiment_id = ' + suggestObj.experiment_id + ' data-experiment_bucket_str = ' + suggestObj.experiment_bucket_str + ' data-is_trigger = ' + suggestObj.is_trigger + ' data-trigger_str = ' + suggestObj.trigger_str + ' data-gid = ' + gid + ' value=' + sug + ' data-title=' + sug + ' data-index=' + (i + 1) + (category ? ' data-category=' + category : '') + '>'+ redWord +'';
                    str += category ? '<i data-href="http://m.le.com/vplay_' + video_id + '.html"class="icon_font icon_play"></i></li>' : '';
                } else {
                    str = '<li data-eid = ' + suggestObj.eid + ' data-experiment_id = ' + suggestObj.experiment_id + ' data-experiment_bucket_str = ' + suggestObj.experiment_bucket_str + ' data-is_trigger = ' + suggestObj.is_trigger + ' data-trigger_str = ' + suggestObj.trigger_str + ' data-gid = ' + gid + ' value=' + sug + ' data-title=' + sug + ' data-index=' + (i + 1) + (category ? ' data-category=' + category : '') + '>'+ redWord +'</li>';
                }
                html.push(str);
            }
            return html;
        },
        
        _xssFilter: function (str) {
            return $('<div></div>').text(str).html();
        }
    };
    module.exports = Suggest;
});
/* === lem:projects/search/search_v2.js === */
;(LTK["projects/search/search_v2"] = function(require, exports, module) {
    'use strict';
    var uniqueUnshift = require('air/array/uniqueUnshift');
    var each = require('air/array/each');
    var events = require('components/util/events');
    var AnimateScroll = require('components/touchComp/animateScroll');
    var lesoStat = require('components/search/leso_stat'); //乐搜自己的数据上报
    var Suggest = require('projects/search/suggest');
    var newSearch = {
        
        init: function() {
            this.initDom();
            this.initEvent();
            this.initPage();
        },

        
        initDom: function() {
            this._form = $('#j-form');
            this._boxSearch = $('.box-search');
            this._input = $('.j-search');
            this._hotSearch = $('.hot_search');
            this._iconClose = $('.icon-show');
            this._boxQx = $('.box-qx');
            this._hotRec = $('#j-hotRec');
            // this._nav = $('#j-nav1');
            this._nav = $('#j-tab');
            // this._column = $('section.column');
            this._column = this._hotRec.find('.tab_cnt');
            this._columnBox = $('.wrappers');
            this._columnSearch = $('.column_search');
            this._moreHistory = $('.more_history');
            this._valStr = '';
            this._flag = false;
            this.$siblingDoms = $('.srh-serach').siblings().not('header');
            if ($('.column_search').length) {
                this.$siblingDoms = $('.column_search');
            }
        },
        
        
        initEvent: function() {
            if (this._boxQx.length) {
                lesoStat.sendData({ 'module': 'home_page', 'action_code': 4 });
            }
            this._initNav();
            this._showHis();
            events.on('goHref', $.proxy(this._href, this));
            this._form.on('submit', $.proxy(this._formSave, this));
            this._input.on('keypress', $.proxy(this._placeholder, this));
            this._input.on('focus', $.proxy(this._dataInput, this));
            this._input.on('input', $.proxy(this._showIcon, this));
            this._iconClose.on('click', $.proxy(this._delTxt, this));
            // this._hotRec.on('click', '.j_changeBox a', $.proxy(this._dataHotRec, this));
            this._hotRec.on('click', '.cnt_box a', $.proxy(this._dataHotRec, this));
            // this._hotRec.on('click', '.column_search_ul1 a', $.proxy(this._dataHotRec, this));
            this._hotRec.on('click', '.box_search_ul1 a', $.proxy(this._dataHotRec, this));
            this._hotSearch.on('click', 'a', $.proxy(this._dataHotSea, this));
            this._columnBox.on('click', '.column_search_ul a', $.proxy(this._setCookieMark, this));
            this._columnBox.on('click', '.span_close', $.proxy(this._delOne, this));
            this._columnBox.on('click', '.box-history-cl', $.proxy(this._clear, this));
            this._columnBox.on('click', '.box-history-com', $.proxy(this._complete, this));
            this._columnBox.on('click', '.more_history', $.proxy(this._toggle, this));
            this._columnBox.on('click', '.icon_delete', $.proxy(this._showBtn, this));
            this._nav.on('click', 'li', $.proxy(this._changeTab, this));
            this._boxQx.on('click', $.proxy(this._lesoQx, this));
            events.on('createHistory',$.proxy(this.createHistory, this));
        },

        initPage: function () {
            Suggest.init({'listCount': 10});
            this.$content = $('#j-suggest-wrapper').find('.suggest_cnt');
            events.emit('createHistory');
        },
       
        
        _limit: 3,

        
        _data: {
            'list': []
        },
        
        createHistory:function () {
            this.$content.on('click', '.so_txt', $.proxy(this._showHis, this));
        },
        
        _placeholder: function(event) {
            if (event.keyCode == '13' && $.trim(this._input.val()) == '') {
                this._input.val(this._input.attr('placeholder'));
            }
            if (event.keyCode == '13'){
                Suggest.suggest.hide();                
                var inputVal = this._input.val();
                var settings = {
                    is_trigger : $('#j-suggest-wrapper').attr('data-is_trigger'),
                    experiment_id : $('#j-suggest-wrapper').attr('data-experiment_id'),
                    eid : $('#j-suggest-wrapper').attr('data-eid'),
                    experiment_bucket_str :  $('#j-suggest-wrapper').attr('data-experiment_bucket_str'),
                    trigger_str : $('#j-suggest-wrapper').attr('data-trigger_str'),
                    click_area : 'search_button',
                    module:'suggest_list',
                    query:inputVal
                }
                // 监听changeSuggestText事件,设置suggestText的值为空。
                events.emit('changeSuggestText');
                lesoStat.sendData(settings);

            }
        },
        
        
        _dataInput: function() {
            this._form.addClass('border-focus');
            lesoStat.sendData({ 'module': 'home_page', 'click_area': 'search_box' });
        },

        
        _setCookieMark: function(e) {
            var $target = $(e.target),
                $li = $target.closest('ul').attr('class'),
                $href = $target.closest('a').attr('data-href');
            if ($li) {
                this._input.val($href.split('=')[1]);
                this._save(e);
                Cookie.set('_mark_module', $li, { exp: 'forever' });
                this._showHis();
                events.emit("goHref",$href);
            }
        },

        
        _dataHotSea: function(e) {
            var $target = $(e.target),
                $href = $target.closest('a').attr('data-href'),
                $position = $target.closest('a').find('i').html();
	        var $leso_data = {},
                $leso_data1 = { 'click_area': 'text', 'position': $position, 'module': 'hot_search', 'query': $href.split('=')[1] };
            if($('#j-hotWordList').attr('data-leso')){
                $leso_data = JSON.parse($('#j-hotWordList').attr('data-leso'));
            }
            $leso_data = $.extend($leso_data, $leso_data1);
            lesoStat.sendData($leso_data);
            this._setCookieMark(e);
        },
        
        
        _dataHotRec: function(e) {
            var $target = $(e.target),
                $href = $target.closest('a').attr('data-href');
            // var data_leso = JSON.parse($('.leso-active').attr('data-leso')),
            var data_leso = JSON.parse($('.leso_active').attr('data-leso')),
                data_leso1 = JSON.parse($(e.target).closest('a').attr('data-leso')),
                $leso_data = $.extend(data_leso, data_leso1),
                position = $(e.target).closest('a').find('.a_img_rank span').html();
            if(position){
                $leso_data.position = position;
            }else{
                $leso_data.position = parseInt($(e.target).closest('a').find('em').html());
            }
            lesoStat.sendData($leso_data, $href);
        },

        
        _href: function(conf) {
            setTimeout(function(){ window.location.href = conf },100);
        },

        
        _initNav: function() {
            var navScroll = new AnimateScroll();
            navScroll.init({
                container: '#j-nav1',
                wrapper: 'ul'
            });
            navScroll.scrollTo($('#j-nav1').find('li.active').index());
        },
        
        
        _changeTab: function(e) {
            var $target = $(e.target),
                $li = $target.closest('li');
            this._nav.find('li').removeClass('active');
            $li.addClass('active');
            var _index = this._nav.find('li.active').index();
            // this._column.hide().removeClass('leso-active');
            this._column.hide().removeClass('leso_active');
            // this._column.eq(_index).show().addClass('leso-active');
            this._column.eq(_index).show().addClass('leso_active');
        },

        
         _showHis: function() {
            var _search = Cookie.get('_search');
            if (_search) {
                this._data.list = _search.split(',');
            }
            if (this._data.list.length) {
                this._show();
            }
        },

        
        _delOne: function(e) {
            var $target = $(e.target),
                $li = $target.closest('li'), 
                $ul = $target.closest('ul'),
                $val = $li.find('a').text(),
                // 替换掉第一条（中间）、最后一条或只有一条的情况
                value = Cookie.get('_search').replace($val + ',', '').replace(',' + $val, '').replace($val, '');
            if (value == '') {
                this._clear(e);
            } else {
                Cookie.set('_search', value, {exp:'forever'});
                this._data.list = value.split(',');
                $ul.find('li').show();
                $li.remove();
                if (!this._flag) { $ul.find('li').slice(this._limit).hide(); }
                if ($ul.find('li').length <= this._limit) {
                    this._moreHistory.hide();
                }
            }
        },

        
        _save:function (e) {
            var _search = '',
                _val = $.trim(this._input.val());
            if (!_val) {
                return;
            }
            this._data.list = uniqueUnshift(this._data.list, _val, 10);
            this._valStr = this._data.list.join(',');
            Cookie.set('_search', this._valStr, {exp:'forever'});
        },
        
        
        _formSave: function(e) {
            this._save(e);
            this._input.blur();
        },

        
        _show: function() {
            var html = [''];
            if (!$('#j-history').length) {
                var _flag = false;
                var def = ['<div class="column_search" id="j-history"><div class="box-history-tit"><h2><a href="javascript:;">搜索历史</a></h2><a href="javascript:;" class="box-history"><span class="icon_font icon_delete"></span><span class="icon-show1"></span></div>'];
                this._boxSearch.after(def.join(''));
                html = ['<ul class="column_search_ul">'];
            } else {
                var _flag = true;
            }

            this._afterAddDom();

            each(this._data.list, function(i, v) {
                html.push('<li><a data-href="/search?wd=' + v + '"><em class="icon_font icon_clock"></em>' + v + '</a><span class="span_close"><i class="icon_font icon_close" style="display:none"></i></span></li>');
            });

            if (!_flag) {
                html.push('</ul>');
                html.push('<div class="more_history">更多搜索历史<i class="icon_font icon_go_up"></i></div>');
                this._jHistory.show().append(html.join(''));
            } else {
                this._jHistory.show();
                this._columnSearchUl.html(html.join(''));
            }

            this._afterAddDom();

            this._hidedel();
            this._iconDelete.show();
            var len = this._data.list.length;
            if (len <= this._limit) {
                this._moreHistory.hide();
            } else {
                this._moreHistory.show().html('更多搜索历史<i class="icon_font icon_go_up"></i>');
                this._columnSearchUl.find('li').slice(this._limit).hide();
            }
        },

        
        _afterAddDom:function () {
            this._moreHistory = $('.more_history');
            this._jHistory = $('#j-history');
            this._columnSearchUl = $('.column_search_ul');
            this._iconDelete = $('.icon_delete');
            this._iconShow1 = $('.icon-show1');
            this._columnSearch = $('.column_search');
        },
        
        
        _hidedel:function () {
            this._iconShow1.hide();
        },

        
        _showIcon: function(e) {
            var $target = $(e.target),
                $span = $target.closest('.so-info').find('.icon-show'); //搜索框删除按钮
            
            if($.trim($target.val())){
                $span.show();
            } else {
                $span.hide();
                if(Cookie.get('_search')){
                    $('#j-history').show();
                }else{
                    $('#j-history').hide();
                }
            }   
        },
        
        
        _delTxt: function (e) {
            var $target = $(e.target),
                $input = $target.closest('.so-info').find('.j-search');
            $input.val('');
            $target.hide();
            $input.focus();
            this.closeSuggest();
            this._columnSearch.show();
            if(!Cookie.get('_search')){
                $('#j-history').hide();
            }
        },

        
        closeSuggest: function(){
            if (Suggest && Suggest.suggest && Suggest.suggest.hide) {
                Suggest.suggest.hide();
            }
        },

        
        _clear: function(e) {
            e.stopPropagation();
            e.preventDefault();
            Cookie.set('_search',"");
            this._data = {
                'list': []
            };
            this._jHistory.hide();
        },

        
        _showBtn: function(e) {
            var $target = $(e.target),
                $delBtn = $target.closest('.column_search').find('.icon_close');
            var str = [];
            str.push('<span class="box-history-cl">清空</span><span class="box-history-com">完成</span>');

            this._iconShow1.show().html(str.join(''));
            $delBtn.show();
            this._iconDelete.hide();
            lesoStat.sendData({ 'module': 'search_history', 'click_area': 'clear_button' });
        },

        
        _complete: function(e) {
            var $target = $(e.target),
                $delBtn = $target.closest('.column_search').find('.icon_close'); 
                //删除每条记录的按钮
            this._hidedel();
            this._iconDelete.show();
            $delBtn.hide();
        },
    
        
        _toggle: function() {
            var arr = [''];
            arr.push('<i class="icon_font"></i>');
            this._moreHistory.append(arr.join(''));
            if (!this._flag) {
                lesoStat.sendData({ 'module': 'search_history', 'click_area': 'more_button' });
                this._columnSearchUl.find('li').slice(this._limit).show();
                this._moreHistory.html('收起搜索历史<i class="icon_font icon_go_down"></i>');
                this._flag = true;

            } else {
                this._columnSearchUl.find('li').slice(this._limit).hide();
                this._moreHistory.html('更多搜索历史<i class="icon_font icon_go_up"></i>');
                this._flag = false;
            }
        },

        _lesoQx: function() {
            lesoStat.sendData({ 'module': 'home_page', 'action_code': 2, 'click_area': 'cancel_button' });
            var _href = '/';
            if (document.referrer && document.referrer!==location.href) { 
                _href = document.referrer;
            }
            events.emit("goHref",_href);
        }
    };

    module.exports = newSearch;
});


/* === lib:iscroll.js === */
;window.IScroll = (function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration,
			deceleration = 0.0006;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: navigator.msPointerEnabled,
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	me.isAndroidBrowser = /Android/.test(window.navigator.appVersion) && /Version\/\d/.test(window.navigator.appVersion);

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, '');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();

function IScroll(el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance
	this.items = this.scroller.children;
	this.itemsLen = this.items.length;
	this.options = {

		resizeIndicator: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS 

		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,

		HWCompositing: true,
		useTransition: true,
		useTransform: true
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 200 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults	
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.0.4',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);

		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller ) {
			return;
		}

		this._transitionTime(0);
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
			if ( e.button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isAndroidBrowser ) {
			e.preventDefault();		// This seems to break default Android browser
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this._transitionTime();

		this.isAnimating = false;
		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('scrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= this.hasHorizontalScroll ? point.pageX - this.pointX : 0,
			deltaY		= this.hasVerticalScroll   ? point.pageY - this.pointY : 0,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		this.moved = true;

		this._translate(newX, newY);



		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}



	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {
			e.preventDefault();		// TODO: check if needed
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}

		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			newX = snap.x;
			newY = snap.y;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(distanceX, 1000),
						Math.min(distanceX, 1000)
					), 300);

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;


		if(!this.scroller.offsetWidth) return;
		this.scrollerWidth	= this.scroller.offsetWidth;
		if(this.options.snap){
			this.options.offsetW = this.options.offsetW || 0;
			this.scrollerWidth= (this.wrapperWidth-this.options.offsetW) * this.itemsLen;
		}		
		this.scrollerHeight	= this.scroller.offsetHeight;



		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

		if ( this.options.snap ) {
			var snap = this._nearestSnap(this.x, this.y);
			if ( this.x == snap.x && this.y == snap.y ) {
				return;
			}

			this.currentPage = snap;
			this.scrollTo(snap.x, snap.y);
		}
	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].call(this);
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		if ( !time || (this.options.useTransition && easing.style) ) {
			this._transitionTimingFunction(easing.style);
			this._transitionTime(time);
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
		this._execEvent('scrolling');
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(pos.left)*2, Math.abs(pos.top)*2) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;
		this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';


		if ( this.indicator1 ) {
			this.indicator1.transitionTime(time);
		}

		if ( this.indicator2 ) {
			this.indicator2.transitionTime(time);
		}

// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicator1 ) {
			this.indicator1.transitionTimingFunction(easing);
		}

		if ( this.indicator2 ) {
			this.indicator2.transitionTimingFunction(easing);
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {



			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;



		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicator1 ) {	// usually the vertical
		this.indicator1.updatePosition();
	}

	if ( this.indicator2 ) {
		this.indicator2.updatePosition();
	}

// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		eventType(this.wrapper, 'mousedown', this);
		eventType(target, 'mousemove', this);
		eventType(target, 'mousecancel', this);
		eventType(target, 'mouseup', this);

		if ( utils.hasPointer ) {
			eventType(this.wrapper, 'MSPointerDown', this);
			eventType(target, 'MSPointerMove', this);
			eventType(target, 'MSPointerCancel', this);
			eventType(target, 'MSPointerUp', this);
		}

		if ( utils.hasTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d]/g, '');
			y = +matrix.top.replace(/[^-\d]/g, '');
		}

		return { x: x, y: y };
	},

	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			defaultScrollbars = typeof this.options.scrollbars != 'object',
			customStyle = typeof this.options.scrollbars != 'string',
			indicator1,
			indicator2;

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator1 = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeIndicator,
					listenX: false
				};

				this.wrapper.appendChild(indicator1.el);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator2 = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeIndicator,
					listenY: false
				};

				this.wrapper.appendChild(indicator2.el);
			}
		} else {
			indicator1 = this.options.indicators.length ? this.options.indicators[0] : this.options.indicators;
			indicator2 = this.options.indicators[1] && this.options.indicators[1];
		}

		if ( indicator1 ) {
			this.indicator1 = new Indicator(this, indicator1);
		}

		if ( indicator2 ) {
			this.indicator2 = new Indicator(this, indicator2);
		}

		this.on('refresh', function () {
			if ( this.indicator1 ) {
				this.indicator1.refresh();
			}

			if ( this.indicator2 ) {
				this.indicator2.refresh();
			}
		});

		this.on('destroy', function () {
			if ( this.indicator1 ) {
				this.indicator1.destroy();
				this.indicator1 = null;
			}

			if ( this.indicator2 ) {
				this.indicator2.destroy();
				this.indicator2 = null;
			}
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			that._execEvent('scrollEnd');
		}, 400);

		e.preventDefault();

		if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120;
			wheelDeltaY = e.wheelDeltaY / 120;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3;
		} else {
			return;
		}

		wheelDeltaX *= this.options.mouseWheelSpeed;
		wheelDeltaY *= this.options.mouseWheelSpeed;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
		}

		newX = this.x + (this.hasHorizontalScroll ? wheelDeltaX * this.options.invertWheelDirection : 0);
		newY = this.y + (this.hasVerticalScroll ? wheelDeltaY * this.options.invertWheelDirection : 0);

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[0].length ) {
			y = this.pages[0].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		utils.addEvent(this.indicator, 'touchstart', this);
		utils.addEvent(this.indicator, 'MSPointerDown', this);
		utils.addEvent(this.indicator, 'mousedown', this);

		utils.addEvent(window, 'touchend', this);
		utils.addEvent(window, 'MSPointerUp', this);
		utils.addEvent(window, 'mouseup', this);
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, 'MSPointerDown', this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, 'MSPointerMove', this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, 'MSPointerUp', this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime(0);

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		utils.addEvent(window, 'touchmove', this);
		utils.addEvent(window, 'MSPointerMove', this);
		utils.addEvent(window, 'mousemove', this);

		this.scroller._execEvent('scrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, 'MSPointerMove', this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime(0);

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / this.scroller.scrollerWidth), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}
			this.maxPosX = this.wrapperWidth - this.indicatorWidth;
			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));	
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / this.scroller.scrollerHeight), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < 0 ) {
				x = 0;
			} else if ( x > this.maxPosX ) {
				x = this.maxPosX;
			}

			if ( y < 0 ) {
				y = 0;
			} else if ( y > this.maxPosY ) {
				y = this.maxPosY;
			}		
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	}
};

IScroll.ease = utils.ease;

return IScroll;

})(window, document, Math);
//M站内部通过图片上报或预加载某张图片
/* === lem:components/util/img_load.js === */
;(LTK["components/util/img_load"] = function(require, exports, module){
	module.exports = function(src,callback,iscatch){
		var rnd = +new Date().getTime(),
			img = window['_IMG='+rnd] = new Image();

		img.onload = img.onerror = function(){
			img = null;
			window[ '_IMG='+rnd ] = null;
			typeof callback == 'function' && callback();
		}
		src = iscatch ? src : src+'&_r_='+rnd;
		img.src = src;
	}
});

/* === lem:components/com_banner/common_focus.js === */
;(LTK["components/com_banner/common_focus"] = function(require, exports, module){
	var Img = require('components/util/img_load');
    var events = require('components/util/events');
	var FocusScroll = function($slider,opt){
		this._sliderWrapper = typeof $slider ==='string' ? $($slider) : $slider;
		var child = this._sliderWrapper.children(),
			defaultOpt = {
				autoScroll:true
			};
		this._scroller = child.eq(0);
		this._pointer = child.eq(1);
		if(opt.pointerIndex){this._pointer = child.eq(opt.pointerIndex);}
		this._pointers = _.toArray(this._pointer.children());
		this._lis = this._scroller.children();
		this._last = this._pointer.find('.active').index();
		this._index = this._last;
		this._timer = null;
		this._slider = null;
		this.options =$.extend(defaultOpt, opt);
		this.init();
	}

	FocusScroll.prototype = {
		init: function(){
			if(this._sliderWrapper.length == 0) return;
			this._lisSize = this._lis.size();
			this._size();
			this._initScroll();
			this._initEvent();
		},
		_initEvent: function(){
			$(window).on('ortchange', _.bind(this._size,this));
			this._slider.on('scrollEnd',_.bind(this._scrollEnd,this));
			this._slider.on('scrolling',_.bind(this._scrolling,this));
			this._slider.on('scrollStart',_.bind(this._scrollStart,this));		
			this._slider.goToPage(this._sliderWrapper.children().eq(0).find('.a_living').parent().index(),0);
		},	
		_size: function(){
			var winWidth = this._sliderWrapper.width();
			this._lis.width( winWidth + 'px');
			this._scroller.width(winWidth * this._lisSize + 'px');
		},
		_scrollStart: function(){
			this._isEnd = false;
			clearInterval(this._timer);
			this._timer = null;
			//滚动开始时，设置延迟，如果5s后没有执行scrollEnd,则强制结束
			clearTimeout(this._forceEndTimer);
			this._forceEndTimer = null;
			this._forceEnd();
		},
		_scrolling: function(){		
			var index = this._slider.currentPage.pageX;
			//预先加载即将展示图片的下一张
			this._loadImg(index + 1);
			$(this._pointers[this._last]).removeClass('active');
			$(this._pointers[index]).addClass('active');
			this._last = index;		
		},
		_scrollEnd: function(){		
			var index = this._slider.currentPage.pageX;			
			if(this._index < index){//向右滑数据上报
				events.emit('slidingAround','right');
			}else if(this._index > index){//向左滑数据上报
				events.emit('slidingAround','left');
			}
			if(!this._timer) {
				this._index = index;
				if(this.options.autoScroll){
					this._autoScroll();
				}
			}
			this._isEnd = true;
		},
		_forceEnd:function(){
			var self = this;
			self._forceEndTimer = setTimeout(function(){
				if(!self._isEnd){
					self._scrollEnd();
				}
			},5000);
		},
		_initScroll:function(){	
			var startPos = -(this._last * this._lis.width());
			this._slider = new IScroll(this._sliderWrapper[0], { 
				momentum: false, //一次仅移动一张
				//preventDefault: true,
				eventPassthrough: true,
				snapThreshold:0,//滑动超过10px即滚动
				//click: true,
				//useTransition: false, 
				scrollX: true, 
				scrollY: false, 
				mouseWheel: true,
				snap: true,
				snapSpeed: 400,
				startX: startPos
			});
			if(this._lisSize>0){
				this._slider.goToPage(this._last,0);
			};
			//预先加载当前图片的下一张
			this._loadImg(this._last + 1);
			if(this.options.autoScroll){
				this._autoScroll();
			}
		},
		_autoScroll: function(){
			if(this._index > this._lisSize - 1) this._index = 0;
			if(this._sliderWrapper.css('display') != 'none'){
				if(this._index>-1){
				this._slider.goToPage(this._index++,0);
				}
			}
			if(!this._timer) this._timer = setInterval(_.bind(arguments.callee,this),4000);
		},
		_loading:false,
		_loadImg: function(index){
			if(this._loading) return;
			var self = this,
				cur = this._lis.eq(index),
				img = cur.children().eq(0).attr('data-img');
			if(!img) return;
			self._loading = true;
			Img(img,function(){
				cur.css('background-image','url('+img+')');
				cur.attr('data-img','');
				self._loading = false;
			},true)
		}
	};
	module.exports = FocusScroll;
});


/* === lem:projects/search/lesoList/leso_list_focus_v2.js === */
;(LTK["projects/search/lesoList/leso_list_focus_v2"] = function (require, exports, module) {
    'use strict';
    var FocusScroll = require('components/com_banner/common_focus');
    var lesoFocus = {
        init: function (setting) {
            this.slider = $(setting.slider);
            this.pointerIndex = setting.pointerIndex;
            this.initDom();
            this.initEvent();
            this.initPage();
        },
        initDom: function () {
            if (this.slider.length == 0) {
                return;
            }
        },
        initEvent: function () {
            this.initSlider();
            this.initScreen();
        },
        initPage: function () {
        },
        initSlider: function () {
            var self = this;
            this.slider.each(function () {
                new FocusScroll($(this), {
                    autoScroll: false,
                    pointerIndex: self.pointerIndex
                });
            });
        },
        initScreen: function () {
            //赛事直播专题搜索结果页类似焦点图区域，如果在app内，点击直播调起客户端app半屏直播播放页
            le.app.isApp(function (res) {
                if (res) {
                    //在app环境,
                    var liveBtns = this.slider.find('a[data-liveid]');
                    if (liveBtns.length == 0) return;
                    liveBtns.on('click', function (e) {
                        e.preventDefault();
                        var id = $(this).attr('data-liveid');
                        if (!id) {
                            return;
                        }
                        LetvJSBridge.fun.playVideo({
                            'type': 2,//2直播 {int}
                            'screen': 1,   //1|2 半屏播放 全屏播放 {int}
                            'liveid': id,
                            'channel': ''
                        });
                    });
                }
            });
        }
    };
    module.exports = lesoFocus;
});

/* === lem:projects/search/lesoList/leso_list_live_v2.js === */
;(LTK["projects/search/lesoList/leso_list_live_v2"] = function (require, exports, module) {
    'use strict';
    var lesoFocus = require('projects/search/lesoList/leso_list_focus_v2');
    var lesoLive = {
        init: function () {
            this.initDom();
            this.initEvent();
            this.initPage();
        },
        initDom: function () {
            this._doc = $(document);
            this._body = $(document.body);
            this.pointer = $('.j-lunboweishi .fs_doc');
            this.flag = false;
        },
        initEvent: function () {
            lesoFocus.init({'slider': '.j-slide-wrapper', 'pointerIndex': 1}); //直播焦点图
            this._doc.on('click', '.j-loadBoxMore', $.proxy(this.showBoxMore, this));
            this._doc.on('click', '.j-loadBoxBack', $.proxy(this.hideBoxMore, this));
        },
        initPage: function () {
            this.initPointer();
        },
        initPointer: function () {
            this.pointer.hide();
        },
        showBoxMore: function (e) {
            var $target = $(e.target),
                slider = $target.closest('.j-lunboweishi');
            slider.prev().hide();
            slider.find('ul').show();
            slider.find('.fs_doc').show();
            slider.find('.j-loadBoxMore').hide();
            slider.find('.j-loadBoxBack').show();
            lesoFocus.init({'slider': slider, 'pointerIndex': 3}); //轮播卫视台焦点图
        },
        hideBoxMore: function (e) {
            var $target = $(e.target),
                slider = $target.closest('.j-lunboweishi');
            slider.find('ul').hide();
            slider.prev().show();
            slider.find('.fs_doc').hide();
            slider.find('.j-loadBoxBack').hide();
            slider.find('.j-loadBoxMore').show();
        }
    };
    module.exports = lesoLive;
});

/* === lem:components/app/open_app_schema.js === */
;(LTK["components/app/open_app_schema"] = function(require, exports, module) {
    'use strict';

    var ua = require('air/env/ua'); 

    var _trim = function(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    var getHomeUri = function(options){
        return 'letvclient://msiteAction?' + (ua.android ? 'actionType=12&' : '') +
                'from=' + encodeURIComponent(options.from);
    }
    var getPlayUri = function(options) {
        return 'letvclient://msiteAction?actionType=' + (ua.android ? '9' : '0') +
                '&pid=' + options.pid +
                '&vid=' + options.vid +
                '&cid=' + options.cid +
                '&isfullscene=' + encodeURIComponent(options.isfullscene) +
                '&from=' + encodeURIComponent(options.from);
    }
    var getWebviewUri = function(options) {
        return 'letvclient://msiteAction?actionType=4' +
                '&weburl=' + encodeURIComponent(options.weburl)+
                '&from=' + encodeURIComponent(options.from);
    }
    var getLiveUri = function(options) {
        var strArdLive =
                ua.android ? ('&liveid=' + options.streamid +
                              '&livetype=' + encodeURIComponent(options.livetype) +
                              '&ispay=' + encodeURIComponent(options.ispay) +
                              '&ishalf=' + options.ishalf) : '';
        return 'letvclient://msiteAction?actionType=3' +
                '&streamid='+ encodeURIComponent(options.streamid) +
                '&from=' + encodeURIComponent(options.from) +
                strArdLive;
    }
    var getLiveBookUri = function(options) {
        return 'letvclient://msiteAction?actionType=17&version=2.0&back=1' +
                '&streamid=' + encodeURIComponent(options.streamid) +
                '&from=' + encodeURIComponent(options.from);
    }

    var getSchemaUri = function(options) {
        var openUri;
        switch(_trim(options.app.toLowerCase())) {
            case 'letv': {
                switch(_trim(options.type)) {
                    case 'home':
                        return getHomeUri(options);
                    case 'play':
                        return getPlayUri(options);
                    case 'webview':
                        return getWebviewUri(options);
                    case 'live':
                        return getLiveUri(options);
                    case 'book':
                        return getLiveBookUri(options);
                    default:
                        return getHomeUri(options);
                }
                break;
            }
            case 'lesport':
                return 'letvsportslaunch://com.lesports.glivesports/main';
            default:
                return getHomeUri(options);
        }
    };

    module.exports = getSchemaUri;
});
/* === lem:components/tips/msTip.js === */
;(LTK["components/tips/msTip"] = function(require, exports, module) {
    var player = require('components/player/mPlayer');
    require('components/langPack/pub'); //多语言设置
    var MsTip = function(options) {
        this.options = $.extend(MsTip.DEFAULT, options)
    };
    MsTip.DEFAULT = {
        bgImg:info.langPack.browser,
        width: 1243,
        height: 1129,
        showBtn: false,
        showClose: false
    };

    MsTip.prototype.showTip = function() {
        var
            me = this,
            bgImg = me.options.bgImg,
            wWidth = me.options.width,
            wHeight = me.options.height,
            $cacheLayer = me.options.$cacheLayer;

        if(!$cacheLayer || $cacheLayer.length === 0) {
            var tipHTML = '<div class="j-ms-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div>'
                        +'<div id="j-ms-openTip-bg" class="j-ms-openTip" style="position:fixed;top:0;background:url(' +  bgImg + ') no-repeat center center;width:auto;height:320px;background-size:100% auto;z-index:20001;margin:0 auto;left:0;right:0;min-width:320px;max-width:414px;"></div>';
            if (me.options.showBtn && me.options.showClose) {
                tipHTML = '<div class="j-ms-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div>'+
                '<div id="j-ms-openTip-bg" class="j-ms-openTip" style="position:fixed;top:50%;background:url(' + bgImg + ') no-repeat center center;width:300px;height:300px;background-size:100% auto;z-index:20001;margin:-200px 0 0 -150px;left:50%;border-radius:5px;">' +
                '<a href="javascript:;" id="btnContinueAction" style="position: absolute;display:block; width:100%;height:50px;background:#ff4b4b;bottom:-48px;left:0; border-radius: 0px 0px 5px 5px;text-align:center;color:#fff; font-size:14px;line-height:50px;">'+info.langPack.watch_now+'</a>' +
                '<a href="javascript:;" id="btnMsTipClose" style="display:block;width:25px;height:25px;border-radius:50%;position:absolute;right:10px;top:126px;background: rgba(0,0,0,.7) url(http://i3.letvimg.com/lc03_img/201512/10/21/59/close.png) no-repeat;background-size:100%;"></a>' +
                '</div>';
            }
            $('body').append(tipHTML);
            var ratio = wWidth / ($('#j-ms-openTip-bg')[0].offsetWidth || 320);
            !me.options.showClose&&!me.options.showBtn&&$('#j-ms-openTip-bg').css('height', (wHeight / ratio));
            me.options.$cacheLayer = $cacheLayer = $('.j-ms-openTip');
            $cacheLayer.on('click', function(e) {
                e.stopPropagation();
                $cacheLayer.hide();
                player.show();
            });
        }
        player.hide();
        $cacheLayer.show();
        $('#j-ms-openTip-bg').css('background-image', 'url(' + me.options.bgImg + ')');
        me.options.showBtn && $('#btnContinueAction').show();
        me.options.showClose && $('#btnMsTipClose').show();
    }

    module.exports = MsTip;
});
require('components/langPack/pub'); //多语言设置
/* === lem:components/tips/msTip_v2.js === */
;(LTK["components/tips/msTip_v2"] = function(require, exports, module) {
    var player = require('components/player/mPlayer');

    var MsTip = function(options) {
        this.options = $.extend(MsTip.DEFAULT, options)
    };

    MsTip.DEFAULT = {
        bgImg:info.langPack.browser,
        width: 1243,
        height: 1129,
    };

    MsTip.prototype.showTip = function() {
        var
            me = this,
            bgImg = me.options.bgImg,
            wWidth = me.options.width,
            wHeight = me.options.height,
            $cacheLayer = me.options.$cacheLayer;

        if(!$cacheLayer || $cacheLayer.length === 0) {
            var tipHTML = '<div class="j-ms-openTip-v2" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div>'
                        +'<div id="j-ms-openTip-bg-v2" class="j-ms-openTip-v2" style="position:fixed;top:0;background:url(' +  bgImg + ') no-repeat center center;width:auto;height:320px;background-size:100% auto;z-index:20001;margin:0 auto;left:0;right:0;min-width:320px;max-width:414px;"></div>';
            $('body').append(tipHTML);
            var ratio = wWidth / ($('#j-ms-openTip-bg-v2')[0].offsetWidth || 320);
            $('#j-ms-openTip-bg-v2').css('height', (wHeight / ratio));
            me.options.$cacheLayer = $cacheLayer = $('.j-ms-openTip-v2');
            $cacheLayer.on('click', function(e) {
                e.stopPropagation();
                $cacheLayer.hide();
                player.show();
            });
        }
        player.hide();
        $cacheLayer.show();
    }

    module.exports = MsTip;
});
/* === lem:components/tips/msTip_v3.js === */
;(LTK["components/tips/msTip_v3"] = function(require, exports, module) {
    var player = require('components/player/mPlayer');
     require('components/langPack/pub'); //多语言设置
    var MsTip = function(options) {
        this.options = $.extend(MsTip.DEFAULT, options)
    };

    MsTip.DEFAULT = {
        bgImg:info.langPack.browser,
        width: 1243,
        height: 1129,
    };

    MsTip.prototype.showTip = function() {
        var
            me = this,
            bgImg = me.options.bgImg,
            wWidth = me.options.width,
            wHeight = me.options.height,
            $cacheLayer = me.options.$cacheLayer;

        if(!$cacheLayer || $cacheLayer.length === 0) {
            var tipHTML = '<div class="j-ms-openTip-v3" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div>'
                        +'<div id="j-ms-openTip-bg-v3" class="j-ms-openTip-v3" style="position:fixed;top:0;background:url(' +  bgImg + ') no-repeat center center;width:auto;height:320px;background-size:100% auto;z-index:20001;margin:0 auto;left:0;right:0;min-width:320px;max-width:414px;"></div>';
            $('body').append(tipHTML);
            var ratio = wWidth / ($('#j-ms-openTip-bg-v3')[0].offsetWidth || 320);
            $('#j-ms-openTip-bg-v3').css('height', (wHeight / ratio));
            me.options.$cacheLayer = $cacheLayer = $('.j-ms-openTip-v3');
            $cacheLayer.on('click', function(e) {
                e.stopPropagation();
                $cacheLayer.hide();
                player.show();
            });
        }
        player.hide();
        $cacheLayer.show();
    }

    module.exports = MsTip;
});
/* === lem:components/app/open_app.js === */
;var getSchemaUri = require('components/app/open_app_schema');
require('components/langPack/pub'); //多语言设置
var Url = require('air/util/Url');
if(!window.__openApp){
	window.__openApp = {
		defaultWxUrl: {
			lesport: 'http://h5api.mobile.lesports.com/download?from=141',
			letv: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632'
		},
		defultDownloadUrl: {
			lesport: 'http://h5api.mobile.lesports.com/download?from=141',
			letv: le.api_host.app_m + '/download.php'
		},
		MsTip: require('components/tips/msTip'),
		MsTip_v2: require('components/tips/msTip_v2'),
		MsTip_v3: require('components/tips/msTip_v3'),
		param: {},
		thirdApp: '',
		notCN: 'https://play.google.com/store/apps/details?id=com.letv.android.client&hl=',
		checkUA: function() {
			var
				me = this,
				ua = navigator.userAgent.toLowerCase();

			me.isandroid = /android/.test(ua);
			me.isiPhone = /iphone/.test(ua);
			me.isLePhone = /\bx\d\d\d\b/.test(ua);
			me.isWeiXin = /micromessenger/.test(ua);
			me.isWeibo = /weibo/.test(ua);
			me.isbaidubox = /baiduboxapp/.test(ua);
			me.isIOS10 = /iphone\s+os\s+10_\d_\d\s+like mac os/.test(ua);
			me.isLowerIOS = /iphone\s+os\s+[4-8]_\d_\d\s+like mac os/.test(ua);
			me.isSogouSearch = Url.getParam('fromvsogou') == 1;
			if (/360video/.test(ua)) {
				me.thirdApp  = '360video';
			} else if(/newsarticle/.test(ua)) {
				me.thirdApp = 'toutiao';
			}
		},
		initParam: function(options) {
			var self = this;
			if( options.app && options.app.toLowerCase() === 'letv' ){
				var info = window.info || {};
				self.param.vid = options.vid || info.vid || '';
				self.param.pid = options.pid || info.pid || '';
				self.param.cid = options.cid || info.ptvcid || '';
				self.param.weburl = options.weburl || info.weburl || '';
				self.param.streamid = options.streamid || info.id || '';
				self.param.type = options.type || (self.param.pid || self.param.vid ? 'play' : '');
				self.param.livetype = options.livetype || '';
				self.param.ispay = options.ispay || 0;
				self.param.ishalf = options.ishalf || 0;
				self.param.from = options.from || 'm_letv';
				self.param.isfullscene = options.isfullscene || false;
				self.param.app = self._trim(options.app || 'letv');
			} else {
				self.param.app = self._trim(options.app || 'lesport');
			}
			//IOS9+ universal links
			if (!self.isLowerIOS && self.isiPhone && !self.options.isOnlyOpen && self.isWeiXin) {
				self.param.from = self.param.from + '_ulinks';
			}else if(self.isSogouSearch){
				//SogouSearch
				self.param.from = self.param.from + '_sogousearch';
			}		
			window.__APPGUIDE = window.__APPGUIDE || {};
			window.__APPGUIDE.common = window.__APPGUIDE.common || {};
		},
		callUniversalLinks: function() {
			var self = this;
			var targetOpenUrl = getSchemaUri(self.param);
			var targetDownloadUrl = self._getDownloadAppUrl();
			var host = location.host;
			if (host === 'm.le.com') {
				host = host.replace('m.le.com', 'm.letv.com');
			} else {
				host = host.replace('m.letv.com', 'm.le.com');
			}
			var a = document.createElement('a');
			a.href = location.protocol + '//' + host + '/u_links/?' + targetOpenUrl.replace('letvclient://msiteAction?', '') + '&redirect_url=1';
			a.click();
		},
		_bindDefaultAppEvent:function(options) {
			var self = this;

			//如果是在 行车记录仪里则不调起
			//临时处理方案
			var userAgent = navigator.userAgent.toLowerCase();
			if(userAgent.indexOf('leautocamera')>-1){
				return;
			}

            self.options = options || {};
			self.checkUA();
			self.initParam(options);
			//如果参数里配置isOnlyOpen为true,则不执行下载操作
			self.isDownload = self.options.isOnlyOpen ? false : true;
			if (self.isWeiXin) {
				if (options.isTryLook && window.info && info.appGuideImage) {
					(new self.MsTip({
						bgImg: info.appGuideImage,
						width: 1243,
						height: 1506
					})).showTip();
				} else {
					//IOS9+ universal links
					if (!self.isLowerIOS && self.isiPhone && !self.options.isOnlyOpen) {
						self.callUniversalLinks();
					} else {
						self._gotoDownloadUrl();
					}
				}
			} else if (self.isWeibo) {//微博环境导流浮层提示文案
				if (options.isTryLook) {
					if (info.appGuideImage) {
						(new self.MsTip_v2({
							bgImg: info.appGuideImage,
							width: 1243,
							height: 1506
						})).showTip();
					} else {
						(new self.MsTip_v3({
							bgImg: info.langPack.layerImg,//__APPGUIDE.common.url || info.langPack.layerImg
							width: 1243,
							height: 1506
						})).showTip();
					}
				} else {
					(new self.MsTip()).showTip();
				}
			} else if (self.options.app) {
				var targetOpenUrl = getSchemaUri(self.param);
				self._lanuchApp(targetOpenUrl);
			} else {
				self._gotoDownloadUrl();
			}
		},
		_gotoDownloadUrl: function(){
			var targetDownloadUrl = this._getDownloadAppUrl();
			targetDownloadUrl && (location.href = targetDownloadUrl);
			// 点播播放页增加导流位统计点击上报
			if (window.info && window.info.pageid === 'play' && window.info.videoBelowDaoliu) {
				Stats.feStat({code: 'down_app'});
			}
		},

		_getDownloadAppUrl: function() {
			var
				self = this,
				targetDownloadUrl = '',
				options = self.options,
				defaultWxUrl = self.defaultWxUrl,
				defultDownloadUrl = self.defultDownloadUrl,
				app = self._trim(options.app ? options.app.toLowerCase() : 'letv');

			if(self.isWeiXin){//如果未设置微信下的合法下载地址，走默认的应用宝链接地址
				targetDownloadUrl = (options.wxUrl ? options.wxUrl : defaultWxUrl[app]) + '&android_schema=' + encodeURIComponent(getSchemaUri(self.param));
				if (!self.isLowerIOS && self.isiPhone) {
					targetDownloadUrl = (options.wxUrl ? options.wxUrl : defaultWxUrl[app]);
				}
			} else {//非微信下
				targetDownloadUrl =
					self.thirdApp && options.thirdApp && options.thirdApp[self.thirdApp] ?
					encodeURI(self._trim(options.thirdApp[self.thirdApp])):
					options.url ? encodeURI(self._trim(options.url)) :
					self.isandroid ? encodeURI(options.androidUrl ?
						self._trim(options.androidUrl) : defultDownloadUrl[app]) :
					encodeURI(options.iosUrl ? self._trim(options.iosUrl) : defultDownloadUrl[app]);
				if (window.info) {
					if (self.isandroid) {
						if (window.info.region === 'HK') {
							targetDownloadUrl = self.notCN + 'zh_hk';
						} else if (window.info.region !=='' && window.info.region !== 'CN') {
							targetDownloadUrl = self.notCN + 'en_us';
						}
					} else if (self.isiPhone && window.info.region !== '' && window.info.region !== 'CN') {
						targetDownloadUrl = 'http://app.m.letv.com/download_general.php';
					}
				}
			}
			return targetDownloadUrl;
		},
		_lanuchApp: function(targetOpenUrl) {
			var self = this;
			if (self.isandroid) {
				setTimeout(function () {
					var startTime = (new Date).valueOf();
					var e = document.createElement("iframe");
					e.style.cssText = "width:0px;height:0px;position:fixed;top:0;left:0;border:0;";
					e.src = targetOpenUrl;
					document.body.appendChild(e);
					startTime = (new Date).valueOf();
					if(self.isDownload){
						if(self.thirdApp === 'toutiao') {
							var _count = 0, intHandle;
						    var _clickTime = +(new Date());
						    intHandle = setInterval(function(){
						        _count++;
						        var elsTime = +(new Date()) - _clickTime;
						        if (_count >=50 ) {
						            clearInterval(intHandle);
						            if (elsTime < 1080 && !self.isLePhone) {
						            	self._gotoDownloadUrl();
						            }
						        }
						    }, 20);
						} else {
							setTimeout(function () {
								var endTime = (new Date).valueOf();
								if (1550 > endTime - startTime) {
									self._gotoDownloadUrl();
								}
							}, 1500);
						}
					}
				}, 100);
			} else {
				var d, f, g, i, b;
				var t = self.isbaidubox&&self.isIOS10 ? 1500 : 1300;
				f = function (a, d) {
					if(self.isDownload && d){
						self._gotoDownloadUrl();
					}
					window.removeEventListener("pagehide", g, !0);
					window.removeEventListener("pageshow", g, !0);
					i && b && (i.onload = null, b.removeChild(i), i = null);
				},
				g = function (a) {
					clearTimeout(d);
					f(a, !1);
				};
				window.addEventListener("pagehide", g, !0);
				window.addEventListener("pageshow", g, !0);

				if (self.isLowerIOS) {
					b = document.body,
					i = document.createElement("iframe");
					i.style.display = "none";
					i.onload = f;
					i.src = targetOpenUrl;
					b.appendChild(i);
				} else {
					location.href = targetOpenUrl;
				}
				var h = +new Date;
				d = setTimeout(function () {
						d = setTimeout(function () {
							var a = +new Date;
							a - h > t ? f(null, !1) : f(null, !0);
						}, 1200);
					}, 60);
			}
		},
		_trim:function(str) {
			return str.replace(/^\s+|\s+$/g, '');
		}
	}
}
/* === lem:projects/search/lesoList/leso_list_app_v2.js === */
;(LTK["projects/search/lesoList/leso_list_app_v2"] = function (require, exports, module) {
    'use strict';
    var ua = require('air/env/ua');
    var lesoStat = require('components/search/leso_stat'); //乐搜自己的数据上报
    var openApp = {
        init: function () {
            //如果是内嵌入APP的搜索结果页，不展示APP极速播放按钮。
            if (typeof info != 'undefined' && typeof info.openby != 'undefined' && info.openby == 'letvapp') return;
            this.initDom();
            this.initEvent();
            this.initPage();
        },
        initDom: function () {
            var self = this;
            this._albumArea = $('.column_body .j-list dl');
            this._albumArea.each(function (i, v) {
                if ($(this).prev().attr('data-default') == 'letv') {//视频来源是乐视网的才添加
                    $(this).append('<dd class="a_infoItem" style="z-index:10;"><a class="btn_play j-app" href="javascript:;" title="APP极速播放" style="z-index:10;">APP极速播放</a></dd>');
                    self.appExp = true;
                } else if ($(this).parent().attr('data-show_btn') == 0) {
                    //
                } else {
                    // 临时调整位置,方便自己电脑上手机模拟测试点击,正式使用没有bottom:-1rem;的行
                    $(this).append('<dd class="a_infoItem" style="z-index:10;"><a class="btn_play j-play" data-href="' + $(this).prev().attr('data-href') + '" title="播放" style="z-index:10;bottom:-1rem">播放</a></dd>');
                    // $(this).append('<dd class="a_infoItem" style="z-index:10;"><a class="btn_play j-play" data-href="' + $(this).prev().attr('data-href') + '" title="播放" style="z-index:10;">播放</a></dd>');
                }

            });
            this._appBtns = $('.j-app');
        },
        initEvent: function () {
            this._appBtns.on('click', $.proxy(this.open, this));
        },
        initPage: function () {
        },
        _toJSON: function (str) {
            try {
                return (new Function('return ' + str))();
            } catch (e) {
                return ''
            }
        },
        open: function (e) {
            var self = this;
            //from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=app_play_button&query=xx&action_code=1&gid=xx&position=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx&category=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'app_play_button',
                gid: a.parents('.j-list').attr('data-global_id'),
                category: '',
                position: a.parents('.j-list').attr('data-position')
            }
            if (window.info && window.info.leso) {
                this.lesoInfo = window.info.leso;
            } else {
                this.lesoInfo = {'eid': '', 'experiment_id': '', 'is_trigger': ''};
            }
            lesoStat.sendData($.extend(settings, this.lesoInfo), function () {
                self._open(e);
            });
        },
        _open: function (e) {
            var pinfo = $(e.target).parents('.j-list').find('.a_img');
            var pid = pinfo.attr('data-pid');
            var vid = pinfo.attr('data-vid');
            // var ap = $(e.target).attr('stat-ap');
            var mplat = ua.letvMobile ? 'lingxian' : (ua.android ? 'android' : 'ios');
            // var browser = (Stats && Stats.BR) ? Stats.BR : 'letv';
            var position = 'sextreme';
            __openApp._bindDefaultAppEvent({
                'app': 'letv',
                'url': le.api_host.app_m + '/download_general.php?ref=010110560',
                'wxShortUrl': 'XDBi5H',
                // 'from': 'm_' + mplat + '_' + browser + '_' + position,
                'pid': pid,
                'vid': vid,
                'type': 'play'
            });
        }
    };
    module.exports = openApp;
});

/* === lem:projects/search/lesoList/leso_list_showmore_v2.js === */
;(LTK["projects/search/lesoList/leso_list_showmore_v2"] = function (require, exports, module) {
    'use strict';
    var lesoStat = require('components/search/leso_stat'); //乐搜自己的数据上报
    var lesoListShowMore = {
        init: function () {
            this._initDom();
            this._initEvent();
        },
        _initDom: function () {
            this.doc = $(document);
            this.flag = true;
            this.hideDom = $('.j-f-hide');
            this.openBtn = $('.j-more-down .openBtn');
            this.closeBtn = $('.closeBtn');
        },
        _initEvent: function () {
            this.doc.on('click', '.j-more-down', $.proxy(this._toggle, this));
        },
        _toggle: function (e) {
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href'), settings;
            if (this.flag) {
                settings = {
                    module: 'search_rst_page',
                    action_code: 1,
                    click_area: 'more_button',
                    gid: '',
                    position: ''
                };
                this.hideDom.show();
                this.openBtn.hide();
                this.closeBtn.show();
                this.flag = false;
            } else {
                settings = {
                    module: 'search_rst_page',
                    click_area: 'back_button'
                };
                this.hideDom.hide();
                this.closeBtn.hide();
                this.openBtn.show();
                this.flag = true;
            }
            lesoStat.sendData($.extend(settings, this.lesoInfo));
        }
    };
    module.exports = lesoListShowMore;
});
/* === lem:projects/search/leso_list_sitelist.js === */
;le.m.SITE_LIST = {
    'letv' : '乐视',
    'sohu' : '搜狐',
    'youku' : '优酷',
    'xunlei' : '迅雷',
    'funshion' : '风行',
    'qq' : '腾讯',
    'm1905' : 'm1905',
    '56' : '我乐',
    '61':'淘米',
    'kumi' : '酷米',
    'cntv' : 'CNTV',
    'ifeng' : '凤凰网',
    'iqiyi' : '爱奇艺',
    'pps' : 'PPS',
    'pptv' : 'PPTV',
    'tudou' : '土豆',
    'sina' : '新浪',
    'beva' : '贝瓦网',
    'yinyuetai' : '音悦台',
    'ku6' : '酷6',
    'imgo':'芒果TV',
    'people':'人民网',
    'aipai':'爱拍原创',
    '100pd':'100频道',
    '370kan':'370看看',
    'joy':'激动网',
    'tangdou':'糖豆',
    'ktxp':'极影动漫',
    'baofeng':'暴风影音',
    'kankan':'迅雷看看',
    '163':'网易视频',
    'baomihua':'爆米花网',
    'nets':'网络',
    'zjstv':'蓝天下',
    'wasu':'华数'
};

/* === lem:projects/search/lesoList/leso_list_album_v2.js === */
;(LTK["projects/search/lesoList/leso_list_album_v2"] = function (require, exports, module) {
    'use strict';
    var events = require('components/util/events');
    var lesoListAlbum = {
        init: function () {
            this._initEvent();
            this._initDom();
        },
        _initDom: function () {
            this._tabs = $($('.num-tab')[0]);
            this._tabs.on('click', $.proxy(this._showSite, this));
        },
        __initDom: function () {
            //this._target = $('a[data-pid="' + this._data.pid + '"]');
            this._target = $('a[data-pid="' + this._data.pid + '"][data-action="sel_site"]');
            this._wrapper = this._target[0];
            while (this._wrapper.nodeName !== 'DL') {
                this._wrapper = this._wrapper.parentNode;
            }
            this._wrapper = $(this._wrapper);
            this._links = this._wrapper.find('.j-play');
            this._doc = $(document);
        },
        _initEvent: function () {
            var _this = this;
            events.on('change_site_ok', $.proxy(_this._updateMsg, this));
        },

        _showSite: function (e) {
            
            var item = $(e.target);
            Stats.sendAction({ap: 'el=01030100&fl=r3&wz=' + item.attr('data-index') + '&text=' + item.text() + '&pageid=001'});

            var transform = this._tabs.find('ul').css(PrefixStyle.transform);
            if (transform) {
                var pos = transform.match(/(-?\d+)px/g);
                var s = '&sx=' + parseInt(pos[0]);
                var url = item.attr('href');

                if (/&sx=/.test(url)) {
                    url = url.replace(/&sx=\d+/, s);
                } else {
                    url += s;
                }
                item.attr('href', url);
            }
        },
        _updateMsg: function (json) {
            this._data = json;
            var pid = this._data.pid,
                site = this._data.site,
                data = this._data.data.list[0];

            this.__initDom();

            //更新数据
            this._target.attr('data-site', site);

            //图标、站点
            this._target.find('b').html(le.m.SITE_LIST[site]);
            this._target.find('em')[0].className = 's-' + site;

            //跳转链接
            this._links.attr('data-href',data.url);
            this._links.attr('href', data.url);
            this._target.parents('.j-list').find('.a_img').attr('data-href', data.url);
            this._target.parents('.j-list').find('.a_img').attr('data-site', site);
        }
    };
    module.exports = lesoListAlbum;
});

/* === lem:air/util/tpl.js === */
;(LTK["air/util/tpl"] = function (require, exports, module) {
	
	var Tpl = function (template, mix) {
		this.tpl = template;
		this.mix = mix;
	};
	Tpl.prototype = {
		
		render: function (data, mix) {
			if (!data || !this.tpl) {
				//this.tpl || trace.err('tpl render err.');
				return '';
			}
			mix = mix || this.mix;
			var hasMix = typeof mix==='function',
				tpl = this.tpl,
				ret = '',
				i, len,
				datai;

			if (typeof tpl==='string') {
				var tpls = tpl.replace(/[\r\n\t]/g, '').replace(/\'/g, "\\\'")
					.replace(/\\{/g, '\\u001').replace(/\\}/g, '\\u002').split('{'),
					sous,
					source = "return '"+tpls[0]+"'";
				for (i = 1, len = tpls.length; i < len; i++) {
					sous = tpls[i].split('}');
					if (sous[0].indexOf('$item.')<0) {
						source += "+($item."+sous[0]+"==null ? '' : $item."+
							sous[0]+")+'"+sous[1]+"'";
					} else {
						source += "+("+
							(sous[0].indexOf('[[')<0 ? sous[0] :
								sous[0].replace(/\[\[/g, "'").replace(/\]\]/g, "'"))+
						")+'"+sous[1]+"'";
					}
				}
				// console.log(source); //只会输出一次
				tpl = this.tpl = new Function('$item',
					source.replace(/\\u001/g, '{').replace(/\\u002/g, '}'));
			}

			// if (data instanceof Array) { // 通过iframe的方式请求的数据判断不准确
			if (data.sort && data.join) {
				for (i = 0, len = data.length; i<len; i++) {
					datai = data[i];
					hasMix && mix(datai, i);
					ret += tpl(datai);
				}
			} else {
				hasMix && mix(data, 0);
				ret = tpl(data);
			}
			//trace('tpl rendered!'); //每次都会输出
			return ret;
		}
	};
	
	
	Tpl.render = function (tpl, data, mix) {
		if (!data) {
			return '';
		}
		var hasMix = typeof mix==='function',
			ret = '',
			i, len,
			datai;
		
		var tpls = tpl.replace(/[\r\n\t]/g, '').replace(/\'/g, "\\\'")
			.replace(/\\{/g, '\\u001').replace(/\\}/g, '\\u002').split('{'),
			sous,
			source = "return '"+tpls[0]+"'";
		for (i = 1, len = tpls.length; i<len; i++) {
			sous = tpls[i].split('}');
			if (sous[0].indexOf('$item.')<0) {
				source += "+($item."+sous[0]+"==null ? '' : $item."+
					sous[0]+")+'"+sous[1]+"'";
			} else {
				source += "+("+
					(sous[0].indexOf('[[')<0 ? sous[0] :
						sous[0].replace(/\[\[/g, "'").replace(/\]\]/g, "'"))+
				")+'"+sous[1]+"'";
			}
		}
		//trace(source); //只会输出一次
		tpl = new Function('$item',
			source.replace(/\\u001/g, '{').replace(/\\u002/g, '}'));

		if (data.sort && data.join) {
			for (i = 0, len = data.length; i<len; i++) {
				datai = data[i];
				hasMix && mix(datai, i);
				ret += tpl(datai);
			}
		} else {
			hasMix && mix(data, 0);
			ret = tpl(data);
		}
		//trace('tpl rendered!'); //每次都会输出
		return ret;
	};
	
	Tpl.simple = function (template, data) {
		data || (data = {});
		return template.replace(/{(\w+)}/g, function ($0, $1) {
			return data[$1] || (data[$1]===0 ? '0' : '');
		});
	};

	module.exports = Tpl;

});

//底部浮层组件 wangxiang
/* === lem:components/com_banner/prefixstyle.js === */
;;(function(){
	this.PrefixStyle = this.PrefixStyle || {};
	 
	var _elementStyle = document.createElement('div').style,
	_list = ['transform'],
	_vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}
	
	for(var i = 0,len = _list.length;i<len;i++){
		this.PrefixStyle[_list[i]] = _prefixStyle(_list[i]);
	}	
})();
/* === lem:components/com_banner/bottom_popup_v2.js === */
;(LTK["components/com_banner/bottom_popup_v2"] = function(require,exports,module){
    'use strict';
    var events = require('components/util/events');
    var bottomPopup = {
        init: function(opt){
            this._option = _.defaults(opt || {}, {tpl: "请传入模版碎片"});
            this._initDom();
            this._initEvent();
        },
        _initDom: function() {
            this._win = $(window);
            this._doc = $(document);
            this._body = $(document.body);
            this._box = null;
        },
        _initEvent: function(){
            this.__noScroll = function(e){
                e.preventDefault();
            };
            this.__hide = $.proxy(this.hide,this);
            this._doc.on('click',this.__hide);
        },
        
        //更改为样式写在css文件中，通过animation实现动画效果
        show: function(tpl) {
            // tpl = '<div class="share-play"><ul><li><a href="javascript:;" data-action="pop_sel" data-site="letv" data-pid="92245"><em class="s-letv"></em><b>乐视</b></a></li><li><a href="javascript:;" data-action="pop_sel" data-site="qq" data-pid="92245"><em class="s-qq"></em><b>腾讯</b></a></li><li><a href="javascript:;" data-action="pop_sel" data-site="tudou" data-pid="92245"><em class="s-tudou"></em><b>土豆</b></a></li><li><a href="javascript:;" data-action="pop_sel" data-site="xunlei" data-pid="92245"><em class="s-xunlei"></em><b>迅雷</b></a></li><li><a href="javascript:;" data-action="pop_sel" data-site="imgo" data-pid="92245"><em class="s-imgo"></em><b>芒果TV</b></a></li><li><a href="javascript:;" data-action="pop_sel" data-site="sohu" data-pid="92245"><em class="s-sohu"></em><b>搜狐</b></a></li><li><a href="javascript:;" data-action="pop_sel" data-site="youku" data-pid="92245"><em class="s-youku"></em><b>优酷</b></a></li></ul></div>';
            //阻止页面滚动,这里不能用touchstart，否则会阻止相同节点的其它事件，比如click
            this._doc.on('touchmove',this.__noScroll);
            var _cover = '',_boxtpl = '',_box=null;
            if(!document.getElementById('j-ui-popup')){
                _cover = '<div id="j-ui-popup" class="black-bg f-hide"></div>';
                _boxtpl = '<div id="j-ui-box" class="post-fixed f-hide moveFromY">'
                + '</div>';
                this._body.append(_cover).append(_boxtpl);
                this._box = $('#j-ui-box');
                this._box.on('animationend',$.proxy(this._transitionEnd,this));
                this._box.on('webkitAnimationEnd',$.proxy(this._transitionEnd,this));
                this._box.on('click','a[data-action="pop_sel"]',$.proxy(this._popSel,this));
            }
            this._box.addClass('moveFromY');
            // this._box[0].style.cssText = "transform: translate(0, -300px);transition-duration:1000ms;";
            this._cover = $('#j-ui-popup');
            //iphone绑定在doc上的click没执行，此处再次绑定
            this._cover.on('click',this.__hide);
            _box = this._box = $('#j-ui-box');      
            _box.html(tpl || this._option.tpl);
            
            this._cover.removeClass('f-hide');
            _box.removeClass('f-hide');
            this._isShow = true;        
        },
        _popSel: function(e){
            events.emit('pop_sel',e);
        },
        _transitionEnd: function(){
            if(this._isShow) {
                this._box.removeClass('moveFromY');
                return;
            }
            this._box.removeClass('moveToY');       
            $('#j-ui-popup').addClass('f-hide');
            this._box.addClass('f-hide');
        },
        hide: function() {      
            var _this = this;
            if(!this._isShow) return;
            this._doc.off('touchmove',this.__noScroll);
            this._isShow = false;   
            this._box.addClass('moveToY');
        },
        //接口请求之前先停止页面滚动
        preventScroll: function() {
            this._doc.on('touchmove',this.__noScroll);
        }
    };
        module.exports = bottomPopup;
})

/* === lem:projects/search/lesoList/leso_list_render_v2.js === */
;(LTK["projects/search/lesoList/leso_list_render_v2"] = function (require, exports, module) {
    'use strict';
    var bottomPopup = require('components/com_banner/bottom_popup_v2');
    var Tpl = require('air/util/tpl');
    var lesoListRender = {
        init: function () {
            this.initDom();
            this.initEvent();
            bottomPopup.init();
        },
        initDom: function () {
            this._doc = $(document);
            this._body = $(document.body);
        },
        initEvent: function () {
        },
        renderDom: function (page, json) {
            json.tabList = [];
            var len = Math.ceil(json.count / 30), end, i = 0;
            for (i = 0; i < len; i++) {
                end = 30 * (i + 1);
                end = end >= json.count ? json.count : end;
                json.tabList.push({
                    selected: i == (page - 1),
                    page: (i + 1),
                    nums: (1 + 30 * i) + '-' + end
                });
            }
            var tplStr1 = ['<div class="bomb" style="z-index: 2300;">',
                    '<div class="bomb_container">',
                    '<div class="bomb_body">',
                    '<div class="bomb_title">',
                    '<h3>剧集<span>更新至' + json.count + '集</span></h3>',
                    '<a href="javascript:;" class="j-btn-cancel">×</a>',
                    '</div>',
                    '<div class="bomb_content">',
                    '<div class="b_info_top">',
                    '<ul class="j-num-tab">'].join(''),

                tplStr3 = ['</ul>',
                    '</div>',
                    '<div class="bomb_info">',
                    '<ul class="mod_album j-num-list">'].join(''),
                tplStr5 = ['</ul>',
                    '</div>',
                    '</div>',
                    '</div>',
                    '</div>',
                    '</div>'].join(''),

                tplStr2 = '<li><a class="{red}" href="javascript:;" data-page="{page}" data-toggle="tab">{nums}</a></li>',

                tplStr4 = '<li><a data-href="{url}">{aorder}</a>{sub_stitle}</li>';

            var tpl2 = new Tpl(tplStr2, function (item, index) {
                    if (item.selected) {
                        item.red = 'red';
                    }
                }),
                tpl4 = new Tpl(tplStr4, function (item, index) {
                    if (item.is_pay == '1') {
                        item.sub_stitle = '<u>v</u>';
                    }
                }),
                allcontent = tplStr1 + tpl2.render(json.tabList) + tplStr3 + tpl4.render(json.list) + tplStr5;
            if ($('.bomb').length) {
                $('.bomb').html(allcontent);
                // bottomPopup.show(allcontent);
                // bottomPopup.preventScroll();
            } else {
                $(document.body).append(allcontent);
                // bottomPopup.show(allcontent);
                // bottomPopup.preventScroll();
            }
        }
    };
    module.exports = lesoListRender;
});
/* === lem:components/util/adjustBottom.js === */
;(LTK["components/util/adjustBottom"] = function (require, exports, module) {
    'use strict';
    var AdjustBottom = {
        
        init: function (options) {
            this.initDom(options);
            this.initEvent();
            this.initPage();
        },

        
        initDom: function (options) {
            this.docHeight = $(window).height();
            this.$mainContainer = options.$mainContainer;
            this.otherSelectors = options.otherSelectors || [];
            this.offsetHeight = options.offsetHeight || 0;
            this.otherHeight = this.getOtherHeight();
            this.mainHeight = this.$mainContainer.height();
        },

        
        initEvent: function () {
            var $doc = $(window);
            $doc.on('touchend touchcancel', $.proxy(this.touchend, this));
        },

        
        touchend: function(){
            var newDocHeight = $(window).height();
            if (newDocHeight !== this.docHeight) {
                this.docHeight = newDocHeight;
                this.adjuestHeight();
            }
        },

        
        initPage: function () {
            this.adjuestHeight();
        },

        
        getOtherHeight: function () {
            var totalHeight = 0;
            for (var i = 0, len = this.otherSelectors.length; i < len; i++) {
                var current = this.otherSelectors[i];
                totalHeight += $(current).height();
            }
            return totalHeight;
        },

        
        adjuestHeight: function () {
            var calcedHeight = this.docHeight - this.otherHeight;
            if (calcedHeight > this.mainHeight) {
                this.$mainContainer.animate({
                    'height': calcedHeight - this.offsetHeight + 8
                });
            }
        }
    };
    module.exports = AdjustBottom;
});
/* === lem:projects/search/lesoList/leso_list_albumnav_v2.js === */
;(LTK["projects/search/lesoList/leso_list_albumnav_v2"] = function (require, exports, module) {
    'use strict';
    var ua = require('air/env/ua');
    var adjustBottom = require('components/util/adjustBottom');
    var AnimateScroll = require('components/touchComp/animateScroll');
    var albumNav = {
        init: function () {
            this.initDom();
            this.initEvent();
            this.initPage();
        },
        initDom: function () {
            this._doc = $(document);
            this._section_input = $('.section_input');
            this._b_info_top = $('.b_info_top');
        },
        initEvent: function () {
            this._initEvent();
        },
        _initEvent: function () {
            //横竖屏bug做的兼容处理，针对ios safari && webchat && weibo
            if ((ua.ios || ua.weixin || ua.weibo) && (this.width)) {
                this._doc.on('focus', '.j-search', $.proxy(this._addClass, this));
                this._doc.on('blur', '.j-search', $.proxy(this._removeClass, this));
            }
        },
        initPage: function () {
            this.initNav();
            this.initAdjust();
        },
        _addClass: function () {
            this._section_input.css('position', 'relative');
            this._b_info_top.css('position', 'relative');
        },
        _removeClass: function () {
            this._section_input.css('position', 'fixed');
            this._b_info_top.css('position', 'fixed');
        },
        
        initNav: function () {
            var navScroll = new AnimateScroll();
            navScroll.init({
                container: '.b_info_top',
                wrapper: 'ul'
            });
            navScroll.scrollTo($('.b_info_top').find('a.red').parent().index());
        },
        
        initAdjust: function () {
            adjustBottom.init({
                $mainContainer: $('.tab_cnt'),
                otherSelectors: ['header', '.footer', '.search_top'],
                offsetHeight: 40
            });
        }
    };
    module.exports = albumNav;
});
/* === lem:projects/search/lesoList/leso_list_tvalbum_v2.js === */
;(LTK["projects/search/lesoList/leso_list_tvalbum_v2"] = function (require, exports, module) {
    'use strict';
    var Tpl = require('air/util/tpl');
    var events = require('components/util/events');
    var lesoListRender = require('projects/search/lesoList/leso_list_render_v2');
    var AnimateScroll = require('components/touchComp/animateScroll');
    var albumNav = require('projects/search/lesoList/leso_list_albumnav_v2');
    var lesoListTvAlbum = {
        init: function () {
            this.initDom();
            this.initEvent();
            this.data = {'pagesize': 30};
        },

        initDom: function () {
            this.doc = $(document);
        },

        initEvent: function () {
            // events.on('change_tv_site_ok', $.proxy(this.changeSite, this));
            this.doc.on('click', 'a[data-action="more-album"]', $.proxy(this.showMoreAlb, this));
            this.doc.on('tap', '.j-num-tab li a', $.proxy(this.switchTabs, this));
            this.doc.on('click', '.j-btn-cancel', $.proxy(this._hide, this));
            this.doc.on('tap', '.j-num-list a', $.proxy(this._addActive, this));
        },

        _addActive: function (e) {
            var $target = $(e.target),
                li = $target.closest('li'),
                a = $target.closest('a');
            li.addClass('active');
            window.location.href = $target.attr('data-href');
        },

        
        switchTabs: function (e) {
            var target = e.target,
                a = $(target).closest('a');
            if (a.attr('data-letv') == '1') {
                return;
            }
            if ($(target).parent().parent().attr('class') == 'j-num-tab') {
                this.data.page = $(target).parent().index() + 1;
                this.send(this.data.page);
                this._show();
            }
        },

        
        showMoreAlb: function(e){
            $(document.body).append('<div id="tvAlbumBg" class="black-bg"></div>');
            this.elSiteBtn = $(e.target).parent().parent().prev().find('.a_img');
            this.data.pid = this.elSiteBtn.data('pid');
            this.data.aid = this.elSiteBtn.data('aid');
            this.data.default = this.elSiteBtn.data('default');
            this.data.website = this.elSiteBtn.data('site');
            this.data.page = 1;
            this.data._debug = 1;
            $('body').on('touchmove',function(ev) {
                ev.preventDefault();
            });
            this.send(this.data.page);
            this._show();
        },

        _show: function () {
            $('.bomb').show();
        },

        _hide: function (e) {
            $('.bomb').hide();
            $('#tvAlbumBg').remove();
            $('body').off('touchmove');
        },

        send: function (page) {
            // var url='http://t.m.letv.com/api/website' + '?' + $.param(this.data); //t接口
            var url = le.api_host.d_api + '/api/website?' + $.param(this.data);
            var self = this;
            if (page == 'site') {
                return;
            }
            // !this.cache && ( this.cache = {} );
            // if (this.cache[url]) {
            //     this.render(page, this.cache[url]);
            //     return;
            // }
            // 请求弹出剧集接口
            $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function (json) {
                    if (json.code == '200') {
                        json.data._params = self.data;
                        json.data.display_mode = 'unfold';
                        // self.cache[url] = json;
                        self.render(page, json);
                    }
                }
            });
        },

        render: function (page, json) {
            lesoListRender.renderDom(page, json.data);
            albumNav.init();
        },

        changeSite: function (json) {
        // changeSite: function (e) {
            this.data.pid = json.pid;
            // this.data.pid = e.data.pid;
            this.data.aid = json.aid;
            // this.data.aid = e.data.aid;
            this.data.default = json.default;
            // this.data.default = e.data.default;
            this.data.website = json.site;
            // this.data.website = e.data.site;
            this.data.page = 1;
            this.data._debug = 1;
            this.send('site');
        }
    };
    module.exports = lesoListTvAlbum;
});
/* === lem:projects/search/lesoList/changesite_v2.js === */
;(LTK["projects/search/lesoList/changesite_v2"] = function (require, exports, module) {
    'use strict';
    var bottomPopup = require('components/com_banner/bottom_popup_v2');
    var events = require('components/util/events');
    var changeSite = {
        init: function () {
            this._data = {};
            this.initDom();
            this.initEvent();
            this.initPage();
            bottomPopup.init();
        },
        initDom: function () {
            this._doc = $(document);
            // 剧集数大于30,最后一页集数小于3的情况,该页的剧集数:用来计算倒数第二页取几条数据
            this.lastPageVideoLen = 0;
            // 剧集数大于30,最后一页集数小于3的情况:最后一页和倒数第二页取数据,进行拼接
            this.mergeHtmlStr = '';
        },
        initEvent: function () {
            this._doc.on('click', 'a[data-action="sel_site"]', $.proxy(this._show, this));
            events.on('pop_sel', $.proxy(this._popSel, this));
        },
        initPage: function () {
        },
        _toJSON: function (str) {
            try {
                return (new Function('return ' + str))();
            } catch (e) {
                return '';
            }
        },
        
        _show: function (e) {
            var target = e.target;
            while (target.nodeName !== 'A') {
                target = target.parentNode;
            }
            target = $(target);
            var a = target.closest('a');
            this.gid = a.parent().parent().parent('div').attr('data-global_id');
            this.position = a.parent().parent().parent('div').attr('data-position');
            this._data['pid'] = target.data('pid');
            this._data['default'] = target.data('default');
            var source = target.attr('data-site');
            // 取弹出视频源
            this._send(le.api_host.d_api + '/api/website?pid=' + this._data.pid + '&cur_site=' + source + '&_debug=1&default=' + this._data['default'], 'sites');
        },
        _popSel: function (e) {
            // e = e.oriEvent;
            var target = e.target,
                index, site;
            while (target.nodeName !== 'A') target = target.parentNode;
            target = $(target);
            this._data['website'] = target.data('site');
            this._data['pid'] = target.data('pid');
            this._data['aid'] = target.data('aid');//搜索接口里给的当前页面默认展示的来源的pid和接口对应获取不到数据，所以用aid
            // 取弹出剧集数据
            this._send(le.api_host.d_api + '/api/website?&_debug=1&' + $.param(this._data), 'getdata');
        },
        _setSites: function (json) {
            var sites = le.m.SITE_LIST,
                tpl = ['<div class="share-play"><ul>'],
                i = 0, site;
            for (site in json.list) {
                tpl.push('<li><a href="javascript:;" data-index="' + ( ++i ) + '" data-global_id="' + this.gid + '" data-position="' + this.position +
                    '" data-action="pop_sel" data-site="' + site + '" data-aid="' + json.list[site] + '" data-pid="' + json.pid + '"><em class="s-' + site +
                    '"></em><b>' + sites[site] + '</b></a></li>');
            }
            tpl.push('</ul></div>');
            bottomPopup.show(tpl.join(''));
            bottomPopup.preventScroll();
        },
        _send: function (url, type) {
            var self = this;

            $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function (json) {
                    if (json.code == '200') {
                        //接口返回数据有误，做容错处理，视频来源只有乐视时，接口返回的json，code为200，data的list为空数组，此时不需要弹层。
                        //2015-11-26 后端修复接口，如果为空返回默认
                        if (typeof json.data === 'undefined' || json.data.list.length === 0) {
                            return;
                        }
                        json.site = self._data.website;
                        json.pid = self._data.pid;
                        json.aid = self._data.aid;
                        json['default'] = self._data['default'];
                        if (type === 'sites') {
                            // 渲染弹出视频源
                            self._setSites(json.data);
                        } else if (type === 'lastPage') {
                            // 剧集数大于30,最后一页集数大于等于3,显示后3条剧集
                            if (json.data.list.length >= 3) {
                                self._albumBoxLastThree(json);
                            }
                            // 剧集数大于30,最后一页集数小于3,显示所有,继续请求倒数第二页数据
                            else {
                                self._albumBoxLastN(json);
                            }
                        } else if (type === 'secondLastPage') {
                            // 请求倒数第二页数据
                            self._albumBoxSecondLastN(json);
                        }
                        else {
                            var count = parseInt(json.data.count);
                            // 小于等于7集,直接修改页码地址
                            if (count <= 7) {
                                self._albumBoxLess7(json);
                            } else if (count <= 30) {
                                self._albumBox8To30(json);
                            }
                            else {
                                // 剧集数大于30,显示前3条和3个点
                                self._albumBoxBeginThree(json);
                            }
                            events.emit('change_site_ok', json); // 点击选择视频源时,将相关数据传给leso_list_album_v2.js处理
                            // events.emit('change_tv_site_ok', json); // 点击选择视频源时,将相关数据传给leso_list_tvalbum_v2.js处理
                        }
                    }
                }
            });
        },
        // 小于等于7集
        _albumBoxLess7: function (json) {
            var htmlStr = '';
            for (var i = 0; i < json.data.count; i++) {
                htmlStr += '<li><a data-href="' + json.data.list[i].url + '" class="album_item">' + json.data.list[i].aorder + '</a></li>';
            }
            var dom_str = 'leso_' + json.aid;
            var $album_box = $("div[data-global_id='" + dom_str + "']").next();
            $album_box.html(htmlStr);
        },
        // 大于等于8集至小于等于30集
        _albumBox8To30: function (json) {
            var htmlStr = '';
            for (var i = 0; i < 3; i++) {
                htmlStr += '<li><a data-href="' + json.data.list[i].url + '" class="album_item">' + json.data.list[i].aorder + '</a></li>';
            }
            var threeDot = '<li><a href="javascript:;" data-action="more-album" data-pid="' + json.pid + '" data-letv="0" ' +
                'data-href="' + json.data.list[0].url + '" data-aid="' + json.aid + '">...</a></li>';
            htmlStr = htmlStr + threeDot;

            var len = json.data.list.length;
            for (var i = len - 3; i < len; i++) {
                htmlStr += '<li><a data-href="' + json.data.list[i].url + '" class="album_item">' + json.data.list[i].aorder + '</a></li>';
            }

            var dom_str = 'leso_' + json.aid;
            var $album_box = $("div[data-global_id='" + dom_str + "']").next();
            $album_box.html(htmlStr);
        },
        // 剧集数大于30,显示前3条和3个点
        _albumBoxBeginThree: function (json) {
            var htmlStr = '';
            for (var i = 0; i < 3; i++) {
                htmlStr += '<li><a data-href="' + json.data.list[i].url + '" class="album_item">' + json.data.list[i].aorder + '</a></li>';
            }
            var threeDot = '<li><a href="javascript:;" data-action="more-album" data-pid="' + json.pid + '" data-letv="0" ' +
                'data-href="' + json.data.list[0].url + '" data-aid="' + json.aid + '">...</a></li>';
            htmlStr = htmlStr + threeDot;
            var dom_str = 'leso_' + json.aid;
            var $album_box = $("div[data-global_id='" + dom_str + "']").next();
            $album_box.html(htmlStr);

            var lastPage = Math.ceil(json.data.count / 30);
            this._send(le.api_host.d_api + '/api/website?&_debug=1&page=' + lastPage + $.param(this._data), 'lastPage');
        },
        // 剧集数大于30,如果最后一页集数大于等于3,显示最后3条
        _albumBoxLastThree: function (json) {
            var htmlStr = '';
            var len = json.data.list.length;
            for (var i = len - 3; i < len; i++) {
                htmlStr += '<li><a data-href="' + json.data.list[i].url + '" class="album_item">' + json.data.list[i].aorder + '</a></li>';
            }
            var dom_str = 'leso_' + json.aid;
            var $album_box = $("div[data-global_id='" + dom_str + "']").next();
            $album_box.append(htmlStr);
        },
        // 剧集数大于30,如果最后一页集数小于3,显示所有,并请求上一页的数据
        _albumBoxLastN: function (json) {
            this.lastPageVideoLen = json.data.list.length;
            for (var i = 0; i < this.lastPageVideoLen; i++) {
                this.mergeHtmlStr += '<li><a data-href="' + json.data.list[i].url + '" class="album_item">' + json.data.list[i].aorder + '</a></li>';
            }
            var secondLastPage = Math.floor(json.data.count / 30);
            this._send(le.api_host.d_api + '/api/website?&_debug=1&page=' + secondLastPage + $.param(this._data), 'secondLastPage');
        },
        // 剧集数大于30,最后一页集数小于3,不够3条,用倒数第二页的数据补全
        _albumBoxSecondLastN: function (json) {
            var htmlStr = '';
            var len = json.data.list.length;
            var getLen = 3 - this.lastPageVideoLen;
            for (var i = len - getLen; i < len; i++) {
                htmlStr += '<li><a data-href="' + json.data.list[i].url + '" class="album_item">' + json.data.list[i].aorder + '</a></li>';
            }
            htmlStr = htmlStr + this.mergeHtmlStr;
            this.mergeHtmlStr = '';
            var dom_str = 'leso_' + json.aid;
            var $album_box = $("div[data-global_id='" + dom_str + "']").next();
            $album_box.append(htmlStr);
        }
    };
    module.exports = changeSite;
});
/* === lem:projects/search/lesoList/leso_list_nav_v2.js === */
;(LTK["projects/search/lesoList/leso_list_nav_v2"] = function (require, exports, module) {
    'use strict';
    var ua = require('air/env/ua');
    var adjustBottom = require('components/util/adjustBottom');
    var AnimateScroll = require('components/touchComp/animateScroll');
    var lesoNav = {
        init: function () {
            this.initDom();
            this.initEvent();
            this.initPage();
        },
        initDom: function () {
            this._doc = $(document);
            this._section_input = $('.section_input');
            this._sub_navCnt = $('.sub_navCnt');
        },
        initEvent: function () {
            this._initEvent();
        },
        _initEvent: function () {
            //横竖屏bug做的兼容处理，针对ios safari && webchat && weibo
            if ((ua.ios || ua.weixin || ua.weibo) && (this.width)) {
                this._doc.on('focus', '.j-search', $.proxy(this._addClass, this));
                this._doc.on('blur', '.j-search', $.proxy(this._removeClass, this));
            }
        },
        initPage: function () {
            this.initNav();
            this.initAdjust();
        },
        _addClass: function () {
            this._section_input.css('position', 'relative');
            this._sub_navCnt.css('position', 'relative');
        },
        _removeClass: function () {
            this._section_input.css('position', 'fixed');
            this._sub_navCnt.css('position', 'fixed');
        },
        
        initNav: function () {
            var navScroll = new AnimateScroll();
            navScroll.init({
                container: '.sub_navCnt',
                wrapper: 'ul'
            });
            navScroll.scrollTo($('.sub_navCnt').find('li.active').index());
        },
        
        initAdjust: function () {
            adjustBottom.init({
                $mainContainer: $('.tab_cnt'),
                otherSelectors: ['header', '.footer', '.search_top'],
                offsetHeight: 40
            });
        }
    };
    module.exports = lesoNav;
});
/* === lem:projects/search/lesoList/leso_list_scroll_v2.js === */
;(LTK["projects/search/lesoList/leso_list_scroll_v2"] = function (require, exports, module) {
    'use strict';
    var lesoListScroll = {
        init: function () {
            if ($('#j-scroller-wrapper').length == 0) return;
            this._initDom();
            this._initEvent();
            this._initScroll();
        },
        _initDom: function () {
            this._tabs = $('#j-scroller-wrapper');
        },
        _initEvent: function () {
        },
        //_win_width: window.innerWidth,
        _win_width: document.body.clientWidth,
        _tab_width: 0,
        _initScroll: function () {
            this._setSize();
            (this._tab_width > this._win_width) && this._init_tab_scroll();
        },
        _setSize: function () {
            var width = 0;
            _.each(_.toArray(this._tabs.find('li')), function (li) {
                width += $(li).width();
            });
            this._tab_width = width;
            this._tabs.find('ul').width(width + 6 + 'px');
        },
        _init_tab_scroll: function () {
            this._tab_scroll = new IScroll(this._tabs[0], {
                preventDefault: true,
                eventPassthrough: true,
                click: false,
                useTransition: false,
                scrollX: true,
                scrollY: false,
                mouseWheel: false,
                fixedScrollbar: true,
                startX: 0
            });
        }
    };
    module.exports = lesoListScroll;
});

/* === lem:projects/search/lesoList/leso_list_stat_v2.js === */
;(LTK["projects/search/lesoList/leso_list_stat_v2"] = function (require, exports, module) {
    'use strict';
    var events = require('components/util/events');
    var lesoStat = require('components/search/leso_stat'); //乐搜自己的数据上报
    var lesoListStat = {
        init: function () {
            this.initDom();
            this.initEvent();
        },
        initDom: function () {
            if (window.info && window.info.leso) {
                this.lesoInfo = window.info.leso;
                this.eid = window.info.leso.eid;
            } else {
                this.lesoInfo = {'eid': '', 'experiment_id': '', 'is_trigger': ''};
                this.eid = '';
            }
            this._doc = $(document);
            this._win = $(window);
        },
        initEvent: function () {
            //搜索结果页PV
//from=xx&uid=xx&device_id=xx&time=xx&module=search_rst_page&query=xx&action_code=4&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            lesoStat.sendData($.extend({'module': 'search_rst_page', 'action_code': 4}, this.lesoInfo));
            //计时器
            this._count();
            //离开页面
            this._win.on('beforeunload', $.proxy(this.leavePage, this));
            //切换tab点击
            this._doc.on('tap', '.sub_navCnt li', $.proxy(this.changeTab, this));
            //点击集数
            this._doc.on('tap', '.album_box li', $.proxy(this.episode, this));
            //点击结果卡片//点击播放按钮
            this._doc.on('click', '.j-list', $.proxy(this.resultCard, this));
            //点击每一期
            this._doc.on('click', '.album_box_h li', $.proxy(this.eachIssue, this));
            //点击查看全部
            this._doc.on('click', '.j-open-more', $.proxy(this.allView, this));
            //点击短视频
            this._doc.on('click', '.a_module', $.proxy(this.shortVideo, this));
            //点击直播结果
            this._doc.on('click', '.j-text_report', $.proxy(this.LiveResults, this));
            //点击直播状态
            this._doc.on('click', '.j-btn_report', $.proxy(this.LiveState, this));
            //左右滑动
            events.on('slidingAround', $.proxy(this.slidingAround, this));
            //点击视频
            this._doc.on('click', '.info_box a', $.proxy(this.video, this));
            //点击来源下拉菜单
            this._doc.on('click', 'a[data-action="sel_site"]', $.proxy(this.sourceMenu, this));
            //点击展开菜单中的站点源
            this._doc.on('click', 'a[data-action="pop_sel"]', $.proxy(this.eachSource, this));
            //点击特型展示进入官网按钮
            this._doc.on('click', '.j-enter_site', $.proxy(this.websiteBtn, this));
        },
        //计时器
        _count: function () {
            this.stay_time = 0;
            var timer, self = this;

            function count() {
                self.stay_time++;
            }

            timer = setInterval(count, 1000);
            count();
        },
        //离开页面
        leavePage: function () {
//from=xx&uid=xx&device_id=xx&time=xx&module=search_rst_page&query=xx&action_code=6&stay_time=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var settings = {
                module: 'search_rst_page',
                action_code: 6,
                stay_time: this.stay_time
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo));
        },
        //切换tab点击
        changeTab: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=tab_text&position=xx&category=xx&query=xx&action_code=0&eid=xx&experiment_id=xx&parent_eid=xx&is_trigger=xx&version=xx
            var $target = $(e.target),
                li = $target.closest('li'),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                click_area: 'tab_text',
                position: li.index() + 1,
                category: 0,
                action_code: 0,
                parent_eid: ''
            };
            var extendSettings = this.lesoInfo;
            extendSettings.searchUrl = encodeURIComponent(location.href);
            lesoStat.sendData($.extend(settings,extendSettings), href);
        },
        //点击结果卡片
        resultCard: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=cover&query=xx&action_code=1&gid=xx&category=xx&position=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var $target = $(e.target),
                aClass = $target.attr('class') || $target.closest('a').attr('class'),
                dataAction = $target.attr('data-action') || $target.closest('a').attr('data-action'),
                div = $target.closest('.j-list'),
                // href = div.find('.a_img').attr('data-href'),
                href = div.find('.a_img').attr('data-href') || div.find('.a_itemList_l').attr('data-href'),
                site = div.find('.a_img').attr('data-site'),
                src = site == 'letv' ? 1 : 2 ;
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                gid: div.attr('data-global_id'),
                category: div.attr('data-cid'),
                position: div.attr('data-position'),
                vt: div.attr('data-videotype'),
                src: src
            };
            if (aClass.indexOf('j-play') >= 0) {
                settings.click_area = 'play_button';
            } else {
                settings.click_area = 'cover';
            }
            if (!dataAction || (dataAction && dataAction.indexOf('sel_site') < 0)) {
                lesoStat.sendData($.extend(settings, this.lesoInfo), href);
            }
        },
        //点击集数
        episode: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=episodes_button_first&query=xx&action_code=1&gid=xx&category=xx&position=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var $target = $(e.target),
                ul = $target.closest('ul'),
                li = $target.closest('li'),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'episodes_button_other',
                gid: ul.prev().attr('data-global_id'),
                category: ul.prev().attr('data-cid'),
                position: li.index() + 1
            }
            if (li.index() == 0) {
                settings.click_area = 'episodes_button_first';
            } else if (li.index() == (ul.find('li').size() - 1)) {
                settings.click_area = 'episodes_button_last';
            } else if (li.index() == (ul.find('li').size() - 2)) {
                settings.click_area = 'episodes_button_second_last';
            }
            if (a.attr('data-letv')) {
                settings.click_area == 'more_button';
                lesoStat.sendData($.extend(settings, this.lesoInfo));
            } else {
                li.addClass('active');
                lesoStat.sendData($.extend(settings, this.lesoInfo), href);
            }
            if (a.attr('data-letv') == '1' && a.attr('data-action') != 'more-album') {
                window.location.href = href;
                return;
            }
        },
        //点击每一期
        eachIssue: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=episodes_button&query=xx&action_code=1&gid=xx&category=xx&position=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var $target = $(e.target),
                ul = $target.closest('ul'),
                li = $target.closest('li'),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'episodes_button',
                gid: ul.prev().attr('data-global_id'),
                category: ul.prev().attr('data-cid'),
                position: li.index() + 1
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo), href);
        },
        //点击查看全部
        allView: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=more_button&query=xx&action_code=1&gid=xx&position=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx&category=xx
            var $target = $(e.target),
                div = $target.closest('div'),
                a = div.find('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'more_button',
                gid: div.prev().prev().attr('data-global_id'),
                category: div.prev().prev().attr('data-cid'),
                position: div.prev().prev().attr('data-position')
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo), href);
        },
        //点击短视频
        shortVideo: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=text&query=xx&action_code=1&gid=xx&position=xx&eid=xx&experiment_id=xx&is_triger=xx&version=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'text',
                gid: a.attr('data-global_id'),
                position: a.index() + 1
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo), href);
        },
        //点击直播结果 //yongran
        LiveResults: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=live_text&query=xx&action_code=1&gid=xx&position=xx&sub_position=xx&eid=xx&experiment_id=xx&is_trigger=xx&channel_id=xx&version=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'live_text',
                gid: a.attr('data-global_id'),
                sub_position: a.parents('.column').attr('data-position'),
                position: a.index() + 1,
                channel_id: a.attr('data-channelid')
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo), href);
        },
        //点击直播状态 //yongran
        LiveState: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=replay_button&query=xx&action_code=1&gid=xx&position=xx&sub_position=xx&eid=xx&experiment_id=xx&is_trigger=xx&channel_id=xx&version=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: a.attr('data-status'),
                gid: a.attr('data-global_id'),
                sub_position: a.parents('.column').attr('data-position'),
                position: a.index() + 1,
                channel_id: a.attr('data-channelid')
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo), href);
        },
        //左右滑动
        slidingAround: function (type) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=live_slide_left&query=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var settings = {
                module: 'search_rst_page',
                click_area: 'live_slide_' + type
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo));
        },
        //点击视频
        video: function (e) {
//from=xx&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=cover&query=xx&action_code=1&gid=xx&child_gid=xx&child_category=xx&position=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'cover',
                gid: a.parent('div').attr('data-global_id'),
                child_gid: a.parent('div').attr('data-global_id'),
                child_category: a.parent('div').attr('data-cid'),
                position: a.parents('.a_temp3').attr('data-position'), //yongran
                vt: a.attr('data-videotype'),
                src: a.attr('data-src')
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo), href);
        },
        //点击来源下拉菜单
        sourceMenu: function (e) {
//from=mobile_msite0400&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=website_button&gid=xx&positoin=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                click_area: 'website_button',
                gid: a.parent().parent().parent('div').attr('data-global_id'),
                position: a.parent().parent().parent('div').attr('data-position')
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo));
        },
        //点击展开菜单中的站点源
        eachSource: function (e) {
//from=mobile_msite0400&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=website_button&gid=xx&positoin=xx&eid=xx&version=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                click_area: 'website_button',
                gid: a.attr('data-global_id'),
                position: a.attr('data-position'),
                eid: this.eid
            }
            lesoStat.sendData(settings);
        },
        //点击特型展示进入官网按钮
        websiteBtn: function (e) {
//from=mobile_msite0400&uid=xx&imei=xx&device_id=xx&time=xx&module=search_rst_page&click_area=official_website&query=xx&action_code=1&gid=xx&position=xx&eid=xx&experiment_id=xx&is_trigger=xx&version=xx
            var $target = $(e.target),
                a = $target.closest('a'),
                href = a.attr('data-href');
            var settings = {
                module: 'search_rst_page',
                action_code: 1,
                click_area: 'official_website',
                gid: '', //yongran
                position: a.parents('.column_body').attr('data-position')
            };
            lesoStat.sendData($.extend(settings, this.lesoInfo), href);
        }
    };
    module.exports = lesoListStat;
});

// 搜索结果为空页为你推荐view层
//wangxiang
//view层基类
//wangxiang
/* === lib:hogan/hogan.js === */
;var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (renderFunc, text, compiler, options) {
    this.r = renderFunc || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.buf = (useArrayBuffer) ? [] : '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // tries to find a partial in the curent scope and render it
    rp: function(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      if (this.c && typeof partial == 'string') {
        partial = this.c.compile(partial, this.options);
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ls(val, ctx, partials, inverted, start, end, tags);
      }

      pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function(val, cx, partials, text, tags) {
      var compiler = this.c;
      var options = this.options;
      options.delimiters = tags;
      var text = val.call(cx, text);
      text = (text == null) ? String(text) : text.toString();
      this.b(compiler.compile(text, options).render(cx, partials));
      return false;
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },
    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },

    // lambda replace section
    ls: function(val, ctx, partials, inverted, start, end, tags) {
      var cx = ctx[ctx.length - 1],
          t = null;

      if (!inverted && this.c && val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end), tags);
      }

      t = val.call(cx);

      if (typeof t == 'function') {
        if (inverted) {
          return true;
        } else if (this.c) {
          return this.ho(t, cx, partials, this.text.substring(start, end), tags);
        }
      }

      return t;
    },

    // lambda replace variable
    lv: function(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = val.call(cx);

      if (typeof result == 'function') {
        result = coerceToString(result.call(cx));
        if (this.c && ~result.indexOf("{\u007B")) {
          return this.c.compile(result, this.options).render(cx, partials);
        }
      }

      return coerceToString(result);
    }

  };

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos =/\'/g,
      rQuot = /\"/g,
      hChars =/[&<>\"\']/;


  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp,'&amp;')
        .replace(rLt,'&lt;')
        .replace(rGt,'&gt;')
        .replace(rApos,'&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);




(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      tagTypes = {
        '#': 1, '^': 2, '/': 3,  '!': 4, '>': 5,
        '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
      };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) ||
          (!tokens[j].tag && tokens[j].match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = tagTypes[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - ctag.length : i + otag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  Hogan.generate = function (tree, text, options) {
    var code = 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
    if (options.asString) {
      return 'function(c,p,i){' + code + ';}';
    }

    return new Hogan.Template(new Function('c', 'p', 'i', code), text, Hogan, options);
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n),
                        tree[i].i, tree[i].end, tree[i].otag + " " + tree[i].ctag);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n,
                                chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i]);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text('"' + esc(tree[i]) + '"');
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end, tags) {
    return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),' +
           'c,p,0,' + start + ',' + end + ',"' + tags + '")){' +
           '_.rs(c,p,' +
           'function(c,p,_){' +
           walk(nodes) +
           '});c.pop();}';
  }

  function invertedSection(nodes, id, method) {
    return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' +
           walk(nodes) +
           '};';
  }

  function partial(tok) {
    return '_.b(_.rp("' +  esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
  }

  function tripleStache(id, method) {
    return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function variable(id, method) {
    return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return '_.b(' + id + ');';
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  },

  Hogan.cache = {};

  Hogan.compile = function(text, options) {
    // options
    //
    // asString: false (default)
    //
    // sectionTags: [{o: '_foo', c: 'foo'}]
    // An array of object with o and c fields that indicate names for custom
    // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
    //
    // delimiters: A string that overrides the default delimiters.
    // Example: "<% %>"
    //
    options = options || {};

    var key = text + '||' + !!options.asString;

    var t = this.cache[key];

    if (t) {
      return t;
    }

    t = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = t;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);


/* === lem:views/view.js === */
;;(function(){

	function View(){
		 this._tpl = Hogan.compile(this.setTpl());
	}

	_.extend(View.prototype,{
		setTpl: function(){
			return '';
		},
		formatData: function(json){
			return json;
		},
		render: function(json){
			return this._tpl.render(this.formatData(json));
		}
	});

	
	le.v.View = View;
})();
/* === lem:tpls/related_list.js === */
;//搜索结果为空页为你推荐tpl层
le.tpl.relatedList = ['<div class="list"><ul class="list-pic">',
'{{#list}}',
'<li {{#isRight}}class="f-fr"{{/isRight}}{{^isRight}}class="f-fl"{{/isRight}} k-name="rec-stat" stat-info="{area:\'{{stat-area}}\',reid:\'{{stat-reid}}\',bucket:\'{{stat-bucket}}\',cid:\'{{cid}}\',rank:\'{{stat-rank}}\',ap:\'{{stat-ap}}\'}">',
	  '{{#isRight}}',
      	'<div class="w10">&nbsp;</div>',
	  '{{/isRight}}',
	  '{{^isRight}}',
	  	'<div class="w20">&nbsp;</div>',
	  '{{/isRight}}',
      '<dl class="w290">',
	'{{#isZhuanti}}',
		'<dt><a href="javascript:void(0)" data-href="{{playUrl}}" title="{{title}}"><img src="http://i2.letvimg.com/lc05_img/201601/07/17/39/1739/letvImg.png" data-url ="{{picurl}}"><small></small><b class="bg"></b>{{#isVIP}}<span class="cnl-tag">VIP</span>{{/isVIP}}</a></dt>',
		'<dd class="d-t"><a href="javascript:void(0)" data-href="{{playUrl}}" k-name="send-click-stat" title="{{title}}">{{title}}</a></dd>',
		'<dd class="d-i"></dd>',
	'{{/isZhuanti}}',
	'{{^isZhuanti}}',
		'<dt><a href="javascript:void(0)" data-href="{{#vid}}/vplay_{{vid}}.html?from=v_recommend{{/vid}}{{^vid}}/play.php?type=2&id={{pid}}{{/vid}}"><img src="http://i2.letvimg.com/lc05_img/201601/07/17/39/1739/letvImg.png" data-url ="{{#picurl}}{{picurl}}{{/picurl}}{{^picurl}}{{video_pic}}/thumb/2_200_150.jpg{{/picurl}}"><small></small><b class="bg"></b>{{#isVIP}}<span class="cnl-tag">VIP</span>{{/isVIP}}</a></dt>',
		'<dd class="d-t"><a href="javascript:void(0)" data-href="{{#vid}}/vplay_{{vid}}.html?from=v_recommend{{/vid}}{{^vid}}/play.php?type=2&id={{pid}}{{/vid}}" k-name="send-click-stat" >{{#title}}{{title}}{{/title}}{{^title}}{{pidname}}{{/title}}</a></dd>',
		'<dd class="d-i">{{subtitle}}</dd>',
	'{{/isZhuanti}}',
      '</dl>',
	  '{{#isRight}}',
      '<div class="w20">&nbsp;</div>',
	  '{{/isRight}}',
	  '{{^isRight}}',
	  '<div class="w10">&nbsp;</div>',
	  '{{/isRight}}',
    '</li>',
'{{/list}}',
'</ul></div>'].join('');
	
/* === lem:views/related_list.js === */
;
 ;(function(){
 	function relatedList(){
 		le.base(this);
 	}

 	le.inherits(relatedList,le.v.View);
 	
 	_.extend(relatedList.prototype,{
		setTpl: function(){
			return le.tpl.relatedList;
		},
		formatData: function(json){
			_.map(json.rec,function(v,i){
				v['isRight'] = i % 2;
				v['stat-area'] = json.area;
				v['stat-reid'] = json.reid;
				v['stat-bucket'] = json.bucket;
				v['stat-rank'] = i+1;
				
				switch(json.area){
					case 'rec_0025'://播放页相关推荐
						v['stat-ap'] = 'ch=msite&pg=play&bk=rec&link='+(i+1);
						break;
					case 'rec_0022'://错误页为您推荐由rec_0005更改为rec_0022,推会员影片
						v['stat-ap'] = 'ch=msite&pg=error&bk=rec&link='+(i+1);
						v['isVIP'] = 1;
						break;
					case 'rec_0007':
						v['stat-ap'] = 'ch=msite&pg=lesoempty&bk=rec&link='+(i+1);
						break;
					default:;
				}
				if(v.zid){
					v['isZhuanti'] = true;
					var url =v.playurl.match(/http:\/\/[^\.]*\.letv\.com(\/.*)/)[1] + '?from=v_recommend';
					v['playUrl'] = le.api_host.m_href + url;
				}

			});
			
			return {'list': json.rec};
		}
 	});

 	le.v.relatedList = {
 		render: function(json,wrapper){
			var _view = new relatedList();
			wrapper.html(_view.render(json));
 		}
 	};

 })();


/* === lem:projects/search/lesoList/leso_empty_related_v2.js === */
;(LTK["projects/search/lesoList/leso_empty_related_v2"] = function (require, exports, module) {
    'use strict';
    var lesoEmptyRelated = {
        _data: {},
        init: function () {
            if ($('.listArea').length === 0) {
                return;
            }
            this._initDom();
            this._initEvent();
        },

        _initDom: function () {
            this._wrapper = $('.listArea');
            this._win = $(window);
        },
        _initEvent: function () {
            this._win.on('load', $.proxy(this._send, this))
        },

        //联播更新相关视频
        _send: function () {
            this._data.uid = $.cookie('ssouid') || 0;
            this._data.lc = Stats.getLC();
            this._data.cid = 0;
            this._data.pt = '0006';
            this._data.area = 'rec_0007';
            this._data.num = 6;

            this._data.versiontype = 'IntelligentOperation';
            this._data.action = 'rec';
            this._data.disable_record_exposure = 1;
            this._data.lang = (window.info && window.info.lang) || 'zh_cn';

            this._data.history = $.cookie('his_vid') || '';
            this._data.random = new Date().getTime();
            var url = le.api_host.rec + '/pcw' + '?' + $.param(this._data) + '&jsonp=?';

            var self = this;
            $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function (json) {
                    le.v.relatedList.render(json, self._wrapper);
                    $('img[data-url]').imglazyload();
                }
            });
        }
    };
    module.exports = lesoEmptyRelated;
});

/* === lem:air/util/formatTime.js === */
;(LTK["air/util/formatTime"] = function (require, exports, module) {
	
	module.exports = function (time, timeFormat) {
		if (typeof time==='number') {
			time = new Date(time * 1000);
		} else if (typeof time==='string') {
			time = new Date(Date.parse(time.replace(/-/g, '/')));
		}

		var t = {};
		t.YYYY = time.getFullYear();
		t.m = time.getMonth() + 1;
		t.D = time.getDate();
		t.H = time.getHours();
		t.M = time.getMinutes();
		t.S = time.getSeconds();
		t.mm = t.m>9 ? t.m : '0'+t.m;
		t.DD = t.D>9 ? t.D : '0'+t.D;
		t.HH = t.H>9 ? t.H : '0'+t.H;
		t.MM = t.M>9 ? t.M : '0'+t.M;
		t.SS = t.S>9 ? t.S : '0'+t.S;

		return timeFormat.replace(/\b[YmDHMS]+\b/g, function ($0) {
			return t[$0] || '';
		});
	};

});

/* === lem:air/number/shorten.js === */
;(LTK["air/number/shorten"] = function (require, exports, module) {
	
	module.exports = function (num, fix) {
		var n = num>0 ? num : -num;
		fix==null && (fix = 1);
		//1万以内
		if (n<1E4) {
			return String(num);
		}
		//1亿以内
		if (n<1E8) {
			return (num/1E4).toFixed(fix)+'万';
		}
		return (num/1E8).toFixed(fix)+'亿';
	};

});

/* === lem:air/util/formatDuration.js === */
;(LTK["air/util/formatDuration"] = function (require, exports, module) {
	
	module.exports = function (time, timeFormat) {
		var t = {DD: '00', HH: '00', MM: '00', SS: '00', D: '0', H: '0', M: '0', S: '0'},
			_f = Math.floor, x;
		
		
		if (time>=86400) { //24*60*60 = 86400
			x = _f(time / 86400);
			t.DD = t.D = x;
			x<10 && (t.DD = '0'+x);
			time %= 86400;
		}
		if (time>=3600) {
			x = _f(time / 3600);
			t.HH = t.H = x;
			x<10 && (t.HH = '0'+x);
			time %= 3600;
		}
		if (time>59) {
			x = _f(time / 60);
			t.MM = t.M = x;
			x<10 && (t.MM = '0'+x);
			time %= 60;
		}
		if (time>0) {
			t.SS = t.S = time;
			time<10 && (t.SS = '0'+time);
		}
		return timeFormat.replace(/\b[DHMS]+\b/g, function ($0) {
			return t[$0] || '';
		});
	};

});

/* === lem:air/util/scrollingLoader.js === */
;(LTK["air/util/scrollingLoader"] = function (require, exports, module) {
	
	function ScrollingLoader(opt) {
		var _this = this;
		_this.loadedTimes = 0;
		_this.onStop = opt.onStop || function () {};
		_this._loadData = opt.loadData;
		_this._maxTimes = opt.maxTimes;
		if (opt.$loadBtn) {
			opt.$loadBtn.on('click', function () {
				_this.loadData();
			});
		} else if (opt.$list) {
			_this._initScrollEvent(opt);
		}
	}

	ScrollingLoader.prototype = {
		_initScrollEvent: function (opt) {
			var _this = this;
			var $win = $(window),
				$list = opt.$list,
				offsetY = opt.offsetY || 0,
				timer = 0;
			_this._onscroll = function () {
				clearTimeout(timer);
				timer = setTimeout(function () {
					var h1 = $win.scrollTop() + $win.height() + offsetY,
						h2 = $list.offset().top + $list.height();
					//console.log(h1, h2);
					if (h1>h2) {
						_this.loadData();
					}
				}, 100);
			};
			_this.addScrollEvent();
		},
		
		loadData: function () {
			var _this = this;
			if (_this._isStopped) {return}
			_this.loadedTimes++;
			_this._loadData();
			if (_this.loadedTimes===_this._maxTimes) {
				_this._isStopped = true;
				_this.onStop(false);
			}
		},
		
		stopLoading: function () {
			this._isStopped = true;
			this.onStop(true);
		},
		
		continueToLoad: function () {
			this._isStopped = false;
		},
		
		addScrollEvent: function () {
			window.addEventListener ?
				window.addEventListener('scroll', this._onscroll, false) :
				$(window).on('scroll', this._onscroll);
		},
		
		removeScrollEvent: function () {
			window.removeEventListener ?
				window.removeEventListener('scroll', this._onscroll) :
				$(window).off('scroll', this._onscroll);
		}
	};

	module.exports = ScrollingLoader;

});

/* === lem:projects/search/lesoList/leso_list_loadmore_v2.js === */
;(LTK["projects/search/lesoList/leso_list_loadmore_v2"] = function (require, exports, module) {
    'use strict';
    var Tpl = require('air/util/tpl');
    var time = require('air/util/formatTime');
    var shortenGlobal = require("air/number/shorten");
    var formatDurationV2 = require("air/util/formatDuration");
    var ScrollingLoader = require('air/util/scrollingLoader'); //滚动加载瀑布流
    var loaderMore = {
        init: function () {
            if ($('.a_module').length < 20) {
                return;
            }
            this.initDom();
            this.initEvent();
            this.initPage();
        },
        initDom: function () {
            this.$videoBlock = $('.j-shortVideo');
            this.videoTpl = ['<a href="javascript:;" class="a_module" data-href="{playUrl}" data-global_id="{global_id}">',
                '<span class="a_img">',
                '<img src="//i0.letvimg.com/lc03_img/201607/19/14/39/1436/a_tempBg2.png" />',
                '<i style="background-image: url(&quot;{imageSrc}&quot;); background-size: cover; opacity: 1;"></i>',
                '<b class="a_b_r">{duration}</b>',
                '</span>',
                '<span class="a_cnt">',
                '<h3>{name}</h3>',
                '<div class="a_cnt_item">',
                '<span class="">发布时间：{releaseDate}</span>',
                '<span class=""><i class="icon_font icon_play"></i>{playCount}</span>',
                '</div>',
                '</span>',
                '</a>'].join('');
            // 计算是否继续加载
            this.totalCount = 0;
            this.totalPage = 0;
            this.pageSize = 20;
            this.currPage = 1;
            this.finish = false;
            this.list = [];
            //time
            this.MS24H = 24 * 60 * 60 * 1000;//24小时的毫秒
            this.MS01H = 1 * 60 * 60 * 1000;//一小时的毫秒
            this.MS01M = 1 * 60 * 1000;//一分钟的毫秒
        },
        initEvent: function () {
        },
        initPage: function () {
            this.getVideoItem();
        },
        getVideoItem: function () {
            var _this = this;
            if (window.info && window.info.leso) {
                this.searchUrl = window.info.leso.searchUrl;
            } else {
                return;
            }
            var opt = {
                $list: this.$videoBlock,
                offsetY: 150,
                loadData: function () {
                    if (_this.finish) {
                        return;
                    }
                    $.ajax({
                        type: "get",
                        url: _this.searchUrl.replace('dt=1', 'dt=2').replace('ps=50', 'ps=20').replace('pn=1', ''),
                        dataType: 'jsonp',
                        data: {
                            page: (_this.currPage + 1),
                            pn: (_this.currPage + 1)
                        },
                        success: function (res) {
                            if (res && res.video_list) {
                                _this.list = res.video_list;
                                _this.setVideoContent(_this.list);
                                _this.currPage++;

                                _this.totalCount = res.data_count;
                                _this.totalPage = Math.ceil(_this.totalCount / _this.pageSize);
                                // 当前页等于总页数,加载完
                                if (_this.currPage == _this.totalPage) {
                                    _this.finish = true;
                                }
                            }
                        }
                    });
                }
            };
            new ScrollingLoader(opt);
        },
        
        releaseDateHandler: function (mstime) {
            var now = Date.now();
            var minus = now - mstime;//毫秒
            var re = "";
            if (minus >= this.MS24H) {//24小时之前
                re = time(mstime / 1000, 'YYYY-mm-DD');
                // re = mstime;
            } else if (minus >= this.MS01H) {//24小时与一小时之间
                re = Math.floor(minus / (1000 * 60 * 60)) + "小时前";
            } else if (minus >= this.MS01M) {//一小时与一分钟之间
                re = Math.floor(minus / (1000 * 60)) + "分钟前";
            } else {
                re = '1分钟内';
            }
            return re;
        },
        setVideoContent: function (items) {
            var _this = this;
            var tpl = new Tpl(this.videoTpl, function (item, order) {
                if (item.src == 1) {
                    //有的pushFlag是字符串，有的是object
                    if ((typeof item.pushFlag == 'string' && item.pushFlag.indexOf("420001") == -1) || (typeof item.pushFlag == "object" && !item.pushFlag['420001'])) {
                        return;
                    }
                    if (item.vid) {
                        item.playUrl = 'play_' + item.vid + '.html?ref=msearch';
                    } else {
                        return;
                    }
                } else if (item.src == 2) {
                    if (item.url) {
                        item.playUrl = item.url;
                    } else {
                        return;
                    }
                }
                item.name = item.name;
                item.imageSrc = item.images["320*200"] || item.images["400*225"] || item.images["400*250"] || item.images["164*92"];
                item.releaseDate = _this.releaseDateHandler(item.releaseDate);
                item.playCount = shortenGlobal(item.playCount, 1);
                item.duration = item.duration ? formatDurationV2(item.duration, "MM:SS") : '';
                item.global_id = item.global_id;
            });
            var renderedHtml = tpl.render(items);
            this.$videoBlock.append(renderedHtml);
            $('i[data-src]').imglazyload();
        }
    };
    module.exports = loaderMore;
});

/* === lem:main/search/leso_list_v2.js === */
;(LTK["main/search/leso_list_v2"] = function (require) {
    'use strict';
    $('img[data-src]').imglazyload();
    var lesoStat = require('components/search/leso_stat'); //乐搜自己的数据上报
    var Url = require('air/util/Url');
    $(function () {
        require('projects/search/search_v2').init();
        // 改版
        require('projects/search/lesoList/leso_list_live_v2').init(); //直播
        require('projects/search/lesoList/leso_list_app_v2').init(); //APP极速播放&&播放按钮
        require('projects/search/lesoList/leso_list_showmore_v2').init(); //查看更多
        require('projects/search/lesoList/leso_list_album_v2').init(); //电影剧集
        require('projects/search/lesoList/leso_list_tvalbum_v2').init(); //电视剧剧集
        require('projects/search/lesoList/changesite_v2').init(); //切换视频源
        require('projects/search/lesoList/leso_list_nav_v2').init(); //nav横滑
        require('projects/search/lesoList/leso_list_scroll_v2').init(); //乐看搜索结果页区域滚动（类似明星结果页影视作品）
        require('projects/search/lesoList/leso_list_stat_v2').init(); //搜索数据上报
        require('projects/search/lesoList/leso_empty_related_v2').init(); //搜索无结果页推荐
        require('projects/search/lesoList/leso_list_loadmore_v2').init(); //短视频 滚动加载瀑布流
        // end
        // 执行搜索上报
        var lesoParams = info.leso || {};
        var getParams = {
            query: Url.getParam('query') || '',
            suggest_text: Url.getParam('suggest_text') || '',
            parent_eid: Url.getParam('parent_eid') || '',
            eid: lesoParams.eid || '',
            experiment_id: lesoParams.experiment_id || '',
            is_trigger: lesoParams.is_trigger || '',
            click_area: Url.getParam('click_area') || 'text'
        };

        function doSearchReport(getParams) {
            var defaults = {
                module: 'suggest_list',
                status: 'success',
                action_code: 0,
            };
            lesoStat.sendData($.extend(defaults, getParams));
        }

        if (getParams.click_area === 'text' && (document.referrer.indexOf('le.com/search') > -1) && (document.referrer.indexOf('?wd=') <= -1)) {
            doSearchReport(getParams);
        }

        if (Cookie.get('_mark_module') && window.info && window.info.leso && (document.referrer.indexOf('le.com/search') > -1) && (document.referrer.indexOf('?wd=') <= -1)) {
            var $leso_data = {'click_area': 'text', 'action_code': '0', 'status': 'success'};
            $leso_data = $.extend($leso_data, info.leso);
            if (Cookie.get('_mark_module') === 'hot_search') {
                $leso_data.module = 'hot_search';
            } else {
                $leso_data.module = 'search_history';
            }
            lesoStat.sendData($leso_data);
            Cookie.set('_mark_module', null);
        }
    });
});


require("main/search/leso_list_v2");
