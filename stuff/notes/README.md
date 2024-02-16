## Guia de Configuración y Desarrollo de Proyectos Node.js con Express y Mongoose

**[00] PREPARAR ENTORNO**

Vamos a tener 3 carpetas principales en nuestro proyecto: api / app / com . La carpeta “com” será una carpeta compartida en la que tendremos cosas que usen tanto api como app (como errors y validate). Crearemos también index.js dentro de la carpeta "com" para indexar errors y validate y hacer que sea el archivo principal de esta carpeta. 

**[01] PREPARAR API. INSTALAR NODE Y LIBRERIAS** 

Instalamos node en nuestra Api. Como ya tenemos instalado node, sólo tendremos que inicializarlo con el comando **npm init –yes** en la carpeta que queramos, en mi caso será en api.

![](image1.png)

<!-- **[01.01] INSTALAR EXPRESS**

Facilita la creación de servidores web en Node.js. Permite manejar con facilidad solicitudes HTTP mediante el uso de middleware y rutas.

Para instalar Express ponemos hacer **npm install express** o bien **pnpm i express** la diferencia en hacerlo de una manera o de otra es que con npm nos descargamos todas las carpetas y con pnpm la ruta a las carpetas. 

Para instalar este paquete, lo tenemos que hacer a través de la consola de VSCODE y estar en la carpeta en la que queremos instalarlo. En este caso en /api

**[01.02] INSTALAR MONGOOSE**

Mongoose será nuestra base de datos. Para instalarlo repetimos el proceso anterior. Hacemos bien **pnpm i express**  en la carpeta /api.

**[01.03] INSTALAR DOTENV**

Dotenv es un módulo que carga variables de entorno desde un archivo .env a process.env. que facilita la configuración del entorno. Para instalar este módulo tenemos:

- Crear el archivo .env. Nos situamos en /api y usamos el comando **touch .env** esto nos creará el archivo .env. 
- Añadir el archivo .gitignore y añadir que no ignore el archivo .env que acabamos de crear. Para eso hacemos un **touch .gitignore** desde api. Se nos crea el archivo y dentro del archivo escribimos **!.env** 
- Añadimos al archivo .env las rutas que queramos, en mi caso:
- MONGODB\_URL = mongodb://127.0.0.1:27017/project
- TEST\_MONGODB\_URL = mongodb://127.0.0.1:27017/test
- PORT = 9000
- JWT\_SECRET = me gustan las patatas fritas
- JWT\_EXP = 1h

Hay algunas que aún no hemos instalado (como las de jasonWebToken pero las ponemos para más adelante).

**[01.04] INSTALAR MOCHA CHAI**

Mocha y Chai son dos bibliotecas de JavaScript que se usan para hacer testing. Se complementan entre sí para para ofrecer una solución completa para escribir y ejecutar pruebas tanto en aplicaciones del lado del servidor como del cliente.

Mocha es un test framework que se ejecuta en Node.js y en el navegador. Mocha proporciona la estructura para hacer pruebas. Chai es una biblioteca de aserciones paraNode.js y el navegador que se empareja con Mocha. Ofrece varias interfaces que permiten escribir aserciones de prueba de manera más expresiva y legible. Las interficies más comunes son ‘expect’, ‘should’ y ‘assert’.

Para instalar mocha chai en nuestro proyecto, tenemos que poner **pnpm i -D mocha chai** en la terminal de vscode, tenemos que situarnos en la carpeta donde lo queramos instalar, en este caso en /api. 

Tendremos que modificar el package.json de api para añadirle scripts de mocha chai

"test-inspect": "mocha --inspect-brk logic/\*.spec.js",

`    `"test-coverage": "nyc --reporter=text-summary --reporter=html mocha --require esm logic/\*.spec.js"



**[01.05] TRABAJAR CON ESM “MODULOS” IMPORTS Y EXPORTS**

ESM (ECMAScript Modules) es el estándar oficial en JS para trabajar con módulos. Introduce dos operaciones principales: ‘import’ y ‘export’. Hay dos tipos principales de exportaciones: 

- nombradas 

*export* const *miVariable* =* 123;

*export* function *miFuncion*() { ... }

- por defecto

