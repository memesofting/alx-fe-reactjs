import { useEffect, useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [user, setUser] = useState("");
  const [location, setLocation] = useState("");
  const [minRepo, setMinRepo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  const searchUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const queryParts = [];
    if (user) {
      queryParts.push(user);
    }
    if (location) {
      queryParts.push(`location:${location}`);
    }

    if (minRepo) {
      queryParts.push(`repos:>${minRepo}`);
    }

    // const query = queryParts.join("+");

    try {
      const response = await fetchUserData(location, minRepo);
      setUserData(response.data.items || []);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching users: ", err);
      setError("Looks like we can't find the user");
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={searchUser}
        className="flex flex-col justify-center items-center gap-2"
      >
        <label htmlFor="searchUser">Search github user</label>
        <input
          className="bg-gray-300 text-gray-900"
          type="text"
          value={user}
          placeholder="Enter username"
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          className="bg-gray-300 text-gray-900"
          type="text"
          value={location}
          placeholder="Enter location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="minRepo">Minimum repo</label>
        <input
          className="bg-gray-300 text-gray-900"
          type="text"
          value={minRepo}
          placeholder="Enter min repo"
          onChange={(e) => setMinRepo(e.target.value)}
        />
        <button className="bg-green-700" type="submit">
          Search
        </button>
      </form>

      {isLoading && <p>Loading ...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <p>{userData.location}</p>
        </div>
      )} */}

      {userData.length > 0 && (
        <div>
          <h2>Users found: {userData.length}</h2>
          <ul>
            {userData.map((user) => (
              <li key={user.id} className="inline-flex flex-row justify-center items-center p-3">
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img
                  className="justify-center items-center"
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <p className="text-center text-wrap">{user.login}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Search;
