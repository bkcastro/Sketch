import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import { directoryExists, loadSketchbookFile } from './lib/files.js'
import { displayUserInfo } from './lib/user.js'

clear();

if (directoryExists('.sketchbook.json')) {
	
	displayUserInfo();

} else {
	
	console.log(chalk.red("This directory is not a sketchbook please make one with: sketch init"))
}
