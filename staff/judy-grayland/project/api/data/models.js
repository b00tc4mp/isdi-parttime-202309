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
const activity = new Schema({
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
  category: [
    {
      type: ObjectId,
      ref: 'Category',
    },
  ],
  topic: [
    {
      type: ObjectId,
      ref: 'Theme',
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
  url: {
    type: String,
  },
  category: [
    {
      type: ObjectId,
      ref: 'Category',
    },
  ],
  topic: [
    {
      type: ObjectId,
      ref: 'Theme',
    },
  ],
})

const specialDate = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  url: {
    type: String,
  },
  category: [
    {
      type: ObjectId,
      ref: 'Category',
    },
  ],
  topic: [
    {
      type: ObjectId,
      ref: 'Theme',
    },
  ],
})

// Labels
const category = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const topic = new Schema({
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
const Activity = model('Activity', activity)
const Book = model('Book', book)
const SpecialDate = model('SpecialDate', specialDate)
const Category = model('Category', category)
const Topic = model('Topic', topic)
const EventsCalendar = model('EventsCalendar', eventsCalendar)

/*
eg. const colegio123 = new User({ name: 'Colegio 123' })
eg. const clubDeLosRaros = new Resource( { title: 'El club de los raros', description: 'Lo “normal” es ser “raro”. Todos lo somos. Por eso, lo más importante es aprender a reírse de uno mismo.', ageRange: '8-10' })
eg. const diversidadFuncional = new Topic({ name: 'Diversidad Funcional' })
eg. const book = new Category({ name: 'Libro' })

*/

export { User, Activity, Book, SpecialDate, Category, Topic, EventsCalendar }
