import path from 'path';
import nuxtModules from '../modules.js';
import { Answers } from '../types.js';
import { readFile, writeFile } from 'fs/promises';

export default async function (answers: Answers) {
    // Get selected modules with Nuxt Config
    const selectedModulesWithNuxtConfig = Object.values(answers)
        .flat()
        .filter(item => item !== answers.projectName)
        .map(
            value => Object.values(nuxtModules)
                .flat()
                .find(module => module.nuxtConfigValue === value)
        )
        .filter(module => module !== undefined && !!module.nuxtConfigConfiguration);

    if (selectedModulesWithNuxtConfig.length > 0) {
        console.log('Writing Nuxt Configuration for selected modules ⚙');

        // Write Nuxt Config for the selected modules
        for (const module of selectedModulesWithNuxtConfig) {
            if (!module?.nuxtConfigConfiguration) continue;

            const nuxtConfigPath = path.join(process.cwd(), 'nuxt.config.ts');

            try {
                const existingNuxtConfig = await readFile(nuxtConfigPath, 'utf-8');

                const updatedNuxtConfig = existingNuxtConfig.replace(
                    /(devtools:\s*{\s*enabled:\s*true\s*}),?\s*\n/,
                    `$1,\n  ${module.nuxtConfigConfiguration},\n`
                );
                await writeFile(nuxtConfigPath, updatedNuxtConfig, 'utf-8');

            } catch (error) {
                console.error(`Error writing Nuxt Configuration for ${module.name}:`, error, '❌');
                throw error;
            }
        }

        console.log('Nuxt Configurations written successfully ✔')

    }
} 