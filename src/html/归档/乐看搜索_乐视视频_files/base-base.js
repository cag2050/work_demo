/* file tree:
|...lem:main/base/base.js
|   |...lib:letv/LTK.js
|   |...lem:components/index/index.js
|   |   |...lem:components/com_base/namespace.js
|   |   |...lem:components/com_base/class.js
|   |   |...lib:zepto/zepto.js
|   |   |...lib:zepto/zepto.data.js
|   |   |...lib:zepto/touch.js
|   |   |...lib:zepto/zepto.cookie.js
|   |   |...lem:components/com_base/jquery.proxy.js
|   |   |...lem:components/com_base/jsdeferred.js
|   |   |...lem:components/com_base/jsdeferred.zepto.js
|   |   |...lib:underscore/underscore.js
|   |   |...lib:underscore/underscore.string.js
|   |   |...lem:components/com_base/events.js
|   |...lem:components/com_base/api_host.js
|   |...lib:letv/widget.js
|   |...lem:air/util/Cookie.js
|   |...lem:components/com_header/channel.js
|   |   |...lem:components/player/mPlayer.js
|   |...lem:components/com_header/channel_v2.js
|   |   |...lem:components/com_header/scroll_nav_v.js
|   |   |   |...lib:iscroll.js
|   |   |...lem:air/env/ua.js
|   |   |...lem:components/util/mUa.js
|   |   |...lem:components/app/callApp.js
|   |   |   |...lem:components/app/open_app.js
|   |   |   |   |...lem:components/app/open_app_schema.js
|   |   |   |   |...lem:components/langPack/pub.js
|   |   |   |   |   |...lem:components/com_base/global.js
|   |   |   |   |...lem:air/util/Url.js
|   |   |   |   |...lem:components/tips/msTip.js
|   |   |   |   |...lem:components/tips/msTip_v2.js
|   |   |   |   |...lem:components/tips/msTip_v3.js
|   |...lem:components/com_base/islogin.js
|   |...lem:components/user/get_userinfo.js
|   |   |...lem:components/user/getUserInfo.js
|   |...lem:components/sendStat/sendSumStat.js
|   |   |...lem:components/com_base/ker.js
|   |...lem:components/sendStat/sendStat.js
|   |...lem:components/scroll/scrollUp.js
|   |   |...lem:components/util/img_load.js
|   |   |...lem:air/util/scrollTo.js
|   |...lem:components/search/search_simple.js
|   |...lem:components/sendStat/StatsInit.js
|   |   |...lem:sdk/stats/index.js
|   |   |   |...lem:sdk/stats/Stats.js
|   |   |   |   |...lem:sdk/stats/api_host.js
|   |   |   |...lem:sdk/stats/br.js
|   |   |   |...lem:sdk/stats/op.js
|   |   |   |...lem:sdk/stats/pv.js
|   |   |   |...lem:sdk/stats/env.js
|   |   |   |...lem:sdk/stats/lg.js
|   |   |   |...lem:sdk/stats/pvuv.js
|   |   |...lem:components/app/appPvReport.js
|   |   |   |...lem:components/app/apph5Adapter.js
|   |   |   |   |...lem:sdk/bridge/index.js
|   |   |   |   |   |...lem:sdk/bridge/base/cb.js
|   |   |   |   |   |   |...lem:sdk/bridge/base/listeners.js
|   |   |   |   |   |...lem:sdk/common/index.js
|   |   |   |   |   |   |...lem:sdk/common/decode.js
|   |   |   |   |   |   |   |...lem:sdk/common/md5.js
|   |   |   |   |   |   |   |...lem:sdk/common/base64.js
|   |   |   |   |   |...lem:sdk/bridge/app.js
|   |   |   |   |   |   |...lem:sdk/bridge/base/register.js
|   |   |   |   |   |...lem:sdk/bridge/user.js
|   |   |   |   |   |   |...lem:sdk/bridge/base/event.js
|   |   |   |   |   |...lem:sdk/bridge/video.js
|   |   |   |   |   |...lem:sdk/bridge/shake.js
|   |   |   |   |   |...lem:sdk/bridge/share.js
|   |   |   |   |   |...lem:sdk/bridge/alert.js
|   |   |   |   |   |...lem:sdk/bridge/device.js
|   |   |   |   |   |...lem:sdk/bridge/qrcode.js
|   |   |   |   |   |...lem:sdk/bridge/screen.js
|   |   |   |   |   |...lem:sdk/bridge/network.js
|   |   |   |   |   |...lem:sdk/bridge/browser.js
|   |   |   |   |   |...lem:sdk/bridge/gallery.js
|   |   |   |   |   |...lem:sdk/bridge/webview.js
|   |   |   |   |   |...lem:sdk/bridge/geolocation.js
|   |   |   |   |   |...lem:sdk/bridge/vip.js
|   |   |   |   |   |...lem:sdk/bridge/hasFeature.js
|   |   |   |   |   |...lem:sdk/bridge/gEvent.js
|   |   |   |   |...lem:components/share/share_base.js
|   |   |   |   |   |...lib:weixin.js
|   |   |   |   |   |...lem:sdk/share/index.js
|   |   |   |   |   |   |...lem:sdk/share/assign.js
|   |   |   |   |   |   |...lem:sdk/share/appShare.js
|   |   |   |   |   |   |...lem:sdk/share/url.js
|   |   |   |   |   |   |...lem:sdk/share/jsonp.js
|   |   |   |   |   |...lem:air/lang/extend.js
|   |   |   |   |...lem:components/share/share_ui_imitateApp.js
|   |   |   |   |   |...lem:components/util/events.js
|   |   |   |   |   |   |...lem:air/event/givee.js
|   |   |   |   |...lem:components/app/appAddList.js
|   |   |...lem:components/sendStat/com_stats.js
|   |   |   |...lem:components/stats/feStat.js
|   |   |   |...lem:components/stats/sendClickStat.js
|   |   |   |...lem:components/stats/sendBlockClick.js
|   |   |   |   |...lem:air/string/parseJSON.js
|   |   |   |...lem:components/stats/bindExposure.js
|   |   |   |   |...lem:air/util/ScrollTrigger.js
|   |...lem:components/app/home_open_app.js
|   |...lem:components/sendStat/msite_stat.js
|   |...lem:components/player/float_layer_ad.js
|   |...lem:components/com_banner/adRemove.js
*/
//乐视前端框架
/* === lib:letv/LTK.js === */
;this.LTK || function (global, undef) {
	
	//模块会全部挂在LTK上，嘿嘿
	var LTK = global.LTK = {
		version: '2.1'
	};
	
	var done = {}; //已经执行过的列表
	var require = function (id) {
		id.indexOf('/')>0 || (id = id.replace(/\./g, '/')); //所有的.引用全部变成/引用
		if (done.hasOwnProperty(id)) {
			return done[id];
		}
		var x = LTK[id];
		if (typeof x==='function') {
			done[id] = function () {}; //jiandan-cubao-di break circular dependency
			var module = {exports:{}};
			x = x(require, module.exports, module);
			x===undef && (x = module.exports);
		} else if (x===undef) {
			throw 'LTK error: module '+id+' is not found';
		}
		LTK[id] = null;
		return done[id] = x;
	};

	//打包工具会把require替换为require，为了保留LTK.require兼容老的，所以用LTK['require']
	//LTK.use也用来引用模块，但是打包工具不通过它分析模块依赖，
	//    并且它的参数必须是完整的模块路径，不能是相对路径
	LTK['require'] = LTK.use = global.require = require;
	
	//只为兼容
	global.define = function (id, value) {
		LTK[id] = value;
	};

}(this);

//项目用到的基础框架文件，zepto,undercore等
/* === lem:components/com_base/namespace.js === */
;window.le = window.le || {};
//for qa.js
window.LETV = window.LETV || {};
le.m = le.m || {}; 
le.v = le.v || {}; 
le.app = le.app || {}; 
le.msg = le.msg || {}; 
le.tpl = le.tpl || {}; 
le.evt = le.evt || {}; 
le._cb_ = le._cb_ || {};
//m站所有域名＋协议list
le.api_host = le.api_host || {};
// M站业务对象
le.__proto = le.__proto || {};
/* === lem:components/com_base/class.js === */
;le.inherits = function(childCtor, parentCtor) {
  
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  
  childCtor.prototype.constructor = childCtor;
};



le.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;

  if (caller.superClass_) {
    // This is a constructor. Call the superclass constructor.
    return caller.superClass_.constructor.apply(
        me, Array.prototype.slice.call(arguments, 1));
  }

  var args = Array.prototype.slice.call(arguments, 2);
  var foundCaller = false;
  for (var ctor = me.constructor;
       ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if (ctor.prototype[opt_methodName] === caller) {
      foundCaller = true;
    } else if (foundCaller) {
      return ctor.prototype[opt_methodName].apply(me, args);
    }
  }

  // If we did not find the caller in the prototype chain,
  // then one of two things happened:
  // 1) The caller is an instance method.
  // 2) This method was not called by the right caller.
  if (me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args);
  } else {
    throw Error(
        'base called from a method of one name ' +
        'to a method of a different name');
  }
};
/* === lib:zepto/zepto.js === */
;;(function(undefined){
  if (String.prototype.trim === undefined) // fix for iOS 3.2
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, '') }

  // For iOS 3.x
  // from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce
  if (Array.prototype.reduce === undefined)
    Array.prototype.reduce = function(fun){
      if(this === void 0 || this === null) throw new TypeError()
      var t = Object(this), len = t.length >>> 0, k = 0, accumulator
      if(typeof fun != 'function') throw new TypeError()
      if(len == 0 && arguments.length == 1) throw new TypeError()

      if(arguments.length >= 2)
       accumulator = arguments[1]
      else
        do{
          if(k in t){
            accumulator = t[k++]
            break;
          }
          if(++k >= len) throw new TypeError()
        } while (true)

      while (k < len){
        if(k in t) accumulator = fun.call(undefined, accumulator, t[k], k, t)
        k++
      }
      return accumulator
    }

})()

var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    getComputedStyle = document.defaultView.getComputedStyle,
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    classSelectorRE = /^\.([\w-]+)$/,
    idSelectorRE = /^#([\w-]*)$/,
    tagSelectorRE = /^[\w-]+$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div')

  zepto.matches = function(element, selector) {
    if (!element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype
  }
  function isArray(value) { return value instanceof Array }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
    if (!(name in containers)) name = '*'

    var nodes, dom, container = containers[name]
    container.innerHTML = '' + html
    dom = $.each(slice.call(container.childNodes), function(){
      container.removeChild(this)
    })
    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }
    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, juts return it
    else if (zepto.isZ(selector)) return selector
    else {
      var dom
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes. If a plain object is given, duplicate it.
      else if (isObject(selector))
        dom = [isPlainObject(selector) ? $.extend({}, selector) : selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector)
    }
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found
    return (isDocument(element) && idSelectorRE.test(selector)) ?
      ( (found = element.getElementById(RegExp.$1)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        classSelectorRE.test(selector) ? element.getElementsByClassName(RegExp.$1) :
        tagSelectorRE.test(selector) ? element.getElementsByTagName(selector) :
        element.querySelectorAll(selector)
      )
  }

  function filtered(nodes, selector) {
    return selector === undefined ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = function(parent, node) {
    return parent !== node && parent.contains(node)
  }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className,
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    var num
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) { return str.trim() }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      if (readyRE.test(document.readyState)) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = null)
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return html === undefined ?
        (this.length > 0 ? this[0].innerHTML : null) :
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        })
    },
    text: function(text){
      return text === undefined ?
        (this.length > 0 ? this[0].textContent : null) :
        this.each(function(){ this.textContent = text })
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && value === undefined) ?
        (this.length == 0 || this[0].nodeType !== 1 ? undefined :
          (name == 'value' && this[0].nodeName == 'INPUT') ? this.val() :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && setAttribute(this, name) })
    },
    prop: function(name, value){
      return (value === undefined) ?
        (this[0] && this[0][name]) :
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        })
    },
    data: function(name, value){
      var data = this.attr('data-' + dasherize(name), value)
      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return (value === undefined) ?
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(o){ return this.selected }).pluck('value') :
           this[0].value)
        ) :
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (this.length==0) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2 && typeof property == 'string')
        return this[0] && (this[0].style[camelize(property)] || getComputedStyle(this[0], '').getPropertyValue(property))

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      return this.each(function(idx){
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(){
      if (!this.length) return
      return ('scrollTop' in this[0]) ? this[0].scrollTop : this[0].scrollY
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    $.fn[dimension] = function(value){
      var offset, el = this[0],
        Dimension = dimension.replace(/./, function(m){ return m[0].toUpperCase() })
      if (value === undefined) return isWindow(el) ? el['inner' + Dimension] :
        isDocument(el) ? el.documentElement['offset' + Dimension] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var key in node.childNodes) traverseNode(node.childNodes[key], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          traverseNode(parent.insertBefore(node, target), function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

window.Zepto = Zepto
'$' in window || (window.$ = Zepto)

;(function($){
  function detect(ua){
    var os = this.os = {}, browser = this.browser = {},
      webkit = ua.match(/WebKit\/([\d.]+)/),
      android = ua.match(/(Android)\s+([\d.]+)/),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
      playbook = ua.match(/PlayBook/),
      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
      firefox = ua.match(/Firefox\/([\d.]+)/)

    // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes

    if (browser.webkit = !!webkit) browser.version = webkit[1]

    if (android) os.android = true, os.version = android[2]
    if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
    if (webos) os.webos = true, os.version = webos[2]
    if (touchpad) os.touchpad = true
    if (blackberry) os.blackberry = true, os.version = blackberry[2]
    if (bb10) os.bb10 = true, os.version = bb10[2]
    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
    if (playbook) browser.playbook = true
    if (kindle) os.kindle = true, os.version = kindle[1]
    if (silk) browser.silk = true, browser.version = silk[1]
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
    if (chrome) browser.chrome = true, browser.version = chrome[1]
    if (firefox) browser.firefox = true, browser.version = firefox[1]

    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)))
    os.phone  = !!(!os.tablet && (android || iphone || webos || blackberry || bb10 ||
      (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/))))
  }

  detect.call($, navigator.userAgent)
  // make available to unit tests
  $.__detect = detect

})(Zepto)

;(function($){
  var $$ = $.zepto.qsa, handlers = {}, _zid = 1, specialEvents={},
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eachEvent(events, fn, iterator){
    if ($.type(events) != "string") $.each(events, iterator)
    else events.split(/\s/).forEach(function(type){ iterator(type, fn) })
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (handler.e == 'focus' || handler.e == 'blur') ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || type
  }

  function add(element, events, fn, selector, getDelegate, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    eachEvent(events, fn, function(event, fn){
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = getDelegate && getDelegate(fn, event)
      var callback  = handler.del || fn
      handler.proxy = function (e) {
        var result = callback.apply(element, [e].concat(e.data))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    eachEvent(events || '', fn, function(event, fn){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    if ($.isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (typeof context == 'string') {
      return $.proxy(fn[context], fn)
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, callback){
    return this.each(function(){
      add(this, event, callback)
    })
  }
  $.fn.unbind = function(event, callback){
    return this.each(function(){
      remove(this, event, callback)
    })
  }
  $.fn.one = function(event, callback){
    return this.each(function(i, element){
      add(this, event, callback, null, function(fn, type){
        return function(){
          var result = fn.apply(element, arguments)
          remove(element, type, fn)
          return result
        }
      })
    })
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }
  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    $.each(eventMethods, function(name, predicate) {
      proxy[name] = function(){
        this[predicate] = returnTrue
        return event[name].apply(event, arguments)
      }
      proxy[predicate] = returnFalse
    })
    return proxy
  }

  // emulates the 'defaultPrevented' property for browsers that have none
  function fix(event) {
    if (!('defaultPrevented' in event)) {
      event.defaultPrevented = false
      var prevent = event.preventDefault
      event.preventDefault = function() {
        this.defaultPrevented = true
        prevent.call(this)
      }
    }
  }

  $.fn.delegate = function(selector, event, callback){
    return this.each(function(i, element){
      add(element, event, callback, selector, function(fn){
        return function(e){
          var evt, match = $(e.target).closest(selector, element).get(0)
          if (match) {
            evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
            return fn.apply(match, [evt].concat([].slice.call(arguments, 1)))
          }
        }
      })
    })
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.bind(event, selector || callback) : this.delegate(selector, event, callback)
  }
  $.fn.off = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.unbind(event, selector || callback) : this.undelegate(selector, event, callback)
  }

  $.fn.trigger = function(event, data){
    if (typeof event == 'string' || $.isPlainObject(event)) event = $.Event(event)
    fix(event)
    event.data = data
    return this.each(function(){
      // items in the collection might not be DOM elements
      // (todo: possibly support events on plain old objects)
      if('dispatchEvent' in this) this.dispatchEvent(event)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, data){
    var e, result
    this.each(function(i, element){
      e = createProxy(typeof event == 'string' ? $.Event(event) : event)
      e.data = data
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return callback ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  ;['focus', 'blur'].forEach(function(name) {
    $.fn[name] = function(callback) {
      if (callback) this.bind(name, callback)
      else this.each(function(){
        try { this[name]() }
        catch(e) {}
      })
      return this
    }
  })

  $.Event = function(type, props) {
    if (typeof type != 'string') props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true, null, null, null, null, null, null, null, null, null, null, null, null)
    event.isDefaultPrevented = function(){ return this.defaultPrevented }
    return event
  }

})(Zepto)

;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.defaultPrevented
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options){
    if (!('type' in options)) return $.ajax(options)

    var callbackName = 'jsonp' + (++jsonpID),
      script = document.createElement('script'),
      cleanup = function() {
        clearTimeout(abortTimeout)
        $(script).remove()
        delete window[callbackName]
      },
      abort = function(type){
        cleanup()
        // In case of manual abort or timeout, keep an empty function as callback
        // so that the SCRIPT tag that eventually loads won't result in an error.
        if (!type || type == 'timeout') window[callbackName] = empty
        ajaxError(null, type || 'abort', xhr, options)
      },
      xhr = { abort: abort }, abortTimeout

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return false
    }

    window[callbackName] = function(data){
      cleanup()
      ajaxSuccess(data, xhr, options)
    }

    script.onerror = function() { abort('error') }

    script.src = options.url.replace(/=\?/, '=' + callbackName)
    $('head').append(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    accepts: {
      script: 'text/javascript, application/javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data)
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {})
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
      RegExp.$2 != window.location.host

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)
    if (settings.cache === false) settings.url = appendQuery(settings.url, '_=' + Date.now())

    var dataType = settings.dataType, hasPlaceholder = /=\?/.test(settings.url)
    if (dataType == 'jsonp' || hasPlaceholder) {
      if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?')
      return $.ajaxJSONP(settings)
    }

    var mime = settings.accepts[dataType],
        baseHeaders = { },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(), abortTimeout

    if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest'
    if (mime) {
      baseHeaders['Accept'] = mime
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      baseHeaders['Content-Type'] = (settings.contentType || 'application/x-www-form-urlencoded')
    settings.headers = $.extend(baseHeaders, settings.headers || {})

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty;
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings)
          else ajaxSuccess(result, xhr, settings)
        } else {
          ajaxError(null, xhr.status ? 'error' : 'abort', xhr, settings)
        }
      }
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async)

    for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name])

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      return false
    }

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    var hasData = !$.isFunction(data)
    return {
      url:      url,
      data:     hasData  ? data : undefined,
      success:  !hasData ? data : $.isFunction(success) ? success : undefined,
      dataType: hasData  ? dataType || success : success
    }
  }

  $.get = function(url, data, success, dataType){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(url, data, success, dataType){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(url, data, success){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
      scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(k, v){ this.push(escape(k) + '=' + escape(v)) }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function ($) {
  $.fn.serializeArray = function () {
    var result = [], el
    $( Array.prototype.slice.call(this.get(0).elements) ).each(function () {
      el = $(this)
      var type = el.attr('type')
      if (this.nodeName.toLowerCase() != 'fieldset' &&
        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
        ((type != 'radio' && type != 'checkbox') || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        })
    })
    return result
  }

  $.fn.serialize = function () {
    var result = []
    this.serializeArray().forEach(function (elm) {
      result.push( encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value) )
    })
    return result.join('&')
  }

  $.fn.submit = function (callback) {
    if (callback) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.defaultPrevented) this.get(0).submit()
    }
    return this
  }

})(Zepto)

;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming,
    animationName, animationDuration, animationTiming,
    cssReset = {}

  function dasherize(str) { return downcase(str.replace(/([a-z])([A-Z])/, '$1-$2')) }
  function downcase(str) { return str.toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : downcase(name) }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + downcase(vendor) + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback){
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    return this.anim(properties, duration, ease, callback)
  }

  $.fn.anim = function(properties, duration, ease, callback){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd

    if (duration === undefined) duration = 0.4
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      }
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0) this.bind(endEvent, wrappedCallback)

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

