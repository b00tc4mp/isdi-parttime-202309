## Guia de Configuración y Desarrollo de Proyectos Node.js con Express y Mongoose

### **[00] PREPARAR ENTORNO**

Vamos a tener 3 carpetas principales en nuestro proyecto: <span style="color: #FFDAB9;">**api / app / com**</span> . La carpeta <span style="color: #FFDAB9;">**com**</span> será una carpeta compartida en la que tendremos cosas que usen tanto <span style="color: #FFDAB9;">**api**</span> como <span style="color: #FFDAB9;">**app**</span> (como errors y validate). Crearemos también <span style="color: #FFDAB9;">**index.js**</span> dentro de la carpeta <span style="color: #FFDAB9;">**com**</span> para indexar errors y validate y hacer que sea el archivo principal de esta carpeta. 

Podemos crear las carpetas <span style="color: #FFDAB9;">**api**</span> y <span style="color: #FFDAB9;">**com**</span>, pero no crearemos <span style="color: #FFDAB9;">**app**</span> (ya que Vite nos la creará, en el apartado de configuración de App, lo veremos)

### **[01] PREPARAR API. INSTALAR NODE Y LIBRERIAS** 

Instalamos node en nuestra Api. Como ya tenemos instalado node, sólo tendremos que inicializarlo con el comando <span style="color: #7FFFD4;">**npm init –yes**</span> en la carpeta que queramos, en mi caso será en <span style="color: #FADADD;">/**api**</span>.

![](images/image1.png)

#### <u>**[01.01] INSTALAR EXPRESS**</u>

Facilita la creación de servidores web en Node.js. Permite manejar con facilidad solicitudes HTTP mediante el uso de middleware y rutas.

Para instalar Express ponemos hacer <span style="color: #7FFFD4;">**npm install express**</span> o bien <span style="color: #7FFFD4;">**pnpm i express**</span> la diferencia en hacerlo de una manera o de otra es que con npm nos descargamos todas las carpetas y con pnpm la ruta a las carpetas. 

Para instalar este paquete, lo tenemos que hacer a través de la consola de VSCODE y estar en la carpeta en la que queremos instalarlo. En este caso en <span style="color: #FADADD;">/**api**</span>

#### <u>**[01.02] INSTALAR MONGOOSE**</u>

Mongoose será nuestra base de datos. Para instalarlo repetimos el proceso anterior. Hacemos bien <span style="color: #7FFFD4;">**pnpm i express**</span>  en la carpeta <span style="color: #FADADD;">/**api**</span>.

#### <u>**[01.03] INSTALAR DOTENV**</u>

Dotenv es un módulo que carga variables de entorno desde un archivo <span style="color: #FFDAB9;">**.env**</span> a <span style="color: #FFDAB9;">**process.env**</span> que facilita la configuración del entorno. Para instalar este módulo tenemos:

- Crear el archivo <span style="color: #FFDAB9;">**.env**</span> Nos situamos en <span style="color: #FADADD;">/**api**</span> y usamos el comando  <span style="color: #7FFFD4;">**touch .env**</span> esto nos creará el archivo <span style="color: #FFDAB9;">**.env**</span>

- Añadir el archivo <span style="color: #FFDAB9;">**.gitignore**</span> y añadir que no ignore el archivo <span style="color: #FFDAB9;">**.env**</span> que acabamos de crear. Para eso hacemos un <span style="color: #7FFFD4;">**touch .gitignore**</span> desde <span style="color: #FADADD;">/**api**</span>. Se nos crea el archivo y dentro del archivo escribimos <span style="color: #FFDAB9;">**!.env**</span>

- Añadimos al archivo <span style="color: #FFDAB9;">**.env**</span> las rutas que queramos, en mi caso:


 <span style="color: #FDFD96;">**MONGODB\_URL = mongodb://127.0.0.1:27017/project**</span>

  <span style="color: #FDFD96;">**TEST\_MONGODB\_URL = mongodb://127.0.0.1:27017/test**</span>

  <span style="color: #FDFD96;">**PORT = 9000**</span>

 <span style="color: #FDFD96;">**JWT\_SECRET = me gustan las patatas fritas**</span>

 <span style="color: #FDFD96;">**JWT\_EXP = 1h**</span>

Hay algunas que aún no hemos instalado (como las de jasonWebToken pero las ponemos para más adelante).

#### <u>**[01.04] INSTALAR MOCHA CHAI**</u>

Mocha y Chai son dos bibliotecas de JavaScript que se usan para hacer testing. Se complementan entre sí para para ofrecer una solución completa para escribir y ejecutar pruebas tanto en aplicaciones del lado del servidor como del cliente.

Mocha es un test framework que se ejecuta en Node.js y en el navegador. Mocha proporciona la estructura para hacer pruebas. Chai es una biblioteca de aserciones paraNode.js y el navegador que se empareja con Mocha. Ofrece varias interfaces que permiten escribir aserciones de prueba de manera más expresiva y legible. Las interficies más comunes son ‘expect’, ‘should’ y ‘assert’.

Para instalar mocha chai en nuestro proyecto, tenemos que poner <span style="color: #7FFFD4;">**pnpm i -D mocha chai**</span> en la terminal de vscode, tenemos que situarnos en la carpeta donde lo queramos instalar, en este caso en <span style="color: #FADADD;">/**api**</span>. 

Tendremos que modificar el <span style="color: #FFDAB9;">**package.json**</span> de <span style="color: #FADADD;">/**api**</span> para añadirle scripts de mocha chai

 <span style="color: #FDFD96;">**"test-inspect": "mocha --inspect-brk logic/\*.spec.js",**</span>

 <span style="color: #FDFD96;">**"test-coverage": "nyc --reporter=text-summary --reporter=html mocha --require esm logic/\*.spec.js"**</span>




#### <u>**[01.05] TRABAJAR CON ESM “MODULOS” IMPORTS Y EXPORTS**</u>

ESM (ECMAScript Modules) es el estándar oficial en JS para trabajar con módulos. Introduce dos operaciones principales: ‘import’ y ‘export’. Hay dos tipos principales de exportaciones: 

- nombradas 

<span style="color: #FDFD96;">**export const miVariable = 123**</span>

<span style="color: #FDFD96;">**export function miFuncion() { ... }**</span>

- por defecto

<span style="color: #FDFD96;">**export default function() { ...**</span>

Hay dos tipos principales de importaciones, también las nombradas y por defecto.



<span style="color: #FDFD96;">**import { miVariable, miFuncion } from './miModulo.js'**</span>


<span style="color: #FDFD96;">**import MiFuncionDefault from './miModulo.js'**</span>


Para indicar que vamos a trabaja con ESM tenemos que ir a <span style="color: #FFDAB9;">**package.json**</span> y poner lo siguiente:

<span style="color: #FDFD96;">**"type": "module"**</span>

De manera que el <span style="color: #FFDAB9;">**package.json**</span> quedará así:

![](images/image3.png)



*< No está explicado pero la parte de los scripts lo añadimos manualmente como atajos. En consola en vez de poner  <span style="color: #7FFFD4;">**node –inspect-brk**</span> . si queremos debuggear, podemos poner <span style="color: #7FFFD4;">**npm run inspect**</span> y es lo mismo, pero más corto. />*


#### <u>**[01.06] INSTALAR BCRYPT // PROTEGER CONTRASEÑAS** </u>

Usamos la librería  <span style="color: #FFDAB9;">**bcrypt**</span>. Para instalar esta librería, tenemos que estar en la carpeta donde lo queramos instalar, en mi caso <span style="color: #FADADD;">/**api**</span> y en la terminal poner  <span style="color: #7FFFD4;">**pnpm i bcryptjs**</span>

#### <u>**[01.07] CONVERTIR COM EN UN PAQUETE DE NODE** </u>

Tenemos que convertir la carpeta  <span style="color: #FFDAB9;">**com**</span> en un paquete de node para poder compartirla entre  <span style="color: #FFDAB9;">**app**</span> y  <span style="color: #FFDAB9;">**api**</span>. Para inicializar el paquete de node, tenemos que situarnos en <span style="color: #FADADD;">/**com**</span> y ejecutar el comando <span style="color: #7FFFD4;">**npm init –yes**</span>

Esto nos crea un <span style="color: #FFDAB9;">**package.json**</span> en <span style="color: #FADADD;">/**com**</span>. Añadimos el tipo. <span style="color: #FADADD;">/**api**</span>"type": "module"**</span>

![](images/image4.png)





Ahora lo tenemos que instalar en <span style="color: #FFDAB9;">**api**</span> para que sea accesible desde ahí. Nos situamos en <span style="color: #FADADD;">/**api**</span> y ponemos el comando <span style="color: #7FFFD4;">**pnpm i ../com**</span> le estamos diciendo instálame el módulo de la carpeta superior.

Vemos como el <span style="color: #FFDAB9;">**package.json**</span> de <span style="color: #FADADD;">/**api**</span> se ha instalado <span style="color: #FDFD96;">**‘com’**</span> como un link

![](images/image5.png)

![](images/image6.png)

#### <u>**[01.08] INSTALAR JSONWEBTOKEN** </u>

Usamos la librería  <span style="color: #FFDAB9;">**jsonwebtoken**</span>. Para instalar esta librería, tenemos que estar en la carpeta donde lo queramos instalar, en mi caso <span style="color: #FADADD;">/**api**</span> y en la terminal poner  <span style="color: #7FFFD4;">**pnpm i jsonwebtoken**</span>

Un JWT se compone de 3 partes:

- Header: consiste en 2 partes (el tipo de token y el algortmo de firma utilizado).

- Payload: contiene las declaraciones, que son afirmaciones sobre una entidad y dato adicionales.

- Signature: para crear la firma, se tiene que coger el encoded header, el encoded payload, se unen con un punto y se frma con el algoritmo especificado en el header y usando la clave secreta.


### **[02] COMPROBAR QUE LA API FUNCIONA**  

Con la lógica de <span style="color: #FDFD96;">**RegisterUser**</span> vamos a comprobar que Api funciona bien. 


####  <u>**[02.01] LÓGICA DE REGISTERUSER / REGISTERUSER.TEST / ARCHIVOS AUXILIARES**</u>

En <span style="color: #FFDAB9;">**api**</span> vamos a tener 2 carpetas: <span style="color: #FFDAB9;">**logic**</span> y <span style="color: #FFDAB9;">**data**</span>. Dentro de data tenemos un archivo <span style="color: #FFDAB9;">**models.js**</span> en el que tenemos lo siguiente

`	`<span style="color: #FADADD;">/**api/data/models**</span>


![](images/image7.png)

![](images/image8.png)

De momento en <span style="color: #FFDAB9;">**logic**</span> tenemos el archivo <span style="color: #FFDAB9;">**registerUser.js**</span> y <span style="color: #FFDAB9;">**registerUser.test.js**</span> 

`	`<span style="color: #FADADD;">**/api/logic/registerUser.js**</span>

