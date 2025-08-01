function updateTimer(id, from, to) {
  const now = new Date();
  const diff = to - from;

  if (diff < 0) {
    document.getElementById(id).textContent = "已經過去了 ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById(id).textContent =
    `${days}天 ${hours}小時 ${minutes}分 ${seconds}秒`;
}

function getNextBirthday(month, day) {
  const now = new Date();
  let year = now.getFullYear();
  let birthday = new Date(`${year}-${month}-${day}T00:00:00`);

  if (birthday < now) {
    birthday = new Date(`${year + 1}-${month}-${day}T00:00:00`);
  }

  return birthday;
}

function getNextBirthday(month, day) {
  const now = new Date();
  let year = now.getFullYear();
  let birthday = new Date(year, month - 1, day);
  if (birthday < now) {
    birthday = new Date(year + 1, month - 1, day);
  }
  return birthday;
}

function updateAllTimers() {
  const now = new Date();

  updateTimer("meetTimer", new Date("2023-09-11T00:00:00"), now);
  updateTimer("confessTimer", new Date("2025-01-01T00:00:00"), now);
  updateTimer("serverOpenTimer", new Date("2025-06-06T00:00:00"), now);
  updateTimer("monaBirthdayTimer", getNextBirthday(12, 16), now);   // Mona: 12/16
  updateTimer("bingchenBirthdayTimer", getNextBirthday(11, 3), now); // Bingchen: 11/3
  updateTimer("newYearTimer", new Date("2025-12-31T23:59:59"), now);
}

setInterval(updateAllTimers, 1000);


updateTimer("serverTimer", new Date("2025-06-06T00:00:00"), now);
