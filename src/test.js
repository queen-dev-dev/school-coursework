const date1 = new Date(); // gets current date
const date2 = new Date('2026-09-15'); // date of event

const differenceInMs = Math.abs(date2.getTime() - date1.getTime()); // absolute value (so it doesn't matter which order)
// date.get times gives ms after sometime in 1970s, so difference gets you same time between now and event
const millisecondsInDay = 1000 * 60 * 60 * 24;
// how many milliseconds in a day
const differenceInDays = Math.ceil(differenceInMs / millisecondsInDay);
// round up when converting time to days

window.addEventListener("load", function() { // run when window loads (so doesn't look for something null)
    const timer = this.document.getElementById("timer"); // timer element

    if (timer === null) { // if it doesn't exist (shouldn't occur)
        alert("oops, no timer")
    } else { // sets the inner html / text to below -> eg "(26 days left)"
        timer.innerHTML = "(" + differenceInDays.toString() + " days left)"
    }
})