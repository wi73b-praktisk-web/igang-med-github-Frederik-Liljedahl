// bmi udregner
function bmi (weight, height){
    var bmital = (weight / (height * height)*10000);    
    if (bmital < 18.5){
        console.log(bmital + " under vægtig");
    }
    
    else if (bmital > 18.5 && bmital < 24.9){
        console.log(bmital + " normal vægt");
    }
    
    else if (bmital > 25 && bmital < 29.99){
        console.log(bmital + " overvægtig");
    }

    else if (bmital > 30 && bmital < 39.99){
        console.log(bmital + " fedme");
    }

    else if (bmital > 40){
        console.log(bmital + " svær fedme");
    }
}
bmi(75,185);

//fartbøder

function fartboede (fart,fartgraense) {
    var farttal = (fart/fartgraense*100-100);

    if (farttal >= 2 && farttal <= 18){
        console.log( Math.round(farttal) + "% over fartgrænse" + "\nbøde: 1000 kr.");
    }
    else if (farttal >= 20 && farttal <= 28){
        console.log( Math.round(farttal) + "% over fartgrænse" + "\nbøde: 1500 kr.");
    }
    else if (farttal >= 30 && farttal <= 30){
        console.log( Math.round(farttal) + "% over fartgrænse" + "\nbøde: 2500 kr.");
    }
    else if (farttal >= 32 && farttal <= 38){
        console.log( Math.round(farttal) + "% over fartgrænse" + "\nbøde: 2500 kr." + " + Klip i kørekort");
    }
    else if (farttal >= 40 && farttal <= 58){
        console.log( Math.round(farttal) + "% over fartgrænse" + "\nbøde: 3000 kr." + " + Klip i kørekort");
    }
    else if (farttal >= 60 && farttal <= 60){
        console.log( Math.round(farttal) + "% over fartgrænse" + "\nbøde: 3500 kr." + " + Klip i kørekort");
    }
    else if (farttal >= 62 && farttal <= 68){
        console.log( Math.round(farttal) + "% over fartgrænse" + "\nbøde: 3500 kr." + " + betinget frakendelse");
    }
}
fartboede(81, 50);