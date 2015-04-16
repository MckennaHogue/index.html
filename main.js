
// var xPos= 200;
// var yPos= 400;
// var waterSurface = 210;
// var waterFloor = 600;
// var fishCount=0;

// for(var fc = 0;  fc<10; fc++){
//   drawFish(Math.random()*800);
// }

// function drawFish(xPosition){
//   fishCount++;
//   // var fishxPos= Math.random()*800;
//   var fishyPos= 200+Math.random()*450;
//   $("#game").append ('<img src="assets/fish1.gif" alt="fish" id="fish'+fishCount+'" class="fish">');
//   $("#fish"+fishCount).css({  "top":fishyPos+"px", "left": xPosition+ "px"});
//   swimleft("#fish"+fishCount, xPosition);
//   console.log('x');
// }

// setInterval( function(){
//   drawFish(0);
// }, Math.random() *10000);

// function swimleft(fish, fishPos){
//   for(var x=0; x<1000; x++){
//     fishPos+=10;
//     $(fish).animate({"left": fishPos+"px"});
//   }
// }

// $(document).keydown(function(e) {
//   switch(e.which){
//     case 37://left
//     console.log("left");
//     xPos-=10;
//     //xpos=xpos-10
//     break;

//     case 39: //right
//      xPos+=10;
//     //xpos=xpos+10
//     console.log("right");
//     break;

//     case 38://up
//     yPos-=10;
//     console.log("up");
//     break;

//     case 40: //down
//     yPos+=10;
//     console.log("down");
//     break;

//     default: return;
//   }
//   e.preventDefault();

//   if(yPos < waterSurface){
//     yPos = waterSurface;
//   }

//   if(yPos >waterFloor){
//     yPos = waterFloor;
//   }



//   console.log("xPos:"+xPos+"  yPos:" + yPos);

//   $("#diver").css({  "top":yPos+"px", "left": xPos+ "px"});
// });




// /*


// // simulation
// collection of fish (array)
// start by making multiple fish and giving them random positions (populating an array)

// for each item in the array - create an html element for the fish and set its position

// diver
// x
// y


// // representation / interface
// render loop - runs every 60th of a second
//   loop through all the fish and update their positions
//   update the divers position


// */



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


//find value of "spear" from above array, and save to variable
var spear = vars["spear"];
// console.log("spear type = " + spear);
var suit = vars["suit"];
// console.log("suit color = " + suit);

if(spear =="gun1"){
  //change the css for the gun to whichever image you want
  $("#gun").attr("src", "assets/keys.png");
}else if(spear =="gun2"){
  //change the css for the gun to whichever image you want
  // $("#gun").attr("src", "assets/spear1.jpg");
}else if(spear =="gun3"){
  //change the css for the gun to whichever image you want
  // $("#gun").attr("src", "assets/spear2.jpg");
}

// same as above for diver images


//IN HTML
//put diver and spear in same div
//instead of moving diver (below) move that div


var schoolOfFish = [];

for(var fc = 0; fc < 10; fc++){ // Adding 10 fish to schoolOfFish
  var fish = makeFish(Math.random()*300, Math.random()*300, Math.random()*10); // x, y, speed
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

  /* Update Diver */
  // TODO

  //var diverDiv = $("#diverDiv");
  //diverDiv.css
  diver.css({  "top":diverobject.y+"px", "left": diverobject.x+ "px"});



}, 16);


//  For over spring break =
//      make fish die after leave screen not go on forever
//      add a sound maybe when fish get to the end of the page
//      work on style of the page id: the directions, maybe making the game the whole page and directions up top
//      document diver position? like how he did the fish?

//    PLAY GAMES: think about how one key for the whole game/also never ending game.
//    https://itunes.apple.com/us/app/desert-golfing/id902062673?mt=
//    http://www.adamatomic.com/canabalt/

// margine auto means it automatically goes in the center