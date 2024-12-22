const gonderBtn = document.getElementById("gonder");
const form = document.querySelector("form");

form.addEventListener('submit', kaydet);  // Use 'submit' instead of 'onclick'

function kaydet(e) {
    e.preventDefault();
    // Form elemanlarından verileri alıyoruz
    const DiziFilm = document.querySelector('input[name="DiziFilm"]:checked'); // Hangi seçenek seçilmişse
    const filmName = document.getElementById('filmName').value; // Film/Dizi ismi
    const EvetHayır = document.querySelector('input[name="EvetHayır"]:checked'); // Beğenme seçeneği
    const mesaj = document.getElementById('mesaj').value; // Mesaj

    // Eğer Dizi/Film seçilmemişse, kullanıcıyı uyar
    if (!DiziFilm || !EvetHayır) {
        alert('Lütfen tüm soruları cevaplayın!');
        return;  // Prevent further execution
    }

    // Verileri JSON formatında saklıyoruz
    const formData = {
        DiziFilm: DiziFilm.value,  // Correctly get the value of the selected radio
        filmName: filmName,
        EvetHayır: EvetHayır.value,
        mesaj: mesaj
    };

    // Debugging: To ensure the correct value is selected
    console.log('DiziFilm:', formData.DiziFilm); // Dizi or Film
    console.log('EvetHayır:', formData.EvetHayır); // Evet or Hayır

    // localStorage'dan mevcut veriyi al
    let existingData = localStorage.getItem('formData');
    existingData = existingData ? JSON.parse(existingData) : []; // Eğer veri varsa, JSON formatına çevir, yoksa boş bir dizi oluştur

    // Yeni veriyi mevcut verilere ekle
    existingData.push(formData);

    // Veriyi tekrar localStorage'a kaydet
    localStorage.setItem('formData', JSON.stringify(existingData));

    // Kaydedildiğini bildiren bir mesaj gösteriyoruz
    alert('Form verileri başarıyla kaydedildi!');

    // Formu temizle
    form.reset();

    // Veriyi ekranda göster
    showResult(existingData);
}

// Form verilerini ekranda göstermek için fonksiyon
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
