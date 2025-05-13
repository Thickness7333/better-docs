const {addAdditionalInfoToTitle} = require('./helpers/ownerDocletHelper.js');

/**
 * @param {Object} doclet - Documentation-object created by JSDoc
 */
function addStaticToOwnerDoclet(doclet) {
    if (doclet && doclet.scope === 'static' && doclet.kind === 'class') {
        addAdditionalInfoToTitle(doclet, 'STATIC');
        if(doclet.name === 'PortalSettings') debugger;
    }
}

exports.addStaticToOwnerDoclet = addStaticToOwnerDoclet;
