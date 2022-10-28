/** @param {string} name */
function getNumberOfChars(name) {
    // number of characters in: name
    return name.length
}

/** @param {string} name */
function getFirstChar(name) {
    // first character of: name
    return name[0]
}

/** @param {string} name */
function getLastChar(name) {
    // last character of: name
    return name.at(-1)
}

/** @param {string} name */
function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase()
}

/** @param {string} name */
function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase()
}

/** @param {string} name */
function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase() + name.substring(1).toLowerCase()
}
