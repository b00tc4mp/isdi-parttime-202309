
# SYNQPLE App (v.1)

<br>

[![synqple-logo-version-white.png](https://i.postimg.cc/X7VdJ4QX/synqple-logo-version-white.png)](https://postimg.cc/9znrg53j)



## Intro

Synqple es una aplicacion web, que tiene como funcionalidad principal sincronizar musica en vivo, de manera analoga, es decir, sin sincronizaciones automaticas. 

Ademas permitirá al usuario aprender, comprender y practicar la sincronización de 2 o más sonidos, con ello la posibilidad de hacer una canción o un Remix en vivo, desde uno o mas dispositivos mobiles sincronizados simultaneamente y conectados en dispositivos de audio (altavoces, amplificadores, altavoces bluetooth...)

Synqple trae una forma rapida y sencilla de sincronizar audio, a traves de un reproductor de audio, metronomo, control de velocidad, tap tempo, ecualizacion y efectos, que permiten reproducir samples, loops y audio externo de forma sincronizada.

***(viene por defecto con un metronomo, 17 Samples, 3 estilos musicales (breaks, reggae, house), 3 harmonias completas Gmin, Emin, Bmin, estas dividas en 6 canales: drums, bass, guitar/piano, synth, percs, vocals)**

![](https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif)

# Functional Description

Reproductor de Audio, Metronomo, Tap Tempo, Sampler, EQ y AudioFX

## Use Cases

Registered Users: 

- Login/Register/Retrieve/ChangeCredentials/Delete User 
- Reproducir audio (metronomo, samples)
- Tap tempo para marcar BPM manualmente
- Ajustar BPM (incrementar/decrementar)
- Reproducir/pausar/detener metrónomo
- Reproducir/pausar/detener samples 

<br>  

- Silenciar metrónomo y samples
- Ajustar volumen metrónomo y samples
- Visualizar carpeta de samples y navegar entre ellos
- Reproducir/pausar/detener samples individuales
- Guardar samples como favoritos
- Streaming Samples por URL (AWS)


-----------


### Technical Description

- Frontend: HTML, CSS, React, Vite, Tailwind
- Audio: Tone.js, Web Audio API
- Backend: Node.js, Express
- Database: MongoDB, AWS
- Test/specs: Mocha + Chai
- Deploy: Netlify (Frontend) + Render(Backend)
- Design: Figma, Illustrator

----------------


### Data Model

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


### Settings

1. Profile

- Change Email
- Change Password
- Delete User
- User Image (Upload/Delete)

2. Audio Settings

3. Logout


### Samples Folder

- Samples/Loops 
- User toggle Favs
- Favs

### Home

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





#### Use Description

- 1. Reproducción de audio: primero un metrónomo y luego, una vez sincronizado el metrónomo, posibilidad de reproducción de samples/loops (que deben de ir a la misma velocidad BPM del metronomo, la velocidad debe ser global)

- 2. Para la sincronización deberá tener un TAP para marcar la velocidad manualmente, lo cual deberá reflejarse en un display donde marcará los BPM, también deberá tener 2 botones para poder editar el BPM. 

- 3. Deberá tener un control de play y stop tanto para metronomo como para samples y la posibilidad de silenciar el metrónomo y los samples

- 4. En el caso que al lanzar el metrónomo vaya asincrono (caso muy probable, si no deberias de lanzarlo de nuevo), debe tener 2 botones que permitan mover el metrónomo a la posición correcta con el primer golpe de ritmo de la canción o el instrumento a sincronizar con tu metronomo o sample/loop.

- 5. Control de volumen del metrónomo y de los samples


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