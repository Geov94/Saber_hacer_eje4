let cleanedItems = 0;
let plantedSeeds = 0;

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
}

function restartGame() {
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';

    // Reiniciar el juego
    cleanedItems = 0;
    plantedSeeds = 0;
    location.reload();
}

function cleanItem(button) {
    button.style.display = 'none';
    cleanedItems++;
    if (cleanedItems === 4) {
        document.getElementById('result').innerHTML = `
            <p>¡Buen trabajo! Has limpiado el río.</p>
            <img src="https://us.123rf.com/450wm/credevlop/credevlop2402/credevlop240200321/225606295-paisaje-natural-con-ilustraci%C3%B3n-de-vector-de-r%C3%ADo-y-pradera-en-estilo-plano.jpg?ver=6" alt="Río limpio">
        `;
        setTimeout(startLevel2, 2000);
    }
}

function skipLevel1() {
    document.getElementById('result').innerHTML = `
        <p>No limpiaste el río.</p>
        <img src="https://us.123rf.com/450wm/ngilustrasi/ngilustrasi2404/ngilustrasi240400421/229801442-la-ilustraci%C3%B3n-de-un-r%C3%ADo-contaminado-con-basura-deja-peces-envenenados-hasta-la-muerte.jpg?ver=6" alt="Río sucio">
    `;
    setTimeout(startLevel2, 2000);
}

function startLevel2() {
    document.getElementById('level1').style.display = 'none';
    document.getElementById('skip1').style.display = 'none';
    document.getElementById('result').innerHTML = '';
    document.getElementById('level-title').innerText = 'Nivel 2: Sembrar semillas';
    document.getElementById('instruction').innerText = 'Haz clic en las semillas para plantar árboles:';
    const level2 = `
        <div id="level2" class="level">
            <button class="game-button" onclick="plantSeed(this)">
                <img src="https://img.freepik.com/vector-premium/semilla-siembra-mano_24911-67165.jpg" alt="Semilla 1">
            </button>
            <button class="game-button" onclick="plantSeed(this)">
                <img src="https://img.freepik.com/vector-premium/semilla-siembra-mano_24911-67165.jpg" alt="Semilla 2">
            </button>
            <button class="game-button" onclick="plantSeed(this)">
                <img src="https://img.freepik.com/vector-premium/semilla-siembra-mano_24911-67165.jpg" alt="Semilla 3">
            </button>
            <button class="game-button" onclick="plantSeed(this)">
                <img src="https://img.freepik.com/vector-premium/semilla-siembra-mano_24911-67165.jpg" alt="Semilla 4">
            </button>
        </div>
        <button id="skip2" class="button" onclick="skipLevel2()">No quiero sembrar</button>
    `;
    document.getElementById('game-container').innerHTML += level2;
}

function plantSeed(button) {
    button.style.display = 'none'; // Oculta el botón clickeado
    plantedSeeds++;
    if (plantedSeeds >= 4) {
        document.getElementById('result').innerHTML = `
            <p>¡Felicidades! Has sembrado suficientes árboles para reforestar.</p>
            <img src="https://st2.depositphotos.com/1763191/46746/v/450/depositphotos_467468012-stock-illustration-forest-scene-many-trees-day.jpg" alt="Bosque reforestado">
        `;
        setTimeout(showEndScreen, 2000);
    }
}

function skipLevel2() {
    document.getElementById('result').innerHTML = `
        <p>No sembraste suficientes árboles.</p>
        <img src="https://img.freepik.com/vector-gratis/escena-estanque-barro-arboles-secos_1308-36629.jpg" alt="Bosque sin árboles">
    `;
    setTimeout(showEndScreen, 2000);
}

function showEndScreen() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
}