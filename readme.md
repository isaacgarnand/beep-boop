# _Beep boop!_

#### _Webpage that returns inputted numbers, 1/24/20_

#### By _**Isaac Garnand**_

## Description

_Webpage with form where user inputs number, number is returned in an array of 0 through the inputted number, some numbers are omitted with string responses (beep!, boop!)._

## Setup/Installation Requirements

* _Install a web browser_
* _Visit http://isaacgarnand.github.io/beep-boop_
##### _or_
* _download a clone of this repository to your machine_
* _drag index.html to your web browser_

## Known Bugs

_none YET_

## Support and contact details

_Contact me at isaac.garnand@gmail.com_

## Specs

Behavior | Input | Output
--- | ---| ---
Takes number input and returns its | 0 | 0
takes number and returns it in an array starting from 0 | 4 | 0,1,2,3,4
replaces 1 with beep! | 4 | 0, beep!, 2, 3, 4
""  "" | 12 | 0, beep!, 2, 3 .... 9, beep!, beep!, beep!
replaces 2 with boop! | 4 | 0, beep!, boop!, 3, 4
""  "" | 13 | 0, beep!, boop!, 3, 4 ... 9, beep!, beep!, boop!, beep!
replaces 3 with "I'm sorry Dave, I can't do that." | 3 | 0, beep!, boop!, I'm sorry Dave, I can't do that.
""  "" | 13 | 0, beep, boop, .... 9, beep!, beep!, boop!, I'm sorry Dave, I can't do that
user enters non-integer | a | alert\(You think this is a game!?\)

## Technologies Used

_Business logic is done with JavaScript_

### License

*Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)*

Copyright (c) 2020 **_Isaac Garnand_**