
# SYNQPLE App (v.1)

<br>


<a href="https://postimg.cc/9znrg53j">
    <img src="https://i.postimg.cc/X7VdJ4QX/synqple-logo-version-white.png" width="400" alt="IMG-4770">
    
</a>


## Intro

Synqple es una aplicacion web, que tiene como funcionalidad principal sincronizar musica en vivo, de manera analoga, es decir, sin sincronizaciones automaticas. 

Ademas permitirá al usuario aprender, comprender y practicar la sincronización de 2 o más sonidos, con ello la posibilidad de hacer una canción o un Remix en vivo, desde uno o mas dispositivos mobiles sincronizados simultaneamente y conectados en dispositivos de audio (altavoces, amplificadores, altavoces bluetooth...)

Synqple trae una forma rapida y sencilla de sincronizar audio, a traves de un reproductor de audio, metronomo, control de velocidad, tap tempo, ecualizacion y efectos, que permiten reproducir samples y loops para sincronizarlos con cualquier audio externo.

***(Synqple en su version 1, viene por defecto con un metronomo, 17 Samples, 3 estilos musicales (breaks, reggae, house), 3 harmonias completas Gmin, Emin, Bmin, estas dividas en 6 canales: drums, bass, guitar/piano, synth, percs, vocals)**

![](https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif)

## Functional Description

Reproductor de Audio, Metronomo, Tap Tempo, Control BPM, Sampler, EQ y AudioFX

## Use Cases

Registered Users: 

- Login / Register 
- Profile - Retrieve / ChangeCredentials / Delete User 
- Reproducir audio (metronomo, samples)
- Tap tempo para marcar BPM manualmente
- Ajustar BPM (incrementar/decrementar)
- Ajustar el beat (empuje hacia delante o atras)
- Reproducir/detener metrónomo
- Reproducir/detener samples 
- Silenciar metrónomo y samples
- Ajustar volumen metrónomo y samples
- Visualizar carpeta de samples y navegar entre ellos
- Reproducir/detener samples individuales desde el sample folder
- Guardar samples como favoritos
- Streaming Samples por URL (AWS)


-----------


## Technical Description

- Frontend: HTML, CSS, React, Vite, Tailwind
- Audio: Tone.js, Web Audio API
- Backend: Node.js, Express
- Database: MongoDB, AWS
- Test/specs: Mocha + Chai
- Deploy: Netlify (Frontend) + Render(Backend)
- Design: Figma, Illustrator

----------------


## Data Model

### User
v.1

- id (string)
- name (string)
- email (string)
- password (string)
- favSamples (array Sample.id)


### Metronome/Samples
v.1

- id (string)
- name (string)
- URL (string)
- description/type (string)
- tempo ´bpm´ (number)
- length ´secs´ (number)

### Samples
v.1

- id (string)
- name (string)
- URL (string)
- description/type (string)
- tempo ´bpm´ (number)
- length ´secs´ (number)



----------------------

### FIGMA DESIGN

#### FIGMA URL https://www.figma.com/file/RxjkP9oJMEbxvD3unDPPqz/

---------------------------------------------------------

## Pages UI

### Welcome

- Welcome 


### Login/Register

- Login
- Register


### Home

- El componente home renderiza:

### Logout

- Logout -- Redirects to Loginpage


### Settings

1. Profile

- Change Email
- Change Password
- Delete User --- Redirects to Loginpage
- User Image (Upload/Delete) (not working)
- Logout (siguiente version)

2. Audio Settings


### Samples Folder

- Samples/Loops 
- User toggle Favs
- Favs


#### synqpleTool (audio component)
- Reproduccion de metronomo y samples (botones play/stop/mute)
- Control de volumen de metronomo (input range)
- TAP para marcar el tempo (boton TAP)
- Display para visualizar BPM (input number)
- Control de ajuste de BPM (botones +/- / input range)
- Control del sincronismo del metronomo y/o Samples/Loops (botones <||| / |||>)
- Control de volumen de Samples/Loops (input range)
- Visualizacion mediante display de carpeta de samples/loops y posibilidad de navegacion en modo lista 

