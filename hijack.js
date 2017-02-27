//provided from DevTool
function disableAllLinks() {
    'use strict';
    document.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

var temp = [].slice.call(document.querySelectorAll('a'));
temp.forEach(disableAllLinks);
