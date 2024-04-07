# SYNQPLE App (v.1)

![](https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif)

## Intro

Synqple es una web y mobile app, que permitirá al usuario comprender y practicar la sincronización de 2 o más sonidos, con ello la posibilidad de hacer una canción o un Remix en vivo, desde uno o mas dispositivos mobiles sincronizados manualmente y a oido.

Synqple dará la posibilidad al usuario de entender cómo funciona el oído humano, cuando por ejemplo, un Deejay sincroniza una canción con otra o cuando músicos tocan juntos en una Jam Session.

Tambien Synqple a nivel de juego didactico y como herramienta musical tiene muchas posibilidades descubiertas por su desarrollador y seguro que muchas mas aun por descubrir, por sus usuarios.


#### Example:

- Una canción está sonando, un musico o una banda está tocando y Synqple te permitirá:  

1. Sincronizar un metronomo manualmente.

2. Una vez sincronizado el metronomo, podrás silenciarlo y lanzar samples/loops que irán a la misma velocidad que el metronomo (samples/loops -> drums/synth/vocals..) desde tu smartphone o desde otro dispositivo. 

3. Posibilidad de reproduccion de audio desde un sistema de sonido paralelo al que suena la cancion, musico o banda o desde el mismo sistema de sonido, eso dependerá de la posibilidad de conexion de audio.

#### Another Example (para version en React Native): 

- Synqple se puede utilizar como un reproductor de CD o cualquier otro tipo de reproductor para Deejay: 

1. Conecta 2 dispositivos a un DJ Mixer via audio (cable auxiliar)

2. Prepara tu lista de canciones a reproducir en tu dispositivo y dale accesibilidad a Synqple.

3. Ahora puedes reproducir tus canciones desde tu dispositivo o desde otro dispositivo.

4. Puedes proceder a utilizarlo como cualquier reproductor de audio Deejay, ya que tiene pitch, beat nudge y control de reproduccion, permitiendote mezclar 2 canciones o cuantas quieras (con 2 dipositivos o mas conectados de forma analogica a un djmixer con suficientes canales)




## Functional Description

### Use Cases


- Login/Register/Retrieve User (required to use the app)

- Play metronome audio and Samples/loops, through audio control (play/stop "global", mute and volume).

- BPM Control of metronome and samples/loops (BPM)

- BPM display in (BPM).

- Manual velocity tapping.

- Beat Nudge for Metronome and samples/loops (rhythm position control).

- Samples/loops folder display.

- Manage samples lists. (Favs)




#### Pages UI

#### Login/Register

- Login
- Register

#### Settings

1. Profile

- Change Email
- Change Password
- User Image (Upload/Delete)
- User Samples/Loops folder (Upload/Delete)
- Delete Profile

2. Audio Settings

3. Logout


#### Folder

- Samples/Loops 
- Favs

#### Home

- Reproduccion de metronomo y samples (botones play/stop/mute)
- Control de volumen de metronomo (input range)
- TAP para marcar el tempo (boton TAP)
- Display para visualizar BPM (input number)
- Control de ajuste de BPM (botones +/- / input range)
- Control del sincronismo del metronomo y/o Samples/Loops (botones <||| / |||>)
- Control de volumen de Samples/Loops (input range)
- Visualizacion mediante display de carpeta de samples/loops y posibilidad de navegacion en modo lista 




#### Use Description

- 1. Reproducción de audio: primero un metrónomo y luego, una vez sincronizado el metrónomo, posibilidad de reproducción de samples/loops (que deben de ir a la misma velocidad BPM del metronomo, la velocidad debe ser global)

- 2. Para la sincronización deberá tener un TAP para marcar la velocidad manualmente, lo cual deberá reflejarse en un display donde marcará los BPM, también deberá tener 2 botones para poder editar el BPM. 

- 3. Deberá tener un control de play y stop tanto para metronomo como para samples y la posibilidad de silenciar el metrónomo y los samples

- 4. En el caso que al lanzar el metrónomo vaya asincrono (caso muy probable, si no deberias de lanzarlo de nuevo), debe tener 2 botones que permitan mover el metrónomo a la posición correcta con el primer golpe de ritmo de la canción o el instrumento a sincronizar con tu metronomo o sample/loop.

- 5. Control de volumen del metrónomo y de los samples




## Technical Description


### Data Model

### User

v.1
- id (string)
- name (string)
- email (string)
- password (string)
- favorites Sample/Loop folder (array id.Samples/Loops)


### Metronome/Samples

v.1
- id (string)
- name (string)
- URL (string)
- description/type (string)
- tempo ´bpm´ (number)
- length ´secs´ (number)

