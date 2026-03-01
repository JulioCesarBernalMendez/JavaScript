/* -------------------------  EVENT AND CALLBACK ------------------------- */
$('#big-button').click(
    function()
    {
        alert("Not too hard!");
    }
);

/* ----------------------------------------------------------------------- */

/* jQuery also makes performing actions on many elements at the same
time simple, which is incredibly useful.
In the example below $('.note') selects all the elements with a class of note on the page
and then we set the background of all of the note boxes to red and their heights to 100px */
$('.note').css('background', 'red').height(100);

/* jQuery uses a really neat chainable syntax that allows code like the above. This works
because, for any kind of “setting” method, jQuery returns the same thing as the selector
function (“$”) does: $ is a function that returns a jQuery wrapper around an element.
.css is a method of that jQuery wrapper and it too returns the same wrapper.
.height sets the height of the element selected, and of course there’s an equivalent for
width */

/* ----------------------------------------------------------------------- */

/* In the previous example we used .css and .height to set the value of the element
but these methods are also getters. Calling .height without any value returns the current
element’s height and calling .css with just a CSS property name retrieves the property’s value */
var currentHeight = $('.note').height();
var currentBackColor  = $('.note').css('background-color');

alert('.note height: ' + currentHeight);
alert('.note background-color: ' + currentBackColor);

/* If you’ve got more than one element selected (you have lots of note elements, say) a getter
will retrieve the value for the first of them */