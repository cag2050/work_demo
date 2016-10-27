/**
 * Created by chenanguo on 2016/10/27.
 */
var Tab = function(options){
    console.log(111);
    var opt = this.options = $.extend({
        cont : '[data-tab]',
        btHdr : 'data-tabbt',
        ctHdr : 'data-tabct',
        action : 'mouseover',
        btClsName : 'active',
        ctClsName : 'active',
        defIndex : -1,
        onChange : null
    }, options);

    var self = this;
    var Cont = $(opt.cont);
    var opt = this.buildOptions(Cont, 'tab');


    var Buttons = Cont.find('[' + opt.btHdr + ']');
    var Contents = Cont.find('[' + opt.ctHdr + ']');

    Buttons.bind(opt.action, function(){
        var button = $(this);
        var btvalue = button.attr(opt.btHdr);
        var ctvalue = btvalue + '_child';

        Buttons.removeClass(opt.btClsName);
        Cont.find('[' + opt.btHdr + '=' + btvalue + ']').addClass(opt.btClsName);

        Contents.removeClass(opt.ctClsName);
        Cont.find('[' + opt.ctHdr + '=' + ctvalue + ']').addClass(opt.ctClsName);
        //Contents.hide()
        //Cont.find('[' + opt.ctHdr + '=' + ctvalue + ']').show();

        $.isFunction(opt.onChange) && opt.onChange.call(self, button, Buttons.index(button));
    });

    this.setTab = function(index){
        $(Buttons[index]).trigger(opt.action);
    };

    if(opt.defIndex>=0)this.setTab(opt.defIndex);
};

Tab.prototype.buildOptions = function(c, l){
    for(var p in this.options){
        c.attr(l + '-' + p)&&(this.options[p] = c.attr(l + '-' + p));
    }
    return this.options;
};