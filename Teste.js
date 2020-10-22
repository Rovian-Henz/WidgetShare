(function () {
    let options = {
        facebook: "kretos.cc",
        whatsapp: "54999123845",
        email: "rovian.henz@gmail.com",
        phone: "54999123845",
        logo: "https://kretos.cc/Content/Imagens/Home/logo-pequeno.png",
        message: "teste aqui caraleo",
        color: "#cade1a"
    }
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://static.valorizza.com.br/WidgetShare/script/ValorizzaShareWidget.js';
    s.onload = function () {
        WidgetIframeJS.init(options);
    };
    var t = document.createElement('script');
    t.type = 'text/javascript';
    t.async = true;
    t.src = 'https://static.valorizza.com.br/WidgetShare/script/ControlIframe.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
    x.parentNode.insertBefore(t, x);
})();