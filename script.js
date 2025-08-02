document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const birthdayMessage = document.getElementById("birthday-message");
    const birthdayMusic = document.getElementById("birthday-music");
    const canikMusic = document.getElementById("canik-music"); // Yeni eklenen audio elementi
    
    const messages = [
        "Canım arkadaşım,",
        "Nice mutlu yıllara!",
        "Doğum günün kutlu olsun!",
        "İyi ki doğdun!",
        "Hayatın tüm güzellikleri seninle olsun."
    ];
    let messageIndex = 0;

    container.addEventListener("click", function() {
        if (messageIndex < messages.length) {
            birthdayMessage.textContent = messages[messageIndex];
            messageIndex++;
            
            // İlk tıklamada müziği başlat
            if (messageIndex === 1) {
                birthdayMusic.play().catch(error => {
                    console.log("Müzik otomatik olarak başlatılamadı:", error);
                });
                
                // Canik müziğini de başlat
                canikMusic.play().catch(error => {
                    console.log("Canik müziği otomatik olarak başlatılamadı:", error);
                });
            }
        }
    });
});