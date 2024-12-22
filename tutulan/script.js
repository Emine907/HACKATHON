let existingData = localStorage.getItem('formData');
existingData = existingData ? JSON.parse(existingData) : []; // Eğer veri varsa, JSON formatına çevir, yoksa boş bir dizi oluştur

showResult(existingData);
function showResult(data) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';  // Clear previous results

    // Tüm verileri liste halinde ekranda göster
    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('result-item');

        div.innerHTML = `
            <p><strong>Dizi/Film:</strong> ${item.DiziFilm}</p>
            <p><strong>Film/Dizi Adı:</strong> ${item.filmName}</p>
            <p><strong>Beğenme:</strong> ${item.EvetHayır}</p>
            <p><strong>Mesaj:</strong> ${item.mesaj}</p>
        `;

        resultContainer.appendChild(div);
    });

    // Sonuçları görünür hale getir
    resultContainer.style.display = 'block';
}

// Sayfa yüklendiğinde daha önce kaydedilmiş form verilerini kontrol et
window.onload = function() {
    const savedData = localStorage.getItem('formData');
    
    if (savedData) {
        const formData = JSON.parse(savedData);
        showResult(formData);  // Eğer veri varsa, ekranda göster
    }
};
