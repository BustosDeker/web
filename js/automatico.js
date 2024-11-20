let currentCharacter = 1;
const totalCharacters = 10;

// Mostrar el siguiente personaje
function showNextCharacter() {
    const currentImg = document.getElementById(`character${currentCharacter}`);
    currentImg.classList.remove('active');

    currentCharacter = currentCharacter < totalCharacters ? currentCharacter + 1 : 1;

    const nextImg = document.getElementById(`character${currentCharacter}`);
    nextImg.classList.add('active');
}

// Mostrar el personaje anterior
function showPrevCharacter() {
    const currentImg = document.getElementById(`character${currentCharacter}`);
    currentImg.classList.remove('active');

    currentCharacter = currentCharacter > 1 ? currentCharacter - 1 : totalCharacters;

    const prevImg = document.getElementById(`character${currentCharacter}`);
    prevImg.classList.add('active');
}

// Comienza con el primer personaje visible
document.getElementById('character1').classList.add('active');

// Cambio automático de personaje cada 3 segundos
setInterval(showNextCharacter, 3000);


// Funcionalidad del menú móvil
document.getElementById('mobile-menu').addEventListener('click', function(e) {
    e.preventDefault();
    const mobileLinks = document.querySelector('.mobile-links');
    mobileLinks.classList.toggle('hidden');
});

// Cerramos el menú cuando se hace clic en cualquier enlace
const menuLinks = document.querySelectorAll('.mobile-links a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const mobileLinks = document.querySelector('.mobile-links');
        mobileLinks.classList.add('hidden');
    });
});

