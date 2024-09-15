"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Player.prototype.fuelIncrease = function () {
        this.fuel = 100;
    };
    return Player;
}());
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Opponent.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    return Opponent;
}());
var player = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "name",
        message: "Please Enter Your Name:"
    }
]);
var opponent = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "select",
        message: "Select Your Oppenent",
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
]);
var p1 = new Player(player.name);
var o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        //console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}`)
        var ask = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select Your Action",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel Is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel Is ").concat(o1.fuel)));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.green("".concat(p1.name, " Fuel Is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.red("".concat(o1.name, " Fuel Is ").concat(o1.fuel)));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green("You Have Drink Portion Your Fuel Is ".concat(p1.fuel)));
        }
        if (ask.opt == "Run For Your Life") {
            console.log(chalk_1.default.red.bold.italic("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent.select == "Assassin") {
        //console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}`)
        var ask = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select Your Action",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel Is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel Is ").concat(o1.fuel)));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.green("".concat(p1.name, " Fuel Is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.red("".concat(o1.name, " Fuel Is ").concat(o1.fuel)));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green("You Have Drink Portion Your Fuel Is ".concat(p1.fuel)));
        }
        if (ask.opt == "Run For Your Life") {
            console.log(chalk_1.default.red.bold.italic("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent.select == "Zombie") {
        //console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(o1.name)}`)
        var ask = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select Your Action",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("".concat(p1.name, " Fuel Is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " Fuel Is ").concat(o1.fuel)));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.green("".concat(p1.name, " Fuel Is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.red("".concat(o1.name, " Fuel Is ").concat(o1.fuel)));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green("You Have Drink Portion Your Fuel Is ".concat(p1.fuel)));
        }
        if (ask.opt == "Run For Your Life") {
            console.log(chalk_1.default.red.bold.italic("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
