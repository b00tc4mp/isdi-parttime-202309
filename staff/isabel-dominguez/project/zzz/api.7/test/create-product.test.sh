echo TEST "create-product"

echo CASE "success on new product"

curl 'http://localhost:9000/products' \
-H 'Content-Type: application/json' \
-d '{ "name": "Aceite de Ricino", "description": "El aceite de ricino es un remedio muy conocido en el cuidado de la piel, manteniéndola hidratada. En el cuidado del cabello cabe mencionar que tiene propiedades antialopécicas con lo que podemos controlar la caída del cabello. Al mismo tiempo tiene nutriente que harán nuestro pelo suave al tacto al mismo tiempo que lo nutre. Las propiedades antibacterianas del aceite de ricino hace que sea indicado para el tratamiento de caspa. Con su uso se pueden tratar escamas, cicatrices y manchas de la piel. Asimismo, gracias a su acción espumante se pueden hacer jabones corporales y especialmente jabones para tratar el acné, debido a sus propiedades antimicrobianas. Además, el aceite de ricino se usa en el tratamiento de eczemas, dermatitis, inflamación de la piel, irritación o picazón gracias a su contenido en ácido ricinoleico. Contiene tocoferoles y vitamina E que favorecen su acción antioxidante.", "image": "https://www.cremas-caseras.es/6410-medium_default/aceite-de-ricino.jpg", "price": 10.99, "type": "RawMaterial" }' \
-v

# TEST create-product
# CASE success on new product
# * processing: http://localhost:9000/products
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > POST /products HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 1073
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Tue, 05 Mar 2024 17:27:25 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
