import { questions } from "./questions.js";

export function createQuestions() {
    return questions.map(({message, options, ...rest}) => ({
        type: !!options ? 'list' : 'input',
        message,
        ...(!!options && {choices: options}),
        ...rest
    }))
}
