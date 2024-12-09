'use strict';

const getLogger = (namespace) => {
	(getLogger.info = (message) => {
		console.log(`${namespace}: ${message}`);
	}),
		(getLogger.log = (message) => {
			console.log(`${namespace}: ${message}`);
		}),
		(getLogger.warn = (message) => {
			console.error(`${namespace}: ${message}`);
		});

	return getLogger;
};

module.exports = getLogger;
