// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const buyAnchor = document.createElement('a');
const buyText = document.createTextNode('Buy now!');
const allPTags = document.getElementsByTagName('p');
const lastP = allPTags[allPTags.length - 1];
buyAnchor.appendChild(buyText);
buyAnchor.setAttribute('id', 'cta');
lastP.after(buyAnchor);


// Access (read) the data-color attribute of the <img>,
// log to the console
const myImg = document.getElementsByTagName('img')[0];
const myImgColor = myImg.dataset.color;
console.log(`Image dataset color: ${myImgColor}`);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const listTurbocharged = document.getElementsByTagName('li');
listTurbocharged[2].setAttribute('class','highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
lastP.remove();