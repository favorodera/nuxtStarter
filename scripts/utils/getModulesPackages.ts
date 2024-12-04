import nuxtModules from '../modules.js';
import { Answers } from '../types.js';

export default function (answers: Answers) {
    const selectedModules = Object.values(answers)
        .flat()
        .filter(item => item !== answers.projectName);

    // Get all modules that match the selected config values
    const selectedModuleConfigs = Object.values(nuxtModules)
        .flat()
        .filter(module => selectedModules
            .includes(module.nuxtConfigValue));

    // Collect all packages (main package and additional packages)
    const modulePackages = selectedModuleConfigs.reduce(
        (allPackages, module) => {

            // Add the main package
            allPackages.push(module.npmPackageName);

            // Add additional packages if they exist
            if (module.additionalNpmPackages) {
                allPackages.push(...module.additionalNpmPackages);
            }
            return allPackages;

        }, [] as string[])

    return [...new Set(modulePackages)]; // Remove any duplicates

}