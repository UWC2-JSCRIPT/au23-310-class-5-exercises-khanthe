// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const mainNode = body.getElementsByTagName('main')[0];
console.log(mainNode);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const ulParentBody = ul.closest('body');
console.log(ulParentBody);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const liThreeInPrevSibling = p.previousElementSibling.getElementsByTagName('li')[2];
console.log(liThreeInPrevSibling);