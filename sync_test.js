// ==UserScript==
// @name         🙈 Sync Test
// @version      1.1
// @author       spoko
// @match        *://*/*
// @downloadURL  https://github.com/MattMcDowall/TM_Scripts/raw/main/sync_test.js
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
