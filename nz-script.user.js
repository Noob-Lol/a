// ==UserScript==
// @name         insane script
// @namespace    Violentmonkey Scripts
// @version      228
// @description  It works?
// @author       Noob
// @match        *://nz.ua/*
// @grant        none
// @run-at       document-start
// @icon         https://static.wikia.nocookie.net/f0e6ab88-6fb8-42c6-8ca6-7b5cfb180363/scale-to-width/370
// @homepageURL  https://github.com/Noob-Lol
// @downloadURL  https://github.com/Noob-Lol/a/raw/refs/heads/main/nz-script.user.js
// @supportURL   https://github.com/Noob-Lol/a/blob/main/README.md
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
