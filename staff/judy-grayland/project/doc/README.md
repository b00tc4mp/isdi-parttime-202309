# Coles diversos e inclusivos

## Intro

Schools in Madrid can sign up for different talks, webinars and activities that promote diversity and inclusion. But because they are all run by different associations and organisations, some private and some public, it's not always easy to know what's on offer and how to find information about the different options. The idea behind this app is to bring all these resources together in one place, so that schools can easily look through them and choose activities for their school. The app will also include a list of special dates that the school can celebrate or organise awareness-raising activities around.

![](https://core-docs.s3.amazonaws.com/cresskill_public_schools_ar/article/image/large_51df9e8b-9051-4abe-a1c2-01e39de1cb4f.jpg)
![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3R0emc5bHJreXU0NnA3emljbmV0NzhzdnRoYmU2MHp0dGN1NjhoOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RKYCLMYC6Ti21ggUx7/giphy.gif)

## Functional Description

As a Parents Association (AFA) at a primary school in Madrid, we want to be able to easily see what talks related to diversity and inclusion can be given to our kids, teachers and parents.
As a Parents Association (AFA) at a primary school in Madrid, we want to know what activities, like concerts and plays, related to diversity and inclusion we can host at our school
As a Parents Association (AFA) at a primary school in Madrid, we want to know what special dates there are throughout the year so we can organise our own awaress-raising events and activities
As a Parents Association (AFA) at a primary school in Madrid, we would like to have a calendar where we can mark days on which we've organised some event or activity
As a Parents Association (AFA) at a primary school in Madrid, we would like to have a place where we can write down possible ideas

### Use Cases

- Filter by activity/events categories
- Filter by type of diversity or theme
- Save an activity/event/special date to your favourites
- See what you've stored in your favourites
- Add an activity/event to your calendar once you've set a date for it
- Check in the calendar what is happening on a certain date
- Click on an activity card to open modal with more information
- Jot down ideas for future activities or events

## Technical Description

### Data Models

#### User (School's AFA)

- id (string)
- name (string)
- email (string)
- password (string)
- saved activities ([array of activity.id])
- registered activities ([array of activity.id])

#### Admin

- id (string)
- name (string)
- email (string)
- password (string)
- saved activities ([array of activity.id])
- registered activities ([array of activity.id])
- delete activity button

#### Activity card

- id (string)
- title of the activity (string)
- description (string)
- organiser (string)
- contact information (string)
- category of activity (string)
- type of diversity (string)
- add to calendar
- attendance (number)

#### Calendar

## Future functionalities

#### Notepad

#### List of books and films
