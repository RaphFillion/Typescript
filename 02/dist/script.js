// Exercice 1
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
var users = {
    username: 'Batman',
    level: Level.SUPPORT
};
if (users.level === Level.SUPPORT) {
    console.log("\n    Bienvenue ".concat(users.username, "\n    Vous travaillez au service support\n    ").concat(Level.SUPPORT, "\n  "));
}
// Exercice 2
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 8] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorname = Color[5];
console.log(colorname, c);
// Exercice 3
var inputData;
var inputAge;
inputData = 20;
if (typeof inputData === 'number') {
    // inputData est maintenant de Type number 
    inputAge = inputData;
    console.log(typeof inputAge);
}
// Exercice 4
var gift = function (age) { return age + 3; };
var data = function (arg) { return console.log("R\u00E9sultat: ".concat(arg)); };
console.log(gift(20));
data(gift(20));
// Exercice 5
var giftAlt = function (num) { return num + 3; };
console.log(giftAlt(10));
var age;
age = giftAlt;
console.log(age(10));
// Exercice 6
var buildName = function (firstName, lastName) {
    if (lastName) {
        return "".concat(firstName, " ").concat(lastName);
    }
    else {
        return firstName;
    }
};
var buildNameAlt = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'smith'; }
    return "".concat(firstName, " ").concat(lastName);
};
var result = buildName('Bob', 'Adams');
var result2 = buildName('Bob');
console.log(result, result2);
var result3 = buildNameAlt('bob', 'adams');
console.log(result3);
// Exercice 7
var colorContainer = document.getElementById('colors');
var colors = function (arg_one) {
    var restOfColors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfColors[_i - 1] = arguments[_i];
    }
    var h1 = document.createElement('H1');
    h1.innerHTML = "Titre: ".concat(arg_one);
    colorContainer === null || colorContainer === void 0 ? void 0 : colorContainer.appendChild(h1);
    var ul = document.createElement('ul');
    for (var i in restOfColors) {
        var li = document.createElement('li');
        li.innerHTML = restOfColors[i];
        ul.appendChild(li);
    }
    colorContainer === null || colorContainer === void 0 ? void 0 : colorContainer.appendChild(ul);
};
colors('Liste 1', 'Green', 'Red', 'Orange');
colors('Liste 2', 'Blue', 'Black', 'Pink');
// Exercice 8 
var constructName = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return "".concat(firstName, " ").concat(restOfName.join(' '));
};
var constructNameFun = constructName;
// Exercice 9
var sum = function (num, gift) {
    var sumUp = num + 3;
    gift(sumUp);
};
sum(40, function (num) { return console.log(num); });
var data_alt;
var user_id;
// Exercice 11
var PI = 3.14; // Type 3.14
var API_KEY = 'jfkdlosahgkdjsloai'; // Type jfkdlosahgkdjsloai
var count = 200; // Type 200
var boolValue = false; // Type false
var PI_alt = 3.14; // Type number
// Literal type
var PI_other; // Type 3.14
function total(one, two, totalVersion) {
    var resultat;
    if (totalVersion === 'getStringValue') {
        resultat = one.toString() + two.toString(); // Type string
    }
    else if (totalVersion === 'getSquare') {
        var val = one + two;
        resultat = Math.pow(val, 2);
    }
    else {
        resultat = one + two; // Type number
    }
    return resultat;
}
var summed = total(20, 10, 'getStringValue');
console.log(summed);
var summed_alt = total(20, 10);
console.log(summed_alt);
var summed_other = total(20, 10, 'getSquare');
console.log(summed_other);
