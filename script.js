"use strict";

const date = new Date();
const renderCalendar = function () {
  const dateString = new Date().toDateString();
  const month = date.getMonth();
  const monthDays = document.querySelector(".days");
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonthIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const lastDayOfMonthIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const lastDayOfPrevMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const nextDaysNumber = 7 - lastDayOfMonthIndex - 1;

  const monthName = [
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

  document.querySelector(".month").innerHTML = monthName[month];
  document.querySelector(".date").innerHTML = dateString;

  let days = "";

  for (let x = firstDayOfMonthIndex; x > 0; x--) {
    days += `<div class='prev-days'>${lastDayOfPrevMonth - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class='current-day'>${i}</div>`;
    } else days += `<div>${i}</div>`;
  }

  for (let y = 1; y <= nextDaysNumber; y++) {
    days += `<div class='next-days'>${y}</div>`;
  }
  monthDays.innerHTML = days;

  let dayBtn = document.querySelectorAll(".days div");
  for (let i = 0; i < dayBtn.length; i++) {
    dayBtn[i].addEventListener("click", function () {
      dayBtn[i].classList.toggle("selected");
    });
  }
};
document.querySelector(".prev").addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", function () {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

console.log(date.getMonth);
