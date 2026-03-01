/* -------------------------  EVENT AND CALLBACK ------------------------- */

$('#big-button').click(
    function()
    {
        alert("Not too hard!");
    }
);

/* ----------------------------------------------------------------------- */

$('.note').css('background', 'red').height(100);

/* ----------------------------------------------------------------------- */

/* It’s sometimes useful to limit the area of the DOM from which an element can be selected. The area of the
DOM used is also known as a different context.

To tell jQuery which area you want to select from, you pass a second argument. That can be:
- a DOM element, 
- a string selector (selecting an element that jQuery will find and use)
- or a jQuery object.

jQuery will only search within this context for your selector.

Here’s an example. Notice that the variables that are used to store jQuery objects begin with a dollar. This a
convention to help you and readers of your code understand that it’s a jQuery object being saved */
var $header = $('header'); // create a jQuery object that stores all <header> elements
alert('$header:\n' + $header.html());

/* create a jQuery object that stores only the class="note" elements
inside the header elements stored by the $header object */
var $classNoteInHeader = $('.note', $header);
alert('$classNoteInHeader:\n' + $classNoteInHeader.html());

