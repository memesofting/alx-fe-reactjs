import.meta.env.VITE_APP_GITHUB_API_KEY

import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

async function fetchUserData(query) {
    return axios.get(`${BASE_URL}?q=${query}`, {
        headers: {
            'content-type': 'application/json',
        }
    });
}

export default fetchUserData;