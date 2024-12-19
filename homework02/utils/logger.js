import colors from 'colors/safe.js';
import config from 'config';
import 'dotenv/config';

colors.setTheme({
	info: 'cyan',
	log: 'green',
	warn: 'yellow',
	error: 'red',
});

////
let status = parseInt(process.env.COLORS_ENABLED);
const defaultStatus = config.get('COLORS_ENABLED');
//// це бажано робити у файлі config/custom-environment-variables.yml

if (Number.isNaN(status) || !(status >= 0 && status <= 1)) {
	console.warn(
		colors.warn(
			'process.env.COLORS_ENABLED does not meet requirements. Using default value.'
		)
	);
	status = defaultStatus;
}

const getLogger = (namespace) => {
	(getLogger.info = (message) => {
		if (status === 0) {
			console.log(`${namespace}: ${message}`);
		} else {
			console.log(colors.info(`${namespace}: `) + message);
		}
	}),
		(getLogger.log = (message) => {
			if (status === 0) {
				console.log(`${namespace}: ${message}`);
			} else {
				console.log(colors.log(`${namespace}: `) + message);
			}
		}),
		(getLogger.warn = (message) => {
			if (status === 0) {
				console.error(`${namespace}: ${message}`);
			} else {
				console.error(colors.warn(`${namespace}: `) + message);
			}
		});

	return getLogger;
};

export default getLogger;
