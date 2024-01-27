import Post from './Post'
import Posts from './Posts'
import Profile from './Profile'
import NewPost from './NewPost'

export {
    Post,
    Posts,
    NewPost,
    Profile
}

//Este archivo parece ser un módulo que exporta varios componentes, posiblemente para ser utilizados en otras partes de una aplicación. Aquí tienes una explicación breve de cada uno:

//1. **Post:** Este componente representa un solo post y tiene lógica asociada para manejar acciones como dar "Me gusta", marcar como "Favorito" y eliminar el post.

//2. **Posts:** Este componente muestra una lista de posts utilizando el componente `Post`. Tiene lógica para cargar y actualizar la lista de posts.

//3. **NewPost:** Este componente proporciona un formulario para que los usuarios creen nuevos posts. Tiene lógica asociada para manejar la publicación de nuevos posts.

//4. **Profile:** Este componente representa una sección de perfil que permite a los usuarios actualizar su dirección de correo electrónico y contraseña.

//En resumen, este módulo exporta componentes relacionados con la visualización y gestión de posts, así como la gestión del perfil del usuario. Estos componentes pueden ser utilizados en otras partes de la aplicación según sea necesario.