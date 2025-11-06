//elementler secildi
const nameSpan = document.getElementById("myName");
const clock = document.getElementById("myClock");

//isim alındı ve ilgili tag içerisine yazıldı
const userName = prompt("İsminizi girin:");
nameSpan.innerText = userName;

//saat ve gün gösterilecek fonksiyon
const showTime = () => {
    const date = new Date(); // date objesi
    const currentHour = date.toLocaleTimeString(); //fonksiyon calistigi andaki saat 
    const currentDay = date.toLocaleDateString("tr-TR", { weekday: "long" }); // fonksiyon calistigi andaki gun

    //ek ozellik - saate ve gun dilimine göre arka plan ve yazı rengi degisimi
    if (currentHour < 12) {
        document.body.style.backgroundColor = "#FFFAE6"
        document.body.style.color = "#5E4B36";
    } else if (currentHour < 18) {
        document.body.style.backgroundColor = "#E7F5FF";
        document.body.style.color = "#003049";
    }
    else {
        document.body.style.backgroundColor = "#1E1E2F";
        document.body.style.color = "#EDEDED";
    }

    clock.innerText = `${currentHour} ${currentDay}` //secilen elemente yazildi
}

//fonksiyon her saniye tekrar çağırılacak
setInterval(showTime, 1000);

//baslangıc olarak cagirildi
showTime()


