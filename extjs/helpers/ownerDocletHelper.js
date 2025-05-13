/**
 * Adds additional information to the Doclets title. (Only works on Classes, Typedefs, Namespaces...)
 *
 * @param {Object} doclet Documentation-object created by JSDoc
 * @param {string} additionalInfo
 */
function addAdditionalInfoToTitle(doclet, additionalInfo) {
    let text = doclet.additionalInfo || '';

    if (text.length > 0) {
        text += ` | ${additionalInfo}`;
    } else {
        text = additionalInfo;
    }

    doclet.additionalInfo = text;
}

exports.addAdditionalInfoToTitle = addAdditionalInfoToTitle;
