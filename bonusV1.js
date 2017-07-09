var seriesList = ["Game of Thrones", "Ray Donavan", "House of Cards", "Orange is the New Black", "Power"]; //created an array of series I need to binge watch

console.log(seriesList);

seriesList[3] = "Billions"; //changed OITNB to Billions

console.log(seriesList);

console.log("The one show that is an original Netflix series is:", seriesList[2]); //crafted a sentence to display that the only series originated by Netflix is HOC

seriesList.push("Homeland", "Shameless"); //added 2 new shows to the array

console.log(seriesList);

seriesList.splice(1,6); //removed everything but Game of Thrones
console.log("Since the", seriesList[0], " premiere is the soonest, I've removed everything else from my seriesList"); //crafted a sentence using the index of GOT
