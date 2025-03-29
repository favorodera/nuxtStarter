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
        },
        {
            name: 'Nuxt Icon',
            nuxtConfigValue: '@nuxt/icon',
            npmPackageName: '@nuxt/icon',
            additionalNpmPackages: ['@iconify-json/hugeicons'],
            nuxtConfigConfiguration:getModuleConfigs('uiModules','nuxtIcon','nuxtConfiguration')
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
            configFile: {
                name: 'content.config.ts',
                content: getModuleConfigs('cmsModules', 'nuxtContent', 'fileConfiguration')
            },
            nuxtConfigConfiguration: getModuleConfigs('cmsModules', 'nuxtContent', 'nuxtConfiguration')
        },
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
    ],
    fontsModules: [
        {
            name: 'Nuxt Fonts',
            nuxtConfigValue: '@nuxt/fonts',
            npmPackageName: '@nuxt/fonts',
            nuxtConfigConfiguration: getModuleConfigs('fontsModules', 'nuxtFonts', 'nuxtConfiguration')
        }
    ]
}

export default nuxtModules;