// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
canvas.height = (window.innerHeight)*0.7;
canvas.width = (window.innerWidth)*0.7;
var ctx = canvas.getContext("2d");

// newly spawned objects start at Y=25
var spawnLineY = 25;

// spawn a new object every 500ms
var spawnRate = 70;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

// save the starting time (used to calc elapsed time)
var startTime = Date.now();

var objcount = -1;

var mouseX = 0;

var mouseY = 0;

var checkGameOver = 0;

// store score id and set text in the div to 0 
var scoreid = document.getElementById('score');
var score = 0;
scoreid.innerHTML = score.toString();

// Initialize player circle that sticks to mouse
var player = {
        type: "yellow",
        x: 0,
        
        y: 0,

        radius: 7.5,
    }

/*
function trackMouse (event) {
    //mouseX = event.clientX;
    //mouseY = event.clientY;
    objects.forEach ((object, i) => {
        if ((Math.abs(object.x - event.clientX) <= object.radius) && (Math.abs(object.y - event.clientY) <= object.radius)) {
            setTimeout (() => { objects.splice (i, 1) }, 0)
        }

    });
} */

// Enable this function:
function trackMouse(event) {
    // Need to subtract the coordinates of the canvas
    mouseX = event.clientX - canvas.offsetLeft; 
    mouseY = event.clientY - canvas.offsetTop;
    // No need to perform the "collision" check here.
}

// start animating
startanimate();


function spawnRandomObject() {

    // select a random type for this new object
    var t;

    // About Math.random()
    // Math.random() generates a semi-random number between 0-1. 
    var temp = Math.random()
    if (temp < 0.25) {
        t = "green";
    } 
    else if (temp >= 0.25 && temp < 0.5) {
        t = "blue";
    }
    else if (temp >= 0.5 && temp < 0.75) {
        t = "purple";
    }
    else {
        t = "pink";
    }

    // create the new object
    let object = {
        // set this objects type
        type: t,
        // set spawn randomly on the canvas edge
        x: Math.random(),
        // set y to start on the line where objects are spawned
        y: Math.random(),

        xspeed: Math.random()*3.5 + 0.5,
        yspeed: Math.random()*3.5 +0.5,

        radius: Math.ceil (Math.random()*59+3),
    }
    
    // set spawn coordinates so they spawn at the edges using previous x to randomly choose where along edges they spawn
    // 4 situtations
    if (object.x < 0.50){
        if (object.y < 0.5){
            object.x = -5; // along left edge and already moving to the right
        }
        else {
            object.x = canvas.width + 5; // along right edge
            object.xspeed = object.xspeed*-1; // should move towards left
        }
        object.y = Math.random() * (canvas.width - 300) + 15;
    }
    else {
        if (object.y >= 0.5){
            object.y = -5; // along top edge and already moving down
        }
        else {
            object.y = canvas.height + 5; // along bottom edge
            object.yspeed = object.yspeed*-1; // should move down
        }
        object.x = Math.random() * (canvas.width - 300) + 15;
    }

    // add the new object to the objects[] array
    objects.push(object);
}


function startanimate() {

    // Update player circle
    player.x = mouseX;
    player.y = mouseY;

    // get the elapsed time
    var time = Date.now();

    // see if its time to spawn a new object
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
        // spawnRate*=.95; to increase speed
    }

    // request another animation frame
    requestAnimationFrame(startanimate);

    // clear the canvas so all objects can be redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* draw the line where new objects are spawned
    ctx.beginPath();
    ctx.moveTo(0, spawnLineY); // starting position of line
    ctx.lineTo(canvas.width, spawnLineY); // ending position of line
    ctx.stroke();
    didnt need a line*/

    /* move each object down the canvas OLD CODE
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];

        object.y += object.yspeed;
        object.x += object.xspeed;
        
        ctx.beginPath();
        ctx.arc(object.x, object.y, object.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = object.type;
        ctx.fill(); // need to fill to see the object
        */
    
    // Use filter method to remove objects that are touched:
    // This should happen before the objects are moved and drawn. 
    // below needs to be in the animate function so that the check is made at every animation frame, not just when mouse moves
    objects = objects.filter(object => {
        pRadius = player.radius;
        oRadius = object.radius;
        greaterRadius = Math.max (pRadius, oRadius);
        minRadius = Math.min (pRadius, oRadius);
        if ((Math.abs(object.x - mouseX) < greaterRadius - minRadius) 
                 && (Math.abs(object.y - mouseY) < greaterRadius - minRadius))
        {
                if (oRadius < pRadius && checkGameOver != 1)
                {
                    player.radius += 1;
                    score += 1;
                    scoreid.innerHTML = score.toString();
                }
                else if (oRadius > pRadius) {
                        showGameOver();
                         //ctx.font = "60px serif";
                         //ctx.fillText = "white";
                         //ctx.strokeText("Game Over", (canvas.width - canvas.offsetLeft)/2, (canvas.height/2 - canvas.offsetTop)/2 ); // white filling
                        
                         //ctx.fillStyle = "black";
                         //ctx.strokeText("Gameover", (canvas.width - canvas.offsetLeft)/2, (canvas.height/2 - canvas.offsetTop)/2 ); // black outline
                
                        // clear the canvas 
                        //ctx.clearRect(0, 0, canvas.width, canvas.height);
                        //break;
                        
                        //let over = document.getElementById('gameover');
                        //over.style.display = 'block';
                        // checks if user clicked text to restart game
                        //over.addEventListener('click', function()
                        //{
                               // window.location.reload();
                        //});
                }
        }
        return !( object.radius < player.radius
                 && (Math.abs(object.x - mouseX) < greaterRadius - minRadius) 
                 && (Math.abs(object.y - mouseY) < greaterRadius - minRadius));
    });

    for (const object of objects) { // Use modern for..of syntax (no need for i)
        object.y += object.yspeed;
        object.x += object.xspeed;
        
        ctx.beginPath();
        ctx.arc(object.x, object.y, object.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = object.type;
        ctx.fill();
    }
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = player.type;
        ctx.fill();
    }

function showGameOver(){
    var gameOvertext = document.getElementById('gameover');
    //show text
    gameOvertext.style.display = 'block';
    checkGameOver = 1;
}

