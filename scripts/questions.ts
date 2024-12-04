import type { Question } from './types.js';
import nuxtModules from './modules.js';

const questions: Question[] = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        default: 'my-nuxt-app'
    },
    {
        type: 'checkbox',
        name: 'cssFrameworks',
        message: 'Select CSS Frameworks:',
        choices: nuxtModules.cssFrameworks?.map(cssFramework => ({
            name: cssFramework.name,
            value: cssFramework.nuxtConfigValue,
        })) || []
    },
    {
        type: 'checkbox',
        name: 'uiFrameworks',
        message: 'Select UI Frameworks:',
        choices: nuxtModules.uiFrameworks?.map(uiFramework => ({
            name: uiFramework.name,
            value: uiFramework.nuxtConfigValue,
        })) || []
    },
    {
        type: 'checkbox',
        name: 'developerTools',
        message: 'Select Developer Tools:',
        choices: nuxtModules.developerTools?.map(developerTool => ({
            name: developerTool.name,
            value: developerTool.nuxtConfigValue,
        })) || []
    }
];

export default questions;