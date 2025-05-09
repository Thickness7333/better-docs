/**
 * Adds the tag named in the parameters to the doclet.
 *
 * @param {Object} doclet Documentation-object created by JSDoc
 * @param {string} tagTitle The tags name
 * @param {string} docletTagKey The name of the objectkey the tags value should be written to
 */
function addTagToDoclet(doclet, tagTitle, docletTagKey) {
    
    if (doclet.tags && doclet.tags.length > 0) {
        const tag = doclet.tags.find((tag) => tag.title === tagTitle);
        if (tag) {
            doclet[docletTagKey] = tag.value; 
        }
    }
}

exports.addTagToDoclet = addTagToDoclet;
