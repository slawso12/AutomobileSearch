import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault(); // prevent default behavior that would cause the page to refresh itself

        this.props.onSubmit(this.state.term);
        
    }
    

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                        placeholder="search" 
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar; 