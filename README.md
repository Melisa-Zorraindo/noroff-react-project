# E-Commerce Site Built on React

This is an e-commerce site built on React as part of a school project to practise the knowledge acquired during the React course. The site makes use of styled components, zustand for state management, and react hook form. The API used for the project was provided by the school.

The site is a work in progress and has not been delivered or assessed by a teacher yet. A live demo of the current state of the project can be accessed at [https://super-jalebi-36d00a.netlify.app/].

## Usage

To use this project

- clone the repository `git clone https://github.com/Melisa-Zorraindo/noroff-react-project.git`
- change directory `cd noroff-react-project`
- run `npm i` to install package dependencies
- `npm run start` to start the development server

## Features

- E-commerce site built on React.
- Styled components for a modern and consistent look.
- Zustand for efficient and scalable state management.
- React hook form for simple and flexible form handling.

## Requirements

- Homepage with a list of all the products
- Lookahead/autocomplete search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.
- The product page should display the title of the product, the description, the image, the reviews, and the price. If there is a difference between the discountedPrice and price properties, calculate what the discount is and display it on the page.
- Should use a layout component containing a header and a footer.
- The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.
- Clicking on the Cart icon will load the Cart page which will list all of the products as well as a total. The Cart page will have a Checkout button at the button. Clicking this Checkout button then goes to a Checkout success page.
- The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.
- There will be a contact page which will contain a contact form. The contact form should have validation
- The design should be responsive. You’re encouraged to use styled-components or CSS Modules.

## Todos

- [x] Install dependencies:

  - ~~create-react-app~~
  - ~~styled-components~~
  - ~~react-router-dom~~
  - ~~react-hook-form~~

- [x] Remove unused files

- [x] Create Header

- [x] Create Nav

- [x] Create Cart | ~~Links to Checkout page~~

- [x] Create Footer

- [x] Create Layout

- [ ] Create pages:

  - [x] Homepage
  - [x] Product page
  - [ ] Checkout page | Links to checkout success
  - [ ] Checkout Success page | Clears cart | Has link to homepage
  - [x] Contact page

- [x] Route pages

- [x] Create Product | Data to display on CA brief

- [x] Create PrimaryButton | Links to Product page

- [x] Display products on homepage

- [x] Search bar with autocomplete feature filters products by title

- [x] Create cart state that adds product to cart when button clicked

- [x] Create form on contact page:

  - Full name: req, min 3 characters
  - Subject: req, min 3 characters
  - Email: req, must be valid email address
  - Body: req, min 3 characters
  - Submit button

- [x] Log data fetched from form

- [x] Deploy to Netlify

- [ ] Add testing

- [ ] Edit README.md

- [ ] Change favicon

- [ ] Make a loader component for user feedback when fetching data from API

- [ ] Make a feedback component for: error API, checkout success, not found page

- [ ] Restructure files: all styles in same folder

- [ ] Refactor components spread operator Scrimba

- [x] Refactor filter and add it to utils

- [ ] Add pop up for item succesfully added to cart

- [ ] Add pop up to confirm item clearance from cart
