# E-Commerce Site Built on React

This is an e-commerce site built on React as part of a school project to practise the knowledge acquired during the React course. The site makes use of styled components, zustand for state management, and react hook form. The API used for the project was provided by the school.

The site is a work in progress and has not been delivered or assessed by a teacher yet. A live demo of the current state of the project can be accessed at https://super-jalebi-36d00a.netlify.app/.

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
- Yup for easy and efficient form validation.

## Project requirements

- Homepage with a list of all the products
- Lookahead/autocomplete search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.
- The product page should display the title of the product, the description, the image, the reviews, and the price. If there is a difference between the discountedPrice and price properties, calculate what the discount is and display it on the page.
- Should use a layout component containing a header and a footer.
- The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.
- Clicking on the Cart icon will load the Cart page which will list all of the products as well as a total. The Cart page will have a Checkout button at the button. Clicking this Checkout button then goes to a Checkout success page.
- The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.
- There will be a contact page which will contain a contact form. The contact form should have validation
- The design should be responsive. You’re encouraged to use styled-components or CSS Modules.
