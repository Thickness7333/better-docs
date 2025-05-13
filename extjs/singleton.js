const {addAdditionalInfoToTitle} = require('./helpers/ownerDocletHelper.js');

/**
 * @param {Object} doclet - Documentation-object created by JSDoc
 */
function addSingletonToOwnerDoclet(doclet) {
    if (doclet && doclet.kind === 'class' && doclet.tags) {
        const tag = doclet.tags.find((tag) => tag.title === 'singleton');
        if (tag) {
            addAdditionalInfoToTitle(doclet, 'SINGLETON');
        }
    }
}

exports.addSingletonToOwnerDoclet = addSingletonToOwnerDoclet;
