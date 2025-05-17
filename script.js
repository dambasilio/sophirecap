const fechaInicio = new Date('2024-01-08T00:00:00');
const mesesContenido = {
    1: {
        titulo: "Nuestro primer mesesito ",
        contenido: "Enero 2024 - Este fue el mesesito donde todo empezó ya de veritas de veritas, porque desde hace mesesitos antees yo ya pues de verdad estaba muy enamorado de tii, la verdad desde que comenzó Enero yo ya estaba con demasiadas ganas de verte porque estabas en cancuun (justo como ahorita jeje), pero pues te extrañaba de que demasiado demasiadoo, en Diciembre te habia comprado tu anilloo y queria dartelo yaaa, yo ya queria ser tu novio 😭😭😭, fue entre Diciembre y Enero cuando me di cuenta de que realmente te amaba demasiado pero demasiado porque te juro que todos los dias que pasaron de esas vacaciones eras la unica persona en la que estaba pensando y la que mas extrañeee 😭"
    },
    2: {
        titulo: "El segundo mees",
        contenido: "Febrero 2024 - En este mees fui demasiado feliz, pasaron demasiadas demasiadas cosas increibles, para empezar fue el primer mes que cumpliamoos y el primer san valentin que pasaba con alguieen, fue increible todo lo que hicimos, tantas citas, mi favorita fue la del acuarioo (repitamosla porfi amoooor 😭), tambien fue mi cumpleañoos, me di cuenta de que eres un amor de niña cuando me preparaste mi sorpresita con los demaas, no me lo esperaba nadaaa, todos tus regalos me encantaron (hasta los mas chikitoos los tengo aqui guardadoos y siempre estaraaan jeje), tambien me diste mi primera cartita, fue demasiado especial y amo todo lo que paso este meees 💗"
    },
    3: {
        titulo: "Tercer meeeees",
        contenido: "Marzo 2024 - El tercer mesesito, comenzaba a vivir demasiadas cosas contigo y los sentimientos hermosos nunca paraban, demasiadas citas bonitaaas, nuestra cita en el museooo y la primera vez que te daba florecitas amarillaaaas, me acuerdo mucho de una cita en el parque ecologico ese diaaa, estuvimos recostados y los dos nos dormimos abrazaditos 😭😭😭, la verdad yo no pude dormir nada ese diaaa de lo feliz y bonito que sentii, tambien fue la primera vez que fuimos a sugar sugar y probamos nuestro croissant con un chorro de nutellaaa, tambien grabamos varios de nuestros vlogs (tambien hagamos maaaas 😭), y fue un mes feliiiiz feliiiiiiz"
    },
    4: {
        titulo: "Cuarto meeeees",
        contenido: "Abril 2024 - Fuii a un video de la One coin por tiii 😞, nunca quise salir esa es la verdaad, nisiquiera era tan fan pero solo quise ir para conseguirte los saludos de todooos, por eso fue que pregunte para iir pero nunca crei que si podria 😭, fue un mes bonitoo, fue nuestro picniiiiic, tantas fotos y videos hermosos de los doos, ese dia fue hermoso 😭, tu vestido negro con azulito me encanta y te veias hermosa ese dia, sueño con que se repita una cita asi otra veeez, seguimos grabando nuestros vlogs que amo ver siempre que me acuerdo de tiii, los tengo todos guardados en mi corazoncito (y en mi compu y telefono tambien 😞) en ese mes nos tomamos demasiadas fotos y videos y por eso es que lo adoro tantoooo 😭💞💞"
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