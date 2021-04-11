var getLastDayofMonth = function(currentMonth) {
    var dt = new Date();
    dt.setMonth(currentMonth + 1);
    dt.setDate(0);
    return dt.getDate();
};

var today = new Date();
var thisMonth = today.getMonth();

// display month and year
$("#month_year").text( getMonthText(thisMonth) + " " + today.getFullYear() );

var lastDayofMonth = getLastDayofMonth(thisMonth);
var rows = $("#calendar").html();

var date; 
var day;  
var start;

// loop through the number of days in the month
for (var i = 0; i < lastDayofMonth; i++) {
    // add one to index and use that number as current date
    today.setDate(i + 1);
    
    // get the current date and day
    date = today.getDate();
    day = today.getDay();
    
    // start a new row if it's the first of the month or the day is Sunday
    if (date === 1 || day === 0) { 
        rows = rows.concat("<tr>"); 
    }

    // add blank dates at the beginning of the calendar until
    // you get to the day of the week the month starts on
    if (date === 1 ) { 
        start = 0;
        while (start < day) {
            rows = rows.concat("<td></td>"); 
            start++;
        }
    } 
    
    // add the date to the calendar
    rows = rows.concat("<td>", date, "</td>");
    
    // add blank dates at the end of the calendar until
    // you get to the last day of the week the month ends in
    if (date === lastDayofMonth) { 
        start = day;
        while (start < 6) {
            rows = rows.concat("<td></td>"); 
            start++;
        }
    } 
    
    // end the row if it's the last of the month or the day is Saturday
    if (date === lastDayofMonth || day === 6) { 
        rows = rows.concat("</tr>"); 
    }
}

// display calendar rows
$("#calendar").html(rows);