![](images/image9.png)

![](images/image10.png)



`	`<span style="color: #FADADD;">**/api/logic/registerUser.test.js**</span>


![](images/image11.png)



Necesitaremos la carpeta  <span style="color: #FFDAB9;">**com**</span>  para validar e importar los errores en nuestra lógica. Dentro de esta carpeta tenemos  <span style="color: #FFDAB9;">**errors**</span> , <span style="color: #FFDAB9;">**validate**</span>  y un  <span style="color: #FFDAB9;">**index**</span>  que indexa. 


`	`<span style="color: #FADADD;">**/com/errors.js**</span>

![](images/image12.png)

![](images/image13.png)




`	`<span style="color: #FADADD;">**/com/validate.js**</span>

![](images/image14.png)

![](images/image15.png)


`	`<span style="color: #FADADD;">**/com/index.js**</span>

![](images/image16.png) 



####  <u>**[02.02] EJECUTAR EL TEST REGISTERUSER.TEST EN CONSOLA**</u>

Una vez tenemos todos los archivos, ejecutamos <span style="color: #FDFD96;">**registerUser.test**</span>. Para hacer esto, tenemos que situarnos en <span style="color: #FADADD;">**/api**</span> y poner el siguiente comando:

🔥 api % <span style="color: #7FFFD4;">**node logic/registerUser.test.js**</span>

