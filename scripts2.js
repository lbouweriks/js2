const age=8;

if (age>=18){
    console.log("naar binnen")
}
else{
    console.log("niet naar binnen")
}

const isFemale=false

if (isFemale){
    console.log("toegang tot ladies night")
}
else{
    console.log("geen toegang tot ladies night")
}

const driverStatus="bob"

if (driverStatus==="bob"){
    console.log("mag rijden")
}
else{
    console.log("mag niet rijden")
}


if (age>=18 && age<=25){
    console.log("Je krijgt 50% korting!")
}


const firstName="Sarah"

if (firstName==="Sarah" || firstName==="Bram"){
    console.log("Je krijgt een gratis biertje")
}

const totalAmount=200

if (totalAmount=>25 && totalAmount<50){
    console.log("gratis bitterballen")
}
else if (totalAmount=>50 && totalAmount<100){
    console.log("gratis nachos")
}
else if (totalAmount=>100){
    console.log("gratis champagne")
}