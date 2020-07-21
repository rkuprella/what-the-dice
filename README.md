# What The Dice
**In development:** https://whatthedice.netlify.app/

* A dice roller with chat rooms and initiative tracker
* Web app (PWA) with offline functionality
* Further development of my older dice rolling app https://wuerfel.app/

## Built with
* Vue 2
* Tailwindcss
* Express
* Socket.io

## Milestones

- [x] Setting up the store (vuex)
- [x] Building a basic user interface
- [x] App theme changer (dark, light, maybe more)
- [ ] Basic dice roll functionality
- [ ] Translating dice code with RegEx into an array of visual dice
- [ ] Rulesets (D&D5e, WH40k, etc) to choose from with different predefined dice and options (e.g. advantage for D&D5e)
- [ ] Custom transition component
- [x] Custom sound effects
- [ ] Custom dice builder
- [ ] Custom dice sets
- [ ] Custom random generators
- [ ] IndexedDB
- [ ] Implementing user avatars: https://www.npmjs.com/package/@dicebear/avatars-avataaars-sprites
- [ ] Users can customize their avatar seed
- [ ] Sharing UGC via code string
- [ ] Attaching sets of rules to dice (exploding, folding, count > x, etc)
- [ ] ... and tables
- [ ] Valid dice code adds visual dice directly to the table
- [ ] Repeat rolls (a list shows the last 6 rolls with results)
- [ ] Multiple dice tables, each table has its own modifier and unique results
- [ ] Rooms: sharing roll results in real time
- [ ] Rooms: chat
- [ ] Rooms: auto detect if the user enters a chat message or dice code, and giving the option either to roll or to post the dice code in chat
- [ ] Rooms: invitation by creating custom links (like discord) or by using unique room names (blueroom#0293)
- [ ] Rooms: clicking on a user icon shows the last rolls of this user
- [ ] Rooms: initiative tracker / reordering user icons
- [ ] Rooms: characters list on top
- [ ] Left-handed mode: an option to switch ui elements from right to left
- [x] Sound on/off
- [ ] Language i18n
- [ ] Finishing the core app

## Future ideas

- [ ] GM mode
- [ ] Users can enter values for stats, which can be used to modify a roll (str=2 / 2d20+str = 2d20+2)
- [ ] A room starts with certain dice and rulesets, and users have access to the stats system
- [ ] GM: round timer (optional)
- [ ] Rooms: clicking on a user icon additionally shows the current table and the actions of this user
- [ ] Each dice table can be assigned to a certain modifier, e.g. attack, damage or utility, which get assigned automatically when rolling with corresponding selection
- [ ] GM: roll public / private 
- [ ] Enemy characters in initiative order and with a health bar on the characters list
- [ ] Shiny dice skins or animations
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 