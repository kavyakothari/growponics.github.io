# Growponics
Full Stack E-Commerce App built with React, using Firebase and Stripe API, deployed with Visual Studio 
To view the app, visit:  [https://growponics-github-io.vercel.app/](https://growponics-github-io.vercel.app/)

## Table of Contents

* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Screenshots](#screenshots)
* [Work In Progress](#work-in-progress)
* [Future Updates](#future-updates)

## Built With

<p float = "left">

<img alt="SCSS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />

<img alt="JS" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">

<img alt="Styled Components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />

<img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white" />

<img alt="Redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />

<img alt="Firebase" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />

<img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
  
and Stripe Payment Gateway

</p>

## Getting Started

Follow these simple steps to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/en/) (latest)

### Installation

1. Create an account on [Firebase](https://firebase.google.com/) if you have not yet.
2. Refer this [link](https://www.youtube.com/watch?v=PKwu15ldZ7k) to learn basics of firebase, like how to setup project in React and stuff like that.
3. Create a `.env` file in the <b>root</b> directory of the project. Add environment-specific variables on new lines in the form of `NAME=VALUE` by following same structure as provided in `env.example` file

   ```dosini
    REACT_APP_API_KEY=<api_key>
    REACT_APP_AUTH_DOMAIN=<auth_domain>
    REACT_APP_PROJECT_ID=<project_id>
    REACT_APP_STORAGE_BUCKET=<storage_bucket>
    REACT_APP_MESSAGING_SENDER_ID=<sender_id>
    REACT_APP_APP_ID=<app_id>
    REACT_APP_MEASUREMENT_ID=<measurement_id>
    REACT_APP_DATABASE_URL=<database_url>
    
    # Fill the below variable afterwards
    REACT_APP_PUBLISHABLE_KEY=<stripe_publishable_key>
   ```
   
4. Make an account on [Stripe](https://stripe.com/en-in) and then after login go to dashboard.
5. Now we require the `publishable key` which can be easily found inside the Developers tab like this

   <img src="https://user-images.githubusercontent.com/60403638/120120836-a79d0f80-c1bd-11eb-887b-8bbd29c979a5.jpg"/>
   
   Grab the token and insert it inside `REACT_APP_PUBLISHABLE_KEY` field in the `.env` file of yours

6. Install all the dependencies of `package.json` file by running below command in root directory.

   ```
   npm install
   ```
   
7. Run the following command in the root directory to start the project

   ```
   npm start
   ```
   
🥳Viola! Project starts running at `localhost:3000`

## Screenshots
![Landing page](https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/App%20flow%20Screnshots%2FProductsPage.png?alt=media&token=b2cc51e1-b500-4c11-99b4-504875d971a4)

![SignIn Page](https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/App%20flow%20Screnshots%2FSignInPage.png?alt=media&token=dbd80ee8-4e2f-4517-b7bc-857d2253bd7a)

![Checkout page](https://console.firebase.google.com/project/growponics-52b82/storage/growponics-52b82.appspot.com/files/~2FApp%20flow%20Screnshots)


![Payment page](https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/App%20flow%20Screnshots%2FPaymentPage.png?alt=media&token=6a3e5077-a982-4cd9-af1e-8b304b774e8e))
## Work In Progress
The app is being  updated weekly, as more work needs to be done
Current functionality includes:
* Create an account or Sign In with Google
* Sign In
* Add items to Cart
* Remove item/items from cart
* Payment with Stripe (Testing Mode)

## Future Updates
* Enable PWA
* Product Page
* Improve Overall UI/UX and fix bugs
* Responsive Design
* Recently Viewed Projects

And More! There's always room for improvement!
