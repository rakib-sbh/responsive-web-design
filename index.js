const r = document.querySelector(":root");

const computerStyle = getComputedStyle(r);
const value = computerStyle.getPropertyValue("--dark-background");
console.log(value);
