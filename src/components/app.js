import React from 'react';
import SearchBar from '../components/SearchBar';
import unsplash from '../api/unsplash';
import axios from 'axios';

class App extends React.Component {
    state = { images: [] }

   onSearchSubmit = async (term) => { // make GET request
    const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 469RZQzyhAW3E2GMuR_WndH9Tggv9jbkBwGHyQioDOQ'
            }
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    Found: {this.state.images.length} images
                </div>
            </>
        );
    };
}




export default App;

