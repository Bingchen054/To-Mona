<script>
  function updateTimer(elementId, targetDate, now, isCountdown) {
    let diff = isCountdown ? (targetDate - now) : (now - targetDate);
    if (isCountdown && diff <= 0) {
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
        label = "💘 表白至今：";
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

    const text = `${label}${days}天 ${hours}小時 ${minutes}分 ${seconds}秒`;
    document.getElementById(elementId).innerText = text;
  }

  function getNextBirthday(month, day) {
    const now = new Date();
    let year = now.getFullYear();
    let birthday = new Date(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T00:00:00`);
    if (birthday < now) birthday.setFullYear(year + 1);
    return birthday;
  }

  function updateAllTimers() {
    const now = new Date();

    // 已發生的事件（認識、表白）：計算「已經過了多久」
    updateTimer("meetTimer", new Date("2023-09-11T00:00:00"), now, false);
    updateTimer("confessTimer", new Date("2025-01-01T00:00:00"), now, false);

    // 未來事件（生日、跨年）：計算「倒數」
    updateTimer("monaBirthdayTimer", getNextBirthday(12, 16), now, true);
    updateTimer("bingchenBirthdayTimer", getNextBirthday(11, 3), now, true);
    updateTimer("newYearTimer", new Date("2025-12-31T23:59:59"), now, true);
  }

  window.onload = function () {
    updateAllTimers();
    setInterval(updateAllTimers, 1000);
  };
</script>
