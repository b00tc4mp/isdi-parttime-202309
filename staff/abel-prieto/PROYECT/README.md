## HiInit Web Terminal v0.0.1

      ___ ___  .___ .___  _______   .___ ___________     __      __        ___                    _______      _______        
     /   |   \ |   ||   | \      \  |   |\__    ___/    /  \    /  \  ____ \_ |__           ___  _\   _  \     \   _  \     
    /    ~    \|   ||   | /   |   \ |   |  |    |       \   \/\/   /_/ __ \ | __ \          \  \/ /  /_\  \    /  /_\  \    
    \    Y    /|   ||   |/    |    \|   |  |    |        \        / \  ___/ | \_\ \          \   /\  \_/   \   \  \_/   \   
     \___|_  / |___||___|\____|__  /|___|  |____|         \__/\  /   \___   |___  /           \_/  \_____  / /\ \_____  /   
           \/                    \/                            \/        \/     \/                       \/  \/       \/    

HiInit is a `file and data upload web terminal` with the ability to register and log in users in different groups and categories.
Files can be shared between different members of a specific group as well as navigate between the different folders that make up the root.

There will be different roles with their corresponding permissions but only **ADMIN** user has the `CRUD System` (create, rewrite, update & delete).

- Last update: 08/02/2024 

## RESUME

`For HiInit v0.0`
- [x] Terminal web with local files and drive online services.
- [x] Personal desktop for each user.
- [x] Upload and download files: PDFs | Text documents | Images ... (for now)
- [x] First version to final proyect ISDI CODERS.

<br>

`For HiInit v1.0`
- [ ] In construction ... ⏳ 

## TYPE OF USERS

- Guest: First entry without log - Orange color
- User: Regular user - Blue color
- Root: Administrator - Red color

## CASES - FUNCTIONS 

`REGULAR USER`

- Create and manage own files & folders | Upload & download files 

`ROOT - ADMIN`

- Manage users | CRUD system | All files & folders | Permissions | Groups 

## COMMANDS

## | TYPE - GUEST |

- First entry on "INITIAL PAGE"

|   Commands  | Function                                                   |
|  ---------  | --------                                                   | 
|  `register` | *Register user with `{ username, email and password }`*    |
|   `login`   | *Log HiInit with credentials `{ email and password }`*     |
|    `help`   | *Only **list** the commands with names & functions*        |
|    `exit`   | *Get back on `initial page`*                               |

## | TYPE - USER |

|   Commands  | Function                                                   |
|  ---------  | --------                                                   |
|   `logout`  | *Exit and `get back` to initial page*                      |
|    `cd .`   | *Move `forward` between folders*                           |
|    `cd ..`  | *Move `back` between folders*                              |
|    `pwd`    | *Show the actual directory*                                |
|     `ls`    | *List the `files on the directory`*                        |
|   `mkdir`   | *Create `directory` on the same route*                     |
|  `download` | *`Download` the specific file or document*                 |
|   `upload`  | *`Upload` the specific file or document*                   |
|   `clear`   | *`Clear` the command lines*                                |
|    `help`   | *Only **list** the commands with names & functions*        |

## | TYPE - ADMIN (ROOT) |

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
- First entry on APP with contact information: email, GitHub and Linkedin profile.
- Format command bar: **guest@localhost-guest**
- When we press `ENTER` on the initial page, we could entry to Login and Register page with the intrucctions: *"Entry login or register command to switch between the different login and register components"*
- We could write `HELP` command to show us all list guest commands
- With `EXIT` command we could refresh the initial page **only on guest mode**
- Entry the next component -> **LOGIN | REGISTER**

<br>

`REGISTER -> On "GUEST" Mode`
- ***register username + email + password***
- Once we could register on web, the text will disappear and create a new command bar to entry the logg in

<br>

`LOGIN -> On "GUEST" Mode`
- ***login email + password***
- When we entry our credentials, the command bar show us our username next to the category `user` or `admin` with its own group color
- Entry the next component -> **DESKTOP**
<br>

`DESKTOP -> On "USER" logged`
- Only entry with logged
- Format command bar: **Username@localhost-user** 
- With `mkdir` the users would create new files from root directory: `C:\Desktop`
- If we create a field, the `pwd` command will tell us the fully address
- We can attach or upload files with `upload` command and `download` the own one
- The **ADMIN** could `create or update GROUPS` and add users in them ("localhost" group default)
- The `permissions` are related to the type of group established by ADMIN with `chmod` command
- Users from the same group could `see files from each other` and `download them`
- In all cases, we have the `logout` command to return to **INITIAL PAGE**
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
