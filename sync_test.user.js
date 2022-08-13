// ==UserScript==
// @name         🙈 Sync Test
// @version      1.3
// @author       spoko
// @match        *://*/*
// @downloadURL  https://github.com/MattMcDowall/TM_Scripts/raw/main/sync_test.js
// @updateURL    https://github.com/MattMcDowall/TM_Scripts/raw/main/sync_test.js
// @description  Does a thing.
// @grant        none
// ==/UserScript==

// This time really all I'm doing is updating the version number

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
