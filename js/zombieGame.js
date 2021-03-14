// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

const chalk = require("chalk");
const chalkAnimation = require('chalk-animation');
const figlet = require("figlet");
const inquirer = require("inquirer");

console.log(figlet.textSync('Zombie Battle'));
// chalkAnimation.rainbow("Welcome to Zombie Battle!");
console.log(chalk.red("Prepare for battle..."));
let attacks = ["punch", "kick", "stab", "shoot", "launch grenade"];

let human = 36;
let zombie = 8;

// start the game
attack();

function attack() {
    inquirer
        .prompt([{
            type: "rawlist",
            name: "attack",
            message: "How do you want to attack the Zombie?",
            choices: attacks
        }])
        .then(response => {
            let zombieSecret = attacks[Math.floor(Math.random() * attacks.length)];
            let randomDamage = Math.ceil(Math.random() * 5);
            // console.log(zombieSecret, response.attack, randomDamage);

            if (zombieSecret === response.attack) {
                zombie -= randomDamage;
                console.log(chalk.green(`Your attack was successful`));
            } else {
                human -= randomDamage;
                console.log(chalk.cyan(`The zombie dodged your attack.`))
            }

            console.log(`Human: ${chalk.yellow(human)}   Zombie: ${chalk.magenta(zombie)}`);

            if (human > 0 && zombie > 0) {
                attack();
            } else {
                console.log(chalk.bgRedBright.white("Game Over"));
            }
        });
}