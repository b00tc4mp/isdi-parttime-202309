import mongoose from 'mongoose'
const { Schema, model, ObjectId } = mongoose

// School / AFA
const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  saved: [
    {
      type: ObjectId,
      ref: 'Resource',
    },
  ],
  scheduled: [
    {
      type: ObjectId,
      ref: 'Resource',
    },
  ],
})

// Resources
const resource = new Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  resourceType: {
    type: String,
  },
  topic: [
    {
      type: String,
    },
  ],
  link: {
    type: String,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
  },
  ageRange: [
    {
      type: String,
    },
  ],
})

const activity = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tag: [
    {
      type: ObjectId,
    },
  ],
})

const book = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ageRange: {
    type: Number,
  },

  tag: [
    {
      type: ObjectId,
    },
  ],
})

const specialDate = new Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },

  tag: [
    {
      type: ObjectId,
      ref: 'Theme',
    },
  ],
})

const User = model('User', user)
const Resource = model('Resource', resource)
const Activity = model('Activity', activity)
const Book = model('Book', book)
const SpecialDate = model('SpecialDate', specialDate)

/*
eg. const colegio123 = new User({ name: 'Colegio 123' })
eg. const clubDeLosRaros = new Resource( { title: 'El club de los raros', description: 'Lo “normal” es ser “raro”. Todos lo somos. Por eso, lo más importante es aprender a reírse de uno mismo.', ageRange: '8-10' })
eg. const diversidadFuncional = new Topic({ name: 'Diversidad Funcional' })
eg. const book = new Category({ name: 'Libro' })

*/

export { User, Resource, Activity, Book, SpecialDate }
