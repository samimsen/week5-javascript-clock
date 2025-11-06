const nameSpan = document.getElementById("myName");
const clock = document.getElementById("myClock");

const userName = prompt("İsminizi girin:");
nameSpan.innerText = userName;

const showTime = () => {
    const date = new Date();
    const currentHour = date.toLocaleTimeString();
    const currentDay = date.toLocaleDateString("tr-TR", { weekday: "long" });
    clock.innerText = `${currentHour} ${currentDay}`
}

setInterval(showTime, 1000);

showTime()


