#!/usr/bin/env node

import path from 'node:path';
import prompt from './utils/prompt.js';
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import getModulesPackages from './utils/getModulesPackages.js';
import getModuleNuxtConfig from './utils/getModuleNuxtConfig.js';
import updateNuxtModules from './utils/updateNuxtModules.js';
import getModuleConfigFile from './utils/getModuleConfigFile.js';
import inquirer from 'inquirer';

process.on(
    'SIGINT',
    () => {
        console.log('Exiting...');
        process.exit(0);
    }
)

async function starter() {
    try {
        // Get answers
        const answers = await prompt();
        answers
        if (!answers) return;

        // Create new project directory
        const newProjectPath = path.join(
            process.cwd(),
            answers.projectName
        )

        // Stop process if directory exists
        if (existsSync(newProjectPath)) {
            console.error('Directory already exists ❌');
            process.exit(1);
        }

        // Create new project using nuxi
        console.log('Creating Nuxt project... 🚀');
        execSync(
            `npx nuxi@latest init ${answers.projectName}`, {
            stdio: 'inherit'
        });

        // Move to new project directory
        process.chdir(newProjectPath);

        // Get selected modules packages
        const selectedModulesPackages = getModulesPackages(answers);

        // Install selected modules
        if (selectedModulesPackages.length > 0) {
            console.log('Installing selected modules... 📁');

            try {
                execSync(
                    `npm install ${selectedModulesPackages.join(' ')}`,
                    { stdio: 'inherit' }
                );
                console.log('Modules installed successfully ✔');
            } catch (error) {
                console.error('Error installing modules:', error);

                return;
            }
        }

        // Write modules nuxt configuration if any
        await getModuleNuxtConfig(answers)

        // Update nuxt config modules array
        await updateNuxtModules(answers)

        // Create module configs if any 
        await getModuleConfigFile(answers)

        // Prepare the project to generate typescript files
        console.log('Preparing project... 📦');

        execSync(
            'npx nuxi prepare',
            { stdio: 'inherit' }
        );

        console.log('Project prepared and created successfully 🎉');

        console.log(`Run cd ${answers.projectName}`)

        console.log('Then run your linting/formatting tool');

        console.log('Finally run `npm run dev` to start the development server.');
        
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }finally {
        process.exit(0);
    }
}

starter();