*export* *default* function() { ...

Hay dos tipos principales de importaciones, también las nombradas y por defecto.

// *Importar exportaciones nombradas*

*import* { miVariable, miFuncion } *from* './miModulo.js'

// *Importar una exportación por defecto*

*import* MiFuncionDefault *from* './miModulo.js'


Para indicar que vamos a trabaja con ESM tenemos que ir a package.json y poner lo siguiente:

"type": "module"

De manera que el package.json quedará así:

`  `"name": "api",

`  `"version": "0.0.0",

`  `"description": "",

`  `"main": "index.js",

`  `"scripts": {

`    `"start": "node .",

`    `"watch": "node --watch .",

`    `"inspect": "node --inspect-brk .",

`    `"test": "mocha logic/\*.spec.js",

`    `"test-inspect": "mocha --inspect-brk logic/\*.spec.js",

`    `"test-coverage": "nyc --reporter=text-summary --reporter=html mocha --require esm logic/\*.spec.js"

`  `},

`  `"keywords": [],

`  `"author": "",

`  `"license": "ISC",

`  `"dependencies": {

`    `"bcryptjs": "^2.4.3",

`    `"cors": "^2.8.5",

`    `"dotenv": "^16.4.4",

`    `"express": "^4.18.2",

`    `"mongoose": "^8.1.2"

`  `},

`  `"devDependencies": {

`    `"chai": "^5.1.0",

`    `"mocha": "^10.3.0"

`  `},

`  `"type": "module"

}

*< No está explicado pero la parte de los scripts lo añadimos manualmente como atajos. En consola en vez de poner **node –inspect-brk** . si queremos debuggear, podemos poner **pnpm run inspect** y es lo mismo, pero más corto. />*

**[01.06] INSTALAR BCRYPT // PROTEGER CONTRASEÑAS** 

Usamos la librería bcrypt. Para instalar esta librería, tenemos que estar en la carpeta donde lo queramos instalar, en mi caso /api y en la terminal poner **pnpm i bcryptjs** 

**[01.07] CONVERTIR COM EN UN PAQUETE DE NODE** 

Tenemos que convertir la carpeta com en un paquete de node para poder compartirla entre app y api. Para inicializar el paquete de node, tenemos que situarnos en com y ejecutar el comando npm init –yes

Esto nos crea un package.json en com. Añadimos el tipo. "type": "module"

{

`  `"name": "com",

`  `"version": "1.0.0",

`  `"description": "",

`  `"main": "index.js",

`  `"scripts": {

`    `"test": "echo \"Error: no test specified\" && exit 1"

`  `},

`  `"keywords": [],

`  `"author": "",

`  `"license": "ISC",

`  `"type": "module"

}


Ahora lo tenemos que instalar en api para que sea accesible desde ahí. Nos situamos en api y ponemos el comando **pnpm i ../com** le estamos diciendo instálame el módulo de la carpeta superior.

Vemos como el package.json de api se ha instalado ‘com’ como un link

{

`  `"name": "api",

`  `"version": "0.0.0",

`  `"description": "",

`  `"main": "index.js",

`  `"scripts": {

`    `"start": "node .",

`    `"watch": "node --watch .",

`    `"inspect": "node --inspect-brk .",

`    `"test": "mocha logic/\*.spec.js",

`    `"test-inspect": "mocha --inspect-brk logic/\*.spec.js",

`    `"test-coverage": "nyc --reporter=text-summary --reporter=html mocha --require esm logic/\*.spec.js"

`  `},

`  `"keywords": [],

`  `"author": "",

`  `"license": "ISC",

`  `"dependencies": {

`    `"bcryptjs": "^2.4.3",

`    `"com": "link:../com",

`    `"cors": "^2.8.5",

`    `"dotenv": "^16.4.4",

`    `"express": "^4.18.2",

`    `"mongoose": "^8.1.2"

`  `},

`  `"devDependencies": {

`    `"chai": "^5.1.0",

`    `"mocha": "^10.3.0"

`  `},

`  `"type": "module"

}




**[02] COMPROBAR QUE LA API FUNCIONA**  

Con la lógica de RegisterUser vamos a comprobar que Api funciona bien. 


**[02.01] LÓGICA DE REGISTERUSER / REGISTERUSER.TEST / ARCHIVOS AUXILIARES**

En Api vamos a tener 2 carpetas: logic y data. Dentro de data tenemos un archivo models.js en el que tenemos lo siguiente

`	`**/api/data/models**

