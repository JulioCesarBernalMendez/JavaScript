/* Here’s a group of the things needed to listen for an event:
   - the callback function
   - an element
   - and the call to listen for an event */

var handleClick = function(event)
{
    alert("Not too hard!");
    alert(event);

    alert('event:'
          + '\noffsetX: ' + String(event.offsetX)
          + '\noffsetY: ' + String(event.offsetY)
          + '\npageX: ' + String(event.pageX)
          + '\npageY: ' + String(event.pageY)
          + '\nscreenX: ' + String(event.screenX)
          + '\nscreenY: ' + String(event.screenY)
          + '\nscreenY: ' + String(event.screenY)
          + '\ntarget: ' + String(event.target)
          + '\ntimeStamp: ' + String(event.timeStamp)
          + '\ntype: ' + String(event.type)
          + '\nx: ' + String(event.x)
          + '\ny: ' + String(event.y));
}

var button1 = document.querySelector('#big-button1');
button1.addEventListener('click', handleClick);


/* addEventListener is a method found on all DOM elements. Here it’s being called on an element saved in
the button variable. The first argument is a string - the name of the event to listen for. Here’s it’s click -
that’s a click of the mouse or a tap of the finger. The second is the callback function - here it’s handleClick */

/* ----------------------------------------------------------------------- */

var button2 = document.querySelector('#big-button2');

/* Internet Explorer does not support addEventListener in versions earlier than 9.
Instead attachEvent must be used */
button2.attachEvent('onclick', handleClick);