/* === lib:zepto/zepto.data.js === */
;//     Zepto.js
//     (c) 2010-2012 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

// The following code is heavily inspired by jQuery's $.fn.data()

;(function($) {
  var data = {}, dataAttr = $.fn.data, camelize = $.camelCase,
    exp = $.expando = 'Zepto' + (+new Date())

  // Get value from node:
  // 1. first try key as given,
  // 2. then try camelized key,
  // 3. fall back to reading "data-*" attribute.
  function getData(node, name) {
    var id = node[exp], store = id && data[id]
    if (name === undefined) return store || setData(node)
    else {
      if (store) {
        if (name in store) return store[name]
        var camelName = camelize(name)
        if (camelName in store) return store[camelName]
      }
      return dataAttr.call($(node), name)
    }
  }

  // Store value under camelized key on node
  function setData(node, name, value) {
    var id = node[exp] || (node[exp] = ++$.uuid),
      store = data[id] || (data[id] = attributeData(node))
    if (name !== undefined) store[camelize(name)] = value
    return store
  }

  // Read all "data-*" attributes from a node
  function attributeData(node) {
    var store = {}
    $.each(node.attributes, function(i, attr){
      if (attr.name.indexOf('data-') == 0)
        store[camelize(attr.name.replace('data-', ''))] =
          $.zepto.deserializeValue(attr.value)
    })
    return store
  }

  $.fn.data = function(name, value) {
    return value === undefined ?
      // set multiple values via object
      $.isPlainObject(name) ?
        this.each(function(i, node){
          $.each(name, function(key, value){ setData(node, key, value) })
        }) :
        // get value from first element
        this.length == 0 ? undefined : getData(this[0], name) :
      // set value on all elements
      this.each(function(){ setData(this, name, value) })
  }

  $.fn.removeData = function(names) {
    if (typeof names == 'string') names = names.split(/\s+/)
    return this.each(function(){
      var id = this[exp], store = id && data[id]
      if (store) $.each(names, function(){ delete store[camelize(this)] })
    })
  }
})(Zepto)

/* === lib:zepto/touch.js === */
;//     Zepto.js
//     (c) 2010-2013 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary
  }

  $(document).ready(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body
    }

    $(document)
      .bind('MSGestureEnd', function(e){
        var swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe')
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
        }
      })
      .on('touchstart MSPointerDown', function(e){
        if(e.type == 'MSPointerDown' && !isPrimaryTouch(e)) return;
        firstTouch = e.type == 'MSPointerDown' ? e : e.touches[0]
        now = Date.now()
        delta = now - (touch.last || now)
        touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
        touchTimeout && clearTimeout(touchTimeout)
        touch.x1 = firstTouch.pageX
        touch.y1 = firstTouch.pageY
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
        touch.last = now
        longTapTimeout = setTimeout(longTap, longTapDelay)
        // adds the current touch contact for IE gesture recognition
        if (gesture && e.type == 'MSPointerDown') gesture.addPointer(e.pointerId);
      })
      .on('touchmove MSPointerMove', function(e){
        if(e.type == 'MSPointerMove' && !isPrimaryTouch(e)) return;
        firstTouch = e.type == 'MSPointerMove' ? e : e.touches[0]
        cancelLongTap()
        touch.x2 = firstTouch.pageX
        touch.y2 = firstTouch.pageY

        deltaX += Math.abs(touch.x1 - touch.x2)
        deltaY += Math.abs(touch.y1 - touch.y2)
      })
      .on('touchend MSPointerUp', function(e){
        if(e.type == 'MSPointerUp' && !isPrimaryTouch(e)) return;
        cancelLongTap()

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

          swipeTimeout = setTimeout(function() {
            touch.el.trigger('swipe')
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            touch = {}
          }, 0)

        // normal tap
        else if ('last' in touch)
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap')
              event.cancelTouch = cancelAll
              touch.el.trigger(event)

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                touch.el.trigger('doubleTap')
                touch = {}
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null
                  touch.el.trigger('singleTap')
                  touch = {}
                }, 250)
              }
            }, 0)
          } else {
            touch = {}
          }
          deltaX = deltaY = 0

      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel', cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })
})(Zepto)

/* === lib:zepto/zepto.cookie.js === */
;;(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		try {
			return decodeURIComponent(s.replace(pluses, ' '));
		} catch(e){}
		
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result==='deleted' ? '' : result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

})(Zepto);

/* === lem:components/com_base/jquery.proxy.js === */
;//jQuery api代理到zepto对应的方法列表
//wangxiang
window.jQuery = window.jQuery || {};
//for qa.js
jQuery.param = $.param;
LETV.cookie = $.cookie;
//.. for other
/* === lem:components/com_base/jsdeferred.js === */
;; // no warnings for uglify




window.Deferred = function() { return (this instanceof Deferred) ? this.init() : new Deferred() }

Deferred.ok = function (x) { return x };

Deferred.ng = function (x) { throw  x };
Deferred.prototype = {
	
	_id : 0xe38286e381ae,

	
	init : function () {
		this._next    = null;
		this.callback = {
			ok: Deferred.ok,
			ng: Deferred.ng
		};
		return this;
	},

	
	next  : function (fun) { return this._post("ok", fun) },

	
	error : function (fun) { return this._post("ng", fun) },

	
	call  : function (val) { return this._fire("ok", val) },

	
	fail  : function (err) { return this._fire("ng", err) },

	
	cancel : function () {
		(this.canceller || function () {}).apply(this);
		return this.init();
	},

	_post : function (okng, fun) {
		this._next =  new Deferred();
		this._next.callback[okng] = fun;
		return this._next;
	},

	_fire : function (okng, value) {
		var next = "ok";
		try {
			value = this.callback[okng].call(this, value);
		} catch (e) {
			next  = "ng";
			value = e;
			if (Deferred.onerror) Deferred.onerror(e);
		}
		if (Deferred.isDeferred(value)) {
			value._next = this._next;
		} else {
			if (this._next) this._next._fire(next, value);
		}
		return this;
	}
};

Deferred.isDeferred = function (obj) {
	return !!(obj && obj._id === Deferred.prototype._id);
};


Deferred.next_default = function (fun) {
	var d = new Deferred();
	var id = setTimeout(function () { d.call() }, 0);
	d.canceller = function () { clearTimeout(id) };
	if (fun) d.callback.ok = fun;
	return d;
};
Deferred.next_faster_way_readystatechange = ((typeof window === 'object') && (location.protocol == "http:") && !window.opera && /\bMSIE\b/.test(navigator.userAgent)) && function (fun) {
	// MSIE
	var d = new Deferred();
	var t = new Date().getTime();
	if (t - arguments.callee._prev_timeout_called < 150) {
		var cancel = false;
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src  = "data:text/javascript,";
		script.onreadystatechange = function () {
			if (!cancel) {
				d.canceller();
				d.call();
			}
		};
		d.canceller = function () {
			if (!cancel) {
				cancel = true;
				script.onreadystatechange = null;
				document.body.removeChild(script);
			}
		};
		document.body.appendChild(script);
	} else {
		arguments.callee._prev_timeout_called = t;
		var id = setTimeout(function () { d.call() }, 0);
		d.canceller = function () { clearTimeout(id) };
	}
	if (fun) d.callback.ok = fun;
	return d;
};
Deferred.next_faster_way_Image = ((typeof window === 'object') && (typeof(Image) != "undefined") && !window.opera && document.addEventListener) && function (fun) {
	// Modern Browsers
	var d = new Deferred();
	var img = new Image();
	var handler = function () {
		d.canceller();
		d.call();
	};
	img.addEventListener("load", handler, false);
	img.addEventListener("error", handler, false);
	d.canceller = function () {
		img.removeEventListener("load", handler, false);
		img.removeEventListener("error", handler, false);
	};
	img.src = "data:image/png," + Math.random();
	if (fun) d.callback.ok = fun;
	return d;
};
Deferred.next_tick = (typeof process === 'object' && typeof process.nextTick === 'function') && function (fun) {
	var d = new Deferred();
	process.nextTick(function() { d.call() });
	if (fun) d.callback.ok = fun;
	return d;
};
Deferred.next = 
	Deferred.next_faster_way_readystatechange ||
	Deferred.next_faster_way_Image ||
	Deferred.next_tick ||
	Deferred.next_default;


Deferred.chain = function () {
	var chain = Deferred.next();
	for (var i = 0, len = arguments.length; i < len; i++) (function (obj) {
		switch (typeof obj) {
			case "function":
				var name = null;
				try {
					name = obj.toString().match(/^\s*function\s+([^\s()]+)/)[1];
				} catch (e) { }
				if (name != "error") {
					chain = chain.next(obj);
				} else {
					chain = chain.error(obj);
				}
				break;
			case "object":
				chain = chain.next(function() { return Deferred.parallel(obj) });
				break;
			default:
				throw "unknown type in process chains";
		}
	})(arguments[i]);
	return chain;
};


Deferred.wait = function (n) {
	var d = new Deferred(), t = new Date();
	var id = setTimeout(function () {
		d.call((new Date()).getTime() - t.getTime());
	}, n * 1000);
	d.canceller = function () { clearTimeout(id) };
	return d;
};


Deferred.call = function (fun) {
	var args = Array.prototype.slice.call(arguments, 1);
	return Deferred.next(function () {
		return fun.apply(this, args);
	});
};


Deferred.parallel = function (dl) {
	var isArray = false;
	if (arguments.length > 1) {
		dl = Array.prototype.slice.call(arguments);
		isArray = true;
	} else if (Array.isArray && Array.isArray(dl) || typeof dl.length == "number") {
		isArray = true;
	}
	var ret = new Deferred(), values = {}, num = 0;
	for (var i in dl) if (dl.hasOwnProperty(i)) (function (d, i) {
		if (typeof d == "function") dl[i] = d = Deferred.next(d);
		d.next(function (v) {
			values[i] = v;
			if (--num <= 0) {
				if (isArray) {
					values.length = dl.length;
					values = Array.prototype.slice.call(values, 0);
				}
				ret.call(values);
			}
		}).error(function (e) {
			ret.fail(e);
		});
		num++;
	})(dl[i], i);

	if (!num) Deferred.next(function () { ret.call() });
	ret.canceller = function () {
		for (var i in dl) if (dl.hasOwnProperty(i)) {
			dl[i].cancel();
		}
	};
	return ret;
};


Deferred.earlier = function (dl) {
	var isArray = false;
	if (arguments.length > 1) {
		dl = Array.prototype.slice.call(arguments);
		isArray = true;
	} else if (Array.isArray && Array.isArray(dl) || typeof dl.length == "number") {
		isArray = true;
	}
	var ret = new Deferred(), values = {}, num = 0;
	for (var i in dl) if (dl.hasOwnProperty(i)) (function (d, i) {
		d.next(function (v) {
			values[i] = v;
			if (isArray) {
				values.length = dl.length;
				values = Array.prototype.slice.call(values, 0);
			}
			ret.call(values);
			ret.canceller();
		}).error(function (e) {
			ret.fail(e);
		});
		num++;
	})(dl[i], i);

	if (!num) Deferred.next(function () { ret.call() });
	ret.canceller = function () {
		for (var i in dl) if (dl.hasOwnProperty(i)) {
			dl[i].cancel();
		}
	};
	return ret;
};



Deferred.loop = function (n, fun) {
	var o = {
		begin : n.begin || 0,
		end   : (typeof n.end == "number") ? n.end : n - 1,
		step  : n.step  || 1,
		last  : false,
		prev  : null
	};
	var ret, step = o.step;
	return Deferred.next(function () {
		function _loop (i) {
			if (i <= o.end) {
				if ((i + step) > o.end) {
					o.last = true;
					o.step = o.end - i + 1;
				}
				o.prev = ret;
				ret = fun.call(this, i, o);
				if (Deferred.isDeferred(ret)) {
					return ret.next(function (r) {
						ret = r;
						return Deferred.call(_loop, i + step);
					});
				} else {
					return Deferred.call(_loop, i + step);
				}
			} else {
				return ret;
			}
		}
		return (o.begin <= o.end) ? Deferred.call(_loop, o.begin) : null;
	});
};



Deferred.repeat = function (n, fun) {
	var i = 0, end = {}, ret = null;
	return Deferred.next(function () {
		var t = (new Date()).getTime();
		do {
			if (i >= n) return null;
			ret = fun(i++);
		} while ((new Date()).getTime() - t < 20);
		return Deferred.call(arguments.callee);
	});
};


Deferred.register = function (name, fun) {
	this.prototype[name] = function () {
		var a = arguments;
		return this.next(function () {
			return fun.apply(this, a);
		});
	};
};

Deferred.register("loop", Deferred.loop);
Deferred.register("wait", Deferred.wait);


Deferred.connect = function (funo, options) {
	var target, func, obj;
	if (typeof arguments[1] == "string") {
		target = arguments[0];
		func   = target[arguments[1]];
		obj    = arguments[2] || {};
	} else {
		func   = arguments[0];
		obj    = arguments[1] || {};
		target = obj.target;
	}

	var partialArgs       = obj.args ? Array.prototype.slice.call(obj.args, 0) : [];
	var callbackArgIndex  = isFinite(obj.ok) ? obj.ok : obj.args ? obj.args.length : undefined;
	var errorbackArgIndex = obj.ng;

	return function () {
		var d = new Deferred().next(function (args) {
			var next = this._next.callback.ok;
			this._next.callback.ok = function () {
				return next.apply(this, args.args);
			};
		});

		var args = partialArgs.concat(Array.prototype.slice.call(arguments, 0));
		if (!(isFinite(callbackArgIndex) && callbackArgIndex !== null)) {
			callbackArgIndex = args.length;
		}
		var callback = function () { d.call(new Deferred.Arguments(arguments)) };
		args.splice(callbackArgIndex, 0, callback);
		if (isFinite(errorbackArgIndex) && errorbackArgIndex !== null) {
			var errorback = function () { d.fail(arguments) };
			args.splice(errorbackArgIndex, 0, errorback);
		}
		Deferred.next(function () { func.apply(target, args) });
		return d;
	};
};

Deferred.Arguments = function (args) { this.args = Array.prototype.slice.call(args, 0) };


Deferred.retry = function (retryCount, funcDeferred, options) {
	if (!options) options = {};

	var wait = options.wait || 0;
	var d = new Deferred();
	var retry = function () {
		var m = funcDeferred(retryCount);
		m.
			next(function (mes) {
				d.call(mes);
			}).
			error(function (e) {
				if (--retryCount <= 0) {
					d.fail(['retry failed', e]);
				} else {
					setTimeout(retry, wait * 1000);
				}
			});
	};
	setTimeout(retry, 0);
	return d;
};


Deferred.methods = ["parallel", "wait", "next", "call", "loop", "repeat", "chain"];

Deferred.define = function (obj, list) {
	if (!list) list = Deferred.methods;
	if (!obj)  obj  = (function getGlobal () { return this })();
	for (var i = 0; i < list.length; i++) {
		var n = list[i];
		obj[n] = Deferred[n];
	}
	return Deferred;
};

this.Deferred = Deferred;


/* === lem:components/com_base/jsdeferred.zepto.js === */
;Deferred.get = function(url){
	var d = Deferred();
	$.get(url,function(data){
		d.call(_.isString(data) ? $.parseJSON(data) : data);
	});	
	return d;
};


Deferred.post = function(url,params){
	params = params || {};
	var d = Deferred();
	$.post(url, params, function(data){
		d.call(_.isString(data) ? $.parseJSON(data) : data);
	});	
	return d;
};


Deferred.jsonp = function(url,jsonp){
	jsonp = jsonp || 'callback'; 
	
	if(url.indexOf(jsonp) == -1){
		url += ( url.indexOf('?') == -1 ? '?' + jsonp + '=?' : '&' + jsonp + '=?');
	}

	var d = Deferred();
	$.getJSON(url, function(data){
  		d.call(_.isString(data) ? $.parseJSON(data) : data);
	});
	return d;
};

/* === lib:underscore/underscore.js === */
;// Underscore.js 1.4.4
// ===================

// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.

// Baseline setup
// --------------
(function() {

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? null : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

})();

/* === lib:underscore/underscore.string.js === */
;//  fork from 
//  Underscore.string
//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
//  Underscore.string is freely distributable under the terms of the MIT license.
//  Documentation: https://github.com/epeli/underscore.string
//  Some code is borrowed from MooTools and Alexandru Marasteanu.
//  Version '2.3.2'
//  By Wangxiang

!function(root, String){
  // Defining underscore.string

  var _s = {

    VERSION: '0.0.1',
    //http://tangram.baidu.com/api#baidu.string().getByteLength()
	getByteLength : function (str) {
	        return str.replace(/[^\x00-\xff]/g, 'ci').length;
	},
    truncate: function(str, len, suffix){
        if(!suffix) suffix =  "..";
        if (this.getByteLength(str) <= len) return str;
        
        var s = str.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**");
        str = str.slice(0, s.slice(0, len).replace(/\*\*/g, " ").replace(/\*/g, "").length);
        //wangxiang 2010-12-24  如果后缀为空，不需要减少一个字符。
        str = str.slice(0, str.length - (suffix === "" ? 0 : 1)) + suffix;
        return str;
    }
	
  };

 

  // Exporting

  // CommonJS module is defined
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      module.exports = _s;

    exports._s = _s;
  }

  // Integrate with Underscore.js if defined
  // or create our own underscore object.
  root._ = root._ || {};
  root._.string = root._.str = _s;
}(this, String);

/* === lem:components/com_base/events.js === */
;le.evt.EventBase =  function(){
	this.handlers = {};
}

_.extend(le.evt.EventBase.prototype,{
	constructor: le.evt.EventBase,
	on: function(type, handler){
		if ( _.isUndefined(this.handlers[type]) ){
			this.handlers[type] = [];
		}
		this.handlers[type].push(handler);
	},
	fire: function(event){
		if (!event.target){
			event.target = this;
		}
		if ( _.isArray(this.handlers[event.type]) ){
			var handlers = this.handlers[event.type];
			for (var i=0, len=handlers.length; i < len; i++){
				handlers[i](event);
			}
		}
	},
	un: function(type, handler){
		if ( _.isArray(this.handlers[type])) {
			var handlers = this.handlers[type];
			for (var i=0, len=handlers.length; i < len; i++){
				if (handlers[i] === handler){
					break;
				}
			}
			handlers.splice(i, 1);
		}
	}
});

le.evt.pageEvent = new le.evt.EventBase;

