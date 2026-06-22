import fs from 'fs';
import path from 'path';
//import { readFile } from 'fs/promises';

export function getCurrentDirectoryBase() {
	return path.basename(process.cwd());
}

export function directoryExists(filePath) {
	return fs.existsSync(filePath);
}

export async function loadSketchbookFile(callback) {
	try {
		const rawData = await fs.readFile('.sketchbook.json', 'utf-8');
		const configObject = JSON.parse(rawData);
		return configObject;
	} catch (error) {
		console.error('Error reading or parsing file:', error);
	}
}
