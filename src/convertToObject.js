'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesMap, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return stylesMap;
    }

    const key = declaration.slice(0, colonIndex).replace(/\s+/g, '');
    const value = declaration.slice(colonIndex + 1).trim();

    if (!key) {
      return stylesMap;
    }

    stylesMap[key] = value;

    return stylesMap;
  }, {});
}
module.exports = convertToObject;
