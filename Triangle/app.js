import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        type: "number",
        message: "Enter A Number To Build A Pyramid:",
        name: "ans"
    }
]);
let height = answer.ans;
for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = height - i - 1; j > 0; j--) {
        row += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
    }
    console.log(chalk.green(row));
}
