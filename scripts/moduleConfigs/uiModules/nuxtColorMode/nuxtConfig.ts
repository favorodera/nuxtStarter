export default {
    colorMode: {
        preference: 'system', 
        fallback: 'light', 
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storage: 'localStorage',
        storageKey: 'nuxt-color-mode'
    }
}