//1 - Øvelser - betingelser

if (true) {
    console.log("Hej verden");
}

//2

var num = Math.floor(Math.random() * 11);
console.log(num);

var num = Math.floor(Math.random() * 11);
if (num >= 6) {
    console.log("højere end 5");
} else {
    console.log("lavere end 5");
}

//3
var num = Math.floor(Math.random() * 11);
var number = num >= 6;
var result = number ? "tallet er højere end 5" : "tallet er lavere end 5";
console.log(result);

//4
var favorit = "pepsi";

if (favorit == "pepsi") {
    console.log('pepsi er det bedste');
} else if (favorit == "coca cola") {
    console.log('coca cola er også godt');
} else if (favorit == "fanta") {
    console.log('fanta er fint nok');
} else {
    console.log('sodavand er ikke lækkert');
}

//5
var favorit = "pepsi";
switch (favorit) {
    case "pepsi":
        console.log('pepsi er det bedste');
        break;
    case "coca cola":
        console.log('coca cola er også godt');
        break;
    case "fanta":
        console.log('fanta er fint nok');
        break;
    default:
        console.log('ukendt');
        break;
}

//6 betingelser markdown i read.me

//1 - Oplæg - operatorer

var tal1 = 5;
var tal2 = 2;
console.log(tal1 + tal2);
console.log(tal1 - tal2);
console.log(tal1 * tal2);
console.log(tal1 / tal2);
console.log(tal1 % tal2);
console.log(++tal1);
console.log(--tal2);

//2
var y = 10;
var x = 20;

x += y;
console.log(x);

x -= y;
console.log(x);

x *= y;
console.log(x);

x /= y;
console.log(x);

x %= y;
console.log(x);

//3

//4

//5 Øvelser - operatorer i read.me

//1 - Løkker del 1
var counter = 0;

do {
    console.log("yes");
    counter++
} while (counter < 10);

//2
var counter = 1;

while (counter <= 25) {
    console.log(counter);
    counter++
}

var counter = 1;
do {
    console.log(counter);
    counter++
} while (counter <= 25);

for (var counter = 1; counter <= 25; counter++) {
    console.log(counter);
}

//3
for (var year = 2017; year >= 1917; year--) {
    console.log(year);
}

//4 for-løkke markdown i read.me


//1 - løkker del 2

var farver = ['rød', 'grøn', 'blå', 'gul', 'lyserød', 'brun', 'sort', 'hvid', 'grå', 'orange'];
farver.forEach(function (farve) {
    console.log(farve);
});

//2
var kunstner = ['justin bieber', 'dj khaled', 'lil pump', 'xxxtentacion'];
kunstner.forEach(function (kunstnerne, index) {
    console.log(kunstnerne + ' ' + index);
});

//3
var tal = [1, 3, 6, 2, 4, 7, 5, 9, 8, 10]
tal.forEach(function (tal, index, arr) {
    if (arr[++index] < tal) {
        console.log('dette tal er større');
    } else {
        console.log('dette tal er mindre');
    }
});

