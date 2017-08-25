// bmi udregner
function bmi(weight, height) {
    var bmital = (weight / (height * height) * 10000);
    if (bmital < 18.5) {
        console.log(bmital + " under vægtig");
    }

    else if (bmital > 18.5 && bmital < 24.9) {
        console.log(bmital + " normal vægt");
    }

    else if (bmital > 25 && bmital < 29.99) {
        console.log(bmital + " overvægtig");
    }

    else if (bmital > 30 && bmital < 39.99) {
        console.log(bmital + " fedme");
    }

    else if (bmital > 40) {
        console.log(bmital + " svær fedme");
    }
}
bmi(75, 185);

//fartbøder

function fartboede(fart, fartgraense) {
    var farttal = (Math.ceil(fart / fartgraense * 100 - 100));

    if (fartgraense == 50) {

        if (farttal >= 2 && farttal <= 18) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 1000 kr.");
        }
        else if (farttal >= 20 && farttal <= 28) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 1500 kr.");
        }
        else if (farttal >= 30 && farttal <= 30) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 2500 kr.");
        }
        else if (farttal >= 32 && farttal <= 38) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 2500 kr." + " + Klip i kørekort");
        }
        else if (farttal >= 40 && farttal <= 58) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 3000 kr." + " + Klip i kørekort");
        }
        else if (farttal >= 60 && farttal <= 60) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 3500 kr." + " + Klip i kørekort");
        }
        else if (farttal >= 62 && farttal <= 68) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 3500 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 70 && farttal <= 78) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 4000 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 80 && farttal <= 88) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 4500 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 90 && farttal <= 98) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 5500 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 100 && farttal <= 100) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 6000 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 101) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 6000 kr." + " + Ubetinget frakendelse");
        }
    }

    else if (fartgraense == 80) {

        if (farttal >= 2 && farttal <= 19) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 1000 kr.");
        }
        else if (farttal >= 20 && farttal <= 29) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 1500 kr.");
        }
        else if (farttal >= 30 && farttal <= 30) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 2500 kr.");
        }
        else if (farttal >= 31 && farttal <= 39) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 2500 kr." + " + Klip i kørekort");
        }
        else if (farttal >= 40 && farttal <= 59) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 3000 kr." + " + Klip i kørekort");
        }
        else if (farttal >= 60 && farttal <= 60) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 3500 kr." + " + Klip i kørekort");
        }
        else if (farttal >= 61 && farttal <= 69) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 3500 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 70 && farttal <= 74) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 4000 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 75 && farttal <= 87) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 4500 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 88 && farttal <= 89) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 5500 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 90 && farttal <= 99) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 7000 kr." + " + betinget frakendelse");
        }
        else if (farttal == 100) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 8000 kr." + " + betinget frakendelse");
        }
        else if (farttal >= 101) {
            console.log(Math.ceil(farttal) + "% over fartgrænse" + "\nbøde: 8000 kr." + " + Ubetinget frakendelse");
        }

    }

}
fartboede(130, 80);

