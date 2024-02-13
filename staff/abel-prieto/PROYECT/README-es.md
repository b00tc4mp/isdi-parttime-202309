Languajes: | [English](./README-en.md) |

## HiInit Terminal Web v0.1 &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

      ___ ___  .___ .___  _______   .___ ___________     __      __        ___                    _______      _______        
     /   |   \ |   ||   | \      \  |   |\__    ___/    /  \    /  \  ____ \_ |__           ___  _\   _  \     \   _  \     
    /    ~    \|   ||   | /   |   \ |   |  |    |       \   \/\/   /_/ __ \ | __ \          \  \/ /  /_\  \    /  /_\  \    
    \    Y    /|   ||   |/    |    \|   |  |    |        \        / \  ___/ | \_\ \          \   /\  \_/   \   \  \_/   \   
     \___|_  / |___||___|\____|__  /|___|  |____|         \__/\  /   \___   |___  /           \_/  \_____  / /\ \_____  /   
           \/                    \/                            \/        \/     \/                       \/  \/       \/    
<br>

> HiInit es un sistema de terminal web de de `creación y carga de archivos` con un sistema de registro y login de usuarios con diferentes grupos y categorías.
> Los archivos pueden ser compartidos entre los distintos miembros de un grupo específico, navegando entre los distintos archivos de la carpeta raíz.
> Hay diferentes roles con sus correspondientes permisos pero solo el tipo de usuario **ADMIN** tiene el `sistema CRUD` (creación, escritura, carga y eliminación).

- Última actualización: 13/02/2024

## RESUMEN

`Para HiInit v0.1`
- [x] Terminal web con servicio de carga online de archivos.
- [x] Escritorio o espacio personal para cada usuario.
- [x] Subida y descarga de archivos: PDFs | Documentos | Imágenes ... (por ahora)
- [x] Primera versión para el proyecto final de ISDI CODERS.

<br>

`Para HiInit v1.0`
- [ ] En construcción ... ⏳

## TIPOS DE USUARIOS

- Invitado: Primera entrada sin logeo de usuario - Color naranja
- User: Usuario estándar - Color azul
- Root: Administrador - Color rojo
  
## CASOS - FUNCIONES

`INVITADO`

- Primera entrada | Registro o Login | Salida

`USUARIO ESTÁNDAR`

- Crear y manejar sus propios archivos y carpetas | Subir y descargar archivos

`ROOT - ADMIN`

- Manejar usuarios | Sistema CRUD | Todos los archivos y carpetas | Permisos | Grupos

## MODELO DE DATOS

`INVITADO`

- nombre usuario (guest, por defecto)
- comandos: {
      - comandos tipo guest
}

`USUARIO`

