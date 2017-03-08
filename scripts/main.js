var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
var OTTER1 = 49;
var OTTER2 = 50;
var OTTER3 = 51;
var OTTER4 = 52;
var OTTER5 = 53;

function setDetails(imageURL, titleText) {
    //must declare this on every function to tell it to conform to most recent versoin of JavaScript
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageURL);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

//Function to get all tags with data-image-role="trigger" and the puts it into an array a.k.a the otter pics
function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}



function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);


        var thumbArray = getThumbnailsArray();
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
        else if (event.keyCode === OTTER1) {
            setDetailsFromThumb(thumbArray[0]);
            showDetails();
        } else if (event.keyCode === OTTER2) {

            setDetailsFromThumb(thumbArray[1]);
            showDetails();
        } else if (event.keyCode === OTTER3) {

            setDetailsFromThumb(thumbArray[2]);
            showDetails();
        } else if (event.keyCode === OTTER4) {

            setDetailsFromThumb(thumbArray[3]);
            showDetails();
        } else if (event.keyCode === OTTER5) {

            setDetailsFromThumb(thumbArray[4]);
            showDetails();
        }


    });
}



/*

function addNumPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        //console.log(event.keyCode);
        var thumbArray = getThumbnailsArray();
        var keyCode = [49, 50, 51, 52, 53, 54, 55, 56, 57]; // numkey 1 to 9
        //if (keyCode.includes(event.keyCode)) {
        for (var i = 0; i < thumbArray.length; i++) {
            var A = keyCode[i];
            if (event.keyCode === A) {
                setDetailsFromThumb(thumbArray[i]);
                showDetails();
            }
        }
    });
}
*/

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();
