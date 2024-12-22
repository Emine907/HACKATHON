// script.js
/*
document.addEventListener('DOMContentLoaded', function() {
    // İzledim butonlarını seçiyoruz
    const watchedButtons = document.querySelectorAll('.watched-button');

    watchedButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardElement = this.closest('.card'); // En yakın card elementini buluyoruz
            const filmTitle = cardElement.querySelector('.info li').textContent;

            // İzlenen filmi işaretlemek
            markAsWatched(cardElement);

            // Buton metnini değiştiriyoruz
            this.textContent = 'İzlenmiş';
            this.classList.add('watched'); // Butona 'watched' sınıfı ekliyoruz
        });
    });

    // İzlenen filmi işaretlemek için fonksiyon
    function markAsWatched(cardElement) {
        cardElement.style.opacity = '0.5'; // Film kartını soluk yapıyoruz
    }
});
*/

const buttons = document.querySelectorAll(".watched-button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // "İzledim" butonuna basıldığında metni değiştiriyoruz
        this.textContent = "İzledim ✔";
        // Geri al butonunu oluşturuyoruz
        let undoButton = document.createElement("button");
        undoButton.textContent = "Geri Al";
        undoButton.classList.add("undo-button"); // Geri al butonuna stil eklemek için
        // Geri al butonunu izledim butonunun altına ekliyoruz
        this.parentElement.appendChild(undoButton);

        // Geri al butonuna tıklanırsa, değişiklikleri geri alıyoruz
        undoButton.addEventListener("click", () => {
            this.textContent = "İzledim"; // Buton metnini eski haline getiriyoruz
            this.parentElement.removeChild(undoButton); // Geri al butonunu siliyoruz
        });
    });
});