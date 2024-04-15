# Coles + diversos e inclusivos

## Problem statement

Schools in Madrid can sign up for different talks, webinars and activities that promote diversity and inclusion. But because they are all run by different associations and organisations, some private and some public, it's not always easy to know what's on offer and how to find information about the different options. There are also many books and media resources available for consumption, but there is no centralised source of information for them.

![](https://core-docs.s3.amazonaws.com/cresskill_public_schools_ar/article/image/large_51df9e8b-9051-4abe-a1c2-01e39de1cb4f.jpg)
![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3R0emc5bHJreXU0NnA3emljbmV0NzhzdnRoYmU2MHp0dGN1NjhoOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RKYCLMYC6Ti21ggUx7/giphy.gif)

## Functional Description

The idea behind this app is to bring all available resources together in one place, so that schools can easily look through them and choose activities to host, books to add to their library, training for their staff etc. The app will also include a list of special dates that the school can celebrate or organise awareness-raising activities around.

### Use Cases

- Look for resources by categories (talks, books, special dates)
- Look for resources by type of diversity or theme (bullying, functional diversity, LGBT+, gender equality) - tags
- See upcoming special dates
- Save an activity/book/special date to your favourites
- See what you've stored in your favourites
- Add an activity/event to your calendar once you've set a date for it
- Check in the calendar what is happening on a certain date
- See details of a specific resource (cost of book, target audience of talk, duration of seminar) - + read more, latest modified date
- Add, modify and delete resource (Admin)

### Nice to have

- Propose new resource (all users)
- Propose modification of an existing resource (all users)

## Technical Description

### Data Models

#### User

- id (string)
- name (string)
- role (string)
- email (string)
- password (string)
- saved resources ([Resource.id])
- scheduled activities ([Resource.id])

// Generic Resource (MVP)

#### Resource

- id (string)
- title (string)
- description (string)
- resourceType (string)
- tags ([Tag.id])
- link (string)
- image (string)
- author (string)
- ageRange ([number, number])

// Specific Resources

#### Activity

- id (string)
- title (string)
- description (string)
- tags ([Tag.id])
- link (string)
- image (string)

#### Book

- id (string)
- title (string)
- description (string)
- tags ([Tag.id])
- author (string)
- ageRange ([number, number])
- image (string)

#### SpecialDate

- id (string)
- title (string)
- description (string)
- tags ([Tag.id])
- date (date)
- link (string)

#### Tag -topic- (xenofobia, bullying, dislexia)

- id (string)
- title (string)

#### EventsCalendar

- id (string)
- author (User.id)
- activity (Activity.id)
- date (string)
- title (string)
- description (string)
- location (string)

### Technologies

- Frontend: HTML, CSS, React
- Backend: Node, Express
- Database: MongoDB, Mongoose
- Testing: Mocha, Chai
