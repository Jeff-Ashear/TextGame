const chalk = require("chalk")
const chalkAnimation = require("chalk-animation")
const figlet = require("figlet")
const inquirer = require("inquirer")

console.log(figlet.textSync('Text Game'))

startGame();

function startGame() {
    let startPrompt = ["Yes", "No"]
    inquirer
    .prompt([{
        type: 'rawlist',
        name: 'startGame',
        message: "Are you ready to start?",
        choices: startPrompt
    }])
    .then(response => {
        if (response.startGame === "Yes") {
            chalkAnimation.rainbow("Welcome to this text game!")
            setTimeout(() => {
                welcome()
            }, 2000);
        } else {
            console.log(chalk.bgYellowBright.black("Okay!  Goodbye!"))
            return
        }
    })
}

function welcome(){
    console.log(chalk.bgBlack.green("You feel something rough and damp against your cheek."))
    setTimeout(() => {
        console.log(chalk.bgGray.black("You realize you're laying face down..."))
    }, 3000);
    setTimeout(() => {
        console.log(chalk.blue(`"That's funny...", you think to yourself.`))
    }, 4000);
    setTimeout(() => {
        console.log(chalk.blue(`"I never sleep on my stomach.`))
    }, 6000);
    setTimeout(() => {
        console.log(chalk.bgGrey.black("You move a little.  The roughness you feel is sand."))
    }, 7000);
    setTimeout(() => {
        console.log(chalk.bgGrey.black("With some effort, you lift your head and try to open your heavy, crusted eyelids."))
    }, 8000);
    setTimeout(() => {
        console.log(chalk.blue(`"Where am I?"`))
    }, 10000);
    setTimeout(() => {
        console.log(chalk.bgWhiteBright.yellow("You open your eyes.  As the glare subsides you can see that you are laying in a patch of loamy sand, next to moss covered deadfall."))
    }, 13000);
    setTimeout(() => {
        console.log(chalk.bgBlackBright.green("You are in a small clearing in pine forest.  There is a shallow pool to the south.  A cliff face butresses the terrain west of the pool.  Trees continue seemingly without end to the east and north."))
    }, 14000);
    setTimeout(() => {
        console.log(chalk.black(`---------------------------------`))
        console.log(chalk.black(`|`) + chalk.bgBlue.white(`        ~~~  ~      `) + chalk.bgBlue.greenBright("^   ^   ^ ") + chalk.black(`|`))
        console.log(chalk.black(`|`) + chalk.bgBlueBright.white(`      ~&&&~  ~~    `) + chalk.bgBlue.greenBright("//") + chalk.bgBlue.red("|") + chalk.bgBlue.green(`\\`) + chalk.bgBlue.greenBright(" //") + chalk.bgBlue.red("|") + chalk.bgBlue.green("\\") + chalk.bgBlue.greenBright("     //") + chalk.bgBlue.red("|") + chalk.bgBlue.green("\\") + chalk.black(`|`))


    }, 16000);
}