# Nant Recruitement Challange 2022

## Instructions

As part of your role at Nant Ltd, you will get to work with both the front-end and back-end. The technology stack you will be using will be Typescript with React as our front-end, node express for microservices and MySQL as the database.

For those familiar with Typescript and React, a challange to take away and try has been set up for you. Download the code from this repository. You will require node to be installed on your machine.

Once you have downloaded the code, you can install the required packages for the api and the site via the usual `npm run install` command. To start the API, navigate to the api folder and run the command `npm run start`. To start the development server, navigate to the site folder and run the command `npm run start`. 

You will need to modify the news page so that it shows data from the API in news card components.

## **Hints**
* You only need to modify the NewsGrid.tsx file.
* Use fetch to get data from the API and store the data via the React useState Hook
* Use the React useEffect Hook so that data is requested from the API and stored on initial render of the news grid component
* Map the stored data to the news card component
* Look in the interfaces folder for information about the structure of the data requested from the API

## Once you've finished

Upload your code for the site to Github and send an email with your Github username to amrit.bains@nantltd.co.uk
