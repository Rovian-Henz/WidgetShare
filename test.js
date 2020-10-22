(function () {
    let options = {
        facebook: "",
        whatsapp: "",
        email: "",
        phone: "",
        logo: "",
        message: "",
        color: ""
    }
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = `${process.env.LINK_TO_SERVER}/WidgetShare/script/ShareWidget.js`;
    s.onload = function () {
        WidgetIframeJS.init(options);
    };
    var t = document.createElement('script');
    t.type = 'text/javascript';
    t.async = true;
    t.src = `${process.env.LINK_TO_SERVER}/WidgetShare/script/ControlIframe.js`;
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
    x.parentNode.insertBefore(t, x);
})();