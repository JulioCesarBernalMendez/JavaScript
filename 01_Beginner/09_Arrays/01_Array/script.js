var emptyArray = [];

var shoppingList = ['Milk', 'Bread', 'Beans'];

alert("shoppingList:");
alert(shoppingList);
for(var item = 0; item < 3; item++)
{
    alert(shoppingList[item]);
}

shoppingList[1] = 'Cookies';
alert("shoppingList:");
alert(shoppingList);

alert("Number of elements in shoppingList:");
alert(shoppingList.length);

/* ------------------------------------------------- */

shoppingList.push("A new car");
alert("shoppingList:");
alert(shoppingList);

shoppingList.pop();
alert("shoppingList:");
alert(shoppingList);

/* ------------------------------------------------- */

/* Here’s an example that creates, pushes, pops and iterates
   over an array, passing each name to a function called helloFrom.

   The function helloFrom returns a string with a greeting:
   “Hello from ” and then the person’s name.

   After the pushing and popping, the final list of people is:
   “Tom”, “Yoda”, “Ron” and “Bob”
*/

var helloFrom = function(personName)
{
    return "Hello from " + personName;
}

var people = ["Tom", "Yoda", "Ron"];
alert("people:");
alert(people);

people.push("Bob");
people.push("Dr Evil");
alert("people:");
alert(people);

people.pop();
alert("people:");
alert(people);

for(var i = 0; i < people.length; i++)
{
    var greeting = helloFrom(people[i]);
    alert(greeting)
}