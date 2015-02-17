var searchResultsData = require('./seach-results-data.json');

exports.performSearch = function(input, callback) {
    var pageIndex = input.pageIndex || 0;
    var pageSize = 100;
    var start = pageIndex * pageSize;

    var items = [];

    for (var i=start; i<start+pageSize; i++) {
        items.push(searchResultsData.items[i % searchResultsData.items.length]);
    }

    var results = {
        pageIndex: pageIndex,
        totalMatches: searchResultsData.items.length,
        items: items
    };

    callback(null, results);
};