v.2
- compases ´4x4´ (1, 2, 4, 8, 16, 32, 64) (number)
- genre (latin, rock, electronic...) (string)
- otros metadatos (arrays..)



### Filter

v.1
- id (string)
- user (User.id)
- title (string)
- samples (array Sample.id)

















----


Usuarios

   - ID de usuario: Entero (clave primaria)
   - Nombre de usuario: Cadena de caracteres (string)
   - Correo electrónico: Cadena de caracteres (string)
   - Contraseña: Cadena de caracteres (string) o hash
   - Otros datos de perfil: Pueden ser cadenas, fechas u otros tipos de datos según las necesidades.

Samples/loops

   - ID de sample: Entero (clave primaria)
   - Nombre del sample: Cadena de caracteres (string)
   - Artista o proveedor: Cadena de caracteres (string)
   - Duración: Decimal o entero (segundos, milisegundos, etc.)
   - Archivo de audio: Referencia a un archivo (string o ruta)
   - Género: Cadena de caracteres (string)
   - Etiquetas: Pueden ser un array de cadenas de caracteres (strings) para facilitar la búsqueda.
   - Otras metadatos: Pueden ser cadenas, números u otros tipos según las necesidades.

Colecciones o bibliotecas de samples

   - ID de colección: Entero (clave primaria)
   - Nombre de la colección: Cadena de caracteres (string)
   - Descripción: Cadena de caracteres (string)
   - Propietario: Referencia a un usuario (clave externa)
   - Lista de samples incluidos: Puede ser una tabla de relación muchos a muchos entre samples y colecciones.

Historial de descargas

   - ID de descarga: Entero (clave primaria)
   - Usuario: Referencia a un usuario (clave externa)
   - Sample descargado: Referencia a un sample (clave externa)
   - Fecha y hora de descarga: Tipo de dato de fecha y hora.

Valoraciones y comentarios

   - ID de valoración o comentario: Entero (clave primaria)
   - Usuario: Referencia a un usuario (clave externa)
   - Sample valorado o comentado: Referencia a un sample (clave externa)
   - Valoración: Entero o decimal (puntuación de 1 a 5, por ejemplo)
   - Comentario: Cadena de caracteres (string)
   - Fecha y hora: Tipo de dato de fecha y hora.






# TEST

#### Samples from Moises.ai

- Posibilidad de hacer 4 o 5 muestras en canciones en 4 pistas, para reproduccion en 4 dispositivos separados.

- Posibildad de interconexion API moises.ai con synqple?












# INFO 

### - metronome app (manv)

https://github.com/scottwhudson/metronome?tab=readme-ov-file


#### (en desuso) - control de entrada/salida auxiliar iphone ´react native´ (sider.ai) 

El control de la entrada auxiliar de iPhone con React Native se refiere a la capacidad de acceder y controlar los dispositivos auxiliares conectados al iPhone, como auriculares, micrófonos u otros dispositivos de entrada. 

Para lograr esto en React Native, puedes utilizar la biblioteca react-native-audio-toolkit, que te permite grabar y reproducir audio desde dispositivos auxiliares. Puedes encontrar más información y ejemplos de uso en la documentación oficial de la biblioteca: https://github.com/react-native-community/react-native-audio-toolkit

También puedes utilizar la biblioteca react-native-audio para acceder y controlar la entrada de audio en dispositivos auxiliares. Puedes encontrar más información y ejemplos de uso en la documentación oficial de la biblioteca: https://github.com/jsierles/react-native-audio

Estas bibliotecas te permitirán controlar la entrada auxiliar de iPhone con React Native y realizar operaciones como grabar audio desde dispositivos externos o reproducir audio a través de ellos.


### - React Native Track Player (actual)

https://rntp.dev/
https://rntp.dev/docs/basics/getting-started/

### - Como comenzar con React Native (keepcoding)

https://keepcoding.io/blog/convertirte-en-react-native-developer/#:~:text=Para%20desarrollar%20aplicaciones%20en%20React,las%20funcionalidades%20nativas%20del%20dispositivo.


### - redux (chatgpt)


user

que es redux.js

ChatGPT

Redux.js es una biblioteca de gestión de estado para aplicaciones web basadas en JavaScript, especialmente aplicaciones de una sola página (SPA). Fue creado originalmente por Dan Abramov y Andrew Clark. Redux es comúnmente utilizado con bibliotecas y frameworks de interfaz de usuario como React.js, aunque también puede ser utilizado con otras bibliotecas de JavaScript o incluso con frameworks no basados en JavaScript.

