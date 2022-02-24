# address-book
Front end client for an address book application built in react

# Link
https://address-book-omega.vercel.app/

# Deploment/Running instructions
1. download the project
2. if you don't have npm installed, install that first, otherwise run ```npm i``` (```yarn install``` may also be used) in the project directory
3. once the packages are installed run ```npm start``` (```yarn start```) to start a local server with the project appearing at localhost:3000
4. to see the crypress tests run ```npm run crypress:open``` (```yarn run cypress:open```) and interact with the tests via the gui that opens


# Summary
## Overall Approach

My overall approach for this project was to break down each component to only have one function or job. Once that happened I also decided to use SASS instead of standard CSS because I wanted to be able to use variables throughout the app, to allow ease of changing color pallete and a few styling things (such as the level of border radius).

I made sure to store the contacts, and detailed contact in the local storage to persist across reloads, as well as allow users to "go back" from the details to the orginial contact list, without a whole new set of contacts being reloaded (which would remove the context from the details). I also ended up storing the contact info that was last in the details page to make sure that if someone went to the "/details" page from the url, it will load the last one, instead of just a blank page. There is also a check to see if there is details stored (ie. if someone inputs the "/details" into the url without having to go through the contacts first), it will display a message and show a back btn that will take the user back to the contact page.

I generally tried to make the user experience fairly rounded out and decently well handled.

## Implemented Features
- api call to "randomuser.me" to get user info, namely: name, phone number, email, date of birth, and images
- display a list of contacts with their full name and photo
- when a contact is selected a details page comes up to show: full name, phone number, email, date of birth and their image
- a loader that appears while the api call is happening/finishing
- a back button that takes users either back to the contact list or to the list for the first time

## Future features and estimates
- I would like to make the fields editable in real time
  - estimate: 2-4 hours 
  - blockers: I was able to set up and handle onChange and onSubmit callbacks that worked, but the only thing that didn't work was real time changes to the feild

## Additional Project Features
- I would like to add the ability to add new contacts to the list, completely of the users own making
- I would like to add the ability to change the contact's image
- I would like to add the ability to add new fields like "company" or "address"
- Eventually, if I were continuing to build this project out, I would like to add a "share" feature where the contact can be sent to others via email
- As well as having a sign-up/log in feature and a connected database so that users are able to access their contact from anywhere
