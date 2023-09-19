// Находим элементы, которые будут использоваться
const popupTrigger = document.getElementById("popup-trigger");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("popupCloser");

// Функция, которая открывает всплывающее окно
popupTrigger.addEventListener("click", function () {
    popup.style.display = "block";
});

// Функция, которая закрывает всплывающее окно
closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});
