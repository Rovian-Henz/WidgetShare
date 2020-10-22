document.addEventListener('DOMContentLoaded', () => {
    WidgetJS.init();
});

WidgetJS = {
    init: function () {
        WidgetJS.createOptions();
    },
    createOptions: function () {
        const queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        urlParams = Array.from(urlParams);
        let options = {}
        urlParams.forEach(item => {
            options[`${item[0]}`] = `${this.decodeChars(item[1])}`;
        });
        this.validateOptions(options);
    },
    geraCodigoFace: function (url, elementoPai) {
        html =
            `<div class="topMessenger">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-5 -5 30 30" class="widget-close widget-svg"><path d=" M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill-rule="evenodd"></path></svg>
        </div>
        <div class="fb-page" data-href="https://www.facebook.com/${url}" data-tabs="messages" data-width="300" data-height="250" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
            <blockquote cite="https://www.facebook.com/${url}" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/${url}">${url}</a>
            </blockquote>
        </div>`;
        elementoPai.innerHTML = html;
        this.closeMessenger();
    },
    geraClickFace: function () {
        let actionButton = document.querySelector('.button.faceb');
        actionButton.addEventListener('click', () => {
            let faceItem = document.querySelector('.facePopup');
            faceItem.classList.toggle('active');
        });
    },
    validateOptions: function (options) {
        if (options) {
            if (options.facebook) {
                let facePopup = document.querySelector('.facePopup');
                this.geraCodigoFace(options.facebook, facePopup);
                this.geraClickFace();
            } else {
                let item = document.querySelector('.button.faceb');
                item.classList.add('WithoutOption');
            }
            if (options.whatsapp) {
                let item = document.querySelector('.button.whats');
                item.href = `https://wa.me/+55${options.whatsapp}`
            } else {
                let item = document.querySelector('.button.whats');
                item.classList.add('WithoutOption');
            }
            if (options.email) {
                let item = document.querySelector('.button.email');
                item.href = `mailto:${this.decodeChars(options.email)}`
            } else {
                let item = document.querySelector('.button.email');
                item.classList.add('WithoutOption');
            }
            if (options.phone) {
                let item = document.querySelector('.button.phone');
                item.href = `tel:+55${options.phone}`
            } else {
                let item = document.querySelector('.button.phone');
                item.classList.add('WithoutOption');
            }
            if (options.logo) {
                let item = document.querySelector('.logo-cliente');
                let img = document.createElement('img');
                img.src = this.decodeChars(options.logo);
                item.appendChild(img);
            } else {
                let item = document.querySelector('.logo-cliente');
                item.classList.add('WithoutOption');
            }
            if (options.message) {
                let item = document.querySelector('.message');
                item.innerHTML = this.decodeChars(options.message);
            } else {
                let item = document.querySelector('.message');
                item.classList.add('WithoutOption');
            }
            if (options.color) {
                let button = document.querySelector('.button.opens .svg-icon-parent');
                button.style.backgroundColor = this.decodeChars(options.color);
            }
        }
    },
    decodeChars: function (string) {
        return string.replace("%20", " ").replace("%3A", ":").replace("%40", "@").replace("%23", "#").replace("%2F", "/");
    },
    closeMessenger: function () {
        let messenger = document.querySelector('.topMessenger svg');
        messenger.addEventListener('click', () => {
            let faceItem = document.querySelector('.facePopup');
            faceItem.classList.toggle('active');
        });
    }
}

function closeItem() {
    let closeItem = document.querySelector('.widget-share-start');
    closeItem.classList.add('hide');
}

function openSocials() {
    closeItem();
    let buttonInit = document.querySelector('.buttons-init');
    let buttonList = document.querySelector('.buttons-list');
    let faceItem = document.querySelector('.facePopup');
    faceItem.classList.remove('active');
    buttonInit.classList.toggle('active');
    buttonList.classList.toggle('active');
}