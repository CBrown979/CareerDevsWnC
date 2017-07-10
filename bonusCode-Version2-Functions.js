var travelWants = ["Ghana", "Pyramids of Giza", "London", "Dominican Republic", "Japan", "Dubai", "Italy"];

function fullMonty() { //wrote a function that addresses all tasks - add, change, display or delete
    travelWants[4] = "Tokyo";
    //console.log(travelWants);
    travelWants.push("Jamaica");
    //console.log(travelWants);
    travelWants.splice(4, 1);
    console.log(travelWants);
}
fullMonty();



