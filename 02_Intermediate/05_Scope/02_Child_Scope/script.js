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
}

/* Variables are available in child scopes of their own scope. For example,
doSomethingElse is a child of doSomething, so a is visible inside doSomethingElse */
var doSomething = function()
{
    var a = 10;
    alert("parent scope a: " + a);

    // child scope
    var doSomethingElse = function()
    {
        alert("child scope a: " + a);
    }

    doSomethingElse();
}