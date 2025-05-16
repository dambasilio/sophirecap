// Configuración inicial
const fechaInicio = new Date('2024-01-08T00:00:00');
const mesesContenido = {
    1: {
        titulo: "Nuestro Primer Mes 💖",
        contenido: "Enero 2024 - El mes donde todo comenzó... Nuestros primeros mensajes, esa primera cita inolvidable y el inicio de esta hermosa historia de amor."
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

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    crearCorazones();
    actualizarContador();
    generarMeses();
    setInterval(actualizarContador, 1000);
});

// Función para crear corazones flotantes
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

// Actualizar contador de tiempo
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;
    
    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30.436875);
    const diasRestantes = Math.floor(dias % 30.436875);
    
    document.getElementById('contador').innerHTML = `
        🕰️ Tiempo Juntos:<br>
        ${meses} Meses ${diasRestantes} Días<br>
        ${dias} Días Totales
    `;
}

// Navegación entre páginas
function navegarA(destino) {
    document.querySelectorAll('.pagina').forEach(pag => pag.classList.remove('activa'));
    document.getElementById(destino).classList.add('activa');
    
    if (destino === 'meses') {
        cambiarMes(1);
    }
    
    window.scrollTo(0, 0);
}

// Generar meses automáticamente
function generarMeses() {
    const contenedor = document.getElementById('contenedorMeses');
    const totalMeses = calcularMeses();
    
    for(let mes = 1; mes <= totalMeses; mes++) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-mes';
        tarjeta.id = `mes-${mes}`;
        tarjeta.innerHTML = `
            <div class="header-ios">
                <button class="boton-regreso" onclick="navegarA('inicio')">⬅️</button>
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
    if (mesActual) {
        mesActual.style.display = 'block';
    }
}

function calcularMeses() {
    const ahora = new Date();
    return (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 + 
           (ahora.getMonth() - fechaInicio.getMonth()) + 1;
}

// Optimización táctil para iOS
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('touchstart', () => {
        btn.style.transform = 'scale(0.95)';
    });
    
    btn.addEventListener('touchend', () => {
        btn.style.transform = 'scale(1)';
    });
});