// ==UserScript==
// @name         Google: Hide "People also search for"
// @description  Eliminates all those misclicks caused by the "People also search for" pop-ins.
// @version      1.0.0
// @include      /^https:\/\/(www\.)?google\.[a-z]+\/search/
// @run-at       document-start
// ==/UserScript==

(() => {
    "use strict";
    const styleElement = document.createElement("style");
    styleElement.textContent = `
        div[id^="eob_"] {
            display: none !important;
        }
    `;
    document.documentElement.appendChild(styleElement);
})();
