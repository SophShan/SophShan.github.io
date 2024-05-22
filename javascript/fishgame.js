// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
canvas.height = (window.innerHeight)*0.7;
canvas.width = (window.innerWidth)*0.7;
var ctx = canvas.getContext("2d");

// newly spawned objects start at Y=25
var spawnLineY = 25;

// spawn a new object every 500ms
var spawnRate = 200;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

// save the starting time (used to calc elapsed time)
var startTime = Date.now();

// start animating
//animate();


function spawnRandomObject() {

    // select a random type for this new object
    var t;

    // About Math.random()
    // Math.random() generates a semi-random number
    // between 0-1. So to randomly decide if the next object
    // will be A or B, we say if the random# is 0-.49 we
    // create A and if the random# is .50-1.00 we create B

    if (Math.random() < 0.50) {
        t = "red";
    } 
    else {
        t = "blue";
    }

    // create the new object
    var object = {
        // set this objects type
        type: t,
        // set spawn randomly on the canvas edge
        x: Math.random(),
        // set y to start on the line where objects are spawned
        y: Math.random(),

        xspeed: Math.random()*4 + 0.1,
        yspeed: Math.random()*4 +0.1,

        diameter: Math.ceil (Math.random()*19+0.3),
    }
    
    // set spawn coordinates so they spawn at the edges using previous x to randomly choose where along edges they spawn
    // 4 situtations
    if (object.x < 0.50){
        if (object.y < 0.5){
            object.x = 0; // along left edge and already moving to the right
        }
        else {
            object.x = canvas.width; // along right edge
            object.xspeed = object.xspeed*-1; // should move towards left
        }
        object.y = Math.random() * (canvas.width - 300) + 15;
    }
    else {
        if (object.y >= 0.5){
            object.y = 0; // along top edge and already moving down
        }
        else {
            object.y = canvas.height; // along bottom edge
            object.yspeed = object.yspeed*-1; // should move down
        }
        object.x = Math.random() * (canvas.width - 300) + 15;
    }

    // add the new object to the objects[] array
    objects.push(object);
}



function startanimate() {

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

    // clear the canvas so all objects can be 
    // redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* draw the line where new objects are spawned
    ctx.beginPath();
    ctx.moveTo(0, spawnLineY); // starting position of line
    ctx.lineTo(canvas.width, spawnLineY); // ending position of line
    ctx.stroke();
    */

    // move each object down the canvas
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];

        object.y += object.yspeed;
        object.x += object.xspeed;
        
        ctx.beginPath();
        ctx.arc(object.x, object.y, object.diameter, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = object.type;
        ctx.fill(); // need to fill to see the object
    }

}