/* === lem:components/index/index.js === */
;
//添加项目用到的接口所有域名和协议文件
/* === lem:components/com_base/api_host.js === */
;window.le = window.le || {};
var cur_api_host = location.host.indexOf('le.com') > -1 ? 'le.com' : 'letv.com';
le.api_host = {
    m: '//m.' + cur_api_host,
    my: '//my.' + cur_api_host,
    so: 'so.letv.com',
    dc: '//apple.www.letv.com', // "dc.letv.com" 域名下的参数可以不需修改直接平移到"//apple.www.letv.com"
    api: '//api.' + cur_api_host,
    ark: '//ark.letv.com',
    rec: '//rec.letv.com',
    bbs: '//bbs.letv.com',
    www: '//www.' + cur_api_host,
    host: 'm.' + cur_api_host,
    main: location.host.split('.').slice(-2).join('.'),
    stat: '//stat.letv.com',
    zhifu: '//zhifu.' + cur_api_host,
    app_m: '//app.m.letv.com',
    d_api: '//d.api.m.' + cur_api_host,
    s_api: '//s.api.m.' + cur_api_host,
    hd_my: '//hd.my.' + cur_api_host,
    fe_go: '//fe.go.letv.com',
    le_so: '//le.so.' + cur_api_host,
    m_href: '//m.' + cur_api_host,
    api_my: '//api.my.' + cur_api_host,
    v_stat: '//v.stat.letv.com',
    lechou: '//lechou.letv.com',
    zsm_hz: '//zsm.hz.letv.com',
    data_so: '//data.so.letv.com',
    api_app: '//api.app.' + cur_api_host,
    yuanxian: '//yuanxian.' + cur_api_host,
    api_live: '//api.live.letv.com',
    minisite: '//minisite.' + cur_api_host,
    touch_my: '//touch.my.letv.com',
    jifen_my: '//jifen.my.' + cur_api_host,
    leho_api: '//api.leho.le.com',
    player_hz: '//player.hz.letv.com',
    live_gslb: '//live.gslb.' + cur_api_host,
    sso_http: '//sso.' + cur_api_host,
    sso_https: 'https://sso.' + cur_api_host,
    api_zhifu: '//api.zhifu.' + cur_api_host,
    apple_www: '//apple.www.letv.com',
    n_api_live: '//n.api.live.letv.com',
    static_api: '//static.api.' + cur_api_host,
    cdn_api_my: '//cdn.api.my.' + cur_api_host,
    package_my: '//package.my.' + cur_api_host,
    dynamic_api: '//dynamic.api.' + cur_api_host,
    hk_api_zhifu: '//hk.api.zhifu.' + cur_api_host,
    upload_app_m: '//upload.app.m.letv.com',
    activity_zhifu: '//activity.zhifu.' + cur_api_host,
    static_api_sports: '//static.api.sports.letv.com',
    dynamic_pay_app_m: '//dynamic.pay.app.m.' + cur_api_host
};
/* === lib:letv/widget.js === */
;!(function() {
    var $ = window.$,
        slice = [].slice,
        blankFn = function() {},

        // 挂到组件类上的属性、方法
        staticlist = [ 'options', 'template', 'tpl2html' ],

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
        })();

    function isPlainObject( obj ) {
        return Object.prototype.toString.call( obj ) === '[object Object]';
    }

    // 遍历对象
    function eachObject( obj, iterator ) {
        obj && Object.keys( obj ).forEach(function( key ) {
            iterator( key, obj[ key ] );
        });
    }

    function eachEvent( events, callback, iterator ) {

        (events || '').split( /\s+/ ).forEach(function( type ) {
            iterator( type, callback );
        });
    }

    function matcherFor( ns ) {
        return new RegExp( '(?:^| )' + ns.replace( ' ', ' .* ?' ) + '(?: |$)' );
    }

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

    function parseData( data ) {
        try {
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
                obj = record( el, name ) || new widget[ name ]( el,
                        isPlainObject( opts ) ? opts : undefined );

                // 取实例
                if ( method === 'this' ) {
                    ret = obj;
                    return false;    // 断开each循环
                } else if ( method ) {

                    // 当取的方法不存在时，抛出错误信息
                    if ( !$.isFunction( obj[ method ] ) ) {
                        throw new Error( method );
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

    function bootstrap( name, klass, uid, el, options ) {
        var me = this,
            opts;

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
            superClass = base;
        }

        var uuid = 1,
            suid = 1;

        function klass( el, options ) {

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

                obj.options && (this.options = mergeObj( this.options, obj.options ));

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

    var event = {
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

        trigger: function( name ) {
            var i = -1,
                args,
                events,
                len,
                ev;

            if ( !this._events || !name ) {
                return this;
            }

            args = [ name ].concat( slice.call( arguments, 1 ) );

            // events = this._events[ name ];
            events = findHandlers( this._events, name );

            if ( events ) {
                len = events.length;

                while ( ++i < len ) {
                    (ev = events[ i ]).cb.apply( ev.ctx2, args );
                }
            }

            return this;
        }
    };
    
    var base = createClass( 'Base', {
        _init: blankFn,

        _create: blankFn,

        getEl: function() {
            return this.$el;
        },
        
        on: event.on,

        one: event.one,
        
        off: event.off,

        trigger: function( name ) {
            var args = [ name ].concat( slice.call( arguments, 1 ) ),

                // 先存起来，否则在下面使用的时候，可能已经被destory给删除了。
                $el = this.getEl();

            event.trigger.apply( this, args );

            $el && $el.triggerHandler( name, (args.shift(), args) );

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

    
    var widget = $.widget = function( name, object, superClass ) {
        widget[ name ] = createClass( name, object, superClass );
        zeptolize( name );
        return widget[ name ];
    };

    $( function() {
        $( "[widget]" ).each( function( idx, item ) {
            var elem = $( item ),
                cls = elem.attr( 'widget' );

            elem[cls] && elem[ cls ].call( elem );
        } );
    } );
})();
/* === lem:air/util/Cookie.js === */
;Cookie = {
		
		set: function(name, value, opt){
			opt || (opt = {});
			var t = new Date(), exp = opt.exp;
			if(typeof exp==='number'){
				t.setTime(t.getTime() + exp*3600000); //60m * 60s * 1000ms
			}else if(exp==='forever'){
				t.setFullYear(t.getFullYear()+50); //专业种植cookie 50年
			}else if(value===null){ //删除cookie
				value = '';
				t.setTime(t.getTime() - 3600000);
			}else if(exp instanceof Date){ //传的是一个时间对象
				t = exp;
			}else{
				t = '';
			}
			document.cookie = name+'='+encodeURIComponent(value)+(t && '; expires='+t.toUTCString())+
				'; domain='+(opt.domain || document.domain)+'; path='+(opt.path || '/')+(opt.secure ? '; secure' : '');
		},
		
		get: function(name){
			name += '=';
			var cookies = (document.cookie || '').split(';'),
				cookie,
				nameLength = name.length,
				i = cookies.length;
			while(i--){
				cookie = cookies[i].replace(/^\s+/,'');
				if(cookie.slice(0,nameLength)===name){
					return decodeURIComponent(cookie.slice(nameLength)).replace(/\s+$/,'');
				}
			}
			return '';
		}
	};

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
/* === lem:components/com_header/channel.js === */
;(LTK["components/com_header/channel"] = function(require){
	var player = require('components/player/mPlayer');
	var channel = {
		init: function(){
			this._initDom();
			this._initEvent();
		},
		_status: 'hide',
		_initDom: function(){
			this._doc = $(document);
			this._menu = $('#j-channel-panel');
			this._btn = $('a[data-action="channel"]');
		},
		_initEvent: function(){
			var _self = this;
			this._doc.on('touchstart click ',_.bind(this._hide,this));

			$('.right').on('touchstart click',function(e){e.stopPropagation();});

			this._btn.on('click',_.bind(this._toggle,this))
			.on('touchstart click',function(e){e.stopPropagation()});

			this._menu.on('touchstart click ',function(e){e.stopPropagation()});

			$(window).on('ortchange', _.bind(this._change,this));
			if(typeof window.__canControlPlayer ==='undefined') {
				window.__canControlPlayer = true;
			}
		},
		_toggle: function(e){
			e.stopPropagation();
			e.preventDefault();
			if(this._status == 'hide'){
				this._show();
			}else{
				this._hide();
			}
		},
		_change: function(){
			//如果导航面板正在展示，顶部导航隐藏，则执行隐藏导航面板
			if(this._status == 'show' && $('#j-header').css('display') == 'none'){
				this._hide();
			}
		},
		_show: function(){
			this._menu.removeClass('f-hide');
			this._btn.addClass('hover');
			player.hide();
			this._status = 'show';
		},
		_hide: function(){
			this._menu.addClass('f-hide');
			this._btn.removeClass('hover');
			player.show();
			this._status = 'hide';
		}
	};
	channel.init();
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

/* === lem:components/com_header/scroll_nav_v.js === */
;(LTK["components/com_header/scroll_nav_v"] = function(require,exports, module){

	function scroll_nav_v(className){
		
		if(!className){
			return;
		}

		this.cname = className;

		this._initDom();

		this._initEvent();

	}

	scroll_nav_v.prototype={

		

		_initDom: function(){

			this._pdNav     = $('.pd_nav');
			this._headBox   = $('.headBox');
			this._wrapper   = $('.'+this.cname);
			this._scroller  = $('.scroller');
			this._downBtn   = $('.arrow-bottom');
			this._firstUl   = $('.'+this.cname+' ul:nth-child(1)');
			this._secondDiv = this._scroller.find("div");
			this._thirdUl   = $('.'+this.cname+' ul:nth-child(3)');
			this._ifScroll  = false; //是否初始化scroll

		},

		_initEvent: function(){

			this._fixHeight();
			
			this._navTouchstart();

			this._checkScroll();

		},

		

		_checkScroll: function(){

			if(this._ifScroll){

				this._horizontalScroll();

	    		this._downBtn.show();

	    		this._hideLastLine();

		    }else{

		    	this._downBtn.hide();

		        this._show();

		    }

		},

		

		_fixHeight: function(){

			var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			    
			    headBoxHeight = this._headBox.height(),
			    scrollerHeight = this._scroller.height(),
	            wrapperHeight2 = screenHeight - headBoxHeight + 2;
	        
		    this._pdNav.height(wrapperHeight2);
		    this._wrapper.height(wrapperHeight2);

		    if(scrollerHeight > wrapperHeight2){
		    	this._ifScroll = true;
		    }else{
		    	this._ifScroll = false;
		    }

		},

		
		_hideLastLine: function(){
			var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			    screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			    headBoxHeight = this._headBox.height(),
	            wrapperHeight = screenHeight - headBoxHeight - this._downBtn.height(),
			    liHeight = this._wrapper.find('li').height() + parseFloat(this._wrapper.find('li').css('margin-top')),
			    ulHCount = parseInt(screenWidth / this._wrapper.find('li').width()),
			    count;
			
			if(wrapperHeight <= this._firstUl.height()){

				count = parseInt(wrapperHeight / liHeight) * ulHCount;
				this._firstUl.find('li').slice(count).css('visibility','hidden');
				this._secondDiv.css('visibility','hidden');
				this._thirdUl.find('li').css('visibility','hidden');

			}else if(wrapperHeight <= (this._firstUl.height() + this._secondDiv.height() + parseFloat(this._secondDiv.css('margin-top')) * 2)){

				this._secondDiv.css('visibility','hidden');
				this._thirdUl.find('li').css('visibility','hidden');

			}else{
				
				count = parseInt((wrapperHeight - this._firstUl.height() - this._secondDiv.height() - parseFloat(this._secondDiv.css('margin-top')) * 2) / liHeight) * ulHCount;
				this._thirdUl.find('li').slice(count).css('visibility','hidden');

			}	
		},

		_show: function(){

			this._firstUl.find('li').css('visibility','visible');
			this._secondDiv.css('visibility','visible');
			this._thirdUl.find('li').css('visibility','visible');

		},


		

		_size: function(){

			this._show();
			if(this.navScroll){
				this._downBtn.show();
				this._hideLastLine();
				//重绘滚动条
			    this.navScroll.refresh();
				
				var liMT = parseFloat(this._wrapper.find('li').css('margin-top'));

	    		this.navScroll.scrollToElement(document.querySelector('.'+this.cname+' li:nth-child(1)'),null,null,-liMT);

	    	}else{

				this._checkScroll();
				
	    	}

	    	this._fixHeight();
	    	
		},

		

		_navTouchstart: function(){

			this._pdNav.on('touchstart', _.bind(this._resize,this));

		},

		_resize: function(){

			if(this.navScroll){

				this._downBtn.hide();
				this._show();

			}
		},

		

		_horizontalScroll: function(){

			this.navScroll = new IScroll('.'+this.cname, {

				scrollbars: 'custom',
				click: true,
				disableMouse: true,
				disablePointer: true,
				useTransition: false,
				mouseWheel: true,
				fixedScrollbar: true

			});

		},

		
		_scrollDestroy: function(){
			if(this.navScroll){

				var liMT = parseFloat(this._wrapper.find('li').css('margin-top'));

				this.navScroll.scrollToElement(document.querySelector('.'+this.cname+' li:nth-child(1)'),null,null,-liMT);

				this.navScroll.destroy();
				this.navScroll = null;
			}
		}

	}
	

	module.exports = scroll_nav_v;
	
})
	
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

/* === lem:components/util/mUa.js === */
;(LTK["components/util/mUa"] = function (require, exports, module) {
    'use strict';
    var MUA = {
    	
        isApp: function () {
            // 乐视视频APP,乐视行车记录仪,乐视体育APP,乐无限APP(合作)
            var apps = ['letvclient', 'letvmobileclient', 'leautocamera', 'lesports', 'cn.hi.wifi', 'foxconn.hi.wifi'];
            var isapp = this.checkInMind(apps);
            return isapp;
        },

        
        checkInMind: function (appUAs) {
            var arr = appUAs || [];
            var userAgent = navigator.userAgent.toLowerCase();
            var item = '';
            for (var i = 0; i < arr.length; i++) {
                item = arr[i];
                if (item && userAgent.indexOf(item) > -1) {
                    return true;
                }
            }
            return false;
        }
    };
     module.exports = MUA;
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
/* === lem:components/app/callApp.js === */
;(LTK["components/app/callApp"] = function (require, exports, module) {
    'use strict';
    var ua = require('air/env/ua');
    var CallApp = {
        
        call: function (config) {
            var mplat = ua.letvMobile ? 'lingxian' : (ua.android ? 'android' : 'ios');
            var browser = (Stats && Stats.BR) ? Stats.BR : 'letv';
            var position = config.position || 'home';
            var defaults = {
                'app': 'letv',
                'url': le.api_host.app_m + '/download_general.php?ref=010110678',
                'wxUrl': 'http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632',
                'from': 'm_' + mplat + '_' + browser + '_' + position,
                'type': 'home'
            };
            var settings = $.extend(defaults, config.daoliuConfig);
            this.openApp(settings);
        },

        
        openApp: function (config) {
            __openApp._bindDefaultAppEvent(config);
        }
    };
    module.exports = CallApp;
});
/* === lem:components/com_header/channel_v2.js === */
;(LTK["components/com_header/channel_v2"] = function(require){
	var player = require('components/player/mPlayer');
	// 频道墙滚动条 wanghui 20160329
	var ScrollNavV = require('components/com_header/scroll_nav_v');
	var ua = require('air/env/ua');
	var mUa = require('components/util/mUa');
    var daoliuApp = require('components/app/callApp');
	var channel = {
		init: function(){
			this._initDom();
			this._initEvent();
			// 如果node静态化的页面，需要删除特定导航
			if (window.info && info.ua) {
				if (info.ua.ios) {
					this._menu.find('.j-android').hide();
				} else if (info.ua.android) {
					this._menu.find('.j-ios').hide();
				}
				// 找到当前页，添加active
				var as = this._menu.find('a'), pathname = location.pathname;
				for (var i = 0, len = as.length; i<len; i++) {
					if (as[i].href===pathname) {
						as[i].parentNode.className = 'active';
						break;
					}
				}
			}
			// 乐视生态app webview内去掉顶导航频道墙的"乐视生态成员"
			if(mUa.isApp()){
				var $shengtaiNav = $('#j-channel-panel .shengtaiNav');
                $shengtaiNav.next('.channel_nav').remove();
                $shengtaiNav.remove();
			}
		},
		_status: 'hide',
		_initDom: function(){
			this._doc = $(document);
			this._menu = $('#j-channel-panel');
			this._btn = $('span[data-action="channel"]');
		},
		_initEvent: function(){
			var _self = this;

			//JS 频道墙按钮曝光上报
            if (this._btn.length) {
				Stats.sendAction({
				    ap: 'ch=msite&pg=index&bk=pindaoqiang&link=pindaoqiangbutton',
				    acode: '41'
				});
			}
			this._btn.on('touchstart',function(){
				//JS 频道墙按钮点击上报
				Stats.sendAction({
				    ap: 'ch=msite&pg=index&bk=pindaoqiang&link=pindaoqiangbutton'
				});
				
				if(!$(this).hasClass("hover")){
					//JS 频道墙曝光上报
					Stats.sendAction({
						ap: 'ch=msite&pg=index&bk=pindaoqiang&link=pindaoqiangchannel',
						acode: '41'
					});
				}
			});

			//JS 频道墙li点击上报
			$(".channel_nav").on('click', function (e) {
				var ap;
				if (e.target.tagName.toLowerCase() === 'a') {
					//app下载单独上报
					if ($(e.target).html() === 'APP下载') {
						ap = 'msite_channellist_leeco_click';
						_self.onOpenApp({
							wxUrl: $(e.target).attr('tagurl'),
							url: $(e.target).attr('data-href')
						});
						Stats.sendAction({
							ap: ap
						});
					} else {
						ap = 'ch=msite&pg=index&bk=pindaoqiang&link=pindaoqiangchannel';
						Stats.sendAction({
							ap: ap
						}, $(e.target).attr('data-href'));
					}
				}
			});

			this._doc.on('touchstart click',_.bind(this._hide,this));

			// $('.userBox').on('touchstart click',function(e){e.stopPropagation();});

			this._btn.on('click',_.bind(this._toggle,this))
			.on('touchstart click',function(e){e.stopPropagation();});

			this._menu.on('touchstart click',function(e){e.stopPropagation()});

			//引用  __req('lib::gmu/zepto.extend.js'); 会与部分页面懒加载图片引入重复，
			//导致播放页横竖屏切换失效，所以改用原生JS
			//$(window).on('ortchange', _.bind(this._change,this));
			window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(){
				_self._change();
			}, false);


			if(typeof window.__canControlPlayer ==='undefined') {
				window.__canControlPlayer = true;
			}
		},

		
		onOpenApp: function (config) {
			var mplat = ua.letvMobile ? 'lingxian' : (ua.android ? 'android' : 'ios');
			var browser = (Stats && Stats.BR) ? Stats.BR : 'letv';
			var position = 'channellist';
			daoliuApp.call({
            	daoliuConfig: {
        		 	'url': config.url,
					'wxUrl': config.wxUrl,
					'from': 'm_' + mplat + '_' + browser + '_' + position,
            	}
            });
		},

		//默认事件
		_onBackgroundTouch:function(event){
			event.preventDefault();
		},
		_toggle: function(e){
			//console.log(e.target);
			e.stopPropagation();
			e.preventDefault();
    		if(this._status == 'hide'){
				this._show();
			}else{
				this._hide();
			}
		},
		_change: function(){
			//如果导航面板正在展示，顶部导航隐藏，则执行隐藏导航面板
			if(this._status == 'show'){
				this._hide();
			}
		},
		_show: function(){
			//JS 频道墙显示隐藏 绑定与取消默认事件
			$("body").on("touchmove",".pd_nav",$.proxy(this._onBackgroundTouch, this));

			this._menu.removeClass('f-hide');
			this._btn.addClass('hover');
			this._btn.last().removeClass('icon_darrow').addClass('icon_uarrow');
			player.hide();
			this._status = 'show';

			//频道墙滚动条
			if(!this._initScroll){
				this._initScroll = new ScrollNavV('wrapper');
			}else{
				this._initScroll._fixHeight();
				if(this._initScroll._ifScroll){
					
		    		this._initScroll._downBtn.show();
					this._initScroll._size();
			    }else{
					this._initScroll._scrollDestroy();
			    	this._initScroll._downBtn.hide();
			    	this._initScroll._show();
			    }
			}
			//屏幕尺寸变化后，重新取值计算滚动条尺寸
			$(window).on('resize', _.bind(this._onResize,this));

		},
		_hide: function(){
			//JS 频道墙显示隐藏 绑定与取消默认事件
			$("body").off("touchmove",".pd_nav",$.proxy(this._onBackgroundTouch, this));
			//屏幕尺寸变化后，重新取值计算滚动条尺寸
			if(this._initScroll){
				$(window).off('resize', _.bind(this._onResize,this));
			}
			
			this._menu.addClass('f-hide');
			this._btn.removeClass('hover');
			this._btn.last().removeClass('icon_uarrow').addClass('icon_darrow');
			player.show();
			this._status = 'hide';
		},

		_onResize: function(){
			this._initScroll._size();
		}
	};
	channel.init();
});

/* === lem:components/com_base/islogin.js === */
;le.m.userCenter = {
    
    openLoginPage: function (config) {
        if (window.LEPass) {
            var settings = $.extend({
                plat: 'msite'
            }, config);
            window.LEPass.openLoginPage(location.href, '_self', settings);
        } else {
            var language = config.language || 'zh_CN';
            location.href = le.api_host.sso_http + '/user/mloginHome?plat=msite&language=' + language + '&next_action=' + encodeURIComponent(location.href);
        }
    },

    
    openRegisterPage: function () {
        if (window.LEPass) {
            window.LEPass.openRegisterPage(location.href, '_self', {
                plat: 'msite'
            });
        } else {
            location.href = le.api_host.sso_http + '/user/mmobileReg?plat=msite&next_action=' + encodeURIComponent(location.href);
        }
    },

    
    logOut: function () {
        if (window.LEPass) {
            window.LEPass.logOut(function () {
                location.href = le.api_host.m;
            });
        } else {
            $.ajax({
                url: 'http://sso.le.com/user/loginout?jsonp=?',
                success: function () {
                    location.href = le.api_host.m;
                }
            });
        }
    },

    
    isLogin: function(){
        if (window.LEPass) {
            return window.LEPass.isLogin();
        } else {
            return !!Cookie.get('ssouid');
        }
    }
};


le.m.isLogin = function () {
    return le.m.userCenter.isLogin();
};


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

/* === lem:components/user/get_userinfo.js === */
;(LTK["components/user/get_userinfo"] = function(require){
	function _getUserInfo(user) {
		if (user && user.headicon) {
			if($('.icon_user_in1').length){
				$('.icon_user_in1').css('visibility','visible').find('img').attr('src', user.headicon);
			}else{
				$('.h-login-in').show().find('img').attr('src', user.headicon);
			}
		}
	}
	// 使用node静态化页面后，页面上有#history
	function got(user) {
		if (user && user.headicon) {
			$('#history').addClass('active');
			if($('.icon_user_in1').length){
				$('.icon_user_in1').show().find('img').attr('src', user.headicon);
			}else{
				$('.h-login-in').show().find('img').attr('src', user.headicon);
			}
			$('.icon_user').hide();
			$('.icon_user1').hide();
		}
	}
	require('components/user/getUserInfo')($('#history').length ? got : _getUserInfo);
});

/* === lem:components/com_base/ker.js === */
;!function(window){
	if(window.Ker){
		return;
	}
	function toJSON(str){
		try{
			return (new Function('return '+str))();
		}catch(e){return ''}
	}
	var _handlers = {}, //函数池
		_needlock = {}, //需要锁定的事件池，这些事件只允许单进程执行
		_busy = {}, //繁忙的事件池，在此池中的事件不允许再执行
		_kid = 1, //为需要锁定的事件动态分配一个值，解决“单进程”事件对不同元素可以同时执行的问题
		_bubble = true, //是否冒泡
		_KID = '_Ker_8s1hj29c3x';

	window.Ker = {
		//kname 事件名或事件集对象，支持“伪”命名空间。例如：feed.reblog
		on: function(kname, handler){
			if(handler){
				if(kname.charAt(0)==='-'){
					kname = kname.substr(1);
					_handlers[kname] || (_needlock[kname] = true);
				}
				//_handlers[kname] ? trace.err('Click handler "'+kname+'" has been defined!')
				//	: (_handlers[kname] = handler);
				_handlers[kname] || (_handlers[kname] = handler);
			}else{
				for(var k in kname){
					kname.hasOwnProperty(k) && this.on(k, kname[k]);
				}
			}
		},
		//从函数池中删除指定名称的处理函数，也可起到取消事件绑定的效果
		del: function(kname){
			delete _handlers[kname];
			delete _needlock[kname];
		},
		//给节点绑定事件
		click: function(elem, kname, handler){
			var kn = elem.getAttribute('k-name'),
				n = kname;
			kname.charAt(0)==='-' && (kname = kname.substr(1));
			if(!kn){
				elem.setAttribute('k-name', kname);
			}else if( (' '+kn+' ').indexOf(' '+kname+' ')<0 ){
				elem.setAttribute('k-name', kn+' '+kname);
			}
			if(handler){
				this.on(n, handler);
			}
		},
		//取消某节点上的事件绑定，取消绑定不会从函数池中删除处理函数，因为可能其它节点也在用
		off: function(elem, kname){
			var kn = elem.getAttribute('k-name');
			if(!kname || kn===kname){
				elem.removeAttribute('k-name');
			}else if(kn){
				elem.setAttribute('k-name', (' '+kn+' ').replace(' '+kname+' ', ' ').replace(/^\s|\s$/g, ''));
			}
		},
		//触发事件
		//ktarget, target, event参数可选（当然也可以是其他意义的参数，JS形参类型不固定哦）
		emit: function(kname, ktarget, target, event){
			if( _needlock[kname] && ktarget){
				ktarget[_KID] || (ktarget[_KID]=' '+(_kid++));
				if( _busy[kname+ktarget[_KID]] ){return}
				_busy[kname+ktarget[_KID]] = true;
			}
			var handler = _handlers[kname];
			handler && handler(ktarget, target, event);
		},
		data: function(elem, data){
			var kdata = elem.getAttribute('k-data'),
				newtype = typeof data;
			
			if(newtype==='undefined'){
				return kdata ? kdata.charAt(0)==='{' ? toJSON(kdata) : kdata : '';
			}else if(newtype==='object'){
				if(data===null){
					elem.setAttribute('k-data', '');
					return;
				}
				var k, v;
				if(kdata && kdata.charAt(0)==='{'){
					kdata = toJSON(kdata);
					if(kdata){
						for(k in data){
							kdata[k] = data[k];
						}
					}else{
						kdata = data;
					}
				}else{
					kdata = data;
				}
				data = [];
				for(k in kdata){
					v = kdata[k];
					data.push(k + ":" + (typeof v==="string" ? "'" + v.replace(/'/g, "\\\'") + "'" : v));
				}
				data = "{" + data.join(",") + "}";
			}
			elem.setAttribute('k-data', data);
		},
		//释放繁忙的事件（free 请翻译成“空闲的”。。）
		free: function(ktarget, kname){
			ktarget && delete _busy[kname+ktarget[_KID]];
		},
		//阻止Ker事件向上冒泡
		stop: function(){_bubble=false}
	};
	
var addEvent = document.addEventListener ? function(elem, type, handler){
	if( elem && elem.addEventListener ){
		elem.addEventListener(type, handler, false);
	}
} : function(elem, type, handler){
	if( elem && elem.attachEvent ){
		elem.attachEvent('on'+type, handler);
	}
};
$(function(){
	//一切从这里开始
	addEvent(document.body, 'click', function(event){
		event || (event=window.event);
		var target = event.target || event.srcElement,
			ktarget = target,
			kname;
		
		while( ktarget && ktarget.nodeType===1 && _bubble ){
			kname = ktarget.getAttribute('k-name');
			if(kname){
				if( _needlock[kname] ){
					ktarget[_KID] || (ktarget[_KID]=' '+(_kid++));
					if( _busy[kname+ktarget[_KID]] ){
						ktarget = ktarget.parentNode;
						continue;
					}
					_busy[kname+ktarget[_KID]] = true;
				}
				var handler = _handlers[kname];
				if(handler){
					handler(ktarget, target, event);
				}else{
					var knames = kname.split(' '),
						i = 0, len = knames.length;
					for(; i<len; i++){
						kname = knames[i];
						if( _needlock[kname] ){
							ktarget[_KID] || (ktarget[_KID]=' '+(_kid++));
							if( _busy[kname+ktarget[_KID]] ){continue}
							_busy[kname+ktarget[_KID]] = true;
						}
						handler = _handlers[kname];
						handler && handler(ktarget, target, event);
					}
				}
			} //if kname end
			ktarget = ktarget.parentNode;
		}

		_bubble = true;
	});
});
	
	//window.$007 = _handlers; //方便调试时查看函数列表，也可注释掉
}(window);

/* === lem:components/sendStat/sendSumStat.js === */
;Ker.on('send-sum-stat', function(ktar,tar,event){	
	var data = ktar.getAttribute('data-sum-stat');		
	data && le.m.sendStat({
		//测试上报地址,上线前切记替换
		//'url':'http://dev.dc.letv.com/s/?k='+data
		'url': le.api_host.dc + '/s/?k='+data
	});
	
});


/* === lem:components/sendStat/sendStat.js === */
;le.m.sendStat = function(options){	
	var rnd = '='+Math.random(),
		url = options.url,				
		img = window[ '_IMG'+rnd ] = new Image();
	img.onload = img.onerror = function(){		
		img = null;
		window[ '_IMG'+rnd ] = null;
	};
	
	img.src = url.indexOf('?')>0 ? url+'&_r_'+rnd : url+'?_r_'+rnd;	
	setTimeout(function(){}, 1000); //确保在ie和firefox下页面关闭时也能发出img请求
	
};

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

/* === lem:air/util/scrollTo.js === */
;(LTK["air/util/scrollTo"] = function(require, exports, module){
	
	
	var scrollTo = function(top, time, interval, ease){
		var win = window, count = 0, total, timerId, step,
			start = window.scrollY;

		interval = interval || 50;

		if (time < 1) time *= 1000;

		total = time / interval;
		step = (top - window.scrollY) / total;

		timerId = setInterval(function(){
			if (++count < total) {
				win.scrollTo(0, start + step * count);
			} else {
				win.scrollTo(0, top);
				clearInterval(timerId);
			}
			
		}, interval);
	};
	
	module.exports = scrollTo;
	
});

/* === lem:components/scroll/scrollUp.js === */
;(LTK["components/scroll/scrollUp"] = function (require) {
	var ImgStat = require('components/util/img_load');
	var ScrollAnimate = require('air/util/scrollTo');
	var scrollUp = {
		init: function () {
			this._initDom();
			this._initEvent();
		},

		_initDom: function () {
			this._showHide = $('#j-btn-showhide');
			this._goTop = $('#j-btn-gotop');
			this._vipDeta = $('#j-btn-vipdeta');
			this._win = $(window);
			this._showTop = this._win.height() / 2;
			this.currentTop = this._win.scrollTop();
			this.scrollTimer = null;
			this.btnShouldShow = false;
		},

		_initEvent: function () {
			this._win.on('touchmove scroll', $.proxy(this._scroll, this));
			this._vipDeta.on('click', $.proxy(this._vipClick, this));
			this._goTop.on('click', $.proxy(this._click, this));
		},

		_vipClick: function () {
			ImgStat('/doc.gif?action=btn_vip_click');
		},

		
		_click: function (e) {
			e.preventDefault();
			var _self = this;
			ScrollAnimate(0, 100);
			setTimeout(function () {
				_self._hide();
			}, 100);
		},

		
		_scroll: function () {
			if (this.scrollTimer) {
				return;
			}
			this.scrollTimer = setTimeout($.proxy(this._doCalcScroll, this), 200);
		},

		
		_doCalcScroll: function () {
			var _scroll = this._win.scrollTop();
			if (_scroll > this.currentTop) {
				// 向下滚动
				this._hide();
			} else {
				// 向上滚动
				this._show();
			}
			this.currentTop = _scroll;
			if (!this._isShow && _scroll > this._showTop) {
				this.btnShouldShow = true;
				this._showHide.addClass('isgoTop');
			}
			if (_scroll <= this._showTop) {
				this.btnShouldShow = false;
				this._showHide.removeClass('isgoTop');
				this._showHide.removeClass('ani_goTopShow');
				this._showHide.removeClass('ani_goTopHide');
			}
			this.scrollTimer = null;
		},

		
		_show: function () {
			if (this.btnShouldShow) {
				this._showHide.removeClass('ani_goTopHide');
				this._showHide.addClass('ani_goTopShow');
			}
		},

		
		_hide: function () {
			if (this.btnShouldShow && this._showHide.hasClass('ani_goTopShow')) {
				this._showHide.removeClass('ani_goTopShow');
				this._showHide.addClass('ani_goTopHide');
			}
		}
	};
	scrollUp.init();
});


/* === lem:components/search/search_simple.js === */
;(LTK["components/search/search_simple"] = function(require){
	var Url = require('air/util/Url');
	le.m.simpleSearch = {
		init: function(){
			this._initDom();
			this._initEvent();
		},
		_param:['ref'],//记录需要一直跟随的查询参数
		//获取location.href中需要带着的参数组成的对象
		_getParam:function(){				
			var self = this,
				query = {};
			$.each(self._param,function(i,v){
				query[v] = Url.getParam(self._param[i]);				
			})
			return query;
		},
		_setParam:function(){
			var param = this._getParam();
			if(!Url.serializeParam(param)) return;	
			for(var k in param){
				var v = param[k];
				v!== '' && this._form.append('<input type="hidden" name = "'+k+'" value="'+param[k]+'"/>')
			}
		},
		_initDom: function(){			
			this._form = $('#j-search-form');			
			this._input = this._form.find('.j-search');
			this._doc = $(document);			
			this._setParam();
		},
		_initEvent: function(){
			this._defaultText = this._input.val();
			this._input.on('focus', _.bind(this._focus, this));
			this._input.on('blur', _.bind(this._blur, this));
		},
		_focus: function() {
			this._input.val('');
		},
		_blur: function() {
			if(this._input.val() == ''){
				this._input.val(this._defaultText);
			}
		}
	};
	le.m.simpleSearch.init();
})
/* === lem:sdk/stats/api_host.js === */
;(LTK["sdk/stats/api_host"] = function(require,exports, module){
    'use strict';
    var api_host = {
        so: 'so.letv.com',
        dc: '//apple.www.letv.com', // "dc.letv.com" 域名下的参数可以不需修改直接平移到"http://apple.www.letv.com"
        main: location.host.split('.').slice(-2).join('.'),
        fe_go: '//fe.go.letv.com',
        test:'//develop.bigdata.le.com/'
    };
    module.exports = api_host;
});

/* === lem:sdk/stats/Stats.js === */
;(LTK["sdk/stats/Stats"] = function (require, exports, module) {
    'use strict';
    module.exports = {
      init: function (Options) {
        var api_host =  require('sdk/stats/api_host');
        var API = {};
        //判断是否是测试环境
        if(Options.funcSet){
          API.api_env = api_host.test + Options.funcSet +'/env/?';
          API.api_lg  = api_host.test + Options.funcSet +'/lg/?';
          API.api_op  = api_host.test + Options.funcSet +'/op/?';
          API.api_pgv = api_host.test + Options.funcSet +'/pgv/?';
        }else{
          API.api_env = api_host.dc + '/env/?';
          API.api_lg  = api_host.dc + '/lg/?';
          API.api_op  = api_host.dc + '/op/?';
          API.api_pgv = api_host.dc + '/pgv/?';
        }
        //配置上报地址
        var setting = {
          VER: '2.0',
          P1: '1', //一级业务线代码 网页1 移动0
          P2: '10', //二级产品线代码 网页10 M站04 HTML5站06
          cookieDomain: '.' + api_host.main,
          api_so:api_host.so,
          api_fe: api_host.fe_go + '/ds?', // 前端的上报接口，测试时结尾为'/ds-test?'
          api_env: API.api_env, //环境日志
          api_lg: API.api_lg, //登录日志
          api_op: API.api_op, //'http://develop.bigdata.le.com/0bb6/op/?'
          api_pgv: API.api_pgv //pv日志
        };
        // callback为上报完成后要跳转到的url，或要回调的函数
        setting.imgRequest = function (url, callback) {
          var img  = new Image();
          img.onload = img.onerror = function () {
            img = null;
            if (callback) {
              if(typeof callback==='string'){
                window.location.href = callback;
              }else{
                callback();
              }
            }
          };
          img.src = url;
          // 除了callback，同时确保在ie和firefox下页面关闭时也能发出img请求
          setTimeout(function () {
            if (img && callback) {
              if(typeof callback==='string'){
                window.location.href = callback;
              }else{
                callback();
              }
              callback = false;
            }
          }, 1000);
        };


        setting.getCookie = function(name){
          var reg = new RegExp('(?:^| )' + name+'=([^;]*)(?:;|\x24)');
          var match = reg.exec( document.cookie );
          return match ? unescape(match[1]) : '';
        };
        setting.setCookie = function(name, value, opt){
          if(!opt){
            opt = {};
          }
          var t = new Date(), exp = opt.exp;
          if(typeof exp==='number'){
            t.setTime(t.getTime() + exp*3600000); //60m * 60s * 1000ms
          }else if(exp==='forever'){
            t.setFullYear(t.getFullYear()+50); //专业种植cookie 50年
          }else if(value===null){ //删除cookie
            value = '';
            t.setTime(t.getTime() - 3600000);
          }else if(exp instanceof Date){ //传的是一个时间对象
            t = exp;
          }else{
            t = '';
          }
          document.cookie = name+'='+ escape(value)+ (t && '; expires='+t.toGMTString())+
            '; domain='+(opt.domain || this.cookieDomain)+'; path='+(opt.path || '/')+
            (opt.secure ? '; secure' : '');
        };

        //获取lc：letv cookie, 存储到flash里
        //主站记flash cookie里
        setting.getLC = function(){
          var lc = this.getCookie('tj_lc');
          if(lc){
            return lc;
          }
          lc = LocalStore.read('lc');
          if(lc){
            //如果从flash cookie里读到数据，那么同时吧这个数据写到浏览器cookie里
            //相当于做了个缓存
            this.setCookie('tj_lc', lc);
          }else{
            lc = '';
            var i = 32; //不带中划线的32位全局唯一标识符（GUID）
            while(i--){
              lc += Math.floor(Math.random()*16).toString(16);
            }
            //alert(LocalStore.isReady+ ' - '+LocalStore.flash);
            if(LocalStore.isReady || !LocalStore.flash){
              LocalStore.write('lc', lc);
            }
          }
          return lc;
        };
        //给播放器调用的接口，同步播放器的lc过来
        setting.setLC = function (lc) {
          this.setCookie('tj_lc', lc, {exp:'forever'});
        };

        //HTML5站、m站就记录在cookie里
        // if($.browser.iPad || $.browser.andorid || window.location.host.match(/\bm\.le\.com/)){
        window.LocalStore = {
          ready: function (fn) {
            fn();
          } //本地存储准备好后执行这些函数
        };
        setting.getLC = function () {
          var lc = this.getCookie('tj_lc');
          if (!lc) {
            //20位数字
            // lc = String(new Date().getTime())+String(Math.random()).slice(-7);
            lc = '';
            var i = 32; //不带中划线的32位全局唯一标识符（GUID）
            while (i--) {
              lc += Math.floor(Math.random() * 16).toString(16);
            }
            var cookieName = 'tj_lc';
            this.setCookie(cookieName, lc, {exp: 'forever'});
          }
          return lc;
        };
        setting.P1 = '0';
        setting.P2 = '04'; //M站
        setting.app_name = 'letv_msite'; //应用唯一标识
        // }

        //获取uuid：一次用户访问的唯一标识
        setting.getUUID = function(){
          var uuid = this.getCookie('tj_uuid');
          if(!uuid){
            //20位数字
            uuid = String(new Date().getTime())+String(Math.random()).slice(-7);
            this.setCookie('tj_uuid', uuid);
          }
          return uuid;
        };

        //获取weid：用户每打开一个页面js随机生成一个webeventid
        setting.WEID = String(new Date().getTime())+String(Math.random()).slice(-7);

        setting.UID = setting.getCookie('ssouid');

        return setting;
      }
    };
});

/* === lem:sdk/stats/br.js === */
;(LTK["sdk/stats/br"] = function(require,exports, module) {
    'use strict';
    function detect(items) {
        var br = 'other'; // 默认值other
        var userAgent = navigator.userAgent.toLowerCase();
        var item, i, len, tag, got;
        for (i = 0, len = items.length; i<len; i++) {
            item = items[i];
            tag = item.tag;
            got = typeof tag==='string' ? userAgent.indexOf(tag)>-1 : tag.test(userAgent);
            if (got) {
                br = item.flag;
                break;
            }
        }
        // 今日头条的ua貌似取得很慢，不准；来自头条的地址都含有'site=toutiaonews'
        if (location.href.indexOf('site=toutiaonews')>0) {
            br = 'toutiao';
        }
        return br;
    }
    var browsers = [
        {tag: 'liebaofast', flag: 'liebao'}, // 猎豹浏览器
        {tag: 'letvmobileclient', flag: 'letvmobcli'}, // 乐视领先版
        {tag: 'letvclient', flag: 'letvcli'}, // 乐视客户端
        {tag: 'micromessenger', flag: 'weixin'}, // 微信
        {tag: '__weibo__', flag: 'weibo'}, // 微博
        {tag: /ucbrowser|ucweb/, flag: 'uc'}, // UC浏览器
        {tag: /leuibrowser|eui browser/, flag: 'leui'}, // 乐视手机浏览器
        {tag: 'baiduboxapp', flag: 'baidubox'}, // 手机百度
        {tag: 'baidubrowser', flag: 'baidubrowser'}, // 百度浏览器
        {tag: 'qqbrowser', flag: 'qq'}, // QQ浏览器
        {tag: 'qqlivebrowser', flag: 'qqlive'}, // QQLive浏览器
        {tag: 'oppobrowser', flag: 'oppo'}, // oppo手机浏览器
        {tag: 'sogoumobilebrowser', flag: 'sougou'}, // 搜狗手机浏览器
        {tag: 'xiaomi', flag: 'xiaomi'}, // 小米手机
        {tag: 'storm_browser', flag: 'storm'}, // 暴风影音
        {tag: '360video', flag: '360video'}, // 360影视大全
        {tag: 'qqdownloader', flag: 'yyb'}, // 腾讯应用宝
        {tag: 'wandoujia spider', flag: 'wandoujia'}, // 豌豆荚
        {tag: 'mogujie', flag: 'mogujie'}, // 蘑菇街
        // {tag: 'newsarticle', flag: 'toutiao'}, // 今日头条
        {tag: 'dolphinbrowsercn', flag: 'dolphin'}, // 海豚浏览器
        {tag: 'kanqiu', flag: 'hupu'}, // 虎扑体育
        {tag: 'iemobile', flag: 'iemobile'}, // IE手机浏览器
        {tag: 'msie ', flag: 'ie'}, // IE浏览器
        {tag: 'chrome', flag: 'chrome'}, // 谷歌浏览器
        {tag: 'crios', flag: 'chrome'}, // 谷歌浏览器
        {tag: 'firefox', flag: 'firefox'}, // firefox浏览器
        {tag: 'opera', flag: 'opera'}, // opera浏览器
        {tag: /iphone.+?\bsafari/, flag: 'safari'}, // safari浏览器
        {tag: /iphone.+?\bmobile\/\w+$/, flag: 'gaosu'} // 高速浏览器
    ];
    module.exports = detect(browsers);
});
/* === lem:sdk/stats/op.js === */
;(LTK["sdk/stats/op"] = function (require,exports,module) {
    'use strict';
    var INFO = window.__INFO__ || {},
        VIDEO = INFO.video || {}, //兼容新旧版播放页
        ENCODE = encodeURIComponent;

    module.exports = {
        init: function (Stats) {
            //上报的数据
            var _data = {
                'acode': '0', //动作码，所有值见附表四。这里默认点击。
                'ap': '-', //动作属性，业务线自己维护
                'ar': '0', //动作结果 0：成功；1：失败
                'cid': VIDEO.cid || '-',
                'pid': VIDEO.pid || '-',
                'vid': VIDEO.vid || '-',
                'uid': Stats.UID || '-', //乐视网用户注册ID
                'uuid': Stats.getUUID(), //一次用户访问的唯一标识
                'lc': '-', //Letv cookie, 就是Flash cookie
                'cur_url': ENCODE(window.location.href), //当前页面地址
                // 'ch': '-',
                //'pcode': '-', //见附表五
                'auid': '-', //用户自定义格式的设备ID
                'ilu': Stats.UID ? '0' : '1', //is login user：是否为登录用户
                //'reid': '-', //推荐反馈的随机数。[推荐结果点击时必须上报]推荐点击动作上报时必填
                //'area': '-', //推荐区域标识。会提供两个特定的区域[推荐点击动作上报时必填]
                //'bucket': '-', //推荐的算法策略。推荐组维护 [推荐点击动作上报时必填]
                //'rank': '-', //点击视频在推荐区域的排序。最终要沟通确认 [推荐点击动作上报时必填]
                'targeturl': '-', //目标页url地址，没有请填-号
                'ver': Stats.VER, //日志版本号
                'p1': Stats.P1, //一级产品线代码 PC
                'p2': Stats.P2,//二级产品线代码 网页
                'app_name': Stats.app_name // 应用唯一标识
            };
            //window._chlid && (_data.p3 = _chlid); //三级产品线代码

            var lc = Stats.getCookie('tj_lc');
            if(lc){
                _data.lc = lc;
            }else{
                LocalStore.ready(function(){
                    _data.lc = Stats.getLC();
                });
            }

            
            return {
                sendAction:function (data, callback) {
                    if(!data){
                        data = {};
                    }
                    var sdata = Stats.data || {}; //在页面上设置的数据，上报优先级高于_data里的数据
                    var param = [], k;
                    for(k in sdata){
                        if(sdata.hasOwnProperty(k)){
                            _data[k] = ENCODE(sdata[k]);
                        }
                    }
                    for(k in data){
                        if(data.hasOwnProperty(k)){
                            param.push(k+'='+ENCODE(data[k]));
                        }
                    }
                    if(Stats.AUID){
                        (_data.auid = Stats.AUID);
                    }
                    for(k in _data){
                        if(!data.hasOwnProperty(k) && _data.hasOwnProperty(k)){
                            param.push(k+'='+_data[k]);
                        }
                    }
                    param.push('r='+(Math.random() + '').slice(2,14)); //加入随机数
                    param.push('ctime='+new Date().getTime()); //加入时间戳

                    //发送数据
                    Stats.imgRequest(Stats.api_op+param.join('&'), callback);
                }
            };
        }
    };
});
/* === lem:sdk/stats/pv.js === */
;(LTK["sdk/stats/pv"] = function (require, exports ,module) {
	'use strict';
	var INFO = window.__INFO__ || {},
		VIDEO = INFO.video || {}, //兼容新旧版播放页
		ENCODE = encodeURIComponent,
		DOC = document,
		REF = DOC.referrer;
	module.exports = {
		init:function (Stats) {
			//上报的数据
			var _data = {
				'cid': VIDEO.cid || '-',
				'pid': VIDEO.pid || '-',
				'vid': VIDEO.vid || '-',
				'uid': Stats.UID || '-', //乐视网用户注册ID
				'uuid': Stats.getUUID(), //一次用户访问的唯一标识
				'lc': Stats.getLC(), //Letv cookie, 就是Flash cookie
				'ref': ENCODE(REF||'-'), //页面来源
				//来源类型1：直接输入，2：站内， 3：搜索，4：站外，5：合作 ?
				'ct': '-',
				'rcid': '-', //来源频道
				'kw': ENCODE(INFO.wd||'-'), //搜索关键字
				'cur_url': ENCODE(window.location.href), //当前页面地址
				'ch': Stats.BR,
				//'area': '-',
				//'pcode': '-', //见附表五
				'auid': '-', //用户自定义格式的设备ID
				'ilu': Stats.UID ? '0' : '1', //is login user：是否为登录用户
				'weid': Stats.WEID, //用户每打开一个页面js随机生成一个webeventid
				'ver': Stats.VER, //日志版本号
				'p1': Stats.P1, //一级产品线代码 PC
				'p2': Stats.P2, //二级产品线代码 网页
				'app_name': Stats.app_name // 应用唯一标识
			};
			//window._chlid && (_data.p3 = _chlid); //三级产品线代码
			
			function isApp() {
				// 乐视视频APP,乐视行车记录仪,乐视体育APP,乐无限APP(合作)
				var apps = ['letvclient', 'letvmobileclient', 'leautocamera', 'lesports', 'cn.hi.wifi', 'foxconn.hi.wifi'];
				var arr = apps || [];
				
				var userAgent = navigator.userAgent.toLowerCase();
				var item = '';
				for (var i = 0; i < arr.length; i++) {
					item = arr[i];
					if (item && userAgent.indexOf(item) > -1) {
						return true;
					}
				}
				return false;
			}

			return {
				api: Stats.P2==='04' && Stats.P1==='0' ? Stats.api_pgv : Stats.api_pgv,
				domain: Stats.cookieDomain,
				sengin: ['video.baidu.com', 'www.baidu.com','baidu.com', 'google.com.hk',
					'google.com', 'v.sogou.com','sogou.com', 'zhongsou.com',
					'search.yahoo.com', 'one.cn.yahoo.com', 'soso.com',
					'search.live.com', 'youdao.com',
					'gougou.com', 'bing.com',Stats.api_so,'soku.com','so.360.cn'],
				sword: ['word','word', 'wd', 'q', 'q', 'query', 'query','w', 'p',
					'p', 'w', 'kw', 'q', 'q', 'search', 'q','wd','keyword','q'],
				//_isload: 0,
				daytime: 86400,
				init: function () {
					var query = location.search;
					if (query) {
						query = query.slice(1).replace('?', '&'); // 解决有些傻*拼出?a=1?b=2&c=3这样的参数串
						var ch = this.getValue('ch', query) || this.getValue('ref', query) || this.getValue('q2', query);
						if(ch){
							_data.ch = ENCODE(ch);
						}
					}
					this.getCt();
					var lc = Stats.getCookie('tj_lc');
					var that = this;
					if(!isApp()){
						if (lc) {
							_data.lc = lc;
							that.postData();
						} else {
							LocalStore.ready(function () {
								_data.lc = Stats.getLC();
								that.postData();
							});
						}
					}
				},
				getValue: function (name, src) {
					var reg = new RegExp('(^|&|\\?)'+name+'=(.*?)(&|\x24|#)');
					var m = src.match(reg);
					return m ? m[2] : '';
				},
				getCt: function(){
					var ref = REF;
					if(ref){
						var v = this.sengin, i = v.length;
						var s = this.sword;
						while(i--){
							if(ref.indexOf(v[i])>-1 && this.getValue(s[i], ref)){
								_data.ct = 3;
								return;
							}
						}
						_data.ct = this.isLetv(ref) ? 2 : 4;
					}else{
						_data.ct = 1;
					}
				},
				isLetv: function(ref){
					if(ref){
						ref = ref.split('/');
						return ref.length>2 && ref[2].indexOf(this.domain)>-1;
					}
					return false;
				},
				
				//获取点击区域
				getArea: function(){
					var area = Stats.getCookie('tj_area');
					if(area){
						_data.area = area;
						Stats.setCookie('tj_area', null);
					}else{
						delete _data.area;
					}
				},
				getParam: function(){
					if(Stats.P2==='04'){ //只对M站
						// _data.ref = ENCODE(Stats.getCookie('tj_ref')||
						// 20160414：修改ref取值逻辑
						_data.ref = ENCODE(this.getValue('ref', location.search) || REF ||
							(_data.ch==='other' ? '-' : _data.ch));
					}
					this.getArea(); //这个时刻才读tj_area
					var data = Stats.data || {}; //在页面上设置的数据，上报优先级高于_data里的数据
					var param = [], k;
					for(k in data){
						if(data.hasOwnProperty(k)){
							_data[k] = ENCODE(data[k]);
						}
					}
					for(k in _data){
						if(_data.hasOwnProperty(k)){
							param.push(k+'='+_data[k]);
						}
					}
					param.push('r='+(Math.random() + '').slice(2,14)); //加入随机数
					return param.join('&');
				},
				postData: function(deviceId){
					// 如果页面url查询字符串包含noPv=1则不进行pv上报
					if (location.search && location.search.indexOf('noPv=1') > -1) {
						return;
					}
          if(deviceId){
            _data.auid = deviceId;
          }
					try{
						var x = 'IMG_' + String(Math.random()),
							img = Stats[x] = new Image(1, 1);
						img.onload = function(){
							img = Stats[x] = null;
						};
						// img.onerror = function(e){
						// 	img = Stats[x] = null;
						// 	Stats.feStat({code: 'pgv_err'}); // 上报的大数据部的上报出现错误
						// };
						img.src = this.api + this.getParam();
						setTimeout(function(){}, 1000); //保证关闭页面的时候也上报
						//console.log(_data);
					}catch(e){
						e.code = 'STATS-PV-01';
						console.log(e);
					}
				}
			};
		}
	};
});

/* === lem:sdk/stats/env.js === */
;(LTK["sdk/stats/env"] = function (require, exports ,module) {
    'use strict';
    module.exports = {
        init:function (Stats) {
            //上报的数据
            var _data = {
                //'lc': Stats.getLC(), //Letv cookie, 就是Flash cookie
                //'uuid': Stats.getUUID(), //一次用户访问的唯一标识
                // 'ip': '-', //IP地址
                'mac': '-', //设备Mac地址
                'nt': '-', //Net type:上网类型
                'uid': Stats.UID || '-', //乐视网用户注册ID
                //'os': '-', //操作系统
                //'osv': '-', //操作系统版本
                //'app': '-', //应用版本号
                //'bd': '-', //终端品牌
                //'xh': '-', //终端型号
                //'ro': window.screen.width+'_'+window.screen.height, //分辨率,示例：1024_768
                'br': Stats.BR, //Browser浏览器名称
                'ver': '2.0', //日志版本号
                'p1': Stats.P1, //一级产品线代码 PC
                'p2': Stats.P2, //二级产品线代码 网页
                'app_name': Stats.app_name // 应用唯一标识
            };
            return {
                ua: navigator.userAgent.toLowerCase(),
                
                system: [
                    ['winxp','windows nt 5.1'],
                    ['win7','windows nt 6.1'],
                    ['win8','windows nt 6.2'],
                    ['vista','windows nt 6.0'],
                    ['wince','windows ce'], ['wince','windows phone'],
                    ['android','android'],
                    ['ios', 'ipad'], ['ios','iphone'],
                    ['symbian','symbianos'], ['linux','linux']
                ],
                init:function () {
                    //初始化，一个访次只上报一次，所以记会话级的cookie
                    if(!Stats.getCookie('tj_env')){
                        var lc = Stats.getCookie('tj_lc');
                        var that = this;
                        if(lc){
                            that.initAction();
                        }else{
                            LocalStore.ready(function(){
                                that.initAction();
                            });
                        }
                        Stats.setCookie('tj_env', '1');
                    }
                },
                initAction: function(){
                    _data.lc = Stats.getLC();
                    _data.uuid = Stats.getUUID();
                    _data.ro = window.screen.width+'_'+window.screen.height; //分辨率
                    this.getOs();
                    //this.getBr();
                    this.postData();
                },
                getParam: function(){
                    var param = [], k;
                    for(k in _data){
                        if(_data.hasOwnProperty(k)){
                            param.push(k+'='+_data[k]);
                        }
                    }
                    param.push('r='+(Math.random() + '').slice(2,14)); //加入随机数
                    return param.join('&');
                },
                postData: function(){
                    try{
                        var img = new Image(1, 1);
                        img.onload = function(){
                            img = null;
                        };
                        img.src = Stats.api_env + this.getParam();
                        setTimeout(function(){}, 1000); //保证关闭页面的时候也上报
                    }catch(e){
                        e.code = 'STATS-ENV-01';
                        console.log(e);
                    }
                },
                //操作系统
                getOs: function(){
                    var sys = this.system, ua = this.ua;
                    for(var i = 0, len = sys.length; i < len; i++){
                        if(ua.indexOf(sys[i][1])>-1){
                            _data.os = sys[i][0];
                            break;
                        }
                    }
                }
                
            };
        }
    };
});


/* === lem:sdk/stats/lg.js === */
;(LTK["sdk/stats/lg"] = function (require, exports ,module) {
    'use strict';
    module.exports = {
        init: function (Stats) {
            //上报的数据
            var _data = {
                'uid': Stats.UID || '-', //乐视网用户注册ID
                //'lc': Stats.getLC(), //Letv cookie, 就是Flash cookie
                'auid': '-', //用户自定义格式的设备ID
                'uuid': Stats.getUUID(), //一次用户访问的唯一标识

                //'lp': '-', //登录属性 ！！目前还没定义
                //'ch': '-', //登录渠道 ！！目前我们定义为频道的域名比如tv, movie，播放页为play而不是www
                //'ref': '-', //登录来源 ！！目前我们定义为来自于哪个按钮比如评论、收藏等
                //'ts': Math.floor(new Date().getTime()/1000), //Timestamp登录时间，用秒数来表示
                //'st': '-', //Status 登录状态 0:登录成功 1:退出登录
                //'r': Math.random(), //随机数

                'ver': '2.0', //日志版本号
                'p1': Stats.P1, //一级产品线代码 PC
                'p2': Stats.P2, //二级产品线代码 网页
                'app_name': Stats.app_name // 应用唯一标识
            };
            //window._chlid && (_data.p3 = _chlid); //三级产品线代码

            return {
                init: function () {
                    var lc = Stats.getCookie('tj_lc');
                    if(lc){
                        _data.lc = lc;
                    }else{
                        LocalStore.ready(function(){
                            _data.lc = Stats.getLC();
                        });
                    }
                },
                getCh: function(){
                    var ch = window.location.host.split('.')[0];
                    //播放页地址如：http://www.letv.com/ptv/vplay/xxxxxxx.html
                    if(ch==='www' && window.location.href.indexOf('/ptv/vplay')===19){
                        //播放页
                        ch = 'play';
                    }
                    _data.ch = ch;
                },
                getRef: function(){
                    var ref = Stats.getCookie('tj_lg_r');
                    if(ref){
                        _data.ref = encodeURIComponent(ref);
                        Stats.setCookie('tj_lg_r', null);
                    }else{
                        delete _data.ref;
                    }
                },
                clearLgCookie: function(){
                    Stats.setCookie('tj_lg_r', null);
                },
                getParam: function(data){
                    if(!data){
                        data = {};
                    }
                    //st=0登录上报，st=1退出上报。
                    //登录上报时要再次取cookie，而退出上报不再取cookie
                    if(data.st === 0){
                        _data.uid = Stats.getCookie('ssouid') || '-';
                    }
                    var param = [], k;
                    for(k in data) {
                        if (data.hasOwnProperty(k)) {
                            param.push(k + '=' + encodeURIComponent(data[k]));
                        }
                    }
                    for(k in _data){
                        if(!data.hasOwnProperty(k) && _data.hasOwnProperty(k)){
                            param.push(k+'='+_data[k]);
                        }
                    }
                    param.push('ts='+Math.floor(new Date().getTime()/1000)); //加入随机数
                    param.push('r='+(Math.random() + '').slice(2,14)); //加入随机数
                    return param.join('&');
                },
                postData: function(data) {
                    console.log()
                    this.getCh();
                    this.getRef();
                    if (Stats.AUID) {
                        _data.auid = Stats.AUID;
                        try {
                            var img = new Image(1, 1);
                            img.onload = function () {
                                img = null;
                            };
                            img.src = Stats.api_lg + this.getParam(data);
                            setTimeout(function () {
                            }, 1000); //保证关闭页面的时候也上报
                        } catch (e) {
                            e.code = 'STATS-LG-01';
                            console.log(e);
                        }
                    }
                }
            };
        }
    };
});
/* === lem:sdk/stats/pvuv.js === */
;(LTK["sdk/stats/pvuv"] = function (require, exports, module) {
    'use strict';
    module.exports = {
        init: function (Stats) {
            var brs = {
                'weixin': 'wx',
                'weibo': 'wb',
                'uc': 'uc',
                'qq': 'qq',
                'qqlive': 'qqlive',
                'leui': 'leui',
                'letvmobcli': 'letvmobcli',
                'letvcli': 'letvcli',
                'baidubox': 'baidubox',
                'baidubrowser': 'baidubro',
                'oppo': 'oppo',
                'sougou': 'sougou',
                'xiaomi': 'xiaomi',
                'toutiao': 'toutiao',
                'iemobile': 'iemobile',
                'chrome': 'chrome',
                'safari': 'safari',
                'gaosu': 'gaosu',
                'storm': 'storm',
                // 'opera': 'opera', // 量太少
                // 'firefox': 'firefox', // 量太少
                'other': 'o'
            };
            var region = window.info && window.info.region;
            var br = ':'+(brs[Stats.BR] || 'o'),
                codes = ['pv' + br, 'region:' + region];

            if (!Cookie.get('fe_uv')){
                codes.push('uv'+br);
                Cookie.set('fe_uv', 1);
            }

            var pathname = location.pathname || '';
            if (pathname.indexOf('/kzt/')===0) {
                codes.push('kzt'); // 快速专题
            } else if (pathname.indexOf('/izt/')===0) {
                codes.push('izt'); // DIY专题
            }

            // 上报写在info里的数据
            // feStatData = [{code: 'pv-live', br: 1}, {code: 'uv-live', uv:'live'}]
            if (window.info && info.feStatData) {
                var data = info.feStatData, i = data.length, datai;
                while (i--) {
                    datai = data[i];
                    if (!datai.code) {continue}
                    if (datai.uv) {
                        var cn = 'fe_uv_'+datai.uv;
                        if (!Cookie.get(cn)) {
                            datai.code && codes.push(datai.code);
                            Cookie.set(cn, 1);
                        }
                    } else {
                        datai.code && codes.push(datai.br ? datai.code+br : datai.code);
                    }
                }
            }

            // 针对1027直播单独做uv统计
            

            Stats.imgRequest(Stats.api_fe+'pv=1&code='+codes.join(',')+'&lc='+Cookie.get('tj_lc'));

            Stats.pvuv = true;
        }
    };
});
/* === lem:sdk/stats/index.js === */
;(LTK["sdk/stats/index"] = function(require, exports, module){
  'use strict';
    module.exports = {
      init: function (Options) {
        var Stats = require('sdk/stats/Stats').init(Options);
        var BR = require('sdk/stats/br'); // 上报核心方法
        var opStats = require('sdk/stats/op'); // 动作上报核心方法
        var pvStats = require('sdk/stats/pv'); // 动作上报核心方法
        var envStats = require('sdk/stats/env');
        var Lg = require('sdk/stats/lg');
        var pvuv = require('sdk/stats/pvuv');
        var k, stat = window.Stat;
        
        if(window.Stat){
          for(k in stat){
            if(stat.hasOwnProperty(k)){
              Stats[k] = stat[k];
            }
          }
        }
        Stats.BR = BR;
        Stats.sendAction = opStats.init(Stats).sendAction;//sendAction是Stats的基本方法，需要立即执行
        Stats.Pv = pvStats.init(Stats);
        Stats.Env = envStats.init(Stats);
        Stats.Lg = Lg.init(Stats);

        //自执行方法的init
        Stats.Pv.init();
        Stats.Env.init();
        Stats.Lg.init();// 登录上报已经迁移至 passport sdk此处是否可去掉登录上报。
        pvuv.init(Stats);

        return Stats;
      }
    };
});

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

/* === lib:weixin.js === */
;!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){h(b,a,d)}):k(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),h(b,a,c)}):d?k(b,d):k(b,c)}function e(a){return a=a||{},a.appId=A.appId,a.verifyAppId=A.appId,a.verifySignType="sha1",a.verifyTimestamp=A.timestamp+"",a.verifyNonceStr=A.nonceStr,a.verifySignature=A.signature,a}function f(a,b){return{scope:b,signType:"sha1",timeStamp:a.timestamp+"",nonceStr:a.nonceStr,addrSign:a.addrSign}}function g(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function h(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=i(a,d,c),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",A.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function i(a,b){var d,e,f,g;if(b){switch(d=b.indexOf(":"),a){case p.config:e="config";break;case p.openProductSpecificView:e="openProductSpecificView";break;default:e=b.substring(0,d),e=e.replace(/_/g," "),e=e.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}),e=e.substring(0,1).toLowerCase()+e.substring(1),e=e.replace(/ /g,""),-1!=e.indexOf("Wcpay")&&(e=e.replace("Wcpay","WCPay")),f=q[e],f&&(e=f)}g=b.substring(d+1),"confirm"==g&&(g="ok"),-1!=g.indexOf("failed_")&&(g=g.substring(7)),-1!=g.indexOf("fail_")&&(g=g.substring(5)),g=g.replace(/_/g," "),g=g.toLowerCase(),("access denied"==g||"no permission to execute"==g)&&(g="permission denied"),"config"==e&&"function not exist"==g&&(g="ok"),b=e+":"+g}return b}function j(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=p[d],e&&(a[b]=e);return a}}function k(a,b){if(A.debug&&!b.isInnerInvoke){var c=q[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function l(){if(!("6.0.2">x||z.systemType<0)){var b=new Image;z.appId=A.appId,z.initTime=y.initEndTime-y.initStartTime,z.preVerifyTime=y.preVerifyEndTime-y.preVerifyStartTime,D.getNetworkType({isInnerInvoke:!0,success:function(a){z.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+z.version+"&o="+z.isPreVerifyOk+"&s="+z.systemType+"&c="+z.clientVersion+"&a="+z.appId+"&n="+z.networkType+"&i="+z.initTime+"&p="+z.preVerifyTime+"&u="+z.url;b.src=c}})}}function m(){return(new Date).getTime()}function n(b){u&&(a.WeixinJSBridge?b():r.addEventListener&&r.addEventListener("WeixinJSBridgeReady",b,!1))}function o(){D.invoke||(D.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},D.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;if(!a.jWeixin)return p={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},q=function(){var b,a={};for(b in p)a[p[b]]=b;return a}(),r=a.document,s=r.title,t=navigator.userAgent.toLowerCase(),u=-1!=t.indexOf("micromessenger"),v=-1!=t.indexOf("android"),w=-1!=t.indexOf("iphone")||-1!=t.indexOf("ipad"),x=function(){var a=t.match(/micromessenger\/(\d+\.\d+\.\d+)/)||t.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),y={initStartTime:m(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},z={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:w?1:v?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},A={},B={_completes:[]},C={state:0,res:{}},n(function(){y.initEndTime=m()}),D={config:function(a){A=a,k("config",a),n(function(){c(p.config,{verifyJsApiList:j(A.jsApiList)},function(){B._complete=function(a){y.preVerifyEndTime=m(),C.state=1,C.res=a},B.success=function(){z.isPreVerifyOk=0},B.fail=function(a){B._fail?B._fail(a):C.state=-1};var a=B._completes;return a.push(function(){A.debug||l()}),B.complete=function(b){for(var c=0,d=a.length;d>c;++c)a[c](b);B._completes=[]},B}()),y.preVerifyStartTime=m()}),A.beta&&o()},ready:function(a){0!=C.state?a():(B._completes.push(a),!u&&A.debug&&a())},error:function(a){"6.0.2">x||(-1==C.state?a(C.res):B._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=q[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:j(a.jsApiList)},function(){return a._complete=function(a){if(v){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(p.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||s,desc:a.title||s,img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareAppMessage:function(a){d(p.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||s,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(p.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||s,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(p.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||s,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2"},function(){return a._complete=function(a){if(v){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(p.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){c(p.getLocation,function(){var b=f(a,"jsapi_location");return b.type="wgs84",b}(),function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){c("closeWindow",{immediate_close:a&&a.immediateClose||0},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){c("scanQRCode",{desc:a.desc,needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},a)},openProductSpecificView:function(a){c(p.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(p.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:A.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(p.openCard,{card_list:d},a)},chooseWXPay:function(a){c(p.chooseWXPay,g(a),a)}},b&&(a.wx=a.jWeixin=D),D});
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
/* === lem:components/app/appPvReport.js === */
;(LTK["components/app/appPvReport"] = function (require, exports ,module) {
    'use strict';
    require('components/app/apph5Adapter');
    var appPv = {
        init: function () {
            var deviceId;
            if(window.Stats) {
                var lc = Stats.getCookie('tj_lc');
                // 20160519 在app里上报增加设备id
                if (le.app && le.app.isApp()) { // 在app环境里
                    if (lc) {
                        le.app.getDeviceInfo(function (dInfo) {
                            deviceId = dInfo.deviceId || '-';
                            Stats.AUID = deviceId;
                            Stats.Pv.postData(deviceId);
                        });
                    } else {
                        le.app.getDeviceInfo(function (dInfo) {
                            deviceId = dInfo.deviceId || '-';
                            Stats.AUID = deviceId;
                            LocalStore.ready(function () {
                                Stats.Pv.postData(deviceId);
                            });
                        });
                    }
                }
            }
        }
    };
    module.exports = appPv;
});
// 前端自己的统计
/* === lem:components/stats/feStat.js === */
;(LTK["components/stats/feStat"] = function (require, exports, module) {
	'use strict';
	module.exports = {
		init: function () {
			var ENCODE = encodeURIComponent;
			var imgRequest = Stats.imgRequest;
			
			Stats.feStat = function (data, callback) {
				if(!data){
					data = {};
				}
				if (data.scode) { // 兼容以前scode
					data.code += ':'+data.scode;
					delete data.scode;
				}
				var param = [], k;
				for (k in data) {
					if(data.hasOwnProperty(k)){
						param.push(k+'='+ENCODE(data[k]));
					}
				}
				imgRequest(Stats.api_fe+param.join('&'), callback);
			};

			Ker.on('send-feStat', function(ktar){
				var data = ktar.getAttribute('data-feStat'),
					href = ktar.getAttribute('data-href');
				if (data) {
					imgRequest(Stats.api_fe+data, href);
				} else if (href) {
					window.location.href = href;
				}
			});
		}
	};
});

/* === lem:components/stats/sendClickStat.js === */
;(LTK["components/stats/sendClickStat"] = function (require, exports ,module) {
	'use strict';
	module.exports = {
		init: function () {
			Ker.on('send-click-stat', function(ktar) {
				var data = ktar.getAttribute('data-click-stat'),
					href = ktar.getAttribute('data-href');
				if (data) {
					Stats.sendAction({
						ap: data,
						targeturl: href || ktar.href || '-'
					}, href);
				} else if (href) {
					window.location.href = href;
				}
			});
		}
	};
});




/* === lem:air/string/parseJSON.js === */
;(LTK["air/string/parseJSON"] = function(){

	
	return function(jsonString){
		try{
			return (new Function('return '+jsonString))();
		}catch(e){console.log(e);return null}
	};

});

/* === lem:components/stats/sendBlockClick.js === */
;(LTK["components/stats/sendBlockClick"] = function (require, exports ,module) {
		'use strict';
		module.exports = {
			init:function () {
				Stats.sendBlockClick = function (item) {
					var data = require('air/string/parseJSON')(item.getAttribute('data-stat'));
					var href = item.getAttribute('data-href');
					if (data) {
						if(data.ap){
							Stats.sendAction(data, href);
						}else{
							Stats.feStat(data, href);
						}
					} else if (href) {
						window.location.href = href;
					}
				};

				// 绑定统计事件
				Ker.on('send-stat', function (item, el) {
					if(el.nodeName.toLowerCase()==='a' || $(el).parents('a').length){
						Stats.sendBlockClick(item);
					}
				});
				// 点击任意地方都发统计
				Ker.on('send-stat-any', function (item) {
					Stats.sendBlockClick(item);
				});
			}
		};
	});

/* === lem:air/util/ScrollTrigger.js === */
;(LTK["air/util/ScrollTrigger"] = function (require, exports, module) {
	var $win = $(window),
		quque = [],
		timer = 0,
		bind = false;

	var onscroll = function () {
		clearTimeout(timer);
		timer = setTimeout(function () {
			ScrollTrigger._call();
		}, 100);
	};

	
	var ScrollTrigger = {
		calling: false, //必须增加执行中的标识，防止嵌套add出现bug
		
		add: function (item) {
			item.offsetY || (item.offsetY = 0);
			quque.push(item);
			this.calling || this._call(); //立即执行一次
			if (!bind) {
				//兼容移动端的scroll事件
				window.addEventListener ?
					window.addEventListener('scroll', onscroll, false) :
					$win.on('scroll', onscroll);
				bind = true;
			}
		},
		//私有方法，不要调用
		_call: function () {
			var i = quque.length;
			if (i===0) {
				window.removeEventListener ?
					window.removeEventListener('scroll', onscroll) : 
					$win.off('scroll', onscroll);
				bind = false;
				return;
			}
			this.calling = true;
			var top = $win.scrollTop() + $win.height(),
				item, offsetTop;
			while (i--) {
				item = quque[i];
				offsetTop = typeof item.point==='number' ? item.point :
					$(item.point).offset().top + item.offsetY;
				if (top>offsetTop) {
					item.isOnce===false || quque.splice(i, 1); //队列中移出此项
					item.handler();
				}
			}
			this.calling = false;
		}
	};

	module.exports = ScrollTrigger;

});

/* === lem:components/stats/bindExposure.js === */
;(LTK["components/stats/bindExposure"] = function(require, exports, module){
	'use strict';
	var ScrollTrigger = require('air/util/ScrollTrigger');
	var parseJSON = require('air/string/parseJSON');
	module.exports = {
		init:function () {
			Stats.bindExposure();
		},
		bindExposure:function () {
			$('.j-exposure-stat').each(function () {
				var $el = $(this),
					data = $el.attr('data-exposure');
				if (data) {
					data = data.charAt(0)==='{' ? parseJSON(data) : {acode: '41', ap: data};
					if(!data.acode){
						data.acode = '41';
					}
				} else {
					data = {
						acode: $el.attr('data-acode') || '41',
						ap: $el.attr('data-ap')
					};
				}
				if(data.ap){
					ScrollTrigger.add({
						point: $el,
						offsetY: $el.attr('data-exposure-offsetY') || 0,
						handler: function () {
							Stats.sendAction(data);
						}
					});
				}
				$el.removeClass('j-exposure-stat');
				$el = null;
			});
		}
	};
});

/* === lem:components/sendStat/com_stats.js === */
;(LTK["components/sendStat/com_stats"] = function (require, exports, module) {
    // 前端的上报 上报动作日志 点击上报组件 区块点击统计
    var Fe = require('components/stats/feStat');
    var sendClickStat = require('components/stats/sendClickStat');
    var sendBlockClick = require('components/stats/sendBlockClick');
    var bindExposure = require('components/stats/bindExposure');
    //此处的 Stats 来自window。对改模块儿进行 init 时请确保上报sdk已经引入并写入全局
    var statsAction = {
        init:function () {
            //Stats扩展
            Stats.bindExposure = bindExposure.bindExposure;

            //initJudge
            Fe.init();
            sendClickStat.init();
            sendBlockClick.init();
            bindExposure.init();
        }
    };
    module.exports =  statsAction;
});


/* === lem:components/sendStat/StatsInit.js === */
;(LTK["components/sendStat/StatsInit"] = function (require, exports, module) {
    'use strict';
    module.exports = {
        init:function () {
            //大数据部统计上报对象 M站前端的上报对象
            var StatsInit = require('sdk/stats/index');
            //对app进行的pv上报组件
            var appPvReport = require('components/app/appPvReport');
            //初始化 Stats 对象，并进行环境配置，如果是测试环境，传入申请的测试字符串即可
            var Stats = StatsInit.init({
                //测试功能集
                // funcSet: '0em0'
            });
            //将Stats抛给全局
            window.Stats = Stats;
            //如果是app,则调用app pv上报
            appPvReport.init();
            //其它上报的业务组件
            var statSAction = require('components/sendStat/com_stats');
            statSAction.init(Stats);
        }
    };
});
/* === lem:components/app/home_open_app.js === */
;(LTK["components/app/home_open_app"] = function(require){
	var apph5Adapter = require('components/app/apph5Adapter');
	var ua = require('air/env/ua');
	var setOpenApp = {
		init:function(){

			this._initDom();
			this._initEvent();
		},
		_initDom:function(){
			var self = this;
			this._win = $(window);

		},
		_initEvent:function(){
			var self = this;
			Ker.on('open_app', function (ktarget, target, e) {
				// 临时处理app android环境的app专享下载
				if (le.app.isApp() && ua.android) {
					return;
				}
				self._open(ktarget, target, e);
			});
		},
		_open:function(ktarget,target,e){
			e.preventDefault();
			var jsStr = 'javascript:void(0)';
			var ktarget = $(ktarget);
				ktarget.find('a').attr('href', jsStr);
			var vid = ktarget.attr('data-vid'),
				app = ktarget.attr('data-app'),
				pid = ktarget.attr('data-pid'),
				order = ktarget.attr('data-order'),
				openAppOptions = (typeof __homeOpenApp != 'undefined' && typeof __homeOpenApp[order] != 'undefined' ? __homeOpenApp[order] : '');
			var mplat = ua.letvMobile ? 'lingxian' : (ua.android ? 'android' : 'ios');
			var browser = (Stats && Stats.BR) ? Stats.BR : 'letv';
			var position = 'apponly';
			__openApp._bindDefaultAppEvent({
				'app':app || '',
				'url':openAppOptions ? openAppOptions.url : '',
				'wxUrl':openAppOptions ? openAppOptions.wxUrl : '',
				'wxShortUrl':openAppOptions ? openAppOptions.wxShortUrl : '',
				'vid':vid || '',
				'pid':pid || '',
				'type':'play',
				'from': 'm_' + mplat + '_' + browser + '_' + position,
				'thirdApp': openAppOptions ? openAppOptions.thirdApp : {}
			});
		}
	};
	setOpenApp.init();
})

//M站推荐点击统计

/* === lem:components/sendStat/msite_stat.js === */
;(LTK["components/sendStat/msite_stat"] = function(require){
	var msiteStat = {
		init:function(){
			Ker.on('msite-stat', function(ktarget, el){

				var a = el.nodeName.toLowerCase()==='a' ? $(el) : $(el).parents('a');
					
				if(a.length){					
					var data = a.attr('stat-data'),
						href = a.attr('data-href'),
						img = new Image(1,1);
			        img.onload = img.onerror = img.onabort = function(){
			            img.onload = img.onerror = img.onabort = null;
			            img = null;
			        }
				    img.src = le.api_host.m_href + '/dc.gif?data=' + encodeURIComponent(data) + '&t='+ Math.random();
					href && setTimeout(function(){ window.location.href = href },100);				    
				}
			})
		}
	}
	msiteStat.init();
})
/* === lem:components/player/float_layer_ad.js === */
;(LTK["components/player/float_layer_ad"] = function(require, exports, module) {
    var globalPluginAdId = 'ark_plugin_ad_id';
    function getQuery(key,url) {
        var urlArgs = url || location.search;
        if (urlArgs.length > 0 && urlArgs.indexOf("?") != -1) {
            var regex = new RegExp(key + "=([^&]*)", "i");
            var result = urlArgs.match(regex);
            return (result && result.length > 0) ? unescape(result[1]) : null;
        }
        return null;
    };
    var browser = (function() {
        var ua = navigator.userAgent.toLowerCase();
        var browser = {
            iPhone:/iphone/.test( ua ),
            iPad : /ipad/.test( ua ),
            iPod : /ipod/.test( ua ),
            mac : /macintosh/.test( ua ),
            isLetv : /letv/.test( ua ),
            Android : /android/.test( ua ),
            AndroidPad: /android/.test( ua ) && !/mobile/.test( ua ),
            atwin: /win/.test( ua ),
            opera: /opera/.test( ua ),
            msie: /msie/.test( ua ),
            firefox: /firefox/.test( ua ),
            safari: /safari/.test( ua ) && !/chrome/.test( ua ),
            wph: /windows phone/.test( ua ),
            ps: /playstation/.test( ua ),
            uc: /ucbrowser|ucweb/.test( ua ),
            qq: /mqqbrowser/.test( ua ),
            xiaomi : /xiaomi/.test( ua ),
            weixin : /micromessenger/i.test( ua ),
            weibo : /__weibo__/i.test( ua ),
            isLetvTv : function() {
                try{
                    return typeof LetvFish.getBrowserType == 'function';
                }catch(e){
                    return false;
                }
            }
        };

        var rwebkit = /(webkit)[ \/]([\w.]+)/,
            ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            rmsie = /(msie) ([\w.]+)/,
            rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;
        
        var match = rwebkit.exec( ua ) ||
            ropera.exec( ua ) ||
            rmsie.exec( ua ) ||
            ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
            [];
        
        browser.version = match[2] || "0";
        return browser;
    })();
    var uuid =function (){
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }
    var ad = {
        //基本配置参数
        Config: {
            timelong: 1, //加载过长判断阈值 单位秒
            timeout: 3, //加载超时判断阈值 单位秒
            currentURL: location.href, //当前页面地址值,
            reportURL: 'http://www.sohu.com', //上报接口
            queue: false, //广告位默认是否使用队列加载形式
            commamdExe: false, //此开关开启后，loadData的方法数据会先缓存起来不执行，指导调用commond('do')时才全部执行
            report: { //时间类型上报开关 true上报 false不上报
                onNoFindMap : false,
                onComplete  : false,
                onTimelong  : false,
                onTimeout   : false,
                onDataError : false,
                onPuton     : false
            },
            //加密的时候需要的Key
            'securityKeys':['rt','oid','im','t','data'],
            arkDomain: le.api_host.ark,
            //trigger信息实体
            triggerData: {},
            // 生成tricking加密字典表
            crc_table: [0xf1c0, 0xf248, 0x553e, 0xae68, 0xc753, 0x6269, 0x9a19, 0x7fed,
                0xb010, 0x4d44, 0x6d07, 0x9ec0, 0x578c, 0xbb57, 0x07f1, 0x3d1f,
                0x6944, 0x1f29, 0x014d, 0xce4a, 0x08b5, 0x6f29, 0xdb33, 0x0c96,
                0x1e8b, 0x2045, 0x90b0, 0x676f, 0xb3c1, 0x9316, 0xcc1f, 0x8e54,
                0xc1ea, 0x65a2, 0xa28b, 0xe271, 0x5801, 0x9c97, 0x636e, 0x31f1,
                0xc563, 0x06cb, 0x1145, 0xac9b, 0x38ed, 0xeadc, 0xbecb, 0xc577,
                0xf853, 0x49f0, 0x25e6, 0x7cbf, 0x9424, 0xd1b9, 0xa882, 0x71b2,
                0x571b, 0x45f9, 0x58ed, 0x4545, 0x33b1, 0xd356, 0xf677, 0xd606,
                0xb103, 0x10bb, 0xcc60, 0x53ef, 0x608f, 0x5bcb, 0x6458, 0xa920,
                0x485a, 0xb492, 0xd323, 0x5cc6, 0xf96f, 0x9c72, 0x5d16, 0x3655,
                0xd0e1, 0x89c5, 0x198d, 0xe965, 0xb1b7, 0x1c39, 0x6790, 0x44f9,
                0x7069, 0x103f, 0x4338, 0xc585, 0xbcce, 0x8327, 0x2a91, 0x661d,
                0xa5b9, 0xcac7, 0x1218, 0x6e6b, 0x6996, 0xe1b2, 0x3bfc, 0x79b6,
                0x39b6, 0xd112, 0x6ace, 0x81cf, 0x7239, 0xcc8d, 0x2f46, 0x1518,
                0x9ebd, 0x1f35, 0xca3e, 0x7b97, 0x0428, 0xb3db, 0x9723, 0xa54b,
                0x6253, 0x0a2e, 0x005e, 0x6517, 0xc461, 0xbd05, 0xee83, 0xf766,
                0x9500, 0x87f5, 0x4451, 0x261e, 0x53f0, 0x7980, 0x9cbf, 0xbad8,
                0x4c77, 0x20bb, 0xf5b3, 0xfd02, 0x18b7, 0x3e5a, 0x890f, 0x84d0,
                0xa3fa, 0xc444, 0x9f36, 0xe02e, 0x4e70, 0xc951, 0xf13f, 0x7bea,
                0xdefc, 0x647e, 0x0e6d, 0xa714, 0xa3f3, 0xb406, 0x77a2, 0xb725,
                0x9207, 0x034f, 0x94e7, 0x5abd, 0xe8b4, 0xe576, 0x9c46, 0x4e42,
                0xf5df, 0xdfc3, 0xc680, 0xd4d5, 0x8e90, 0x7123, 0x1569, 0x5b4f,
                0xc8e8, 0x0c3f, 0x48f3, 0x504d, 0x03c8, 0xda9b, 0xbb2a, 0xb03f,
                0x62c4, 0x066e, 0x88b2, 0x05d5, 0x294d, 0x7f9e, 0xfa83, 0xafd5,
                0xde40, 0xe0be, 0x66f9, 0xb991, 0x693d, 0x7b30, 0x0376, 0xa964,
                0x7d70, 0x465e, 0x3520, 0xebda, 0x31ad, 0xecb4, 0x2686, 0xdae9,
                0xac17, 0x9c32, 0x9130, 0x6e08, 0xd7a9, 0x780d, 0x1568, 0x1792,
                0x444d, 0xdd86, 0xf7b9, 0x8315, 0x2678, 0x9ae3, 0xfafa, 0x392f,
                0xf95b, 0x9833, 0x1ee2, 0x9be5, 0x1f23, 0x27ae, 0x9e74, 0x64f4,
                0x0ce9, 0xc452, 0x6ec1, 0xa54c, 0xac38, 0xadbd, 0x05dc, 0xa5f1,
                0xb25b, 0xad01, 0x2aed, 0xd3df, 0x4dcb, 0xa5a7, 0x4bbf, 0x05b7,
                0xc477, 0xed46, 0x2150, 0xc427, 0x01bd, 0x0059, 0x9c1d, 0xa457
            ],
            
            keyMap: {},
            arkMapper:{
                '4': '140', //旅游频道播放页
                '5': '142', //财经频道播放页
                '6': '141', //纪录片频道播放页
                '20': '134', //电视剧频道播放页
                '21': '133', //电影频道播放页
                '22': '135', //动漫频道播放页
                '23': '144', //风尚频道播放页
                '24': '146', //乐视制造(自制)频道播放页
                '25': '143', //汽车频道播放页
                '26': '137', //体育频道播放页
                '27': '139', //音乐频道播放页
                '28': '138', //娱乐频道播放页
                '29': '136', //综艺频道播放页
                '88': '148', //直播播放页
                '166': '148', //直播播放页
                '90': '145', //公开课频道播放页
                '91': '147', //其他频道播放页
                '104': '147', //站内播放页-15秒前贴
                '374': '416', //体育频道-世界杯-首页播放器
                '9': '402', //动漫频道首页
                '281': '413', //体育频道NBA频道首页
                '30': '411', //乐视首页焦点图富媒体专用播放器
                '17': '407', //音乐频道首页
                '7': '400', //电视剧频道首页
                '11': '404', //乐视网首页
                '332': '415', //音乐频道音乐节首页
                '282': '414', //体育频道英超频道首页
                '13': '405', //汽车频道首页
                '31': '412', //电视剧频道-美剧频道首页
                '12': '408', //自制频道首页
                '15': '406', //体育频道首页
                '3': '399', //纪录片频道首页
                '19': '410', //综艺频道首页
                '18': '409', //娱乐频道首页
                '10': '403', //风尚频道首页
                '8': '401', //电影频道首页
                '2': '398', //财经频道首页
                '1': '397', //旅游频道首页
                '16': '418', //搜索详情页
                '14': '417', //搜索结果页   
                '335': '335' , //直播
                '329': '329' , //小米渠道播放器
                '292': '292' , //360渠道播放器
                '132': '132' , //其他
                '131': '131' , //风尚
                '130': '130' , //汽车
                '129': '129' , //财经
                '128': '128' , //轮播
                '127': '127' , //纪录片
                '126': '126' , //旅游
                '125': '125' , //音乐
                '124': '124' , //娱乐
                '123': '123' , //体育
                '122': '122' , //综艺
                '121': '121' , //动漫
                '120': '120' , //电视剧
                '118': '118' , //电影
                '827': '827' , //首页
                '100': '132'   //其他频道
            },
            iosArkMapper: {
                '335': '471' , //直播
                '329': '472' , //小米渠道播放器
                '292': '473' , //360渠道播放器
                '132': '474' , //其他
                '131': '475' , //风尚
                '130': '476' , //汽车
                '129': '477' , //财经
                '128': '478' , //轮播
                '127': '479' , //纪录片
                '126': '480' , //旅游
                '125': '481' , //音乐
                '124': '482' , //娱乐
                '123': '483' , //体育
                '122': '484' , //综艺
                '121': '486' , //动漫
                '120': '487' , //电视剧
                '118': '488' , //电影
                '827': '828' ,  //首页 
                '471': '471' , //直播
                '472': '472' , //小米渠道播放器
                '473': '473' , //360渠道播放器
                '474': '474' , //其他
                '475': '475' , //风尚
                '476': '476' , //汽车
                '477': '477' , //财经
                '478': '478' , //轮播
                '479': '479' , //纪录片
                '480': '480' , //旅游
                '481': '481' , //音乐
                '482': '482' , //娱乐
                '483': '483' , //体育
                '484': '484' , //综艺
                '486': '486' , //动漫
                '487': '487' , //电视剧
                '488': '488' , //电影
                '828': '828' , //首页
                '100': '474'   //其他 
            },
            'exSizeMap': {
                '249': {
                    'width': '640',
                    'height': '100'
                },
                '250': {
                    'width': '640',
                    'height': '100'
                }
            },
            valueMap: {}, //对应名称(name)-广告位ID(做转换使用)
            //广告投放位对应广告位ID
            AdAddress: {},
            showLogic: {} //各广告位显示逻辑函数
        },
        //广告加载KEY
        ADKEY: {},
        SUB_ADKEY: {},
        TemplateKey: {},
        
        

        'reset':function(vid,url,ark){
            for(var key in this.TemplateKey){
                var item = this.TemplateKey[key];
                for(var i = 0 ; i < item.uids.length ; ++i){
                    var adzones = this.Config.keyMap[item.uids[i]];
                    if (adzones && adzones.inject){
                        $(adzones.inject).empty();
                    }
                }

                this.TemplateKey[key] = {"inited":false,"loaded":false,"uids":[]};
            }
            vid = vid || ((window.info || {}).vid || '');
            url = url || le.api_host.ark + '/s?vid=' + (vid || "") + '&n=0&ct=0';
            this.getArkADData(url || this.url,ark || this.ark);
        },
        
        getSecurityKey: function(data) {
            var crc_table = this.Config.crc_table;
            var index           = 0
                , crcIndex      = 0
                , tableEntry    = 0
                , contentLength = ""
                , content       = "";
            for (var index = 0;index<ad.Config.securityKeys.length;index++) {
                content += data[ad.Config.securityKeys[index]];
            }
            contentLength = content.length;
            for (index = 0x0; index < contentLength; index++) {
                var charHex = content.charCodeAt(index);
                var tempIdx = (crcIndex & 0xF) | (charHex & 0xF) << 0x4;
                tableEntry = crc_table[tempIdx];
                crcIndex = crcIndex >> 0x4 ^ tableEntry;
                tableEntry = crc_table[(crcIndex & 0xF) | (charHex & 0xF0)];
                crcIndex = crcIndex >> 0x4 ^ tableEntry;
            }
            return crcIndex.toString(16);
        },
        lazyQueue: {},
        isVisiable: function (elem){
            if(!elem) return false;
            return ($(window).scrollTop()<=($(elem).offset().top+$(elem).outerHeight()))&&(($(window).scrollTop()+$(window).height())>$(elem).offset().top);
        },
        lazyload: function(elem, htmlcode, item, cb){
            elem.html(htmlcode.html);
            elem.css('display','block');
            if(elem && elem.length != 0){
                var top =elem.offset().top;
                
                if (this.isVisiable(elem)){
                    this.showImg(elem);
                    cb && cb.apply(this,arguments);
                    return;
                }
                if (this.lazyQueue[top]){
                    this.lazyQueue[top].push({'elem':elem,'html':htmlcode,'item':item,'loaded':false,'callback':cb});
                }else{
                    this.lazyQueue[top] = [{'elem':elem,'loaded':false,'callback':cb}];
                }
            }
           
        },
        showImg:function(elem){
            var imgs = elem.find('img');
            for(var i = 0 ; i < imgs.length; i++) {
                $(imgs[i]).attr('src', $(imgs[i]).attr('data-src')).fadeIn(500);
            }
        },
        
        sendPartyWithClickType: function(data, uid, type,im,sid,ark) {
            var _self     = this;
            var withCdata = false;
            data          = (data instanceof Array) ? data : [data];
            if (data.length > 0) {
                withCdata = !!data[0].cdata;
            }
            for (var i = 0, l = data.length; i < l; i++) {
                if (data[i].length > 0 || (withCdata && data[i].cdata.length > 0)) {
                    (function(index) {
                        var iSrc = withCdata ? data[index].cdata : data[index];
                        iSrc = _self.getAttachParamsUrl(iSrc, uid, type, im, sid, ark);
                        _self.sendLogByQueue(iSrc);
                    })(i);
                }
            }
        },
        //根据需求拼接url
        getAttachParamsUrl: function(url, uid, type ,im ,sid, ark) {
            var _self = this,isSub = 0;
            if(!url || url === 'javascript:void(0)') {
                return 'javascript:void(0)';
            }
            if (url.indexOf(_self.Config.arkDomain) > -1 || url.indexOf("test.ark.letv.com") > -1 || url.indexOf("10.154.156.147") > -1) {
                var adItem = _self.ADKEY[uid];
                if (!adItem) return;
                if(adItem.isSub){
                    isSub = 1;
                }
                if (adItem.oid == undefined || adItem.orderid == undefined && _self.curBgData){
                    adItem = _self.curBgData;
                }
                var now = new Date().getTime()
                    //, uuid = now + Math.ceil(Math.random() * 1000)
                    , uuid = this.uuid
                    , vModel;
                vModel = (window.__INFO__ || {}).video || {};
                var tc = _self.triggerData.origintime + Math.ceil((now - _self.triggerData.clienttime) / 1000);
                _self.cuid = _self.cuid || Cookie.get('ark_uuid') || _self.triggerData.cuid;
                var param = {
                    rt  : type,
                    oid : adItem.oid,
                    im  : im === undefined ? 1 : im,
                    t   : tc,
                    cuid: _self.cuid,
                    data: [
                            uid, 
                            _self.triggerData.areaid, 
                            ark || _self.Config.ark || 0, 
                            uuid, 
                            adItem.orderid, 
                            vModel.vid || "", 
                            vModel.pid || "", 
                            vModel.cid || "",
                            "1",
                            "0",
                            'letv',
                            sid || "",
                            "0",
                            now,
                            "",
                            "",
                            "",
                            "",
                            "",
                            now,isSub].join(",")
                };
                if(param.rt == 1 && Math.abs(param.t - _self.triggerData.origintime) >= 200 ) {
                    param.t = _self.triggerData.origintime;
                }
                if (isNaN(param.t)) {
                    param.t = _self.triggerData.origintime || now;
                }
                param.s = _self.getSecurityKey(param);
                if (type === 2) {
                    if (url.indexOf("[randnum]") > -1) {
                        url = url.replace("[randnum]", new Date().getTime());
                    }
                    if (url.indexOf("[M_IESID]") > -1) {
                        url = url.replace("[M_IESID]", "LETV_" + uid);
                    }
                    if (url.indexOf("[M_ADIP]") > -1) {
                        url = url.replace("[M_ADIP]", _self.triggerData.ip);
                    }
                    if (url.indexOf("[A_ADIP]") > -1) {
                        url = url.replace("[A_ADIP]", _self.triggerData.ip);
                    }
                    var arrParam = url.split('&u=');
                    url = [arrParam[0], $.param(param) ,"u=" +arrParam[1]].join('&');
                } else {
                    url += "&" + $.param(param);
                }
            } else {
                if (url.indexOf("[randnum]") > -1) {
                    url = url.replace("[randnum]", new Date().getTime());
                }
                if (url.indexOf("[M_IESID]") > -1) {
                    url = url.replace("[M_IESID]", "LETV_" + uid);
                }
                if (url.indexOf("[M_ADIP]") > -1) {
                    url = url.replace("[M_ADIP]", _self.triggerData.ip);
                }
                if (url.indexOf("http://v.admaster.com.cn") > -1) {
                    url = url + ",f" + _self.triggerData.ip;
                }
            }
            return url;
        },
        sendLogByQueue: function(src) {
            // src = 'http://d1.leju.com/ia/2014/10/27/544dab52ec263img.jpg?'+Math.random();
            var _self = this; 
            var iSrc  = src;
            var uId   = "img_" + Math.random();
            uId = uId.replace('.', '');
            if(!iSrc){
                return;
            }
            var sendLog = function(uId, iSrc, callback) {
                window[uId] = $('<img>');
                window[uId].one('load', function() {
                    callback(1);
                }).attr('src', iSrc).one('error', function() {
                    callback(2);
                }).one('abort',function() {
                    callback(3);
                });
            };
            (function(uId,iSrc){
                sendLog(uId, iSrc, function(data) {
                    if (window[uId]){
                        window[uId] = null;
                    }
                });
            })(uId, iSrc);
        },
        
        backCall: function(options) {
            if (options.uid && this.Config.keyMap[options.uid]) {
                this.sendLog(options);
            }
        },
        
        sendLog: function(options) {
            clearTimeout(this['timeout_' + options.uid]);
            this.queueing = false;
            this.loadQueue();
            if (!options.uid) {
                return;
            }
            //如果上报类型需要上报
            if(this.Config.report[options.eventType]) {
                var data = {
                    position : options.uid, //上报广告位位置ID
                    type     : options.eventType //上报事件类型
                    //'putonUrl': this.Config.currentURL, //否放页面地址
                    //'srcUrl':this.ADKEY[options.uid].url //广告数据请求地址
                };
                this.send(data);
                //超时类型数据格式化
                if (this.Config.report['onTimelong'] && options.eventType == 'onComplete') {
                    var costTime = Math.abs(this.ADKEY[options.uid].stime - (new Date()).getTime());
                    if (costTime >= (this.Config.timelong * 1000)) {
                        data.type = 'onTimelong';
                        data['costTime'] = costTime;
                        this.send(data);
                    }
                }
            }
        },
        //数据上报
        send: function(data) {
            var img = $('<img>');
            img.attr('onload', function() {
                img = null;
            }).attr('src', this.Config.reportURL + '?' + $.param(data));
        },
        //第三方监测上报
        sendParty: function(data) {
            var withCdata = false;
            data = (data instanceof Array) ? data : [data];
            if (data.length > 0) {
                withCdata = !! data[0].cdata;
            }
            for (var i = 0, l = data.length; i < l; i++) {
                if (data[i].length > 0 || (withCdata && data[i].cdata.length > 0)) {
                    (function(index) {
                        var img = $('<img>');
                        img.attr('onload', function() {
                            img = null;
                        }).attr('src', withCdata ? data[index].cdata : data[index]);
                    })(i);
                }
            }
        },
        //从好耶吐出的数据中获取相关参数值
        'get': function(type, data) {
            switch (type) {
                case 'inject': //通过广告位ID获取插入元素
                    if (this.Config.keyMap[data].inject) {
                        return $(this.Config.keyMap[data].inject);
                    } else {
                        return null;
                    }
            }
        },
        
        AdDataCheck: function(data) {
            if (data.length > 0) {
                return /(^http.+(jpg|jpeg|gif|png|html)\s?$|^http.+\?.+&letvExtid=1&tag=gug.+)/i.test(data);
            } else {
                return false;
            }
        },
        //更新Config.valueMap
        updateValueMap: function() {
            //读取keyMap设定valueMap值及模拟队列参数
            for (var key in this.Config.keyMap) {
                if (this.Config.keyMap[key].queue == undefined) {
                    this.Config.keyMap[key].queue = this.Config.queue;
                }
                this.Config.valueMap[this.Config.keyMap[key].name] = key;
            }
        },
        init: function() {
            var ad_qs = {
                "r": getQuery("r"),
                "o": getQuery("o"),
                "d": getQuery("d"),
                "w": getQuery("w"),
                "x": getQuery("x"),
                "y": getQuery("y"),
                "z": getQuery("z")
            };
            var vid = ((window.info || {}).vid || '');
            this.new_pro = le.api_host.ark + '/s?vid='+vid+'&n=0&ct=0';
            if (ad_qs.w && ad_qs.x && ad_qs.y && ad_qs.z) {
                this.new_pro = le.api_host.ark + "/p?vid="+vid+"&n=0&ct=0&"+ $.param(ad_qs);
            };
            this.updateKeyMap({
                '188' : {
                    'name':'移动网页端-Android-通栏一'
                },
                '189' : {
                    'name':'移动网页端-iOS-通栏一'
                },
                '249' : {
                    'name':'移动网页端-M站-Android端通栏广告位一',
                    'inject':'#j-Banner-2'
                },
                '250' : {
                    'name':'移动网页端-M站-iOS端通栏广告位一',
                    'inject':'#j-Banner-2'
                },
                '271' : {
                    'name':'移动网页端-M站-Android端通栏广告位二',
                    'inject':'#j-Banner-3'
                },
                '272' : {
                    'name':'移动网页端-M站-iOS端通栏广告位二',
                    'inject':'#j-Banner-3'
                },
                '310' : {
                    'name':'移动网页端-M站-Android端通栏广告位三',
                    'inject':'#j-Banner-1'
                },
                '311' : {
                    'name':'移动网页端-M站-iOS端通栏广告位三',
                    'inject':'#j-Banner-1'
                }

            });
            
            if(location.href=== le.api_host.m_href + '/'){
               this.getArkADData(this.new_pro, 827);   
            }
            else{
                if (typeof __ADINFO__ != 'undefined')
                    this.getArkADData(this.new_pro, __ADINFO__.arkId);   
            }
        },
        //更新Config.keyMap
        updateKeyMap: function(data) {
            if(data === Object(data)) {
                $.extend(true, this.Config.keyMap, data);
                this.updateValueMap();
            }
        },
        //请求show服务
        getArkADData: function(url, ark) {
            ark = ark || __ADINFO__.arkId;
            if (!parseInt(ark)) {
                ark = '132';
            }
            if(browser.iPhone || browser.iPod || browser.iPad) {
                ark = ad.Config.iosArkMapper[ark];
            }else{
                ark = ad.Config.arkMapper[ark];
            }
            this.url        = url;
            this.ark        = ark;
            this.Config.ark = ark;
            var splitChar   = '?';
            if (url && url.indexOf('?') > -1) {
                splitChar = '&';
            }
            window[globalPluginAdId] = this;
            var cuid = Cookie.get('ark_uuid')
            ,mt = new Date().getTime()
            ,t = parseInt(mt/1000);
            this.uuid = (cuid || uuid()) + '_' + mt;
            var reqUrl = url + splitChar + 'ark=' + ark + '&vvid=' + this.uuid + '&t=' + t + '&res=jsonp&j=?';
            $.getJSON(reqUrl,this.resoJsonp);
        },
        //返回的vast数据
        resoJsonp: function(data) {
            var vast = data.vast;
            if(vast) {
                ad.triggerData = {
                    origintime : vast.stime,
                    areaid     : vast.area_id,
                    clienttime : new Date().getTime(),
                    ip         : vast.ip,
                    cuid     :vast.cuid

                };
                ad.loadData(vast);
            }
        },
        //广告异步加载接口
        loadData: function(vast) {
            var _self = this;
            if(!vast)
                return;
            var ads = vast.Ad;
            var inLineItem, impressItem, nonLinearAdsItem;
            var templeKey, adZoneId, companionAdsItem, templeUrl;
            _self.cuid = _self.setCuidCookie(vast.cuid);
            $.each(ads, function(i, item) {
                if (!item) {
                    return;
                }
                inLineItem       = item.InLine;
                impressItem      = inLineItem.Impression;
                nonLinearAdsItem = inLineItem.Creatives.Creative[0].NonLinearAds;//主广告实体
                companionAdsItem = inLineItem.Creatives.Creative[0].CompanionAds.Companion;//伴随广告实体

                adZoneId  = nonLinearAdsItem.NonLinear[0].adzone_id || ((new Date().getTime()) + (Math.random() * 1000));
                templeUrl = nonLinearAdsItem.NonLinear[0].Template.cdata;//模版长URL
                templeKey = _self.getTemplateCacheKey(templeUrl); //保持短URL
                //缓存加载的模板
                if(!_self.TemplateKey[templeKey]) {
                    _self.TemplateKey[templeKey] = {
                        inited : false,     //是否初始化过
                        loaded : false,     //模版是否加载过
                        uids   : [adZoneId] //使用模版的广告Id
                    };
                }else {
                    _self.TemplateKey[templeKey].uids.push(adZoneId);
                }
                //存在该映射
                if (_self.Config.keyMap[adZoneId] && item.parent) {
                        //存替补
                        _self.SUB_ADKEY[item.parent] = {
                            'stime': (new Date()).getTime(), //请求开始时间
                            'orderid': item.order_id,
                            'oid': item.order_item_id,
                            'url': templeUrl, //广告模版地址
                            'templeCacheKey': templeKey,
                            'Impression': impressItem, //呈现时触发数据
                            'NonLinearAds': nonLinearAdsItem,
                            'Companion': companionAdsItem,
                            //'trackingEventsItem': trackingEventsItem,
                            'uid': adZoneId
                        }
                }else if (_self.Config.keyMap[adZoneId]) {
                    _self.ADKEY[adZoneId] = {
                        stime          : (new Date()).getTime(),//请求开始时间
                        orderid        : item.order_id,
                        oid            : item.order_item_id,
                        url            : templeUrl,   //广告模版地址
                        templeCacheKey : templeKey,
                        Impression     : impressItem, //呈现时触发数据
                        NonLinearAds   : nonLinearAdsItem,
                        Companion      : companionAdsItem,
                        uid            : adZoneId
                    }
                } else {
                    //没有找到uid对应keyMap配置信息时上报错误
                    _self.backCall({
                        'uid'       : adZoneId,
                        'eventType' : 'onNoFindMap'
                    });
                    return;
                }
            });
            
            var loadStart = function() {
                    //判断如果是手动执行就先执行广告请求
                    if (_self.Config.commamdExe) return;
                    //不走队列直接发起请求

                    if (_self.ADKEY[adZoneId] && !_self.ADKEY[adZoneId].queue) {
                        _self.queueing = false;
                        _self.loadQueue(_self.ADKEY[adZoneId].uid, true);
                    } else {
                        _self.loadQueue(undefined, true);
                    }
            };
            //请求第三方数据
                var exADLength = 0,
                    exADKEY = {};
                $.each(_self.ADKEY, function(index, item) {
                    var adPar = item.NonLinearAds.NonLinear[0].AdParameters;
                    if (_self.json(adPar).reachmax_data_url) {
                        exADKEY[item.uid] = item;
                        ++exADLength;

                    }
                });
                try {
                    if (exADLength > 0){
                        _self.reqEXTimer = setTimeout(function(){
                            loadStart();
                        },10000);
                        
                        _self._reqExchangeAD(exADKEY, exADLength, loadStart);
                    }
                    else{
                        loadStart();
                    }
                        
                } catch (ex) {
                    loadStart();
                }
            
        },
        'uuid': '',
        //parma @options
        //广告异步加载接口
        '_reqExchangeAD': function(exADKEY, exADLength, cb) {
            var _self = this,
                exADCount = 0;
            $.each(exADKEY, function(index, itemOld) {
                var reqImpr = itemOld.Impression, //请求EX前发曝光
                    reqResult = [], //请求到exAD发检测
                    reqError = {}, //错误检测
                    impression = [], //EX新曝光数据
                    events = itemOld.NonLinearAds.TrackingEvents.Tracking,
                    item = '';
                if (events && events.length > 0) {
                    for (i = 0; i < events.length; i++) {
                        item = events[i];
                        if (item.event == 'reachs') {
                            var reachs = {
                                'cdata': item.cdata,
                                'event': 'start',
                                'type': '4'
                            };
                            itemOld.NonLinearAds.TrackingEvents.Tracking.push(reachs);
                            continue;
                        }
                        if (item.event == 'reachr') {
                            reqResult.push(item);
                            continue;
                        }
                        
                        if (/^reach_err/.test(item.event)) {
                            reqError[item.event] = item;
                            continue;
                        }
                    }
                }                
                var adPar = itemOld.NonLinearAds.NonLinear[0].AdParameters;
                var reqUrl = _self.json(adPar).reachmax_data_url;
                if (!reqUrl || reqUrl == 'javascript:void(0)' ||  reqUrl == 'javascript:;'){
                    if(_self.reqEXTimer)
                        clearTimeout(_self.reqEXTimer);  
                    cb();                        
                    return;
                }
                reqUrl +=reqUrl.indexOf('?') > -1 ? "&":"?"; 
                if(reqUrl.indexOf('[LETV_V_URL]') > -1){
                        reqUrl = reqUrl.replace('[LETV_V_URL]', encodeURIComponent(location.href));
                    }
                var osValue;
                if(browser.iPhone){
                    osValue='IOS';
                }else if(browser.Android){
                    osValue='ANDROID';
                }else{
                    osValue='OTHERS';
                }
                var exchangeParam={
                    h: osValue,
                    l: '0',
                    o: $(window).width(),
                    p: $(window).height()
                };
                reqUrl += $.param(exchangeParam);
                //reqUrl = reqUrl.replace('ark.letv.com', 'ark.letv.com:28080');
                _self.sendPartyWithClickType(reqImpr, itemOld.uid, 1);
                reqUrl += '&j=?' || '';             
                var item1;
                $.ajax({
                    type: "get",
                    async: false,
                    url: reqUrl,
                    dataType: "jsonp", 
                    success: function(data) {
                        ++exADCount;
                        if (!data || !data.vast || !data.vast.Ad || data.vast.Ad.length == 0 || !data.vast.Ad[0].InLine ) {
                            //发送4  没有数据可播放
                            if (reqError['reach_err_4'])
                                _self.sendPartyWithClickType(reqError['reach_err_4'], itemOld.uid, 4);
                            //找替补                        
                            if (_self.SUB_ADKEY) {
                                item1 = _self.SUB_ADKEY[itemOld.oid];
                                if (item1 != null) {
                                    _self.ADKEY[itemOld.uid] = item1;
                                    _self.ADKEY[itemOld.uid].isSub = true;
                                }
                            }

                        }else {
                            var vast = data.vast;
                            if (vast) {
                                var nonLinearAds = vast.Ad[0].InLine.Creatives.Creative[0].NonLinearAds;
                                var nonLinAdsOld = itemOld.NonLinearAds;
                                itemOld.Impression = vast.Ad[0].InLine.Impression;
                                if (!nonLinAdsOld.TrackingEvents.Tracking) {
                                    nonLinAdsOld.TrackingEvents.Tracking = [];
                                }
                                if (nonLinearAds.TrackingEvents)
                                    nonLinAdsOld.TrackingEvents.Tracking = nonLinAdsOld.TrackingEvents.Tracking.concat(nonLinearAds.TrackingEvents.Tracking);

                                if (nonLinearAds.NonLinear.NonLinearClickThrough)
                                    nonLinAdsOld.NonLinear[0].NonLinearClickThrough = nonLinearAds.NonLinear.NonLinearClickThrough.cdata;

                                var oldNonLinCTracking = nonLinAdsOld.NonLinear[0].NonLinearClickTracking;
                                var newNonLinCTracking = nonLinearAds.NonLinear.NonLinearClickTracking;
                                if (!oldNonLinCTracking) {
                                    oldNonLinCTracking = [];
                                }
                                if (newNonLinCTracking)
                                    nonLinAdsOld.NonLinear[0].NonLinearClickTracking = oldNonLinCTracking.concat(newNonLinCTracking);
                                nonLinAdsOld.NonLinear[0].AdParameters = _self.json($.extend({}, {
                                    'creativeType': nonLinearAds.StaticResource.creativeType,
                                    'displayURL': nonLinearAds.StaticResource.cdata
                                }, _self.Config.exSizeMap[itemOld.uid]));
                                _self.sendPartyWithClickType(reqResult, itemOld.uid, 4);
                                _self.ADKEY[itemOld.uid] = itemOld;
                            }
                        }
                        if (exADLength == exADCount){
                            if(_self.reqEXTimer)
                                clearTimeout(_self.reqEXTimer);
                            cb();
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        ++exADCount;
                        if (reqError['reach_err_0'])
                            _self.sendPartyWithClickType(reqError['reach_err_0'], itemOld.uid, 4);
                        if (_self.SUB_ADKEY) {
                            item1 = _self.SUB_ADKEY[itemOld.oid];
                            if (item1 != null) {
                                _self.ADKEY[itemOld.uid] = item1;
                            }
                        }
                        if (exADLength == exADCount){
                            if(_self.reqEXTimer)
                                clearTimeout(_self.reqEXTimer);
                            cb();
                        }
                    }
                });
            });

        },
        getTemplateCacheKey: function(tempPath) {
            if (!tempPath || tempPath.length == 0 || tempPath.indexOf('/') < 0) {
                return '';
            }
            return tempPath.substr(tempPath.lastIndexOf('/') + 1);
        },
        //异步加载队列接口
        //如有uid调用指定uid地址
        loadQueue: function(uid) {
            if(this.queueing) { //对列锁
                return;
            }
            this.queueing = true;
            var _self  = this;
            var ADData = this.getLoad(uid);
            if(ADData) {
                //超时上报事件绑定
                _self['timeout_' + ADData.uid] = setTimeout(function() {
                    _self.queueing = false;
                    _self.loadQueue();
                    _self.sendLog({
                        'uid'       : ADData.uid,
                        'eventType' : 'onTimeout'
                    });
                }, _self.Config.timeout * 1000);

                if(this.TemplateKey[ADData.templeCacheKey]) {
                    if (this.TemplateKey[ADData.templeCacheKey].inited) {
                        _self.loadQueue();
                        return;
                    }
                    this.TemplateKey[ADData.templeCacheKey].inited = true;
                }

                var head = document.getElementsByTagName('head')[0],
                js = document.createElement('script');

                js.setAttribute('type', 'text/javascript'); 
                js.setAttribute('src', ADData.url); 

                head.appendChild(js);
              
            }
        },
        //获取异步数据并进行已加载标示
        getLoad: function(uid) {
            for (var key in this.ADKEY) {
                if(uid) {
                    if (!this.ADKEY[key].loaded && key == uid) {
                        this.ADKEY[key].loaded = true;
                        return this.ADKEY[key];
                    }
                } else {
                    if (!this.ADKEY[key].loaded) {
                        this.ADKEY[key].loaded = true;
                        return this.ADKEY[key];
                    }
                }
            }
            return null;
        },
        //模版加载完成时回调函数
        scriptLoaded: function(callback, templateKey) {
            if (this.TemplateKey[templateKey].loaded){
                return;
            }
            this.TemplateKey[templateKey].loaded = true;
            this.TemplateKey[templateKey].render = callback;
            this.renderAd(templateKey);
        },
        //呈现广告回调
        renderAd: function(templateKey, renderFunc) {
            var _self = this;
            if (!renderFunc){
                renderFunc = (_self.TemplateKey[templateKey] || {}).render || function() {
                    //console.log('未发现模版！'+ templateKey);
                };
            }
            $.each(this.ADKEY, function(index, item) {
                if (item.templeCacheKey == templateKey) {
                    renderFunc(item);
                }
            });
        },
        
        showType: function(data,lazyLoad) {
            if(/^http.+(jpg|gif|png)$/i.test(data.displayURL)) {
                var i_id = 'JS_AD_IMAGE_' + ((new Date()).getTime() + '' + Math.floor(Math.random() * 1000));
                var html = [];
                data.cssClass = data.cssClass ? data.cssClass : {};
                data.cssSytle = data.cssSytle ? data.cssSytle : {};
                if (data.clickURL.length > 0) {
                    html.push('<a id="' + i_id + '" href="' + data.clickURL + '" ' + (data.cssClass.a ? 'class="' + data.cssClass.a + '"' : '') + ' ' + (data.cssSytle.a ? 'style="' + data.cssSytle.a + '"' : 'style="float:left;width:100%;text-align:center;"') + ' target="_blank"><img '+(lazyLoad?"style=\"display:none\" data-":" ")+'src="' + data.displayURL + '" /></a>');
                }else {
                    html.push('<img '+(lazyLoad?"style=\"display:none\" data-":" ")+'src="' + data.displayURL + '" ' + (data.cssClass.a ? 'class="' + data.cssClass.a + '"' : '') + ' ' + (data.cssSytle.a ? 'style="' + data.cssSytle.a + '"' : '') + '"/>');
                }
                return {
                    'id'   : '#' + i_id,
                    'html' : html.join('')
                };
            }else if (/^http.+(html)$/i.test(data.displayURL)) {
                //html类型
                var i_id = 'JS_AD_IFRAME_' + ((new Date()).getTime() + '' + Math.floor(Math.random() * 1000));
                var html = [];
                html.push('<IFRAME id= "' + i_id + '" SRC="' + data.displayURL + '" NAME="' + i_id + '" WIDTH="' + data.width + '" HEIGHT="' + data.height + '" FRAMEBORDER="no" BORDER="0" MARGINWIDTH="0" MARGINHEIGHT="0" SCROLLING="no"></IFRAME>');
                return {
                    'id'   : '#' + i_id,
                    'html' : html.join('')
                };
            }else if (data.jslink == true && data.jsInjectId.length > 0) {
                //js类型
                return {
                    id   : '#' + data.jsInjectId,
                    html : '<div id="' + data.jsInjectId + '"></div>'
                }
            }
        },
         //json对象转换
        'json': function(data) {
            try {
                if (typeof data === "string") {
                    if (JSON && JSON.parse) {
                        return JSON.parse(data);
                    }
                    return eval("(" + data + ")");
                }
                //谨慎使用
                return JSON.stringify(data);
            } catch (ex) {
                return 'error';
            }
        },
        //播放页关闭广告
        closeAd: function(id) {
            if ($(id)) {
                try {
                    $(id).remove();
                } catch (e) {
                    
                }
            }
        },
        'setCuidCookie': function(cuid){
            var le_cookie = $.cookie('ark_uuid');
            if(location.host.indexOf('.le.com') >= 0 && cuid && (!le_cookie || le_cookie != cuid)){
                le_cookie = cuid;
                $.cookie('ark_uuid',cuid,{
                    'expires':new Date(2060,00,01, 08,00,01),
                    'domain':'le.com'
                });
                //广告用户cookie设置到le.com成功后发送检测
                var img = $('<img>');
                img.attr('onload', function() {
                    img = null;
                }).attr('src', le.api_host.ark+'/apsdbg/cm/ms?url=' + encodeURIComponent(location.href));
            }
            return le_cookie;
        }
    };

    ad.updateValueMap();
    ad.init();
    
    try {
            var events=require('components/util/events');
            events.on('nextVideoReady',$.proxy(function(data){             
                this.reset();
            },ad));
        } catch (e) {
            // console.log(e);
    }

    module.exports = ad;
});
/* === lem:components/com_banner/adRemove.js === */
;(LTK["components/com_banner/adRemove"] = function () {
	'use strict';
	var AdRemove = {
		init: function () {
			setTimeout(function () {
				$('tlbs-flux').remove();
			}, 20000);
		}
	};
	AdRemove.init();
});


if (typeof info != 'undefined') {
    window.__INFO__ = {'video': info};
}


le.msg = {
	'405':'请输入验证码!',
	'406':'验证码输入错误!'
};

/* === lem:main/base/base.js === */
;(LTK["main/base/base"] =function(require){
    'use strict';
    var StatsInit = require('components/sendStat/StatsInit');
    StatsInit.init();
    require('components/com_header/channel');
    require('components/com_header/channel_v2');
    require('components/user/get_userinfo');
    require('components/search/search_simple');
    require('components/app/home_open_app');
    require('components/sendStat/msite_stat');
	require('components/scroll/scrollUp');
    require('components/player/float_layer_ad'); //浮层广告初始化
	require('components/com_banner/adRemove');//20秒移除移动运营商在页面上增加的气泡按钮
});

require("main/base/base");
