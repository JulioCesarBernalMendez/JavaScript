/* -------------------------  EVENT AND CALLBACK ------------------------- */

var handleClick = function(event)
{
    //alert("Not too hard!");
    someFunction(); // defined at the bottom
}

var button = document.querySelector('#big-button');
button.addEventListener('click', handleClick);

/* ----------------------------------------------------------------------- */

function someFunction()
{
    doSomething();
    alert(a); // a is undefined
}

var doSomething = function()
{
    /* JavaScript uses function scope. This means that variables are not visible
    outside of the function in which they were declared */
    var a = 10;
    alert("a: " + a);
}

// ---

var b = 10;

if (b > 5)
{
    var c = 5;
    alert("c: " + c);
}

/* JavaScript does things a little differently, if variables are not declared inside a function
then they are available globally, unlike C-like languages */
var d = b + c; // variable c is available, thus d = 10 + 5
alert("d: " + d);