*import* mongoose *from* 'mongoose'

const* { *Schema*, *model*, *ObjectId* }* =* mongoose

const *user* =* new *Schema*({

`    `*name*:* {

`        `*type*:* String,

`        `*required*: *true*
\*
`    `},

`    `*email*:* {

`        `*type*:* String,

`        `*required*: *true*,

`        `*unique*: *true* //*crea un indice para que no deje registrar a más usuarios con el mismo email* 
\*
`    `},

`    `*password*:* {

`        `*type*:* String,

`        `*required*: *true*,

`        `*minlenght*:* 8
\*
`    `},

`    `*favs*:* [{

`        `*type*:* ObjectId,

`        `*ref*:* 'Post'
\*
`    `}]

})

const *post* =* new *Schema*({

`    `*author*:* {

`        `*type*:* ObjectId,

`        `*required*: *true*,

`        `*ref*:* 'User'* //*le decimos que el objectId hace referencia a usuario*
\*
`    `},

`    `*image*:* {

`        `*type*:* String,

`        `*required*: *true*
\*
`    `},

`    `*text*:* {

`        `*type*:* String,

`        `*required*: *true*
\*
`    `},

`    `*likes*:* [{

`        `*type*:* ObjectId,

`        `*ref*:* 'User'
\*
`    `}],

`    `*comments*:* [{

`        `*author*:* { *type*:* ObjectId, *ref*:* 'User'* },

`        `*text*:* { *type*:* String, *required*: *true* }

\*    }]

})

//*tenemos que usar una clase para construir usuarios*

const *User* = *model*('User',* user)

const *Post* = *model*('Post',* post)

*export* {

`    `User, Post

}


De momento en logic tenemos el archivo registerUser.js y registerUser.test.js 

**/api/logic/registerUser.js**

*import* bcrypt *from* 'bcryptjs'

*import* { validate, errors } *from* 'com'

*import* { User } *from* '../data/models.js'

const* { *SystemError*, *DuplicityError* }* =* errors

function *registerUser*(name, email, password) {

`    `*validate.text*(name, 'name')

`    `*validate.email*(email, 'email')

`    `*validate.text*(password, 'password')

`    `*return* (*async* () => {

`        `let* hash

`        `*try* {

`            `hash = *await* *bcrypt.hash*(password, 8)

`        `} *catch* (error) {

`            `*throw* new *SystemError*(*error.*message)

`        `}

`        `*try* {

`            `*await* *User.create*({ name, email, password: hash }) //*aqui no lo envolvemos en una constante porque no devuelve nada*

`        `} *catch* (error) {

`            `if (*error.*code === 11000)

`                `*throw* new *DuplicityError*('user already exists')

`            `*throw* new *SystemError*(*error.*message)

`        `}

`    `})()

}

*export* *default* registerUser


`	`**/api/logic/registerUser.test.js**


*import* dotenv *from* 'dotenv'

*dotenv.config*()

*import* mongoose *from* 'mongoose'

*import* registerUser *from* './registerUser.js' // *el requiere es como el input*

(*async* () => {

`    `*await* *mongoose.connect*(*process.env.*MONGODB\_URL)

`    `*try* {

`        `*await* *registerUser*('Man Darina', 'man@darina.com', '123123123')

`        `*console.log*('user registered')

`    `} *catch* (error) {

`        `*console.log*(error)

`    `}

})()


Necesitaremos la carpeta com para validar e importar los errores en nuestra lógica. Dentro de esta carpeta tenemos errors, validate y un index que indexa. 


`	`**/com/errors.js**

class NotFoundError *extends* Error {

`    `constructor(message) {

`        `super(message)

`        `this*.*name = this*.*constructor*.*name

`    `}

}

class SystemError *extends* Error {

`    `constructor(message) {

`        `super(message)

`        `this*.*name = this*.*constructor*.*name

`    `}

}

class ContentError *extends* Error {

`    `constructor(message) {

`        `super(message)

`        `this*.*name = this*.*constructor*.*name

`    `}

}

class DuplicityError *extends* Error {

`    `constructor(message) {

`        `super(message) // *podemos ponerle el message aqui?*

`        `this*.*name = this*.*constructor*.*name

`    `}

}

class AuthenticateError *extends* Error {

`    `constructor(message) {

`        `super(message)

`        `this*.*name = this*.*constructor*.*name

`    `}

}

