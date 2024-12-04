import path from 'path';
import { Answers } from '../types.js';
import { readFile, writeFile } from 'fs/promises';

export default async function (answers: Answers) {
    // Get selected modules
    const selectedModules = Object.values(answers)
    .flat()
    .filter(item => item !== answers.projectName);

    if (selectedModules.length > 0) {
        console.log('Updating Nuxt Modules ⚙')

        const nuxtConfigPath = path.join(
            process.cwd(),
            'nuxt.config.ts'
        )

        try {
            const existingNuxtConfig = await readFile(
                nuxtConfigPath,
                'utf-8'
            )

            const updatedNuxtConfig = existingNuxtConfig.replace(
                /(devtools:\s*{\s*enabled:\s*true\s*}),?\s*\n/,
                `$1,\n  modules: [\n      ${selectedModules.map(module => `"${module}"`).join(',\n      ')}\n    ],\n`
            )

            await writeFile(
                nuxtConfigPath,
                updatedNuxtConfig
            )

            console.log('Nuxt Modules Updated ✔')
        } catch (error) {
            console.error('Error updating nuxt modules', error)
            throw error
        }

    }

}