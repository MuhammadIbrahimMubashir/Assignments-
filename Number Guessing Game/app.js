import inquirer from 'inquirer';
console.log("This Is A Number Guessing Game");
console.log("Guess A number Between 1 to 100");
let compnum = Math.floor(Math.random() * 100) + 1;
for (let i = 1; i <= 100; i++) {
    let ans = await inquirer.prompt([
        {
            type: "number",
            message: "Enter Your Guess:",
            name: "num"
        }
    ]);
    if (ans.num === compnum) {
        console.log("Your Guess Is Correct \nYou Won");
        console.log("Your Total Attempts Are:", i);
        break;
    }
    else if (ans.num < compnum) {
        console.log("Your Guess Is Low");
    }
    if (ans.num > compnum) {
        console.log("Your Guess Is High");
    }
}
