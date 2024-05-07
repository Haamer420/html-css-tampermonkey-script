// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-03-15
// @description  try to take over the world!
// @author       You
// @match        https://tahvel.edu.ee
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.ee
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    setTimeout(() => {


    }, 1000)

    function colorGrades() {
        let grades = document.querySelectorAll("span.layout-align-start-center.layout-row > span")
        let bad = ["2", "MA", "1", "X"]

        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            if (bad.includes(grade.textContent)) {
                grade.style.fontWeight = 'bold';
                grade.style.color = '#FF0000';
            }
        }
    }

    window.addEventListener("load", () => {
        setTimeout(() => {

            const currentUrl = window.location.href;
            console.log(currentUrl);

            // any https://tahvel.edu.ee/#/ url

            document.querySelector("div").style.backgroundImage = "url('https://i.pinimg.com/originals/fd/d0/0e/fdd00eff2cfe977daed3584f56eafbc9.gif')"
            document.querySelector("div").style.backgroundColor = 'transparent'
            document.getElementById("site-sidenav-wrapper").style.background = 'transparent'
            document.getElementById("main-content").style.background = "transparent"
            // need on katki for some reason
            //document.getElementById("home-page-container").style.background = "transparent"
            //document.getElementById("home-data-sections-container").style.background = "transparent"
            var imgElement = document.querySelector("img[alt='school logo; link to front page;'][aria-label='kooli logo; link esilehele;']");
            if (imgElement) {
                imgElement.src = "https://github.com/Haamer420/html-css-tampermonkey-script/blob/main/tptpet.gif?raw=true";
                imgElement.style.maxHeight = "200px";
            }

            // https://tahvel.edu.ee/#/students/journals "päevik" view

            if (currentUrl == "https://tahvel.edu.ee/#/students/journals") {
                //console.log("afafa")
                var observer = new MutationObserver(function (mutations) {
                    colorGrades();
                });

                //console.log("test");

                var config = { childList: true };

                let targets = document.querySelectorAll("tbody.md-body")

                for (let i = 0; i < targets.length; i++) {
                    let target = targets[i]
                    observer.observe(target, config);
                }

                colorGrades();
            }
        }, 1000);
    });

    var css = `
    .home-data-section-tab-title {
        flex: 1 1 0;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        margin: 0;
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
