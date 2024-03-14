// ==UserScript==
// @name         New Userscript
// @namespace    https://tahvel.edu.ee/
// @version      2024-03-12
// @description  try to take over the world!
// @author       You
// @match        https://tahvel.edu.ee/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // CSS styles
    var css = `
    .home-data-section-tab-title {
        flex: 1 1 0;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        margin: 0;
        background: 
        min-height: var(--min-clickable-area);
        min-width: unset;
        white-space: unset;
        word-break: break-word;
    }
    
    .home-data-section-tab-title-active, .home-data-section-tab-title-active:not([disabled]):hover {
        background: rgb(236, 240, 242);
    }
    `;

    // Injection rawr
    GM_addStyle(css);
})();
