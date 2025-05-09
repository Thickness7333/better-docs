const {addTagToDoclet} = require('./helpers/tagHelper.js');

/**
 * Checks the Doclet for xtype tags.
 * When such a tag is found it is added to the name of the documented object / class / function.
 *
 * @param {Object} doclet - Documentation-object created by JSDoc
 */
function addXtypeToDoclet(doclet) {
    addTagToDoclet(doclet, 'xtype', 'xtype');
}

exports.addXtypeToDoclet = addXtypeToDoclet;
