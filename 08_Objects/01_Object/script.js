var jedi =
{
    name: "Yoda",
    age: 899,

    talk: function()
    {
        alert("another... Sky... walk...");
    }
};

alert("jedi:");
alert(jedi.name);
alert(jedi.age);
jedi.talk();

jedi.name = "Mace Windu";
jedi.lightsaber = "purple";
alert(jedi.name);
alert(jedi.lightsaber);

/* ------------------------------------------ */

// create object person
var person =
{
    age: 120
};

/* add a property dinamically to the person object,
   this new property "name" happens to be an object,
   therefore it's known as a nested object because
   "name" is an object inside another object, "person" */
person.name =
{
    first: "Jeanne",
    last: "Calment"
};

alert("person:");
alert(person.age);
alert(person.name.first);
alert(person.name.last);

/* ------------------------------------------ */

/* Creating an empty object and adding properties
   and methods to it is possible too */
var dog = {};

dog.bark = function()
{
    alert("Woof!")
};

alert("dog:");
dog.bark();