let studentAge = [22, 12, 33, 44, 60];

function checkeligibilityforDL (agenums){
    agenums.ForEach(age =>{
        if( age > 18 && age <= 60) {
            console.log('${age} Eligible for DL');
        } else if (age <= 17 || age > 60){
            console.log('${age} Not Eligible for DL');

        } else{
            console.log('${age} Eligible for Learning Licence');
        }
    })
}


checkeligibilityforDL(studentAge)