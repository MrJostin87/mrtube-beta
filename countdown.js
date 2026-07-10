// Archivo: countdown.js

function iniciarContador(callback) {
    const overlay = document.getElementById("countdown-overlay");
    const texto = document.getElementById("countdown-text");
    
    if (overlay && texto) {
        overlay.style.display = "flex";
        let cuenta = 3;
        texto.innerText = cuenta;
        
        const interval = setInterval(() => {
            cuenta--;
            if (cuenta > 0) {
                texto.innerText = cuenta;
            } else {
                texto.innerText = "¡A JUGAR! 🐔";
                clearInterval(interval);
                
                setTimeout(() => {
                    overlay.style.display = "none";
                    callback(); // Aquí inicia el juego realmente
                }, 800);
            }
        }, 1000);
    }
}
