import inquirer from 'inquirer';

let balance = 5000;

let res = await inquirer.prompt([
    {
        type:"number",
        message:"Enter The Pin:",
        name:"pin"
    }
])

let Pin = res.pin

if(Pin == 1003){
    console.log("Welcome Sir")
    let cer = await inquirer.prompt([
        {
            type:"list",
            message:"Select The Trasition:",
            name:"transition",
            choices:["Withdrawel","Deposit","Balance","Exit"]
        }
    ]);
    
    if(cer.transition == "Withdrawel"){
        let withdrawel = await inquirer.prompt([
            {
                type:"number",
                message:"Enter Your Amount:",
                name:"wd",
            }
        ])
        console.log("Your Remaining Balance Is:",balance - withdrawel.wd)
    }
    else if(cer.transition == "Deposit"){
        let deposit = await inquirer.prompt([
            {
                type:"number",
                message:"Enter Your Amount:",
                name:"d",
            }
        ])
        console.log("Your Updated Balance Is:",balance + deposit.d)
    }
    else if(cer.transition == "Balance"){
        console.log("Your Balance Is:",balance)
    }
    else if(cer.transition == "Exit"){
        console.log("Thank You For Using ATM")
    }
}
else{
    console.log("Invaild Pin")
};