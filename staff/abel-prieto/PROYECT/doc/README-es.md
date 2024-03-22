Languajes: | [English](./README-en.md) |

## HiInit Terminal Web v0.1 &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

      ___ ___  .___ .___  _______   .___ ___________     __      __        ___                    _______      _______        
     /   |   \ |   ||   | \      \  |   |\__    ___/    /  \    /  \  ____ \_ |__           ___  _\   _  \     \   _  \     
    /    ~    \|   ||   | /   |   \ |   |  |    |       \   \/\/   /_/ __ \ | __ \          \  \/ /  /_\  \    /  /_\  \    
    \    Y    /|   ||   |/    |    \|   |  |    |        \        / \  ___/ | \_\ \          \   /\  \_/   \   \  \_/   \   
     \___|_  / |___||___|\____|__  /|___|  |____|         \__/\  /   \___   |___  /           \_/  \_____  / /\ \_____  /   
           \/                    \/                            \/        \/     \/                       \/  \/       \/    
<br>

> HiInit es un sistema de terminal web de `creación y carga de archivos` con un sistema de registro y login de usuarios con diferentes grupos y categorías.
> Los archivos pueden ser compartidos entre los distintos miembros de un grupo específico, navegando entre los distintos archivos de la carpeta raíz.
> Hay diferentes roles con sus correspondientes permisos pero solo el tipo de usuario **ADMIN** tiene el `sistema CRUD` (creación, escritura, carga y eliminación).

- Última actualización: 21/03/2024

## ÍNDICE

- <a href="https://github.com/AbelPucela94/isdi-parttime-202309/blob/feature/proyect/staff/abel-prieto/PROYECT/doc/README-es.md#resumen">Resumen</a>
- <a href="https://github.com/AbelPucela94/isdi-parttime-202309/blob/feature/proyect/staff/abel-prieto/PROYECT/doc/README-es.md#tipos-de-usuarios">Tipos de Usuarios</a>
- <a href="https://github.com/AbelPucela94/isdi-parttime-202309/blob/feature/proyect/staff/abel-prieto/PROYECT/doc/README-es.md#casos---funciones">Casos - Funciones</a>
- <a href="https://github.com/AbelPucela94/isdi-parttime-202309/blob/feature/proyect/staff/abel-prieto/PROYECT/doc/README-es.md#modelo-de-datos">Modelo de Datos</a>
- <a href="https://github.com/AbelPucela94/isdi-parttime-202309/blob/feature/proyect/staff/abel-prieto/PROYECT/doc/README-es.md#comandos">Comandos</a>
- <a href="https://github.com/AbelPucela94/isdi-parttime-202309/blob/feature/proyect/staff/abel-prieto/PROYECT/doc/README-es.md#componentes">Componentes</a>


## RESUMEN

`Para HiInit v0.1`
- [x] Terminal web con servicio de carga online de archivos.
- [x] Escritorio o espacio personal para cada usuario.
- [x] Empleo de `MULTER` y el paquete `PATH` de NodeJS en API para subir archivos mediante petición HTTP y guardarlos en disco `npm i multer`
- [x] Subida y descarga de archivos.
- [x] Primera versión para el proyecto final de ISDI CODERS.

<br>

`Para HiInit v1.0`
- [x] Utilización de AWS para el alojamiento en nube o remoto de archivos 
- [x] Uso de MongoDB Atlas para almacenar base de datos en Cloud
- [x] Organización y creación de carpetas
- [x] Añadir más comandos
- [ ] En construcción ... ⏳

## TIPOS DE USUARIOS

- Invitado: Primera entrada sin logeo de usuario - Color naranja
- User: Usuario estándar - Color azul
- Root: Administrador - Color rojo
  
## CASOS - FUNCIONES

`INVITADO`

- Primera entrada | Registro o Login | Salida | Help 

`USUARIO ESTÁNDAR`

- Crear y manejar sus propios archivos | Subir y descargar archivos | Modificación de datos | Help

`ROOT - ADMIN`

- Manejo de usuarios | Sistema CRUD | Todos los archivos y carpetas | Permisos | Grupos | Help

## MODELO DE DATOS

`USUARIO`

- id
- nombre usuario
- email
- contraseña
- grupo (ref: Grupo.id)
- rol (tipo: String, enum: [ invitado, regular, admin ])

`GRUPO`

- id
- nombre

`COMANDO`

- id
- nombre
- descripción

`ARCHIVO`

