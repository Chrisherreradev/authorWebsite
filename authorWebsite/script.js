// script.js
// Elementos DOM
const leftPage = document.getElementById('left-page');
const rightPage = document.getElementById('right-page');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const turningPageElement = document.getElementById('turning-page-element');
// Botón volver al inicio
const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
    if(currentSpreadIndex !== 0){
        animatePage('backward', ()=> {
            currentSpreadIndex = 0;
            renderSpread(currentSpreadIndex);
        });
    }
});


let currentSpreadIndex = 0;

// ======= SPREADS =======
const spreads = [
    // Spread 0: Presentación y Biografía
    {
        leftContent: `
            <div class="author-intro">
                <div class="author-photo-ring">
                    <img src="img/chrisProfile.jpg"
                         onerror="this.src='https://placehold.co/150x150/6b7280/ffffff?text=FOTO';"
                         alt="Fotografía del Autor"
                         class="author-photo">
                </div>
                <h2 class="author-name">Chris H.</h2>
                <p class="author-subtitle">Novelista y Creador de Mundos</p>
                <p class="page-text author-bio">
                    Bienvenido a mi espacio digital. Pasa la página para adentrarte en mi historia y creaciones literarias.
                </p>
            </div>
        `,
        rightContent: `
            <h3 class="page-title">Mi Historia</h3>
            <p class="page-text mb-4">
                Nacido en la tranquila y colonial Ciudad de Durango, México, mi pasión por la narrativa comenzó desde pequeño al escuchar tantas historias fascinantes.
                Ahora, me dedico a construir puentes entre la imaginación y la realidad a través de la palabra escrita.
                Mi estilo se centra en el realismo mágico y la ficción histórica.
            </p>
            <h3 class="page-title" style="margin-top:1.5rem;">Filosofía</h3>
            <p class="page-text">
                Creo que un libro debe ser un portal, un espejo y una conversación.
                Muchas cosas están limitadas al presente, pero las palabras exceden el tiempo.
                Mis obras buscan desafiar la percepción del lector sobre lo cotidiano y lo extraordinario.
            </p>
        `
    },

    // Spread 1: Obras Escritas (Libros) - I
    {
        leftContent: `
            <h3 class="page-title">Obras Destacadas (I)</h3>
            <div style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1rem;">
                <img src="img/portada LHO.jpeg" onerror="this.src='https://placehold.co/80x120/a855f7/ffffff?text=ECO';" alt="Cubierta" style="height:128px; width:80px; object-fit:cover; border-radius:6px; box-shadow:0 6px 18px rgba(0,0,0,0.08);">
                <div style="padding-left:0.75rem; border-left:4px solid #9ca3af;">
                    <h4 style="font-size:1.05rem; margin:0 0 0.25rem;">La Leyenda del Héroe Olvidado</h4>
                    <p style="font-size:0.92rem; color:#6b7280; margin:0 0 0.5rem;">Novela de ficción histórica, 2025</p>
                    <p class="page-text" style="margin:0 0 0.5rem; font-size:0.95rem;">
                        Un códice ancestral fusiona ciencia y magia en el Japón feudal. El destino de la humanidad pende de un hilo.
                    </p>
                    <a href="https://amzn.to/4hI5eNs" target="_blank" class="book-link">Comprar en Amazon →</a>
                    <p class="obra-link">
                    🎬 Booktrailer:  
                <a href="https://youtu.be/NT8dps2Dyuk?si=1nxC_sE9_3TP4YXA" target="_blank">
                    Ver en Youtube
                </a>
        </p>
                </div>                
            </div>
        `,
        rightContent: `
            <h3 class="page-title">Obras Destacadas (II)</h3>
            <div style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1rem;">
                <img src="https://placehold.co/80x120/10b981/ffffff?text=<>" onerror="this.src='https://placehold.co/80x120/10b981/ffffff?text=JARDIN';" alt="Cubierta" style="height:128px; width:80px; object-fit:cover; border-radius:6px;">
                <div style="padding-left:0.75rem; border-left:4px solid #9ca3af;">
                    <h4 style="font-size:1.1rem; margin:0 0 0.25rem;">(Próximamente)</h4>
                    <p style="font-size:0.95rem; color:#6b7280; margin:0 0 0.5rem;">Ficción urbana, 2026</p>
                    <p class="page-text" style="margin:0 0 0.25rem; font-size:0.95rem;">
                        Un historia de ficción, llena de acción y aventura en el mundo moderno.
                    </p>
                    <a href="#" target="_blank" class="book-link">Comprar en Amazon →</a>
                </div>
            </div>
        `
    },

    // Spread 2: Contacto
    {
        leftContent: `
            <h3 class="page-title">Hablemos</h3>
    <p class="page-text mb-6">
        Estoy disponible para charlas, entrevistas, lecturas públicas y colaboraciones. 
        ¡No dudes en contactarme!
    </p>

    <ul style="margin-left:0.5rem; line-height:1.6;">
        <li><strong>Correo Electrónico:</strong> 
            <a href="mailto:christianherrera@live.com.mx" class="book-link">
                christianherrera@live.com.mx
            </a>
        </li>

        <li style="margin-top:0.5rem;"><strong>Redes Sociales:</strong></li>

        <li style="padding-left:1rem;">
            Instagram:
            <a href="https://www.instagram.com/chris_h.autor"
               class="book-link"
               target="_blank"
               rel="noopener">
               @chris_h.autor
            </a>
        </li>

        <li style="padding-left:1rem;">
            TikTok:
            <a href="https://www.tiktok.com/@chris.h.autor"
               class="book-link"
               target="_blank"
               rel="noopener">
               @chris.h.autor
            </a>
        </li>

        <!--<li style="margin-top:0.5rem;">
            <strong></strong>
        </li>-->
    </ul>
        `,
        rightContent: `
            <h3 class="page-title">Colaboraciones</h3>

    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">

        <img 
            src="img/bitacoras.jpg"
            alt="Portada de Bitácoras de Viajeros Errantes"
            style="
                height:150px;
                width:auto;
                object-fit:cover;
                border-radius:6px;
                margin-bottom:78px;
                box-shadow:0 6px 18px rgba(0,0,0,0.12);
            "
            onerror="this.src='https://placehold.co/120x160/64748b/ffffff?text=Portada';"
        >

        <div>
            <p class="page-text mb-2" style="font-size:0.95rem;">
                He participado como colaborador en la antología de ciencia ficción 
                <strong>"Bitácoras de Viajeros Errantes"</strong>, publicada en 2024 por editorial Rubin.
            </p>

            <p class="page-text mb-2" style="font-size:0.95rem;">
                Contribuí con dos relatos originales:
            </p>

            <ul style="margin-left:0.5rem; line-height:1.7; font-size:0.95rem;">
                <li><strong>• "Visión Futura"</strong></li>
                <li><strong>• "Enigma del Edén"</strong></li>
            </ul>

            <p class="page-text" style="margin-top:1rem; font-size:0.95rem;">
                Puedes encontrar la antología aquí:<br>
                <a href="https://www.amazon.com.mx/Bit%C3%A1coras-viajeros-errantes-Rubin/dp/6310023543" 
                   target="_blank" 
                   class="book-link">
                   Ver en Amazon →
                </a>
            </p>
        </div>
    </div>
        `
    },

    // Spread 3: Agradecimientos y Derechos de Autor
    {
        leftContent: `
            <h3 class="page-title">Agradecimientos</h3>
            <p class="page-text mb-4" style="font-size:1.2rem;">
                A mi familia, por su amor infinito. A mis editores, por pulir cada palabra. Y a ti, lector, por abrir la puerta a mis mundos. La literatura es un diálogo, y este espacio existe gracias a tu curiosidad.
            </p>
            <div style="margin-top:2rem; text-align:center; color:#9ca3af;">— &bull; &bull; &bull; —</div>
            <p class="page-text mt-4" style="font-style:italic; text-align:center; font-size:0.95rem;">
                "Las palabras tienen poder; úsalas sabiamente."
            </p>
        `,
        rightContent: `
            <h3 class="page-title">Derechos de Autor (Copyright)</h3>
            <p class="page-text mb-4" style="font-size:1.1rem;">
                Todos los textos, imágenes y diseños presentes en este sitio web son propiedad intelectual de <strong>[Chris H.]</strong> © 2025. Todos los derechos reservados.
            </p>
            <p class="page-text mb-4" style="font-size:1.1rem;">
                Queda estrictamente prohibida la reproducción, distribución, comunicación pública y transformación, total o parcial, de los contenidos de este sitio web, sin la autorización previa y por escrito del titular del copyright.
            </p>
            <p class="page-text" style="font-weight:800; margin-top:1.5rem; "font-size:1.2rem;">
                ¡Gracias por visitar mi página!
            </p>
        `
    }
];

