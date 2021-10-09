//global variables
var monthEl = $(".c-main");
var dataCel = $(".c-cal__cel");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var monthText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var indexMonth = month;
var todayBtn = $(".c-today__btn");
var addBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
var monthsEvents = [];
var filteredEvents = [];

today = `${year}-${month}-${day}`;

// ------ set default events -------
function defaultEvents(dataDay, dataName, dataNotes, classTag) {
  var date = $("*[data-day=" + dataDay + "]");
  date.attr("data-name", dataName);
  date.attr("data-notes", dataNotes);
  date.addClass("event");
  date.addClass("event--" + classTag);
}

defaultEvents(today, "YEAH!", "Today is your day", "important");
defaultEvents(
  "2017-12-25",
  "MERRY CHRISTMAS",
  "A lot of gift!!!!",
  "festivity"
);
defaultEvents("2021-05-04", "LUCA'S BIRTHDAY", "Another gifts...?", "birthday");
defaultEvents(
  "2021-03-03",
  "MY LADY'S BIRTHDAY",
  "A lot of money to spent!!!!",
  "birthday"
);

// ------ functions control -------

//button of the current day
todayBtn.on("click", function () {
  if (month < indexMonth) {
    var step = indexMonth % month;
    movePrev(step, true);
  } else if (month > indexMonth) {
    var step = month - indexMonth;
    moveNext(step, true);
  }
});

//higlight the cel of current day
dataCel.each(function () {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});

//window event creator
addBtn.on("click", function () {
  winCreator.addClass("isVisible");
  $("body").addClass("overlay");
  dataCel.each(function () {
    if ($(this).hasClass("isSelected")) {
      today = $(this).data("day");
      document.querySelector('input[type="date"]').value = today;
    } else {
      document.querySelector('input[type="date"]').value = today;
    }
  });
});

closeBtn.on("click", function () {
  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
});

//Modify this so the endpoints
saveBtn.on("click", async function () {
  event.preventDefault();
  var title = $("input[name=name]").val();
  var date = $("input[name=date]").val();
  var notes = $("textarea[name=notes]").val();
  var department_id = $("input[name=tags]").val();

  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
  $("#addEvent")[0].reset();

  if (title && date && notes && department_id) {
    const response = await fetch("/api/calendar", {
      method: "post",
      body: JSON.stringify({
        title,
        date,
        notes,
        department_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/calendar");
    } else {
      alert(response.statusText);
    }
  }
});

function getData() {
  fetch("/api/calendar", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      monthsEvents = data;
      allEventSidebar(data);
    });
}

getData();

function allEventSidebar(data) {
  console.log(data);
  console.log("MONTHS EVENT!!!", monthsEvents);
  console.log("Typeof Months Events", typeof monthsEvents);
  $(".c-aside__event").remove();
  var output = [];
  var container = document.querySelector(".c-aside__eventList");
  for (var i = 0; i < data.length; i++) {
    output.push(
      `<p class='c-aside__event'>${data[i].title}<span> • ${data[i].notes}</span></p>`
    );
  }
  container.innerHTML = output.join("");
}

// fill sidebar event info
function fillEventSidebar(self) {
  $(".c-aside__event").remove();
  var thisName = self.attr("data-name");
  var thisNotes = self.attr("data-notes");
  var thisEvent = self.hasClass("event");
  var thisExactDay = self.attr("data-day");
  console.log("fillEventSidebar thisExactDay: ", thisExactDay);
  var output = [];
  var container = document.querySelector(".c-aside__eventList");
  //I need to intake the data - duplicate the date for now
  for (var i = 0; i < monthsEvents.length; i++) {
    console.log("Month's Events: ", monthsEvents[i]);
    console.log("Month's Events Title ", monthsEvents[i].title);
    console.log("Month's Events Notes ", monthsEvents[i].notes);
    console.log("Month's Events Date ", monthsEvents[i].date);
    if (monthsEvents[i].date === thisExactDay) {
      console.log("Month's Events: ", monthsEvents[i]);
      console.log("Month's Events Title ", monthsEvents[i].title);
      console.log("Month's Events Notes", monthsEvents[i].notes);
      output.push(
        `<p class='c-aside__event'>${monthsEvents[i].title}<span> ${monthsEvents[i].notes}</span></p>`
      );
    }
    console.log("Output from FillSideBar: ", output);
    container.innerHTML = output.join("");

    // switch (true) {
    //   case thisImportant:
    //     $(".c-aside__eventList").append(
    //       "<p class='c-aside__event c-aside__event--important'>" +
    //         thisName +
    //         " <span> • " +
    //         thisNotes +
    //         "</span></p>"
    //     );
    //     break;
    //   case thisBirthday:
    //     $(".c-aside__eventList").append(
    //       "<p class='c-aside__event c-aside__event--birthday'>" +
    //         thisName +
    //         " <span> • " +
    //         thisNotes +
    //         "</span></p>"
    //     );
    //     break;
    //   case thisFestivity:
    //     $(".c-aside__eventList").append(
    //       "<p class='c-aside__event c-aside__event--festivity'>" +
    //         thisName +
    //         " <span> • " +
    //         thisNotes +
    //         "</span></p>"
    //     );
    //     break;
    //   case thisEvent:
    //     $(".c-aside__eventList").append(
    //       "<p class='c-aside__event'>" +
    //         thisName +
    //         " <span> • " +
    //         thisNotes +
    //         "</span></p>"
    //     );
    //     break;
    // }
  }
}

//what is passed to fillEventSidebar using this?
//What data is passed? 
dataCel.on("click", function () {
  var thisEl = $(this);
  console.log("DataCel thisEl: ", thisEl);
  var thisDay = $(this).attr("data-day").slice(8);
  console.log("DataCel thisEl: ", thisEl);
  var thisMonth = $(this).attr("data-day").slice(5, 7);
  var thisExactDay = $(this).attr("data-day");
  console.log("DataCel thisExactDay: ", thisExactDay);

  fillEventSidebar($(this));

  $(".c-aside__num").text(thisDay);
  $(".c-aside__month").text(monthText[thisMonth - 1]);

  dataCel.removeClass("isSelected");
  thisEl.addClass("isSelected");
});

//function for move the months
function moveNext(fakeClick, indexNext) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "-=100%",
    });
    $(".c-paginator__month").css({
      left: "-=100%",
    });
    switch (true) {
      case indexNext:
        indexMonth += 1;
        break;
    }
  }
}
function movePrev(fakeClick, indexPrev) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "+=100%",
    });
    $(".c-paginator__month").css({
      left: "+=100%",
    });
    switch (true) {
      case indexPrev:
        indexMonth -= 1;
        break;
    }
  }
}

