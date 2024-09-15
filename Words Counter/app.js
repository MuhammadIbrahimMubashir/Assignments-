import inquirer from "inquirer";
function counter(paragraph) {
    let freeWhiteSpace = paragraph.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
async function startWordCounter(counter) {
    do {
        let res = await inquirer.prompt([
            {
                type: "input",
                message: "Write Your Paragraph Here:-",
                name: "paragraph"
            }
        ]);
        console.log(counter(res.paragraph));
    } while (true);
}
startWordCounter(counter);
