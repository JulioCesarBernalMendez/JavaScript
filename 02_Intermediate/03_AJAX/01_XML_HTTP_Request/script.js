/* -------------------------  EVENT AND CALLBACK ------------------------- */

/* Here’s a group of the things needed to listen for an event:
   - the callback function
   - an element
   - and the call to listen for an event */

var handleClick = function(event)
{
    //alert("Not too hard!");
    req.send();
}

var button = document.querySelector('#big-button');
button.addEventListener('click', handleClick);

/* addEventListener is a method found on all DOM elements. Here it’s being called on an element saved in
the button variable. The first argument is a string - the name of the event to listen for. Here’s it’s click -
that’s a click of the mouse or a tap of the finger. The second is the callback function - here it’s handleClick */

/* -------------------------  XML HTTP REQUEST ------------------------- */

/* what does an XMLHttpRequest look like?
The first thing to do is create a new XMLHttpRequest request, using the new keyword, and calling
XMLHttpRequest like a function */
var req = new XMLHttpRequest();

/* Then we specify a callback function, to be called when the data is loaded. It is passed
information about the event as its first argument */
req.onload = function(event)
{   
    // if successful HTTP request
    if (req.status === 200)
    {
        /* get 'injected' element from the main HTML request.html and update it
        with the content in dynamic.html retrieved with req.open() after the
        XML HTTP request sent by req.send() */
        document.getElementById('injected').innerHTML = req.responseText;
    }
    else
    {
        alert('Error loading content');
    }
}

/* Then we specify how to get the data we want, using req.open:
   - The first argument is the HTTP method (GET, POST, PUT etc).
     Common HTTP Methods:
     |-> GET: request data from a specified resource.
     |        Example: req.open('GET', 'dynamic.html', true);
     |-> POST: send data to a server to create/update a resource.
     |         Example: req.open('POST', 'submit.php', true);
     |-> PUT: send data to a server to update a resource (similar to POST)
     |        Example: req.open('PUT', 'update.php', true);
     |-> DELETE: delete a specified resource.
     |           Example: req.open('DELETE', 'item/1', true);
     |-> HEAD: Similar to GET, but it retrieves only the headers, not the body.
     |         Example: req.open('HEAD', 'dynamic.html', true);
     |-> OPTIONS: describe the communication options for the target resource.
                  Example: req.open('OPTIONS', 'dynamic.html', true);
   - The second is the URL to fetch from - this is similar to the href attribute of a link
   - The third is a boolean specifying whether the request is asynchronous - here we have it true,
     so the XMLHttpRequest is fired off and then code execution continues until a response from the server causes the
     onload callback to be fired. 
     The asynchronous parameter defaults to false - if it’s false, execution of the code will pause at
     this line until the data is retrieved and the request is called synchronous.
     Synchronous XMLHttpRequests are not used often as a request to a server can, potentially, take an
     eternity. Which is a long time for the browser to be doing nothing */
req.open('get', 'dynamic.html', true);

/* Finally we tell the browser to fire off the request for data */
// req.send(); // notice it's called inside handleClick() above
