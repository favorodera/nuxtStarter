import inquirer from 'inquirer';
import questions from '../questions.js';
import { Answers } from '../types.js';

export default async function () {
    try {
        const answers = await inquirer.prompt(questions as any)

        return answers as Answers
    }
    catch (error) {
        console.error('Prompt Error', error)
        throw error
    }
}
