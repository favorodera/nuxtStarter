import type { ModuleConfig } from './types.js';
import getModuleConfigs from './utils/getModuleConfigs.js';

const nuxtModules: Record<string,ModuleConfig[]> = {
    cssModules: [
        {
            name: 'Unocss',
            nuxtConfigValue: '@unocss/nuxt',
            npmPackageName: '@unocss/nuxt',
            additionalNpmPackages: ['unocss', '@unocss/reset'],
            configFile: {
                name: 'uno.config.ts',
                content: getModuleConfigs('cssModules', 'unocss', 'fileConfiguration')
            },
            nuxtConfigConfiguration: getModuleConfigs('cssModules', 'unocss', 'nuxtConfiguration')
        }
    ],
    uiModules: [
        {
            name: 'Nuxt UI',
            nuxtConfigValue: '@nuxt/ui',
            npmPackageName: '@nuxt/ui',
        },
        {
            name: 'Nuxt Color Mode',
            nuxtConfigValue: '@nuxtjs/color-mode',
            npmPackageName: '@nuxtjs/color-mode',
            nuxtConfigConfiguration: getModuleConfigs('uiModules', 'nuxtColorMode', 'nuxtConfiguration')
        }
    ],
    devToolsModules: [
        {
            name: 'Eslint',
            nuxtConfigValue: '@nuxt/eslint',
            npmPackageName: '@nuxt/eslint',
            additionalNpmPackages:['eslint'],
            configFile: {
                name: 'eslint.config.mjs',
                content: getModuleConfigs('devToolsModules', 'eslint', 'fileConfiguration')
            },
            nuxtConfigConfiguration: getModuleConfigs('devToolsModules', 'eslint', 'nuxtConfiguration')
        }
    ],
    cmsModules: [
        {
            name: 'Nuxt Content',
            nuxtConfigValue: '@nuxt/content',
            npmPackageName: '@nuxt/content',
            nuxtConfigConfiguration: getModuleConfigs('cmsModules', 'nuxtContent', 'nuxtConfiguration')
        },
        {
            name: 'Nuxt Studio',
            nuxtConfigValue: '@nuxthq/studio',
            npmPackageName: '@nuxthq/studio',
            configFile: {
                name: 'nuxt.schema.ts',
                content: getModuleConfigs('cmsModules', 'nuxtStudio', 'fileConfiguration')
            },
            nuxtConfigConfiguration: getModuleConfigs('cmsModules', 'nuxtStudio', 'nuxtConfiguration')
        }
    ],
    extensionModules: [
        {
            name: 'Pinia',
            nuxtConfigValue: '@pinia/nuxt',
            npmPackageName: '@pinia/nuxt',
            additionalNpmPackages: ['pinia'],
            nuxtConfigConfiguration: getModuleConfigs('extensionModules', 'pinia', 'nuxtConfiguration')
        }
    ],
    databaseModules: [
        {
            name: 'Supabase',
            nuxtConfigValue: '@nuxtjs/supabase',
            npmPackageName: '@nuxtjs/supabase',
            additionalNpmPackages: ['supabase'],
            nuxtConfigConfiguration: getModuleConfigs('databaseModules', 'supabase', 'nuxtConfiguration')
        }
    ]
}

export default nuxtModules;