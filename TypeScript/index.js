console.log("Hello the World!");
// lets write the some variables in typescript
var age = 26;
// re-assign the values, its not accepted from typeScript
// age = 'a';
function add2(a, b) {
    return a + b;
}
var c = add2(10, 20);
console.log(c);
// let's created a new enum type object in typeScript 
var persons;
(function (persons) {
    persons[persons["Up"] = 1] = "Up";
    persons[persons["Down"] = 2] = "Down";
    persons[persons["Side"] = 3] = "Side";
    persons[persons["Back"] = 4] = "Back";
})(persons || (persons = {}));
console.log(persons);