----------------------------------

### APP URL CORE CODE

<br>

<a href="https://postimg.cc/LJy5rrwS">
    <img src="https://i.postimg.cc/QMD7WDqF/IMG-4770.jpg" width="500" alt="IMG-4770">
</a>



-----------------------------------

#### Use Description


Muevete a traves de la app, y descubre sus secciones y funcionalidades,

una vez en la seccion synqple(audio tool) te recomiendo que elijas el primer sample para hacer una prueba "Drum_1_Breaks", y sigue los pasos:

**(el control de velocidad BPM es tanto para el metronomo como para los samples, se inician los 2 sonidos de forma sincrona)**


- 1. **Reproducción de audio (metronomo):** dale al boton play y el metronomo sonará a una velocidad por defecto de 120 bpm, tambien el sample acaba de ponerse en reproduccion **(solo que esté esta muteado por defecto, hay que desmutearlo manualmente, pero eso aun puede esperar)** puedes cambiar la velocidad bpm con los botones de incrementar/decrementar bpm o con el tap para marcar la velocidad.

- 2. **Sincronizacion:** Para la sincronización se debe utilizar el TAP(synq), con 4 golpes a ritmo (de la musica o instrumento sincronizar), marcados en desde el comienzo del compas o loop hasta el final, 4 golpes por que synqple esta pensado paara musica 4x4.

Verás que despues de 4 golpes el valor del bpm control cambiará, mostrando el bpm detectado. Depende del usuario la exactitud de la sincronizacion, para ajustes finos se debe utilizar los botones de incremento/decremento bpm en una unidad y en el input range podras ajustas a 0.5. 

El beat nudge -/+ (mover el loop del sample un poco adelante o atras) juega aqui un papel essencial por el tema del y de la asincronia o delay y de la forma que synqple te obliga a sincronizar totalmente a oido, el beat nudge es essencial en la sincronizacion sin el no se podria sincronizar nada.

- 3. **Reproducción de audio (samples):** la idea es que siempre primero se sincronice completamente el metronomo una vez sincronizado este y es recomprobado varios segundos de forma auditiva, se procede al desmuteo del sample.

- 4. **Control de volumen de samples:** una vez desmuteado el sample, se puede ajustar su volumen con el input range de volumen de samples para lograr un balance entre la musica o instrumento a sincronizar y el sample.

- 5. **Otras funcionalidades:** Se puede cambiar de sample/loop mediante la navegacion en la carpeta de samples o mediante los favoritos. Tambien se puede mutear y desmutear el metronomo y los samples de forma independiente. Tiene un filtro allpass para poder jugar con las mezclas. Tambiene tiene el loop length que te permite controlar la duracion del loop del sample, otra forma divertida de jugar con los samples una vez sincronizados



-------------------

### Ejemplo:

- Una canción está sonando, un musico o una banda está tocando y Synqple te permitirá:  

1. Sincronizar un metronomo manualmente.

2. Una vez sincronizado el metronomo, podrás silenciarlo y lanzar samples/loops que irán a la misma velocidad que el metronomo (samples/loops -> drums/synth/vocals..) desde tu smartphone o desde otro dispositivo. 

3. Posibilidad de reproduccion de audio desde un sistema de sonido paralelo al que suena la cancion, musico o banda o desde el mismo sistema de sonido, eso dependerá de la posibilidad de conexion de audio.

### Otro ejemplo (para version en React Native): 

- Synqple se puede utilizar como un reproductor de CD o cualquier otro tipo de reproductor para Deejay: 

1. Conecta 2 dispositivos a un DJ Mixer via audio (cable auxiliar)

2. Prepara tu lista de canciones a reproducir en tu dispositivo y dale accesibilidad a Synqple.

