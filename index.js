function dwarfRollCall(dwarves) {
  var newString = "";
  var number = 0;
  for (var i = 0; i < dwarves.length; i++) {
    number+=1;
    newString = `${newString}${number}. ${dwarves[i]} `;
  }
  return newString;
}

function summonCaptainPlanet(planeteerCalls){
  var newArray = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    newArray.unshift(`${planeteerCalls[i].toUpperCase}!`);
  }
  return newArray;
}

function longPlaneteerCalls(words) {
  var aLongCall = false;
   for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      aLongCall = true;
    }
  }
  return aLongCall;
}


function findTheCheese (foods) {
  var cheeseFound = false;
  while (cheeseFound === false) {
  for (var i = 0; i < foods.length; i++) {
  if (foods.includes("gouda")) {
    cheeseFound = true;
    return "gouda";
  } else if (foods.includes("camembert")) {
    cheeseFound = true;
    return "camembert";
  } else if (foods.includes("cheddar")) {
    cheeseFound = true;
    return "cheddar";
  } else { 
    cheeseFound = true;
    return "no cheese!";
}
}
}
}
