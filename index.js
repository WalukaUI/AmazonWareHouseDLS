window.addEventListener("DOMContentLoaded", () => {
  let deals = document.getElementsByClassName("s-widget-spacing-small");
  let parent = document.getElementsByClassName("s-search-results");
  let parentDiv = document.getElementsByClassName("sg-col-inner");
  let searchBar = document.getElementsByClassName(
    "a-section a-spacing-none s-result-item s-flex-full-width s-widget s-widget-spacing-large"
  );

  let newArray = [];
  let newSearchBar = [];

  for (let i = 0; i < searchBar.length; i++) {
    if (searchBar[i].textContent.includes("Next") === true) {
      newSearchBar.push(searchBar[i]);
    }
  }

  for (let i = 0; i < deals.length; i++) {
    if (deals[i].textContent.includes("More Buying Choices") === true) {
      newArray.push(deals[i]);
    }
  }

  while (parentDiv[2].firstChild) {
    parentDiv[2].removeChild(parentDiv[2].firstChild);
  }

  for (let x of newArray) {
    parentDiv[2].appendChild(x);
  }

  parentDiv[2].appendChild(newSearchBar[0]);
});
