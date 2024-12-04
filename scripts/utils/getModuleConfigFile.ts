import path from 'path';
import nuxtModules from '../modules.js';
import { Answers } from '../types.js';
import { writeFile } from 'fs/promises';

export default async function (answers: Answers) {
    // Get selected modules with config files
    const selectedModulesWithConfigFile = Object.values(answers)
        .flat()
        .filter(item => item !== answers.projectName)
        .map(
            value => Object.values(nuxtModules)
                .flat()
                .find(module => module.nuxtConfigValue === value)
        )
        .filter(module => module !== undefined && !!module.configFile);

    if (selectedModulesWithConfigFile.length > 0) {
        console.log('Creating config files for modules... ⚙');

        // Create config files for selected modules
        for (const module of selectedModulesWithConfigFile) {
            if (!module?.configFile) continue;

            const configFilePath = path.join(
                process.cwd(),
                module.configFile.name
            )

            try {
                await writeFile(
                    configFilePath,
                    module.configFile.content,
                    'utf-8'
                )
            }
            catch (error) {
                console.error(`Error creating config file for ${module.name}:`, error, '❌');
                throw error;
            }
        }

        console.log('Module Config files created successfully ✔');
    }
}