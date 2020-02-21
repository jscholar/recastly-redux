import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = _.throttle(
      this.props.handleSearchChange,
      1500,
      {leading: false}
    );
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input

          className="form-control"
          type="text"

          onKeyPress={
            (event) => {
              if (event.key === 'Enter') {
                this.handleSearchChange.flush();
              }
            }
          }

          onChange={
            () => this.handleSearchChange($('.form-control').val())
          }

        />
        <button onClick={
          this.handleSearchChange.flush
        }
        className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
