const readline = require("readline-sync");
const playerName = readline.question("What is your name? ");
const gameBeginMeeting = `${playerName}, I bet you're wondering how you got here. Well I'll tell you, if you get out that is...(Evil Laugh)`;
console.log(gameBeginMeeting);
let lifeStatus = true
let hasKey = false
while (lifeStatus ==true){
    const gameChoices = readline.keyIn("Enter 1 to reach in the hole in the wall, Enter 2 to try to find the Key, Enter 3 to attempt to open the door",{limit: "<123>"});
switch(gameChoices){  
    case "1":
        console.log(`${playerName} You reached into the dark ominous hole, and have mysteriously perished GAME OVER!`);
        lifeStatus = false;
            break;
    case "2":
        if(hasKey){
        hasKey ==true;
        console.log(`${playerName} You already have a key, so why are you still here? Hurry up!`)
    }
        else{
            hasKey == false;
            console.log(`${playerName} You searched the area and have found a Key! Maybe it will work on the door!`);
            hasKey=true;
        }
            break;
    case "3":
        if(hasKey){
          hasKey ==true
          console.log(`${playerName} You have unlocked the door and escaped YOU WIN!!!`);
          lifeStatus = false;
        }
        else{
            hasKey ==false
            console.log(`${playerName} You ran full speed at the door and nothing happened. Maybe you can find a key!`)
        }
        default:
            console.log("Please try again");

}
}