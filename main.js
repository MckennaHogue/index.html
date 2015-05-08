/* Global Variables */

var $game = $('#game')
var diver = $("#diver");
var waterSurface = 210;
var waterFloor = 600;
var fishfacts = [

" <h1>What is the most dangerous element of spearfishing? </h1><p>Shallow water black-out. <br><br>Shallow water black-outs claim more lives than anything else in the world of spearfishing. <br><br>Shallow water black-outs usually happen to practitioners that are experienced and in good shape who have been diving for many years. It is the fact that it can happen to anyone that makes it so dangerous.</p>",
" <h1>What is an instant kill called (in one shot)?</h1><p><br>Stone Shot.<br><br> The term 'Stone Shot' is used to describe a shot in which the shaft either penetrates the brain of the fish or shatters the spine, instantly killing it in both situations. The fish once 'stoned' will sink the ocean floor, much like a stone itself.</p>",
" <h1>Why do divers use'chum' in the water?</h1><p> <br>It brings in game fish and distracts them.<br><br> Chum is a special concoction of fish parts and other sea food that is spread into the water around divers in hopes of attracting a game fish. The idea is to attract the fish with either the visual presence of the chum or the smell itself. Once the fish begin to come closer to investigate and/or feed on the chum, the diver can find an opportunity to dive down and line up a shot. </p>",
"<h1>You need to be as quiet as possible</h1><p><br>Swimming on the surface, breathing through the snorkel, diving from the surface and swimming underwater must be carried out with the minimum of noise. <br><br>On the surface, most spearfishermen employ a 'cycling' motion of the legs in order to keep the fins completely underwater throughout their stroke. It is also important to take breaths through the snorkel in a quiet controlled manner; the noise you make huffing, puffing and spitting on the surface travels a very long way underwater. Surface dives should be practiced until they can be executed silently.</p>",
"<h1> Where to look for fish in the water?</h1><p><br><br>Fish are likely to be found in areas that provide cover and food i.e. rocks, reefs and wrecks- especially when accompanied by a thick blanket of kelp or stringweed. <br><br>The slightest sudden or jerky movement that is made is likely to frighten away even the most inquisitive of fish and should therefore be avoided. Once a fish has been frightened and swims off, there is little point chasing after it because this invariably leads to the fish speeding up and easily out swimming the chaser!</p>",
"<h1>The gun only fires so far</h1><p><br>Even the most powerful spearguns have only limited range underwater, so the real skill comes in getting close to the fish before firing.</p>",
"<h1> What do you need to spearfish?</h1><p><br>You will need a mask, fins, snorkel, wetsuit, weight belt, speargun, a float, knife, and a fish keep.</p> ",
"<h1> Where to aim!</h1><p><br>It is usually best to hit the fish at a point just behind the gill and approximately one third of the way down from the top edge of the fish. This is because the upper half of a fish's body is mainly muscle and offers the best chance of a holding shot.</p>",
"<h1>Be Safe</h1><p>keep a lookout for boat traffic and make sure you are visible to passing boat traffic. Do not hyperventilate before holding your breath. Obtain a current weather report for the time you will be diving. Never load or carry a loaded speargun out of the water. Make sure the spear tips are sheathed or removed when out of the water</p>",
"<h1>Be Prepared</h1><p>Always dive with a friend and tell someone where you will be diving and your estimated time of return. Display a diver below flag on your boat if you are in the water. Attach fish to a towed float so that they are away from your body and carry a knife that is attached to your body and easily accessible. Carry a whistle and a reflective signal mirror in case of emergency</p>",
"<img src='assets/ouch.jpg' alt='accident'id='accident' class='accident'>",
"<img src='assets/ouch2.jpg' alt='accident'id='accident' class='accident'>"
];


/* Seeding Our Data */

var makeFish = function(startingX, startingY, startingSpeed){
   return {
    x: startingX,
    y: startingY,
    speed: startingSpeed
   };
};


/* Drawing weapons && suit */

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
// console.log("spear type = " + spear);
var suit = vars["suit"];
// console.log("suit color = " + suit);

if(suit=="bluesuit" && spear=="gun1"){
  diverImage="assets/diver.png";
}else if(suit=="brownsuit" && spear=="gun1"){
  diverImage="assets/Diverbrown.png";
}else if(suit=="greensuit" && spear=="gun1"){
  diverImage="assets/Divergreen.png";
}else if(suit=="bluesuit" && spear=="gun2"){
  diverImage="assets/diver.png";
}else if(suit=="brownsuit" && spear=="gun2"){
  diverImage="assets/Diverbrown.png";
}else if(suit=="greensuit" && spear=="gun2"){
  diverImage="assets/Divergreen.png";
}else if(suit=="bluesuit" && spear=="gun3"){
  diverImage="assets/diver.png";
}else if(suit=="brownsuit" && spear=="gun3"){
  diverImage="assets/Diverbrown.png";
}else if(suit=="greensuit" && spear=="gun3"){
  diverImage="assets/Divergreen.png";
}else{
  diverImage="assets/diver.png";
}



diver.attr("src", diverImage);

//IN HTML
//put diver and spear in same div
//instead of moving diver (below) move that div


var schoolOfFish = [];

for(var fc = 0; fc < 10; fc++){ // Adding 10 fish to schoolOfFish
  var fish = makeFish(Math.random()*300, Math.random()*450 + 200, Math.random()*10); // x, y, speed
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


$('.fish').click(function() {
    console.log("UGH UGH.");
});

for(var i = 0; i < schoolOfFish.length; i++){
  var fishId = "fish"+i;
  $game.append ('<img src="assets/fish1.gif" alt="fish" id="'+fishId+'" class="fish">');
}

setInterval(function(){

  /* Update Fish */
  for(var i = 0; i < schoolOfFish.length; i++){ // Loop through our schoolOfFish

    var currentFish = schoolOfFish[i];
    var fishId = "fish"+i;
    var fishElement = $("#"+fishId);

    currentFish.x += currentFish.speed;

    if(currentFish.x >=1590){
      // console.log("kill the fish");
      currentFish.x =0;
    }

    // Updates the fish's css properties.
    fishElement.css({  "top":currentFish.y+"px", "left": currentFish.x+ "px"});
  }

  /* Update Diver */
  diver.css({"top":diverobject.y+"px", "left": diverobject.x+ "px"});

}, 16);


$(".fish").on("click", function(){
  console.log("CLICK FISH!!!!");
  var chooseFact= Math.floor(Math.random()*(fishfacts.length));
  console.log(chooseFact);
  $('#fishfactbox').html(fishfacts[chooseFact]);
});

$("#fishfactbox").on("click", function(){
  $("#fishfactbox").html("");
});

