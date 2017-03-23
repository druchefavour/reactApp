# reactApp

Create MongoDB database : 
* Connect to mongoDB by typing mongod in the command line
* Open another cmd and type mongo.
* type use "nytreact" to create a new mongoDB -called "nytreact"

*Create a models folder
	* Use mongoose to create an Article Schema (Article.js)
		* In Article.js First - Require Mongoose 	
		* Create Schema Class
		* Create a means to export our model (module.export and call our model Article Schema)
		*Define ArticleSchema as a new Schema and set up our value pair as arguments of the newSchema object
		Articles have each of the following fields:
			*title (Title of the stored article from nytimes.com)
			*date (publish date and time of the article)
			*url (URL of the article on nytimes.com)
		*Define an optional element required for title and url and set the value as true
		*Define a default element for date and set it at date now.
	*Create a public folder that will hold the index.html and bundle.js files
	* Create a Bootstrap layout for index.html.
	* Inside index.html, set div id = "app" as a root element for our app and add bundle.js script which is our bundled app file. 
  
 * APP FOLDER
   * Create an app folder. Inside the app folder:
     * Create an app.js file
     * Inside the app.js file
       * Include the Main React Dependencies
       * Require react
       * Require react-dom
       * Create config. directory. 
       * Inside the config directory, 
         * Create a route.js file
         * Inside the route.js file,
           * Require the react library
           * Require the react-router module
     * Inside the app folder
       * Create the component directory.
       * Inside the component directory
         * Create children folder
         * Inside the children folder 
           * Create form.js to render the input form for the article search
           * Inside the form component, include React by requiring React
             * Create the form component using "React.createClass"
             * Inside the create class function set a generic state associated with the text being searched for
             * Write the form as CONTROLLED COMPONENTS
             * Set a function "handleChange" that will respond to the user search input
             * Set a function which sets the parent to have the search term when the USER CLICKS SUBMIT and
             * prevents the HTML from trying to submit a form if the user hits "Enter" instead of clicking the button: use 'event.preventDefault()';
             * Describe the form component's render method
             * Export the component back for use in other files



					* Create a main.js
 
 					* Inside main.js, 
 						* Require the react library
 						* Since we are not using ES6 yet, we will use React.createClass helper to define the react component as a plain javascript class
 						* Inside the defined variable Main, render the function using "render: function()"
 						* The render function will return the results of the search and the saved articles. 
  
    
// Export the componen back for use in other files
module.exports = Main;
//route.js******************************************************
// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Child1 = require("../components/children/Child1");
var Child2 = require("../components/children/Child2");
var GrandChild1 = require("../components/children/grandchildren/GrandChild1");
var GrandChild2 = require("../components/children/grandchildren/GrandChild2");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="Child1" component={Child1} >

        {/* Child1 has its own Grandchildren options */}
        <Route path="GrandChild1" component={GrandChild1} />
        <Route path="GrandChild2" component={GrandChild2} />

        <IndexRoute component={GrandChild1} />

      </Route>

      {/* If user selects Child2 then show the appropriate component*/}
      <Route path="Child2" component={Child2} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Child1} />

    </Route>
  </Router>
);


//app.js*****************************************************
// Grabs the Routes
var routes = require("./config/routes");

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
