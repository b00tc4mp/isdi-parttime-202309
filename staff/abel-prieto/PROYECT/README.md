## HiInit v0.0

      ___ ___  .___ .___  _______   .___ ___________     __      __        ___        
     /   |   \ |   ||   | \      \  |   |\__    ___/    /  \    /  \  ____ \_ |__     
    /    ~    \|   ||   | /   |   \ |   |  |    |       \   \/\/   /_/ __ \ | __ \    
    \    Y    /|   ||   |/    |    \|   |  |    |        \        / \  ___/ | \_\ \   
     \___|_  / |___||___|\____|__  /|___|  |____|         \__/\  /   \___   |___  /   
           \/                    \/                            \/        \/     \/    

HiInit is a `file and data upload web terminal` with the ability to register and log in users in different groups and categories.
Files can be shared between different members of a specific group as well as navigate between the different folders that make up the root.
There will be different roles with their corresponding permissions but only ADMIN user has the CRUD system (create, rewrite, update & delete).

- Last update: 08/02/2024 

## RESUME

- For HiInit v0.0:
- [x] Terminal web with local files and drive online services.
- [x] Personal desktop for each user.
- [x] Upload and download files: PDFs | Text documents | Images ... (for now)
- [x] First version to final proyect ISDI CODERS.

<br>

- For HiInit v1.0:
- [ ] In construction ... ⏳ 

## USER'S TYPE

- Guest: First entry without log - Orange color
- User: Regular user - Blue color
- Root: Administrator - Red color

## USE CASES

`REGULAR USER`

- Create and manage own files & folders | Upload & download files 

`ROOT - ADMIN`

- Manage users | CRUD system | All files & folders | Permissions | Groups 

## COMMANDS

## | TYPE: GUEST |

- First entry on "INITIAL PAGE"

|   Commands  | Function                                                   |
|  ---------  | --------                                                   | 
|  `register` | *Register user with `{ username, email and password }`*    |
|   `login`   | *Log HiInit with credentials `{ email and password }`*     |
|    `help`   | *Only **list** the commands with names & functions*        |
|    `exit`   | *Get back on `initial page`*                               |

## | TYPE: USER |

|   Commands  | Function                                                   |
|  ---------  | --------                                                   |
|   `logout`  | *Exit and `get back` to initial page*                      |
|    `cd .`   | *Move `forward` between folders*                           |
|    `cd ..`  | *Move `back` between folders*                              |
|    `pwd`    | *Show the actual directory*                                |
|     `ls`    | *List the `files on the directory`                         |
|   `mkdir`   | *Create `directory` on the same route*                     |
|  `download` | *`Download` the specific file or document*                 |
|   `upload`  | *`Upload` the specific file or document*                   |
|   `clear`   | *`Clear` the command lines*                                |
|    `help`   | *Only **list** the commands with names & functions*        |

## | TYPE: ROOT - ADMIN |

|   Commands  | Function                                                   |
|  ---------  | --------                                                   |
|    `sudo`   | *Entry on administration mode `CRUD system`*               |
|   `logout`  | *Exit and `get back` to initial page*                      |
|    `cd .`   | *Move `forward` between folders*                           |
|    `cd ..`  | *Move `back` between folders*                              |
|    `pwd`    | *Show the actual directory*                                |
|     `ls`    | *List the `files on the directory`*                        |
|   `mkdir`   | *Create `directory` on the same route*                     |
|  `download` | *`Download` the specific file or document*                 |
|   `upload`  | *`Upload` the specific file or document*                   |
|   `delete`  | *`Delete` files from any user or group*                    |
|   `chmod`   | *Give `permissions` to different groups or users*          |
|   `clear`   | *`Clear` the command lines*                                |
|    `help`   | *Only **list** the commands with names & functions*        |

## STORIES

`INITIAL PAGE`
- Terminal tittle and information about the proyect on initial page with first bar command `ENTER` to entry on APP
- When we press `ENTER` on the initial page, we could see a paragraph with the intrucctions and commands: *"Entry login or register command to switch between the different login and register components"*
- Exit command `only on guest user` to get back on initial page

`REGISTER -> On "GUEST" Mode`
- ***register username + email + password***
- Once we could register on web, the text will disapear and create a new command bar to entry the logg in

`LOGIN -> On "GUEST" Mode`
- ***login email + password***
- When we entry our credentials, the command bar show us our username next to the category `user` or `admin` with its own group color

`DESKTOP`
- Only entry with logged
- **Username@localhost-user** on command bar
- With `mkdir` the user would create new files from root directory: `C:\Desktop`
- 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
