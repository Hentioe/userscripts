// ==UserScript==
// @name         WrapperCode
// @namespace    https://github.com/Hentioe
// @version      0.1.0
// @description  Use code to wrap the content of the pre tag.
// @author       Hentioe
// @match https://*/*
// @match http://*/*
// ==/UserScript==

(function () {
  "use strict";

  Array.prototype.slice
    .call(document.getElementsByTagName("pre"))
    .filter(
      (elem) =>
        Array.from(elem.childNodes).filter((child) => child.tagName !== "CODE")
          .length > 0
    )
    .forEach((elem) => {
      elem.innerHTML = `<code>${elem.innerHTML}</code>`;
    });
})();