# Robot App

## Intro

Control and connect with your Otto robot model effortlessly, featuring interactive tutorials and a dedicated forum for community communication.

![](https://media.giphy.com/media/7xkxbhryQO7hm/giphy.gif)


## Funcional Description

### Use Cases

Admin (v2)
- user management
- forum moderation
- publish tutorials
- content management


User
- connect to robot
- send movement order to robot (left/right...)
- save movement order (histograma)
- view movement orders
- update movement order ordinal (v1)
- execute movement orders (v1)
- acces to tutorials (v2)
- save tutorial (v2)
- fav tutorial / post forum (v2)
- user profile
- private messaging (v2)



## Tecnical Description

### Data Model

User
- id (String)
- name (String)
- email (String)
- password (String)
- robot model (String)
- role (enum) [Admin, User] (v2)

Movement
- id (String)
- order (number)
- type (enum [foward, backward, left, right])


Tutorial (v2)
- id (String)
- title (String)
- author (String)
- text (String)
- likes (array of user.id)


Post in Forum (v2)
- id (String)
- author (String)
- body message (String)
- comments (String)
- favs (array of user.id)



### Technologies

- bluetooh serial port (npm)
- arduino