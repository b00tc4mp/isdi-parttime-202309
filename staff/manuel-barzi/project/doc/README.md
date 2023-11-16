# Pepito's App

## Intro

Blah blah blah ...

![](https://media1.giphy.com/media/xfZOShRy1eushwpTC5/giphy.gif?cid=ecf05e47ncd1nnebu7y3c1psz9v6ton9hzpt9kk2mge6qi9o&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

- search socks
- add socks to cart
- view cart
- add / remove items
- checkout cart
- view orders
- view order status
- ...

## Technical Description

### Data Model

User
- id (string)
- name (string)
- email (string)
- password (string)

Socks
- id (string)
- name (string)
- size (string)
- theme (string)
- brand (string)
- model (string)
- price (number)

Cart
- id (string)
- user (User.id)
- items ([Socks.id])

Order
- id (string)
- user (User.id)
- date (Date)
- items ([Socks.id])

...