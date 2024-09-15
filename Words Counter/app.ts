import inquirer from "inquirer";    

function counter(paragraph:string){
    let freeWhiteSpace = paragraph.replace(/\s/g,"")

    return freeWhiteSpace.length
}
async function startWordCounter(counter:(text:string)=>number){
    do{
        let res = await inquirer.prompt([
            {
              type:"input" ,
              message:"Write Your Paragraph Here:-" ,
              name:"paragraph"
            }
        ])
    
        console.log(counter(res.paragraph))
    }
    while(true)
}

startWordCounter(counter)