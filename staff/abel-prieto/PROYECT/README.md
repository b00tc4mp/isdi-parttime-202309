## HiInit v0.0

HiInit is a file and data upload web terminal with the ability to register and log in users in different groups and categories.
Files can be shared between different members of a specific group as well as navigate between the different folders that make up the root.
There will be different roles with their corresponding permissions. On construting at 06/02/2024 !!

## RESUME

- Terminal web with local files and drive online services.
- Personal desktop for each user.
- Upload and download files: PDF's, text, images.

## USER'S TYPE

- Guest: First entry without log
- User: Regular user
- Root: Administrator

## USE CASES

{ REGULAR USER }

- Manage files & folders
- Manage permissions
- Manage groups 

{ ADMIN }

- Manage users (CRUD) 
- Manage files & folders
- Manage permissions
- Manage groups 

## COMMANDS

## | TYPE USER: GUEST |

- First entry
- help: Only list the commands with names & functions
- register: Register user
- login: Login user

## | TYPE USER: USER |

- logout: Exit at initial page
- cd (. | ..): Move back or move forward around files
- ls: List files
- mkdir: Create directories
- download: Download the drive files
- clear: Cleaning the screen
- help: Only list the commands with names & functions

## | TYPE USER: ROOT |

- sudo: Administration user
- logout: Exit at initial page
- cd (. | ..): Move back or move forward around files
- ls: List files
- mkdir: Create directories
- download: Download the drive files
- clear: Cleaning the screen
- help: Only list the commands with names & functions
- upload: Upload files
- chmod: Change permissions

## STORIES
** USE CASES

{ FIRST ENTRY }
- Terminal tittle & information on "INITIAL PAGE" about the proyect with first line command "enter" to entry on APP
- When we press "enter" on the initial page, we could see a paragraph with the intrucctions and commands: "Entry login email and password or entry register to create new user with username email and password"

{ REGISTER -> On "GUEST" }
- register + username + email + password
- Once we could register on web, the text will disapear and create a new command line to entry the logg in

{ LOGIN -> On "GUEST" }
- login + email + password
- When we entry our credentials, the command line show us our username next to the category "user" with its own group color


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
