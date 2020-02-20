import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// dispatchers with your search component props.
const mapDispatchToProps = {
  handleSearchChange
};

//TODO: define a SearchContainer component which will hook up your action
var SearchContainer = connect(null, mapDispatchToProps)(Search);




//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