class CredentialsError *extends* Error {

`    `constructor(message) {

`        `super(message)

`        `this*.*name = this*.*constructor*.*name

`    `}

}

class TokenError *extends* Error {

`    `constructor(message) {

`        `super(message)

`        `this*.*name = this*.*constructor*.*name

`    `}

}




*export* {  //*esto es un bucket*

`    `NotFoundError,

`    `SystemError,

`    `ContentError,

`    `DuplicityError,

`    `AuthenticateError,

`    `CredentialsError,

`    `TokenError

}

const *errors* =* {* // *esto un objeto*
\*
`    `NotFoundError,
\*
`    `SystemError,
\*
`    `ContentError,
\*
`    `DuplicityError,
\*
`    `CredentialsError,
\*
`    `TokenError

}

*export* *default* errors




`	`**/com/validate.js**

*import* { ContentError } *from* './errors.js'

const *EMAIL\_REGEX* =* /*^*(([^*<>()[\]\\.,;:\s@"*]+(*\.*[^*<>()[\]\\.,;:\s@"*]+)\*)|*.*(*".*+*"*))*@*((*\[*[*0-9*]{1,3}*\.*[*0-9*]{1,3}*\.*[*0-9*]{1,3}*\.*[*0-9*]{1,3}*\]*)|(([*a-zA-Z\-0-9*]+*\.*)+[*a-zA-Z*]{2,}))*$*/

const *ID\_REGEX* =* /*^*[*0-9A-Fa-f*]{24}*$*/

function *text*(text, explain) {

`    `if (typeof text !== 'string') *throw* new *TypeError*(explain + ' is not string')

`    `if (!*text.trim*()*.*length) *throw* new *ContentError*(explain + ' is empty')

}

function *email*(email, explain) {

`    `*text*(email, explain)

`    `if (!EMAIL\_REGEX*.test*(email)) *throw* new *ContentError*(`${explain} is not valid`)

}

function *password*(password, explain = 'password') {

`    `*text*(password, explain)

`    `if (*password.*length < 8) *throw* new *RangeError*(`${explain} length is lower than 8 characters`)

}

function *number*(number, explain) {

`    `if (typeof number !== 'number') *throw* new *TypeError*(`${explain} is not a number`)

}

function *funktion*(funktion, explain) {

`    `if (typeof funktion !== 'function') *throw* new *TypeError*(`${explain} is not a function`)

}

function *id*(id, explain) {

`    `*text*(id, explain)

`    `if (!ID\_REGEX*.test*(id)) *throw* new *ContentError*(`${explain} is not a valid id`)

}

const *validate* =* {
\*
`    `text,
\*
`    `email,
\*
`    `password,
\*
`    `number,

`    `*function*:* funktion,
\*
`    `id

}

*export* *default* validate



**/com/index.js**

*import* validate *from* './validate.js'

*import* errors *from* './errors.js'

*export* {

`    `validate,

`    `errors

}



**[02.02] EJECUTAR EL TEST REGISTERUSER.TEST EN CONSOLA**

Una vez tenemos todos los archivos, ejecutamos el test de register. Para hacer esto, tenemos que situarnos en api y poner el siguiente comando:

🔥 api % node logic/registerUser.test.js

user registered

Nos tiene que aparecer que el usuario se ha registrado. 



**[02.03] COMPROBAR QUE LA BASE DE DATOS EN MONGO SE HA ACTUALIZADO** 

Ahora comprobamos que la base de datos de mongo se haya incorporado este usuario.

`  `![A computer code on a black background

Description automatically generated](Aspose.Words.7a9fb646-69b1-478a-9793-d848bef1ded9.002.png)



**[02.04] AÑADIR EL HANDLER DE REGISTERUSER** 

Creamos en la carpeta api/handlers el archivo registerUserHandler.js

**/api/handlers/registerUserHandler.js**


*import* logic *from* '../logic/index.js'

*import* { errors } *from* 'com'

const* { *DuplicityError*, *ContentError* }* =* errors

