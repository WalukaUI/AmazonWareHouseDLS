let aa = document.getElementsByClassName("s-widget-spacing-small");
let parent = document.getElementsByClassName("s-search-results");
let yy = document.getElementsByClassName("sg-col-inner");
let searchBar = document.getElementsByClassName(
  "a-section a-spacing-none s-result-item s-flex-full-width s-widget s-widget-spacing-large"
);

let newA = [];
let srch = [];

srch.push(searchBar[3]);

for (let i = 0; i < aa.length; i++) {
  if (aa[i].textContent.includes("More Buying Choices") === true) {
    newA.push(aa[i]);
  }
}

while (yy[2].firstChild) {
  yy[2].removeChild(yy[2].firstChild);
}

for (let x of newA) {
  yy[2].appendChild(x);
}

yy[2].appendChild(srch[0]);