3. Ahora puedes reproducir tus canciones desde tu dispositivo o desde otro dispositivo.

4. Puedes proceder a utilizarlo como cualquier reproductor de audio Deejay, ya que tiene pitch, beat nudge y control de reproduccion, permitiendote mezclar 2 canciones o cuantas quieras (con 2 dipositivos o mas conectados de forma analogica a un djmixer con suficientes canales)

### Proximas Versiones

v.1.1


Preescuha
- Switch entre Preescucha y Reproduccion (L/R doble falso estereo)

FX
- Delay
- Reverb
- PitchShift

UI
- Nuevos estilos

Test
- Start Frontend testing with Vitest
- Backend hacer mas specs

Nuenas logicas
- Profile (imageUpload, deleteImage...)
- Settings (changeLanguage,...)
- Ligth/Dark mode toggle
- Audio quality (low/high)
- Equalizer
- Canales de audio (almenos 2 mas)

Vesion Nativa
- Ionic Framework para crear una App multiplataforma
- Poder reproducir canciones enteras con los mismos controles que para samples
- Poder tener una carpeta nativa para las canciones y navegar entre ellas


------------------------------


### Info sobre API de Audio en JavaScript

- **Web Audio API:** Es una interfaz de programación de aplicaciones (API) que permite a los desarrolladores manipular y controlar audio en la web mediante JavaScript. Con esta API, puedes crear y manipular sonidos directamente en el navegador, aplicar efectos de sonido, crear secuencias de audio y mucho más. Es una herramienta poderosa para la creación de aplicaciones web interactivas y experiencias multimedia.

- **Tone.js:** Es una biblioteca de JavaScript para la creación de música y sonido en la web. Tone.js simplifica el proceso de trabajar con audio en el navegador al proporcionar una API fácil de usar para la síntesis de audio, la programación de eventos musicales, la creación de efectos de sonido y más. Es especialmente útil para desarrolladores que desean crear aplicaciones musicales interactivas, juegos o experiencias de sonido inmersivas en la web.

-------------------------------------------

## Algunas anecdotas

- **Web Audio API esta deshabilitado por iOS:** Web Audio API no reproduce en iOS como audio de medios si no como audio de notificaciones, me ha traido bastante dolor de cabeza, y no solo a mi, si no a muchos developers por lo que he podido ver en Stack Overflow, Github y en la web en general.
Esto quiere decir si tienes un iphone y tienes el interruptor del silencio activado el sonido de la API de audio no suena, tienes que desactivar el modo silencioso.

<br>

***Solucion (provisional):** ponerlo en modo dormir o no molestar, para que mientras que juegas con synqple o cualquien app de audio no te molesten los sonidos de las notificaciones.

***Solucion (funcional):** Convertir la web app en una app nativa (con React Native, por ejemplo)

Este problema no es asi en **Android**, en android funciona tambien en modo silencioso.

-------------------------------------------------

- **Busqueda de informacion y ayuda:** essencial ha sido la documentacion de Tone.js, comenzar pruebas de audio con un simple HTML y un script, pero para agilidad y aprendizaje me ayudé muchisimo de Chat GPT.

Los companieros que he tenido en el bootcamp juegan tambien un papel importante aqui, ha habido muchisimo companierismo y disposicion, ha sido genial trabajar con gente tan buena onda y con ganas de aprender.

El profe, Manu es un profe con mucho conocimiento en la materia y muchas veces bastante exigente, pero con buena onda, siempre con ganas de ayudar y ganas de enseniar cosas nuevas.

La profe asistente, Flors me ayudó en los ultimos momentos antes de la presentacion, fue de muchisima ayuda para terminar de pulir los ultimos detalles, me saco varias dudas y me dio buenos consejos para la presentacion. 
(Essencial para futuros bootcamps, tener unx profe asistente en mi opinion, desdes el minuto uno hasta el ultimo)