*export* *default* (req, res) => {

`    `const* { *name*, *email*, *password* }* = *req.body* //*queremos que nos devuelva la respuesta en el body*

`    `*try* {

`        `*logic.registerUser*(name, email, password)

`            `// *no hacemos un callback(error), le indicamos al navegador el tipo de error en forma de respuesta (res)*

`            `*.then*(() => *res.status*(201)*.send*())

`            `*.catch*(error => {

`                `let* status* =* 500

`                `if (error instanceof DuplicityError)

`                    `status = 409

`                `*res.status*(status)*.json*({ error: *error.*constructor*.*name, message: *error.*message })

`            `}) //*todo ha ido bien, se lo indicamos al navegador*

`    `} *catch* (error) {

`        `let* status* =* 500

`        `if (error instanceof ContentError || error instanceof TypeError)

`            `status = 406

`        `*res.status*(status)*.json*({ error: *error.*constructor*.*name, message: *error.*message })

`    `}

}


**[02.05] AÑADIR INDEX EN HANDLERS** 

Necesitamos crear un indexador en handlers para exportar todos los handlers a la vez, a este indexador le llamamos index. De momento sólo tenemos un handler, pero a medida que vayamos haciendo más lógicas y sus tests, los incorporaremos. 

**/api/handlers/index.js**


*import* registerUserHandler *from* './registerUserHandler.js'

*export* {

`    `registerUserHandler

}



**[02.06] AÑADIR INDEX EN LOGIC**

Si nos fijamos en registerUserHandler, la importación de las lógicas la hacemos de la siguiente manera: 

*import* logic *from* '../logic/index.js'

Esto indica que tenemos un indexador en logic, en el que importamos/exportamos todas las lógicas que vayamos creando. Vamos a hacer ese indexador. Como en otras ocasiones, se llama index

**/api/logic/index.js**

*import* registerUser *from* './registerUser.js'

const *logic* =* {
\*
`    `registerUser

}

*export* *default* logic



Como con el indexador de handler, a medida que vayamos creando lógicas, las añadiremos a este index para exportarlas y poder trabajar con ellas. 




**[02.07] CREACIÓN CARPETA TEST**

Crearemos una carpeta llamada test en la que tendremos archivos .sh 

Los archivos de prueba .sh son opcionales, podemos probar la conexión con el servidor con los tests spec. Pero los .sh son más rápidos de implementar y te permiten ver rápidamente si la conexión va bien. 

Creamos la carpeta test en la ruta api/test

Esta carpeta tendrá un archivo llamado pepetest.sh (opcional, es para dar estilo) y los archivos de prueba de las lógicas. Empezaremos por register-user.test.sh


**/api/test/pepetest.sh**

*print\_in\_orange*() {

`  `*echo*  "\033[1;38;5;208m$1\033[0m"

}

*print\_in\_yellow*() {

`  `*echo* "\033[1;33m$1\033[0m"

}

function *TEST*() {

`    `*print\_in\_yellow* "TEST $1"

}

function *CASE*() {

`  `# *Unir todos los parámetros en un solo mensaje*

`  `message="$\*"

`  `*print\_in\_orange* "\n\nCASE $message"

}


**/api/test/registerUser.test.sh**

*source* pepetest.sh

*TEST* "register-user"

*CASE* "success on new user"

*curl* 'http://localhost:9000/users' \

-H 'Content-Type: application/json' \

-d '{ "name": "Gui Sante", "email": "gui@sante.com", "password": "123123123" }' \

-v

\# *con el -v le pido que me enseñe la vuelta*

\# *cen la cabecera -H le aviso que rtipo de dato le voy a enviar*

\# *```sh*

\# *$ curl 'http://localhost:8000/register' \*

\# *-H 'Content-Type: application/json' \*

\# *-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \*

\# *-v*

\# *> POST /register HTTP/1.1*

\# *> Host: localhost:8000*

\# *> User-Agent: curl/8.1.2*

\# *> Accept: \*/\**

\# *> Content-Type: application/json*

\# *> Content-Length: 72*

\# *< HTTP/1.1 201 Created*

\# *< X-Powered-By: Express*

\# *< Date: Tue, 12 Dec 2023 20:30:46 GMT*

\# *< Connection: keep-alive*

\# *< Keep-Alive: timeout=5*

\# *< Content-Length: 0*

\# *```*

*CASE* "fail on already existing user"

*curl* 'http://localhost:9000/users' \

-H 'Content-Type: application/json' \

-d '{ "name": "Man Darina", "email": "man@darina.com", "password": "123123123" }' \

-v

\# *> POST /users HTTP/1.1*

