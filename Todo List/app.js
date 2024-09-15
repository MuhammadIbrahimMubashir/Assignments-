import inquirer from "inquirer";
let todos = [];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                message: "Select An Operation:-",
                name: "select",
                choices: ["Add", "Update", "View", "Delete"]
            }
        ]);
        if (ans.select == "Add") {
            let addtodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "Add Item:",
                    name: "todo"
                }
            ]);
            todos.push(addtodo.todo);
            console.log(todos);
        }
        else if (ans.select == "Update") {
            let updatetodo = await inquirer.prompt([
                {
                    type: "list",
                    message: "Select Item For Update:-",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let addtodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "Add Item:",
                    name: "todo"
                }
            ]);
            let newtodos = todos.filter(val => val !== updatetodo.todo);
            todos = [...newtodos, addtodo.todo];
            console.log(todos);
        }
        else if (ans.select == "View") {
            console.log(todos);
        }
        else if (ans.select == "Delete") {
            let deletetodo = await inquirer.prompt([
                {
                    type: "list",
                    message: "Select Item For Update:-",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let newtodos = todos.filter(val => val !== deletetodo.todo);
            todos = [...newtodos];
            console.log(todos);
        }
    } while (true);
}
createtodo(todos);
