// ==UserScript==
// @name         insane script
// @namespace    https://shrekis.life/OJ0BZE
// @version      228
// @description  It works?
// @author       Noob
// @match        *://nz.ua/*
// @grant        none
// @run-at       document-start
// @icon         https://static.wikia.nocookie.net/f0e6ab88-6fb8-42c6-8ca6-7b5cfb180363/scale-to-width/370
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('DOMContentLoaded', function() {
        const element = document.getElementById('predmet-list');
        if (element) {
            element.removeAttribute('disabled');
            console.log("Done.");
        } else {
            console.log("Element not found!");
        }
    });
})();