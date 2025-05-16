const fechaInicio = new Date('2024-01-08T00:00:00');
const mesesContenido = {
    1: {
        titulo: "Nuestro primer mesesito ",
        contenido: "Enero 2024 - Este fue el mesesito donde todo empezó ya de veritas de veritas, porque desde hace mesesitos antees yo ya pues de verdad estaba muy enamorado de tii, la verdad desde que comenzó Enero yo ya estaba con demasiadas ganas de verte porque estabas en cancuun (justo como ahorita jeje), pero pues te extrañaba de que demasiado demasiadoo, en Diciembre te habia comprado tu anilloo y queria dartelo yaaa, yo ya queria ser tu novio 😭😭😭, fue entre Diciembre y Enero cuando me di cuenta de que realmente te amaba demasiado pero demasiado porque te juro que todos los dias que pasaron de esas vacaciones eras la unica persona en la que estaba pensando y la que mas extrañeee 😭"
    },
    2: {
        titulo: "Segundo Mes 🌸",
        contenido: "Febrero 2024 - Celebramos nuestro primer San Valentín juntos, descubrimos nuevas cosas el uno del otro y nuestro amor siguió creciendo."
    },
    3: {
        titulo: "Tercer Mes 🌟",
        contenido: "Marzo 2024 - Empezamos a crear nuestras propias tradiciones y cada día nos sentimos más unidos."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    crearCorazones();
    actualizarContador();
    generarMeses();
    setInterval(actualizarContador, 1000);
});

function crearCorazones() {
    const contenedor = document.querySelector('.corazones-flotantes');
    const corazones = ['💖', '💕', '💞', '💓', '💗'];
    
    for(let i = 0; i < 15; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon';
        corazon.style.left = Math.random() * 100 + '%';
        corazon.style.animationDelay = Math.random() * 5 + 's';
        corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
        contenedor.appendChild(corazon);
    }
}

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;
    
    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30.436875);
    const diasRestantes = Math.floor(dias % 30.436875);
    
    document.getElementById('texto-contador').innerHTML = `
        🕰️ Tiempo Juntos:<br>
        ${meses} Meses ${diasRestantes} Días<br>
        ${dias} Días Totales<br><br>
        💖 ${horas} Horas de Amor 💖
    `;
}

function navegarA(destino) {
    document.querySelectorAll('.pagina').forEach(pag => pag.classList.remove('activa'));
    document.getElementById(destino).classList.add('activa');
    if (destino === 'meses') cambiarMes(1);
    window.scrollTo(0, 0);
}

function generarMeses() {
    const contenedor = document.getElementById('contenedorMeses');
    const totalMeses = calcularMeses();
    
    for(let mes = 1; mes <= totalMeses; mes++) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-mes';
        tarjeta.id = `mes-${mes}`;
        tarjeta.innerHTML = `
            <div class="header-ios">
                <button class="boton-regreso" onclick="navegarA('contador')">⬅️</button>
                <h2>${mesesContenido[mes]?.titulo || `Mes ${mes}`}</h2>
            </div>
            <div class="contenido-mes">
                <p>${mesesContenido[mes]?.contenido || 'Contenido en desarrollo...'}</p>
            </div>
            <div class="controles-mes">
                <button class="boton-control" ${mes === 1 ? 'disabled' : ''} onclick="cambiarMes(${mes-1})">⬅️ Anterior</button>
                <button class="boton-control" ${mes === totalMeses ? 'disabled' : ''} onclick="cambiarMes(${mes+1})">Siguiente ➡️</button>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    }
}

function cambiarMes(numeroMes) {
    document.querySelectorAll('.tarjeta-mes').forEach(mes => mes.style.display = 'none');
    const mesActual = document.getElementById(`mes-${numeroMes}`);
    if (mesActual) mesActual.style.display = 'block';
}

function calcularMeses() {
    const ahora = new Date();
    return (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 + 
           (ahora.getMonth() - fechaInicio.getMonth()) + 1;
}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('touchstart', () => btn.style.transform = 'scale(0.95)');
    btn.addEventListener('touchend', () => btn.style.transform = 'scale(1)');
});