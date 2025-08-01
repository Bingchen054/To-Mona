function daysBetween(fromDate, toDate) {
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((toDate - fromDate) / oneDay);
}

function nextBirthday(birthMonth, birthDay) {
  const today = new Date();
  const year = today.getFullYear();
  let next = new Date(year, birthMonth - 1, birthDay);

  // 若生日已過，則設定為下一年
  if (next < today) {
    next = new Date(year + 1, birthMonth - 1, birthDay);
  }

  return next;
}

window.onload = function () {
  const today = new Date();

  const dateMeeting = new Date("2023-09-11");
  const dateConfession = new Date("2025-01-01");

  const bingchenBirthday = nextBirthday(11, 3);   // 11月3日
  const monaBirthday = nextBirthday(12, 16);      // 12月16日

  document.getElementById("daysSinceMeeting").textContent = daysBetween(dateMeeting, today);
  document.getElementById("daysSinceConfession").textContent = daysBetween(dateConfession, today);

  document.getElementById("daysToBingchenBirthday").textContent = daysBetween(today, bingchenBirthday);
  document.getElementById("daysToMonaBirthday").textContent = daysBetween(today, monaBirthday);
};
