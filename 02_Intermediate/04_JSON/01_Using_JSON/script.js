/* -------------------------  EVENT AND CALLBACK ------------------------- */

var handleClick = function(event)
{
    //alert("Not too hard!");
    someFunction(); // defined at the bottom
}

var button = document.querySelector('#big-button');
button.addEventListener('click', handleClick);

/* ----------------------------------------------------------------------- */

/* Data is either converted to or from JSON, using methods called stringify and parse respectively.
JSON is an object available in pretty much all modern browsers but there are ways of adding to a browser
that doesn’t have it */

/* JSON.stringify converts an object into a JSON string. In this example, jsonString becomes
{"make": "McLaren", "model": "MP4-12C", "miles": 5023 } */
var jsonString = JSON.stringify
({
    make: "McLaren",
    model: "MP4-12C",
    miles: 5023
})

/* The string can then be converted back to a JavaScript object using JSON.parse.
car is now usable as a normal JavaScript object, so you can set its properties */
var car = JSON.parse(jsonString);

/* ----------------------------------------------------------------------- */

function someFunction()
{
    alert("jsonString: \n"
          + jsonString);

    alert("car: " + car
          + "\n\ncar.make: " + car.make
          + "\ncar.model: " + car.model
          + "\ncar.miles: " + car.miles);

    /* car is now usable as a normal JavaScript object, so you can set its properties */
    car.make = "Ferrari";
    car.model = "F8 Tributo";
    car.miles = 0;
    alert("car: " + car
          + "\n\ncar.make: " + car.make
          + "\ncar.model: " + car.model
          + "\ncar.miles: " + car.miles);
}