//1.A

function name(fornavn, efternavn, fodselsdag) {
    console.log(fodselsdag);
}
name('Frederik', 'Liljedahl', 1999);


//1.B
function add(tal1, tal2) {
    console.log(tal1 + tal2);
}
add(3, 5);

var result = 0;
function add(tal) {
    result = result += tal;

}

function sub(tal) {
    result = result -= tal;
}

add(5);
add(8);
sub(4);
console.log(result);

// 2 afkorte og returnere en ny streng
var cars = "audi, bmw, porsche";
var result = cars.slice(7, 13);
console.log(result);

//3 array som argument

var profil = function (p) {
    var year = 2017;
    return p[0] + " " + p[1] + "Født: " + p[2] + ' alder: ' + (year - p[2]);
}

var idol = ["Frederik", "Liljedahl\n", 1999];

console.log(profil(idol));

//3.3

var dato = new Date();
var birthday = new Date('99/12/20');

console.log(dato.getFullYear() - birthday.getFullYear());

//3.4

var mig = ["Frederik", "Liljedahl", 1999];
console.log(mig);