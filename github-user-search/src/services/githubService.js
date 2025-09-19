import.meta.env.VITE_APP_GITHUB_API_KEY

import axios from "axios";

const BASE_URL = "https://api.github.com/users/{username}";

function fetchUserData(username) {
    return axios.get(`https://api.github.com/users/${username}`, {
        headers: {
            'content-type': 'application/json',
        }
    });
}

export default fetchUserData;