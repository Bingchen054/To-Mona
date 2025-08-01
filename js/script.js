function updateTimer(elementId, targetDate, now) {
  const diff = targetDate - now;
  if (diff <= 0) {
    document.getElementById(elementId).innerText = "倒數已結束";
    return;
  }

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  let label = "";
  switch (elementId) {
    case "meetTimer":
      label = "💖 我們認識至今：";
      break;
    case "confessTimer":
      label = "💘 我們表白至今：";
      break;
    case "monaBirthdayTimer":
      label = "🎂 Mona 下一次生日倒數：";
      break;
    case "bingchenBirthdayTimer":
      label = "🎂 Bingchen 下一次生日倒數：";
      break;
    case "newYearTimer":
      label = "🌸 距離年底還有：";
      break;
  }

  if (elementId.includes("Birthday") || elementId === "newYearTimer") {
    document.getElementById(elementId).innerText = `${label}${days}天 ${hours}小時 ${minutes}分 ${seconds}秒`;
  } else {
    document.getElementById(elementId).innerText = `${label}${days}天 ${hours}小時 ${minutes}分 ${seconds}秒`;
  }
}

function getNextBirthday(month, day) {
  const now = new Date();
  let year = now.getFullYear();
  const birthday = new Date(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T00:00:00`);
  if (birthday < now) {
    birthday.setFullYear(year + 1);
  }
  return birthday;
}

function updateAllTimers() {
  const now = new Date();

  updateTimer("meetTimer", new Date("2023-09-11T00:00:00"), now);
  updateTimer("confessTimer", new Date("2025-01-01T00:00:00"), now);
  updateTimer("monaBirthdayTimer", getNextBirthday(12, 16), now);
  updateTimer("bingchenBirthdayTimer", getNextBirthday(11, 3), now);
  updateTimer("newYearTimer", new Date("2025-12-31T23:59:59"), now);
}

// 初始化並每秒更新
window.onload = function () {
  updateAllTimers();
  setInterval(updateAllTimers, 1000);
};
