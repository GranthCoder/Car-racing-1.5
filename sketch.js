var database,position;
var form,game,player,allPlayers;
var gameState = 0;
var playerCount = 0;
var car1,car2,car3,car4;
var cars = [];
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();

    game = new Game();

    game.getState();
    game.Start();

}

function draw(){
    if(playerCount===4){
        gameState = 1;
        game.updateState(1);
    }

    if (gameState===1){
        clear();
        game.play();
    }
}
