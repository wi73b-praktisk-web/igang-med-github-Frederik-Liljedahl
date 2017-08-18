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
