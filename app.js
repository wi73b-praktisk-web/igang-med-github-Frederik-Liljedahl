//console.log('hej verden');
//1
var navn = "fred";
var alder = "10";
var tekst = "mit navn er " + navn + " og jeg er " + alder +  " år gammel";
console.log(tekst);

//2
var moms = 1.25;
var pris_uden_moms = 400;
var pris_med_moms = pris_uden_moms * moms;
console.log("pris: " + pris_med_moms);

var pris_uden_moms_02 = pris_med_moms / moms;
console.log(pris_uden_moms);

//3

var forste = 10;
var anden = 20;
anden = forste;
forste = forste + forste;
console.log("dette er tallet " + forste + " og dette er tallet " + anden);

//4.1
var carName = "Volvo";
console.log(carName);

//4.2
var number = 50;
console.log(number)

//4.3


//4.4
var x = 5;
var y = 10;
var sum = x + y;
console.log(x+y);

//4.5
var x = 5;
var y = 10;
var z = x + y;
console.log(x+y);

//arrays
//1 

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//1.2
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);

//1.3
var cars = ["Saab", "Volvo", "BMW"];
cars[0] ="opel";
console.log(cars);

//1.4
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars.length);

//1.5
var cars = ["Saab", "Volvo", "BMW"];
cars[cars.length] = "Mercedes";
console.log(cars);


