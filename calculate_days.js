function replaceIdText(theId, theText) {
    'use strict';
    /*jslint browser:true */
    //Get the Element, Remove the current text, then append new text.
    var span = document.getElementById(theId);
    while (span.firstChild) {
        span.removeChild(span.firstChild);
    }//while
    span.appendChild(document.createTextNode(theText));
} //function

function calculate_days() {
    'use strict';
    var marriageDate, today, millisecondsOfMarriage, daysOfMarriage;
    marriageDate = new Date();
    today = new Date();

    marriageDate.setFullYear(2008, 5, 28); //need 5 for june, month index starts at 0=jan

    millisecondsOfMarriage = today.getTime() - marriageDate.getTime();

    //                                                sec     min    hour   day
    daysOfMarriage = ((((millisecondsOfMarriage / 1000) / 60)  / 60)  / 24);
    replaceIdText("numberOfDays", Math.floor(daysOfMarriage));
}