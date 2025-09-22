import.meta.env.VITE_APP_GITHUB_API_KEY

import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

async function fetchUserData(location, minRepo) {
    const query = `location:${location}+repos:>=${minRepo}`;
    return axios.get(`${BASE_URL}${query}`, {
        headers: {
            'content-type': 'application/json',
        }
    });
}

export default fetchUserData;