\# *> Host: localhost:8000*

\# *> User-Agent: curl/7.79.1*

\# *> Accept: \*/\**

\# *> Content-Type: application/json*

\# *> Content-Length: 68*

\# *>* 

#* 

\# *< HTTP/1.1 400 Bad Request*

\# *< X-Powered-By: Express*

\# *< Content-Type: application/json; charset=utf-8*

\# *< Content-Length: 49*

\# *< ETag: W/"31-9YH7vKZZOanka1kAQTVWdLRn9j0"*

\# *< Date: Sat, 16 Dec 2023 22:32:22 GMT*

\# *< Connection: keep-alive*

\# *< Keep-Alive: timeout=5*

\# *<* 

\# *{"error":"Error","message":"user already exists"}*


**[02.08] CREACIÓN INDEX EN API**

Necesitamos un archivo index en api. Qué hace este bloque de código? Configuramos y arrancamos un servidor web. 

Nos conectamos a la base de datos de Mongo. 

Configuramos el servidor web con express.

Definimos la ruta raíz 

`        `*server.get*('/', (req, res) => *res.send*('Hello world'))

La ruta raíz es / para el servidor y este responde con un Hello World cuando accedemos a esta ruta mediante una solicitud GET. Así verificamos que el servidor funciona bien. 


Aplicamos el middleware cors al servidor, lo que permite que nuestra api acepte solicitudes de origen cruzado.

Inicializamos un middleware (jsonBodyParser) que analiza el cuerpo de las solicitudes entrantes en formato JSON, facilitando el acceso a estos datos. 

Inicializamos el servidor

*server.listen*(*process.env.*PORT, () => *console.log*(`server running on port ${*process.env.*PORT}`))

A medida que tengamos más lógicas, tendremos que añadirlas. De momento, sólo tenemos register. 


*import* dotenv *from* 'dotenv'

*dotenv.config*()

// *trae la librería dotenv y config lo que hace es leer el archivo .env, lee las variables que hay*

// *y te las pone en process.env*

*import* mongoose *from* 'mongoose'

*import* express *from* 'express'

*import* cors *from* 'cors'

*import* {

`    `registerUserHandler

} *from* './handlers/index.js'

*mongoose.connect*(*process.env.*MONGODB\_URL) //*hagola conexión con moongose*

`    `*.then*(() => {

`        `const *server* = *express*()

`        `*server.get*('/', (req, res) => *res.send*('Hello world'))

`        `const *jsonBodyParser* = *express.json*()

`        `*server.use*(*cors*())








`        `//*usar el metodo POST para hacer el registro*

`        `*server.post*('/users', jsonBodyParser, registerUserHandler)

`        `*server.listen*(*process.env.*PORT, () => *console.log*(`server running on port ${*process.env.*PORT}`))

`    `})

`    `*.catch*(error => *console.error*(error))



**[02.09] COMPROBACIÓN DE QUE EL TEST REGISTER-USER.TEST.SH FUNCIONA**

Para comprobar que register-user.test.sh funciona bien, necesitaremos tener 2 terminales abiertas.

Nos situamos en **/api** y ponemos **node .**

🔥 api % node .

server running on port 9000

Nos tiene que aparecer el mensaje de que el servidor ha arrancado bien. Ahora abrimos otra terminal, pero nos tenemos que situar en test **/api/test** y ejecutamos **./register-user.test.sh**

![A screenshot of a computer program

Description automatically generated](Aspose.Words.7a9fb646-69b1-478a-9793-d848bef1ded9.003.png)

Parece que ha ido bien, pero tenemos que comprobar que realmente el nuevo usuario se encuentre en la base de datos de mongo.

*< me ha pasado que al intentar ejecutar ./register-user.test.sh me ha salido un error de permisos, lo he solucionado con el siguiente comando **chmod +x ./register-user.test.sh** />*


**[02.10] COMPROBACIÓN EN LA BASE DE DATOS QUE SE HA REGISTRADO BIEN EL USUARIO**

Vamos a la terminal de mongo (nos aseguramos que estamos en la base de datos correcta, para cambiarla ponemos use project).

![A computer screen with green text

Description automatically generated](Aspose.Words.7a9fb646-69b1-478a-9793-d848bef1ded9.004.png)



**[03] TESTEAR CON SPEC** 