// ======= funciones de renderizado y animación =======

function renderSpread(index) {
    if (index < 0 || index >= spreads.length) return;
    const spread = spreads[index];
    leftPage.innerHTML = spread.leftContent;
    rightPage.innerHTML = spread.rightContent;

    // ===== CENTRAR SPREAD 0 =====
    if(index === 0){
        leftPage.style.display = 'flex';
        leftPage.style.flexDirection = 'column';
        leftPage.style.justifyContent = 'center';
        leftPage.style.alignItems = 'center';
        leftPage.style.textAlign = 'center';
    } else {
        leftPage.style.display = '';
        leftPage.style.flexDirection = '';
        leftPage.style.justifyContent = '';
        leftPage.style.alignItems = '';
        leftPage.style.textAlign = '';
    }

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === spreads.length - 1;

    // Si el spread incluye el formulario, enlazamos su handler
    if (index === 2) setupContactForm();
}

function setupContactForm(){
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-status');
    if (!form) return;

    form.onsubmit = function(e){
        e.preventDefault();
        status.style.display = 'block';
        status.textContent = '¡Mensaje enviado con éxito!';
        form.reset();
        setTimeout(()=> {
            status.style.display = 'none';
        }, 3000);
    };
}

function animatePage(direction, callback){
    // desactivar botones
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    turningPageElement.classList.remove('active-forward','active-backward','turn-forward-animate','turn-backward-animate');
    turningPageElement.style.transform = ''; // reset

    if (direction === 'forward') {
        turningPageElement.innerHTML = rightPage.innerHTML;
        turningPageElement.classList.add('active-forward');
    } else {
        turningPageElement.innerHTML = leftPage.innerHTML;
        turningPageElement.classList.add('active-backward');
    }

    // forzar reflow
    void turningPageElement.offsetWidth;

    // ejecutar la animación
    setTimeout(()=> {
        if (direction === 'forward') {
            turningPageElement.classList.add('turn-forward-animate');
        } else {
            turningPageElement.classList.add('turn-backward-animate');
        }

        // esperar la duración de la animación (0.8s)
        setTimeout(()=> {
            callback();
            // limpiar
            turningPageElement.classList.remove('active-forward','active-backward','turn-forward-animate','turn-backward-animate');
            prevBtn.disabled = currentSpreadIndex === 0;
            nextBtn.disabled = currentSpreadIndex === spreads.length - 1;
        }, 820);
    }, 10);
}

function turnPage(direction){
    if (direction === 'forward' && currentSpreadIndex < spreads.length - 1) {
        animatePage('forward', ()=> {
            currentSpreadIndex++;
            renderSpread(currentSpreadIndex);
        });
    } else if (direction === 'backward' && currentSpreadIndex > 0) {
        animatePage('backward', ()=> {
            currentSpreadIndex--;
            renderSpread(currentSpreadIndex);
        });
    }
}

// eventos
prevBtn.addEventListener('click', ()=> turnPage('backward'));
nextBtn.addEventListener('click', ()=> turnPage('forward'));

// init
renderSpread(currentSpreadIndex);
