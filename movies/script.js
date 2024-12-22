// script.js
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
