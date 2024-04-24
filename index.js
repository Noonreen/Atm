#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let myPin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: "pinCode",
        message: "Enter your pin code",
        type: "number"
    }
]);
if (pinAns.pinCode === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            message: "Please select one option.",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Balance inquiry", "Cash deposit"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let enterAmount = await inquirer.prompt([
            { name: "amount",
                message: "Enter amount",
                type: "number"
            }
        ]);
        myBalance -= enterAmount.amount;
        if (enterAmount.amount <= myBalance) {
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("You have insufficient balance");
        }
    }
    else if (operationAns.operation === "Balance inquiry") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fast",
                message: "Please select option",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        if (fastCash.fast === 1000) {
            console.log(`Your remaining balance is: ${myBalance - 1000}`);
        }
        else if (fastCash.fast === 2000) {
            console.log(`your remaining balance is: ${myBalance - 2000}`);
        }
        else if (fastCash.fast === 5000) {
            console.log(`Your remaining balance is: ${myBalance - 5000}`);
        }
        else if (fastCash.fast === 10000) {
            console.log(`Your remaining balance is: ${myBalance - 10000}`);
        }
    }
    else if (operationAns.operation === "Cash deposit") {
        let depositAmount = await inquirer.prompt([
            {
                name: "cashdeposit",
                message: "Enter Deposit amount",
                type: "number"
            }
        ]);
        console.log(`Your have successfully deposited: ${depositAmount.cashdeposit} your new balance is: ${myBalance + depositAmount.cashdeposit}`);
    }
}
else {
    console.log("Invalid pin code!!");
}
;
