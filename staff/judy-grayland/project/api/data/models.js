import mongoose from 'mongoose'
const { Schema, model, ObjectId } = mongoose

// Models: User, Resource, Category, Theme, Calendar

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

const resource = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organiser: {
    type: String,
  },
  contact: {
    type: String,
  },
  ageRange: {
    type: String,
  },
  language: {
    type: String,
  },
  category: [
    {
      type: ObjectId,
      ref: 'Category',
    },
  ],
  theme: [
    {
      type: ObjectId,
      ref: 'Theme',
    },
  ],
})

const category = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const theme = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const eventsCalendar = new Schema({
  name: {
    type: String,
  },
})

const User = model('User', user)
const Resource = model('Resource', resource)
const Category = model('Category', category)
const Theme = model('Theme', theme)
const EventsCalendar = model('EventsCalendar', eventsCalendar)

/*
eg. const colegio123 = new User({ name: 'Colegio 123' })
eg. const clubDeLosRaros = new Resource( { title: 'El club de los raros', description: 'Lo “normal” es ser “raro”. Todos lo somos. Por eso, lo más importante es aprender a reírse de uno mismo.', ageRange: '8-10' })
eg. const diversidadFuncional = new Theme({ name: 'Diversidad Funcional' })
eg. const book = new Category({ name: 'Libro' })

*/

export { User, Resource, Category, Theme, EventsCalendar }
