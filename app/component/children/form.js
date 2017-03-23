// Include React
var React = require("react");

// Creating the Form component
var Form  React.createClass ({
	// Here we set a generic state associated with the text being searched for
	getInitialState: function() {
		return {term: " "};
	},
	// This function will respond to the user input
	handleChange: function(event) {
		this.setState ({term: event.target.value});
	},
	// When a user submits...
	handleSubmit: function(event) {
		// prevent the HTML from trying to submit a form if the user hits "Enter" instead of
		// clicking the button
		event.preventDefault();
		// Set the parent to have the search term
		this.props.setTerm(this.state.term);
		this.setState({ term: "" });
	},

	// Here we describe this component's render method
	render: function() {
		return (
			<div class="panel panel-primary">
			  <div class="panel-heading">
			    <h3 class="panel-title text-center" ><strong><i class="fa  fa-list-alt"></i>Search</strong></h3>
			  </div>
			  <div class="panel-body">
			    <form>
			     <label>
			      Topic: 
			      <input type="text" value ={this.state.value} onChange={this.handleChange} />
	             </label>
	             <label>
	              <select value= {this.state.value} onChange={this.handleChange} />
	                <option value="1">1</option>
	                <option value="5" selected>5</option>
	                <option value="10" selected>10</option>
	              </select>
	             </label>
	             <label>
	               Start-Year: 
			       <input type="text" value ={this.state.value} onChange={this.handleChange} />
			     </label>   
			     <label>
	               End-Year: 
			       <input type="text" value ={this.state.value} onChange={this.handleChange} />
			     </label>
			     <br />
                 <button
                   className="btn btn-primary"
                   type="submit">
                   Submit
                   </button>
	            </form>
	          </div>  
	        </div>
		)
	}
});
// Export the component back for use in other files
module.exports = Form;