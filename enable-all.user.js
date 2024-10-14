// ==UserScript==
// @name         Remove disabled from all
// @version      1.0
// @description  Remove "disabled" attribute from all elements on the page
// @author       Noob
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @icon         https://github.com/Noob-Lol/a/raw/main/idk.png
// @homepageURL  https://github.com/Noob-Lol
// @downloadURL  https://github.com/Noob-Lol/a/raw/main/enable-all.user.js
// @supportURL   https://github.com/Noob-Lol/a/blob/main/README.md
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('DOMContentLoaded', function() {
        const disabledElements = document.querySelectorAll('[disabled]');
        if (disabledElements.length > 0) {
            disabledElements.forEach(function(element) {
                element.removeAttribute('disabled');
                console.log("Removed disabled attribute from:", element);
            });
        } else {
            console.log("No disabled elements found.");
        }
    });
})();