*user registered*

Nos tiene que aparecer que el usuario se ha registrado. 



####  <u>**[02.03] COMPROBAR QUE LA BASE DE DATOS EN MONGO SE HA ACTUALIZADO** </u>

Ahora comprobamos que la base de datos de <span style="color: #FFDAB9;">**mongo**</span>  se haya incorporado este usuario.

![](images/image17.png) 



####  <u>**[02.04] AÑADIR EL HANDLER DE REGISTERUSER** </u>

Creamos en la carpeta <span style="color: #FADADD;">**/api/handlers**</span> el archivo <span style="color: #FFDAB9;">**registerUserHandler.js**</span>

<span style="color: #FADADD;">**/api/handlers/registerUserHandler.js**</span> 

![](images/image18.png) 

####  <u>**[02.05] AÑADIR INDEX EN HANDLERS** </u>

Necesitamos crear un indexador en handlers para exportar todos los handlers a la vez, a este indexador le llamamos <span style="color: #FFDAB9;">**index.js**</span>
. De momento sólo tenemos un handler, pero a medida que vayamos haciendo más lógicas y sus tests, los incorporaremos. 

<span style="color: #FADADD;">**/api/handlers/index.js**</span> 

![](images/image19.png) 




####  <u>**[02.06] AÑADIR INDEX EN LOGIC** </u>

