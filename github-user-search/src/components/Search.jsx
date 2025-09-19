import { useEffect, useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const searchUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchUserData(user)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Error fetching users: ", err);
        setUserData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <form onSubmit={searchUser}>
        <label htmlFor="searchUser">Search github user</label>
        <input
          type="text"
          value={user}
          placeholder="Enter username"
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && (
        <p>Loading ...</p>
      )}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <p>{userData.location}</p>
        </div>
      )}
    </>
  );
}

export default Search;
