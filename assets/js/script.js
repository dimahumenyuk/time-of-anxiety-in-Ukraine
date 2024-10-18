const alarmStartDate = new Date("2022-02-24T03:40:00"); // приклад: початок повномасштабної війни

function updateTimer() {
    const now = new Date();
    const diff = now - alarmStartDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `
        ${days} days, 
        ${hours} hours, 
        ${minutes} minutes, 
        ${seconds} seconds`;
}

// Оновлюємо таймер щосекунди
setInterval(updateTimer, 1000);

// Виводимо таймер одразу при завантаженні сторінки
updateTimer();