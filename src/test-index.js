// import { program } from 'commander';
// import { from, Observable } from 'rxjs';
// import { concatMap, takeUntil } from 'rxjs/operators';
// //import simpleGit from 'simple-git';
// import inquirer from 'inquirer';

// const gitRepoUrl = 'https://github.com/your-username/project-templates.git';

// program
//   .command('create-project')
//   .description('Create a new project')
//   .action(() => {
//     const prompts = new Observable((observer) => {
//       observer.next({ type: 'input', name: 'projectName', message: 'Enter project name:' });
//       observer.next({ type: 'list', name: 'projectType', message: 'Select project type:', choices: ['backend', 'frontend'] });
//       observer.next({ type: 'list', name: 'language', message: 'Select project language:', choices: ['javascript', 'typescript'] });
//       // Additional prompts for database options, API approach, and UI framework
//       observer.complete();
//     });

//     prompts
//       .pipe(
//         concatMap((prompt) => from(inquirer.prompt(prompt))),
//         takeUntil(prompts)
//       )
//       .subscribe(async (answers) => {
//         const { projectName, projectType, language,
//           // databaseOption,
//           // apiApproach,
//           // uiFramework
//         } = answers;

//         const templateDir = `${projectType}-${language}`;
//         //-${databaseOption}-${apiApproach}-${uiFramework};
//         const targetDir = `./${projectName}`;

//         try {
//           //await simpleGit().clone(gitRepoUrl, targetDir, { '--branch': 'main' });

//           console.log('Project template created successfully!', templateDir, targetDir);
//         } catch (error) {
//           console.error('An error occurred while creating the project template:', error);
//         }
//       });
//   });

// program.parse(process.argv);
