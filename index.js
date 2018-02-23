function dwarfRollCall(dwarves) {
  var newString = "";
  var number = 0;
  for (var i = 0; i < dwarves.length; i++) {
    number+=1
    newString = `${newString}${number}. ${dwarves[i]} `
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
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}


function findTheCheese (foods) {
  var cheeseFound = false;
  while (cheeseFound === false) {
    var i = 0;
    while (i < foods.length) {
      if (foods[i].includes("cheddar")){
        cheeseFound = true;
        return "cheddar";
      } else if (foods[i].includes("gouda")){
        cheeseFound = true;
        return "gouda";
      } else if (foods[i].includes("camembert")){
        cheeseFound = true;
        return "camembert";
      } else {
        i++;
      }
    }
    cheeseFound = true;
    return "no cheese!";
  }
}

