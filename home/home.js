// Tema geçişini kontrol eden fonksiyon
function toggleTheme() {
    const body = document.body;

    // Tema durumu al
    const currentTheme = body.getAttribute("data-theme");

    // Yeni tema belirle (Eğer mevcut tema "dark" ise "light", "light" ise "dark" yap)
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Tema değiştir
    body.setAttribute("data-theme", newTheme);

    // Tema bilgisini localStorage'da sakla
    localStorage.setItem("theme", newTheme);
}

// Sayfa yüklendiğinde, localStorage'dan tema bilgisini al
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    // Eğer localStorage'da tema bilgisi varsa, onu uygula
    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
    } else {
        // Eğer tema bilgisi yoksa, varsayılan olarak "light" temasını uygula
        document.body.setAttribute("data-theme", "light");
    }
});

// Butona tıklama olayını dinliyoruz
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
