"use strict";
function main() {
  let gaus = process.argv.slice(2).join(" ");
  if (gaus === "ryan") {
    return "rgaus.net";
  } else if (gaus === "nancy" || gaus === "mom"){
    return "nancysews.com";
  } else if (gaus === "bob" || gaus === "robert" || gaus === "dad"){
    return "twohourdelay.com";
  } else {
    return null;
  }
}
console.log(main());
