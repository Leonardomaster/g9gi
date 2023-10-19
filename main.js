 function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results);
    }
 }

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
    
    document.getElementById("font_size").innerHTML = "Tamanho da fonte será = " + difference +"px";
    FileList('#AB82FF');
    Text('Leonardo', 50, 400)
}