class Form{
    constructor(){
        this.title= createElement('h2')
        this.input = createInput("Name:");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){

        
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-90,0);

        
        this.input.position(displayWidth/2-80,130);

        
        this.button.position(displayWidth/2-20,displayHeight/2-5);

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

            this.greeting.html("Welcome! "+player.name);
            this.greeting.position(displayWidth/2-60,130);
        })
    }
}