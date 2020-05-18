import axios from 'axios';


export default axios.create({ // Customized instance of axios 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 469RZQzyhAW3E2GMuR_WndH9Tggv9jbkBwGHyQioDOQ'
    }
});

