/* Global Variables */

var $game = $('#game')
var diver = $("#diver");
var waterSurface = 210;
var waterFloor = 600;

/* Seeding Our Data */

var makeFish = function(startingX, startingY, startingSpeed){
   return {
    x: startingX,
    y: startingY,
    speed: startingSpeed
   };
};

/* drawing weapons suit*/
var vars = [], hash;
//get url: "file:///Users/roxysurfgirl/Desktop/java/domain-research/mock-ups/html/spearfish/index.html?spear=gun1&suit=red"
//spilts url into two pieces, after the "?"
//[1] means the second element in the array: q = "spear=gun1&suit=red"
var q = document.URL.split('?')[1];
if(q != undefined){
    //split q into pieces, based on "&"
    q = q.split('&');
    //for each piece,
    for(var i = 0; i < q.length; i++){
        //split again at "="
        hash = q[i].split('=');
        vars.push(hash[1]);
        vars[hash[0]] = hash[1];
    }
}

var diverImage;
//find value of "spear" from above array, and save to variable
var spear = vars["spear"];
console.log("spear type = " + spear);
var suit = vars["suit"];
console.log("suit color = " + suit);

if(suit=="bluesuit" && spear == "gun1"){
  diverImage="assets/diver.png";
}else if(suit=="brownsuit" && spear =="gun1"){
 diverImage="assets/Diverbrown.png";
}else if(suit=="greensuit" && spear =="gun1"){
 diverImage="assets/Divergreen.png";
}else if(suit=="bluesuit" && spear == "gun2"){
  diverImage="assets/diver.png";
}else if(suit=="brownsuit" && spear =="gun2"){
 diverImage="assets/Diverbrown.png";
}else if(suit=="greensuit" && spear =="gun2"){
 diverImage="assets/Divergreen.png";
}else if(suit=="bluesuit" && spear == "gun3"){
  diverImage="assets/diver.png";
}else if(suit=="brownsuit" && spear =="gun3"){
 diverImage="assets/Diverbrown.png";
}else if(suit=="greensuit" && spear =="gun3"){
 diverImage="assets/Divergreen.png";
}else{
  diverImage="assets/diver.png";
}

diver.attr("src",diverImage);

//IN HTML
//put diver and spear in same div
//instead of moving diver (below) move that div


var schoolOfFish = [];

for(var fc = 0; fc < 10; fc++){ // Adding 10 fish to schoolOfFish
  var fish = makeFish(Math.random()*300, Math.random()*500 + 205, Math.random()*10); // x, y, speed
  schoolOfFish.push(fish);
}

var diverobject = {
  x: 150,
  y: 300
}

$(document).keydown(function(e){ // from what i had above up and down keys
  // if key is up
  // diver.y -= 10;

    switch(e.which){
    case 37://left
    console.log("left");
    diverobject.x-=10;
    //xpos=xpos-10
    break;

    case 39: //right
    diverobject.x+=10;
    //xpos=xpos+10
    console.log("right");
    break;

    case 38://up
    diverobject.y-=10;
    console.log("up");
    break;

    case 40: //down
    diverobject.y+=10;
    console.log("down");
    break;

    default: return;
  }

  e.preventDefault();

  if(diverobject.y< waterSurface){
    diverobject.y = waterSurface;
  }

  if(diverobject.y >waterFloor){
    diverobject.y = waterFloor;
  }
});


/* Game Loop */

setInterval(function(){


  /* Update Fish */
  for(var i = 0; i < schoolOfFish.length; i++){ // Loop through our schoolOfFish

    var currentFish = schoolOfFish[i];
    var fishId = "fish"+i;
    var fishElement = $("#"+fishId);


    if(fishElement.length == 0){ // Add html elements for fish if they don't exist.
       $game.append ('<img src="assets/fish1.gif" alt="fish" id="'+fishId+'" class="fish">');
       fishElement = $("#"+fishId); // Updates fishElement in case the fish didn't exist.
    }

    currentFish.x += currentFish.speed;

    if(currentFish.x >=1590){
      console.log("kill the fish");
      //play sound
      var fishsound = new Audio("assets/0437.ogg");
      fishsound.play();
      currentFish.x =0;
    }

    // Updates the fish's css properties.
    fishElement.css({  "top":currentFish.y+"px", "left": currentFish.x+ "px"});

    // if(currentFish.x >1590) {
    //   console.log("kill the fish");
  }

  //var diverDiv = $("#diverDiv");
  //diverDiv.css
  diver.css({  "top":diverobject.y+"px", "left": diverobject.x+ "px"});



}, 16);
