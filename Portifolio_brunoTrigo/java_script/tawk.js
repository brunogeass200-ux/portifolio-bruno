(function () {
    var Tawk_API = window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.mostrarChat = function () {
        if (typeof Tawk_API.showWidget === "function") {
            Tawk_API.showWidget();
        }
    };

    Tawk_API.onLoad = window.mostrarChat;

    var tawkScript = document.createElement("script");
    var firstScript = document.getElementsByTagName("script")[0];
    tawkScript.async = true;
    tawkScript.src = "https://embed.tawk.to/6aa85f5588ca00344d721cc5/default";
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");
    firstScript.parentNode.insertBefore(tawkScript, firstScript);
})();

