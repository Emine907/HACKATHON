
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