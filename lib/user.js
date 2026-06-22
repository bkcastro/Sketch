import chalk from 'chalk';
import figlet from 'figlet';
import { readFile } from 'fs/promises';

export async function displayUserInfo() {
	try {
		const rawData = await readFile('.sketchbook.json', 'utf-8');
		const user = JSON.parse(rawData);

		console.log(
			chalk.red(
				figlet.textSync('Sketchbook', { horizontalLayout: 'full' })
			)
		);

		console.log(
			chalk.white(
				`
Auther: ${user.name}
Created: ${user.date}
Total Sketches: ${user.total_sketches}
				`
			)
		);

	} catch (error) {
		console.error('Error reading or parsing file:', error);
	}
}
