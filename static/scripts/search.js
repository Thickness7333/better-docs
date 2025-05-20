let debouncedSearch;

/**
 * @private
 * @param {NodeList} searchTargets 
 * @returns {Array.<Object>}
 */
function getDefaultSearchResults(searchTargets) {
  const defaultSearchResults = [];

  searchTargets.forEach((traget) => {
    const targetAsSearchResultObject = { item: traget };
    defaultSearchResults.push(targetAsSearchResultObject);
  })

  return defaultSearchResults;
}

/**
 * Filters the navitems by the searchpattern. 
 * This function is triggered by the searchbars keyup-event
 *
 * @private
 * @param {Fuse} fuse 
 * @param {string} searchPattern 
 * @param {Array.<Object>} searchTargets 
 * @param {Array.<Object>} defaultSearchResults 
 */
function search(fuse, searchPattern, searchTargets, defaultSearchResults) {
  let results = [];

  if (searchPattern.length > 0) {
    results = fuse.search(searchPattern);
  } else {
    results = defaultSearchResults;
  }

  searchTargets.forEach(target => {
    const targetMatchingResult = results.find((result) => {return result.item === target});
    if (!targetMatchingResult) {
      target.style.display = 'none'

      /**
       * Detects an empty list
       * Remove the list and the list's title if the list is not displayed
       */
      const list = [...target.parentNode.childNodes].filter( elem => elem.style.display !== 'none')

      if (!list.length) {
        target.parentNode.style.display = 'none'
        target.parentNode.previousSibling.style.display = 'none'
      }

      /**
       * Detects empty category
       * Remove the entire category if no item is displayed
       */
      const category = [...target.parentNode.parentNode.childNodes]
        .filter( elem => elem.tagName !== 'H2' && elem.style.display !== 'none')

      if (!category.length) {
        target.parentNode.parentNode.style.display = 'none'
      }
    } else {
      target.parentNode.style.display = 'block'
      target.parentNode.previousSibling.style.display = 'block'
      target.parentNode.parentNode.style.display = 'block'
      target.style.display = 'block'
    }
  })
}

/**
 * Initializes the search-functionality.
 * @private
 */
function initSearch() {
  const input = document.querySelector('#search');
  const searchTargets = [ ...document.querySelectorAll('#sidebarNav li')];
  const defaultSearchResults = getDefaultSearchResults(searchTargets);

  const fuseOptions = {
    isCaseSensitive: false,
    includeScore: false,
    threshold: 0.2,
    keys: [
      'innerText',
      'attributes.xtype.value',
      'attributes.alias.value',
      'attributes.alternateclassname.value'
    ]
  };
  
  const fuse = new Fuse(searchTargets, fuseOptions);

  input.addEventListener('keyup', () => {
    clearTimeout(debouncedSearch);
    debouncedSearch = setTimeout(() => {
      const searchPattern = input.value;
      search(fuse, searchPattern, searchTargets, defaultSearchResults);
    }, 300);
  })
}
  
initSearch();
