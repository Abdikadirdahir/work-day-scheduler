/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

var currentDateEl = $("#currentDay");
var timeblocksEl = $(".time-block");
var buttonClick = ("button-click")

function todayDate() {
    var theDate = moment().format("MMM DD, YYYY");
    currentDateEl.text("Today date is " + theDate);
    timeblocksEl.each(function () {
        var currentHour = moment().hours()
        if (currentHour === $(this).data().time) {
            $(this).children("textarea").addClass("present");

        } else if (currentHour > $(this).data().time) {
            $(this).children("textarea").addClass("past");
        } else {
            $(this).children("textarea").addClass("future");
        }
    })
}

todayDate();

setInterval(todayDate, 10000);


$(".saveBtn").on("click", function () {
    var saveTime = $(this).siblings("textarea").val();
    var whatTime = $(this).parent(".time-block").data("time");
    console.log(whatTime)
    localStorage.setItem(whatTime, saveTime)

})

$("textarea").each(function () {
    var getTime = $(this).parent(".time-block").data("time");
    $(this).val(localStorage.getItem(getTime));
})

