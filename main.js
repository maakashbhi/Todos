import inquirer from "inquirer";
async function main() {
    const todos = [];
    let condition = "true";
    while (condition) {
        const todequestion = await inquirer.prompt([
            {
                name: "question",
                type: "input",
                message: "What is the question?"
            },
            {
                name: "Question",
                type: "confirm",
                message: "what is your second question?",
                default: "true"
            }
        ]);
        todos.push(todequestion.question);
        console.log(`\n ${todos} \n`);
        condition = todequestion.Question;
    }
    condition = "true";
    while (condition) {
        const options = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Choose an option:",
                choices: ["Add", "Delete", "viewTask", "Update", "Exit"]
            }
        ]);
        if (options.option === "Add") {
            let Addoption = await inquirer.prompt([
                {
                    name: "Add",
                    type: "input",
                    message: "please enter your message"
                }
            ]);
            todos.push(Addoption.Add);
            console.log(`\n Todos add this: ${todos} \n`);
        }
        ;
        if (options.option === "Delete") {
            const Deleteoption = await inquirer.prompt([
                {
                    name: "Delete",
                    type: "input",
                    message: "please select your message"
                }
            ]);
            const index = todos.indexOf(Deleteoption.Delete);
            if (index !== -1) {
                todos.splice(index, 1);
                console.log("Task deleted successfully.");
            }
            else {
                console.log(` \n Task not found. \n`);
            }
            console.log(todos);
        }
        ;
        if (options.option === "viewTask") {
            const view = await inquirer.prompt([
                {
                    name: "tasks",
                    type: "input",
                    message: "this is a task view"
                }
            ]);
            todos.push(view.tasks);
            console.log(` \n current tasks:  ${todos} \n`);
        }
        else
            (options.option === "Exit");
        {
            condition = "false";
            // exit;
            //console.log(todos);
            break;
        }
        ;
    }
}
main();
