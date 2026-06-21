'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
	return sourceString.split(';').reduce((obj, declaration) => {
		const colonIndex = declaration.indexOf(':');

		if (colonIndex === -1) {
			return obj;
		}

		const key = declaration.slice(0, colonIndex).replace(/\s+/g, '');
		const value = declaration.slice(colonIndex + 1).trim();

		if (!key) {
			return obj;
		}

		obj[key] = value;

		return obj;
	}, {});
}
module.exports = convertToObject;

  