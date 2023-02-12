# Movies in React Phase-2 React Project 

## Learning Goals:

1.	Create a single page application in React. 
2.	Create at least 5 components
3.	Use a json-server to create a RESTful API
4.	There should be at least 3 client-side routes using React Router

### Introduction with the instructions :
I created a single page application in React. To create my project I run npx create-react-app project2
cd project2
npm start.
In the next step, I created a db.json file with almost 40 objects with six attributes.

React allows us to create reusable UI components containing snippets of codes describing what components should render on the DOM. Components are functions. By default, the newly created application already has existed App.js. I modified App.js, added several (5) new components, and named them based on my project topics. 
I created NavBar.js, where I have a button to toggle between the dark and light modes of the page. To update the isDarkMode state for this button I created a state in the App.js and passed the state variable and callback function to NavBar.j. With the help of CSS, the page color changes. 

  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

<NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />


Since App.js is a grandparent component, I used state and fetched GET requests there. So I imported useState and useEffect hooks, initialized states, and wrote GET requests for my movies and genres. 
Also imported all children-sibling components in App.js.


I used useEffect to fetch my data from db.json. UseEffect has two arguments. The first is a callback function, and the second is the dependency array. The dependency array controls when the hook triggers, and because I need to trigger my hook only once when my component first renders, I used an empty dependency array. My callback function runs only once. 

 useEffect(() => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then(setMovies)
  }, []);

 I did the same for my genres array.

Next, I passed movies to my MovieList.js. I got my movies as a prop in MovieList.js, iterated over the movies array, and passed each movie to MoviePage.js as a prop. 

const movieListPage = movies.map(movie =>
	<MoviePage movie={movie} key={movie.id} />
)


In the MoviePage.js I got as a prop a single {movie}. I destructured my movie to make my code cleaner. Destructuring is a JavaScript feature that allows us to extract multiple pieces of data from an array or object and assign them to their variables.

const { id, title, year, poster } = movie;

Now, I could access each property individually and put them on my movie card.
So now I was able to see my movies list on the page. 

I also created a controlled form in the NewMovieForm.js 
“With the controlled component, the input’s value is always driven by the React state. “I imported useState hook , and created new variables based on the inputs in my controlled form. For a new movie to appear on the page and db.json, I created addNewMovie function in the App.js, where I added a new movie and used a spread operator to copy old movies to a new array with a new movie. I created a POST request to keep a new movie in db.json.
 
Because I created a search input in the MovieList.js, I had to create a callback function and a state, that will change every time I type and re-render component so my filtered movie based on the ‘input’ will appear on the page. I created a ‘searchResults’ function where I’m filtering movies and using toLowerCase() method. 



I used some CSS to style my app.












# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




When the app gets put on the page, we need to execute useEffect hook, for GET request only first time when app renders on the page. 

useEffect takes two patameters : 1 callback function, 2 [] 

