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
today = year + "-" + month + "-" + day;

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

  // Used in db get instead of in post function
  // dataCel.each(function () {
  //   if ($(this).data("day") === date) {
  //     if (title != null) {
  //       $(this).attr("data-name", title);
  //     }
  //     if (notes != null) {
  //       $(this).attr("data-notes", notes);
  //     }
  //     $(this).addClass("event");
  //     if (department_id != null) {
  //       $(this).addClass("event--" + department_id);
  //     }
  //     fillEventSidebar($(this));
  //   }
  // });

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
  fetch('/api/calendar', {
      method: 'GET',
      // body: JSON.stringify({
      //   title,
      //   date,
      //   notes,
      //   department_id
      // }),
      headers: { "Content-Type": "application/json" },
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      fillEventSidebar(data)
    });
  }

getData();

function fillEventSidebar(data) {
  let mainContainer = document.querySelector(".c-aside__eventList");
  for ( let i = 0; i < data.length; i++) {
    //append each event to our
    mainContainer.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = `${data[i].title}
    ${data[i].notes}`;
    mainContainer.appendChild(div);
  }
  
  
  
  
  //Matt's logic below
  // $(".c-aside__event").remove();
  // var output = []
  // var container = document.querySelector(".c-aside__eventList");
  // for (var i = 0; i < data.length; i++) {
  //   output.push(
  //   `<p class='c-aside__event'>${data[i].title}<span> • ${data[i].notes}</span></p>`
  //   )
  // }
  // container.innerHTML = output.join("");
}

//       $(".c-aside__eventList").append(
//         "<p class='c-aside__event'>" +
//           thisName +
//           " <span> • " +
//           thisNotes +
//           "</span></p>"

//fill sidebar event info
// function fillEventSidebar(self) {
//   $(".c-aside__event").remove();
//   var thisName = self.attr("data-name");
//   var thisNotes = self.attr("data-notes");
//   var thisImportant = self.hasClass("event--important");
//   var thisBirthday = self.hasClass("event--birthday");
//   var thisFestivity = self.hasClass("event--festivity");
//   I am not sure how to add the department ID to this
//   var thisEvent = self.hasClass("event");

//   switch (true) {
//     case thisImportant:
//       $(".c-aside__eventList").append(
//         "<p class='c-aside__event c-aside__event--important'>" +
//           thisName +
//           " <span> • " +
//           thisNotes +
//           "</span></p>"
//       );
//       break;
//     case thisBirthday:
//       $(".c-aside__eventList").append(
//         "<p class='c-aside__event c-aside__event--birthday'>" +
//           thisName +
//           " <span> • " +
//           thisNotes +
//           "</span></p>"
//       );
//       break;
//     case thisFestivity:
//       $(".c-aside__eventList").append(
//         "<p class='c-aside__event c-aside__event--festivity'>" +
//           thisName +
//           " <span> • " +
//           thisNotes +
//           "</span></p>"
//       );
//       break;
//     case thisEvent:
//       $(".c-aside__eventList").append(
//         "<p class='c-aside__event'>" +
//           thisName +
//           " <span> • " +
//           thisNotes +
//           "</span></p>"
//       );
//       break;
//   }
// }

// We need a fetch by date that fires on click
dataCel.on("click", function () {
  var thisEl = $(this);
  var thisDay = $(this).attr("data-day").slice(8);
  var thisMonth = $(this).attr("data-day").slice(5, 7);
  var date = `2021-${thisMonth}-${thisDay}`
  
   fetch('/api/calendar', {
      method: 'post',
      body: JSON.stringify({
        date
      }),
      headers: { 'Content-Type': 'application/json'}
  })
  .then( response => response.json())
  .then(data => {
    console.log(data);
    fillEventSidebar(data);
  })
    .catch(function (err) {
      console.log(err);
    });
  
    
  
  

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

buttonsPaginator("#next", monthEl, ".c-paginator__month", false, true);
buttonsPaginator("#prev", monthEl, ".c-paginator__month", true, false);

//launch function to set the current month
moveNext(indexMonth - 1, false);

//fill the sidebar with current day
$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);
