var player;
function setup() {
    createCanvas(250,250);
    player = createSprite(width/2, height, 50, 50);
}
function draw() {
    background(0, 0, 100);
    drawSprites();
    
    if (keyDown(RIGHT_ARROW)) {
        player.position.x = player.positon.x + 1;
    }
    
    if (keyDown(LEFT_ARROW)) {
        player.position.x = player.position.x - 1;
    }
}
