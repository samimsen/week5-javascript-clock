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
    clock.innerText = `${currentHour} ${currentDay}` //secilen elemente yazildi
}

//fonksiyon her saniye tekrar çağırılacak
setInterval(showTime, 1000);

//baslangıc olarak cagirildi
showTime()


