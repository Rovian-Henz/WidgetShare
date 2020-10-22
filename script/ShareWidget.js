WidgetIframeJS = {
    init: function (options) {
        window.onload = WidgetIframeJS.createParams(options);
    },
    createIframe: function (parametros) {
        let divPai = document.createElement("div")
        divPai.id = "widgetShare";
        let ifrm = document.createElement("iframe");
        ifrm.id = "widgetShareIframe"
        this.createCss();
        ifrm.setAttribute("src", `${process.env.LINK_TO_SERVER}/WidgetShare/index.html${parametros}`);
        divPai.appendChild(ifrm);
        document.body.appendChild(divPai);
    },
    createCss: function () {
        style = document.createElement('style');
        let css = `
        #widgetShare{
            right: 0!important;
            visibility: visible;
            bottom: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            position: fixed !important;
            transition: none !important;
            z-index: 16000160 !important;
            text-align: center !important;
            width: 75px;
            height: 70px;
        }
        #widgetShare:hover{
            width: 190px;
            height: 70px;
        }
        #widgetShare.active{
            width: 350px;
            height: 350px;
        }
        #widgetShareIframe{
            width: 100%;
            height: 100%;
            border: none;
        }`;
        style.appendChild(document.createTextNode(css))
        head = document.head || document.querySelector('head');
        head.appendChild(style);
    },
    createParams: function (options) {
        urlParams = Object.entries(options)
        let ParamsReady = urlParams ? "?" : "";
        urlParams.forEach(item => {
            ParamsReady += `${item[0]}=${this.encodeChars(item[1])}&`
        });
        if (ParamsReady)
            this.createIframe(ParamsReady);
    },
    encodeChars: function (string) {
        return string.replace(" ", "%20").replace(":", "%3A").replace("@", "%40").replace("#", "%23").replace("/", "%2F");
    }
}