Lo último que nos queda para comprobar que nuestra api funciona bien es hacer las pruebas con los tests más pro, los spec. Los spec los crearemos en la carpeta **api/logic** De manera que esta carpeta tendremos las lógicas y sus specs. 


**[03.01] CREACIÓN REGISTERUSER.SPEC**

**/api/logic/registerUser.spec.js**


*import* dotenv *from* 'dotenv'

*dotenv.config*()

// *primero nos traemos mongoose para conectar los modelos y conectar la base de datos*

*import* mongoose *from* "mongoose";

// *nos traemos los expect de chai*

*import* { expect } *from* 'chai'

*import* bcrypt *from* 'bcryptjs'

*import* random *from* './helpers/random.js'

*import* registerUser *from* './registerUser.js'

*import* { errors } *from* 'com'

*import* { User } *from* '../data/models.js'

const* { *DuplicityError* }* =* errors

*describe*('registerUser', () => { //*describimos el test, le ponemos un título*

`    `*before*(*async* () => *await* *mongoose.connect*(*process.env.*TEST\_MONGODB\_URL)) //*es un poco redundante usar async / await aqui, porque el before ya es una promesa*

`    `*beforeEach*(*async* () => *await* *User.deleteMany*())

`    `*it*('succeds on new user', *async* () => {

`        `const *name* = *random.name*()

`        `const *email* = *random.email*()

`        `const *password* = *random.password*()

`        `*await* *registerUser*(name, email, password)

`        `const *user* = *await User.findOne*({* email* })

`        `//*comprobamos que realmente el usuario que acabmos de registrar est´en la base de dato*

`        `*expect*(user)*.to.*exist

`        `*expect*(*user.*name)*.to.equal*(name)

`        `*expect*(*user.*email)*.to.equal*(email)

`        `// *expect(user.password).to.equal(password)*

`        `const *match* = *await bcrypt.compare*(password, *user.password*)

`        `*expect*(match)*.to.be.*true

`        `//*si se registra bien, devuelve la promesa*

`    `})

`    `*it*('fails on already existing user', *async* () => {

`        `const *name* = *random.name*()

`        `const *email* = *random.email*()

`        `const *password* = *random.password*()

`        `*await* *User.create*({ name, email, password })


`        `*try* {

`            `*await* *registerUser*(name, email, password)

`            `*throw* new *Error*('should not reach this point')

`        `} *catch* (error) {

`            `*expect*(error)*.to.be.instanceOf*(DuplicityError)

`            `*expect*(*error.*message)*.to.equal*('user already exists')

`        `}

`    `})

`    `*after*(*async* () => *await* *mongoose.disconnect*()) //*así desconecta cuando terminan todos los tests* 

})


**[03.02] CREACION CARPETA HELPERS EN LOGIC**

Si nos fijamos en el código del spec de registerUser, vemos que importa un archivo random de la carpeta helpers, pero no la hemos creado. Vamos a hacerlo! Creamos una carpeta llamada helpers en la siguiente ruta:  **/api/logic/helpers** y creamos el archivo random.js

`	`**/api/logic/helpers/random.js**

**	function *name*() {

`    `*return* `name-${*Math.random*()}`

}

function *email*() {

`    `*return* `e-${*Math.random*()}@mail.com`

}

function *password*() {

`    `*return* `password-${*Math.random*()}`

}

function *image*() {

`    `*return* `image-${*Math.random*()}`

}

function *text*() {

`    `*return* `text-${*Math.random*()}`

}

const *random* =* {
\*
`    `name,
\*
`    `email,
\*
`    `password,
\*
`    `image,
\*
`    `text

}

*export* *default* random


**[03.03] EJECUTAMOS REGISTERUSER.SPEC**

Para ejecutar el test, tenemos que situarnos en api y ejecutar el comando **pnpm run test**

![A computer screen with white text

Description automatically generated](Aspose.Words.7a9fb646-69b1-478a-9793-d848bef1ded9.005.png)

Sólo nos queda comprobar que se han guardado loss cambios en la base de datos. Para eso nos cambiamos a test (porque yo uso la base de dato test para los spec y project para lo demás).

![A computer screen with green text

Description automatically generated](Aspose.Words.7a9fb646-69b1-478a-9793-d848bef1ded9.006.png)


Y vemos como se ha creado un usuario random y todo es random! -->