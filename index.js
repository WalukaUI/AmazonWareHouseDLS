let aa = document.getElementsByClassName("s-widget-spacing-small");
let parent = document.getElementsByClassName("s-search-results");
let yy = document.getElementsByClassName("sg-col-inner");

let newA = [];

for (let i = 0; i < aa.length; i++) {
  if (aa[i].textContent.includes("More Buying Choices") === true) {
    newA.push(aa[i]);
  }
}

while (yy[2].firstChild) {
  yy[2].removeChild(yy[2].firstChild);
}

// let ff=document.createElement("div")
// yy[2].appendChild(ff)

for (let x of newA) {
  yy[2].appendChild(x);
}
