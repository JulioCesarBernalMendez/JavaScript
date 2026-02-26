alert("document.getElementById('header'):");

// document.getElementById is a method for getting hold of an element by its ID
var header = document.getElementById('header');
alert(header);

alert("header:");
alert(header.textContent);

/* The 'header' element can then be manipulated, its size and color can be changed,
and other code can be declared to handle the element being clicked on or hovered over.
It’s supported in pretty much all the browsers you need to worry about */

/* ------------------------------------------------- */

alert("document.getElementsByTagName('li'):");

/* document.getElementsByTagName works in much the same way as getElementById, except that it
takes a tag name (a, ul, li, etc) instead of an ID and returns a NodeList, which is essentially
an array of the DOM Elements */
var liElements = document.getElementsByTagName('li');
alert(liElements);

alert("liElements:");
for(var i = 0; i < liElements.length; i++)
{
    alert(liElements[i].textContent);
}

/* ------------------------------------------------- */

alert("document.getElementsByClassName('accessaid'):");

/* document.getElementsByClassName returns the same kind of NodeList as
getElementsByTagName, except that you pass a class name to be matched, not a tag name */
var accessid = document.getElementsByClassName('accessaid');
alert(accessid);

alert("accessid:");
alert(accessid[0].textContent);

/* ------------------------------------------------- */

/* A couple of new methods are available in modern browsers that make selecting elements easier by allowing
the use of CSS selectors. They are document.querySelector and document.querySelectorAll.

querySelector, like getElementById, returns only one element whereas querySelectorAll returns
a NodeList. If multiple elements match the selector you pass to querySelector, only the first will be
returned */

alert("document.querySelector('#header'):");

header = document.querySelector('#header');
alert(header);

alert("header:");
alert(header.textContent);

// ---

alert("document.querySelectorAll('a'):");

var aElements = document.querySelectorAll('a');
alert(aElements);

alert("aElements:")
for(var i = 0; i < aElements.length; i++)
{
    alert(aElements[i].textContent);
}