//months paginator
function buttonsPaginator(buttonId, mainClass, monthClass, next, prev) {
  switch (true) {
    case next:
      $(buttonId).on("click", function () {
        if (indexMonth >= 2) {
          $(mainClass).css({
            left: "+=100%",
          });
          $(monthClass).css({
            left: "+=100%",
          });
          indexMonth -= 1;
        }
        return indexMonth;
      });
      break;
    case prev:
      $(buttonId).on("click", function () {
        if (indexMonth <= 11) {
          $(mainClass).css({
            left: "-=100%",
          });
          $(monthClass).css({
            left: "-=100%",
          });
          indexMonth += 1;
        }
        return indexMonth;
      });
      break;
  }
}

//logic for logout button
const logOutBtn = document.querySelector('#logOutBtn');

async function logOutHandler() {
  console.log('logOutHandler function fired!');

  const response = await fetch('/logout', {
    method: 'post',
    headers: {'Content-Type': 'application/json'}
});

if(response.ok) {
    document.location.replace('/login');
} else {
    alert(response.statusText);
    
}
}

// logic for shift change event

const shiftChangeBtn = document.querySelector('#shiftChange'); 
  
async function shiftChangeHandler() {
  console.log('shift change button working');
  
  const response = await fetch('/shiftchangeform', {
    method: 'post',
    headers: {'Content-Type': 'application/json'}
  });

  if(response.ok) {
    document.location.replace('/shiftChangeform');
  } else {
    alert(response.statusText);
  }

}


shiftChangeBtn.addEventListener('click')
logOutBtn.addEventListener('click', logOutHandler)

buttonsPaginator("#next", monthEl, ".c-paginator__month", false, true);
buttonsPaginator("#prev", monthEl, ".c-paginator__month", true, false);

//launch function to set the current month
moveNext(indexMonth - 1, false);

//fill the sidebar with current day
$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);
