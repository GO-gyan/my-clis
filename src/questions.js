export const questions = [
    {
        message: "Please enter your project name(ex: sl-button):",
        options: null,
        name: "projectName",
        validate(input) {
            if (!/^sl-[a-z-+]+/.test(input)) {
                return false;
              }
    
              // No double dashes or ending dash
              if (input.includes('--') || input.endsWith('-')) {
                return false;
              }
    
              return true;
        }
    },
    {
        message: "Which type of you want to create?",
        options: ["Frontend", "Backend"],
        name: "projectType",
        when(answers) {
            return answers.projectName;
        },
    },
    {
        message: "Please choose the language",
        options: ["JavaScript", "TypeScript"],
        name: "language",
        when(answers) {
            return answers.projectName;
        },
    },
    {
        message: "Please choose the library/framework for frontend",
        options:["ReactJS", "NextJS", "SolidJS"],
        name: "frontend",
        when(answers) {
            return answers.projectType?.toLowerCase() === "frontend";
        },
    },
    {
        message: "Please choose the library/framework for the backend",
        options: ["node-express", "NestJS"],
        name: "backend",
        when(answers) {
            return answers.projectType?.toLowerCase() === "backend";
        },
    },
    {
        message: "Please choose the database",
        options: ["MongoDB"],
        name: "database",
        when(answers) {
            return answers.projectType?.toLowerCase() === "backend";
        },
    },
    {
        message: "Which API approach you want to use?",
        options: ["RESTful", "GraphQL"],
        name: "apiApproach",
        when(answers) {
            return answers.projectType?.toLowerCase() === "backend";
        },
    },
    {
        message: "Do you need apollo client:",
        name: "apolloClient",
        options: ["Yes", "No"],
        when(answers) {
            return answers.projectType?.toLowerCase() === "frontend";
        },
    }
];