//main randomizer function
let buildings = {
  0: "Canary Wharf",
  1: "King's Cross Station",
  2: "Gherkin",
  3: "Globe Theatre",
  4: "Marble Arch",
  5: "M16 building",
  6: "Monument",
  7: "Royal Academy",
  8: "Royal Opera House",
  9: "Westminister Abbey",
  10: "Tower Bridge",
  11: "Westminister Cathedral",
  12: "Hyde Park and Kensington Gardens",
  13: "London Eye",
  14: "Piccadilly Circus",
  15: "Royal Albert Hall",
  16: "St. Pancras Station",
  17: "St. Paul's Cathedral",
  18: "The Shard",
  19: "Trafalgar Square",
  20: "Waterloo Station",
  21: "Great Ormond Street Hospital"
}

let routemasters = {
  0: "British Museum",
  1: "Lord Cricket Ground",
  2: "Oval Cricket Ground",
  3: "ZSL London Zoo",
  4: "Madame Tussauds",
  5: "National Gallery",
  6: "Tate Britain",
  7: "Tate Modern",
  8: "Victoria and Albert Museum",
  9: "Natural History Museum",
  10: "Royal Festival Hall",
  11: "Science Museum"
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function keyRandomize() {
  document.getElementById("era1 b5").classList.add("hidden")
  document.getElementById("era1 b6").classList.add("hidden")
  document.getElementById("era2 b5").classList.add("hidden")
  document.getElementById("era2 b6").classList.add("hidden")
  document.getElementById("era3 b5").classList.add("hidden")
  document.getElementById("era3 b6").classList.add("hidden")
  document.getElementById("route5").classList.add("hidden")
  document.getElementById("route6").classList.add("hidden")
  document.getElementById("route7").classList.add("hidden")
  document.getElementById("route8").classList.add("hidden")
  document.getElementById("route9").classList.add("hidden")
  document.getElementById("route10").classList.add("hidden")
  document.getElementById("route11").classList.add("hidden")
  document.getElementById("route12").classList.add("hidden")


  let buildArray = []
  let routeArray = []
  let buildRandom = []
  let routeRandom = []

  for(i = 0; i <= 21; i++) {
    buildArray.push(i);
  }

  for(i = 0; i <= 11; i++) {
    routeArray.push(i);
  }

  buildRandom = shuffle(buildArray)
  routeRandom = shuffle(routeArray)

  let players = document.getElementById("numPlayers").value

  if (players == 3){
    document.getElementById("era1 b5").classList.remove("hidden")
    document.getElementById("era2 b5").classList.remove("hidden")
    document.getElementById("era3 b5").classList.remove("hidden")
    document.getElementById("route5").classList.remove("hidden")
    document.getElementById("route6").classList.remove("hidden")
  } else if (players == 4) {
    document.getElementById("era1 b5").classList.remove("hidden")
    document.getElementById("era1 b6").classList.remove("hidden")
    document.getElementById("era2 b5").classList.remove("hidden")
    document.getElementById("era2 b6").classList.remove("hidden")
    document.getElementById("era3 b5").classList.remove("hidden")
    document.getElementById("era3 b6").classList.remove("hidden")
    document.getElementById("route5").classList.remove("hidden")
    document.getElementById("route6").classList.remove("hidden")
    document.getElementById("route7").classList.remove("hidden")
    document.getElementById("route8").classList.remove("hidden")
  } else if (players == 5) {
    document.getElementById("era1 b5").classList.remove("hidden")
    document.getElementById("era1 b6").classList.remove("hidden")
    document.getElementById("era2 b5").classList.remove("hidden")
    document.getElementById("era2 b6").classList.remove("hidden")
    document.getElementById("era3 b5").classList.remove("hidden")
    document.getElementById("era3 b6").classList.remove("hidden")
    document.getElementById("route5").classList.remove("hidden")
    document.getElementById("route6").classList.remove("hidden")
    document.getElementById("route7").classList.remove("hidden")
    document.getElementById("route8").classList.remove("hidden")
    document.getElementById("route9").classList.remove("hidden")
    document.getElementById("route10").classList.remove("hidden")
  } else if (players == 6) {
    document.getElementById("era1 b5").classList.remove("hidden")
    document.getElementById("era1 b6").classList.remove("hidden")
    document.getElementById("era2 b5").classList.remove("hidden")
    document.getElementById("era2 b6").classList.remove("hidden")
    document.getElementById("era3 b5").classList.remove("hidden")
    document.getElementById("era3 b6").classList.remove("hidden")
    document.getElementById("route5").classList.remove("hidden")
    document.getElementById("route6").classList.remove("hidden")
    document.getElementById("route7").classList.remove("hidden")
    document.getElementById("route8").classList.remove("hidden")
    document.getElementById("route9").classList.remove("hidden")
    document.getElementById("route10").classList.remove("hidden")
    document.getElementById("route11").classList.remove("hidden")
    document.getElementById("route12").classList.remove("hidden")
  }

  document.getElementById("era1 b1").innerHTML = buildings[buildRandom[0]]
  document.getElementById("era1 b2").innerHTML = buildings[buildRandom[1]]
  document.getElementById("era1 b3").innerHTML = buildings[buildRandom[2]]
  document.getElementById("era1 b4").innerHTML = buildings[buildRandom[3]]
  document.getElementById("era1 b5").innerHTML = buildings[buildRandom[4]]
  document.getElementById("era1 b6").innerHTML = buildings[buildRandom[5]]

  document.getElementById("era2 b1").innerHTML = buildings[buildRandom[6]]
  document.getElementById("era2 b2").innerHTML = buildings[buildRandom[7]]
  document.getElementById("era2 b3").innerHTML = buildings[buildRandom[8]]
  document.getElementById("era2 b4").innerHTML = buildings[buildRandom[9]]
  document.getElementById("era2 b5").innerHTML = buildings[buildRandom[10]]
  document.getElementById("era2 b6").innerHTML = buildings[buildRandom[11]]

  document.getElementById("era3 b1").innerHTML = buildings[buildRandom[12]]
  document.getElementById("era3 b2").innerHTML = buildings[buildRandom[13]]
  document.getElementById("era3 b3").innerHTML = buildings[buildRandom[14]]
  document.getElementById("era3 b4").innerHTML = buildings[buildRandom[15]]
  document.getElementById("era3 b5").innerHTML = buildings[buildRandom[16]]
  document.getElementById("era3 b6").innerHTML = buildings[buildRandom[17]]


  document.getElementById("route1").innerHTML = routemasters[routeRandom[0]]
  document.getElementById("route2").innerHTML = routemasters[routeRandom[1]]
  document.getElementById("route3").innerHTML = routemasters[routeRandom[2]]
  document.getElementById("route4").innerHTML = routemasters[routeRandom[3]]
  document.getElementById("route5").innerHTML = routemasters[routeRandom[4]]
  document.getElementById("route6").innerHTML = routemasters[routeRandom[5]]
  document.getElementById("route7").innerHTML = routemasters[routeRandom[6]]
  document.getElementById("route8").innerHTML = routemasters[routeRandom[7]]
  document.getElementById("route9").innerHTML = routemasters[routeRandom[8]]
  document.getElementById("route10").innerHTML = routemasters[routeRandom[9]]
  document.getElementById("route11").innerHTML = routemasters[routeRandom[10]]
  document.getElementById("route12").innerHTML = routemasters[routeRandom[11]]

  document.getElementById("era2-div").classList.add("hidden")
  document.getElementById("era3-div").classList.add("hidden")

}

function show2() {
  document.getElementById("era2-div").classList.remove("hidden")
}

function show3() {
  document.getElementById("era3-div").classList.remove("hidden")
}



//click to call randomize function
document.getElementById("randomize").onclick = function() {keyRandomize()}

//click to show eras 2 and 3
document.getElementById("show2").onclick = function() {show2()}
document.getElementById("show3").onclick = function() {show3()}
