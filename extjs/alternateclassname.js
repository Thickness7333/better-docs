const {addTagToDoclet} = require('./helpers/tagHelper.js');

/**
 * Checks the Doclet for alternateclassname tags.
 * When such a tag is found it is added to the name of the documented object / class / function.
 *
 * @param {Object} doclet - Documentation-object created by JSDoc
 */
function addAlternateclassnameToDoclet(doclet) {
    addTagToDoclet(doclet, 'alternateclassname', 'alternateclassname');
}

exports.addAlternateclassnameToDoclet = addAlternateclassnameToDoclet;
