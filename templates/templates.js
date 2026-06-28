/**
 * This file contians all the methods needed to reference a template.
 */

import chalk from 'chalk';
import path from 'path';

const templates = {
    'default': './default',
    '2D': './2D',
    '2D_framed': './2D_framed',
}

/**
 * Return template URL.
 *
 * @param {string} template
 * @return {string}
 */
export function getTemplateURL(template) {
    
    if (template in templates) {
        return path.join(import.meta.dirname, templates[template]);
    } else {
        throw new Error(`Template: ${template} does not exists.`);
    }
}

/**
 * Print templates available.
 */
export function printTemplates() {
    console.log(chalk.green(Object.keys(templates).join(', ')));
}

