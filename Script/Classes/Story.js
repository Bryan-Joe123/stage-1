class Story{
    constructor(images){
        this.frame=1
    }

    display(){
        if(gameState=="story"){
            background("black");
            if(keyWentDown("space")){this.frame++;}

            switch(this.frame){
                case 1:
                    textSize(30);
                    text("You live in a planet called Earth. [Press Space To Continue]",10,height-20);
                    break;
                case 2:
                    textSize(30);
                    text("It was a vast stretch of oceans and shrubs with more more than 3 billion people living it.",10,height-20);
                    break;
                case 3:
                    textSize(30);
                    text("Your planet is powered by gemstones. Locates in the center of the planet.",10,height-20);
                    break;
                case 4:
                    textSize(30);
                    text("The gemstones started to erode due to heat.",10,height-20);
                    break;
                case 5:
                    textSize(30);
                    text("You are the best astonomer in you planet.",10,height-20);
                    break;
                case 6:
                    textSize(30);
                    text("You gotta go and collect new genstones from different planets and restore your planet.",10,height-20);
                    break; 
                case 7:
                    textSize(30);
                    text("Try gat the genstones and save the planet!!! :)",10,height-20);
                    break; 

            }
        }

    }
}