import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const directory = dirname(fileURLToPath(import.meta.url));

export default function (moduleType: string, moduleName: string, configType: 'fileConfiguration' | 'nuxtConfiguration') {

    const configPath = join(
        join(directory, '..', 'moduleConfigs'),
        moduleType,
        moduleName,
        configType === 'fileConfiguration' ? 'fileConfig.js' : 'nuxtConfig.js'
    )

    const moduleConfig = readFileSync(configPath, 'utf-8');

    if (configType === 'nuxtConfiguration') {
        // Get the content between the braces of export default {...}
        const match = moduleConfig.match(/export\s+default\s*{([^]*)}/)
        if (match) {
            
            return match[1].trim();
        }
        return '';
    }

    // For file configs, return as is
    return moduleConfig;
}