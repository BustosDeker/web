document.addEventListener('DOMContentLoaded', () => {
    // Pokémon tipo Fuego
    const firePokemon = [
        { name: 'Charmander', imgSrc: 'img/f1.png' },
        { name: 'Cyndaquil', imgSrc: 'img/f2.png' },
        { name: 'Torchic', imgSrc: 'img/ff3.png' },
        { name: 'Chimchar', imgSrc: 'img/ff4.png' },
        { name: 'Tepig', imgSrc: 'img/f5.png' },
        { name: 'Fennekin', imgSrc: 'img/f6.png' },
        { name: 'Litten', imgSrc: 'img/f7.png' },
        { name: 'Scorbunny', imgSrc: 'img/f8.png' }
    ];

    // Pokémon tipo Agua
    const waterPokemon = [
        { name: 'Squirtle', imgSrc: 'img/a1.png' },
        { name: 'Totodile', imgSrc: 'img/aa2.png' },
        { name: 'Mudkip', imgSrc: 'img/a3.png' },
        { name: 'Piplup', imgSrc: 'img/a4.png' },
        { name: 'Oshawott', imgSrc: 'img/a5.png' },
        { name: 'Froakie', imgSrc: 'img/a6.png' },
        { name: 'Sobble', imgSrc: 'img/a7.png' },
        { name: 'Popplio', imgSrc: 'img/a8.png' }
    ];

    // Pokémon tipo Hierba
    const grassPokemon = [
        { name: 'Bulbasaur', imgSrc: 'img/h1.png' },
        { name: 'Chikorita', imgSrc: 'img/h2.png' },
        { name: 'Treecko', imgSrc: 'img/h3.png' },
        { name: 'Turtwig', imgSrc: 'img/h4.png' },
        { name: 'Snivy', imgSrc: 'img/h5.png' },
        { name: 'Chespin', imgSrc: 'img/h6.png' },
        { name: 'Rowlet', imgSrc: 'img/h7.png' },
        { name: 'Sprigatito', imgSrc: 'img/h8.png' }
    ];

    let fireIndex = 0, waterIndex = 0, grassIndex = 0;
    const pokemonPerLoad = 4;

    // Función para cargar Pokémon por tipo
    function loadMorePokemon(type, containerId, list, indexVar, buttonId) {
        const pokemonContainer = document.getElementById(containerId);
        const nextIndex = indexVar + pokemonPerLoad;

        // Define el color de fondo según el tipo de Pokémon
        let cardColor = '';
        switch (type) {
            case 'fire':
                cardColor = 'bg-red-900'; // Rojo para tipo Fuego
                break;
            case 'water':
                cardColor = 'bg-blue-900'; // Azul para tipo Agua
                break;
            case 'grass':
                cardColor = 'bg-green-900'; // Verde para tipo Hierba
                break;
        }

        // Cargar más Pokémon
        if (indexVar < list.length) {
            list.slice(indexVar, nextIndex).forEach(pokemon => {
                const pokemonCard = document.createElement('div');
                pokemonCard.classList.add('pokemon-card', cardColor, 'rounded-lg', 'p-4', 'shadow-lg', 'text-center', 'text-white', 'm-10', 'border-2');
                pokemonCard.innerHTML = `
                    <img src="${pokemon.imgSrc}" alt="${pokemon.name}" class="w-full h-70 object-cover rounded-lg mb-4">
                    <h3 class="text-lg font-bold">${pokemon.name}</h3>
                `;
                pokemonContainer.appendChild(pokemonCard);
            });

            // Actualiza el índice
            indexVar = nextIndex;

            // Cambia el texto del botón si no hay más Pokémon
            if (indexVar >= list.length) {
                document.getElementById(buttonId).innerText = 'Ver menos';
            }
        } else {
            // Opción para ocultar Pokémon
            for (let i = Math.max(0, indexVar - pokemonPerLoad); i < indexVar; i++) {
                if (pokemonContainer.children.length > 0) {
                    pokemonContainer.removeChild(pokemonContainer.children[pokemonContainer.children.length - 1]);
                }
            }
            indexVar = indexVar - pokemonPerLoad > 0 ? indexVar - pokemonPerLoad : 0;

            // Cambia el texto del botón
            document.getElementById(buttonId).innerText = 'Cargar más Pokémon';
        }

        return indexVar; // Devuelve el nuevo índice
    }

    // Cargar los primeros Pokémon al iniciar
    fireIndex = loadMorePokemon('fire', 'pokemonContainerFire', firePokemon, fireIndex, 'loadMoreFire');
    waterIndex = loadMorePokemon('water', 'pokemonContainerWater', waterPokemon, waterIndex, 'loadMoreWater');
    grassIndex = loadMorePokemon('grass', 'pokemonContainerGrass', grassPokemon, grassIndex, 'loadMoreGrass');

    // Eventos para los botones de "Cargar más Pokémon"
    document.getElementById('loadMoreFire').addEventListener('click', () => {
        fireIndex = loadMorePokemon('fire', 'pokemonContainerFire', firePokemon, fireIndex, 'loadMoreFire');
    });

    document.getElementById('loadMoreWater').addEventListener('click', () => {
        waterIndex = loadMorePokemon('water', 'pokemonContainerWater', waterPokemon, waterIndex, 'loadMoreWater');
    });

    document.getElementById('loadMoreGrass').addEventListener('click', () => {
        grassIndex = loadMorePokemon('grass', 'pokemonContainerGrass', grassPokemon, grassIndex, 'loadMoreGrass');
    });
});

// Verificar si el modo oscuro está guardado en localStorage
const themeToggleBtn = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme');
const htmlElement = document.documentElement;

// Aplicar el modo oscuro si está almacenado en localStorage
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
}

// Alternar entre el modo claro y oscuro al hacer clic en el botón
themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');

    // Guardar la preferencia del modo en localStorage
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});