Si nos fijamos en <span style="color: #FFDAB9;">**registerUserHandler**</span>
, la importación de las lógicas la hacemos de la siguiente manera: 

![](images/image20.png) 

Esto indica que tenemos un indexador en logic, en el que importamos/exportamos todas las lógicas que vayamos creando. Vamos a hacer ese indexador. Como en otras ocasiones, se llama index

<span style="color: #FADADD;">**/api/logic/index.js**</span> 

![](images/image21.png) 


Como con el indexador de handler, a medida que vayamos creando lógicas, las añadiremos a este <span style="color: #FFDAB9;">**index**</span> para exportarlas y poder trabajar con ellas. 




####  <u>**[02.07] CREACIÓN CARPETA TEST**</u>

Crearemos una carpeta llamada <span style="color: #FFDAB9;">**test**</span> en la que tendremos archivos <span style="color: #FFDAB9;">**.sh**</span> 

Los archivos de prueba .sh son opcionales. Pero como son rápidos de implementar y te permiten ver rápidamente si la conexión va bien, los usaremos. 

Creamos la carpeta <span style="color: #FFDAB9;">**test**</span> en la ruta <span style="color: #FADADD;">**/api/test**</span> 

Esta carpeta tendrá un archivo llamado <span style="color: #FFDAB9;">**pepetest.sh**</span> (opcional, es para dar estilo) y los archivos de prueba de las lógicas. Empezaremos por <span style="color: #FFDAB9;">**register-user.test.sh**</span>


 <span style="color: #FADADD;">**/api/test/pepetest.sh**</span> 

![](images/image22.png) 

 <span style="color: #FADADD;">**/api/test/registerUser.test.sh**</span> 


![](images/image23.png) 

![](images/image24.png) 


####  <u>**[02.08] CREACIÓN INDEX EN API**</u>

Necesitamos un archivo <span style="color: #FFDAB9;">**index**</span> en  <span style="color: #FADADD;">**/api**</span> . 

![](images/image25.png) 

Qué hace este bloque de código? Configuramos y arrancamos un servidor web. 

Nos conectamos a la base de datos de Mongo. 

Configuramos el servidor web con express.

Definimos la ruta raíz 

![](images/image26.png) 

La ruta raíz es <span style="color: #FFDAB9;">**/**</span> para el servidor y este responde con un <span style="color: #FDFD96;">Hello World</span> cuando accedemos a esta ruta mediante una <span style="color: #FFDAB9;">solicitud GET</span> . Así verificamos que el servidor funciona bien. 


Aplicamos el <span style="color: #FFDAB9;">middleware cors</span> al servidor, lo que permite que nuestra <span style="color: #FFDAB9;">**api**</span> acepte solicitudes de origen cruzado.

Inicializamos un middleware (<span style="color: #FFDAB9;">**jsonBodyParser**</span>) que analiza el cuerpo de las solicitudes entrantes en formato JSON, facilitando el acceso a estos datos. 

Inicializamos el servidor

![](images/image27.png) 

A medida que tengamos más lógicas, tendremos que añadirlas. De momento, sólo tenemos  <span style="color: #FDFD96;">register</span>. 

<span style="color: #FADADD;">**/api/index**</span>

