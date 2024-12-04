import type { ModuleConfig } from './types.js';
import getModuleConfigs from './utils/getModuleConfigs.js';

const nuxtModules: Record<string,ModuleConfig[]> = {
    cssFrameworks: [
        {
            name: 'Unocss',
            nuxtConfigValue: '@unocss/nuxt',
            npmPackageName: '@unocss/nuxt',
            additionalNpmPackages: ['unocss', '@unocss/reset'],
            configFile: {
                name: 'uno.config.ts',
                content: getModuleConfigs('cssFrameworks', 'unocss', 'fileConfiguration')
            },
            nuxtConfigConfiguration: getModuleConfigs('cssFrameworks', 'unocss', 'nuxtConfiguration')
        }
    ],
    uiFrameworks: [
        {
            name: 'Nuxt UI',
            nuxtConfigValue: '@nuxt/ui',
            npmPackageName: '@nuxt/ui',
        }
    ],
    developerTools: [
        {
            name: 'Eslint',
            nuxtConfigValue: '@nuxt/eslint',
            npmPackageName: '@nuxt/eslint',
            additionalNpmPackages:['eslint'],
            configFile: {
                name: 'eslint.config.mjs',
                content: getModuleConfigs('developerTools', 'eslint', 'fileConfiguration')
            },
            nuxtConfigConfiguration: getModuleConfigs('developerTools', 'eslint', 'nuxtConfiguration')
        }
    ]
}

export default nuxtModules;