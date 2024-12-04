/** Configuration interface for a module in the scaffolded application. */
interface ModuleConfig {
    /** The name of the module (e.g., 'Nuxt UI', 'Unocss') */
    name: string;
    /** The value to be used in the 'modules' array in the 'nuxt.config.ts' file (e.g., modules: ['@nuxt/ui', '@unocss/nuxt'] ) */
    nuxtConfigValue: string;
    /** The npm package name for the module (e.g., '@nuxt/ui', '@unocss/nuxt') */
    npmPackageName: string;
    /** Additional and optional npm packages for the module (e.g., '@unocss/reset', unocss) */
    additionalNpmPackages?: string[];
    /** Optional configuration file for the module */
    configFile?: {
        /** The name of the configuration file (e.g., 'eslint.config.mjs', 'unocss.config.ts') */
        name: string;
        /** The content of the configuration file */
        content: string;
    },
    /** Optional Nuxt Config Configuration for the module */
    nuxtConfigConfiguration?: string;
}


/** Interface for answers from the CLI prompt. */
interface Answers {
    /** The project name (e.g., 'my-nuxt-app') */
    projectName: string;
    /** The selected CSS modules (e.g., 'unocss', 'tailwindcss') */
    cssModules: string[];
    /** The selected UI modules (e.g., 'nuxt-ui', 'primevue') */
    uiModules: string[];
    /** The selected developer tools (e.g., 'eslint', 'devtools') */
    devToolsModules: string[];
    /** The selected CMS modules (e.g., 'nuxt-studio', 'nuxt-content') */
    cmsModules: string[];
}

/** Interface for the CLI Questionnaires */
interface Question {
    /** The type of the question (e.g., 'input', 'checkbox') */
    type: string;
    /** Name ID for the question (e.g., 'projectName', 'cssModules', 'uiModules') */
    name: string;
    /** The question message */
    message: string;
    /** The default answer or placeholder for the question */
    default?: string;
    /** Optional choices for the question */
    choices?: { name: string; value: string }[];
}

export type { ModuleConfig, Answers, Question };