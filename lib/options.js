/**
 * Singleton object to store option values.
 */
var optionsState = {
	'template': 'default',
	'iterate': false,
    'input': '',
    'output': '',
}

/** 
 * All options and their type.
 */ 
export const options = {
	template: {
		type: 'string',
		short: 't',
	},
	iterate: {
		type: 'boolean',
		short: 'i',
	},
    input: {
        type: 'string',
        short: 'I'
    }, 
    output: {
        type: 'string',
        short: 'O',
    },
};

/**
 * Apply the values to the options.
 * 
 * @param {object} values
 * @return {void}
 */
export function applyValuesToOptions(values) {
    
    for (const [key, value] of Object.entries(values)) {
        optionsState[key] = value;
    }
}

/**
 * Return the value of the option.
 *
 * @param {string} option
 * @return {string|number|boolean}
 */
export function getOptionValue(option) {
    
    return optionsState[option];
}