![](images/image28.png) 

####  <u>**[02.09] COMPROBACIÓN DE QUE EL TEST REGISTER-USER.TEST.SH FUNCIONA**</u>

Para comprobar que <span style="color: #FFDAB9;">**register-user.test.sh**</span> funciona bien, necesitaremos tener 2 terminales abiertas.

Nos situamos en <span style="color: #FADADD;">**/api**</span> y ponemos  <span style="color: #7FFFD4;">**node .**</span>

🔥 api % <span style="color: #7FFFD4;">**node .**</span>

*server running on port 9000*

Nos tiene que aparecer el mensaje de que el servidor ha arrancado bien. Ahora abrimos otra terminal, pero nos tenemos que situar en test <span style="color: #FADADD;">**/api/test**</span>  y ejecutamos <span style="color: #7FFFD4;">**./register-user.test.sh**</span>

![](images/image29.png) 

Parece que ha ido bien, pero tenemos que comprobar que realmente el nuevo usuario se encuentre en la base de datos de mongo.



*< me ha pasado que al intentar ejecutar <span style="color: #7FFFD4;">**./register-user.test.sh**</span> me ha salido un error de permisos, lo he solucionado con el siguiente comando <span style="color: #7FFFD4;">**chmod +x ./register-user.test.sh**</span>. />*


####  <u>**[02.10] COMPROBACIÓN EN LA BASE DE DATOS QUE SE HA REGISTRADO BIEN EL USUARIO**</u>

Vamos a la terminal de <span style="color: #FFDAB9;">**mongo**</span> (nos aseguramos que estamos en la base de datos correcta, para cambiarla ponemos <span style="color: #7FFFD4;">**use project**</span>).

![](images/image30.png) 



###  <u>**[03] TESTEAR CON SPEC** </u>

Lo último que nos queda para comprobar que nuestra <span style="color: #FFDAB9;">**api**</span> funciona bien es hacer las pruebas con los tests más avanzados, los <span style="color: #FFDAB9;">**spec**</span>. Los spec los crearemos en la carpeta <span style="color: #FADADD;">**/api/logic**</span> De manera que esta carpeta tendremos las lógicas y sus specs. 


####  <u>**[03.01] CREACIÓN REGISTERUSER.SPEC**</u>

 <span style="color: #FADADD;">**/api/logic/registerUser.spec.js**</span> 

![](images/image31.png) 
![](images/image32.png) 


####  <u>**[03.02] CREACION CARPETA HELPERS EN LOGIC**</u>

Si nos fijamos en el código del spec de <span style="color: #FDFD96;">**registerUser**</span>, vemos que importa un archivo <span style="color: #FFDAB9;">**random**</span> de la carpeta <span style="color: #FFDAB9;">**helpers**</span>, pero no la hemos creado. Vamos a hacerlo! Creamos una carpeta llamada <span style="color: #FFDAB9;">**helpers**</span> en la siguiente ruta:  <span style="color: #FADADD;">**/api/logic/helpers**</span> y creamos el archivo <span style="color: #FFDAB9;">**random.js**</span>

`	` <span style="color: #FADADD;">**/api/logic/helpers/random.js**</span> 

![](images/image33.png) 


####  <u>**[03.03] EJECUTAMOS REGISTERUSER.SPEC**</u>

Para ejecutar el test, tenemos que situarnos en <span style="color: #FADADD;">**/api**</span> y ejecutar el comando  <span style="color: #7FFFD4;">**pnpm run test**</span> 

![](images/image35.png) 

Sólo nos queda comprobar que se han guardado loss cambios en la base de datos. Para eso nos cambiamos a test (porque yo uso la base de dato test para los spec y project para lo demás).

![](images/image36.png) 


Y vemos como se ha creado un usuario random y todo es random! 