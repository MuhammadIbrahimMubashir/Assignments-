import inquirer from 'inquirer';
console.log("Welcome To Currency Converter");
let ans = await inquirer.prompt([
    {
        type: "list",
        message: "Choose A Currency To Convert Pakistani Rupee Into:-",
        name: "currency",
        choices: ["Kuwait Dinar", "Euro", "Dollar", "Dirham"]
    }
]);
if (ans.currency == "Kuwait Dinar") {
    let a = await inquirer.prompt([
        {
            type: "number",
            message: "Enter Your Kuwait Dinar(KWD):",
            name: "kd"
        }
    ]);
    let b = a.kd * 908;
    console.log(`Your ${a.kd} Kuwait Dinar(KWD) = ${b} Pakistani Rupees(PKR)`);
}
else if (ans.currency == "Euro") {
    let a = await inquirer.prompt([
        {
            type: "number",
            message: "Enter Your Euro(EUR):",
            name: "eu"
        }
    ]);
    let b = a.eu * 302;
    console.log(`Your ${a.eu} Euro(EUR) = ${b} Pakistani Rupees(PKR)`);
}
else if (ans.currency == "Dollar") {
    let a = await inquirer.prompt([
        {
            type: "number",
            message: "Enter Your Dollar(USD):",
            name: "do"
        }
    ]);
    let b = a.do * 278;
    console.log(`Your ${a.do} Dollar(USD) = ${b} Pakistani Rupees(PKR)`);
}
else if (ans.currency == "Dirham") {
    let a = await inquirer.prompt([
        {
            type: "number",
            message: "Enter Your Dirham(AED):",
            name: "di"
        }
    ]);
    let b = a.di * 75;
    console.log(`Your ${a.di} Dirham(AED) = ${b} Pakistani Rupees(PKR)`);
}
else {
    console.log("Invaild Currency");
}
