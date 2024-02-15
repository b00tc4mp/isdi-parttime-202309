# Basic Pantry

## Intro

Simple recipes for non-creative people who like to cook (or have no problem to do it)

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnN4bWV2a2dhZ3RnYmJ4NWFpMTN2Yjl1Zmk0dmpnbHR5eTJrM3VkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R7eZuOTVtL7gc/giphy.gif)

## Functional description

This application is for people who are uncreative in the kitchen.
How many times have you opened the fridge, have seen few ingredients, and have you thought you have nothing to cook?
The problem is not having to cook, but not knowing what or how to do it can demotivate.
In this application you can add and find different recipes, simple, and made up of those ingredients that are usually at the bottom of the fridge or the dispense.
It's the kitchen basic wardrobe.

### Use Cases
- Display the recipes.
- Add new recipes.
- Filter recipes by ingredients.
- Filter recipes by elaboration duration.
- Filter recipes by feed type (glutenfree, vegetarian, vegan, omnivorous).
- Filter by complexity level.
- Filter by cooking type (steamed, oven, microwave, grill, fresh).
- Evaluation of recipes using a score system.

## Technical description

- Frontend: HTML, Tailwindcss, JavaScript (React)
- Backend: Node & Express
- Database : Mongo Atlas
- Testing Mocha & Chai


## Data Model

User
* id (string)
* name (string)
* email (string)
* password (string)
* avatar profile (image)

Ingredients
* id (string)
* name (string)

Recipes
* id (string)
* name (string)
* description (string)
* image (image)
* ingredients (reference to Ingredient.id)
* elaboration duration (number)
* feed type (string)
* complexity level (number)
* cooking type (string)

Feed type
* Glutenfree
* Vegetarian
* Vegan
* Omnivorous

Cooking type
* Steamed
* Oven
* Microwave
* Grill
* Fresh

Complexity level
* Very easy
* Easy
* Medium
* Complex

