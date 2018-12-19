

var startItem = document.getElementByID('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';


Stickyfill.add(document.querySelector('.js-sidebar'))
