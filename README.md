# address-book
Front end client for an address book application built in react

# Deploment/Running instructions
1. download the project
2. if you don't have npm installed, install that first, otherwise run ```npm i``` (```yarn install``` may also be used) in the project directory
3. once the packages are installed run ```npm start``` (```yarn start```) to start a local server with the project appearing at localhost:3000
4. to see the crypress tests run ```npm run crypress:open``` (```yarn run cypress:open```) and interact with the tests via the gui that opens


# Summary
## Overall Approach

## Implemented Features
- api call to "randomuser.me" to get user info, namely: name, phone number, email, date of birth, and images
- display a list of contacts with their full name and photo
- when a contact is selected a details page pops up to show: full name, phone number, email, date of birth and their image

## Future features and estimates
- I would like to implement an actual '/details' page, instead of a modal pop up
  - estimate: 5-8 hours 
  - blockers: understanding how to access data from a parent compnent in a child component. I was able to get a router in place and set up, as well as have the index of the contact added, but I wasn't able to figure out how to access the contacts list in the parent component to get the contact's details or pass the object as a param
- I would like to make the fields editable in real time
  - estimate: 2-4 hours 
  - blockers: I was able to set up and handle onChange and onSubmit callbacks that worked, but the only thing that didn't work was real time changes to the feild
## Additional Project Features
- I would like to add the ability to add new contacts to the list, completely of the users own making
- I would like to add the ability to change the contact's image
- I would like to add the ability to add new fields like "company" or "address"
