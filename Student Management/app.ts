import chalk from "chalk";
import inquirer from "inquirer";

let Students:any[] = []

do{
let ans = await inquirer.prompt([
    {
        type:"list",
        message:"Choose Your Action:-",
        name:"user",
        choices:["Add Name","Remove Name","View Names"]
    }
])

if(ans.user == "Add Name"){
    let answer = await inquirer.prompt([
        {
            type:"input",
            message:"Enter The Name:",
            name:"name"
        }
    ])
    Students.push(answer.name)
    console.log(chalk.bold.green.italic(`Your Name "${answer.name}" Successfully Added!`))
}

if(ans.user == "Remove Name"){
    let rem = await inquirer.prompt([
        {
            type:"list",
            message:"Choose Your Name:-",
            name:"nam",
            choices:Students
        }
    ])
    Students = Students.filter(item => item !== rem.nam);
    console.log(chalk.bold.green.italic(`Your Name "${rem.nam}" Successfully Removed!`));
}

if(ans.user == "View Names"){
    if(Students.length == 0){
        console.log(chalk.bold.red.italic("No Names Were Found!"))
    }
    else{
    console.log(Students)
    }
}
}while(true)
