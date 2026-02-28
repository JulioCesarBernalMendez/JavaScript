/* -------------------------  EVENT AND CALLBACK ------------------------- */

/* The set of tools used to allow modification and control of the DOM are a
bit of mess because they differ across browsers, generally for historical
reasons. To make your job easier, a number of libraries have been created
that hide these differences, providing a more uniform way of interacting
with the DOM. Often they also provide AJAX functionality, taking the
burden of that complexity away from you.
jQuery is far and away the most popular DOM library and it is used on a
huge number of websites. */

/* jQuery has a very distinctive syntax, all based around the dollar symbol.
This code attaches a click handler to the elements with id of big button.
This selector syntax is core to jQuery */
$('#big-button').click(
    // anonymous function
    function()
    {
        alert("Not too hard!");
    }
);


/* The jQuery code above does exactly the same as the as the following vanilla JavaScript:

var handleClick = function(event)
{
    alert("Not too hard!");
}

var button = document.querySelector('#big-button');
button.addEventListener('click', handleClick);
*/