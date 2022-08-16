// ==UserScript==
// @name         🙈 Sync Test
// @version      2.5
// @author       spoko
// @match        *://*/*
// @downloadURL  https://github.com/MattMcDowall/TM_Scripts/raw/main/sync_test.user.js
// @updateURL    https://github.com/MattMcDowall/TM_Scripts/raw/main/sync_test.user.js
// @description  Does a thing.
// @grant        none
// ==/UserScript==

// Updated August 16 @ 08:10 from CTR desktop

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