- id
- nombre
- dueño (ref: Usuario.id)
- tipo (tipo: String, enum: [ archivo, carpeta ])
- padre (ref: Archivo.id)
- permisos (tipo: Number, enum: [ 0, 2, 3 ])

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
|    `pwd`    | *`Muestra` el directorio actual*                           |
|     `ls`    | *Lista los `archivos del directorio`*                      |
|  `desktop`  | *Redirige al usuario a su carpeta `Escritorio`*            |
|  `download` | *`Descarga` de archivo específico o documento*             |
|   `upload`  | *`Subida` de archivo específico o documento*               |
|   `delete`  | *`Borra` el archivo del propio usuario*                    |
|    `help`   | *Solo **lista** los comandos con nombres y funciones*      |
|    `exit`   | *Deslogeo de sesión y `retorno` a la página inicial*       |


## | TIPO - ADMINISTRADOR (ROOT) |

|   Comandos  | Función                                                    |
|  ---------  | --------                                                   |
|    `sudo`   | *Entrar en modo `ADMINISTRADOR`*                           |
|    `pwd`    | *`Muestra` el directorio actual*                           |
|     `ls`    | *Lista los `archivos del directorio`*                      |
|  `desktop`  | *Redirige al usuario a su carpeta `Escritorio`*            |
|  `download` | *`Descarga` de archivo específico o documento*             |
|   `upload`  | *`Subida` de archivo específico o documento*               |
|   `delete`  | *`Borra` el archivo del propio usuario*                    |
|    `help`   | *Solo **lista** los comandos con nombres y funciones*      |
|    `exit`   | *Deslogeo de sesión y `retorno` a la página inicial*       |

## COMPONENTES

`PÁGINA INICIAL`

![FIRST PAGE](https://github.com/b00tc4mp/isdi-parttime-202309/assets/133054841/df5ca31d-12c4-4a6e-9db6-dfdb946e0e0f)

- Página de inicio a la APP con información de contacto: email, GitHub y perfil de Linkedin.
- Formato de la barra de comandos: **guest@hiinit-guest**
- Cuando presionamos `ENTER` en la página de inicio, podemos entrar al apartado de Registro o de Login con las intrucciones:  *"Escribe el comando login o register para cambiar entre los diferentes componentes de login o registro"*
- Podemos escribir el comando `HELP` para que nos muestre el listado de comandos
- Con el comando `EXIT` podremos regresar a la página de inicio **solo en modo invitado**
- Entrar al siguiente componente -> **LOGIN | REGISTRO**

<br>

`REGISTRO -> En modo "INVITADO"`
![register](https://github.com/b00tc4mp/isdi-parttime-202309/assets/133054841/1bd3f05b-4c85-4631-a373-a78382226744)

- ***register => nombre de usuario + email + contraseña***
- Una vez que nos hayamos registrado, el texto desaparecerá y aparecerá una nueva barra de comandos para poder hacer el login
- Interfaz de errores: manejamos errores del tipo usuario en pantalla mediante elementos HTML
- Entry the next component -> **LOGIN**

<br>

`LOGIN -> En modo "INVITADO"`
![login](https://github.com/b00tc4mp/isdi-parttime-202309/assets/133054841/8b469735-f66b-4101-a0ae-4bf5f20ca2d9)

- ***login => email + contraseña***
- Cuando ingresamos nuestras credenciales, la barra de comandos nos mostrará el nombre de usuario al lado de la categoría `user` o `admin` con su color indicativo
- Interfaz de errores: manejamos errores del tipo usuario en pantalla mediante elementos HTML
- Entrar al siguiente componente -> **ESCRITORIO**
  
<br>

`ESCRITORIO -> Con "USUARIO" logeado`
![desktop](https://github.com/b00tc4mp/isdi-parttime-202309/assets/133054841/f525a6f5-fcd3-4c07-a7f0-da5a36d5220f)

- Solo se accede mediante logeo
- Grupo `localhost` por defecto
- Formato de la barra de comandos: **usuario@grupo-rol**
- Con el comando `mkdir` el usuario podrá crear nuevos archivos desde la rama raíz: `C:\Desktop`
- Si creamos un directorio, el comando `pwd` nos dirá la dirección completa
- Podremos subir o descargar archivos con los comandos `upload` o `download`
- El **ADMINISTRADOR** podrá `crear o modificar GRUPOS` y añadir usuarios en ellos ("localhost" es el grupo por defecto)
- Los `permisos` estarán relacionados al tipo de grupo establecido por el ADMIN con el comando `chmod`
- Los usuarios del mismo grupo podrán `visualizar archivos de cada uno` y `descargarlos`
- En todos los casos, tenemos el comando `logout` para salir de la sesión y volver a la **PÁGINA INICIAL** 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
