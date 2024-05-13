import mongoose from 'mongoose'

function name() {
  return `name-${Math.random()}`
}

function email() {
  return `email-${Math.random()}@school.com`
}

function password() {
  return `password-${Math.random()}`
}
function title() {
  return `title-${Math.random()}`
}

function description() {
  return `description-${Math.random()}`
}
function image() {
  return `image-${Math.random()}`
}

function link() {
  return `link-www.${Math.random()}.com`
}

const { ObjectId } = mongoose.Types

function id() {
  return new ObjectId().toString()
}

const random = {
  name,
  email,
  password,

  title,
  description,
  image,
  link,
  id,
}

export default random
