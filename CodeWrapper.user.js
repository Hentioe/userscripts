// ==UserScript==
// @name         CodeWrapper
// @namespace    https://github.com/Hentioe
// @version      0.1.1
// @description  Use code to wrap the content of the pre tag.
// @author       Hentioe
// @match https://*/*
// @match http://*/*
// ==/UserScript==

(function () {
  "use strict";

  const codeStyle = "border:0;margin:0;padding:0;";

  Array.prototype.slice
    .call(document.getElementsByTagName("pre"))
    .filter(
      (elem) =>
        Array.from(elem.childNodes).filter((child) => child.tagName !== "CODE")
          .length > 0
    )
    .forEach((elem) => {
      elem.innerHTML = `<code style="${codeStyle}">${elem.innerHTML}</code>`;
    });
})();
