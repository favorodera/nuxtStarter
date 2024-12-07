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
        name: 'cssModules',
        message: 'Select CSS Modules:',
        choices: nuxtModules.cssModules?.map(cssModule => ({
            name: cssModule.name,
            value: cssModule.nuxtConfigValue,
        })) || []
    },
    {
        type: 'checkbox',
        name: 'uiModules',
        message: 'Select UI Modules:',
        choices: nuxtModules.uiModules?.map(uiModule => ({
            name: uiModule.name,
            value: uiModule.nuxtConfigValue,
        })) || []
    },
    {
        type: 'checkbox',
        name: 'devToolsModules',
        message: 'Select Developer Tools:',
        choices: nuxtModules.devToolsModules?.map(devTool => ({
            name: devTool.name,
            value: devTool.nuxtConfigValue,
        })) || []
    },
    {
        type: 'checkbox',
        name: 'cmsModules',
        message: 'Select CMS Modules:',
        choices: nuxtModules.cmsModules?.map(cmsModule => ({
            name: cmsModule.name,
            value: cmsModule.nuxtConfigValue,
        })) || []
    },
    {
        type: 'checkbox',
        name: 'extensionModules',
        message: 'Select Extension Modules:',
        choices: nuxtModules.extensionModules?.map(extensionModule => ({
            name: extensionModule.name,
            value: extensionModule.nuxtConfigValue,
        })) || []
    }
];

export default questions;