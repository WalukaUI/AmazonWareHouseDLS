// ==UserScript==
// @name         Amazon "More Buying Options" Filter!!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shop Amazon "More Buying Options" without ads and other products.
// @author       LukaUI
// @match        https://www.amazon.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  //Load on Window Load
  window.addEventListener("load", () => {
    let deals = document.getElementsByClassName("s-widget-spacing-small");
    let searchBar = document.getElementsByClassName(
      "a-section a-spacing-none s-result-item s-flex-full-width s-widget s-widget-spacing-large"
    );
    let parentRows = document.getElementsByClassName(
      "s-main-slot s-result-list s-search-results sg-row"
    );

    let filteredProducts = [];
    let newSearchBar = [];

    // Fiter Out Search bar and save in newSearchBar Array
    for (let i = 0; i < searchBar.length; i++) {
      if (searchBar[i].textContent.includes("Next") === true) {
        newSearchBar.push(searchBar[i]);
      }
    }

    // Filter all More Buying Options with the price on the window and save in filteredProducts array
    for (let i = 0; i < deals.length; i++) {
      if (deals[i].textContent.includes("More Buying Choices") === true) {
        let divsInsideParentDiv = deals[i].getElementsByClassName(
          "a-row a-size-base a-color-secondary"
        );
        if (deals[i].textContent.includes("Excellent condition") === true) {
          let getRow = deals[i].getElementsByClassName("a-row a-spacing-mini");
          let filteredPrice = getRow[0].innerText
            .split("More Buying Choices")[1]
            .split("(")[0]
            .split("$")[1];
          let priceToInt = parseFloat(filteredPrice);
          filteredProducts.push([deals[i], priceToInt]);
        } else {
          let price = divsInsideParentDiv[
            divsInsideParentDiv.length - 1
          ].innerText
            .split("\n")[1]
            .split("(")[0]
            .split("$")[1];
          let priceToInt = parseFloat(price);
          filteredProducts.push([deals[i], priceToInt]);
        }
      }
    }

    // Sort filteredProducts according to thdeal pice

    let sortedProducts = filteredProducts.sort(function (a, b) {
      return a[1] - b[1];
    });

    //Create a new div to save searchBar
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#FFE6E6";
    newDiv.className = "srhBar";

    //Remove all products on the window
    while (parentRows[0].firstChild) {
      parentRows[0].removeChild(parentRows[0].firstChild);
    }

    // load warehouse deals on window
    for (let x of sortedProducts) {
      parentRows[0].appendChild(x[0]);
    }

    //load search bar at the end of the window
    newDiv.appendChild(newSearchBar[0]);
    parentRows[0].appendChild(newDiv);
  });
})();
