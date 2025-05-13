const {addAlternateclassnameToDoclet} = require('./extjs/alternateclassname.js')
const {addXtypeToDoclet} = require('./extjs/xtype.js')
const {addSingletonToOwnerDoclet} = require('./extjs/singleton.js')
const {addStaticToOwnerDoclet} = require('./extjs/static.js')

exports.handlers = {
    /**
     * This plugin adds support for Sencha ExtJS Tags.
     * Currently supported tags: 
     *  - alternateclassname
     *  - xtype
     *
     * @param {Object} doclet - Documentation-object created by JSDoc
     */
    newDoclet({ doclet }) {
        addAlternateclassnameToDoclet(doclet);
        addXtypeToDoclet(doclet);
        addSingletonToOwnerDoclet(doclet);
        addStaticToOwnerDoclet(doclet);
    },
};
