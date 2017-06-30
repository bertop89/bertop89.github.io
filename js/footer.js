var doc = document.querySelector('link[rel="import"]').import;
// Grab DOM from doc.html's document.
var text = doc.querySelector('.footer');
document.querySelector('.container').appendChild(text.cloneNode(true));