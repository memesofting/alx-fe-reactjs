import.meta.env.VITE_APP_GITHUB_API_KEY

import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

async function fetchUserData(location, minRepos, page = 1, per_page = 20) {
    const query = `location:${location}+repos:>=${minRepos}`;
    return axios.get(`${BASE_URL}${query}&per_page=${per_page}&page=${page}`, {
        headers: {
            'content-type': 'application/json',
        }
    });
}

export default fetchUserData;