// fill the month table with column headings
function day_title(day_name) {
  document.write("<div class='c-cal__col'>" + day_name + "</div>");
}
// fills the month table with numbers
function fill_table(month, month_length, indexMonth) {
  day = 1;
  // begin the new month table
  document.write("<div class='c-main c-main-" + indexMonth + "'>");
  //document.write("<b>"+month+" "+year+"</b>")

  // column headings
  document.write("<div class='c-cal__row'>");
  day_title("Sun");
  day_title("Mon");
  day_title("Tue");
  day_title("Wed");
  day_title("Thu");
  day_title("Fri");
  day_title("Sat");
  document.write("</div>");

  // pad cells before first day of month
  document.write("<div class='c-cal__row'>");
  for (var i = 1; i < start_day; i++) {
    if (start_day > 7) {
    } else {
      document.write("<div class='c-cal__cel'></div>");
    }
  }

  // fill the first week of days
  for (var i = start_day; i < 8; i++) {
    document.write(
      `<div data-day='2017-` +
        indexMonth +
        "-0" +
        day +
        "'class='c-cal__cel'><p>" +
        day +
        "</p></div>"
    );
    day++;
  }
  document.write("</div>");

  // fill the remaining weeks
  while (day <= month_length) {
    document.write("<div class='c-cal__row'>");
    for (var i = 1; i <= 7 && day <= month_length; i++) {
      if (day >= 1 && day <= 9) {
        document.write(
          "<div data-day='2017-" +
            indexMonth +
            "-0" +
            day +
            "'class='c-cal__cel'><p>" +
            day +
            "</p></div>"
        );
        day++;
      } else {
        document.write(
          "<div data-day='2017-" +
            indexMonth +
            "-" +
            day +
            "' class='c-cal__cel'><p>" +
            day +
            "</p></div>"
        );
        day++;
      }
    }
    document.write("</div>");
    // the first day of the next month
    start_day = i;
  }

  document.write("</div>");
}

