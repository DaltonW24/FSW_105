var readlineSync = require('readline-sync');
const enemyNames = ["Demon Dog", "Eternal Gravestalker", "Veil of Mist", "Tailon a fallen Aagel "];
const rewards = ["Soul of the Underworld", "Broken Headstone", "The Remnants of a fallen soldier", "Feather of a fallen angel"];
let lifePoints = 30;
let enemyLifePoints = 30;
let inventory = [];

function game(){
    while (lifePoints>=1){        
        const playerName = readlineSync.question("Thank god someone has come to save us! Before you go, what is your name?");         
        const choices = readlineSync.keyIn(`${playerName}, Please press (w) to walk forward, (e) to escape, or press (i) to check inventory.`);
        let bGuyEncounter = enemyNames[Math.floor(Math.random()* enemyNames.length)];
        let myAttackPower = Math.floor(Math.random() * (6+3)+2);
        let enemyAttackPower = Math.floor(Math.random() * (6+3)-2);
      
            if(choices == 'e'){
                console.log("You fled for your life. Game Over!")
                    lifePoints = 0;
            break;
            }
            else if(choices =='i'){
                console.log(inventory + choices);
            break;
            }
            else if(choices == 'w'){
               
                let action = Math.random();
               if (action <= .5){
                console.log("I dont see anything" + choices);
               }
               else if(action >=.5){
          
                console.log(bGuyEncounter + " attacked!");
            
                     while (enemyLifePoints > 0 && lifePoints > 0){
                        const   battleResponse =  readlineSync.keyIn("Battle begins what do you want to do? Enter (a) to attack, and (r) to run away");
                            if(battleResponse =="a"){
                                    enemyLifePoints -= myAttackPower;
                                        console.log("You attacked " + bGuyEncounter + " for " + enemyAttackPower);
                                    lifePoints -= enemyAttackPower;
                                        console.log(bGuyEncounter + "attacked you for " + enemyAttackPower);
                            }
                                        if(enemyLifePoints ==0){
                                            console.log("Enemy defeated! Your reward is " + rewards + choices);
                                            enemyNames.splice(0, 1, bGuyEncounter);
                                        }
                                        else if(battleResponse == "r"){
                                            const run = Math.random();
                                                if (run < .5) {
                                                        console.log("You tried to run, but tripped" + bGuyEncounter + "hit you for" + enemyAttackPower);
                                                }
                                                else {
                                                    console.log("You ran way successfully");
                                                        break;                                                            
                                                }
                                        }                         
                    }
                }                    
            }
            break;   
    }
        
                
    
}
game();
            
          