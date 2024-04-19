# <u>Breeding Kennel</u>

![Kennel](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGYxOGh5b2t5aDh5ZmtuMXRua2twOTR5cGY5cXg1bmd3YmR6bmt5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cImxFRmPTQx5I7HU8l/giphy.gif)

## <u>Introduction:</u>

Creación de página web de un criadero:

Quiero centrarme principalmente en el ADMIN, que tenga una gestión dinámica de uso y edición en cualquier lugar de la web que se necesiten hacer cambios a nivel de ejemplares, información etc.
Integrar funciones interactivas, como formulario de contacto y un sistema de comentarios y valoraciones (v.0.1), para mejorar la participación del usuario y facilitar el proceso de interacción con la plataforma.

## <u>Funcional description</u>

- _<p style="color:yellow;">Pantalla de Bienvenida (home)</p>_
  Al ingresar a la aplicación, los usuarios son recibidos directamente a Home como pantalla de bienvenida reflejado con un video un ejemplar de alaska y el navbar.

- _<p style="color:yellow;">Gestión de Contenido Dinámico</p>_
  La aplicación permite al administrador del criadero agregar, editar y eliminar fácilmente información sobre las mascotas, historia, noticias y otros contenidos relevantes, para mantener actualizada la información del criadero en todo momento.

- _<p style="color:yellow;">Formulario Interactivo de (PRE) Adopción/Adquisicion</p>_(v.0.1)
  Con el motivo de simplificar el proceso de adopción o compra, los usuarios podrán completar un formulario, para facilitar la conexión entre el criador y cliente.

- _<p style="color:yellow;">Integración con Redes Sociales</p>_
  Introducir botones de compartir en redes sociales, permitiendo a los usuarios compartir información o interesarse por lo que se suba a dichas redes, y de esta manera fomentar la difusión del criadero y aumentar su visibilidad en las redes sociales.

- _<p style="color:yellow;">Galería Multimedia</p>_
  Crear un galería multimedia que incluye imágenes, videos, información genealógica y veterinaria de ejemplares disponibles.

- _<p style="color:yellow;">Comentarios y Valoraciones</p>_(v.0.1)
  Posibilidad de dejar comentarios y valoraciones sobre las mascotas y su experiencia general con el criadero para dar transparencia y corregir posibles errores.

- _<p style="color:yellow;">Integración de Mapa</p>_(v.0.1)
  Integrar un mapa interactivo que muestra la ubicación del criadero y facilitar a los usuarios encontrar la ubicación física del criadero.

- _<p style="color:yellow;">Preguntas Frecuentes (FAQ)</p>_
  Crear una sección de Preguntas Frecuentes (FAQ) que proporciona respuestas a preguntas comunes sobre el criadero, el proceso de adopción/compra, cuidado de mascotas, entre otros temas.

### <u>Use Case</u>

- Pantalla de bienvenida (Home)

- Gestión de contenido dinámico: Permitir a los administradores del criadero agregar, editar y eliminar fácilmente información sobre las mascotas, eventos, noticias, etc.

- Formulario Interactivo de adopcion/compra.

- Integración con Redes Sociales: Botones de compartir en redes sociales para que los usuarios puedan compartir información sobre las mascotas que les interesan o las adopciones.

- Galería de imagenes, videos, información genealógica y veterinaria.

- Comentarios y valoraciones: Permitir a los usuarios dejar comentarios y valoraciones sobre las mascotas sobre su experiencia general con el criadero.

- Integración de mapa.

- Preguntas frecuentes (FAQ) => (Respuestas a preguntas comunes).

## Technical Description

### Data Models

<p style="color:yellow;">USER<p/>

- <u style="color:white;">id :</u> _("Token")_
- <u style="color:white;">email :</u>
- <u style="color:white;">password :</u> _("hash")_

<p style="color:yellow;">DOG<p/>

- <u style="color:white;">id :</u>
- <u style="color:white;">chip :</u>
- <u style="color:white;">nombre :</u>
- <u style="color:white;">nacimiento :</u>
- <u style="color:white;">genero :</u>
- <u style="color:white;">afijo :</u>
- <u style="color:white;">imagen :</u>

## <u>Main Technologies:</u>

![JavaScript](https://img.icons8.com/?size=48&id=108784&format=png)JavaScript: <p>Para gestionar las logicas de la parte de back y front.<p/>

![React](https://img.icons8.com/?size=40&id=bzf0DqjXFHIW&format=png)React: <p>Como marco de trabajo de front-end, que nos permite desarrollar componentes reutilizables.<p/>

![Tailwind](https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png)Tailwind CSS: <p>Como nuestro sistema de diseño para estilizar nuestra aplicación.<p/>

![Vite](https://img.icons8.com/?size=48&id=dJjTWMogzFzg&format=png)Vite: <p>Como herramienta de construcción y desarrollo en tiempo real.<p/>

![Node.js](https://img.icons8.com/?size=48&id=54087&format=png)Node.js: <p>Como servidor back-end => (Node.js) nos facilita el entorno de ejecución de JavaScript del lado del servidor.<p/>

- _Express que nos simplifica la creación de API y la gestión de solicitudes HTTP._

![MongoDB](https://img.icons8.com/?size=48&id=74402&format=png)MongoDB: <p>Como nuestra base de datos NoSQL para almacenar y gestionar los datos de nuestras mascotas, usuarios y otros recursos relacionados.<p/>

- _Mocha y Chai:_ Como nuestras herramientas de pruebas unitarias y de integración (testeo).
