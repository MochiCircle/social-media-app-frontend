# Revature Social Network ( Mochi Circle )

In Revature's Social Network everyone is friends with everyone else. Users can register, login to the application, and start sharing multimedia with everyone. Registered users are allowed to modify their personal information and upload their profile pictures. The application provides a search feature that allows users to search out friends and look at their profiles. Users are provided with a "feed", in which they can see what everyone is posting and like posts. Users can access and use the application via an interactive client-side single paged application that stores and retrieves multimedia using AWS S3 and consumes a RESTful web service that provides business logic and access to a database.

## Technologies Used

* HTML
* SCSS
* JavaScript
* Typescript
* React
* Redux
* Agile-Scrum
* Enzyme/Jest

## Features

* Logging in
* Registering a new user
* Creating a post
* Liking posts
* View your profile as well as other users
* Can attach images to posts
* .gif file support for profile and post photos
* Youtube video embedding within posts
* Site-wide emoji support
* Can change user settings
* Email verification
* Can reset your password
* Can quickly set your status from profile page
* Can search other users from a search bar
* Theme toggling (light / dark)

To-do list:
* Refreshing the user data on page refresh
* Adding comments to post
* Navigating back to the main webpage after successful email verification
* Better error handling in regards to email verification

## Getting Started

Read below for how to properly start our application.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Images:
<img src="./readme_images/mochiCircle1.jpg" alt="screenshot1" width="200"/><img src="./readme_images/mochiCircle2.jpg" alt="screenshot2" width="200"/>
<img src="./readme_images/mochiCircle3.jpg" alt="screenshot3" width="200"/>
<img src="./readme_images/mochiCircle4.jpg" alt="screenshot4" width="200"/>
<img src="./readme_images/mochiCircle5.jpg" alt="screenshot5" width="200"/>
<img src="./readme_images/mochiCircle6.jpg" alt="screenshot6" width="200"/>
<img src="./readme_images/mochiCircle7.jpg" alt="screenshot7" width="200"/>
<img src="./readme_images/mochiCircle8.jpg" alt="screenshot8" width="200"/>
<img src="./readme_images/mochiCircle9.jpg" alt="screenshot9" width="200"/>
<img src="./readme_images/mochiCircle10.jpg" alt="screenshot10" width="200"/>
<img src="./readme_images/mochiCircle11.jpg" alt="screenshot11" width="200"/>
<img src="./readme_images/mochiCircle12.jpg" alt="screenshot12" width="200"/>
<img src="./readme_images/mochiCircle13.jpg" alt="screenshot13" width="200"/>
<img src="./readme_images/mochiCircle14.jpg" alt="screenshot14" width="200"/>
<img src="./readme_images/mochiCircle15.jpg" alt="screenshot15" width="200"/>
<img src="./readme_images/mochiCircle16.jpg" alt="screenshot16" width="200" height="85" style="overflow:hidden"/>
<img src="./readme_images/mochiCircle17.jpg" alt="screenshot17" width="200" height="95" style="overflow:hidden"/>
<img src="./readme_images/mochiCircle18.jpg" alt="screenshot18" width="200"/>
<img src="./readme_images/mochiCircle19.jpg" alt="screenshot19" width="200"/>
<img src="./readme_images/mochiCircle20.jpg" alt="screenshot20" width="200"/>
<img src="./readme_images/mochiCircle21.jpg" alt="screenshot21" width="200"/>
<img src="./readme_images/mochiCircle22.jpg" alt="screenshot22" width="200" height="95" style="overflow:hidden"/>

## Usage

If a new user, you can select the register button on the left-hand side of the navigation bar. This will toggle the register menu. When you're done entering your information, select the "register" button at the bottom of the form to submit your register request.

If a returning user, you can type your credentials in the two fields present on the home page.

Once logged in, you will be taken to the home page. Here you can view the feed of every user on the site.

Selecting the "<Your Name>'s profile" button on the navigation bar will take you to your own profile page. Here you can view your posts as well as make a post yourself.
  
On the left side of the "post" button is the "file upload" button. If selected, this button will prompt you to select a file. Only image files will be accepted however (.jpg, .gif, .png, .bmp, etc...). Once your image file has been chosen you need to add some text to the text box above before you can submit your post. After adding some text you can then submit the post by pressing the "post" button.

## Contributors

* Carlo Anselmo
* Chris Dee
* Dylan McDonald
* Tucker Fritz
* Steven Chang
