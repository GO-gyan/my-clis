import { Command } from "commander";
import figlet from "figlet";
import inquirer from "inquirer";
import { from } from 'rxjs';
import { createQuestions } from "./create-inquirer.js";
import { save, read } from "./configure.js";
const program = new Command();

console.log(figlet.textSync("Template Manager"));
const questions = createQuestions();
const observable = from(questions);

program
  .command('create-project')
  .description('Create a new project template')
  .action(() => {
    
    inquirer.prompt(observable).ui.process.subscribe({
        next: (answers) => { 
            save(answers);
        },
        error: (e) => console.error('Error: ', e),
        complete: () => console.info('Completed', read()),
    });
   })

 program.parse(process.argv);