- nombre usuario: nombre
- email
- contraseña: {'bcrypt }
- grupo: {
      - localhost (por defecto)
}
- comandos: {
      - comandos tipo usuario
}

`ADMINISTRADOR`

- nombre usuario: nombre
- email
- contraseña: {'bcrypt }
- grupo: {
      - root-administrador
}
- comandos: {
      - comandos tipo administrador
}

## COMANDOS

## | TIPO - INVITADO |

- Primer vistazo o entrada a la "PÁGINA INICIAL"

|   Comandos  | Función                                                               |
|  ---------  | --------                                                              | 
|  `register` | *Registro de usuario con `{ nombre usuario, email y contraseña }`*    |
|   `login`   | *Login en HiInit con credeciales `{ email y contraseña }`*            |
|    `help`   | *Solo **lista** de comandos con nombres y funciones*                  |
|    `exit`   | *Vuelve a la `página inicial`*                                        |

## | TIPO - USUSARIO |

|   Comandos  | Función                                                    |
|  ---------  | --------                                                   |
|   `logout`  | *Deslogeo de sesión y `retorno` a la página inicial*       |
|     `cd`    | *Moverse hacia `adelante` (.) o `atrás` (..) entre rutas*  |
|    `pwd`    | *`Muestra` el directorio actual*                           |
|     `ls`    | *Lista los `archivos del directorio`*                      |
|   `mkdir`   | *Creación de `directorios` en la misma ruta*               |
|  `download` | *`Descarga` de archivo específico o documento*             |
|   `upload`  | *`Subida` de archivo específico o documento*               |
|   `delete`  | *`Borra` el archivo del propio usuario*                    |
|   `clear`   | *`Limpia` la pantalla de comandos*                         |
|    `help`   | *Solo **lista** los comandos con nombres y funciones*      |

## | TIPO - ADMINISTRADOR (ROOT) |

|   Comandos  | Función                                                    |
|  ---------  | --------                                                   |
|   `logout`  | *Deslogeo de sesión y `retorno` a la página inicial*       |
|     `cd`    | *Moverse hacia `adelante` (.) o `atrás` (..) entre rutas*  |
|    `pwd`    | *`Muestra` el directorio actual*                           |
|     `ls`    | *Lista los `archivos del directorio`*                      |
|   `mkdir`   | *Creación de `directorios` en la misma ruta*               |
|  `download` | *`Descarga` de archivo específico o documento*             |
|   `upload`  | *`Subida` de archivo específico o documento*               |
|    `sudo`   | *Entrar en modo administrador `sistema CRUD`*              |
| `+ delete`  | *`Borra` archivos con sudo de cualquier grupo o usuario*   |
|  `+ chmod`  | *Da `permisos` con sudo a diferentes grupos o usuarios*    |
|   `clear`   | *`Limpia` la pantalla de comandos*                         |
|    `help`   | *Solo **lista** los comandos con nombres y funciones*      |

## 

`PÁGINA INICIAL`

![FIRST PAGE](https://github.com/b00tc4mp/isdi-parttime-202309/assets/133054841/df5ca31d-12c4-4a6e-9db6-dfdb946e0e0f)

- Página de inicio a la APP con información de contacto: email, GitHub y perfil de Linkedin.
- Formato de la barra de comandos: **guest@localhost-guest**
- Cuando presionamos `ENTER` en la página de inicio, podemos entrar al apartado de Registro o de Login con las intrucciones:  *"Escribe el comando login o register para cambiar entre los diferentes componentes de login o registro"*
- Podemos escribir el comando `HELP` para que nos muestre el listado de comandos
- Con el comando `EXIT` podremos regresar a la página de inicio **solo en modo invitado**
- Entrar al siguiente componente -> **LOGIN | REGISTRO**

<br>

`REGISTRO -> En modo "INVITADO"`
- ***register nombre de usuario + email + contraseña***
- Una vez que nos hayamos registrado, el texto desaparecerá y aparecerá una nueva barra de comandos para poder hacer el login

<br>

`LOGIN -> En modo "INVITADO"`
- ***login email + contraseña***
- Cuando ingresamos nuestras credenciales, la barra de comandos nos mostrará el nombre de usuario al lado de la categoría `user` o `admin` con su color indicativo
- Entrar al siguiente componente -> **ESCRITORIO**
  
<br>

`ESCRITORIO -> Con "USUARIO" logeado`
- Solo se accede mediante logeo
- Formato de la barra de comandos: **Username@localhost-user**
- Con el comando `mkdir` el usuario podrá crear nuevos archivos desde la rama raíz: `C:\Desktop`
- Si creamos un directorio, el comando `pwd` nos dirá la dirección completa
- Podremos subir o descargar archivos con los comandos `upload` o `download`
- El **ADMINISTRADOR** podrá `crear o modificar GRUPOS` y añadir usuarios en ellos ("localhost" es el grupo por defecto)
- Los `permisos` estarán relacionados al tipo de grupo establecido por el ADMIN con el comando `chmod`
- Los usuarios del mismo grupo podrán `visualizar archivos de cada uno` y `descargarlos`
- En todos los casos, tenemos el comando `logout` para salir de la sesión y volver a la **PÁGINA INICIAL** 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
