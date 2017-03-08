/*eslint-disable no-console */
import _ from 'lodash';
import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        //call back that makes a reference to this must be bound
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();

        //fetch weather data here
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    onChange={this.onInputChange}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

SearchBar.propTypes = {
    term: React.PropTypes.string
};