La principal idea detrás de Redux es centralizar y gestionar el estado de la aplicación de una manera predecible y coherente. Esto se logra mediante un flujo de datos unidireccional, lo que significa que los datos fluyen en una sola dirección a través de la aplicación. Redux implementa este flujo de datos utilizando tres conceptos fundamentales: el store, las acciones y los reducers.

Store: El store es un objeto que contiene el estado completo de la aplicación. Es el único objeto en la aplicación que almacena el estado y proporciona métodos para acceder a él y actualizarlo.

Acciones: Las acciones son objetos planos que contienen información sobre algo que ha sucedido en la aplicación. Estas acciones son despachadas por componentes de la interfaz de usuario o por otras partes de la lógica de la aplicación para indicar cambios en el estado.

Reducers: Los reducers son funciones puras que especifican cómo el estado de la aplicación cambia en respuesta a las acciones despachadas. Toman el estado actual y una acción, y devuelven un nuevo estado basado en esa acción.

Juntos, estos conceptos permiten una gestión del estado de la aplicación de manera predecible y fácil de entender, lo que hace que el desarrollo y mantenimiento de aplicaciones complejas sea más manejable. Redux también facilita el seguimiento y la depuración de los cambios de estado a lo largo del tiempo, lo que puede ser especialmente útil en aplicaciones grandes y complejas.



User

pero redux entonces es parecido a react? en que se diferencia?

ChatGPT
Redux y React son dos herramientas diferentes pero a menudo se utilizan juntas para construir aplicaciones web modernas. Aunque son complementarios, cumplen funciones distintas:

Redux es una biblioteca de gestión de estado. Se enfoca en manejar el estado global de la aplicación de manera predecible y centralizada. Redux se puede utilizar con cualquier biblioteca de interfaz de usuario, no está específicamente diseñado para React, aunque es muy popular en la comunidad de React debido a la integración natural y las herramientas disponibles para ello.

React, por otro lado, es una biblioteca de interfaz de usuario para la construcción de interfaces de usuario interactivas. React se enfoca en la creación de componentes reutilizables y su principal concepto es el de los componentes de React, que son bloques de construcción para la interfaz de usuario.

La principal diferencia radica en que Redux maneja el estado de la aplicación en su totalidad (global), mientras que React maneja el estado local de los componentes. Redux se utiliza para compartir el estado entre componentes de la aplicación, lo que es útil en aplicaciones complejas donde varios componentes necesitan acceder al mismo estado o donde los datos deben compartirse entre componentes que no están directamente relacionados en la jerarquía de componentes de React.

En resumen, Redux y React se pueden usar juntos de manera efectiva para construir aplicaciones web escalables y mantenibles, donde Redux se encarga del manejo del estado global de la aplicación y React se encarga de la interfaz de usuario y la visualización de los datos en función de ese estado.

User

v vite?

ChatGPT

Vite es una herramienta de compilación rápida y eficiente para aplicaciones web modernas. Se utiliza principalmente en proyectos de JavaScript y TypeScript, especialmente con bibliotecas y frameworks como React, Vue.js, Svelte, y otros.

A diferencia de herramientas de compilación más tradicionales como Webpack o Parcel, Vite se destaca por su velocidad durante el desarrollo. Utiliza un enfoque de compilación "on-demand", lo que significa que solo compila y procesa los archivos que son necesarios en un momento dado, en lugar de compilar todo el proyecto de una sola vez. Esto permite tiempos de compilación y recarga en el navegador extremadamente rápidos, lo que resulta en un flujo de desarrollo más ágil y eficiente.

Además de su velocidad, Vite también ofrece otras características útiles, como el soporte incorporado para TypeScript, una configuración mínima y simple, y una amplia gama de complementos y herramientas adicionales para mejorar la productividad del desarrollador.

En resumen, Vite es una herramienta moderna y eficiente para el desarrollo de aplicaciones web que se destaca por su velocidad durante el desarrollo y su facilidad de uso. Se puede utilizar con una variedad de bibliotecas y frameworks de JavaScript y TypeScript, lo que lo hace una opción popular en la comunidad de desarrollo web.



User

entonces vite y redux?

ChatGPT

Vite y Redux son herramientas que se utilizan para propósitos diferentes en el desarrollo de aplicaciones web.

Vite es una herramienta de compilación rápida y eficiente, como se describió anteriormente. Se utiliza principalmente para acelerar el proceso de desarrollo al proporcionar tiempos de compilación y recarga en el navegador muy rápidos. Vite es especialmente útil durante el desarrollo de aplicaciones web, ya que optimiza el flujo de trabajo y reduce el tiempo de espera, lo que permite una experiencia de desarrollo más ágil y eficiente.

