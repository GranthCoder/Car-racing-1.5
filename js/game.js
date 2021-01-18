class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function (data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    Start(){
        if(gameState===0){
            form = new Form();
            player = new Player();
            player.getCount();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            //var namePos = 130;
            var index = 0;
            var x = 0;
            var y = 0;
            for(var plr in allPlayers){
                
                index +=1
                x +=200
                y = displayHeight - allPlayers[plr].distance

                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index===player.index){
                    camera.position.x  = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                    cars[index-1].shapeColor = "red";
                }
                //namePos += 20
                //textSize(20)
                //text(allPlayers[plr].name+": "+allPlayers[plr].distance,130,namePos);
            }
        }
        if(keyDown(UP_ARROW)&& player.index !==null){
            player.distance +=50;
            player.update();
        }

        drawSprites();
    }
}