echo TEST "retrieve-user-order"

echo CASE "success on correct retrieved"


curl 'http://localhost:9000/cart/order' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWY1N2QyNGNjZGEwMGUxODk2YmY5YzUiLCJpYXQiOjE3MTEyMTk3NTksImV4cCI6MTcxMTI1NTc1OX0.LlAzEuj_sQaHAOnyhearZ4j3OhtIds6hX_HuZ2pSNKw' \
-v

# TEST retrieve-user-order
# CASE success on correct retrieved
# * processing: http://localhost:9000/cart/order
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /cart/order HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWY1N2QyNGNjZGEwMGUxODk2YmY5YzUiLCJpYXQiOjE3MTEyMTk3NTksImV4cCI6MTcxMTI1NTc1OX0.LlAzEuj_sQaHAOnyhearZ4j3OhtIds6hX_HuZ2pSNKw
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2483
# < ETag: W/"9b3-QQSFaUnVVTeElvZ+X59p33hNBaA"
# < Date: Sat, 23 Mar 2024 19:09:45 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"_id":"65ff115b04c95019b3f02994","user":"65f57d24ccda00e1896bf9c5","status":"active","products":[{"product":{"_id":"65e8683deadcfb1397d77890","name":"Envase tubo de cartón stick labial","description":"Envase para crear barras de labios de color y bálsamo labial ¡sin plásticos! El envase al ser de cartón es fácilmente reciclable y permite crear un producto acabado totalmente sostenible. El envase es cilíndrico y con forma de tubo. Fácil de usar, se compone de la base y una tapadera, al igual que un stick labial convencional. Se debe tener en cuenta que el sistema que utiliza es push up, por lo que no incorpora ningún elemento giratorio, pulsando en la parte de abajo de la base se puede hacer uso del producto acabado. Se aconseja durante el envasado tener mucha precaución a la hora de tocar el envase con las manos manchadas o con algún producto graso ya que quedará manchado. El envase admite hasta 12 ml, utilizando la base hasta su tope.","image":"https://hellokitchen.com.au/wp-content/uploads/2021/09/C320800.jpg","price":4.91,"type":"Packings","__v":0},"quantity":1,"_id":"65ff22b473de2321c8490f4a"},{"product":{"_id":"65e864fdc106a4483c4fbcf5","name":"Pincel de tinte para el pelo","description":"Pincel para aplicar mascarillas faciales o para aplicar tintes para cabello de henna.","image":"https://www.homehairdresser.com.au/images/ProductImages/500/138027.jpg","price":1.8,"type":"Utensils","__v":0},"quantity":4,"_id":"65ff2485202e85a2ec4c0467"},{"product":{"_id":"65e86464baeea68ff24af628","name":"Brocha kabuki","description":"Brocha Kabuki de pelo sintético Toray. Color negro con decoración. Altura: 9cm, Diametro 3cm. La fibra sintética de la empresa japonesa Toray hoy en día son el mejor sustituto del pelo natural. Tienen la ventaja de ser antibacterianas y lo más importante, ningún animal es explotado para la obtención de la materia prima para la producción de estas brochas. La fibra Toray es muy suave y duradera. La mejor forma de aplicar mineral foundation o maquillaje mineral en polvo es con movimientos circulares y una presion ligera. De esta forma conseguimos una aplicación homogenea, uniforme y rápida de nuestro maquillaje.","image":"https://cdn.shopify.com/s/files/1/2074/6593/products/ef3d7e0399bc91ba76db6141eff0bc42_4687edd2-e588-4a56-8243-923d6b1cbfae_500x.png?v=1578059401","price":19.95,"type":"Utensils","__v":0},"quantity":1,"_id":"65ff250a202e85a2ec4c0480"}],"createdAt":"2024-03-23T17:28:59.095Z","__v":5}* Connection #0 to host localhost left intact
