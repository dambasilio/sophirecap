const fechaInicio = new Date('2024-01-08T00:00:00');
const mesesContenido = {
    1: {
        titulo: "El comienzo de nuestro amorcitooo ",
        contenido: "Enero 2024 - Este fue el mesesito donde todo empezó ya de veritas de veritas, porque desde hace mesesitos antees yo ya pues de verdad estaba muy enamorado de tii, la verdad desde que comenzó Enero yo ya estaba con demasiadas ganas de verte porque estabas en cancuun (justo como ahorita jeje), pero pues te extrañaba de que demasiado demasiadoo, en Diciembre te habia comprado tu anilloo y queria dartelo yaaa, yo ya queria ser tu novio 😭😭😭, fue entre Diciembre y Enero cuando me di cuenta de que realmente te amaba demasiado pero demasiado porque te juro que todos los dias que pasaron de esas vacaciones eras la unica persona en la que estaba pensando y la que mas extrañeee 😭"
    },
    2: {
        titulo: "El primer meees",
        contenido: "Febrero 2024 - En este mees fui demasiado feliz, pasaron demasiadas demasiadas cosas increibles, para empezar fue el primer mes que cumpliamoos y el primer san valentin que pasaba con alguieen, fue increible todo lo que hicimos, tantas citas, mi favorita fue la del acuarioo (repitamosla porfi amoooor 😭), tambien fue mi cumpleañoos, me di cuenta de que eres un amor de niña cuando me preparaste mi sorpresita con los demaas, no me lo esperaba nadaaa, todos tus regalos me encantaron (hasta los mas chikitoos los tengo aqui guardadoos y siempre estaraaan jeje), tambien me diste mi primera cartita, fue demasiado especial y amo todo lo que paso este meees 💗"
    },
    3: {
        titulo: "Segundo meeeees",
        contenido: "Marzo 2024 - El tercer mesesito, comenzaba a vivir demasiadas cosas contigo y los sentimientos hermosos nunca paraban, demasiadas citas bonitaaas, nuestra cita en el museooo y la primera vez que te daba florecitas amarillaaaas, me acuerdo mucho de una cita en el parque ecologico ese diaaa, estuvimos recostados y los dos nos dormimos abrazaditos 😭😭😭, la verdad yo no pude dormir nada ese diaaa de lo feliz y bonito que sentii, tambien fue la primera vez que fuimos a sugar sugar y probamos nuestro croissant con un chorro de nutellaaa, tambien grabamos varios de nuestros vlogs (tambien hagamos maaaas 😭), y fue un mes feliiiiz feliiiiiiz"
    },
    4: {
        titulo: "Tercer mesesiin",
        contenido: "Abril 2024 - Fuii a un video de la One coin por tiii 😞, nunca quise salir esa es la verdaad, nisiquiera era tan fan pero solo quise ir para conseguirte los saludos de todooos, por eso fue que pregunte para iir pero nunca crei que si podria 😭, fue un mes bonitoo, fue nuestro picniiiiic, tantas fotos y videos hermosos de los doos, ese dia fue hermoso 😭, tu vestido negro con azulito me encanta y te veias hermosa ese dia, sueño con que se repita una cita asi otra veeez, seguimos grabando nuestros vlogs que amo ver siempre que me acuerdo de tiii, los tengo todos guardados en mi corazoncito (y en mi compu y telefono tambien 😞) en ese mes nos tomamos demasiadas fotos y videos y por eso es que lo adoro tantoooo 😭💞💞"
    },
    5: {
        titulo: "Nuestro cuarto meees",
        contenido: "Mayo 2024 - Mucho baskeeeet este mees, empezamos a tener citas de basket y me encantaron demasiado cada una de ellaaas, comiamos y nos ibamos a jugaaar y ame eso demasiadoo, fuimos a ver la orquesta de ghibliii 😭😭, desde que me dijiste que te gustaba queria iiir a eso y se cumpliooo, en este mesesito hubo un dia en el que nos agarro la lluviaaa y nos quedamos atrapados abajo del puenteee 😞😞😞, pero se sintio no see demasiado amoor de estar en una situacion asi los dooos 😭, no se como explicarlo pero ese fue uno de mis dias favoritos (aunque nos hayamos casi enfermado 😞), ay mi amor te amo demasiado con todo mi corazon te juro que mientras escribo esto te extraño demasiado y nisiquiera te has ido cuando estoy haciendo esto 😭"
    },
    6: {
        titulo: "Cincoooo",
        contenido: "Junio 2024 - En este meeees pintamooos mucho (para mi fue mucho porque nunca habia pintado tanto 😞), te acompañeee a clases de pinturaaa y despues tuvimos una citaaa en la que pintamoos, te di mi cuadritooo (tu ya no me lo disteee 😭 pero estoy muy seguro de que te salio muy bonito), me encanto esa cita porqueee siempre quise hacerte una pinturita y me encanto hacerla contigo ese mismo diaaa, aunque nos hayan pikado muchos mosquitos pero me encantoo, tmabien nadamooos ese meesesito y ese fue un dia bonito kontigoo, te abrace muchisimo toda esa tardeee y prometo que si algun dia volvemos a hacer carreras en el aguaa esta vez no me daran calambres y tu y yo si ganaremooos 😞😞😞"
    },
    7: {
        titulo: "El sexto mesesito con mi amorcito",
        contenido: "Julio 2024 - Jamas me olvidare del vlog que grabamos en parque pueblota comiendo subwaaay, la verdad fue muy especial para mi y no se por queee si solo estabamos comiendo subway 😭, aunque creo que lo especial fue porque era contigooo, en Julioo fuimos a africaaam por primera vez tu y yo juntitooos, acariciamos jirafas, te tome mas fotos a ti que a los animalees y grabamos muchas cosas juntooos, fue un mes muy lindoo, hace muchisimo tiempo no habia ido a africam y la verdad fue algo muy feliz haber ido con una persona tan especial como tuuu, pero fue un mes pokito dificil para mi porque te fuiste a cancuun y te empezaba a extrañar demasiado con todo mi corazon 😭"
    },
    8: {
        titulo: "Nuestro 7777777",
        contenido: "Agosto 2024 - Agosto fue una montaña rusa de emociones para mi 😭 Durante todo el principio de este mes te estuve extrañando como no tienes ideaaa, fue la primera y unicaa (por ahora jeje) que mandaba flores a cientos de kilometrooos de distanciaa, te pensaba y te pensabaa y cada minuto que pasaba yo solo queria que ya regresaraas, cuando por fin lo hiciste me encanto recibirte con todas esas sorpresaas, jamas habia recibido a alguien asiii y fue una cosa que me encantoo, planear todooo, preguntarle a tu mamii, ir hasta el aeropuertooo de sorpresa sin decirte nadaa (aunque ya te lo esperabas 😞), pero de tanto tiempo que habia pasado yo no queria esperar mas tiempo, tenia que verte ahi mismo en el aeropuerto 😭😭"
    },
    9: {
        titulo: "Ochoo pinocho niña",
        contenido: "Septiembre 2024 - Fue un mes bonitooo por muchas cosaaas contigo, me acuerdo muchisimo del dia en el que hicimos galletitas en mi casitaaa, la verdad estuve muy feliiz ese diaa, tambien fue la ultima vez que yo estaba con el cabello largo que teniaaa y me lo cortee, me daba miedo verme muy feoo asi pero me senti demasiado amado por ti mi niña hermosaa, ese mes fue el concierto de travi y dannyluts, me regalaste mi playera y me hiciste mi maletin de utopia a manooo 😭😭😭, me encanto demasiado de verdad (esta justo aki al lado de mi en mi closet jeje) y fue un regalo super bonito porqu eestaba super emocionado 😭, me lleve una parte de ti a un concierto especial y una partesita de ti me acompañoo durante todotodo el viaje gracias a esa playeraa 💞"
    },
    10: {
        titulo: "9 mesesesess",
        contenido: "Octubre 2024 - Tuvimos varias citas en el centrooo con chunisita y se siente muy bonitooo porque es que los dos juntitos estamos cuidando a chuniiii y se siente lindoo hacer eso juntooos, me gustaa, fuimos al concierto de neskuiii, no sabes cuanto me arrepiento de no haber escuchado todas las canciones bonitas antes de ir porque si lo hubiera hecho te hubiera dedicado todas y cada una de ellas ese dia que estuvimos los dos ahii 😭, al final de concierto en el coche que te dormiste abrazandome fue el momento que mas paz sentii porque solo estabamos tu y yo, cuando te duermes asiii de verdad siento hermoso porque no seee 😭😭"
    },
    11: {
        titulo: "10 mesesoneeeees",
        contenido: "Noviembre 2024 - Este mes fue de verdad el mas increibleee, creo que va a ser el mas largoo pero tengo tantas cosas que decirte de este mees, para empezar nos disfrazamos juntos por primera veeez en jalowiin 😭😭, toda mi vida he odiado disfrazarme te lo jurooo puedes preguntarle a cualquier persona de mi familiaaa, pero ese año quise hcaerlo junto a tiii y me encantooo compartir eso contigooo, grabamos titoooks y ame todos esos dias de jalowiiin, despueees fuimos a ver el lago de los cisnees juntoos, desde que comenzaste con el ballet, desde que me dijiste que te gustabaa los compre para ir contigoo, a mi me encantoo 😭, fuiste con un oufi hermoso, y la verdad pensaba mucho en que algun dia te voy a ver a ti en el escenario asiii (ya kasiii 😭), despueees fuimos a ver el castillo vagabundoo con la orquestaaa, tambien me encanto demasiadooo ver esa pelicula contigoo, saber que es una de tus favs y verla junto contigo fue muy lindolindooo"
    },
    12: {
        titulo: "EL CUMPLEAÑOS DEL AMOR DE MI VIDAAA",
        contenido: "30 de Noviembre 2024 - Este diaa merece estar solito porque fue increible para miiii 😭, todo Noviembree estuve preparando las cosas para que tu cumpleaños sea especiaaal, espero que haya sido de verdad un dia especial para tiii 😭😭😭, envolviendo regalooos, preparando sorpresaaas, nunca habia hecho algo asi por el cumpleaños de nadiee, nos fuimos a Ciudad de Mexico juntoos 😭, fue nuestro primer viaje asii juntooos, fue la primera vez que tuve una pijamadaaa contigoo (desde otro kuarto pero siiiiii), no sabes lo feliz que yo fui todos esos dias y nisikiera fue mi cumpleaños jejejje, te tome demasiadas fotooos, pasamos tantos demasiados momentos juntos tu y yo y de verdad no sabes cuanto me encanto Noviembre, creo que ha sido uno de mis meses favoritos 😭"
    },
    13: {
        titulo: "11:11",
        contenido: "Diciembre 2024 - Mes de navidaaad, citas navideñaaaas, pero antes de las citas navideñas fue en este mes en el que fuimos a los museos en Ciudad de Mexicooo, fue muy divertido y bonito ir contigo por la ciudad y visitar todos esos lugares juntooos, tuvimos nuestras citas bonitas navideñaaas, mi cita favorita de ese mes fue en la que fuimos a patinaaar, nunca habia patinado sobre hielo en mi vida anteees (solo intentado pero no funciono 😞), asi que estaba aprendiendo contigooo ese dia, fue un sueño hecho realidad patinar contigo agarrados de la manoo, ayyyy amor de verdad eres una hermosa y una preciosa, nos sabes cuanto te adoroo, quisiera estar contigo en este momento 😞😞😞"
    },
    14: {
        titulo: "OMGOGMOGMOGMG 1 AÑOOOOOO",
        contenido: "Enero 2025 - Wow, un año juntoos, jamas me hubiera imaginado que me iba a llegar a enamorar de alguien por tanto tiempoo, nuestra cenita de aniversario fue algo muy lindo para miii, dejamos nuestro candaditooo y estuve muy muy feliiiiz esa nochee, tambieeen en año nuevo me enviaste un mensajito largo que me puso muy feliiiz y era la segunda vez en la que tu fuiste uno de mis deseos de año nuevooo, tambien fuimos a las luchas ese meeees jejeje y muchas citas con chuniii, pero de verdad cumplir un año juntos fue algo increible y demasiado feliz para miii, lo ame demasiadooo todo, de verdad que muchas gachas por todo amooor 😭😭😭, soy el niño mas feliz del mundo recordando y escribiendote todo esto"
    },
    15: {
        titulo: "1 año y 1 mesesitoo",
        contenido: "Febrero 2025 - Otra veez en Febreroo, este mes fue bonitoo, nuestro segundo san valentiiin juntooos, me encanto nuestra cita de san valentiin en tu casitaaa, hicimos demasiadas cosaaas, abrimos regalitooos, hicimos suchito y yo sentia demasiado amor por tiii, fue el segundo san valentin en el que me senti completamente enamorado de tiii, de verdad que es incrieble para miii, despuees tambien en mi cumpleañooos que me hiciste cositas y me invitaste a comeeer, me llevaste a mis hamburguesas favoritaaas y pase mi cumpleaños con la persona mas especial que existe para mi en este y todos los mundos que puedan existiiiiir 💞💞💞💞💞, no sabes cuanto te adoro amorcito de mi vida"
    },
    16: {
        titulo: "1 año 2 mecheeees",
        contenido: "Marzo 2025 - Fue un mes muy muy dificl para miii porque perdi a Ritito pero gracias a tii pude llevarlo mejoor, tuvimos nuestra citaaa en el restaurante de harry potteeer, nos tomamos muchisimas fotos (y a chunisita tambien jejje), fue un mes en el que no salimos muchooo muchooo y te extrañe muchooo muchos dias de ese mesesitoo, ahoritaa de verdad quiero agradecerte por todo lo que has hecho por mii, de verdad no se que haria sin tii, estar recordando todas estas cosas es algo muy incrieble para mii, eres lo mejor que me ha pasado en la vida y te amo con toda mi alma y te adoro con todo mi corazon enteroo 💗💗💗"
    },
    17: {
        titulo: "1 año 3 mesesoteeeees",
        contenido: "Abril 2025 - Mi niña la verdad te estoy escribiendo esto en este mesesitoo, hasta ahorita va mas o menitos la mitad de el meees pero ya hemos hecho varias cosas que me estan haciendo sentir muy bonitooo, hace unos dias fuimos con los demaaaas y fue un dia muy divertidooo, luego hasta el final que estuve en tu casita rescatamos a los gatitos que estaban atrapadooos, te vi muy preocupada y no podia irme sin hacer nadaa, ayer estuve en tu casitaaa y hoy te vas a Queretaroo, estoy aprovechando todo este tiempo que no estas akiii para escribir todas estas cosas y recordar todo lo que hemos pasado juntitooos, me siento demasiado feliiz y ya quiero que regreseees, espero hacer muchas mas cositas este mees y ser felices los doooos 💗"
    },
    18: {
        titulo: "1 año 4 meseeeeeees",
        contenido: "Mayo 2025 - Hooy es 16 de Mayo, deje justamente este ultimo mes para escribirlo hoy que ya te fuistee, amorcito mio, se que tal vez no son tantos dias, pero te juro que no ha pasado mas de un dia y ya te estoy extrañando demasiadoo, este mes fuimos a la feriaaa y ayer de verdad estuve demasiado feliz contigo en tu casita, te dormiste conmigo y eso te digoo que me hace sentir muy lindo, la verdad no se cuando te enviaree esto, pienso hacerlo mañana o pasado mañanaaa, ya quiero que regreses mi amoor, necesito verte todos los diaas de mi vidaa, no se que seria sin ti amorcito de mi vida, te adoro con todo mi corazoooncito que es tuyo tuyooo 💞💞💞💗💗"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    generarMeses();
    setInterval(actualizarContador, 1000);
});

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
        Mi amorchiis, primero que todoo pues como ya habia dicho antes la verdad no se en que dia estarás viendo estoo 😞. Este es el tiempo que llevamos juntitos hasta ahoritaaa:<br><br>
        ${meses} Meses y ${diasRestantes} Días enamorado de ti.<br><br>
        ${dias} Días con el amor de mi vida.<br><br>
        ${horas} Horas de amor infinito por ti.<br><br> Aki abajo verás todo lo que pasamos en nuestros mesesitos y muchas mas cositas que quise decirte, te amo bonita 💗.
    `;
}

function navegarA(destino) {
    // Ocultar todas las páginas
    document.querySelectorAll('.pagina').forEach(pag => {
        pag.classList.remove('activa');
    });
    
    // Mostrar la página solicitada
    const paginaDestino = document.getElementById(destino);
    if (paginaDestino) {
        paginaDestino.classList.add('activa');
        
        // Mostrar primer mes si navegamos a la sección de meses
        if (destino === 'meses') {
            cambiarMes(1);
        }
    }
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

function generarMeses() {
    const contenedor = document.getElementById('contenedorMeses');
    const totalMeses = calcularMeses();

    for(let mes = 1; mes <= totalMeses; mes++) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-mes';
        tarjeta.id = `mes-${mes}`;
        tarjeta.style.display = 'none'; // Ocultar por defecto

        // Contenido base del mes
        tarjeta.innerHTML = `
            <div class="header-mes">
                <button class="boton-regreso" onclick="navegarA('contador')">⬅️</button>
                <h2>${mesesContenido[mes]?.titulo || `Mes ${mes}`}</h2>
            </div>
            <div class="contenido-mes">
                <p>${mesesContenido[mes]?.contenido || 'Contenido en desarrollo...'}</p>
            </div>
            <div class="controles-mes">
                <button class="boton-control" ${mes === 1 ? 'disabled' : ''} 
                    onclick="cambiarMes(${mes-1})">⬅️ Anterior</button>
                <button class="boton-control" ${mes === totalMeses ? 'disabled' : ''} 
                    onclick="cambiarMes(${mes+1})">Siguiente ➡️</button>
            </div>
        `;

        // Botones especiales solo en el último mes
        if(mes === totalMeses) {
            tarjeta.innerHTML += `
                <div class="botones-finales">
                    <button class="boton-ios" onclick="navegarA('final')">
                        Click aqui mi niña
                    </button>
                </div>
            `;
        }

        contenedor.appendChild(tarjeta);
    }
}

function calcularMeses() {
    // Cambiar el cálculo automático por el total de meses definidos
    return Object.keys(mesesContenido).length;
}

function cambiarMes(numeroMes) {
    // Ocultar todos los meses
    document.querySelectorAll('.tarjeta-mes').forEach(mes => {
        mes.style.display = 'none';
        mes.style.opacity = '0';
    });
    
    // Mostrar mes actual con animación
    const mesActual = document.getElementById(`mes-${numeroMes}`);
    if (mesActual) {
        mesActual.style.display = 'block';
        // Forzar reinicio de animación
        void mesActual.offsetWidth; // Truco para reiniciar animación
        mesActual.style.opacity = '1';
        mesActual.style.transform = 'translateY(0)';
        
        // Actualizar estado de botones
        const totalMeses = calcularMeses();
        const botones = mesActual.querySelectorAll('.boton-control');
        botones[0].disabled = (numeroMes === 1);
        botones[1].disabled = (numeroMes === totalMeses);
    }
}


document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('touchstart', () => btn.style.transform = 'scale(0.95)');
    btn.addEventListener('touchend', () => btn.style.transform = 'scale(1)');
});