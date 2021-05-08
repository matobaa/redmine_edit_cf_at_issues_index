// -*- coding: utf-8 -*-
//
// Copyright (C) 2021 Akihiro MATOBA <matobaa+github@gmail.com>
// All rights reserved.
// 
// This software is licensed as described in the file LICENSE, which
// you should have received as part of this distribution.

/*
Path pattern: /issues$
Type: JavaScript
*/

document.addEventListener("DOMContentLoaded", () => {
  document.selection ||= { empty: () => { /*pass*/ } };  // hack to contextMenuClearDocumentSelection in context_menu.js
  document.querySelectorAll("td.float, td.int, td.string").forEach(cf => {
    cf.contentEditable = true;
    cf.setAttribute("data-value", cf.innerText);
    cf.addEventListener('keydown', function (event) {
      if (event.code !== "Enter") return true;
      if (this.getAttribute("data-value") === this.innerText) return true;
      if (this.classList.contains("float") && !this.innerText.match("^[0-9]*(\.[0-9]+)?$") ||
        this.classList.contains("int") && !this.innerText.match('^[0-9]*$')) return true;
      event.preventDefault();
      cf_id = Array.from(this.classList).find(e => e.startsWith("cf_"))?.slice(3);
      issue_id = this.parentNode?.id?.slice(6);
      value = this.innerText || "__none__";
      home = document.querySelector("#top-menu .home")?.getAttribute("href") || ""
      if (home.endsWith('/')) home = home.slice(0,-1)
      link = document.createElement("a");
      link.setAttribute("data-method", "post");
      link.href = `${home}/issues/bulk_update?back_url=${window.location.pathname}&ids[]=${issue_id}&issue[custom_field_values][${cf_id}]=${value}`;
      this.appendChild(link);
      link.click();
    });
  })
});