Redux, por otro lado, es una biblioteca de gestión de estado para aplicaciones web. Se utiliza para manejar el estado de la aplicación de manera predecible y centralizada, facilitando el manejo de estados complejos en aplicaciones de una sola página (SPA) o aplicaciones web en general. Redux no está relacionado directamente con el proceso de compilación o desarrollo rápido, sino que se enfoca en cómo se almacena, se actualiza y se accede al estado de la aplicación en tiempo de ejecución.

En resumen, Vite y Redux son herramientas que pueden usarse juntas en el desarrollo de aplicaciones web, pero cumplen propósitos diferentes. Vite se utiliza para optimizar el proceso de desarrollo y mejorar la velocidad de compilación, mientras que Redux se utiliza para manejar el estado de la aplicación y facilitar la gestión de datos en tiempo de ejecución.



User

pero spa tambien es react no?

ChatGPT

Sí, puedes construir aplicaciones de una sola página (SPA, por sus siglas en inglés) utilizando React, entre otras tecnologías. Una SPA es un tipo de aplicación web que carga dinámicamente todo o la mayor parte de su contenido en una sola página, en lugar de cargar páginas individuales completamente nuevas desde el servidor cada vez que el usuario interactúa con la aplicación.

React es una biblioteca de JavaScript para construir interfaces de usuario interactivas, y es especialmente adecuada para la construcción de SPAs debido a su enfoque en la creación de componentes reutilizables y su capacidad para actualizar eficientemente la interfaz de usuario en respuesta a cambios en el estado de la aplicación.

Cuando se construye una SPA con React, React se encarga de manejar los componentes de la interfaz de usuario y la lógica de la aplicación, mientras que otras herramientas, como React Router para el enrutamiento y Redux para la gestión del estado, pueden ser utilizadas para proporcionar funcionalidades adicionales según sea necesario.

En resumen, React es una opción popular para construir SPAs debido a su capacidad para crear interfaces de usuario dinámicas y eficientes, pero otras tecnologías también pueden ser utilizadas para construir SPAs, dependiendo de los requisitos del proyecto y las preferencias del desarrollador.



User

entonces si puedo hacer eso ya con react para que redux?

ChatGPT

Si bien es cierto que React en sí mismo proporciona un sistema de gestión de estado local a través del estado del componente y los props, y puede usarse para construir aplicaciones de una sola página (SPAs), Redux agrega una capa adicional de gestión de estado que puede ser beneficiosa para aplicaciones más grandes y complejas, incluso cuando se usan con React.

Aquí hay algunas razones por las que podrías querer usar Redux junto con React en una SPA:

Gestión centralizada del estado: Redux proporciona un almacén centralizado para todo el estado de la aplicación, lo que facilita el seguimiento y la manipulación del estado global desde cualquier componente de la aplicación, sin tener que pasar props a través de múltiples niveles de jerarquía de componentes.

Facilita el manejo de datos asíncronos y efectos secundarios: Redux permite gestionar operaciones asíncronas y efectos secundarios de manera más organizada y predecible, utilizando middleware como Redux Thunk o Redux Saga. Esto es útil para manejar llamadas a API, gestión de la caché, y otras operaciones asíncronas.

Facilita la depuración: Redux facilita el seguimiento de cómo y cuándo cambia el estado de la aplicación a lo largo del tiempo, lo que puede ser útil para la depuración y la trazabilidad de errores.

Mejora la escalabilidad y el mantenimiento: Para aplicaciones grandes y complejas, Redux puede ayudar a mantener un flujo de datos unidireccional más claro y predecible, lo que facilita la escalabilidad y el mantenimiento a largo plazo de la aplicación.

Interacción con herramientas externas: Redux tiene una amplia gama de herramientas y extensiones disponibles que pueden ayudar en el desarrollo, como Redux DevTools, que proporciona capacidades avanzadas de depuración y monitorización del estado en el navegador.

En resumen, mientras que React por sí solo puede ser suficiente para construir SPAs más simples, Redux puede ser una herramienta valiosa para aplicaciones más grandes y complejas, ayudando a gestionar el estado de manera más efectiva y facilitando la escalabilidad y el mantenimiento del código a largo plazo.


#### TAP Tempo .js

https://codepen.io/Theavon/pen/dyYeVLY


#### WEB AUDIO API, que és? (google)

https://webdesign.tutsplus.com/es/la-web-audio-api-que-es--cms-23735t